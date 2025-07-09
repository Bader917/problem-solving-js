// ✅ Challenge 04: Count Vowels
// Write a function that takes a string and returns the number of vowels (a, e, i, o, u).
// The check should be case-insensitive.

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  if (typeof str !== 'string') {
    return `Please write a sentence, not a number.`;
  }

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

// ✅ Test Cases
console.log(countVowels("Bader"));        // 2 (a, e)
console.log(countVowels("EDUCATION"));    // 5 (e, u, a, i, o)
console.log(countVowels("hello"));        // 2 (e, o)
console.log(countVowels("why?"));         // 0
console.log(countVowels(12345));          // Please write a sentence, not a number.
