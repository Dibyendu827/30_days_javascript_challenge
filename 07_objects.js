// Day 7: Objects
// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties 
// like title, author, and year, and log the object to the console.
const book = {
    title: "My book",
    author: "dibyendu",
    year: 2024
}
// console.log(book);

// Task 2: Access and log the title and author properties of the book object.
// console.log(book.title, 'is written by', book.author);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string 
// with the book's title and author, and log the result of calling this method.
// **Arrow funtion will not work here**
book.show = function () {
    return `Title: ${this.title}, Author: ${this.author}`
}
// console.log(book.show());


// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.changeYear = function (year) {
    this.year = year;
}
book.changeYear(2000);
// console.log(book);


// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "My library",
    books: {
        book11: {
            title: "book1",
            year: 2012
        },
        book12: {
            title: "book2",
            year: 2012
        },
        book23: {
            title: "book3",
            year: 2012
        },
        book24: {
            title: "book4",
            year: 2012
        }
    }
}
// console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
// console.log(library['name']);

for (const key in library) {
    if(typeof library[key] === 'object'){
    for (const insideKey in library[key]){
        // console.log(library[key][insideKey].title);
    }
}
}

// Activity 4: The this Keyword
//  Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
library.showBooks = function () {
    let str = '';
    for (const k in this.books){
        str += (`Title: ${this.books[k].title}, Publish year:${this.books[k].year}\n`);
    }
    return str;
}

// console.log(library.showBooks());

// Activity 5: Object Iteration
//  Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let i in library.books){
    // console.log(`key:${i},value:`, library.books[i]);
}

//  Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log('keys:',Object.keys(library.books),'\nValues:', Object.values(library.books));

