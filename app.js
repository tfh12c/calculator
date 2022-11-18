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

// Variables to store needed data.
let num1 = '';
let num2 = '';
let operator = '';
let displayingOperator = false; // Boolean to tell if numbers go to num1 or num2


numbers.forEach(number => number.addEventListener('click', displayNumber));
operators.forEach(operator => operator.addEventListener('click', displayOperator));
equals.addEventListener('click', evaluate);

function evaluate() {
    if (!num1 || !operator || !num2) {
        return;
    } else {
        operate(operator, num1, num2);
        num1 = operate(operator, num1, num2);
        input.innerHTML = num1;
        num2 = '';
        displayingOperator = false;
    }
    // operate(operator, num1, num2);
    // console.log(operate(operator, num1, num2));
}

function displayNumber(event) {
    const clickedNumber = event.target.textContent;
    if (!displayingOperator) {
        input.innerHTML += clickedNumber;
        num1 += clickedNumber;
        console.log(num1);
    }
    if (displayingOperator) {
        num2 += clickedNumber
        console.log(num2);
        input.innerHTML = `${num1} ${operator} ${num2}`;
    }
}

function displayOperator(event) {
    const clickedOperator = event.target.textContent;
    if (!num1) {
        input.innerHTML = 'Please enter a number';
    }
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
        return 'ERROR';
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