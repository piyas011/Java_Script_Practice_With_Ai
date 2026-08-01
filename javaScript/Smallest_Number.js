// Task 23 : Smallest Number
// Find the smallest number in an array.

const numberArray = [34, 45, 56, 67, 24, 35, 45];

let smallestNumber = numberArray[0];

for (const num of numberArray) {
  if (smallestNumber > num) {
    smallestNumber = num;
  }
}
console.log(smallestNumber);
