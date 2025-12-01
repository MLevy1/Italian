let currentUnit = 1;
let currentView = 'text'; // 'text' or 'exercises'
let unitCache = {}; // Cache to store loaded unit data
let availableUnits = []; // List of unit numbers

// Parse **bold** markers to <strong> tags
function parseBoldText(text) {
    return text
        .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>') // Bold italics
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>');// Italic

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
        availableUnits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]; // Fallback
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
        const response = await fetch(`./data/u${unitNum.toString().padStart(2, '0')}.json`);
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
            console.warn('Loading div not found');
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
        console.log('Unit data not found');
        return;
    }

    let html = '';
    if (currentView === 'text') {
        html = `
            <h2 class="mb-4">${parseBoldText(unit.text.title)}</h2>
            ${unit.text.sections.map(section => `
                <section class="mb-5">
                    <h3 class="mb-3">${parseBoldText(section.title)}</h3>
                    ${section.paragraphs.map(p => `

                        ${p.content ? `
                            <p class="mb-3">
                                ${p.id ? `<span class="h5 fw-bold text-info me-3 align-middle">${p.id}</span>` : ''}
                                ${parseBoldText(p.content)}
                            </p>
                        ` : ''}

                        ${p.list ? `<ul class="list-group list-group-flush">${p.list.map(item => `<li class="list-group-item bg-dark text-light">${parseBoldText(item)}</li>`).join('')}</ul>` : ''}
                        ${p.table ? `
                            <div class="table-responsive">
                                <table class="table table-dark table-bordered table-hover table-sm custom-table">
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
        html = `
        <h2 class="mb-4">${parseBoldText(unit.text.title)}</h2>
        ${unit.exercises.map((exercise, exIndex) => `
            <section class="mb-5">
                <h3 class="mb-3">${parseBoldText(exercise.title)}</h3>
                <p class="mb-3">${parseBoldText(exercise.instruction)}</p>
                <p class="mb-3"><strong>Examples:</strong> ${exercise.examples.map(ex => parseBoldText(ex)).join('; ')}</p>
                
                ${exercise.items.map((item, itemIndex) => {
                    const questionId = `question-${currentUnit}-${exIndex}-${itemIndex}`;
                    return `
                        <div class="exercise-item mb-4 p-3 border rounded bg-dark" id="${questionId}">
                        
                            <div class="mb-2 fw-bold text-light">
                                ${itemIndex + 1}. ${parseBoldText(item.question)}
                            </div>
                            
                                <input type="text" 
                                       class="form-control mb-2 answer-input" 
                                       data-unit="${currentUnit}" 
                                       data-ex="${exIndex}" 
                                       data-item="${itemIndex}" 
                                />
                            
                            <div class="d-flex gap-2 mt-2">
                                <button class="btn btn-sm btn-success check-btn" 
                                        data-question-id="${questionId}">
                                    Check Answer
                                </button>
                                <button class="btn btn-sm btn-secondary reset-btn" 
                                        data-question-id="${questionId}">
                                    Reset
                                </button>
                            </div>
                            
                            <div class="feedback mt-2"></div>
                        </div>
                    `;
                }).join('')}
            </section>
        `).join('')}
    `;
    }
    contentDiv.innerHTML = html;

    // === NEW: Attach event listeners to per-question buttons ===
    document.querySelectorAll('.check-btn').forEach(btn => {
        btn.onclick = function() {
            const qid = this.dataset.questionId;
            checkSingleAnswer(qid);
        };
    });

    document.querySelectorAll('.reset-btn').forEach(btn => {
        btn.onclick = function() {
            const qid = this.dataset.questionId;
            resetSingleAnswer(qid);
        };
    });

    // Update navigation links visibility
    const backLink = document.getElementById('backLink');
    const nextLink = document.getElementById('nextLink');
    const exercisesLink = document.getElementById('exercisesLink');
    const textLink = document.getElementById('textLink');
    console.log(`Updating nav: currentUnit=${currentUnit}, availableUnits=${availableUnits}, currentView=${currentView}`);
    if (backLink) backLink.classList.toggle('d-none', currentUnit <= 1);
    if (nextLink) nextLink.classList.toggle('d-none', currentUnit >= availableUnits.length);
    if (exercisesLink) exercisesLink.classList.toggle('d-none', currentView !== 'text');
    if (textLink) textLink.classList.toggle('d-none', currentView == 'text');
}

async function checkAnswers(unitNum, exIndex, itemCount) {
    console.log(`Checking answers for unit ${unitNum}, exercise ${exIndex}`);
    const unit = await loadUnitData(unitNum);
    const exercise = unit.exercises[exIndex];
    let correctCount = 0;

    const normalizeAnswer = (text) => {
        return text.replace(/[\u2018\u2019`]/g, "'").toLowerCase().trim();
    };

    for (let i = 0; i < itemCount; i++) {
        const input = document.getElementById(`answer-${unitNum}-${exIndex}-${i}`);
        const container = document.getElementById(`exercise-item-${unitNum}-${exIndex}-${i}`);
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
        const existingAnswer = container.querySelector('.correct-answer');
        if (existingAnswer) existingAnswer.remove();
        input.value = '';
        input.classList.remove('is-valid', 'is-invalid');
    }
    const section = document.getElementById(`exercise-section-${unitNum}-${exIndex}`);
    const existingPercentage = section.querySelector('.percentage-correct');
    if (existingPercentage) existingPercentage.remove();
}


// Check a single question
async function checkSingleAnswer(questionId) {
    const container = document.getElementById(questionId);
    if (!container) return;

    const input = container.querySelector('.answer-input');
    const feedback = container.querySelector('.feedback');
    const unitNum = parseInt(input.dataset.unit);
    const exIndex = parseInt(input.dataset.ex);
    const itemIndex = parseInt(input.dataset.item);

    const unit = await loadUnitData(unitNum);
    if (!unit || !unit.exercises[exIndex]?.items[itemIndex]) {
        feedback.innerHTML = '<span class="text-danger">Error loading answer.</span>';
        return;
    }

    const correctRaw = unit.exercises[exIndex].items[itemIndex].answer;

    // Convert single string → array for uniform handling
    const correctAnswers = Array.isArray(correctRaw) ? correctRaw : [correctRaw];

    // Normalize function (smart quotes, trim, lowercase)
    const normalize = (text) => {
        return text
            .replace(/[\u2018\u2019]/g, "'")
            .replace(/[\u201C\u201D]/g, '"')
            .replace(/[-–—]/g, '-')  // en-dash, em-dash
            .toLowerCase()
            .trim();
    };

    const userAnswer = normalize(input.value);
    const normalizedCorrect = correctAnswers.map(ans => normalize(ans));

    // Clear previous styles & feedback
    input.classList.remove('is-valid', 'is-invalid');
    feedback.innerHTML = '';

    if (normalizedCorrect.includes(userAnswer)) {
        input.classList.add('is-valid');
        feedback.innerHTML = '<span class="text-success fw-bold">Correct!</span>';
    } else {
        input.classList.add('is-invalid');

        let message = '<span class="text-danger">Incorrect.</span><br>';
        if (correctAnswers.length === 1) {
            message += `<small class="text-warning">Correct answer: <strong>${correctAnswers[0]}</strong></small>`;
        } else {
            message += `<small class="text-warning">Acceptable answers:<br>`;
            message += correctAnswers.map(a => `• <strong>${a}</strong>`).join('<br>');
            message += `</small>`;
        }
        feedback.innerHTML = message;
    }
}

// Reset a single question
function resetSingleAnswer(questionId) {
    const container = document.getElementById(questionId);
    if (!container) return;

    const input = container.querySelector('.answer-input');
    const feedback = container.querySelector('.feedback');

    input.value = '';
    input.classList.remove('is-valid', 'is-invalid');
    feedback.innerHTML = '';
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


function setUnitAndView(unitNum, view) {
    console.log(`Setting unit ${unitNum}, view ${view}`);
    currentUnit = unitNum;
    currentView = view;
    renderContent();
}

// Ensure DOM is fully loaded before binding events
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app');
    loadData();
});

async function showContents(){
    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
        console.error('Content div not found');
        return;
    }
    
    let tableHTML = '<h2 class="mb-4">Table of Contents</h2><table class="table table-dark table-striped table-hover">';
    
    try {

const unitPromises = availableUnits.map(async (unitNum) => {
  try {
    const unit = await loadUnitData(unitNum);
    const title = unit?.text?.title
      ? sanitizeHTML(parseBoldText(unit.text.title))
      : `Unit ${unitNum}`;




return `
      <tr>
        <td class="text-light fw-bold text-center align-middle">
          Unit ${unitNum}
        </td>
        <td class="align-middle">
          <button
            class="btn btn-link text-light text-start text-decoration-none unit-button mt-0"
            type="button"
            data-unit="${unitNum}"
          >
            ${title}
          </button>
        </td>
      </tr>`;


  } catch (error) {
    console.error(`Error loading unit ${unitNum}:`, error);
    return `
      <tr>
        <td>Unit ${unitNum}</td>
        <td>Error loading unit</td>
      </tr>`;
  }
});
        
        const unitItems = await Promise.all(unitPromises);
        tableHTML += unitItems.join('') + '</table>';
        
        contentDiv.innerHTML = tableHTML;
        
        const buttons = contentDiv.querySelectorAll('.unit-button');
        
        buttons.forEach(button => {
            const unitNum = button.getAttribute('data-unit');
            button.addEventListener('click', () => setUnitAndView(unitNum, 'text'));
        });
        
        const exercisesLink = document.getElementById('excercisesLink');
        if (exercisesLink) {
            exercisesLink.classList.add('d-none');
        }
    } catch (error) {
        console.error('error:', error);
        contentDiv.innerHTML = '<p>TOC Error</p>';
    }

}

// Helper function to sanitize HTML (basic example, use a library like DOMPurify in production)
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}