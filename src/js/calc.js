let display = document.getElementById('display'); 
let erase = false;

// Function to update the display
function addToDisplay(input) {
    if (erase) {
        if (['+', '-', '*', '/'].includes(input)) {
            erase = false; 
        } else {
            display.value = ''; 
        }
    }
    if (display.value === 'error') {
        display.value = '';
    }
    display.value += input; 
}

// Function to clear the display
function reset() {
    display.value = '';
    erase = false;
}

// Function to calculate the result
function calculate() {
    erase = true;
    try {
        if (display.value.trim().length === 0) {
            display.value = 'error'; 
        } else {
            display.value = eval(display.value); 
        }
    } catch (error) {
        display.value = 'error'; 
    }
}

// Function to handle button clicks
function handleButtonClick(event) {
    const button = event.target;
    const value = button.getAttribute('data-value');
    
    if (button.id === 'clear') {
        reset();
    } else if (button.id === 'equals') {
        calculate();
    } else {
        addToDisplay(value);
    }
}

// Attach event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
