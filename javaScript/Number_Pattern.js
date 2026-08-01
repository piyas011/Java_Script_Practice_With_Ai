// Task 20 : Number Pattern
// Print different number patterns using nested loops;

const number = 5;

for (let i = 1; i <= number; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + i;
  }
  console.log(pattern);
}
