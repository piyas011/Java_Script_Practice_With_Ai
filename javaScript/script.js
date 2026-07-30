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
}

console.log("=============================================");
{
  /**
   * Task 2.11 | Find a Specific Number
   * Create an array of numbers .Search for a specific number.If found,Print its index; otherwise , print "not Found"
   */
  const numbers = [23, 34, 45, 56, 67, 78, 89, 87, 76];
  const searchNumber = 23;

  if (numbers.includes(searchNumber)) {
    console.log(numbers.indexOf(searchNumber));
  } else {
    console.log("Not Found");
  }
}

console.log("=============================================");
{
  /**
   * Task 2.12 | Remove Duplicate Values
   * Create an array with duplicate values. print a new array containing only unique values.
   */
  const array = [
    12, 23, 23, 34, 43, 34, 34, 45, 45, 56, 56, 56, 67, 67, 65, 65, 55, 55, 55,
    56, 54,
  ];

  let uniqueArray = [];
  for (const num of array) {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  }
  console.log(array);
  console.log(uniqueArray);
  //I took hints from ai.
}
console.log("=============================================");
{
  /**
   * Task 2.13 | Count Vowels
   * Create a string. Count how many vowels (a,e,i,o,u) are in the string.
   */
  let string = ` quam`;
  string = string.toLowerCase().trim();
  // console.log(string);

  let vowelsCount = 0;
  let stringSplit = string.split("");

  for (let x of stringSplit) {
    if ("a" === x || "e" === x || "i" === x || "o" === x || "u" === x) {
      vowelsCount++;
    }
  }
  console.log(`Total Vowel = ${vowelsCount}`);
}
console.log("=============================================");
{
  /**
   * Task 2.14 | Find the longest word
   * create an array of words. Find and print the longest word.
   */
  let string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam beatae inventore corporis maxime aspernatur blanditiis totam adipisci cum error minus praesentium, perferendis harum quas eligendi temporibus sint aliquam quam?`;
  string = string.split(" ");
  let longestWord = string[0];
  // console.log(longestWord);
  // console.log(string);
  for (let word of string) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  console.log(`Longest Word : ${longestWord}`);
}
console.log("=============================================");
{
  /**
   * Task 2.15 | Multiplication Table
   * Create a variable containing a number . Print its multiplication table from 1 to 10;
   */
  const number = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i} `);
  }
}
console.log("=============================================");
{
  /**
   * Task 2.16 | Number Pattern
   * Print the following pattern using nested loops:
   * 1
   * 12
   * 123
   * 1234
   * 12345
   */
  for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let x = 1; x <= i; x++) {
      pattern += x;
    }
    console.log(pattern);
  }
}
console.log("=============================================");
{
  /**
   * Task 2.17 | Star Pattern
   * Print the following pattern using nested loops:
   * *
   * **
   * ***
   * ****
   * *****
   */

  for (let i = 1; i <= 10; i++) {
    let pattern = "*";
    for (let x = 1; x < i; x++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
console.log("=============================================");

{
  /**
   * Task 2.18 | Average of array
   * Create an array of numbers. Find and print the average value of all elements.
   */

  const numberArray = [45, 56, 23, 43, 87, 56, 43, 23, 21, 34, 4, 5, 6, 4, 3];
  let totalSum = 0;
  for (const num of numberArray) {
    totalSum += num;
  }
  // console.log(totalSum);
  const averageOfNumber = totalSum / numberArray.length;
  console.log(` Average Number Of Array :`, averageOfNumber.toFixed(2));
}
console.log("=============================================");
{
  /**
   * Task 2.19 | Student Result Analyzer
   * Create an array of student marks. Count how many stucent passd (marks >= 40) and how many failed.
   */
  const studentMarks = [
    56, 23, 45, 78, 54, 12, 31, 52, 16, 23, 65, 86, 36, 26, 26, 63, 46,
  ];
  let passStudents = 0;
  let failedStudents = 0;
  for (const mark of studentMarks) {
    if (mark >= 40) {
      passStudents++;
    } else {
      failedStudents++;
    }
  }
  console.log(`Total Pass Student : ${passStudents}`);
  console.log(`Total Failed Student : ${failedStudents}`);
  console.log(`Total Students : ${studentMarks.length}`);
}
console.log("=============================================");
{
  /**
   * Task 2.20 | Shopping Cart Total
   * Create an array of product prices. Calculate and print the totalcost of all products.
   */
  const productPriceArray = [566, 544, 800, 7190, 8770, 7100, 7600];
  let totalCost = 0;
  for (const price of productPriceArray) {
    totalCost += price;
  }
  console.log(`Total Cost : ${totalCost}`);
}
console.log("=============================================");
{
  /**
   * Challenge 1.1 Second Largest Number
   * Find the second largest number in an array without sorting the array;
   */
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let firstLargestNumber = arr[0];
  let secoundLargestNumber = arr[1];
  for (const num of arr) {
    if (num > firstLargestNumber) {
      secoundLargestNumber = firstLargestNumber;
      firstLargestNumber = num;
    } else if (num > secoundLargestNumber && num !== firstLargestNumber) {
      secoundLargestNumber = num;
    }
  }
  console.log(`First Larg Number : ${firstLargestNumber}`);
  console.log(`Secound Latg Number : ${secoundLargestNumber}`);
}
console.log("=============================================");

{
  /**
   * challeng 1.2 Palindrome Checker
   * Create a string and check whether it is a palindrome,
   */
  let str = "madam";
  let strReverse = str.split("");
  strReverse = strReverse.reverse();
  strReverse = strReverse.join("");
  console.log(strReverse);
  if (str === strReverse) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindtome");
  }
}
console.log("=============================================");
{
  //////////  Function And array ////////////
  /**
   * Task 4.1 |  Sum of an Array
   * Create a function that takes an array of numbers as a prameter and returns the sum of all numbers.
   *
   */
  const numbers = [34, 45, 56, 543, 32, 45, 677, 87, 45, 67, 54, 25, 46, 58];

  function sumOfArrayNumbers(array) {
    // console.log(array);
    let totalSum = 0;
    for (const num of numbers) {
      totalSum += num;
    }
    return totalSum;
  }

  const result = sumOfArrayNumbers(numbers);
  console.log(`Total Sum Of Array : ${result}`);
}
console.log("=============================================");
{
  /**
   * Task 4.2 | Find The Largest Number
   * Create a finction that takes an array of numbers and returns the largest number.
   */

  const arr = [4, 6, 5, 7, 3, 13, 90, 96, 43];
  function largestNumberFunction(array) {
    let largNumber = array[0];
    for (const number of array) {
      if (largNumber < number) {
        largNumber = number;
      }
    }
    return largNumber;
  }

  const result = largestNumberFunction(arr);
  console.log(`Largest Number = ${result}`);
}
console.log("=============================================");
{
  /**
   * Task 4.3 | Find the Smallest Number
   * create a function that takes an array of number and returns the smallest number.
   */
  const array = [4, 6, 5, 7, 3, 13, 90, 96, 43];

  function smallestNumberFunction(arr) {
    let smallNumber = arr[0];
    for (const number of arr) {
      if (smallNumber > number) {
        smallNumber = number;
      }
    }
    return smallNumber;
  }
  let result = smallestNumberFunction(array);
  console.log(`Smallest Number : ${result}`);
}
console.log("=============================================");
{
  /**
   * Task 4.4 | Count Even Numbers
   * Create a function that counts how many even numbers are in an array.
   */
  const array = [4, 6, 5, 7, 3, 13, 90, 96, 43];
  let evenNumberArray = 0;
  function countEvenNumber(arr) {
    let evenArray = [];
    for (const number of arr) {
      if (number % 2 === 0) {
        evenArray.push(number);
        evenNumberArray++;
      }
    }
    return evenArray;
  }
  let evenArray = countEvenNumber(array);

  console.log(`Main Array : ${array}`);
  console.log(`Even Number Array : ${evenArray}`);
  console.log(`Even Number Count : ${evenNumberArray}`);
}
console.log("=============================================");
{
  /**
   * Task 4.5 | Count Odd Number
   * Create a function that counts how many odd numbers are in an array.
   */
  const array = [4, 6, 5, 7, 3, 13, 90, 96, 43];
  let countOddArray = 0;
  function countOddNumbers(arr) {
    let oddArray = [];
    for (const number of arr) {
      if (number % 2 !== 0) {
        oddArray.push(number);
        countOddArray++;
      }
    }
    return oddArray;
  }
  let result = countOddNumbers(array);
  console.log(`Main Array :`, array);
  console.log(`Odd Number Array :`, result);
  console.log(`Total Odd Number :${countOddArray}`);
}
console.log("=============================================");
{
  /**
   * Task 4.6 | Reverse an Array
   * Create a function that returns a new array with the elements in reverse order.
   */
  const array = [4, 6, 5, 7, 3, 13, 90, 96, 43];
  function reverseArray(arr) {
    let revArr = [];
    for (let i = array.length; i >= 0; i--) {
      revArr.push(arr[i]);
    }
    return revArr;
  }

  let result = reverseArray(array);
  console.log(`Main Array : ${array}`);
  console.log(`Reverse Array : ${result}`);
}
console.log("=============================================");
{
  /**
   * Task 4.7 | Find a Number
   * Create a function that searches for a specific number in an array and returns its index . if the number is not found , return -1
   */
  const number = [34, 45, 56, 67, 78, 89, 23, 24, 34, 45];
  const findN = 78;
  function findNumber(array, findN) {
    if (array.includes(findN)) {
      return array.indexOf(findN);
    } else {
      return -1;
    }
  }

  const result = findNumber(number, findN);
  console.log(result);
}

console.log("=============================================");
{
  /**
   * Task 4.8 | Cout Positive Numbers
   * Create a function that counts how many positivei and negative numbers are in an array
   */

  const numbers = [34, -45, 34, 45, -34, -56, 90, 90, 56, 67, 87, 6565];
  function positiveNegativeNumberCount(numbers) {
    let positiveNumber = 0;
    let negativeNumber = 0;

    for (const num of numbers) {
      if (num < 0) {
        negativeNumber++;
      } else if (num > 0) {
        positiveNumber++;
      }
    }
    console.log(`Total Number = ${numbers.length}`);
    console.log(`Total Positive Number = ${positiveNumber}`);
    console.log(`Total Negative Number = ${negativeNumber}`);
  }

  positiveNegativeNumberCount(numbers);
}
console.log("=============================================");
{
  /**
   * Task 4.9 | Average of Numbers
   * Create a function that returns the average of all numbers in an array.
   */
  const number = [34, 5, 56, 67, 87, 56, 5, 4, 6, 67, 78, 89, 43];
  function averageNumber(number) {
    let totalNumber = 0;
    for (const num of number) {
      totalNumber += num;
    }
    return totalNumber / number.length;
  }
  console.log(averageNumber(number).toFixed(2));
}
console.log("=============================================");
{
  /**
   * Task 4.10 | Remove Duplicate Numbers
   * Create a function that returns a new array without duplicat numbers.
   */
  const numbers = [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 23, 23, 23, 23];

  function removeduplicateNumber(array) {
    let newArray = [];
    for (const num1 of array) {
      let found = false;
      for (let num2 of newArray) {
        if (num2 === num1) {
          found = true;
        }
      }
      if (!found) {
        newArray.push(num1);
      }
    }
    return newArray;
  }
  console.log(removeduplicateNumber(numbers));
}
console.log("=============================================");
{
  /**
   * Task 4.11 | Count Vowels
   * create a function that counts the numbers of vowels in a string.
   */

  function countVowels(string) {
    console.log(string);
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (string[i].toLowerCase() === vowels[j]) {
          count++;
        }
      }
    }

    return count;
  }

  console.log(countVowels("jAvaScript"));
}
console.log("=============================================");
{
  /**
   * Task 4.12 | Reverse a String
   * Create a function thar returns the refersed version of a string.
   */
  function reverseString(string) {
    console.log(string);
    let reverse = string.split("").reverse().join("");
    return reverse;
  }
  console.log(reverseString("hello JavaScript World"));
}
console.log("=============================================");
{
  /**
   * Task 5.13 | Palindrome Checker
   * Create a function  that checks whether a string is a palindrome.
   */
  function checkPalindrome(string) {
    let reverseString = string.split("").reverse().join("");
    if (string === reverseString) {
      return "Palindrome";
    }
    return "Not Palindrome";
  }

  console.log(checkPalindrome("mada"));
}
console.log("=============================================");
{
  /**
   * Task 5.14 | Count Characters
   * Create a function thar counts how many times a specific character appears in a string .
   */

  function countCharacters(string, terget) {
    if (typeof string !== "string" || typeof terget !== "string") {
      return "Invalid";
    }
    let count = 0;
    for (str of string) {
      if (terget === str) {
        count++;
      }
    }
    return count;
  }

  console.log(countCharacters("Hi i am Piyas", "i"));
}
console.log("=============================================");
{
  /**
   * Task 4.15 | Find the Longest Word
   * Create a function that takes an array of words and returns the longest word.
   */

  function findLongestWord(string) {
    if (typeof string === "number") {
      return "Invalid";
    }
    let words = string.split(" ");
    let longesWord = words[0];
    for (const word of words) {
      if (longesWord.length < word.length) {
        longesWord = word;
      }
    }
    return longesWord;
  }

  console.log(findLongestWord("Hello JavaScript , This is a simple String"));
}
console.log("=============================================");
{
  /**
   * Task 4.16 | Student Result Analyzer
   * Create a function that takes an array of student marks and returns:
   * Total students
   * Passed Students (marks >= 40)
   * Faild Students
   */

  function resultAnalyzer(resultArray) {
    // return resultArray;
    let totalStudents = resultArray.length;
    let passStudents = 0;
    let failStudents = 0;
    if (!Array.isArray(resultArray)) {
      return "Invalid Marks";
    }
    for (const mark of resultArray) {
      if (typeof mark !== "number") {
        return "Invalid";
      }
      if (mark >= 40) {
        passStudents++;
      } else {
        failStudents++;
      }
    }
    return { totalStudents, passStudents, failStudents };
    // return `
    //   Total Students = ${totalStudents}
    //   Passed Students = ${passStudents}
    //   Failed Students = ${failStudents}
    //   `;
  }

  console.log(resultAnalyzer([34, 40, 56, 67, 54, 34, 23, 65, 78, 98]));
}
console.log("=============================================");
{
  /**
   * Task 4.17 | Shopping Cart Total
   * Create a function that calculates the total price of all products in an array.
   */

  function shoppingCart(priceArray) {
    if (!Array.isArray(priceArray)) {
      return "Invalid";
    }
    let totalPrice = 0;
    for (const price of priceArray) {
      if (typeof price !== "number") {
        return "Invalid";
      }
      totalPrice += price;
    }
    return totalPrice;
  }
  console.log(shoppingCart([45, 56, 67, 787, 654, 343, 675, 799]));
}
console.log("=============================================");
{
  /**
   *  Task 4.18 | Temperature Analyzer
   * Create a function thar finds the highest and lowest temperatures from an array.
   */

  function temperatureAnalyzer(temperatures) {
    // return temperatures;
    if (!Array.isArray(temperatures)) {
      return " Invalid Temperature";
    }
    let highestTemperature = temperatures[0];
    let lowestTemperature = temperatures[0];

    for (const temperature of temperatures) {
      if (typeof temperature !== "number") {
        return "Invalid Temperature";
      }
      if (highestTemperature < temperature) {
        highestTemperature = temperature;
      }
      if (lowestTemperature > temperature) {
        lowestTemperature = temperature;
      }
    }
    return { highestTemperature, lowestTemperature };
  }
  console.log(temperatureAnalyzer([23, NaN, 12, 21, 23, 24, 52, 2, 21, 43]));
}
console.log("=============================================");
