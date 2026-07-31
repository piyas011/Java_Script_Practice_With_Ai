// Task 9 | BMI Calculator
// calculate BMI and print the health category.

const height = [5, 6]; // 5f  6i
const weight = 50; // kg

let result;
let inchiHeight = height[0] * 12 + height[1];
let meterHeight = inchiHeight * 0.0254; // meter

let bmi = meterHeight * meterHeight;
bmi = weight / bmi;

if (bmi <= 18.5) {
  result = "Under Weight";
} else if (bmi <= 24.9) {
  result = "Normal";
} else if (bmi <= 29.9) {
  result = "Over Weight";
} else {
  result = "Obese";
}

console.log(`${bmi} = ${result}`);
