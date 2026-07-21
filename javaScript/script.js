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
{
  /**
   * Task 8 | Create a Fruit Array
   * Create an array at least five fruit names. Print the entire array.
   */
  const fruits = ["apple", "banana", "orange", "Stawberry", "mango"];

  console.log(fruits);
  console.log("=============================================");

  /**
   * Task 9 | Frirst and Last Element
   * Print the first and the last element of a fruit arry.
   */
  const firstElement = fruits[0];
  const lastElement = fruits[fruits.length - 1];
  console.log(`First Element : ${firstElement}`);
  console.log(`Last Element : ${lastElement}`);

  console.log("=============================================");

  /**
   * Task 10 | Array Length
   * Create an array and print the total nuber of elements in the array.
   */
  const arrayLength = fruits.length;
  console.log(`Tatal Element : ${arrayLength}`);

  console.log("=============================================");

  /**
   *Task 11 | Add an Item
   * Create an array and print the total number of elements in the array.
   */
  fruits.push("wetermelon");
  console.log("New Array : ", fruits);

  console.log("=============================================");

  /**
   * Task 12 | Remove the Last Item
   * Remove the last item from an array. Print the updated array.
   */
  fruits.pop();
  console.log("After Remove Array ", fruits);
  console.log("=============================================");

  /**
   * Task 13 | Add an Item at the Beginning
   * Add a niw item to the beginning of an array.Print the updated array.
   */

  fruits.unshift("grapes");
  console.log("Add New Item to The Beginning ", fruits);

  console.log("=============================================");

  /**
   * Task 14 | Remove the First Item
   * Remove the first item from an array. Print the update array.
   */
  fruits.shift();
  console.log("Remove The first Item an array : ", fruits);

  console.log("=============================================");

  /**
   * Task 15 | Search an Item
   * Check whether a specific item exists in an array. Print the result.
   */
  const searchItrm = "mango";
  const exists = fruits.includes(searchItrm);
  console.log(exists);

  console.log("=============================================");

  /**
   * Task 16 | Find Item index
   * Find the index of a specific item in an array and print the index.
   */
  const searchItem = "mango";
  const index = fruits.indexOf(searchItem);
  console.log(index);

  console.log("=============================================");

  /**
   * Task 17 | Update an Aarray Element
   * Replace an existing item in an array with a new valu. Print the update array.
   */
  const replaceItem = fruits.splice(3, 1, "Pineapple");
  console.log(fruits);
  console.log("Replace Item :", replaceItem);

  console.log("=============================================");
}

{
  /**
   * Task 18 | Favorite Colors
   * Create an array your five favorite colors. Print the second and fourth colors.
   */
  const color = ["blue", "greem", "orange", "purple", "charcoal"];

  const secondColor = color[1];
  const fourthColor = color[3];
  console.log("Secound Color :", secondColor);
  console.log("Fourth Color : ", fourthColor);

  console.log("=============================================");
}
{
  /**
   * Task 19 | Shopping Cart
   * Create a shopping cart array aith at least three products. Add one product, remove one product, and print the final array.
   */

  const shoppingCart = ["Headphones", "Watch", "keyboard", "Power Bank"];

  console.log(shoppingCart);
  shoppingCart.splice(1, 1, "Smart Watch");
  console.log(shoppingCart);

  console.log("=============================================");
}
