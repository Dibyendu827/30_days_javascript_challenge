// Day 1: Variables and Data Types

// Activity 1: Variable Declaration
// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num1 = 5;
console.log(num1);

// • Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let num2 = "Hello";
console.log(num2);

// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const boolVal = true;
console.log(boolVal);

// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator. 
const num3 = 2;
const str1 = "wecome";
const bool2 = false;
const obj1 = {
    userName:"dibyendu",
    password:123
}
const arr = [2,3,4,'a', true];

console.log(typeof num3);
console.log(typeof str1);
console.log(typeof bool2);
console.log(typeof obj1); // object
console.log(typeof arr); // object


// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let newVal = 7;
newVal = 10;
console.log(newVal);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const constantValue = 'a';
// constantValue = 'b';
console.log(constantValue);

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.


// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment. 