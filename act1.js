// script.js

// Array of subjects and their final grades (as numeric values for calculation)
const subjects = [
    { name: 'IP1', grade: 87 },  // Example grade
    { name: 'IM1', grade: 92 },  // Example grade
    { name: 'OOP', grade: 85 },  // Example grade
    { name: 'EDP', grade: 89 },  // Example grade
    { name: 'HCI2', grade: 95 }  // Example grade
];

// Get the UL element where the grades will be displayed
const gradeList = document.getElementById('gradeList');

// Loop through the subjects array and create a list item for each subject
subjects.forEach(subject => {
    const li = document.createElement('li');
    li.textContent = `${subject.name}: ${subject.grade.toFixed(2)}`;
    gradeList.appendChild(li);
});

// Calculate the total numerical average
const totalNumericalAverage = subjects.reduce((sum, subject) => sum + subject.grade, 0) / subjects.length;

// Display the computed average grade
const computedAverageGradeDiv = document.getElementById('computedAverageGrade');
computedAverageGradeDiv.textContent = `Computed Average Grade: ${totalNumericalAverage.toFixed(2)}`;
