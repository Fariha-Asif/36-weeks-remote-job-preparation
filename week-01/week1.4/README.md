# 📚 Week 1.4 – Async, Await & Promises in JavaScript 🚀

Welcome to **Week 1.4** of the **36-Week JavaScript Challenge!**  
This week, I explored one of the most important concepts in modern JavaScript — **Asynchronous Programming**.

In JavaScript, tasks like API calls, file reading, and timers don’t happen instantly — and that’s where **Promises**, **Async/Await**, and **Callback Functions** come into play. They help JavaScript handle these operations without blocking the rest of the code.

---

## 📌 Topics Covered

### 🔄 Async VS Sync Functions

- **Synchronous (Sync)** functions execute **one line at a time** in a sequence.
- **Asynchronous (Async)** functions allow the code to continue running while waiting for a long task (like API response) to complete.

| Feature       | Synchronous                         | Asynchronous                             |
|---------------|-------------------------------------|------------------------------------------|
| Execution     | Runs line-by-line                   | Can pause and resume later               |
| Blocking      | Blocks code until task finishes     | Doesn’t block, continues with next line  |
| Use Case      | Basic logic                         | Network calls, timers, file I/O, etc.    |

---

### 🧩 Promises

A **Promise** is a special JavaScript object that represents a value that may be available now, later, or never.

#### 🔘 States of a Promise:
- **Pending** – The initial state
- **Fulfilled** – The operation was completed successfully
- **Rejected** – The operation failed

#### 🧠 Basic Syntax:
```javascript
const myPromise = new Promise((resolve, reject) => {
  // async task
  resolve("Success"); // or reject("Error");
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
✅ Why Promises?
Better readability than nested callbacks

Chaining multiple tasks is easier

Built-in error handling using .catch()

⏳ Async / Await
async and await make it easier to work with Promises by writing asynchronous code that looks synchronous.

📌 Key Points:
async keyword is used to declare a function that returns a Promise.

await pauses the execution until the Promise is resolved.

🧪 Example:
javascript
Copy
Edit
async function fetchData() {
  let response = await fetch("https://api.example.com");
  let data = await response.json();
  console.log(data);
}
This approach makes the code cleaner and easier to debug.

⚖️ Callback Functions vs Promises
Both callbacks and promises are used for async programming, but promises solve many problems associated with traditional callback-based code.

| **Feature**        | **Callback Functions**                                | **Promises**                                            |
|--------------------|--------------------------------------------------------|---------------------------------------------------------|
| **Syntax**         | Can lead to deeply nested code (callback hell)         | Cleaner and flat using `.then()` and `.catch()`         |
| **Readability**    | Harder to read in complex flows                         | Easy to read, maintain, and debug                       |
| **Error Handling** | Must handle errors manually                             | Built-in error handling via `.catch()`                  |
| **Chaining**       | Complicated, messy nesting                              | Supports clean chaining                                 |
| **Scalability**    | Not ideal for multiple async tasks                      | Much better for handling sequences                      |
| **Modern Usage**   | Less common today                                       | Widely used with `fetch()`, APIs, etc.                  |


✅ Practice Tasks
Create a function that returns a Promise and resolve it after 2 seconds using setTimeout().

Handle that promise using .then() and .catch().

Write an async function that fetches dummy data from an API using await.

Rewrite a basic callback-based task using a Promise for comparison.

📚 Resources
📖 MDN – Promises

📖 MDN – async/await

📖 JavaScript Info – Promises

🧠 “Mastering async programming is key to building modern, scalable apps. Promises and async/await make JavaScript powerful, elegant, and readable.”

See you in Week 1.5! 🌟