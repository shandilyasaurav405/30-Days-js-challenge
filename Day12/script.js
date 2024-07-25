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