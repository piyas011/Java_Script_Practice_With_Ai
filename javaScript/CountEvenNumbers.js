// Task 24 : Count Even Numbers
// Count the even numbers in an array.

const numberArray = [3, 4, 456, 5, 54, 34, 65, 6, 5];

let evenNumber = 0;

// for (let i = 0; i < numberArray.length; i++) {
//   if (numberArray[i] % 2 === 0) {
//     evenNumber++;
//   }
// }

for (const num of numberArray) {
  if (num % 2 === 0) {
    evenNumber++;
  }
}

console.log(evenNumber);
