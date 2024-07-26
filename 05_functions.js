// Task-1
function oddEven(num){
    console.log(`${num} is ${num%2===0 ? "even": "odd"}`);
}
oddEven(4);

// Task-2
function square(num){
    return num*num;
}
console.log('square of 6 is', square(6));

// Task-3
const max = (num1, num2)=>{
    if(num1>num2)
        console.log(num1, "is greater");
    else
        console.log(num2, "is greater");
}
max(4,9);

// Task-4
const concatenate = (msg1,msg2)=>{
    console.log(msg1 + msg2);
}
concatenate("Hello ", "World");

// Task-5
const sum = (num1, num2)=>{
    return num1 + num2;
}
console.log("sum of 5 and 9 is ", sum(5,6));

// Task-6
const checkContain = (msg)=>{
    if(msg.includes('a'))
        console.log("This message contain 'a'");
    else
        console.log("This message not contain 'a'");
}
checkContain('cat');

// Task-7
function product(num1, num2 = 1){
    return num1 * num2;
}
console.log(product(3));

// Task-8
function greet(msg, age = 18){
    console.log(`Hello ${msg}, you are now above ${age}`);
}
greet('binay', 50);

// Task-9
// Q -> Write a higher-order function that takes a function and a number, 
// and calls the function that many times.

/* Higher-order function => A higher order function is a function that takes 
one or more function as argument, or return a function as its result;
 */
function higherOrder(func, num){
    while(num>0){
        func(num--);
    }
}
function logFunc(num){
    console.log(num);
}

higherOrder(logFunc, 5);

// Task-10
function higherOrderTwo(func1, func2, num){
    let res1 = func1(num);
    let res2 = func2(res1);
    console.log("initial val", num ," final val", res2);
}
function func1(param){
    return param + 1;
}
function func2(param){
    return param + 10;
}
higherOrderTwo(func1, func2, 5)