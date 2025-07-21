// Challenge 19: capitalize-and-count-valid.js
// This function filters valid strings (minimum 3 characters),
// capitalizes the first letter, and returns the result along with a count.

function capitalizeAndCount(array) {
    let language = array
        .filter((item) => {
            return typeof item === "string" && item.trim().length >= 3;
        })
        .map((item) => {
            let trimmed = item.trim();
            return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
        });

    return {
        capitalized: language,
        count: language.length
    };
}

// Example:
let input = [
    "html", "js", null, "css", "py", false, "go", "React", "", 0, "Vue"
];

console.log(capitalizeAndCount(input));
/*
Expected Output:
{
  capitalized: ["Html", "Css", "React", "Vue"],
  count: 4
}
*/=
