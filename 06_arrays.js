// Task-1
// ceate an array and log
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task-2
// access the first and last element of the array and log
console.log('First element:', arr[0]);
console.log('Last element:', arr[arr.length - 1]);

// Task-3
// use push method and log
arr.push(10);
console.log(arr);

// Task-4
// use pop method and log
arr.pop();
console.log(arr);

// Task-5
// use shift method and log
arr.shift();
console.log(arr);

// Task-6
// use unshift method and log
arr.unshift(12);
console.log(arr);

// Task-7
// use map to create a new array where each number is doubled
const newArr = arr.map((eachElem) => eachElem * 2);
console.log(newArr);

// Task-8
// use filter to create a new array with only the even numbers
const evenArr = arr.filter((elem)=> elem%2===0);
console.log(evenArr);

// Task-9
// use reduce method to calculate the sum of all number in the array
const sum = arr.reduce((prev, curr)=> prev + curr);
console.log(sum);

// Task-10
// use for loop to iterate over the array
for(let i=0; i<evenArr.length; i++){
    console.log(evenArr[i]);
}

// Task-11
// use forEach loop to iterate over the array
evenArr.forEach((elem)=>{
    console.log(elem);
})

// Task-12
// create a 2d array and log
const arr2d = [['Anik',90],['Mita',84],['Binay',92],['Akash',73]];
console.log(arr2d);

// Task-13
// Access specific element from the 2d array
console.log(arr2d[2][1]);