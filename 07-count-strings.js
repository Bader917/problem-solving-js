// ✅ Exercise 07: Count String Elements
// This function takes an array and returns the number of elements that are strings

const countStrings = (arr) => arr.filter((str) => typeof str === 'string').length;

// Test cases:
console.log(countStrings(["a", 1, true, "hello", 5, null]));   // 2
console.log(countStrings(["JS", "HTML", "CSS"]));             // 3
console.log(countStrings([1, 2, 3]));                        // 0
console.log(countStrings([]));                              // 0
