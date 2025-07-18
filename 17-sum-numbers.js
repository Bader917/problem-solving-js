// File: 17-sum-numbers.js
// Description: Sum only the numbers from a mixed array using filter and reduce
// Date: 2025-07-16

/*
  Task:
  Given a mixed array, filter out all non-number values and return the sum of the remaining numbers.

  Input:
  [10, "20", null, 5, "Elzero", undefined, 15, true]

  Expected Output:
  30
*/

let data = [10, "20", null, 5, "Elzero", undefined, 15, true];

let total = data
  .filter(item => typeof item === 'number')
  .reduce((acc, cur) => acc + cur, 0);

console.log(total); // 30
