// ✅ Exercise 08: Sum Positive Numbers
// This function takes an array and returns the sum of all positive numbers.
// It ignores non-numeric values and values less than or equal to zero.

function sumPositiveNumbers(arr) {
    return arr
        .filter((ele) => typeof ele === 'number' && ele > 0)
        .reduce((acc, cur) => acc + cur, 0);
}

// Test cases:
console.log(sumPositiveNumbers([1, -2, 3, 4, -5]));         // 8
console.log(sumPositiveNumbers([-1, -2, -3]));             // 0
console.log(sumPositiveNumbers([5, 10, 15]));             // 30
console.log(sumPositiveNumbers([]));                     // 0
console.log(sumPositiveNumbers([1, "4", null, 5]));     // 6
