// Task 2 : Basic Calculator
// Take rwo numbers and print their addition,subtraction,multi;lication,division and remainder

const number1 = 20;
const number2 = 10;

// calculation
const addition = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;
const remainder = number1 % number2;

// Print
console.log(`
    Addition       : ${number1} + ${number2} = ${addition}
    Subtraction    : ${number1} - ${number2} = ${subtraction}
    Multiplication : ${number1} * ${number2} = ${multiplication}
    Division       : ${number1} / ${number2} = ${division}
    Remainder      : ${number1} % ${number2} = ${remainder}
`);
