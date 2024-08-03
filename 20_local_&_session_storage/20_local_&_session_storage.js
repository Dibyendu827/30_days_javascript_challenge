// Day 20: LocalStorage and SessionStorage
// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem('setKey', "This is the value in localStorage");
console.log("Task-1:",localStorage.getItem('setKey'));

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObj = {
    task: "task-2",
    name:"dibyendu",
    age:22
}
localStorage.setItem('myObj', JSON.stringify(myObj));


// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
document.getElementById('submitBtn')
.addEventListener('click', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const myObj = {
        task : 'task-3',
        name : name,
        email : email,
    }
    localStorage.setItem('userInput', JSON.stringify(myObj))
})

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log('Task-4: before remove:',localStorage.getItem('myObj'));
localStorage.removeItem('myObj');
console.log('Task-4: after remove:',localStorage.getItem('myObj'));


// Activity 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem('mySession', 'String Here');
console.log("Task-5:",sessionStorage.getItem('mySession'));

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObj1 = {
    task : "task-6",
    todo: "save object in session storage"
}
sessionStorage.setItem("saveObj", JSON.stringify(myObj1));


// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
document.getElementById('newSubmitBtn')
.addEventListener('click',(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const myObj = {
        task : 'task-3',
        name : name,
        email : email,
    }
    sessionStorage.setItem('objInSession', JSON.stringify(myObj));
})

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log("Task-8: before remove:", sessionStorage.getItem('saveObj'));
sessionStorage.removeItem('saveObj');
console.log("Task-8: after remove:", sessionStorage.getItem('saveObj'));


// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToLocalSessionStorage(key, value){
    localStorage.setItem(key,value);
    sessionStorage.setItem(key,value);
}
saveToLocalSessionStorage('myKeyForBoth', 'MyStringForBoth');
console.log("Task-9:",localStorage.getItem('myKeyForBoth'));
console.log("Task-9:",sessionStorage.getItem('myKeyForBoth'));

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function removeAllFromBoth(key){
    localStorage.clear();
    sessionStorage.clear();
}
// removeAllFromBoth();

// Feature Request:
// 1. LocalStorage Script: Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.
// 2. SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.
// 3. Storage Comparison Script: Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.
// 4. Clear Storage Script: Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.

// Achievement:
// By the end of these activities, students will:
// Understand how to use localStorage and sessionStorage for persistent and session-specific data storage.
// Save, retrieve, and remove data from both localStorage and sessionStorage.
// Implement form data storage using localStorage and sessionStorage.
// Compare and contrast the use cases for localStorage and sessionStorage.