# Week 2.4 | Express (Basics)

Welcome to Week 2.4 of our backend development journey! This week focuses on learning the foundational concepts behind HTTP servers, Express.js, and API handling in Node.js.

---

## 📘 Topics Covered with Detailed Explanation

---

### 🧵 1. Single Threaded Nature of JavaScript

JavaScript, by design, is **single-threaded**, meaning it can only execute **one operation at a time**. However, it doesn't block processes due to its **asynchronous non-blocking** nature powered by:
- **Event Loop**
- **Callbacks**
- **Promises**
- **async/await**

This allows Node.js (which uses JavaScript) to handle **many connections** at once without using threads for each one — perfect for building scalable web apps.

---

### 🌐 2. HTTP Servers

An **HTTP server** is a piece of software that accepts HTTP requests from clients (like browsers or Postman) and responds with appropriate content (HTML, JSON, text, etc.).

In Node.js, you can create one using the `http` module:
```js
import http from 'http';

const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});

server.listen(3000);

However, building complex routes and middleware logic is easier with Express.js.

⚡ 3. Express
Express.js is a popular, fast, and minimal web framework for Node.js that simplifies:

Routing

Middleware integration

Handling requests and responses

Creating REST APIs

Install it using:

npm install express
Example usage:

import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000);
🧩 4. Types of HTTP Methods
These methods define the kind of action a client wants to perform:

GET: Retrieve data

POST: Send new data to the server

PUT: Replace an existing resource

PATCH: Update a part of the resource

DELETE: Remove a resource

They map directly to CRUD operations:

Create (POST)

Read (GET)

Update (PUT/PATCH)

Delete (DELETE)

🛠️ 5. Basic HTTP Server & Routes
In Express, we define routes to handle various paths and methods:

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});
Routes determine how your server should respond to different requests.

💬 6. Taking Input in HTTP Servers
Inputs can be received in different ways:

Query Parameters – /search?term=node

Route Parameters – /user/:id

Request Body – Used in POST/PUT requests

To parse request body (JSON), use:

app.use(express.json());
Access input:

req.query.term
req.params.id
req.body.name

❓ 7. Query Parameters
Query parameters are appended to URLs after ?, often used for searching or filtering:

bash
/products?category=shoes&price=low
Access in Express using:


req.query.category  // shoes
req.query.price     // low
🔁 8. What is Request and Response?
In Express:

Request (req): The incoming HTTP request. It holds data like headers, query params, body, method, etc.

Response (res): The server’s reply. We use it to send back HTML, JSON, status codes, or files.

Example:


app.get('/', (req, res) => {
  res.status(200).send('Everything OK');
});
📥 9. Types of Request Methods

Method	Usage
GET	Fetch data from server
POST	Submit new data
PUT	Replace existing data
PATCH	Partially update data
DELETE	Remove data
Each method helps implement RESTful API design.

🔢 10. Status Codes
Status codes inform the client about the result of their request.


Code	Meaning
200	OK – Success
201	Created – Resource saved
400	Bad Request – Invalid input
401	Unauthorized – Login required
404	Not Found
500	Server Error

Example:

res.status(404).send('Not Found');
🧪 11. What is Postman?
Postman is an API testing tool that allows you to:

Make requests (GET, POST, etc.)

Send JSON or form data

Add headers (e.g., tokens)

Test API responses

🔧 It’s a must-have tool for backend developers to test endpoints during development.

🚀 Example Express Project Setup

import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/about', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
✅ Don’t forget to add "type": "module" in your package.json to support ES Modules.

🧰 Tools You’ll Use
Node.js

Express.js

Postman

📚 Resources
MDN: HTTP Methods

Express Docs

Postman Learning Center