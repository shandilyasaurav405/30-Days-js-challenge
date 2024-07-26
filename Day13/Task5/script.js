// Activity 3 : Importing entire Modules

// Task 5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.


import * as entire from "./utils.js";

console.log("PI:", entire.PI);
console.log("COUNT:", entire.COUNT);

console.log("Added Value:", entire.add(30, 4));
console.log("Subtracted Value:", entire.subtract(30, 4));
console.log("Multiplied Value:", entire.multiply(30, 4));
