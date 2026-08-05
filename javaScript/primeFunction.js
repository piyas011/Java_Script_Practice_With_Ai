// Prime Function
// Return whether a number is primeFunction.

const number = Math.ceil(Math.random() * 100);
function primeNumber(number) {
  if (number <= 1) {
    return `${number} is Not Prime`;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return `${number} is Not Prime`;
    }
  }
  return `${number} is Prime Number`;
}
console.log(primeNumber(number));
