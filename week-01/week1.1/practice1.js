"use strict";

// VARIABLES, DATA TYPES AND OPERATORS PRACTICE QUESTIONS....


/* 1. What is the value of ageafter this code runs?
let age = 23
age + 2 //after 2years

*/

let age = 23;
age += 2;

console.log(age);

/* 2. What is the value of avg after this code runs?
let hindi = 80;
let english = 90;
let math = 100;
let avg = (hindi + english + math) / 3
*/

let hindi = 80;
let english = 90;
let math = 100;
let avg = (hindi + english + math) / 3;

console.log(avg);

/* 3. What is the value of each variable in each line of code?
let num = 5;
let newNum = num++;
newNum = ++num;
*/

let num = 5;
console.log(num);

// postfix = value baad me add hoti hy print phle hota hy
let newNum = num++;
console.log(newNum);

// prefix = value print hone c phle add hoti hy
newNum = ++num;
console.log(newNum);

/* 4. Find the error in the following code:
a) let 1age = 5;  variable name can't be write like this 
   let 2age = 10;

b) let marks = 75;
   let isPass = True; true should be with small letter

c) let isPass = 'true'; true can't be written in string
*/

// 5. Declare your name as a string and print it's length in JS

let name = "Fariha";

console.log(name.length);

// 6. Declare your first name as a string and print its first character

let firstChar = name.charAt(0);

console.log(firstChar);

let firstChar1 = name[0]; // another way to get first character

console.log(firstChar1);

// 6. Declare your last name as a string and print its first character

let lastChar = name.charAt(name.length - 1);

console.log(lastChar);

/* What is the output of the followeing code?
"apnacollege"+123
*/

let str = "apnacollege" + 123;
console.log(str);

// What are the length of a single string and a string with a single space?

let singleString = "";

console.log(singleString.length)

let singleString1 = " ";

console.log(singleString1.length)
