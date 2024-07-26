// Day 9: DOM Manipulation
// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById('heading1').textContent = 'Hello';
// document.getElementById('heading1').style.backgroundColor = '#454545';

// Task 2: Select an HTML element by its class and change its background color.
document.getElementsByClassName('heading2')[0].style.backgroundColor = 'red';

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement('div');
newDiv.textContent = "This is from javascript";
newDiv.className = 'newDiv';
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement('li');
newLi.textContent = 'Element 2';
document.querySelector('.uList').appendChild(newLi);


// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
document.querySelector('.newDiv').remove();

// Task 6: Remove the last child of a specific HTML element.
document.querySelector('.uList').lastChild.remove()


// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const image = document.getElementById('imageId');
image.setAttribute('src', '../img/Bencly.png');

// Task 8: Add and remove a CSS class to/from an HTML element.
document.getElementById('heading1').classList.add('backgroundYellow');
document.getElementById('heading1').classList.remove('backgroundYellow');


// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    document.getElementById('paragraph').textContent = "Paragraph text changed"
})

// Task 10: Add a mouseover event listener to an element that changes its border color.
const box = document.getElementById('box');
box.addEventListener('mouseenter', function(){
    box.classList.toggle('changeBorderColor');
})
box.addEventListener('mouseout', function(){
    box.classList.remove('changeBorderColor');
})

// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.