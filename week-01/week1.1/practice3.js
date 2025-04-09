"use strict";

// STRING METHOD, ARRAYS, LOOPS, PRACTICE QUESTIONS...

// 1. For the given string. trim it and convert it to the uppercase

let msg = "   help!  ";

msg = msg.trim().toUpperCase();
console.log(msg);

// 2. For the string -> let name = "ApnaCollege", predict output for the following:

let name = "ApnaCollege";
console.log(name.slice(4, 9))  // "Colle"
console.log(name.indexOf("na")) // 2
console.log(name.replace("Apna", "Our"))

// 3. Separate the "college" part in the above string and replace 'l' with 't' in it

console.log(name.slice(4, 12))
console.log(name.replace("l", "t"))

// 4. For the given start state of an array, change it to final state using array methods

let months = ["January", "July", "March", "August"]

console.log(months)

console.log(months.shift("January"))

console.log(months.shift("July"))

console.log(months.unshift("June"))

console.log(months.unshift("July"))

console.log(months)

// using splice:

console.log(months.splice(0, 2, "July", "June"))

console.log(months)

// 5. Return the index of the Javascript from the given array. if it was reversed.

let language = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"]

console.log(language.reverse())

console.log(language.indexOf("javascript"))

// 6. Make a nested array and represent tic tac toe using it.
//    X | O | X

let game = [["X", null, "O"] , [null, "X", null], ["O", null, "X"]]

console.log(game)

/* 7 Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].

For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0]

*/

let num = [7, 9, 0, -2]
let n = 3

// first n numbers:

console.log(num.slice(0, n))
console.log(num)

//last n nuumbers:

console.log(num.slice(num.length - n))
console.log(num)


// 8. write a program that checks whether string is empty or not

let str = "hello";

if (str.length == 0) {
    console.log("String is empty")
} else {
    console.log("String is not empty")
}

// 9. Write a javascript program that checks whether character at the given index is in loweercase?

let str1 = "hElLo";
let index = 3;

if (str1.charAt(index) == str1.charAt(index).toLowerCase()) {
    console.log("character is in lower case")
} else {
    console.log("character is not in lower case")
}

// 10. write a javascript programe which trims white spaces from the text?

let text = "Pakistan is Beautiful country";

console.log(text.trim())

// 11. write a javascript program that checks if an element exists in an array or not?

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let element = 15;

if (arr.indexOf(element) != -1) {
    console.log("Element exists in the array")
}
else {
    console.log("Element does not exists in the array")
}
