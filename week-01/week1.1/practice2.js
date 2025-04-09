"use strict"

// STATEMENTS, LOGICAL OPERATORS,  PRACTICE QUESTIONS...

// 1. Create a traffic light system that shows what to do next based on the color of the light.
//    Red - Stop
//    Yellow - Get Ready
//    Green - Go

let trafficLight = "yellow"; // Change this value to test different cases

if (trafficLight == "red") {
    console.log("Please Stop")
} 
else if (trafficLight == "yellow") {
    console.log("Get Ready")
} else {
    console.log("You can Go")
}

// 2. Create a system to calculate popcorn prices based on the size customer asked for?

let size = "S"; // Change this value to test different cases

if (size == "XL") {
    console.log("Popcorn price is 250") 
} else if (size == "L"){
    console.log("Popcorn price is 200")	
} else if (size == "M") {
    console.log("Popcorn price is 100")
} else {
    console.log("Popcorn price is 50")
}

// 3. A "good string" is one starts with the letter 'a' and has a length > 3. 
// Write a program that checks if a string is "good" or not.

let str = "apple"; // Change this value to test different cases

if (str.length > 3) {
    console.log("It is a good string")
} else {
    console.log("It si not  good string")
}

// 4. Check if the number is odd or even
let number = 4; // Change this value to test different cases
if (number % 2 == 0) {
    console.log("Number is even")
} else {
    console.log("Number is odd")
}

// 5. Predict the output of the following code:

let num = 12;
if((num % 3 == 0) && (num + 1 == 15) || (num - 1 == 11)) {
    console.log("Safe")
} else {
    console.log("Unsafe")
}  // answer will be safe


// 6. Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7

let day = 4;

switch (day) {
    case 1 :
        console.log("Today is Monday")
        break;
    case 2 :
        console.log("Today is Tuesday")
        break;
    case 3 :
        console.log("Today is Wednesday")
        break;
    case 4 :
        console.log("Today is Thursday")
        break;
    case 5 :
        console.log("Today is Friday")
        break;
    case 6 :
        console.log("Today is Saturday")
        break;
    default :
        console.log("Today is Sunday")
}