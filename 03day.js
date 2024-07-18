//Day 3: Control Structures

// Activity 1:if-else statements

// Task 1: Check if a number is positive, negative or zero

let num = 30;

if (num > 0) {
    console.log("number is positive");
} else if (num < 0) {
    console.log("number is negative");
} else {
    console.log("number is Zero");
}

// Task 2:Program to check a person is eligible to vote

let age = 18;

if (age >= 18) {
    console.log("person is eligible to vote");
} else {
    console.log("person is not eligible to vote");
}

// Activity 2: Nested if-else statements

// Task 3:Largest of three numbers using Nested if-else statements

let a = 30,
    b = 7,
    c = 3;

if (a > b) {
    if (a > c) {
        console.log(`largest number is ${a}`);
    } else {
        console.log(`largest number is ${c}`);
    }
} else {
    if (b > c) {
        console.log(`largest number is ${b}`);
    } else {
        console.log(`largest number is ${c}`);
    }
}

// Activity 3: Switch case

// Task 4:program using switch case to determine the day of week based on number

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wendsday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Task 5:program using switch case to assign grade

let score = 75;
switch (true) {
    case score >= 90 && score <= 100:
        grade = "A";
        break;
    case score >= 80 && score < 90:
        grade = "B";
        break;
    case score >= 70 && score < 80:
        grade = "C";
        break;
    case score >= 60 && score < 70:
        grade = "D";
        break;
    case score >= 0 && score < 60:
        grade = "F";
        break;
    default:
        console.log("Invalid score.Enter a score between 0 and 100.");
        break;
}

console.log(`The grade for a score of ${score} is: ${grade}`);

// Activity 4: conditional (Ternary) operator

// Task 6:Program that uses  ternary to checkif a number is odd or even

let number = 10;
number % 2 === 0
    ? console.log(`${number} is Even`)
    : console.log(`${number} is Odd`);

// Activity 5: combining conditions

// Task 7:Program to check if a year is leap year

let year = 2025;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap year");
        } else {
            console.log("not a Leap year");
        }
    } else {
        console.log("Leap year");
    }
} else {
    console.log("not a Leap year");
}