"use strict";

// PROMISES

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network calls, etc.
  setTimeout(() => {
    console.log("Aasync task is complete");
    resolve()
  }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed")
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2 is complete")
        resolve()
    }, 1000)    
}).then(function() {
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Fariha", email: "fari123@example.com"})

    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        reject(new Error("Error occurred"))
    }, 1000)
})
promiseFour.then(function(user) {
    console.log(user);
}).catch(function(err) {
    console.log(err.message)
})
