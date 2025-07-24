// Challenge 20: count-letters-in-words.js

/*
  This challenge takes a mixed array of values and counts all characters
  from string elements only.
  - Step 1: Filter out only string values.
  - Step 2: Use reduce() to sum the lengths of all valid strings.
  - Final Result: Return the total number of characters.
*/

function countLetters(array) {
    return array
        .filter((word) => typeof word === 'string')
        .reduce((acc, cur) => acc + cur.length, 0);
}

// Example usage:
let input = ["html", null, "css", "js", 10, false, "react"];

let result = countLetters(input);

console.log(result);  // 14
