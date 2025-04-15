/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // we will take argument through input from the user
  // str1 = input("Kindly write your first word to check either it is anagrams or not. ")
  // str2 = input("Kindly write your second word to check either it is anagrams or not. ")
 
  // firstly remove spaces and convert to lowercase both string // we used regex here not trim method 
  // bcz trim was just removing spaces from start and end of the string not between the string
  str1 = str1.replace(/\s+/g, '').toLowerCase()
  str2 = str2.replace(/\s+/g, '').toLowerCase()

  // sort the letters of both string
  const sorted1 = str1.split("").sort().join("")
  const sorted2 = str2.split("").sort().join("")

  // compare both sorted results

  if(sorted1 === sorted2) {
    // if both sorted strings are equal and their lengths are equal then they are anagrams
    return true    
  } else {
    return false
  }

}

const result = isAnagram("listen", "silent")
console.log(result);


module.exports = isAnagram;
