// Task 25 : Count Odd Numbers
// Count the odd numbers in an array.

const numberArray = [34, 34, 654, 45, 2, 4, 5, 6, 7];

let oddNumberCount = 0;

for (const num of numberArray) {
  if (num % 2 !== 0) {
    oddNumberCount++;
  }
}

console.log(oddNumberCount);
