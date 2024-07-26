// Day 11: Promises and Async/Await
// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// let myPromice = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise resolved');
//     }, 2000)
// });
// myPromice.then((value)=> console.log(value));


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch(). Activity 2: Chaining Promises
// let rejPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('promie rejected');
//     }, 2000)
// })
// rejPromise.then((handleReject) => console.log(handleReject));



// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order. 
// new Promise((res, rej) => {
// })
// fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10')
//     .then((responce) => responce.json())
//     .then((data) => {
//         console.log(data.data)
//         return data.data
//     }).then((data) => console.log(data.data));



// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// let asyncPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("promise resolve after 2s");
//     }, 2000)
// })
// async function hello() {
//     let responce = await asyncPromise;
//     console.log(responce);
// }
// hello();



// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// let myPromice = new Promise((res,rej)=>{
//     rej("rejected");
// })
// async function tryPromise(){
//     try{
//         let responce = await myPromice;
//         // console.log(responce);
//     }catch(e){
//         console.log("Error occured: ",e);
//     }
// }
// tryPromise();



// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

// let getData = new Promise((res,rej)=>{
//     fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10')
//     .then((response)=> res(response.json()))
// })
// new Promise((res,rej)=> res(getData))
// .then((data)=>{console.log(data);})


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

// async function asyncData() {
//     let getData = new Promise((res, rej) => {
//         fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10')
//             .then((response) => res(response.json()))
//             .then((data) => { getData = data });

//     })
//     console.log(await getData);
// }
// asyncData();



// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

// const promise1 = Promise.resolve('resolved');
// const promise2 = 21;
// const promise3 = new Promise((res,rej)=>{
//     res('res');
// })
// Promise.all([promise1,promise2,promise3])
// .then((data)=>{console.log(data);})


// Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.

const promise11 = new Promise((res) => setTimeout(res, 200, 'fast'))
const promise22 = new Promise((res) => setTimeout(() => {
    res('slow')
}, 500))
Promise.race([promise11, promise22])
    .then(value => {
        console.log(value);
    })


// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise. race to handle multiple promises concurrently and logs the results.