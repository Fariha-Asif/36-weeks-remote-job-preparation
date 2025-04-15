/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  // vowels ko define kia hy
  const vowels = 'aeiou';
  // vowels ka track record
  let count = 0;
  // Loop lgaya hy string pe
  for (let i = 0; i < str.length; i++) {
      // Check kr rhe k string me vowel hy ya nh
      if (vowels.includes(str[i])) {
          count++;
      }
  }
  // total count return
  return count;
}

// Example usage
const test1 = "Javascript";
const result = countVowels(test1);
console.log(result); 

// Additional test cases
console.log(countVowels("coding"));     
console.log(countVowels("HELLO"));     
console.log(countVowels("rhythm"));    

module.exports = countVowels;