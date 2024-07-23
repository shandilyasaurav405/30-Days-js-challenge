// Activity 1 : Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds!");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});
