// File: 16-clean-numbers.js
// Description: Filter out non-number values from a mixed array
// Date: 2025-07-16

/*
  Task:
  Given a mixed array, return a new array containing only the values of type "number".

  Input:
  [100, "Elzero", null, 200, true, undefined, 50]

  Expected Output:
  [100, 200, 50]
*/

let mixed = [100, "Elzero", null, 200, true, undefined, 50];

let cleanData = mixed.filter((number) => typeof number === 'number');

console.log(cleanData); // [100, 200, 50]
