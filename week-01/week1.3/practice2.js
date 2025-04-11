"use strict";

// FUNCTIONS:

// 1. Check Even or Odd:
const num = 14;
function evenOrOdd(){
    if( num % 2 == 0){
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

evenOrOdd()

// 2. Count Digits in a Number:

num1 = 4328912;

function countDigits(){
    let count = 0;
    while(num1 != 0){
        num1 = Math.floor(num1 / 10);
        count++;
    }
    console.log(count)
}

countDigits()

// 3. Find the Sum of an Array:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum)
}

sumArray()

// 4. Reverse a String:

const str = "hello world";

function reverse(){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    console.log(reversed)
}

reverse()