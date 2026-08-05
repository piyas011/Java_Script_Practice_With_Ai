// Max Function
// Return the largest number.

const numbers = [34, 45, 56, 67, 78];
function max(array) {
  let maxNumber = -Infinity;
  //   console.log(array);
  for (const num of array) {
    if (maxNumber < num) {
      maxNumber = num;
    }
  }
  return maxNumber;
}

console.log(max(numbers));
