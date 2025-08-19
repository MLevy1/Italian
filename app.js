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
        console.log('Loading units list...');
        const response = await fetch('data/units.json');
        if (!response.ok) throw new Error(`Failed to load units list: ${response.status}`);
        const data = await response.json();
        availableUnits = data.units;
        console.log('Units list loaded:', availableUnits);
    } catch (error) {
        console.error('Error loading units list:', error);
        availableUnits = [1, 2]; // Fallback
    }
}

// Fetch unit data dynamically
async function loadUnitData(unitNum) {
    if (unitCache[unitNum]) {
        console.log(`Using cached data for unit ${unitNum}`);
        return unitCache[unitNum];
    }
    try {
        console.log(`Fetching unit ${unitNum}...`);
        const response = await fetch(`https://mlevy1.github.io/Italian/data/u${unitNum.toString().padStart(2, '0')}.json`);
        if (!response.ok) throw new Error(`Failed to load unit ${unitNum}: ${response.status} ${response.statusText}`);
        const data = await response.json();
        unitCache[unitNum] = data;
        console.log(`Unit ${unitNum} loaded successfully`);
        return data;
    } catch (error) {
        console.error(`Error loading unit ${unitNum}:`, error);
        return null;
    }
}

async function loadData() {
    try {
        console.log('Starting loadData...');
        const loadingDiv = document.getElementById('loading');
        if (loadingDiv) {
            loadingDiv.style.display = 'block';
        } else {
            console.warn('Loading div not found in loadData');
        }
        await loadUnitsList();
        await renderContent();
        if (loadingDiv) {
            loadingDiv.style.display = 'none';
        }
        console.log('loadData completed');
    } catch (error) {
        console.error('Error in loadData:', error);
        document.getElementById('content').innerHTML = '<p class="text-danger fw-bold">Error loading content. Please try again.</p>';
        const loadingDiv = document.getElementById('loading');
        if (loadingDiv) {
            loadingDiv.style.display = 'none';
        }
    }
}

