// Task 8 | Leap Year Checker
// check whether a fiven year is a leap year.

const year = 2026;
let isLeapYear;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  isLeapYear = "Leap Year !";
} else {
  isLeapYear = "Non Leap Year !";
}

console.log(`${year} =  ${isLeapYear}`);
