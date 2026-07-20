console.log("Hello World!");
console.log("=============================================");
{
  /**
   * Task 1 | Personal Information
   * create three variable to store tour name, age and district.Print all the values in the console.
   */
  const fullName = "Piyas Ahmed";
  let age = 21;
  const district = "Netrokona";

  console.log(`
    Name : ${fullName}
    Age : ${age}
    District : ${district}
    `);
  console.log("=============================================");
}
{
  /**
   * Task 2 | Basic Calculator
   * Create two number variables. Calculate and print the addition,subtraction,multiplication,division,and remainder of those mumbers.
   */
  const a = 30;
  const b = 10;

  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;
  let remainder = a % b;

  console.log(`
    Addition = ${addition};
    Subtraction = ${subtraction}
    Multiplication =${multiplication}
    Division = ${division}
    Remainder = ${remainder}    
    `);
  console.log("=============================================");
}
{
  /**
   * Task 3 | Even Or Odd Checker
   * Create a variable with a number.Check whether the number is even of odd and print the result.
   */
  const number = 23232323;
  if (number % 2 === 0) {
    console.log(`${number} = Even Number !`);
  } else {
    console.log(`${number} = Odd Number !`);
  }
  console.log("=============================================");
}
{
  /**
   * Task 4 | Positiv,Negarive of Zero
   * Create a variable with a Number. Check whether the number is positive,negative,zero.
   */
  const num = 4;
  if (num > 0) {
    console.log(`${num} = Positive`);
  } else if (num < 0) {
    console.log(`${num} = Negative`);
  } else {
    console.log(`${num} = Zero`);
  }

  console.log("=============================================");
}
{
  /**
   * Task 5 | Grade Calculator
   * Create a variable to store a student's marks. Print the grade based on the following conditions
   */
  const mark = 0;
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
  } else if (mark >= 33) {
    grade = "C";
  } else {
    grade = "Faaaaaaaah";
  }

  console.log(`${mark} : ${grade} ;`);
  console.log("=============================================");
}
{
  /**
   * Task 6 | Largest Number
   * Create three number variables. Find and print the largest number.
   */

  const number1 = 80;
  const number2 = 56;
  const number3 = 34;
  let largestNumber;
  if (number1 > number2 && number1 > number3) {
    largestNumber = number1;
  } else if (number2 > number3 && number2 > number1) {
    largestNumber = number2;
  } else {
    largestNumber = number3;
  }
  console.log(largestNumber, "Largest Number");

  console.log("=============================================");
}
{
  /**
   * Task 7 | Smallest Number
   * Create three number variables.Find and print the smallest number.
   */
  const number1 = 45;
  const number2 = 56;
  const number3 = 23;
  let smallestNumber;
  if (number1 < number2 && number1 < number3) {
    smallestNumber = number1;
  } else if (number2 < number3 && number2 < number1) {
    smallestNumber = number2;
  } else {
    smallestNumber = number3;
  }
  console.log(smallestNumber, "Smallest Number");
  console.log("=============================================");
}
