// Exercise 06: Count Odd Numbers
// Write a function that returns the count of odd numbers in an array
// It should ignore non-numeric values (like strings or null)

function countOdds(arr) {
  return arr.filter(function(num) {
    return typeof num === 'number' && num % 2 !== 0;
  }).length;
};

// Test cases:
console.log(countOdds([1, 2, 3, 4, 5]));           // 3
console.log(countOdds([2, 4, 6, 8]));             // 0
console.log(countOdds([1, 3, 5, 7]));            // 4
console.log(countOdds([]));                     // 0
console.log(countOdds([1, '3', null, 5]));     // 2
