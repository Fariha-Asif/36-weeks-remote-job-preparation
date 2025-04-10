"use strict";

// CLASSES AND OBJECTS:

// 1. Create a class Person with properties name and city. Add a method to greet with their city.

class Person {
    constructor (name, city) {
        this.name = name;
        this.city = city;
    }

greet() {
    console.log(`Hello my name is ${name} and i live in ${city}`)
}

}

const p1 = new Person("Fariha", "Lahore");
console.log(p1);

const p2 = new Person("Faraz", "Karachi");
console.log(p2);

const p3 = new Person("Faham", "Islamabad");
console.log(p3);

// 2. Create a class BankAccount with deposit() and withdraw() methods. Track balance.

class BankAccount {
    constructor(accountHolder, balance = 0){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Your new account balance is: ${this.balance}`)
    }

    withdraw(amount){
        if(amount > this.balance){
            console.log(`Your balance is insufficient.`)
        } else {
            this.balance -= amount;
            console.log(`Your new account balance is: ${this.balance}`)
        }
    }

    checkBalance(){
        console.log(`Current balance is: ${this.balance}`)
    }
}

const a1 = new BankAccount("Fariha");

console.log(a1.deposit(25000));
console.log(a1.withdraw(10000));
console.log(a1.withdraw(20000));
console.log(a1.checkBalance());

// 3. Create a class Car with brand and model. Add a method to return full details.

class Car {
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
    }
    details(){
        console.log(`Car brand: ${brand}, Car Model: ${model}`)
    }
}

const c1 = new Car("Toyota", 2020);
console.log(c1);

// 4. Add a method to Student class that checks if the student is adult (age >= 18).

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`My name is ${this.name} and i am ${this.age} years old.`)
    }

    isAdult(age) {
        if (age >= 18) {
            console.log("You are adult.");
            return true
        } else {
            console.log("You are under age");
            return false
        }
    }
}

const s1 = new Student("Fariha", 25)
console.log(s1.greet())
console.log(s1.isAdult(25))

const s2 = new Student("Faham", 5)
console.log(s2.greet())
console.log(s2.isAdult(5))

// 5. Create a Car class:
// 6. Add a method startEngine() to the Car class

class Car1 {
    constructor (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return (`This car is a ${this.brand} ${this.model} from ${this.year}`)
    }

    startEngine() {
        console.log(`Engine started for ${this.brand} ${this.model}`)
    }
}

const car1 = new Car1("Toyota", "Corolla", 2020);
console.log(car1.getDetails())
console.log(car1.startEngine())

const car2 = new Car1("Honda", "Civic", 2022);
console.log(car2.getDetails())
console.log(car2.startEngine())

// 7. Create a Rectangle class with width and height properties.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height
    }

    getPerimeter(){
        return 2 * (this.width + this.height)
    }
}

const rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.getArea())
console.log(rectangle1.getPerimeter())

const rectangle2 = new Rectangle(15, 20);
console.log(rectangle2.getArea())
console.log(rectangle2.getPerimeter())

// 8. Create a Product class:

class Product {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount
    }

    getFinalPrice(){
        return this.price - (this.price * this.discount / 100);
    }
}

const product1 = new Product("Laptop", 50000, 10);
console.log(product1.getFinalPrice())

const product2 = new Product("Mobile", 25000, 5);
console.log(product2.getFinalPrice())

// 9.  Create a Person class

class Person1 {
    constructor (name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }
}

const person1 = new Person1("Ali", 1990);
console.log(person1.getAge());

const person2 = new Person1("Sara", 2000);
console.log(person2.getAge());

// 10. Create a Movie class

class Movie {
    constructor(title, rating, year) {
        this.title = title;
        this.rating = rating;
        this.year = year;
    }

    isHit() {
        if (this.rating >= 8) {
            return true
        } else {
            return false
        }
    }
}

const movie1 = new Movie("Inception", 8.8, 2010);
console.log(movie1.isHit());

const movie2 = new Movie("Titanic", 7.8, 1997);
console.log(movie2.isHit());

// 11. Create a Book class:

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    isLongBook() {
        if (this.pages > 300) {
            return true
        } else {
            return false
        }
    }
}

const book1 = new Book("Fairytale", "John", 415);
console.log(book1.isLongBook());

const book2 = new Book("Adventure", "Marry", 250);
console.log(book2.isLongBook());

// 12. Create a Laptop class:

class Laptop {
    constructor(brand, ram, storage) {
        this.brand = brand;
        this.ram = ram;
        this.storage = storage;
    }

    isGamingLaptop() {
        if(this.ram >= 16 && this.storage >= 512) {
            return (`This ${this.brand} is a gaming laptop.`);
        } else {
            return (`This ${this.brand} is not a gaming laptop.`);
        }
    }
}

const laptop1 = new Laptop("DELL", 32, 1000);
console.log(laptop1.isGamingLaptop());

const laptop2 = new Laptop("HP", 8, 160);
console.log(laptop2.isGamingLaptop());