// Objects

// Activity 1 : Object Creation and access

//  Task 1: Create an object representing a book with properties like title , author and year , and log the object to the console.

let book = {
    "title":"Hero",
    "author":"Rohit",
    "year":2020,

}
console.log(book);

// Task 2 : Access and log thetitle and author properties of the book object.

let title = book.title;
let author = book.author;

console.log(title);
console.log(author);


// Activity 2 : Object Methods

// Task 3 : Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    getTitleAndAuthor: function() {
      return `${this.title} by ${this.author}`;
    }
  };
  

  console.log(book1.getTitleAndAuthor());


//   Task 4 : Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.


const books = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    updateYear: function(newYear) {
        this.year = newYear;
    }
};
books.updateYear(2020);
console.log(books);

// Activity 3 : Nested Objects

// Task 5 : Create a nested object representing a library with properties like name and books(an array of objects), and log the library object to the console.

const library = {
    name: 'City Library',
    books: [
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
      },
      {
        title: '1984',
        author: 'George Orwell',
        year: 1949
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
      }
    ]
  };
  

  console.log(library);


//   Task 6 : Access and log the name of the library and the titles of all the books in the library.

let name = library.name;



console.log(name);

library.books.forEach(book => {
    console.log(book.title);
  });

//   Activity 4 : The this Keyword

// Task 7 : Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.



const book3 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    getTitleAndAuthor: function() {
      return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
      this.year = newYear;
    },
    getTitleAndYear: function() {
      return `${this.title} was published in ${this.year}`;
    }
  };
  
  
  console.log(book3.getTitleAndYear());

//   Activity 5 : Object Iteration 

// Task 8 : Use a for...in loop to iterate over the properties of the book objkect and log each property and its value.
  


const books1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
   
  };
  
  
  for (const property in book) {
    if (books.hasOwnProperty(property)) {
      console.log(`${property}: ${book[property]}`);
    }
  }

  // Task 9 : use object.keys and object.values methods to log all the keys and values of the book object.
  

  const books2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    
  };
  
  
  console.log('Keys:', Object.keys(books2));
  
  
  console.log('Values:', Object.values(books2));