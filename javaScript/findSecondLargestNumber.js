const numbers = [100, 90, 80, 70];

let firstNumber = -Infinity;
let secondNumber = -Infinity;

for (const num of numbers) {
  if (firstNumber < num) {
    secondNumber = firstNumber;
    firstNumber = num;
  } else if (num > secondNumber && num !== firstNumber) {
    secondNumber = num;
  }
}

if (secondNumber === -Infinity) {
  console.log("No Second Largest Number");
} else {
  console.log(`First Number =  ${firstNumber}`);
  console.log(`Second Largest Number = ${secondNumber} `);
}
