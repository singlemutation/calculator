let add = function(a, b) {
    return (a + b);
}

let subtract = function(a, b) {
    return (a - b);
}

let multiply = function(a, b) {
    return (a * b);
}

let divide = function(a, b) {
    return (a / b);
}

let firstNumber;
let operator;
let secondNumber;

let operate = function(operator, firstNumber, secondNumber) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
}