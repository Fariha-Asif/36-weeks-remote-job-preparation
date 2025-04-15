/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // mene regex use kiya hai extra space remove k liye
    const cleaned = expression.replace(/\s+/g, '');

    // yeh check kre ga k valid characters hain ya nahi
    const validChars = /^[0-9+\-*/().]+$/;
    if (!validChars.test(cleaned)) {
      throw new Error("Invalid input: only numbers and + - * / ( ) are allowed");
    }

    try {
      // expression ko evaluate karne k liye eval function use kiya means javascript me expression ko convert kare ga
      const result = eval(cleaned);

      // yeh check kre ga finite ya NaN number to nh hy
      if (!isFinite(result)) {
        throw new Error("Cannot divide by zero");
      }

      // Save result
      this.result = result;
    } catch (err) {
      throw new Error("Invalid mathematical expression");
    }

    return this.result;
  }
}

module.exports = Calculator;

// hm try catch ka method use kiya hai k agar koi error aaye to usko handle kare ga
// aur error ko throw kare ga
// yeh function eval use kare ga jo expression ko evaluate kare ga
// aur result ko return kare ga
