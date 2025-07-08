// ✅ Challenge 02: Reverse a String
// Write a function that takes a string as input and returns it reversed.
// Use built-in methods for a clean and readable solution.

function reverseString(str) {
  return str.split("").reverse().join("");
}

// ✅ Test Cases
console.log(reverseString("Bader"));     // "redaB"
console.log(reverseString("hello"));     // "olleh"
console.log(reverseString(""));          // ""
console.log(reverseString("12345"));     // "54321"
