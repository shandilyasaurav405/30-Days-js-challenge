//  Day 12 : Error Handling 

// Activity 1 : Basic Error Handling with Try-Catch

// Task 1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. 

function throwsErrorFunction(){
    throw new Error("this is an intentional error !");
}

function handleError(){
    try{
        throwsErrorFunction();
    }
    catch(error){
        console.error("An error occured : " +error.message);
    }
}

handleError();

// Task 2 : Create a function that divides two numbers and throws an error if the denominator is zero.Use a try-catch block to handle this error.

function divide(num,den){
    if(den === 0){
        throw new Error("Cannot divide by zero");
    }
    return num / den;
}

function handleDivision(num, den){
    try{
        const result = divide(num, den);
        console.log(`Result: ${result}`);
    }
    catch(error){
        console.error(" An error occured : " +error.message);
    }
}
 
handleDivision(10, 2);
handleDivision(10, 0);


// Activity 2 : Finally Block 

// Task 3 : Write a script that includes a try-catch block. Log messages in the try, catch,and finally blocks to observe the execution flow.


function demonstrateTryCatchFinally() {
    try {
      console.log("Inside the try block.");
      
      // Intentionally throwing an error
      throw new Error("This is a test error.");
      
      // This line will not be executed
      console.log("This will not be logged.");
    } catch (error) {
      console.log("Inside the catch block.");
      console.error("An error occurred: " + error.message);
    } finally {
      console.log("Inside the finally block.");
    }
  }
  
  // Execute the function
  demonstrateTryCatchFinally();
  


//   Activity 3 : Custom Error Objects

// Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.


// Custom error class
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwCustomError() {
    throw new CustomError("This is a custom error message.");
  }
  
  function handleCustomError() {
    try {
      throwCustomError();
    } catch (error) {
      if (error instanceof CustomError) {
        console.error("Caught a custom error: " + error.message);
      } else {
        console.error("An unknown error occurred: " + error.message);
      }
    } finally {
      console.log("Execution complete.");
    }
  }
  
  // Test the function
  handleCustomError();


//   Task 5 : Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try-catch block.
  

// Custom error class
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  function validateInput(input) {
    if (input.trim() === "") {
      throw new ValidationError("Input cannot be empty.");
    }
    return "Input is valid.";
  }
  
  function handleValidation() {
    const userInput = ""; // Change this to test with different inputs
  
    try {
      const result = validateInput(userInput);
      console.log(result);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.error("Validation error: " + error.message);
      } else {
        console.error("An unknown error occurred: " + error.message);
      }
    } finally {
      console.log("Validation complete.");
    }
  }
  
  // Test the function
  handleValidation();


//   Activity 4 : Error Handling in Promises

// Task 6 : Create a promise that randomly resolves or rejects.Use .catch() to handle the rejection and log an appropriate message to the console.
  

function randomPromise() {
    return new Promise((resolve, reject) => {
      const isResolved = Math.random() > 0.5; // Randomly decide to resolve or reject
  
      setTimeout(() => {
        if (isResolved) {
          resolve("Promise resolved successfully!");
        } else {
          reject(new Error("Promise rejected!"));
        }
      }, 1000); // Simulate an asynchronous operation with a delay
    });
  }
  
  randomPromise()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("An error occurred: " + error.message);
    });


    // Task 7 : Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message. 
  

    function randomPromise1() {
        return new Promise((resolve, reject) => {
          const isResolved = Math.random() > 0.5; // Randomly decide to resolve or reject
      
          setTimeout(() => {
            if (isResolved) {
              resolve("Promise resolved successfully!");
            } else {
              reject(new Error("Promise rejected!"));
            }
          }, 1000); // Simulate an asynchronous operation with a delay
        });
      }
      
      async function handleRandomPromise1() {
        try {
          const result = await randomPromise1();
          console.log(result);
        } catch (error) {
          console.error("An error occurred: " + error.message);
        }
      }
      
      // Test the async function
      handleRandomPromise1();

    //    Task 8 : Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
      

    const invalidUrl = "https://invalid.url";

fetch(invalidUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Fetch error: " + error.message);
  });


//   Task 9 : Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData1() {
    const invalidUrl1 = "https://invalid.url";
  
    try {
      const response = await fetch(invalidUrl1);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
  }
  
  
  fetchData1();
  