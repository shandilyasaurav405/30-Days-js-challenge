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



// Activity 3 : static Methods and Properties

// Task 5 : Add a ststic method to the Person class that returns a generic greeting message.Call this method without creating an instance of the class and log the message.

console.log(Person.genericGreeting());


// Task 6 : Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

const std2 = new Student("saurav", "Shandilya", 20, 1);
console.log(Student.studentCount);

// Activity 4 : Getters and Setters

// Task 7 : Add a setter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

const person2 = new Person("Raju", "pele", 22, 8)
console.log(person2.fullName);



// Task 8 : Add a setter method to the Person class to update the name properties (firstName and LastName). Update the name using the setter and log the updated full name.

person2.fullName = "Krishna";
console.log(person2.fullName);
// It'll give error, as we are assigning three words
person2.fullName = "krishna kumar Bele";
console.log(person2.fullName);


// Activity  5 : Private  Fields(Optional)

// Task 9 : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    // In JavaScript, the # symbol is used to declare private fields within a class. Private fields are only accessible within the class they are defined in, meaning they cannot be accessed or modified from outside the class, even by subclasses. This helps in encapsulating the class's internal state and provides a way to restrict direct access to certain properties.
    // Property '#balance' is not accessible outside class 'Account' because it has a private identifier
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        return `Rs. ${amount} is deposited to your account. ${this.getBalance()}`;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            return `Insufficient Balance!`;
        } else {
            this.#balance -= amount;
            return `Rs. ${amount} withdrawn successfully. ${this.getBalance()}`;
        }
    }

    getBalance() {
        return `Your current balance is Rs. ${this.#balance}`;
    }
}
// It'll gives error, as we accessing private fields
// console.log(acc1.#balance);
