// Tast 21 : Sum of an Array
// Find the sum of all elements.

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
// for (let i = 0; i < numberArray.length; i++) {
//   sum += numberArray[i];
// }

for (const num of numberArray) {
  sum += num;
}
console.log(sum);
