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
}
console.log("=============================================");
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
}
console.log("=============================================");
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
}
console.log("=============================================");
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
}
console.log("=============================================");
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
}
console.log("=============================================");
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
}
console.log("=============================================");
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
}
console.log("=============================================");
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
}
console.log("=============================================");

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
}
console.log("=============================================");
{
  /**
   * Task 19 | Shopping Cart
   * Create a shopping cart array aith at least three products. Add one product, remove one product, and print the final array.
   */

  const shoppingCart = ["Headphones", "Watch", "keyboard", "Power Bank"];

  console.log(shoppingCart);
  shoppingCart.splice(1, 1, "Smart Watch");
  console.log(shoppingCart);
}
console.log("=============================================");

{
  /**
   * Task 20 | Student Data
   * Create variables to store a student's name,age,marks, and favorite subject . Print all the information. Then check the student's grade based on the marks.
   */

  const studentName = "Piyas Ahmed";
  let age = 21;
  const mark = 60;
  const favoriteSubject = "ICT";
  let grad;

  if (mark < 0 || mark > 100) {
    grad = "Invaled Number";
  } else if (mark >= 80) {
    grad = "A+";
  } else if (mark >= 70) {
    grad = "A";
  } else if (mark >= 60) {
    grad = "A-";
  } else if (mark >= 50) {
    grad = "B";
  } else if (mark >= 40) {
    grad = "C";
  } else if (mark >= 33) {
    grad = "D";
  } else {
    grad = "Faaaaaaaaaaaaaaaaaaaaaaah";
  }
  console.log(`
    Student Name : ${studentName}
    Student Age  : ${age}
    Student Mark : ${mark}
    Favorit Subject : ${favoriteSubject}
    Grade        :${grad}
    `);
}
console.log("=============================================");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////Java Script Practice Set - 2////////////////
{
  /**
   * Task 2.1 Count Even Numbers
   * Create an array of numbers.Count how many even numbers are in the array and print the result
   */
  const numbers = [23, 34, 45, 56, 67, 78, 89, 90, 98, 76, 65, 43, 32, 21, 23];
  let evenNumberCount = 0;
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumberCount++;
    }
  }
  console.log("Total Even Number :", evenNumberCount);
}
console.log("=============================================");
{
  /**
   * Task 2.2 | Count Odd Numbers
   * create an array of numbers. Count how many odd numbers are in the array and print the result.
   */
  const numbers = [23, 34, 45, 56, 67, 78, 89, 90, 98, 76, 65, 43, 32, 21, 23];
  let oddNumberCount = 0;
  for (let number of numbers) {
    if (number % 2 !== 0) {
      oddNumberCount++;
    }
  }
  console.log("Total Odd Number :", oddNumberCount);
}
console.log("=============================================");
{
  /**
   * Task 2.3 | Sum of All Numbers
   * Create an array of numbers. Find and print the sum of all elements.
   */

  const numbers = [23, 34, 45, 56, 67, 78, 89, 90, 98, 76, 65, 43, 32, 21, 23];
  let sum = 0;

  for (let x of numbers) {
    sum = sum + x;
  }
  console.log("Total Sum = ", sum);
}
console.log("=============================================");
{
  /**
   * Task 2.4 | Find The Largest Number
   * Create an array of numbers. Find and print the largest number without using Math.max().
   */
  const numbers = [230, 34, 45, 56, 67, 78, 89, 90, 98, 76, 65, 43, 32, 21, 10];
  let largestNumber = numbers[0];
  for (let x of numbers) {
    if (largestNumber < x) {
      largestNumber = x;
    }
  }
  console.log("Largest Number = ", largestNumber);
}
console.log("=============================================");
{
  /**
   *  Task 2.5 | Find the Smallest Number
   * Create an array of numbers. Find and print the smallest number without using Math.min().
   */
  const numbers = [230, 34, 45, 56, 67, 78, 89, 90, 98, 76, 65, 43, 32, 21, 10];
  let smallestNumber = numbers[0];
  for (let x of numbers) {
    if (x < smallestNumber) {
      smallestNumber = x;
    }
  }
  console.log("Smallest Number : ", smallestNumber);
}
console.log("=============================================");
{
  /**
   *  Task 2.6 | Count Positive Number
   * Create an array containing positive and negative numbers. Count how many positive numbers are in the array.
   */

  /**
   *  Task 2.7 | Negative Numbers
   * Create an array containing positive and negative numbers. Count how many negarive numbers are in the array.
   */

  const numbers = [-12, -23, -13, -32, 56, 32, 76, 14, -76, -54, -3, -23];
  let positiveNumberCount = 0;
  let negativeNumberCount = 0;

  for (let x of numbers) {
    if (x > 0) {
      positiveNumberCount++;
    } else {
      negativeNumberCount++;
    }
  }
  console.log("Positive Number = ", positiveNumberCount);
  console.log("Negative Number = ", negativeNumberCount);
}
console.log("=============================================");

{
  /**
   * Task 2.8 | Reverse an Array
   * Create an array and print its clements in reverse order using a loop.
   */
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
console.log("=============================================");

{
  /**
   * Task 2.9 | Print Only Even Number
   * Create an array of numbers. Print only the even numbers.
   */
  let numbers = [34, 45, 56, 67, 78, 89, 90, 87, 76, 65, 54, 43, 32, 21, 1];
  let evenNumber = [];
  for (let x of numbers) {
    if (x % 2 == 0) {
      evenNumber.push(x);
    }
  }
  console.log("main Array :", numbers);
  console.log("Even Number : ", evenNumber);
}

console.log("=============================================");

{
  /**
   * Task 2.10 | Print Only Odd Numbers
   * Create an array of numbers. Print only the odd numbers
   */
  let numbers = [34, 45, 56, 67, 78, 89, 90, 87, 76, 65, 54, 43, 32, 21, 1];
  let oddNumber = [];
  for (let x of numbers) {
    if (x % 2 !== 0) {
      oddNumber.push(x);
    }
  }
  console.log("Main Array :", numbers);
  console.log("Odd Number : ", oddNumber);
  j;
}
