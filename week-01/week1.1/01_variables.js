// how in variablesa constant is declared
// memory me ek jga assign krne ko variable khte hen

const accountId = 1234567890; // this is a constant variable
let accountEmail = "123@example.com"; // this is a local variable
var accountPassword = "1234";
accountCity = "Karachi"; // this is a global variable
let accountState;

// accountId = 2378391;
// this will give an error because we can't change the value of a constant variable

// Prefer not to use var bcz of issue in block scope and functional scope


accountEmail = "345@example.com"; 
accountPassword = "12345"; // this is a local variable
accountCity = "Lahore"; // this is a global variable
console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);