// Day 12: Error Handling
// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. 

function throwError() {
    throw new Error("This is a error");
}
try {
    // throwError();
} catch (e) {
    console.log("Task-1 error:",e.message);
    console.log("error was handled");
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function devide(num1, num2) {

    if (num2 === 0) {
        throw new Error("cannot devide by zero");
    }
    const result = num1 / num2;
    console.log(result);
}
try {
    // devide(5, 0);
}
catch (e) {
    console.log("Task-2 error:",e.message);
}


/*---------------------------------

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try{
    console.log("this inside try");
    // throw new Error("Error ocured");
}catch(e){
    console.log("this inside catch");
    console.log(e.message);
}finally{
    console.log("this inside finally");
}


// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class customError extends Error{
    constructor(msg){
        super(msg);
        this.name = "custom error";
    }
}
function useCustomError(num){
    if(num%2==0){
        throw new customError("This is not odd number");
    }
    else
        console.log("This is odd number");
}

try{
    useCustomError(4);
}catch(err){
    if(err instanceof customError){
        console.log("Task-4:"err.name, err.message);
    }
    else{
        console.log("Task-4 error: Unexpected error", err);
    }
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block. 
class customError2 extends Error{
    constructor(msg){
        super(msg);
        this.type = "Custom error string";
    }
}
function checkString(str){
    if(str.trim().length===0){
        throw new customError2("Empty string")
    }
    else
        return "pass";
}
try{
    console.log(checkString('  '));
}catch(err){
    console.log(err.type, err.message);
}

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        let randomNum = Math.floor(Math.random() * 10);
        if (randomNum < 6)
            res('randomly resolved')
        else
            rej('ramdomly rejected')
    }, 100);
})

myPromise.then((msg)=>{
    console.log('Task-6:',msg);
}).catch((msg)=>{
    console.log('Task-6 error:',msg);
})


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message. (connected with previous task-6)
async function handleError(){
    try{
        await myPromise;
    }catch(msg){
        console.log('handled inside func:');
    }
}
// handleError();


// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch('http://hell2341.css')
.then((response)=>{
    console.log("Task-8:",response);
}).catch((msg)=>{
    console.log('Task-8 error: \nErrorCode:',msg.cause.code);
})

----------------------------------*/

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchInvalidUrl(url){
    try{
        let data = await fetch(url);
        console.log('Task-9:', data);
    }catch(e){
        console.log('Task-9 error:',e.message);
    }
}
fetchInvalidUrl('http://hell2341.css');

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.
