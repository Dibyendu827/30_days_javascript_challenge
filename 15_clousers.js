// Day 15: Closures
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result. 
function outer() {
    let myName = "Dibyendu";
    function inner() {
        console.log(myName);
    }
    return inner;
}
let myFunc = outer();
myFunc();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
const counter = (function () {
    let privateCounter = 0;
    function changeCounter(num) {
        privateCounter += num;
    }
    return {
        increment() {
            changeCounter(1);
        },
        decrement() {
            changeCounter(-1);
        },
        value() {
            return privateCounter;
        }
    }
})();

counter.increment()
console.log("Task-2:", counter.value());


// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
const myId = (function generateId() {
    let id = 1;
    let lastId;
    return {
        getId() {
            lastId = id;
            return id++;
        },
        lastId() {
            return lastId;
        }
    }
})()
console.log("Task-3:", myId.getId());
console.log("Task-3:", myId.lastId());
console.log("Task-3:", myId.getId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
const greet = function (name) {
    return ("Hello " + name);
}
console.log("Task-4:", greet('Ayan'));


// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
let arr = [];
for (let i = 0; i <= 5; i++) {
    (function (index) {
        arr.push(function () {
            console.log("Task-5:", index);
        })
    })(i)
}
arr[2]();
arr[3]();

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const item = (function () {
    const itemArr = [];
    return {
        add: function (newItem) {
            itemArr.push(newItem);
        },
        remove: function (rmItem) {
            const index = itemArr.indexOf(rmItem);
            if (index !== -1) {
                itemArr.splice(index, 1)
            }
        },
        list: function () {
            console.log("Task-6:", itemArr);
        }
    }
})()

item.add('item1');
item.add('item2');
item.list();
item.remove('item1')
item.list();


// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function funcMemorizer(addition) {
    const cache = {};
    return function inner(...args) {
        const n = `${args}`;
        if(n in cache){
            return cache[n];
        }
        else{
            const result = addition(args[0], args[1]);
            cache[args] = result;
            return result;
        }
    }
}
function addition(num1, num2){
    return num1 + num2;
}

let mem = funcMemorizer(addition);
console.log("Task-7:", mem(1,3));
console.log("Task-7:", mem(2,8));
console.log("Task-7:", mem(1,3));

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memorizeFactorial(fn) {
    const cache = {};
    return function (arg) {
        const n = arg;
        if (n in cache) {
            return cache[n];
        }
        else {
            const result = fn(arg);
            cache[n] = result;
            return result;
        }
    };
}

function fact(num) {
    if (num === 0)
        return 1;
    else
        return num * fact(num - 1);
}

const memorize = memorizeFactorial(fact);
console.log("Task-8:",memorize(5));
console.log("Task-8:",memorize(2));
console.log("Task-8:",memorize(5));

// Feature Request:
// 1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
// 2. Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.
// 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.
// 4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// 5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.

// Achievement:
// By the end of these activities, students will:
// Understand and create closures in JavaScript.
// Use closures to maintain private state and create encapsulated modules.
// Apply closures in practical scenarios like generating unique IDs and memoization.
// Use closures in loops to capture and use variables correctly.