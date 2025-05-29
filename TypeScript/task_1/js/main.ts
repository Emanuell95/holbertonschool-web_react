// js/main.ts

// 1. Define the Teacher interface
interface Teacher {
  readonly firstName: string;           // can only be set at init
  readonly lastName: string;            // can only be set at init
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // index signature to allow any extra properties
  [key: string]: any;
}

// 2. Create an example teacher and add a 'contract' property
const teacher1: Teacher = {
  firstName: 'Sarah',
  lastName: 'Connor',
  fullTimeEmployee: true,
  location: 'Los Angeles',
};

// thanks to the index signature we can add arbitrary props:
teacher1.contract = true;
teacher1.subject = 'Computer Science';

// 3. Or define with extras inline:
const teacher2: Teacher = {
  firstName: 'Kyle',
  lastName: 'Reese',
  fullTimeEmployee: false,
  yearsOfExperience: 2,
  location: 'Boston',
  contract: false,                    // extra boolean
  skills: ['JavaScript', 'TypeScript'] // extra array
};

// 4. Use them however you like
console.log(teacher1, teacher2);

// 5. Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// 6. Create an example director
const director1: Directors = {
  firstName: 'Ellen',
  lastName: 'Ripley',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 12,               // required by Directors
};

// thanks to the inherited index signature you can still add extras:
director1.department = 'Engineering';

// 7. Log the director
console.log(director1);
