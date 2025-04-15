/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // convet string to lower case
  str = str.toLowerCase();
  // remove spaces and special characters
  str = str.replace(/[^a-z0-9]/g, '');  // i used regex here
  // check if string is equal to its reverse
  const reversedStr = str.split('').reverse().join('');
  // compare both strings
  if (str === reversedStr) {
    // if both strings are equal then it is a palindrome
    return true;
  }
  // if not equal then it is not a palindrome
  else {
    return false;
  }
  
}

module.exports = isPalindrome;
