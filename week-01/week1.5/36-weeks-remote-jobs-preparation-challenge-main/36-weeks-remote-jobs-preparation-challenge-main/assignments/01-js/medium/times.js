/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // start time
    const startTime = new Date();

    // add numbers one by one
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i
    }
    // end time
    const endTime = new Date();
    // calculate time
    const timeTaken = (endTime - startTime) / 1000; // converted in seconds

    return timeTaken;
}

// Example usage
const n1 = 100;
const n2 = 100000;
const n3 = 1000000000;
const result1 = calculateTime(n1);
const result2 = calculateTime(n2);
const result3 = calculateTime(n3);
console.log(`Time taken for sum from 1 to ${n1}: ${result1} seconds`);
console.log(`Time taken for sum from 1 to ${n2}: ${result2} seconds`);
console.log(`Time taken for sum from 1 to ${n3}: ${result3} seconds`);