async function renderContent() {
    console.log(`Rendering content for unit ${currentUnit}, view: ${currentView}`);
    const contentDiv = document.getElementById('content');
    const loadingDiv = document.getElementById('loading');
    if (!contentDiv) {
        console.error('Content div not found');
        return;
    }
    if (loadingDiv) {
        loadingDiv.style.display = 'block';
    } else {
        console.warn('Loading div not found in renderContent');
    }
    contentDiv.innerHTML = '';
    const unit = await loadUnitData(currentUnit);
    if (loadingDiv) {
        loadingDiv.style.display = 'none';
    }
    if (!unit) {
        contentDiv.innerHTML = '<p class="text-danger fw-bold">Unit not found.</p>';
        console.error('Unit data not found');
        return;
    }

    let html = '';
    if (currentView === 'text') {
        if (!unit.text || !unit.text.title || !unit.text.sections) {
            console.error('Invalid or missing text data for unit', currentUnit);
            contentDiv.innerHTML = '<p class="text-danger fw-bold">Error: Invalid text data for this unit.</p>';
            return;
        }
        html = `
            <h2 class="mb-4">${parseBoldText(unit.text.title)}</h2>
            ${unit.text.sections.map(section => `
                <section class="mb-5">
                    <h3 class="mb-3">${parseBoldText(section.title)}</h3>
                    ${section.paragraphs.map(p => `
                        ${p.content ? `<p>${p.id ? p.id + ' ' : ''}${parseBoldText(p.content)}</p>` : ''}
                        ${p.list ? `<ul class="list-group list-group-flush">${p.list.map(item => `<li class="list-group-item">${parseBoldText(item)}</li>`).join('')}</ul>` : ''}
                        ${p.table ? `
                            <div class="table-responsive">
                                <table class="table table-bordered table-hover table-sm custom-table">
                                    ${p.table.headers && p.table.headers.length > 0 ? `
                                        <thead>
                                            <tr>${p.table.headers.map(h => `<th scope="col" class="text-wrap">${parseBoldText(h)}</th>`).join('')}
                                            </tr>
                                        </thead>
                                    ` : ''}
                                    <tbody>
                                        ${p.table.rows.map(row => `
                                            <tr>${row.map(cell => `<td class="text-wrap">${parseBoldText(cell)}</td>`).join('')}
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        ` : ''}
                    `).join('')}
                </section>
            `).join('')}
        `;
    } else {
        if (!unit.exercises || !Array.isArray(unit.exercises) || unit.exercises.length === 0) {
            console.error('Invalid or missing exercises data for unit', currentUnit);
            contentDiv.innerHTML = '<p class="text-danger fw-bold">Error: No exercises available for this unit.</p>';
            return;
        }
        html = unit.exercises.map((exercise, exIndex) => `
            <section id="exercise-section-${currentUnit}-${exIndex}" class="mb-5">
                <h3 class="mb-3">${parseBoldText(exercise.title)}</h3>
                <p class="mb-3">${parseBoldText(exercise.instruction)}</p>
                <p class="mb-3"><strong>Examples:</strong> ${exercise.examples.map(ex => parseBoldText(ex)).join('; ')}</p>
                ${exercise.items.map((item, index) => `
                    <div class="exercise-item mb-3 d-flex align-items-center" id="exercise-item-${currentUnit}-${exIndex}-${index}">
                        <span class="me-2">${index + 1}. ${parseBoldText(item.question)}</span>
                        <input type="text" class="form-control w-auto" id="answer-${currentUnit}-${exIndex}-${index}" />
                    </div>
                `).join('')}
                <div class="d-flex gap-2">
                    <button class="btn btn-primary" type="button" onclick="checkAnswers(${currentUnit}, ${exIndex}, ${exercise.items.length})">Check Answers</button>
                    <button class="btn btn-secondary" type="button" onclick="resetAnswers(${currentUnit}, ${exIndex}, ${exercise.items.length})">Reset</button>
                </div>
            </section>
        `).join('');
    }
    console.log('Generated HTML length:', html.length, 'First 100 chars:', html.substring(0, 100));
    contentDiv.innerHTML = html;
    console.log('Content div updated');

    // Update navigation links visibility
    const backLink = document.getElementById('backLink');
    const nextLink = document.getElementById('nextLink');
    const toggleViewLink = document.getElementById('toggleViewLink');
    console.log(`Updating nav: currentUnit=${currentUnit}, availableUnits=${availableUnits}, currentView=${currentView}`);
    if (backLink) backLink.classList.toggle('d-none', currentUnit <= 1);
    if (nextLink) nextLink.classList.toggle('d-none', currentUnit >= availableUnits.length);
    if (toggleViewLink) {
        toggleViewLink.classList.toggle('d-none', false); // Always show toggle link when not on contents
        toggleViewLink.textContent = currentView === 'text' ? 'Show Exercises' : 'Show Text';
    } else {
        console.warn('toggleViewLink not found in DOM');
    }
}

async function checkAnswers(unitNum, exIndex, itemCount) {
    console.log(`Checking answers for unit ${unitNum}, exercise ${exIndex}`);
    const unit = await loadUnitData(unitNum);
    if (!unit || !unit.exercises || !unit.exercises[exIndex]) {
        console.error('Invalid unit or exercise data');
        return;
    }
    const exercise = unit.exercises[exIndex];
    let correctCount = 0;

    const normalizeAnswer = (text) => {
        return text.replace(/[\u2018\u2019`]/g, "'").toLowerCase().trim();
    };

    for (let i = 0; i < itemCount; i++) {
        const input = document.getElementById(`answer-${unitNum}-${exIndex}-${i}`);
        const container = document.getElementById(`exercise-item-${unitNum}-${exIndex}-${i}`);
        if (!input || !container) {
            console.warn(`Input or container not found for exercise-item-${unitNum}-${exIndex}-${i}`);
            continue;
        }
        const existingAnswer = container.querySelector('.correct-answer');
        if (existingAnswer) existingAnswer.remove();

        const userAnswer = normalizeAnswer(input.value);
        const correctAnswer = normalizeAnswer(exercise.items[i].answer);

        if (userAnswer === correctAnswer) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            correctCount++;
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            const correctAnswerDisplay = document.createElement('div');
            correctAnswerDisplay.className = 'correct-answer text-success mt-1';
            correctAnswerDisplay.textContent = `Correct answer: ${exercise.items[i].answer}`;
            container.appendChild(correctAnswerDisplay);
        }
    }

    const percentage = (correctCount / itemCount * 100).toFixed(0);
    const section = document.getElementById(`exercise-section-${unitNum}-${exIndex}`);
    const existingPercentage = section.querySelector('.percentage-correct');
    if (existingPercentage) existingPercentage.remove();
    const percentageDisplay = document.createElement('p');
    percentageDisplay.className = 'percentage-correct fw-bold mt-3';
    percentageDisplay.textContent = `${percentage}% correct (${correctCount}/${itemCount})`;
    section.appendChild(percentageDisplay);
    console.log(`Answers checked: ${percentage}% correct`);
}

