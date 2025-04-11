"use strict";

// LOOPS:

// 1. Write odd numbers from 1 to 15:

for (let i = 1; i <= 15; i = i + 2) {
    console.log(i)
};

// 2. Write even numbers from 1 to 15:

for (let i = 2; i <= 15; i = i + 2) {
    console.log(i)
};

// infinite loops:
/* 1st conditon:
for (let i = 1; i >= 0; i++) {
}

2nd condition:
for (let i = 1; i <= 5; i--) {
}

3rd condition: in which we forgot to give ending condition
for (let i = 1;    ; i++) {
}
*/

// 3. Print the multiplication table for 5:

for (let i = 5; i <= 50; i = i + 5) {
    console.log(i)
}

// let n = prompt("write any number for table.")

// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i)
// }

// 4. Print the multiplication table for 5 in reverse order:

for (let i = 50; i >= 5; i = i - 5){
    console.log(i)
}

// Nested for loop:

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i}, ${j}`)
    };
};

// 5. Print the multiplication table of any number (e.g., 7)

const num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${num * i}`)
}

// ⭐ Print this pattern using loops:

const symbol = "*";

for (let i = 0; i <= 5; i++) {
    console.log(symbol.repeat(i))
}

// 6.  Print squares of numbers from 1 to 10:

for (let i = 0; i <= 10; i++) {
    console.log(i * i)
}

// 7. Find the sum of numbers from 1 to 100:

let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum);

// 8.  Print numbers from 10 to 1 (reverse order):

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// 9. print string in reverse order:

let str = "Javascript";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse);

let str2 = "hello";
let reverse2 = "";

for (let i = str2.length - 1; i >= 0; i--) {
    reverse2 += str2[i]
}
console.log(reverse2);

// 10. Reverse and check if the string is a palindrome

let string = "madam";
let isPalandrome = true;

for (let i = 0; i < (string.length)/2; i++) {
    if (string[i] !== string[string.length -1 -i]) {
        isPalandrome = false;
        break;
    }
}
if (isPalandrome === true){
    console.log("Its a palandrome");
} else {
    console.log("It's not a palandrome")
}

// WHILE LOOP:

// 1. Write odd numbers from 1 to 15:

let odd = 1;

while (odd <= 15) {
    console.log(odd);
    odd = odd % 2 === 0 ? odd + 1 : odd + 2;
}

// Favorite movie game:
/*
const favMovie = "Avatar";

let guess = prompt("Guess my favourite movie.");

while ((guess != favMovie) && (guess != "quiut")) {
    guess = prompt("Wrong gess please try again")
}

if(guess == favMovie){
    console.log("congrats")
}
*/

// break keyword:

let i = 0;

while(i <= 5) {
    if (i === 3) {
        break;
    }
    console.log(i);
    i++;
}

// loops with array:

let fruits = ["apple", "banana", "orange", "kiwi", "mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = fruits.length -1; i >= 0; i--){
    console.log(fruits[i]);
}

// nested loops with nested arrays:

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"]]

for  (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(heroes[i][j])
    }
}

// for of loop:


for(let fruit of fruits) {
    console.log(fruit)
}

for (let char of "hello") {
    console.log(char)
}

for (let list of heroes){
    console.log(list)
    for (let hero of list) {
        console.log(hero)
    }
}

// todo app:

// let todos = [];
// let req = prompt("Enter your todo list:");

// while (true) {
//     if (req == "quit") {
//         console.log("quiting app.")
//         break;
//     }

//     if (req == "list") {
//         console.log("----------")
//         for (let i =0; i < todos.length; i++){
//             console.log(i, todos[i]);
//         }
//         console.log("----------")
//     } else if (req == "add") {
//         let task = prompt("please enter the task you want to add.")
//         todos.push()
//         console.log("task added successfully")
//     } else if (req == "delete") {
//         let del = prompt("please enter the task you want to delete.")
//             todos.splice(index, 1);
//             console.log("task deleted successfully")
//     }

//     req = prompt("Enter your todo list:");
// }

/* Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3] */

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num1 = 2;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == num1) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr)

// Write a JS program to find the largest number in an array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3]
// Result should be 6

let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];

let largest = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        largest = arr1[i];
    }
}
console.log(largest);

// Write a JS program to find the smallest number in an array.

let arr2 = [1, 2, 3, 4, 5, 6, 2, 3];

let largest1 = arr2[0];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < largest1) {
        largest1 = arr2[i];
    }
}
console.log(largest1);

// Write a JS program to find the second largest number in an array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3]
// Result should be 5

let arr3 = [1, 2, 3, 4, 5, 6, 2, 3];

let largest2 = arr3[0];
let secondLargest = arr3[0];
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > largest2) {
        secondLargest = largest2;
        largest2 = arr3[i];
    } else if (arr3[i] > secondLargest && arr3[i] != largest2) {
        secondLargest = arr3[i];
    }
}
console.log(secondLargest);

// Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let number = 287152;

let sum1 = 0;

let strNum = number.toString();

for (let i = 0; i < strNum.length; i++) {
    sum1 += parseInt(strNum[i]);
}
console.log(sum1);