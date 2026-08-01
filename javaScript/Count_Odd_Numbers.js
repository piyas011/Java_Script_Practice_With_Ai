// Task 16 : Count Odd Number
// Count how many odd numbers exist from 1 to 100

let countOddNumbers = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    countOddNumbers++;
  }
}
console.log(countOddNumbers);
