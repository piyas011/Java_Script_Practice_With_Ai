// Task 7: Smallest of Three Numbers
// Find the smallest among three numbers.

const number1 = 23;
const number2 = 34;
const number3 = 45;
let smallestNumber;

if (number1 <= number2 && number1 <= number3) {
  smallestNumber = number1;
} else if (number2 <= number1 && number2 <= number3) {
  smallestNumber = number2;
} else {
  smallestNumber = number3;
}

console.log(`Smallest Number = ${smallestNumber}`);
