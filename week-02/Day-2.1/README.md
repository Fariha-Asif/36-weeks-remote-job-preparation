# 📘 Week 2.1 | Revision of Promises & Asynchronous JavaScript

This week focuses on revisiting and solidifying key asynchronous concepts in JavaScript: **callbacks**, **async functions**, **promises**, and understanding the difference between **promisified** and **non-promisified** functions.

---

## 🧠 Topics Covered

### 1. 🔁 Understanding Callbacks

**Definition:**  
A callback is a **function passed as an argument** to another function, which is then **executed after a certain task is completed**.

**Why use Callbacks?**  
JavaScript is single-threaded. To avoid blocking the main thread during time-consuming tasks (like API calls, file reading, etc.), callbacks allow us to **delay execution** until the task is done.

**Example:**
```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

fetchData((msg) => console.log(msg)); // Output: "Data received!" after 1 second

Limitations:

Callback Hell (Nested callbacks)

Difficult to manage error handling

Less readable code

2. 🧵 Asynchronous Functions
Definition:
Asynchronous functions allow non-blocking execution of code. JavaScript handles these via:

setTimeout

setInterval

Promises

Async/Await

Key Idea:
They let us perform tasks in the background while the main thread continues.

Real-world Example:
Imagine you order food at a restaurant. Instead of standing in the kitchen, you sit and wait while your food is prepared asynchronously. The waiter will "callback" you when it's ready!

3. 🔗 Promises
Definition:
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

States of a Promise:

Pending: Initial state

Fulfilled: Operation completed successfully

Rejected: Operation failed

Syntax:

js
Copy
Edit
let promise = new Promise((resolve, reject) => {
  // async code
  if (success) resolve(result);
  else reject(error);
});
Example:

js
Copy
Edit
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User fetched");
    }, 1000);
  });
};

fetchUser()
  .then((res) => console.log(res))    // Output: "User fetched"
  .catch((err) => console.error(err));
Benefits:

Better error handling

More readable than nested callbacks

Chainable with .then()

4. 🤹 Promisified vs. Non-Promisified Functions
🔸 Non-Promisified Function (Callback-Based):
js
Copy
Edit
function readData(callback) {
  setTimeout(() => {
    callback(null, "Data from DB");
  }, 1000);
}
🔹 Promisified Function:
js
Copy
Edit
function readData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from DB");
    }, 1000);
  });
}
Why Promisify?

Makes asynchronous code cleaner

Enables use of .then(), .catch() or async/await

Improves maintainability

Example Using async/await:

js
Copy
Edit
async function loadData() {
  try {
    const result = await readData();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
## 🚀 Summary

| **Topic**              | **Description**                                         |
|------------------------|---------------------------------------------------------|
| **Callbacks**          | Basic async mechanism, leads to nested code             |
| **Async Functions**    | Execute code in a non-blocking way                      |
| **Promises**           | Cleaner async structure with `.then()` / `.catch()`     |
| **Promisified Functions** | Return a Promise for cleaner async flow             |


📚 Real-Life Use Cases
Callbacks: Button clicks, file upload progress

Promises: API calls, user authentication

Async/Await: Data fetching in modern frontends (React, Next.js)

Promisified Functions: Wrapping fs.readFile in Node.js for use with await

