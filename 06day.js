// Day 6: arrayays

// Activity 1: arrayay creation and access

// Task 1:Create an array of numbers from 1 to 5

let array = [1, 2, 3, 4, 5];
console.log(array);

// Task 2:Access the first and last elementsof the array
console.log(array[0]);
console.log(array[4]);

// Activity 2:Arrayay methods(basic)

// Task 3:Use push method to add a number

array.push(6);
console.log(array);

// Task 4: Use pop method to remove the last element
array.pop();
console.log(array);

// Task 5:Use sifth method to remove first element
array.shift();
console.log(array);

// Task 6:Use unshift method to add a number tot he beginning
array.unshift(1);
console.log(array);

// Activity 3:Arrayay methods(Intermediate)

// Task 7:Use the map method to create a new array where each number is doubled

const newArray = array.map((num) => {
  return num * 2;
});

console.log(newArray);

// Task 8:Use the filter method to create a new array with only even numbers
const evenNum = array.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});

console.log(evenNum);

// Task 9:Use the reduce method to calculate the sum of all numbers in the array
const sum = array.reduce((sum, value) => {
  return sum + value;
}, 0);

console.log(sum);

// Activity 4:Arrayay Iteration

// Task 10:Use a for loop to iterate over the array

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Task 11: Use the forEach method to iterate over the array
array.forEach((value) => {
  console.log(value);
});

// Activity 5: Multi-dimensional arrayay

// Task 12:Create a two-dimensional array(matrix)

const multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiarray);

// Task 13:Access and log a specific element from the two-dimensional array
console.log(multiarray[3][1]);