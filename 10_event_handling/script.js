// Day 10: Event Handling
// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.querySelector('.changeTextBtn').addEventListener('click', () => {
    document.querySelector('.changeText').innerHTML = 'Text Changed';
})

// Task 2: Add a double-click event listener to an image that toggles its visibility.
document.querySelector('.imgBox').addEventListener('dblclick', () => {
    document.querySelector('.image').classList.toggle('hide');
})


// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
document.querySelector('.bgcChanger').addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow';
})

// Task 4: Add a mouseout event listener to an element that resets its background color.
document.querySelector('.bgcChanger').addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'red';
})


// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.querySelector('.inputField').addEventListener('keydown', event => {
    // console.log(event.key);
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.querySelector('.inputField').addEventListener('keyup', event => {
    document.querySelector('.textChanger').textContent = event.target.value;
    // console.log(document.querySelector('.textChanger').textContent);
})


// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.querySelector('.myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.firstName.value, event.target.lastName.value);
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.querySelector('.selection').addEventListener('change', (e) => {
    document.querySelector('.selectedValue').textContent = `The selectd option is: ${e.target.value}`;
})

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

// The idea in event delegation is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
const myList = document.querySelector('.myList')
myList.addEventListener('click', e => {
    console.log(e.target.textContent);
})

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
let listId = 4;
document.querySelector('.addListItem').addEventListener('click', (e) => {
    const newLi = document.createElement('li');
    newLi.textContent = `List Item ${listId}`;
    listId++;
    myList.appendChild(newLi);
    // console.log(myList.firstElementChild.textContent);
    // console.log(myList.lastElementChild.textContent);
})


// Feature Request:
// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners. 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.