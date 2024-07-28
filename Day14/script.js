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
  
  
 
 

  // Task 2 : Add a method to the Person  class that updates the age property and logs the updated age.

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
}
}

const person = new Person("John", 30);

console.log(person.getGreeting());

person.updateAge(31);