// task 35 : Palindrome Function
// Return whether a string is palindrome.
const para = "hello";

function palindrome(string) {
  let reverse = string.split("").reverse().join("");
  if (para === reverse) {
    return "Palindrome";
  }
  return "Not Palindrome";
}
console.log(palindrome(para));
