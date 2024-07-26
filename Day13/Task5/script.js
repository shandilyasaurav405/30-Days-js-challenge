// Activity 3 : Importing entire Modules

// Task 5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.


import { PI, E, add, subtract, multiply, divide } from './utils.js'

console.log(`PI: ${utils.PI}`);
console.log(`E: ${utils.E}`);

const a = 10;
const b = 5;

console.log(`Add: ${a} + ${b} = ${utils.add(a, b)}`); 
console.log(`Subtract: ${a} - ${b} = ${utils.subtract(a, b)}`);
console.log(`Multiply: ${a} * ${b} = ${utils.multiply(a, b)}`);
console.log(`Divide: ${a} / ${b} = ${utils.divide(a, b)}`); 
