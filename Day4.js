// Loops

// Activity 1 : For Loop

// Task 1 : 
// Write a program using for loop that prints the numbers from 1 to 10.

for(let i=1; i<=10; i++){
    console.log(i +" ");
}


// Task 2: 
// Write a program to print the multiplication table of 5 using for loop.

for(let i=1; i<=10;i++){
    console.log(5*i +" ");
}


// Activity 2 : while loop

// Task 3 : Write a program to calculate the sum of numbers from 1 to 10 ussing a while loop.


let sum =0; 
let num =1;

while(num<=10){
    sum += num;
    num++;
}
console.log(sum);

// Task 4 : Write a program to print number from 10 to 1 using a while loop.

let number = 10;
while(number>=1){
    console.log(number);
    number--;
}

// Activity 3 : Do...while loop
// Task 5 : 
// Write a program to print the numbers from 1 to 5 using a do...while loop.

let a =1;

do{
    console.log(a);
    a++;
}
while(a<=5);

// Task 6: Write a program to calculate the factorial of a number using do..while loop.


let number1 = 5; 
let factorial = 1;
let i = 1;

do {
  factorial *= i;
  i++;
} while (i <= number1);

console.log("The factorial of " + number1 + " is: " + factorial);


// Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****

for(let i=1; i<=5;i++){
    let pattern ='';
    for(let j=1;j<=i;j++){
        pattern +='*';
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements

// Task 8 : Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(let i=1; i<=10; i++){

    if(i ==5){
        continue;
    }
    else{
        console.log(i);
    }
}

// Task 8 : Write a program to print numbers from 1 to 10, but stop  the loop when the number is  7 using the break statement.

for(let i=1; i<=10; i++){

    if(i ==7){
        break;
    }
    else{
        console.log(i);
    }
}