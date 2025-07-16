// File: filter-mapping-students.js
// Description: Print names of students aged 18 or older using filter and map
// Date: 2025-07-16

/*
  Task:
  Print the names of students who are 18 years old or older.

  Expected Output:
  ["Mona", "Youssef", "Hana"]
*/

let students = [
  { name: "Ali", age: 17 },
  { name: "Mona", age: 20 },
  { name: "Youssef", age: 18 },
  { name: "Sara", age: 16 },
  { name: "Hana", age: 22 }
];

let biggerThan18 = students
  .filter(student => student.age >= 18)
  .map(student => student.name);

console.log(biggerThan18); // ["Mona", "Youssef", "Hana"]
