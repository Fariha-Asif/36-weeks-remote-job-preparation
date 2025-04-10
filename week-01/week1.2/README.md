# 📘 Week 1.2 | Basic JavaScript APIs (Beginners)

Welcome to **Week 1.2** of your JavaScript learning journey! This module covers important core features of JavaScript like **Array methods**, **Classes**, and **Objects** — essential for beginner developers to write clean and powerful code.

---

## 📌 Topics Covered

### 1. 🚀 Introduction

JavaScript is a powerful and flexible scripting language widely used for web development. In this session, we’ll explore basic yet powerful tools that help manipulate data and build structured applications.

---

### 2. 🔁 Array Methods: `map`, `filter`, `find`, and `sort`

These built-in JavaScript methods are designed to simplify data transformation and searching within arrays.

---

#### 🗺️ `map()`

**Purpose:** Transforms each element in an array and returns a new array.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

🧹 filter()
**Purpose:** Filters the array based on a condition and returns a new array.

const ages = [12, 25, 17, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [25, 30]

🔍 find()
**Purpose:** Returns the first element that satisfies the given condition.

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Ahmed" }
];

const user = users.find(u => u.id === 2);
console.log(user); // Output: { id: 2, name: "Sara" }

🔢 sort()
**Purpose:** Sorts the elements of an array.

const numbers = [5, 3, 8, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 3, 5, 8]

### 3. 🏗️ JavaScript Classes
**Purpose:** Classes provide a blueprint for creating reusable objects with properties and methods.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const john = new Person('John', 25);
john.greet(); // Output: Hi, I'm John

🔹 constructor is used to initialize object properties
🔹 this refers to the current instance of the class

### 4. 🧱 JavaScript Objects
**Purpose:** Objects store data as key-value pairs and are a core part of JavaScript.

const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022,
  start: function () {
    console.log('Car started!');
  }
};

console.log(car.model); // Output: Corolla
car.start(); // Output: Car started!
🔹 Access object properties using dot (.) or bracket ([]) notation
🔹 Objects can hold values, functions (methods), and even other objects

## 🧠 Summary Table

| Topic     | Purpose                                      | Key Method/Usage           |
|-----------|----------------------------------------------|----------------------------|
| `map()`   | Transform array elements                     | `.map(callback)`           |
| `filter()`| Select items that match a condition          | `.filter(callback)`        |
| `find()`  | Find a single item                           | `.find(callback)`          |
| `sort()`  | Sort array values                            | `.sort(compareFunction)`   |
| **Classes** | Create reusable object templates           | `class ClassName {}`       |
| **Objects** | Store structured data as key-value pairs   | `{ key: value }`           |


### 📚 Useful Resources
MDN - Array Methods

MDN - JavaScript Classes

MDN - JavaScript Objects

### 🌱 Practice Tasks
✅ Create a class for a Student with name, roll number, and a method to display the details.

✅ Use filter() to find products under a specific price.

✅ Use map() to return only product names from an array of product objects.

Happy Coding! See you in Week 1.3 🚀