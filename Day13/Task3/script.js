// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports.Import and use these funcyions in another script


import { add, subtract,multiply, divide } from './mathOperations.js';


const a = 10;
const b = 5;

console.log(`Add: ${a} + ${b} = ${add(a, b)}`); 
console.log(`Subtract: ${a} - ${b} = ${subtract(a, b)}`); 
console.log(`Multiply: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Divide: ${a} / ${b} = ${divide(a, b)}`); 
