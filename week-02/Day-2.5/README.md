# Week 2.4 | Express (Basics)

This week focuses on understanding the basics of Express.js and how HTTP servers work in JavaScript. You will learn how to create a basic server, handle different types of requests, and use tools like Postman for testing.

---

## 📘 Topics Covered

### 🧵 Single Threaded Nature of JavaScript
- How JavaScript handles tasks using a single-threaded event loop
- Difference between synchronous and asynchronous operations

### 🌐 HTTP Servers
- Introduction to HTTP and how servers respond to client requests
- Building a basic HTTP server using Node.js

### ⚡ Express.js
- Overview of Express - a fast, minimal web framework for Node.js
- Why use Express over plain Node.js?

### 🧩 Types of HTTP Methods
- GET, POST, PUT, DELETE – when and why to use each

### 🛠️ Basic HTTP Server & Routes
- Creating a basic server with different routes using Express
- Route handling and structure

### 💬 Taking Input in HTTP Servers
- Reading data from request body and URL

### ❓ Query Parameters
- Understanding and extracting query parameters from URLs

### 🔁 Request & Response
- What are `req` and `res` in Express?
- How to read request data and send a response

### 📥 Types of Request Methods
- Explanation of HTTP methods (GET, POST, PUT, DELETE, PATCH)
- Use cases in RESTful APIs

### 🔢 Status Codes
- Common HTTP response codes (200, 404, 500, etc.)
- What they mean and when to use them

### 🧪 What is Postman?
- Introduction to Postman for API testing
- How to make different types of requests and check responses

---

## 🧠 Learning Outcome
By the end of this week, you’ll be able to:
- Set up a basic Express server
- Handle various HTTP methods
- Use query parameters and route parameters
- Understand request and response objects
- Test your APIs using Postman

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- Basic understanding of JavaScript

### Installation
```bash
npm init -y
npm install express

Sample Server

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

🧰 Tools
Node.js

Express

Postman

📎 Resources
MDN - HTTP Basics

Express Documentation

Postman Learning Center

