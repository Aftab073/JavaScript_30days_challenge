//Day 5: Functions

//Activity 1: Function declaraion
//Task 1: Function to check if a number is even or odd

function check(number) {
    if (number % 2 === 0) {
        console.log("The number " + number + " is even");
    } else {
        console.log("The number " + number + " is odd");
    }
}

check(4); // Op: The number 4 is even
check(7); // Op: the number 7 is odd

//Task 2: Function to calculate the square of  a number and return the result

function sqr(num) {
    return num * num
}
sqr(5);

//Activity 2: Function Expression
//Task 3: Function expression to find max of two numbers 
const findMax = function (a, b) {
    return (a > b) ? a : b;
};

let num1 = 10;
let num2 = 20;

let max = findMax(num1, num2);
console.log("The maximum number is " + max);

//Task 4:Function expression to concate two strings   
const concateStr = function (str1, str2) {
    return str1 + str2;

}
let name = concateStr("Aftab", "Tamboli");
console.log(name);

//Arrow function
//Task 5: Calculate the sum of two numbers
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(5, 6));

//Task 6: Check if a string contains a specific  character and return a boolean value

const checkChar = (char, str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return 1;
        }
    }
    return 0;
};

console.log(checkChar("a", "Aftab"));

// Activity 4: Function parameters and default Values
// Task 7: Function that takes two parameters and return their product. Provide a default value for second parameter 

function findProduct(num1, num2 = 5) {
    return num1 * num2;
}

console.log(findProduct(10, 20));
console.log(findProduct(10));

// Task 8:Function that takes person's name and age and return a greeting msg. Provide default value for for the age. 


function greet(name, age = 18) {
    return "good morning " + name + " your age is " + age;
}

console.log(greet("Aftab", 22));

console.log(greet("Alice"));

// Activity 4: Higher-order function

// Task 9: Function that takes a function and a number, and calls the function that many times

function fun() {
    console.log("Function is called");
}

function callFun(fun, num) {
    for (let i = 1; i <= num; i++) {
        fun();
    }
}

callFun(fun, 3);

// Task 10:Function that takes two function and a value, applies the first function to the value, and then applies sec function to the result
function fun1(value) {
    return value * 10;
}

function fun2(value) {
    return value / 100;
}

function find(fun1, fun2, value) {
    let result = fun1(value);
    result = fun2(result);
    return result;
}

console.log(find(fun1, fun2, 700));
