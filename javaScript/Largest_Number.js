// Task 22 : Largest Number
// Fiind the largest number in an array ;

const numberArray = [34, 76, 34, 98, 65, 49, 99];

let largestNumber = numberArray[0];
// for (let i = 0; i < numberArray.length; i++) {
//   if (largestNumber < numberArray[i]) {
//     largestNumber = numberArray[i];
//   }
// }

for (const num of numberArray) {
  if (largestNumber < num) {
    largestNumber = num;
  }
}
console.log(largestNumber);
