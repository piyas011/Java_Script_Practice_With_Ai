// Positive, Negative or Zero
// Check whether a number is positive, negative, or zero.

const number = 2;
let result;
if (number > 0) {
  result = "Positive";
} else if (number < 0) {
  result = "Negative";
} else {
  result = "Zero";
}

console.log(`${number} = ${result}`);
