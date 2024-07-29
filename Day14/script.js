// Activity 1 : Class Defination

// Task 1 : Define a class Person with properties name and age,and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(fname, lname, age) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
  }

  get fullName() {
      return `${this.fname} ${this.lname}`;
  }

  // A 'set' accessor must have exactly one parameter.
  set fullName(newName) {
      const fullName = newName.split(" ");
      if (fullName.length === 2) {
          [this.fname, this.lname] = newName.split(" ");
      } else {
          console.error(`Invalid name format, Please provide only first and last name.`);
      }
  }

  greeting() {
      return `Hello, This is ${this.fullName} and I'm ${this.age} years old.`;
  }

  // method to update the age
  updateAge(newAge) {
      this.age = newAge;
  }

  // static method - can be called without any instance
  static genericGreeting() {
      return `Hello, from the "Person" class.`
  }
}
const person1 = new Person("saurav", "shandilya", 22);
console.log(person1.greeting());

  
  
 
 

  // Task 2 : Add a method to the Person  class that updates the age property and logs the updated age.

  person1.updateAge(20);
  console.log(person1.greeting());
  




// Activity 2: Class Inheritance

// Task Task 3: Define a Student class that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID. 

class Student extends Person {
  static studentCount = 0;
  constructor(fname, lname, age, sId) {
      super(fname, lname, age);
      this.sId = sId;
      Student.studentCount++;
  }
  getSId() {
      return `Student Id: ${this.sId}`;
  }
  greeting() {
      return `Hello, This is ${this.fullName} and I'm ${this.age} years old. My student id is: ${this.sId}`;
  }
}
const std1 = new Student("Saurav","Shandilya",  22, 9);
console.log(std1.getSId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

console.log(std1.greeting());