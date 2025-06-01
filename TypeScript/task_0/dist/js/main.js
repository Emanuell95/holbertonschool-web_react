"use strict";
// js/main.ts
// 2. Create two Student objects
var student1 = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 21,
    location: 'New York',
};
var student2 = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 23,
    location: 'San Francisco',
};
// 3. Store them in a typed array
var studentsList = [student1, student2];
// 4. Build and render the table
window.addEventListener('DOMContentLoaded', function () {
    // Create the table element
    var table = document.createElement('table');
    table.border = '1';
    table.style.borderCollapse = 'collapse';
    table.style.textAlign = 'left';
    // Optional: add a header row
    var headerRow = table.insertRow();
    var th1 = document.createElement('th');
    th1.textContent = 'First Name';
    var th2 = document.createElement('th');
    th2.textContent = 'Location';
    headerRow.append(th1, th2);
    // Append one row per student
    for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
        var student = studentsList_1[_i];
        var row = table.insertRow();
        var cellName = row.insertCell();
        cellName.textContent = student.firstName;
        var cellLocation = row.insertCell();
        cellLocation.textContent = student.location;
    }
    // Append the completed table into the document
    document.body.appendChild(table);
});
//# sourceMappingURL=main.js.map