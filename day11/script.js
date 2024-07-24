// Activity 1 : Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds!");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});


// Task 2 : Create a promise that rejects with an error message after 2-second timeout and handle the error using   .catch()  .

const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
       reject("Promise rejected"); 
    }, 2000)
})


// Activity 2 : Chaining Promises

// Task 3 : Create a sequence of promises that simulate fetching data from a server Chain the promise to log messages in a specific order. 



// Simulate fetching data with a promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data from ${url}`);
      }, Math.floor(Math.random() * 2000) + 1000); // Simulate a random delay between 1 and 3 seconds
    });
  }
  
  // Sequence of URLs to fetch
  const urls = [
    'https://api.server1.com/data',
    'https://api.server2.com/data',
    'https://api.server3.com/data'
  ];
  
  // Chain the promises to log messages in a specific order
  fetchData(urls[0])
    .then(data => {
      console.log(data);
      return fetchData(urls[1]);
    })
    .then(data => {
      console.log(data);
      return fetchData(urls[2]);
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  


    // Activity 3 : Using Async/Await

    // Task 4 : Write an async function that waits for promise to resolve and then logs the resolved value.

    function asyncFnOne() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("After 3 seconds...");
            }, 3000);
        });
    }
    const handleAsyncFnOne = async () => {
        const data = await asyncFnOne();
        console.log(data);
    }
    handleAsyncFnOne();
    

    // Task 5 : Write an async function that handles a rejected promise using try-catch and log the error message.


     function asyncFnTwo(){
        return new Promise((resolve,reject)=>{
              setTimeout(() => {
                reject("Error : Something went wrong");
              },3000);
        })
       }
    const handleAsyncFnTwo = async() =>{
        try{
            const data = await asyncFnTwo();
            console.log(data);
        } catch(error){
            console.log(error);
        }
    }
    handleAsyncFnTwo();

    // Activity 4 : Fetching Data from an API

    // Task 6 : Use the fetch API to get data from a public API and log the response data to the console using promise.


    fetch("https://catfact.ninja/fact")
    .then(Response => Response.json())
    .then(data => {
        console.log(`Fetched data from cat's api using ".then"`);
        console.log("Fun fact about cat: ", data.fact);

    })
    .catch(error => {
        console.log("Error: ", error);
    })


     // Task 7 : use the fetch API to get data from a public API and log the response data to the console using async/await.

     async function catFact() {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const data = await response.json();
            console.log(`Fetched data from cat's api using "async/await"`);
            console.log("Fun fact about cat: ", data.fact);
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    catFact();

    // Task 8 : Use Promise.all to wait for multiple promises to resolve and log all their values.

    const promiseX = new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("Inside Promise X");
        }, 1000);
    })
    const promiseY = new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("Inside Promise Y");
        }, 2000);
    })
    const promiseZ = new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("Inside Promise Z");
        }, 3000);
    })
    Promise.all([promiseX, promiseY, promiseZ])
        .then((values) => {
            console.log("Promise.all resolved all promises & their values are: ", values);
        });

// Task 9 : Use promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([promiseX, promiseY, promiseZ])
    .then(value => {
        console.log("Promise.race resolved value is: ", value);
    })
