// get button ids
const btnAddField = document.getElementById("btn-add-field");

// Create field
function createField() {
    const divRow = document.createElement("div");
    divRow.setAttribute("class", "row mb-3")

    // Subjects
    const divSubject = document.createElement("div");
    divSubject.setAttribute("class", "col");

    const inpSubject = document.createElement("input");
    inpSubject.type = "text";
    inpSubject.setAttribute("class", "form-control subject");

    // Units
    const divUnits = document.createElement("div");
    divUnits.setAttribute("class", "col");

    const inpUnits = document.createElement("input");
    inpUnits.type = "number";
    inpUnits.setAttribute("class", "form-control units");

    // Grades
    const divGrades = document.createElement("div");
    divGrades.setAttribute("class", "col");

    const inpGrades = document.createElement("input");
    inpGrades.type = "number";
    inpGrades.setAttribute("class", "form-control grades");

    // Append fields to divs
    divSubject.appendChild(inpSubject);
    divUnits.appendChild(inpUnits);
    divGrades.appendChild(inpGrades);

    // Append divs to row
    divRow.appendChild(divSubject);
    divRow.appendChild(divUnits);
    divRow.appendChild(divGrades);

    // Append row to main div
    document.getElementById("input-fields").appendChild(divRow);

}

// Multiply grades & units
function calculateGrades() {
    const subjects = document.querySelectorAll(".subject");
    const units = document.querySelectorAll(".units");
    const grades = document.querySelectorAll(".grades");

    let totalWeighted = 0;
    let totalUnits = 0;

    units.forEach((unitInput, index) => {
        const unit = parseFloat(unitInput.value) || 0;
        const grade = parseFloat(grades[index].value) || 0;
        totalWeighted += unit * grade;
        totalUnits += unit;
    });

    let gwa = totalUnits ? (totalWeighted / totalUnits).toFixed(3) : 0;
    displayResult(gwa);

}

// Get the display-result div and write the result
function displayResult(gwa) {
    const divDisplayResult = document.getElementById("display-result");
    divDisplayResult.innerHTML = `
        <h4 class="display-6 text-center">Your general weighted average is</h4>
        <h1 class="display-4 text-center fw-bold" id="result">${gwa}</h1>
    `;

}