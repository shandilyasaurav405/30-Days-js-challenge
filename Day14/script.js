// Activity 1 : Class Defination

// Task 1 : Define a class Person with properties name and age,and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // Create an instance of the class
  const person = new Person('raju', 30);
  
  // Log the greeting message
  console.log(person.getGreeting());
  