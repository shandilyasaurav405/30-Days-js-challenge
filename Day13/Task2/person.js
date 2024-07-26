
// person.js
const person = {
    name: 'saurav shandilya',
    age: 24,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    celebrateBirthday() {
      this.age += 1;
      console.log(`It's my birthday! I am now ${this.age} years old.`);
    }
  };
  

  export { person }
  