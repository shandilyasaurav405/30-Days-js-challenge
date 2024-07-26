// Activity 4 : Using Third-Party Modules

// Task 6 : Install a third-party moule (e.g., lodash) using npm. Import the entire modules as an object in another script and use its properties.

import _ from "lodash";
const arr = [31, 21, 23, 43, 34, 4];
console.log("Arrays:", arr);
console.log("Arrays last value:", _.last(arr));
console.log("Arrays first value:", _.head(arr));
console.log("Reveres of array:", _.reverse(arr));

console.log("Max in array:", _.max(arr));
console.log("Min in array:", _.min(arr));
console.log("Sum of all elements in array:", _.sum(arr));