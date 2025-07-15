// # 🧠 Problem: Count Letters

// Write a function that counts how many alphabetic characters (a-z, A-Z) exist in a given string.

// ---

// Function to count English letters only (a-z or A-Z)
const countLetters = (str) =>
  [...str].filter((char) => {
    const code = char.toLowerCase().charCodeAt(0);
    return code >= 97 && code <= 122;
  }).length;

// Example usage:
console.log(countLetters("12!Bader@*12")); // Output: 5

// ## ✅ Example

// countLetters("123abc!")        // 3
// countLetters("Hello, World!")  // 10
// countLetters("   ")            // 0
// countLetters("99 Bottles")     // 7
