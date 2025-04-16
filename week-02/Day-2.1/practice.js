// Callbacks:

/* Basic Callback Practice
Write a function greetUser that takes a name and a callback. The callback should display a greeting message like "Hello, John!".
*/

function greetUser(name, callback) {
    function displayGreeting() {
        console.log(`Hello, ${name}!`);
    }
    displayGreeting()
}

greetUser("John"); // Output: Hello, John!

/* Nested Callbacks (Callback Hell Example)
Simulate 3 steps of a process using setTimeout and callbacks:

Step 1: "Loading user..."

Step 2: "Fetching data..."

Step 3: "Process complete."

*/

console.log("Start Process...");

setTimeout(() => {
    console.log("Loading user...");
    setTimeout(() => {
        console.log("Fetching data....")
        setTimeout(() => {
            console.log("Process complete...")
        },2000)
    },1000)
    
},4000)

/* Convert a synchronous function to callback-based
You have a function add(a, b) which returns the sum. Convert it to accept a callback that returns the result instead.
*/

function add(a, b, callback) {
    const result = a + b;
    callback(result);
}

function printSum(result) {
    console.log(`Sum of two numbers are: ${result}`)
};

add(2, 4, printSum); 

/*  Asynchronous Functions:

Use setTimeout to simulate a delay
Write a function delayedLog() that logs "This message is delayed" after 2 seconds.

*/

function delayedLog(){
    setTimeout(() => {
        console.log("This message is delayed");        
    } ,2000)
}

delayedLog()

/* Async File Simulation
Create a function downloadFile(fileName) that logs "Downloading file: xyz..." after a delay. Use setTimeout.
*/

function downloadFile(fileName){
    setTimeout(() => {
        console.log("Downloading file: " + fileName + "...")
    }, 1000)
}

downloadFile("xyz.pdf");

/* Promises
Create a Promise manually
Write a function isEven(num) that returns a Promise:

Resolves with "Even number" if the number is even

Rejects with "Odd number" if the number is odd

*/

function isEven(num){
    return new Promise((resolve, reject) => {
        if(num % 2 === 0) {
            resolve("Even Number...")
        } else {
            reject("odd number...")
        }
    })
}

isEven(23)
.then((message) => {
    console.log("Success", message)
}).catch((error) => {
    console.log("Error", error)
})

/* Chain Promises
Write three functions that return Promises (getUser, getPosts, getComments) and chain them to simulate data loading.

*/

function getUser(callback){
    setTimeout(() => {
        console.log("User data loaded")
        callback();
    },1000)
}

function getPosts(callback){
    setTimeout(() => {
        console.log("getting posts")
        callback()
    },2000)
}

function getComments(callback){
    setTimeout(() => {
        console.log("getting comments..")
        callback()
    }, 1000)
}

// callback hell:

getUser(() => {
    getPosts(() => {
        getComments(() => {

        })
    })
})

/* Handle Errors in Promises
Create a function that randomly resolves or rejects. Handle both success and failure using .then() and .catch().
*/

function randomPromise(){
    return new Promise((resolve, reject) => {
        resolve("Successfully attempted")
        reject("Failed to attempt")
    })
}

randomPromise()
.then((message)=> {
    console.log("Success", message)
}).catch((error) => {
    console.log("Error", error)
})

/*
Promisified Functions
Promisify a Callback-Based Function
You have this:

function readFile(file, callback) {
  setTimeout(() => {
    callback(null, "File content here...");
  }, 1000);
}
Convert it to a promisified version using new Promise.
*/

function readFile(file) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const content = "File content here..."
        resolve(content);
        reject("Error reading file")

        },1000)
        
    })
}   

readFile("abc.txt")
.then((data) => {
    console.log("data", data)
})
.catch((error) => {
    console.log("Error", error)
})

/*
Use async/await with Promisified Function
Use the promisified readFile function from above with async/await to read the file and log its content.
*/

function readFile1(file) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const content = "File content here..."
        resolve(content);
        reject("Error reading file")

        },1000)
        
    })
}  

async function readFileAsync(file) {
    try {
        const data = await readFile("abc.txt")
        console.log("successfully", data)
    } catch {
        console.error("failed", error)
    }
}

readFileAsync()



/* 
Build a simple async/await flow
Create an async function that:

Waits for a promise to resolve after 1 second

Logs a message "Done waiting!"
*/

function waiting(data){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("successful")
            reject("failed")
        }, 1000)
    })
}

async function waitingAns(){
    try{
        const wait = await waiting("abc data")
        console.log("Done waiting")
    } catch {
        console.log("waiting error")
    }
}

waitingAns()