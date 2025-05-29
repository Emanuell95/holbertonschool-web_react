// js/main.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two Student objects
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 21,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 23,
  location: 'San Francisco',
};

// 3. Store them in a typed array
const studentsList: Student[] = [student1, student2];

// 4. Build and render the table
window.addEventListener('DOMContentLoaded', () => {
  // Create the table element
  const table: HTMLTableElement = document.createElement('table');
  table.border = '1';
  table.style.borderCollapse = 'collapse';
  table.style.textAlign = 'left';

  // Optional: add a header row
  const headerRow: HTMLTableRowElement = table.insertRow();
  const th1: HTMLTableCellElement = document.createElement('th');
  th1.textContent = 'First Name';
  const th2: HTMLTableCellElement = document.createElement('th');
  th2.textContent = 'Location';
  headerRow.append(th1, th2);

  // Append one row per student
  for (const student of studentsList) {
    const row: HTMLTableRowElement = table.insertRow();
    const cellName: HTMLTableCellElement = row.insertCell();
    cellName.textContent = student.firstName;
    const cellLocation: HTMLTableCellElement = row.insertCell();
    cellLocation.textContent = student.location;
  }

  // Append the completed table into the document
  document.body.appendChild(table);
});
