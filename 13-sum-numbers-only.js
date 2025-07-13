// Challenge 13 - Sum numeric values only using filter and reduce

let mixed = [100, "Elzero", null, 200, true, undefined, 50];

let finalResult = mixed
  .filter((ele) => typeof ele === "number")
  .reduce((acc, cur) => acc + cur, 0);

console.log(finalResult); // Output: 350
