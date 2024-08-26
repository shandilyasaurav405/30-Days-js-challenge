// Function
// Activity 1: Function Declaration

// Task 1: 
// Write a function to check if a number is even or odd and log the result to the console.


function EvenOdd(number){
    if(number % 2 == 0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd.");
    }
}
EvenOdd(5);

// Task 2: 
// Write a function to calculate the square of  a number and return the result.

function square(num){
    return num * num;
}

let result = square(5);

console.log(result);

// Activity 2: Function Expression

// Task 3:
// write a function expression to find the maximumm of two numbers and log the result to the console.

const findMaximum = function(a, b) {
    const max = (a > b) ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
    return max;
};
findMaximum(10, 15);

// Task 4:
// Write a function expression to concatinate two strings and return the result.

const concat = function(s1,s2){
   return s1+s2 ;
}
console.log(concat("Hello","World"));

// Activity 3:Arrow  Function

// Task 5:
// Write a arrow function to calculate the sum of two numbers and return the result.

let sum = (n1,n2)=>{
       return n1+n2;
}
console.log(sum(6,6));

// Task 6:
//Write a arrow function to check if a string contains a specific character and return boolean value

const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("hello", "e"));


// Activity 4:Function parameters and Default Values 

// Task 7:

//  Write a function that takes two parameters and returns their product. Provide a default value for the second parameter

function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 3));
console.log(multiply(5, 3));

// Task 8: 
// Write a function that takes a person's name and age and returns a greeting message. Privide a default value for  the age.

function greet(name, age = 20) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Alice", 25));
console.log(greet("Bob"));   

// Activity 5: Higher-Order Functions

// Task 9: Write a higher -order function that takes a function and a number, and calls the function that many times.

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3);

// Task 10: 
// write a higher-order function that takes two functions and a value, applies the second function to the result.


function applyFunctions(fn1, fn2, value) {
    const firstResult = fn1(value);
    const finalResult = fn2(firstResult);
    return finalResult;
}

const double = x => x * 2;
const square = x => x * x;

const result2 = applyFunctions(double, square, 5);
console.log(result2);

