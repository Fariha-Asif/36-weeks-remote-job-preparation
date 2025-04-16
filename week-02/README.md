Week 02 - Full Summary and Concepts

Week 2.1 | Revision Of Promises, Async JS

✨ Understanding Callbacks

A function passed as an argument to another function.

Allows you to execute code after another completes.

Used heavily in asynchronous programming.

Use Case: File reading, API requests.

⏳ Asynchronous Functions

Execute operations without blocking the main thread.

Essential in JavaScript for handling tasks like fetching data.

Example: setTimeout, fetch, etc.

🔗 Promises

An object representing the eventual completion (or failure) of an async operation.

Cleaner alternative to callbacks.

.then() for success, .catch() for failure.

⚖️ Promisified vs. Non-Promisified Functions

Non-Promisified: Uses callbacks.

Promisified: Returns a Promise.

Easier to chain and use with async/await.

Week 2.2 | Bash And Terminal (Basics)

🔌 Introduction to Terminals

Interface to interact with your operating system via commands.

🔍 Basic Commands

pwd - Shows current directory.

cd - Change directory.

ls - List contents.

mkdir - Make new directory.

touch - Create new file.

cat - View file content.

vi - Open file in Vi editor.

mv - Move or rename files/folders.

cp - Copy files/folders.

⚙️ Tools

Installing Node.js

Using node to run JS files.

Using npm to install libraries.

Week 2.3 | Bash (Advanced) & Installing Node JS

📂 Advanced Terminal Commands

rm - Remove files/folders.

chmod - Change permissions.

echo - Print messages to terminal.

head / tail - Show first/last lines.

wc - Word count.

grep - Search text.

pipe (|) - Chain commands.

history - Show command history.

script - Record terminal sessions.

sed, awk - Text processing tools.

⚒️ Install Node.js

Official download or use version managers (e.g., nvm).

Verify with node -v and npm -v.

Week 2.4 | Express (Basics)

🚀 JavaScript Runtime & Web Servers

JS is single-threaded, handles async tasks using event loop.

HTTP servers handle requests & responses.

📍 Express Framework

Lightweight framework for building web servers.

Routes define endpoints.

Methods: GET, POST, PUT, DELETE.

📄 HTTP Essentials

Request & Response - Key parts of server-client communication.

Query Parameters - Inputs in the URL.

Status Codes: 200 OK, 404 Not Found, etc.

🔢 Tools

Postman - API testing tool.

Week 2.5 | Filter, Map, Arrow Functions

🔢 Arrow Functions

Concise way to write functions.

🔹 Map Function

Transforms each element of an array.

🔍 Filter Function

Filters elements based on condition.

🔍 startsWith Function

Checks if string starts with specific value.

Week 2.6 | Git and GitHub

✨ Version Control Basics

Git is a distributed version control system.

GitHub is a platform to host Git repositories.

⚖️ Git Types

Centralized vs Distributed VCS.

⚙️ Key Concepts

Repos, Commits, Branches, Merge, Pull Requests.

Push code using CLI.

Authenticate and handle merge conflicts.

⚒️ Common Git Commands

git init, add, commit, status, log

git push, pull, clone

branch, merge