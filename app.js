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
    // num1 = Number(num1);
    // num2 = Number(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null
    }
}
