// Grade Calculator
// Print the grade based on the student's marks.

const mark = 30;
let grade;

if (mark < 0 || mark > 100) {
  grade = "Invalid Mark";
} else if (mark >= 80) {
  grade = "A+";
} else if (mark >= 70) {
  grade = "A";
} else if (mark >= 60) {
  grade = "A-";
} else if (mark >= 50) {
  grade = "B";
} else if (mark >= 40) {
  grade = "C";
} else if (mark >= 33) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`${mark} = ${grade}`);
