// ✅ Challenge 01: Sum of Two Numbers
// Write a function that takes two arguments and returns their sum
// If either input is not a number, return a message indicating invalid input

function sum(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    return "Invalid input: both arguments must be numbers.";
  }
}

// ✅ Test Cases
console.log(sum(3, 5));        // 8
console.log(sum(-1, 10));      // 9
console.log(sum(0, 0));        // 0
console.log(sum("a", 4));      // Invalid input: both arguments must be numbers.
console.log(sum(7, undefined)); // Invalid input: both arguments must be numbers.
