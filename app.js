let currentUnit = 1;
let currentView = 'text'; // 'text' or 'exercises'
let unitCache = {}; // Cache to store loaded unit data
let availableUnits = []; // List of unit numbers

// Parse **bold** markers to <strong> tags
function parseBoldText(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Fetch the list of available units
async function loadUnitsList() {
    try {
        const response = await fetch('data/units.json');
        if (!response.ok) throw new Error('Failed to load units list');
        const data = await response.json();
        availableUnits = data.units;
    } catch (error) {
        console.error('Error loading units list:', error);
        availableUnits = [1, 2]; // Fallback to known units
    }
}

// Fetch unit data dynamically
async function loadUnitData(unitNum) {
    if (unitCache[unitNum]) {
        return unitCache[unitNum];
    }
    try {
        const response = await fetch(`https://mlevy1.github.io/Italian/data/u${unitNum.toString().padStart(2, '0')}.json`);
        if (!response.ok) throw new Error(`Failed to load unit ${unitNum}: ${response.status} ${response.statusText}`);
        const data = await response.json();
        unitCache[unitNum] = data;
        return data;
    } catch (error) {
        console.error(`Error loading unit ${unitNum}:`, error.message, error);
        return null;
    }
}

async function loadData() {
    try {
        const loadingDiv = document.getElementById('loading');
        loadingDiv.style.display = 'block'; // Show loading
        await loadUnitsList(); // Load unit list first
        await renderContent();
        loadingDiv.style.display = 'none'; // Hide loading
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('content').innerHTML = '<p class="error">Error loading content. Please try again.</p>';
        document.getElementById('loading').style.display = 'none';
    }
}

async function renderContent() {
    const contentDiv = document.getElementById('content');
    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'block'; // Show loading
    contentDiv.innerHTML = ''; // Clear content while loading
    const unit = await loadUnitData(currentUnit);
    loadingDiv.style.display = 'none'; // Hide loading
    if (!unit) {
        contentDiv.innerHTML = '<p class="error">Unit not found.</p>';
        return;
    }

    let html = '';
    if (currentView === 'text') {
        html = `
            <h2>${parseBoldText(unit.text.title)}</h2>
            ${unit.text.sections.map(section => `
                <section>
                    <h3>${parseBoldText(section.title)}</h3>
                    ${section.paragraphs.map(p => `
                        ${p.content ? `<p>${p.id ? p.id + ' ' : ''}${parseBoldText(p.content)}</p>` : ''}
                        ${p.list ? `<ul>${p.list.map(item => `<li>${parseBoldText(item)}</li>`).join('')}</ul>` : ''}
                        ${p.table ? `
                            <table>
                                ${p.table.headers && p.table.headers.length > 0 ? `<tr>${p.table.headers.map(h => `<th>${parseBoldText(h)}</th>`).join('')}</tr>` : ''}
                                ${p.table.rows.map(row => `<tr>${row.map(cell => `<td>${parseBoldText(cell)}</td>`).join('')}</tr>`).join('')}
                            </table>
                        ` : ''}
                    `).join('')}
                </section>
            `).join('')}
        `;
    } else {
        html = unit.exercises.map((exercise, exIndex) => `
            <section id="exercise-section-${currentUnit}-${exIndex}">
                <h3>${parseBoldText(exercise.title)}</h3>
                <p>${parseBoldText(exercise.instruction)}</p>
                <p><strong>Examples:</strong> ${exercise.examples.map(ex => parseBoldText(ex)).join('; ')}</p>
                ${exercise.items.map((item, index) => `
                    <div class="exercise-item" id="exercise-item-${currentUnit}-${exIndex}-${index}">
                        ${index + 1}. ${parseBoldText(item.question)} <input type="text" id="answer-${currentUnit}-${exIndex}-${index}" />
                    </div>
                `).join('')}
                <button onclick="checkAnswers(${currentUnit}, ${exIndex}, ${exercise.items.length})">Check Answers</button>
                <button onclick="resetAnswers(${currentUnit}, ${exIndex}, ${exercise.items.length})">Reset</button>
            </section>
        `).join('');
    }
    contentDiv.innerHTML = html;

    // Update navigation links visibility
    document.getElementById('backLink').style.display = currentUnit > 1 ? 'inline' : 'none';
    document.getElementById('nextLink').style.display = currentUnit < availableUnits.length ? 'inline' : 'none';
    document.getElementById('exercisesLink').style.display = currentView === 'text' ? 'inline' : 'none';
}

async function checkAnswers(unitNum, exIndex, itemCount) {
    const unit = await loadUnitData(unitNum);
    const exercise = unit.exercises[exIndex];
    let correctCount = 0;

    // Function to normalize quotes and make case-insensitive
    const normalizeAnswer = (text) => {
        // Replace different quote characters with standard single quote
        return text
            .replace(/[\u2018\u2019`]/g, "'") // Normalize quotes (left quote, right quote, backtick)
            .toLowerCase() // Convert to lowercase for case-insensitive comparison
            .trim(); // Remove leading/trailing whitespace
    };

    for (let i = 0; i < itemCount; i++) {
        const input = document.getElementById(`answer-${unitNum}-${exIndex}-${i}`);
        const container = document.getElementById(`exercise-item-${unitNum}-${exIndex}-${i}`);
        const existingAnswer = container.querySelector('.correct-answer');
        if (existingAnswer) existingAnswer.remove(); // Remove previous correct answer display

        // Normalize both user input and correct answer
        const userAnswer = normalizeAnswer(input.value);
        const correctAnswer = normalizeAnswer(exercise.items[i].answer);

        if (userAnswer === correctAnswer) {
            input.style.backgroundColor = '#d4edda';
            correctCount++;
        } else {
            input.style.backgroundColor = '#f8d7da';
            const correctAnswerDisplay = document.createElement('p');
            correctAnswerDisplay.className = 'correct-answer';
            // Show the original correct answer (not normalized) for display
            correctAnswerDisplay.textContent = `Correct answer: ${exercise.items[i].answer}`;
            container.appendChild(correctAnswerDisplay);
        }
    }

    // Calculate and display percentage
    const percentage = (correctCount / itemCount * 100).toFixed(0);
    const section = document.getElementById(`exercise-section-${unitNum}-${exIndex}`);
    const existingPercentage = section.querySelector('.percentage-correct');
    if (existingPercentage) existingPercentage.remove();
    const percentageDisplay = document.createElement('p');
    percentageDisplay.className = 'percentage-correct';
    percentageDisplay.textContent = `${percentage}% correct (${correctCount}/${itemCount})`;
    section.appendChild(percentageDisplay);
}

function resetAnswers(unitNum, exIndex, itemCount) {
    for (let i = 0; i < itemCount; i++) {
        const input = document.getElementById(`answer-${unitNum}-${exIndex}-${i}`);
        const container = document.getElementById(`exercise-item-${unitNum}-${exIndex}-${i}`);
        const existingAnswer = container.querySelector('.correct-answer');
        if (existingAnswer) existingAnswer.remove();
        input.value = '';
        input.style.backgroundColor = 'white';
    }
    // Remove percentage display
    const section = document.getElementById(`exercise-section-${unitNum}-${exIndex}`);
    const existingPercentage = section.querySelector('.percentage-correct');
    if (existingPercentage) existingPercentage.remove();
}

function navigate(direction) {
    if (direction === 'back' && currentUnit > 1) {
        currentUnit--;
    } else if (direction === 'next' && currentUnit < availableUnits.length) {
        currentUnit++;
    }
    currentView = 'text';
    renderContent();
}

function showContents() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Table of Contents</h2>
        <ul>
            ${availableUnits.map(unitNum => `
                <li>
                    <a href="#" onclick="setUnitAndView(${unitNum}, 'text')">Unit ${unitNum}: Text</a> | 
                    <a href="#" onclick="setUnitAndView(${unitNum}, 'exercises')">Exercises</a>
                </li>
            `).join('')}
        </ul>
    `;
    // Hide exercises link on contents page
    document.getElementById('exercisesLink').style.display = 'none';
}

function setUnitAndView(unitNum, view) {
    currentUnit = unitNum;
    currentView = view;
    renderContent();
}

window.onload = loadData;



