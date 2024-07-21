// DOM Manipulation 
// Activity 1: Selecting and Manipulation Elements

// Task 1 : Select an HTML element by its ID and change its text contant.

function changeText(){
    let element = document.getElementById("hello");
element.textContent = "FCUK LOL"; 
}

// Task 2 : Select an HTML element by its class and change its background color.

function changeColor(){
    let ele = document.getElementsByClassName("changeColor")
    ele[0].style.backgroundColor = "red";
}


// Activity 2 : Creating and Appending Elements

// Task 3 : Create a new div element with some text content and append it to the body.

function clickToAppend(){
    let div = document.createElement("div");
    div.textContent = "I am a new div element";
    document.body.appendChild(div);
}

// Task 4 : Create a new li element and add it to an existing ul list.

function appendNewListItem() {
    
    const newListItem = document.createElement('li');
    
    
    newListItem.textContent = 'New Item';
    
  
    const ul = document.getElementById('myList');
    ul.appendChild(newListItem);
}


// Activity 3 : Removing Elements

// Task 5 : Select an HTML element and remove it from the DOM.

function remove(){
    let parent = document.getElementById("myList2").getElementsByTagName("ul")[0];
    let child = parent.getElementsByTagName("li")[0];

  parent.removeChild(child);
}

// Task 6 : Remove the last child of a specific HTML element.

function removeLast(){
    const ul = document.getElementById('myList3');

    if(ul.lastChild){
        ul.removeChild(ul.lastChild);
    }
}

// Activity 4 : Modifying Attributes and classes

// Task 7 : Select an HTML element and change one of its attributes(e.g., src of an img tag).


function changeImg(){
    let change = document.getElementById('myImg')
    change.setAttribute('src', 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600');
}

// Task 8 : Add and remove a CSS class to/ from an html element.


function addClass() {
    // Select the paragraph element
    const paragraph = document.getElementById('myParagraph');
    
    // Add the 'highlight' class to the paragraph
    paragraph.classList.add('highlight');
}

function removeClass() {
    // Select the paragraph element
    const paragraph = document.getElementById('myParagraph');
    
    // Remove the 'highlight' class from the paragraph
    paragraph.classList.remove('highlight');
}


// Activity 5 : Event handling

// Task 9 : Add a click event listner to button that changes the text content of a paragraph.

function changePara(){
    let element = document.getElementById("para");
    element.textContent = "chal ht be meri place se."; 
}


// Task 10 : add a mouseover event listner to an element that changes its border color.


// Select the element
const element = document.getElementById('myElement');

// Add a mouseover event listener
element.addEventListener('mouseover', function() {
    element.style.borderColor = 'red';
});

// Add a mouseout event listener to reset the border color
element.addEventListener('mouseout', function() {
    element.style.borderColor = 'black';
});
