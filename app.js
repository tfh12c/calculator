// JS for Themes
const blueModeToggle = document.querySelector('#blue-mode-toggle');
const lightModeToggle = document.querySelector('#light-mode-toggle');
const purpleModeToggle = document.querySelector('#purple-mode-toggle');
const htmlElement = document.querySelector('html');
const equalKey = document.querySelector('.calculator__equals');

window.onload = () => {
    blueModeToggle.classList.add('active');
}

blueModeToggle.addEventListener('click', () =>{
    htmlElement.removeAttribute('class');
    blueModeToggle.classList.add('active');
    lightModeToggle.classList.remove('active');
    purpleModeToggle.classList.remove('active');
})

lightModeToggle.addEventListener('click', () =>{
    htmlElement.removeAttribute('class');
    htmlElement.classList.add('lightmode');
    lightModeToggle.classList.add('active');
    blueModeToggle.classList.remove('active');
    purpleModeToggle.classList.remove('active');
})

purpleModeToggle.addEventListener('click', () => {
    htmlElement.removeAttribute('class');
    htmlElement.classList.add('purplemode');
    purpleModeToggle.classList.add('active');
    blueModeToggle.classList.remove('active');
    lightModeToggle.classList.remove('active');
    equalKey.style.color = 'hsl(198, 20%, 13%)';
})
// -------------------------------------------------------------

// Variables for HTML elements
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const input = document.querySelector('.display__input');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.reset');
const backspace = document.querySelector('.delete');

// Variables to store needed data.
let num1 = '';
let num2 = '';
let operator = '';
let displayingOperator = false; // Boolean to tell if numbers go to num1 or num2

//Event listeners for buttons
numbers.forEach(number => number.addEventListener('click', displayNumber));
operators.forEach(operator => operator.addEventListener('click', displayOperator));
equals.addEventListener('click', evaluate);
clear.addEventListener('click', clearDisplay);
backspace.addEventListener('click', clickBackspace);

function clickBackspace() {
    //if num1 exist, operator and num2 dont, clear num 1
    if (num1 && !operator && !num2) {
        num1 = num1.slice(0, -1);
        input.innerHTML = `${num1}`;
    }
    //if num1 and operator exist, and num2 doesnt, clear operator, keep num1
    if (num1 && operator &&!num2) {
        operator = '';
        input.innerHTML = `${num1}`;
    }
    //if num1, operator, num2 exist, clear num2 keep num1, operator
}

function clearDisplay() {
    input.innerHTML = '';
    num1 = '';
    num2 = '';
    operator = '';
    displayingOperator = false;
}

function evaluate() {
    //If there is no num1, operator, or num2, early return
    if (!num1 || !operator || !num2) {
        return;
    } else {
        //Run operate function, assign total to num1 for successive calculations, append to display
        //set num2 to null for future secondary operands, update displayingOperator to false
        operate(operator, num1, num2);
        num1 = operate(operator, num1, num2);
        input.innerHTML = num1;
        num2 = '';
        displayingOperator = false;
    }
}

function displayNumber(event) {
    const clickedNumber = event.target.textContent;
    //If no operator, clicks add numbers to variable num1
    if (!displayingOperator) {
        input.innerHTML += clickedNumber;
        num1 += clickedNumber;
    }
    //If operator is present, clicks add numbers to variable num2
    if (displayingOperator) {
        num2 += clickedNumber
        input.innerHTML = `${num1} ${operator} ${num2}`;
    }
}

function displayOperator(event) {
    const clickedOperator = event.target.textContent;
    //If user clicks operator with no num1, early return
    if (!num1) {
        return;
    }
    //If num1 exists, append operator to display with num1, update 
    //displayingOperator to true
    if (num1) {
        input.innerHTML = `${num1} ${clickedOperator}`;
        operator = clickedOperator;
        displayingOperator = true;
    }
}

const add = (num1, num2) => {
    const sum = (num1 + num2);
    return (Math.round((sum + Number.EPSILON) * 100) / 100);
}

const subtract = (num1, num2) => {
    const sum = (num1 - num2);
    return (Math.round((sum + Number.EPSILON) * 100) / 100);
}

const multiply = (num1, num2) => {
    const sum = (num1 * num2);
    return (Math.round((sum + Number.EPSILON) * 100) / 100);
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        return "ERROR";
    }
    const sum = (num1 / num2);
    return (Math.round((sum + Number.EPSILON) * 100) / 100);
}

const operate = (operator, num1, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null
    }
}