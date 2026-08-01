// Task 19 : Prime Number Checker
// Check whether a number is prime

const number = 2;
let isPrime = true;
if (number <= 1) {
  isPrime = false;
}
for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not Prime Number");
}
