// Task 18 | Fibonacci Series
// Print the first N Fibonacci numbers

// let n = 10;

// let first = 0;
// let second = 1;

// for (let i = 1; i <= n; i++) {
//   console.log(first);
//   let next = first + second;

//   first = second;
//   second = next;
// }

function fib(n) {
  let first = 0;
  let second = 1;
  let fibonacci = [];
  for (let i = 1; i <= n; i++) {
    fibonacci.push(first);

    let next = first + second;
    first = second;
    second = next;
  }
  return fibonacci;
}

console.log(fib(10));
