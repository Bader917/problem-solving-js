// File: 18-capitalize-valid-strings.js
// Description: Capitalize non-numeric strings from a mixed array using filter and map
// Date: 2025-07-15

/*
  Task:
  Given a mixed array, filter out all non-string or numeric string values,
  then return a new array where each valid string is capitalized
  (first letter uppercase, the rest lowercase).

  Input:
  ["aLI", 100, true, "mona", undefined, "SALMA", "10", "-1"]

  Expected Output:
  ["Ali", "Mona", "Salma"]
*/

let mixed = ["aLI", 100, true, "mona", undefined, "SALMA", "10", "-1"];

let names = mixed
  .filter((item) => typeof item === 'string' && Number.isNaN(Number(item)))
  .map((name) => {
    let trimmed = name.trim();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  });

console.log(names); // ["Ali", "Mona", "Salma"];
