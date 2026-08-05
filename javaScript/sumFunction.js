// Task 31 : Sum Function
// Create a function that returns the sum of an Array.
const numbers = [34, 45, 46, 67, 78, 78, 76, 34];
function sumArray(array) {
  let sum = 0;
  for (const num of array) {
    sum = sum + num;
  }
  return sum;
}
console.log(sumArray(numbers));
