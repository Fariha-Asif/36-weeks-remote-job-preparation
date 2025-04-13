// operations:

let value = 3;
let negativeValue = -value; // negative value
console.log(negativeValue); // -3

console.log( 3 + 3); // addition
console.log( 3 - 3); // subtraction
console.log( 3 * 3); // multiplication
console.log( 3 / 3); // division
console.log( 3 % 3); // modulus => remainder => 0
console.log( 3 ** 3); // exponentiation => 3^3 => 27
console.log( 3 ** 0); // exponentiation => 3^0 => 1 

let str1 = "hi";
let str2 = "Fariha";
let str3 = str1 + str2; // concatenation => hiFariha
console.log(str3); // hiFariha

console.log("1" + 2 )
console.log(1 + "2");
console.log(1 + 2 + "3"); // 33 => addition k liye number ko string me convert kr deta hy  // practical me yeh use nh hota hy
console.log("3" + 2 + 1); // 321 => string me convert kr deta hy // practical life me yeh use nh hota hy
console.log(1 + 2 + "3" + 4); // 34 => string me convert kr deta hy // practical life me yeh use nh hota hy

console.log(+true); // 1 => true ko number me convert krne pr 1 milega // yeh b ek confusing code hy 
console.log(+false); // 0 => false ko number me convert krne pr 0 milega
console.log(+""); // 0 => empty string ko number me convert krne pr 0 milega
console.log(+null); // 0 => null ko number me convert krne pr 0 milega


// console.log(true+); this cause error

let num1, num2, num3

num1 = num2 = num2 = 2 + 2  // yeh b wk confusing code hy

// precedence operators:

let gameCounter = 100
gameCounter++  // yeh postfix increment hy => pehle value ko use krta hy phir increment krta hy
console.log(gameCounter)

let gameCounter1 = 100
++gameCounter1   // yeh prefix increment hy => pehle increment krta hy phir value ko use krta hy
console.log(gameCounter1);




