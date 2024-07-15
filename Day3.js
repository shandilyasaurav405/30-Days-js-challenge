// Activity 1: If-Else Statements

// Task 1:
// Write a program to chack if a number is positive , negative, or zero and log the result to the console.

function checkNumber(number) {
    if (number > 0) {
        console.log(`${number} is positive.`);
    } else if (number < 0) {
        console.log(`${number} is negative.`);
    } else {
        console.log(`${number} is zero.`);
    }
}

checkNumber(10);
checkNumber(-5);  
checkNumber(0); 

// Task 2: 

// Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function eligible(age){
    if (age >= 18) {
        console.log(`You are eligible to vote.`);

    }
    else{
        console.log("Not eligible to vote");
    }
}

eligible(13);
eligible(18);

// Activity 2: Nested If-else Statements

// Task 3: 
// Write a program to find the largest of three numbers using nested if-else statements.

function largest(a,b,c){
    if(a > b  || a>c){
        console.log(`${a} is largest number among all.`);
    }
    else if(b > a || b>c){
        console.log(`${b} is largest number among all.`);
    }

    else if(c>a || c>b){
        console.log(`${c} is largest number among all.`);
    }
}

largest(4,6,8);

// Activity 3: Switch case 
// Task 4:
// Write a program that uses switch case to determine the day of the week based on a number (1-7) and log the day name to the console.


function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }

    console.log(dayName);
}


getDayName(1); 
getDayName(5); 
getDayName(8); 



// Task 5:
// Write a program that uses switch case to assign a grade ('A','B','C','D','F') based on the score and log the grade to the console.

function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }

    console.log(grade);
}


getGrade(95); 
getGrade(85); 
getGrade(75); 
getGrade(65); 
getGrade(55); 
getGrade(-10); 
getGrade(110); 


// Activity 4: Conditional(Ternary) Operator

// Task 6:

// Write a program that uses ternary operator to check if a number is even or odd and log the result to the console.


function checkEvenOrOdd(number) {
    const result = (number % 2 === 0) ? 'Even' : 'Odd';
    console.log(result);
}


checkEvenOrOdd(4); 
checkEvenOrOdd(7); 
checkEvenOrOdd(0); 
checkEvenOrOdd(-1); 

// Activity 5: Combining Conditions 

// Task 7:
// Write a program to check if a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.


function checkLeapYear(year) {
    let isLeapYear;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

    console.log(`${year} is ${isLeapYear ? '' : 'not '}a leap year.`);
}


checkLeapYear(2020); 
checkLeapYear(1900); 
checkLeapYear(2000); 
checkLeapYear(2023); 
