// Activity 1 : Template literals

// Task 1 : Use template literals to create a string that includes variables for a person's name and age , and log the string to console.

const name = "Saurav";
const age = 22;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

// Task 2: Create a multi-line string using template literals and log it to the console.

const name1 = "saurav";
const age1 = 22;
const address = "123 Samastipur";

const message1 = `Hello, my name is ${name1} and I am ${age1} years old.
I live at ${address}.
It's nice to meet you!`;

console.log(message1);

// Activity 2 : Destructuring

// Task 3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [10, 20, 30, 40, 50];

const [first, second] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

// Task 4 : Use object destructuring to extract the title and author  from a book object and log them to the console.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
}

 const { title, author } = book;

console.log(`title of the book is : ${title}`);
console.log(`Author of book is : ${author}`);

// Activity 3 :

// Task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const originalArray = [1, 2, 3];
const additionalElements = [4, 5, 6];

const newArray = [...originalArray, ...additionalElements];

console.log(newArray);

// Task 6 : Use the rest operator in a function to accept an arbitrary number of  arguments , sum them and return the result.
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); 

// Activity 4 : Default Parameters

// Task 7 : write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(num1, num2 = 1){
    return num1 * num2;
}

console.log(product(2,3));
console.log(product(5));

// Activity 5 : Enhanced Object Literals

// Task 8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name2 = "saurav";
const age2 = 30;

const person = {
    name2,
    age2,
    greet() {
        console.log(`Hello, my name is ${this.name2} and I am ${this.age2} years old.`);
    },
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Age updated to ${this.age}`);
    }
};

console.log(person);
person.greet();
person.updateAge(31);
console.log(person);


// Task 9 : Create an object with computed property names based on variables and log the object to the console.

const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const person2 = {
    [propName1]: "Saurav",
    [propName2]: "Shandilya",
    [propName3]: 22
};

console.log(person2);
