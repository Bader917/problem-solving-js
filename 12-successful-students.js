// Challenge 12 - Extract names of successful students using filter + map

let students = [
  { name: "Ali", grade: 75 },
  { name: "Mona", grade: 59 },
  { name: "Samy", grade: 82 },
  { name: "Nora", grade: 48 },
  { name: "Tamer", grade: 90 },
];

let successfulStudents = students
  .filter((student) => student.grade >= 60)
  .map((student) => student.name);

console.log(successfulStudents); // Output: ["Ali", "Samy", "Tamer"];
