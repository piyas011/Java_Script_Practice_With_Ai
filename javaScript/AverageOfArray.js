const prices = [34, 45, 56, 67, 78, 89, 90, 98, 87, 76];

let sum = 0;

for (const element of prices) {
  sum += element;
}
console.log(sum);

let average = sum / prices.length;
console.log(average);
