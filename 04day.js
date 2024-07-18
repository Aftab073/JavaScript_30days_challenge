// Day 4: Loops
//Activity 1: for loop

//Task 1: Print numbers from 1 to 10 using for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}


//Task 2: Print multipication of 5 using for loop

for (let i = 0; i < 10; i++) {
    console.log(i*5);
}

//Activity 2: While loop

//Task 3: Calculate the sum of numbers from 1 to 10 
let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log("The sum of numbers from 1 to 10 is " + sum);

//Task 4: Print numbers from 10 to 1
let m = 10;

while (m >= 1) {
    console.log(m);
    m--;
}

//Activity 3: Do while loop

//Task 5: Print numbers from 1 to 5
let numb = 1
do {
    console.log(numb);
    numb ++
} while (numb <= 5);

//Task 6: Calculate factorial of number

let number = 5; 
let result = 1;
let z = number;

do {
    result *= z;
    z--;
} while (z > 0);

console.log("The factorial of " + number + " is " + result);

//Activity 4: Nested LOOPS
//TASK 7:Write a program to print apattern using nested for loops

for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= i; j++) {
      console.log("* ");
    }
    console.log();
  }
  
  //Activity 5: Loop control statement
  // Task 8: Print number from 1 to 10, but skip number 5 using continue statement
  for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
    
  }

  //Task 9: Program to print numbers from 0 to 10, but stop the loop when the number is 7 using break statement

for (let index = 1; index < 10; index++) {
    if(index ===7) break;
}
