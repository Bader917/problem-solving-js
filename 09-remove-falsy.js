// ✅ Exercise 09: Remove Falsy Values
// This function removes all falsy values from the array
// Falsy values include: false, 0, '', null, undefined, NaN

const removeFalsyValues = (arr) => arr.filter(Boolean);

// Test cases:
console.log(removeFalsyValues([0, 1, false, 2, '', 3]));               // [1, 2, 3]
console.log(removeFalsyValues([null, 'hello', undefined, 42]));       // ['hello', 42]
console.log(removeFalsyValues(['', NaN, 'JS']));                      // ['JS']
console.log(removeFalsyValues([]));                                   // []
