// Day 7: Objects

// Activity 1: Object Creation and MediaKeySystemAccess

// Task 1: Create an Object representing a book with properties like title, author, and year and log the object to the console

const book = {
    title: "JavaScript",
    author: "Brendan Eich",
    year: 1995
}
console.log(book);

//Task 2: Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book.author);

//Activity 2: Object Methods

//Task 3: Add a method to the book object that returns a string with the book's title and author
book.string = () => {
    return `Title of book is ${book.title} and author of this book is ${book.author}`;
};
console.log(book);
console.log(book.string());


//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property.
book.updateYear = function (year) {
    book.year = year;
  };
  
  book.updateYear(2024);
  
  console.log(book);
  

//Activity 3: Nested Objects

//Task 5:Create a nested object representing a library with properties like name and books (an array of book objects)

const library = {
    name: "The Library",
    books: [
      {
        title: "Python programming",
        author: "Guido van Rossum",
        year: 1991,
      },
      {
        title: " C programming",
        author: " Dennis Ritchie",
        year: 1978,
      },
      {
        title: "Java",
        author: "James Gosling",
        year: 1995,
      }
      
    ],
  };
  
  console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library
console.log("Library name is: ",library.name);

library.books.forEach((books) => {
  console.log(book.title);

});

//Activity 4: The 'this'Keyword

//Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method
book.titleYear = function () {
  return `Title of the book is ${this.title} and  published in ${this.year}`;
};

console.log(book.titleYear());

//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (let prop in book) {
  console.log(`properites:  ${prop} and value: ${book[prop]}`);
}

//Task 9: Use a Object.keys and Object.values method to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));