// ✅ Challenge 03: Is Palindrome?
// Write a function that returns true if the input string is a palindrome
// (i.e., reads the same backward as forward), otherwise return false.

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// ✅ Test Cases
console.log(isPalindrome("121"));       // true
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("noon"));      // true
console.log(isPalindrome("Bader"));     // false
