// Day 8: ES6+ Features
// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const personName = "Amit";
const personAge = 22;
const str = `${personName} is ${personAge} years old`;
// console.log(str);


// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineStr = `Hello
this is 
multi-line string`;
// console.log(multiLineStr);


// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr = [1, 2, 3, 4, 5];
const [x, y] = arr;
// console.log(x,y);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "My book",
    author: "dibyendu",
    year: 2024
}
const { title } = book;
// console.log(title);


// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const newArr = [...arr, 10, 11, 12];
// console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...num) {
    let add = 0;
    num.forEach((elem) => {
        add += elem;
    })
    return add;
}
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4, 5));


// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. 
function multiply(num1, num2 = 1) {
    return num1 * num2;
}
// console.log(multiply(2));
// console.log(multiply(2,5));


// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const brandName = "Lenovo";
const processor = "intel i5 9th gen";
const price = 49999;
const show = function(){
    console.log(`${this.brandName} has price ${price}`);
}

const enhanceObj = {brandName,processor,price, show}
// enhanceObj.show();
// console.log(enhanceObj);


// Task 9: Create an object with computed property names based on variables and log the object to the console.
const name = "personName";
const age = "personAge";
const newObj = {
    [name]:"Dibyendu",
    [age]:22
}
console.log(newObj);
