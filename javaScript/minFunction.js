// Min Function
// Return the smallest number.

const numbers = [34, 45, 56, 67, 78, 89, 89];

function minFunction(array) {
  let minNumber = Infinity;
  for (const num of array) {
    if (minNumber >= num) {
      minNumber = num;
    }
  }
  return minNumber;
}

console.log(minFunction(numbers));
