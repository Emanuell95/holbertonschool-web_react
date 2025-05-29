// js/main.ts

//Define the Teacher interface
interface Teacher {
  readonly firstName: string;           // can only be set at init
  readonly lastName: string;            // can only be set at init
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // index signature to allow any extra properties
  [key: string]: any;
}

//Create an example teacher and add a 'contract' property
const teacher1: Teacher = {
  firstName: 'Sarah',
  lastName: 'Connor',
  fullTimeEmployee: true,
  location: 'Los Angeles',
};

// thanks to the index signature we can add arbitrary props:
teacher1.contract = true;
teacher1.subject = 'Computer Science';

//Or define with extras inline:
const teacher2: Teacher = {
  firstName: 'Kyle',
  lastName: 'Reese',
  fullTimeEmployee: false,
  yearsOfExperience: 2,
  location: 'Boston',
  contract: false,                     // extra boolean
  skills: ['JavaScript', 'TypeScript'] // extra array
};

//Use them however you like
console.log(teacher1, teacher2);

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

//Create an example director
const director1: Directors = {
  firstName: 'Ellen',
  lastName: 'Ripley',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 12,               // required by Directors
};

// thanks to the inherited index signature you can still add extras:
director1.department = 'Engineering';

// Log the director
console.log(director1);

//Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//Implement printTeacher using that interface
const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

//Example usage
console.log(printTeacher('John', 'Doe')); // J. Doe



// Describe the StudentClass constructor signature…
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

//  …and the StudentClass instance interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement StudentClass to match those two interfaces
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// (Optional) enforce the constructor signature by typing the class itself
const StudentCreator: StudentClassConstructor = StudentClass;

//Example usage
const student = new StudentCreator('Jane', 'Doe');
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName());    // Jane