## Week 2.2 | Filter, Map, Arrow Functions

In this session, we explored key modern JavaScript functionalities that help write cleaner, more expressive, and more efficient code. Below are the core concepts covered:

---

### 🚀 Arrow Functions
Arrow functions offer a shorter syntax for writing functions in JavaScript. They are more concise and lexically bind the `this` keyword, which makes them especially useful in callbacks or when working with functional programming patterns.

**Benefits:**
- Shorter syntax compared to traditional functions.
- No binding of `this`, making it predictable in scope.
- Useful in higher-order functions like `.map()`, `.filter()`, `.reduce()`.

**Example Syntax:**
```js
const add = (a, b) => a + b;

🗺️ Map Function
The map() method is used to transform elements in an array. It returns a new array where each element is the result of a callback function applied to the original array elements.

Use Case:

Transforming data structures.

Modifying arrays without mutating the original.

Key Points:

Does not change the original array.

Always returns a new array of the same length.

🔍 Filter Function
The filter() method creates a new array with all elements that pass a certain test implemented by a provided callback function.

Use Case:

Removing unwanted items from an array.

Keeping items based on conditions.

Key Points:

Original array remains unchanged.

Only elements that return true from the callback are included.

✅ startsWith Function
The startsWith() method is used to determine whether a string begins with specific characters.

Use Case:

Validating input or identifiers.

Searching or matching string patterns.

Key Points:

Returns a boolean (true or false).

Case-sensitive by default.

Example:

"JavaScript".startsWith("Java") // true

✅ These modern JavaScript features are essential for writing clean, readable, and maintainable code in real-world applications. Mastery of map, filter, and arrow functions will significantly improve your functional programming skills in JavaScript.