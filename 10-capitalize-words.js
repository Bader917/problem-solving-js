// 10-capitalize-words.js
// Challenge: Capitalize the first letter of each word in a sentence.

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "")
    .join(" ");
}

// Test cases
console.log(capitalizeWords("hello world"));            // Hello World
console.log(capitalizeWords("javascript is fun"));      // Javascript Is Fun
console.log(capitalizeWords("  multiple   spaces "));   // Multiple   Spaces
console.log(capitalizeWords(""));                       // ""
