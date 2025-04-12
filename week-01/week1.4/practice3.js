"use strict";

// CALLBACKS / ASYNC AWAIT/ PROMISES:

//Scenerio:

/* 1. Register
2. send welcoe email
3. login
4. get user data
5. display user data
*/

function register (callback) {
    setTimeout(() => {
        console.log("register end")
        callback()
    }, 4000)
}

function sendEmail (callback) {
    setTimeout(() => {
        console.log("email sent")
    }, 2000)
}

function login (callback) {
    setTimeout(() => {
        console.log("login end")
    }, 3000)
}

function getUserData (callback) {
    setTimeout(() => {
        console.log("get user data end")
    }, 5000)
}

function displayUserData () {
    setTimeout(() => {
        console.log("display user data end")
    }, 1000)
}

// callback hell:
register(function () {
    sendEmail(function () {
        login(function () {
            getUserData(function () {
                displayUserData()
            })
        })
    })
})

console.log("other application work")