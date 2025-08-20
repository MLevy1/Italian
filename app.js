async function showContents() {
    console.log('Showing contents');
    const contentDiv = document.getElementById('content');
    
    // Generate the Table of Contents dynamically with unit titles
    let tableOfContents = `<h2 class=\"mb-4\">Table of Contents</h2><ul class=\"list-group\">`;
    
    for (const unitNum of availableUnits) {
        const unitData = await loadUnitData(unitNum); // Fetch unit data for the title
        const unitTitle = unitData?.text?.title || `Unit ${unitNum}`; // Fallback title if data is missing
        
        tableOfContents += `
            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                <span>${unitTitle}</span>\n                <div>\n                    <button class=\"btn btn-link p-0 me-2\" type=\"button\" onclick=\"setUnitAndView(${unitNum}, 'text')\">Text</button>\n                    <button class=\"btn btn-link p-0\" type=\"button\" onclick=\"setUnitAndView(${unitNum}, 'exercises')\">Exercises</button>\n                </div>\n            </li>\n        `;
    }
    
    tableOfContents += `</ul>`;
    contentDiv.innerHTML = tableOfContents;

    const exercisesLink = document.getElementById('exercisesLink');
    if (exercisesLink) exercisesLink.classList.add('d-none');
}