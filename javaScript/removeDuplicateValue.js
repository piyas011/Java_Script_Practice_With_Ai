const numbers = [2, 3, 3, 4, 5, 5, 6, 6, 6, 7, 7, 8];

let unique = [];

// for (let i = 0; i < numbers.length; i++) {
//   let found = false;
//   for (let j = 0; j < unique.length; j++) {
//     if (numbers[i] === unique[j]) {
//       found = true;
//     }
//   }
//   if (!found) {
//     unique.push(numbers[i]);
//   }
// }

for (const num1 of numbers) {
  let found = false;
  for (num2 of unique) {
    if (num1 === num2) {
      found = true;
    }
  }
  if (!found) {
    unique.push(num1);
  }
}

console.log(unique);