function resetAnswers(unitNum, exIndex, itemCount) {
    console.log(`Resetting answers for unit ${unitNum}, exercise ${exIndex}`);
    for (let i = 0; i < itemCount; i++) {
        const input = document.getElementById(`answer-${unitNum}-${exIndex}-${i}`);
        const container = document.getElementById(`exercise-item-${unitNum}-${exIndex}-${i}`);
        if (!input || !container) {
            console.warn(`Input or container not found for exercise-item-${unitNum}-${exIndex}-${i}`);
            continue;
        }
        const existingAnswer = container.querySelector('.correct-answer');
        if (existingAnswer) existingAnswer.remove();
        input.value = '';
        input.classList.remove('is-valid', 'is-invalid');
    }
    const section = document.getElementById(`exercise-section-${unitNum}-${exIndex}`);
    const existingPercentage = section.querySelector('.percentage-correct');
    if (existingPercentage) existingPercentage.remove();
}

function navigate(direction) {
    console.log(`Navigating ${direction}`);
    if (direction === 'back' && currentUnit > 1) {
        currentUnit--;
    } else if (direction === 'next' && currentUnit < availableUnits.length) {
        currentUnit++;
    }
    currentView = 'text';
    renderContent();
}

function toggleView() {
    console.log(`Toggling view from ${currentView} to ${currentView === 'text' ? 'exercises' : 'text'}`);
    currentView = currentView === 'text' ? 'exercises' : 'text';
    renderContent();
}

function showContents() {
    console.log('Showing contents');
    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
        console.error('Content div not found in showContents');
        return;
    }
    contentDiv.innerHTML = `
        <h2 class="mb-4">Table of Contents</h2>
        <ul class="list-group">
            ${availableUnits.map(unitNum => `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>Unit ${unitNum}</span>
                    <div>
                        <button class="btn btn-link p-0 me-2" type="button" onclick="setUnitAndView(${unitNum}, 'text')">Text</button>
                        <button class="btn btn-link p-0" type="button" onclick="setUnitAndView(${unitNum}, 'exercises')">Exercises</button>
                    </div>
                </li>
            `).join('')}
        </ul>
    `;
    const toggleViewLink = document.getElementById('toggleViewLink');
    if (toggleViewLink) {
        toggleViewLink.classList.add('d-none');
    } else {
        console.warn('toggleViewLink not found when showing contents');
    }
}

function setUnitAndView(unitNum, view) {
    console.log(`Setting unit ${unitNum}, view ${view}`);
    currentUnit = unitNum;
    currentView = view;
    renderContent();
}

// Ensure DOM is fully loaded before binding events
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app');
    const toggleViewLink = document.getElementById('toggleViewLink');
    if (toggleViewLink) {
        toggleViewLink.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Toggle view link clicked via event listener');
            toggleView();
        });
    } else {
        console.error('toggleViewLink not found during DOMContentLoaded');
    }
    loadData();
});