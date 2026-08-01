// Task 15 : Count Even Numbers
// Count how many even numbers exist from 1 to 100

let countEvenNumber = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    countEvenNumber++;
  }
}
console.log(countEvenNumber);
