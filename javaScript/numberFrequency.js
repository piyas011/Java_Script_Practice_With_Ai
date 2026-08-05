const number = [
  12, 2, 2, 3, 4, 4, 4, 56, 7, 56, 56, 67, 67, 78, 78, 76, 65, 100, 1, 1, 1, 1,
];

let frequency = {};

for (let num of number) {
  if (frequency[num]) {
    frequency[num]++;
  } else {
    frequency[num] = 1;
  }
}

console.log(frequency);
