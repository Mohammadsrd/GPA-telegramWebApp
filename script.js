document.getElementById('addCourse').addEventListener('click', function() {
    const coursesDiv = document.getElementById('courses');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course';
    courseDiv.innerHTML = `
        <input type="text" class="name" placeholder="Course Name (optional)">
        <input type="number" class="grade" placeholder="Grade">
        <input type="number" class="units" placeholder="Units">
        <button class="removeCourse">X</button>
    `;
    const separator = document.createElement('hr');
    coursesDiv.appendChild(courseDiv);
    coursesDiv.appendChild(separator);

    // Add event listener to the new remove button
    courseDiv.querySelector('.removeCourse').addEventListener('click', function() {
        coursesDiv.removeChild(courseDiv);
        coursesDiv.removeChild(separator);
    });
});

document.getElementById('calculateGPA').addEventListener('click', function() {
    const grades = document.getElementsByClassName('grade');
    const units = document.getElementsByClassName('units');
    let totalPoints = 0;
    let totalUnits = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = parseFloat(grades[i].value);
        const unit = parseFloat(units[i].value);

        if (!isNaN(grade) && !isNaN(unit)) {
            totalPoints += grade * unit;
            totalUnits += unit;
        }
    }

    const gpa = totalPoints / totalUnits;
    const result = isNaN(gpa) ? 'Please enter valid grades and units' : `Your GPA is: ${gpa.toFixed(2)}`;
    document.getElementById('result').textContent = result;
});
