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

console.log(operate('/', 5, 2.333));