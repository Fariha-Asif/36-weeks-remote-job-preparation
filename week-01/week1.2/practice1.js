"use strict";

// ARRAY METHODS:

// MAP:
// 1. Square all numbers in an array:
let nums = [2, 4, 6, 8]

const num = num => {
    return num * num
}

let squaredNum = nums.map(num);

console.log(squaredNum)

// 2. Add 10 bonus marks to each students scores:

let marks = [86, 56, 78, 90, 45];

const bonusMarks = mark => {
    return mark + 10
};

let addMarks = marks.map(bonusMarks);

console.log(addMarks);

// 3. Convert array of temperatures from Celsius to Fahrenheit:

const celsius = [0, 10, 20];

// Formula: F = C * 1.8 + 32

const celsiusToFahrenheit = celsius => {
    return celsius * 1.8 + 32;
}

let fahrenheit = celsius.map(celsiusToFahrenheit);

console.log(fahrenheit);

// 4. Convert array of strings to uppercase:

const items = ['pen', 'pencil', 'book'];

const upperCase = items => {
    return items.toUpperCase();
}

let conversionItems = items.map(upperCase);

console.log(conversionItems);

// 5.  Extract price from an array of product objects:

const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 300 },
    { id: 3, name: "Tablet", price: 200 }
  ];

const extract = products => {
    return products.price;
}

const extractPrice = products.map(extract);

console.log(extractPrice);

// FILTER:

// 1. Filter numbers greater than 50:

const nums1 = [10, 55, 90, 35, 100];

const filterNum = nums1.filter(num1 => num1 > 50);

console.log(filterNum)

// 2.  Filter strings longer than 5 characters:

const items1 = ["pen", "notebook", "laptop", "bag"];

const filterItems = items1.filter(item1 => item1.length > 5);

console.log(filterItems);

// 3. Filter users who are above 18 years old:

const users = [
    { name: "Ali", age: 17 },
    { name: "Sara", age: 21 },
    { name: "Ahmed", age: 15 },
    { name: "Hina", age: 19 }
  ];

const filterUsers = users.filter(user => user.age > 18);

console.log(filterUsers);

// 4. Filter products in stock:

const items2 = [
    { name: "Pen", inStock: true },
    { name: "Eraser", inStock: false },
    { name: "Ruler", inStock: true }
  ];

const filterItems2 = items2.filter(item2 => item2.inStock === true);

console.log(filterItems2);

// FIND:

// 1. Find the first number divisible by 5:

const numsFind = [3, 7, 9, 10, 15];

const findNum = numsFind.find(numFind => numFind % 5 === 0);

console.log(findNum);

// 2. Find the first product that costs more than 1000:

const productsFind = [
    { name: "Mouse", price: 500 },
    { name: "Laptop", price: 1500 },
    { name: "Tablet", price: 800 }
];

const findProducts = productsFind.find(productFind => productFind.price > 1000);

console.log(findProducts);

// 3. Find the first string longer than 5 characters:

const itemsFind = ["book", "pen", "notebook"];

const findItems = itemsFind.find(itemFind => itemFind.length > 5);

console.log(findItems);

// SORT:

// 1. Sort numbers in ascending order:

const numsSort = [12, 5, 100, 30];

const ascenSort = numsSort.sort((a , b) => a - b);

console.log(ascenSort);

const descenSort = numsSort.sort((a , b) => b - a);

console.log(descenSort);

// 2. Sort strings alphabetically:

const fruits = ["Banana", "Apple", "Cherry"];

fruits.sort();

console.log(fruits);

// 3. Sort users by age:

const usersSort = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 19 },
    { name: "Ahmed", age: 30 }
];

const sortUsers = usersSort.sort((a , b) => (a.age - b.age));

console.log(sortUsers);

const desSortUsers = usersSort.sort((a , b) => (b.age - a.age))

console.log(desSortUsers);

