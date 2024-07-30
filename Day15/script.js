// Activity 1 : Understanding Closures

// Task 1 : Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

const { functions } = require("lodash")

function greet() {
    const hello = "hello";
    return function world() {
        return hello + " world";
    }
}
const helloWorld = greet();
console.log(helloWorld());
console.log(greet()());

// Task 2 : Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function privateCounter(){
    let counter = 0;
    return {
        increment() {
            counter++;
        },
        getCounter() {
            return `Counter is ${counter}`;
        }
    }
}

const counter = privateCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCounter());

// Activity 2 : Practical Closures

// Task 3 : Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and incrementit with each call.

function uniqueIdGenerator() {
    let id = 0;
    return () => ++id;
}
const getId = uniqueIdGenerator();
console.log("Id is: ", getId());
console.log("Id is: ", getId());
console.log("Id is: ", getId());
console.log("Id is: ", getId());

// Task 4 : Create a closure that captures a user's name and returns a function that greets the user by name.

function greetUser(username) {
    return () => `Hello ${username}, have a great day!`;
}
const userOne = greetUser("Anirudha")();
console.log(userOne);
const userTwo = greetUser("Rohit")();
console.log(userTwo);


// Activity 3 : Closures in Loops

// Task 5 : Write a loop that creates ank array of functions. Each function should log its index when called.

function createArrayOfFunctions() {
    const functions = [];
    for (let i = 1; i <= 8; i++) {
        functions.push(
            function logIndex(index) {
                return () => index;
            }(i)
        );
    }
    return functions;
}

const functionArray = createArrayOfFunctions();
// this will give array of functions
console.log(functionArray);
// calling each function in array
for (const fn of functionArray) {
    console.log(fn());
}


// Activity 4 : Module Pattern

// Task 6 : Use closures to create a simple module for managing a collection of items Inmplement methods to add, and list items.

// i.e. "I I F E" (Immediately Invoked Function Expression)
const collectionManager = (() => {
    let items = [];
    return {
        add(...item) {
            items.push(...item);
        },
        remove() {
            items.pop();
        },
        listItems() {
            return items;
        }
    };
})();
collectionManager.add("item1");
collectionManager.add("item2", "item3", "item4", "item5");
collectionManager.remove();
console.log(collectionManager.listItems());



// Activity 5 : Memoization 

// Task 7 : Write a function that memoizes the results of another function. Use a closure to store the results of previous computaations.

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] === undefined) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));

// Task 8 : Create a memoized version of function that calculates the factorial of a number.

function getFactorial() {
    const cache = {};

    return function factorial(num) {
        if (num in cache) {
            return cache[num];
        } else {
            let fact = 1;
            for (let i = 1; i <= num; i++) {
                fact *= i;
            }
            cache[num] = fact;
            return fact;
        }
    };
}

const factorial = getFactorial();

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(7));
console.log(factorial(2)); 