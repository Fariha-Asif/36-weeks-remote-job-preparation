// Arrow Function:

// Convert a regular function to an arrow function that multiplies two numbers.

const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

// Create an arrow function that takes a name and returns a greeting: `"Hello, <name>!"`.

const greeting = (name) => {
    console.log(`"Hello, ${name}!"`);
}
greeting("Fariha");

// Write an arrow function that returns the square of a number.

const square = (num) => {
    const result = num * num
    console.log(result);
}
square(6);

// Map Function:

// Use `map()` to square each number in the array: `[1, 2, 3, 4, 5]`.

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2 )

console.log(doubled);

// Given an array of names, use `map()` to convert them all to uppercase.

let names = ["Alice", "Bob", "Charlie"];

let upperCaseConvert = names.map(name => name.toUpperCase())

console.log(upperCaseConvert);

// From an array of numbers, use `map()` to return strings like: `"Number: 3"` for each element.

let numbers1 = [1, 2, 3, 4, 5];

let numberStrings = numbers1.map(num => `Number: ${num}`)

console.log(numberStrings)

//  Filter Function:

// Use `filter()` to get all even numbers from an array: `[10, 15, 20, 25, 30]`.

let numbers2 = [10, 15, 20, 25, 30];

let evenNumber = numbers2.filter(num => num = num % 2 === 0)

console.log(evenNumber);

// From an array of ages `[12, 18, 25, 16, 30]`, filter out only those who are 18 or older.

let ages = [12, 18, 25, 16, 30]

let older = ages.filter(age => age = age >= 18)

console.log(older);

// Given a list of scores `[50, 80, 90, 40, 100]`, return all scores greater than 75.

let scores = [50, 80, 90, 40, 100]

let greater = scores.filter(score => score = score >= 75)

console.log(greater)

// startsWith Function

// Write a function to filter all words from an array that start with the letter `"F"`.

function startLetterFromF(words){
    return words.filter(word => word.startsWith("F"))
}
let arrayOfWords = ["Fariha", "Faraz", "Faham", "Falak", "Ali", "Nouman", "Dua"]

let filteredWords  = startLetterFromF(arrayOfWords)

console.log(filteredWords); 
 

// Given a list of emails, return those starting with `"admin"` using `startsWith()`.

function listOfEmails(emails){
    return emails.filter(email => email.startsWith("admin"))
}

let listOfEmailsAdmin = ["admin_Fariha", "Fariha", "Faraz", "admin_Faraz"]

let startingEmail = listOfEmails(listOfEmailsAdmin)

console.log(startingEmail);

// Use `filter()` and `startsWith()` together to get fruits that start with "M" from `["Apple", "Mango", "Banana", "Melon", "Apricot"]`.

let fruits = ["Apple", "Mango", "Banana", "Melon", "Apricot"]

let startLetterWithM = fruits.filter(fruit => fruit.startsWith("M"))

console.log(startLetterWithM);