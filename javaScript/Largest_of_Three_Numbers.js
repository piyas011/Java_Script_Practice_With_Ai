//   Largest of three Numbers
// Find the largest Number

const number1 = 54;
const number2 = 54;
const number3 = 45;
let largestNumber;

if (number1 >= number2 && number1 >= number3) {
  largestNumber = number1;
} else if (number2 >= number1 && number2 >= number3) {
  largestNumber = number2;
} else {
  largestNumber = number3;
}

console.log(`Largest Number =  ${largestNumber}`);
