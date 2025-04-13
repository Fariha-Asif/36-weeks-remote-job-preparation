let score = "30";

console.log(typeof score);
console.log(typeof(score)); // method k through b hm data type check kr skte hen

// conversion k liye hmesha 1st letter capital me likhte hen
let valueInNumber = Number(score); // string ko number me convert krne k liye Number() function use hota hy
console.log(typeof valueInNumber); // number

let score1 = "30abc";

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1); // NaN => Not a Number => string me kuch bhi likha ho to wo number me convert nahi hoga
// NaN ki type bhi number hoti hy

let score2 = null; // null ki value ko number me convert krne pr 0 milega
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3 = undefined; // undefined ki value ko number me convert krne pr NaN milega
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1; false = 0;

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)



let isLoggedIn1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)



let isLoggedIn2 = "Fariha"

let booleanIsLoggedIn2 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn2)

// 1 => true; 0 => false
// "" => false
// "hi" => true

let sumNum = 33;

let stringNumber = String(sumNum); // number ko string me convert krne k liye String() function use hota hy
console.log(typeof stringNumber); // string
console.log(stringNumber);
