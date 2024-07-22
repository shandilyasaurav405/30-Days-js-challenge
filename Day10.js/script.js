
// Activity 1 : Basic Event Handling

// Task 1 : Add a click event listner to a button that changes the text content of a paragraph.

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('changeTextButton');
    const paragraph = document.getElementById('textParagraph');

    button.addEventListener('click', () => {
        paragraph.textContent = 'This is the new text.';
    });
});


// Task 2 : Add a double-click event listner to an image that toggles its visibility.


document.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById('toggleImage');

    image.addEventListener('dblclick', () => {
        if (image.style.display === 'none') {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
});


// Activity 2 : Mouse Events
// Task 3 : Add a mouseover event listner to an element that changes its background color.

document.addEventListener('DOMContentLoaded', (event) => {
    const colorBox = document.getElementById('colorBox');

    colorBox.addEventListener('mouseover', () => {
        colorBox.style.backgroundColor = 'lightgreen';
    });

    
});

//  Task 4 : Add a mouse out event listner to an element that reset its background color.
document.addEventListener('DOMContentLoaded', (event) => {
    const colorBox = document.getElementById('colorBox');
    colorBox.addEventListener('mouseout', () => {
        colorBox.style.backgroundColor = 'lightblue';
    });
});


// Activity 3 : keyboard events

//  Task 5 : Add a keydown event listner to an input field that logs the key pressed to the console.

document.addEventListener('DOMContentLoaded', (event)=>{
   
    const inputField = document.getElementById('keyInput');

    inputField.addEventListener('keydown', (event)=>{
          console.log(`key pressed : ${event.key}`);
    })
})


// Task 6 : Add a keyup event listner to an input field that displays the current value in a paragraph.

document.addEventListener('DOMContentLoaded', (event) => {
   

    inputField.addEventListener('keyup', () => {
        displayParagraph.textContent = inputField.value;
    });
});

// Activity 4 : Form Events 

// Task 7 : Add a submit event listner to a form that prevens the default submission and logs the form data to the console. 


document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('dataForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log(formObject); // Log the form data to the console
    });
});


// Task 8 : Add a change event listner to a select dropdown that displays the selected value in  a paragraph.



document.addEventListener('DOMContentLoaded', (event) => {
    const selectDropdown = document.getElementById('options');
    const displayParagraph = document.getElementById('displayParagraph');

    selectDropdown.addEventListener('change', () => {
        displayParagraph.textContent = `Selected value: ${selectDropdown.value}`;
    });
});



// Activity 5 : Event Deligation

// Task 9 : Add a submit event listner to a form that prevents the default submission and logs the form data to the console.


document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('dataForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log(formObject); // Log the form data to the console
    });
});



//  Task 10 : Add a click event listner to a parent element that listens for events from dynamically added child elements.

document.addEventListener('DOMContentLoaded', (event) => {
    const addElementButton = document.getElementById('addElementButton');
    const parentElement = document.getElementById('parentElement');

    // Add click event listener to the button to add new child elements
    addElementButton.addEventListener('click', () => {
        const newElement = document.createElement('div');
        newElement.className = 'childElement';
        newElement.textContent = `Child Element ${parentElement.children.length + 1}`;
        parentElement.appendChild(newElement);
    });

    // Add click event listener to the parent element
    parentElement.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('childElement')) {
            console.log(`Clicked on: ${event.target.textContent}`);
        }
    });
});

