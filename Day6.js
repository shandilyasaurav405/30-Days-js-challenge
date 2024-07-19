// Day 6 : Arrays

// Activity 1 : Array Creation and Access

// Task 1: Create an array of numbers form 1 to 5 and log the aaary to the console.

let arr =[1,2,3,4,5];
console.log(arr);

// Task 2: Access the first and last elements of the array and log them to the console.

let firstEle = arr[0];

let lastEle = arr[arr.length-1];

console.log(firstEle);
console.log(lastEle);

// Activity 2 : Array Methods(Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

let arr1 = [1,2,3,4,5];
arr1.push(6);
console.log(arr1);

// Task 4: Use the pop method to remove the last elementof the array and log the updated array.

let arr2 = [1,2,3,4,5,6];
arr2.pop(6);
console.log(arr2);

// Task 5 : Use the shift method to remove the first element from the array and log the updated array.

const array = [1, 2, 3, 4, 5]; 

 array.shift();
 console.log(array);


 // Task 6 : Use the unshift method to add a new number to  the begining of the array and log the updated array.

 let array2 = [2,3,4,5,6];
 array2.unshift(1);
 console.log(array2);

 // Activity 3 : Array Methods(Intermediate)

//  Task 7 : Use the map method to create a new array where each number is doubled and log the new array.

const array3 = [1, 2, 3, 4, 5];

const doubledArray = array3.map(number => number * 2);

console.log(doubledArray);


//  Task 8 : Use the filter method to create a new array with only even numbers  and log the new array.

const array4 = [1, 2, 3, 4, 5,6];
const evenArray = array4.filter(number => number % 2 === 0);

console.log(evenArray);

// Task 9 : Use the reduce method to calculate the sum of all numbers in the array and log the result.

const array5 = [1,2,3,4,5,6,7,8,9,10];
const sum = array5.reduce((acc, curr) => acc + curr, 0);
console.log(sum);



// Activity 4 : Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.


let array6 =[1,2,3,4,5,6,7,8];

for(let i=0; i<array6.length;i++){
    console.log(array6[i]);
}

// Task 11 : Use the forEach method to iterate over the array and log each element to the console.

let array7 = [1,2,3,4,5,6,7,8,9];
array7.forEach(element => console.log(element));

// Activity 5 : Multi- dimensional Arrays

// Task 12 : Create a two dimensional array (matrix) and log the entire array to the console.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log(matrix);

//   Task 13 : Access and log a specific element from the two-dimensional array. 

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  let element = matrix1[1][2];
  console.log(element);

  