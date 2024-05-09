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
    } if (operator === 'x') {
        return multiply(firstNumber, secondNumber);
    } if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
}

const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".input");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
            let displayContent = display.textContent;
            return displayContent;
        });
    });

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => operate())

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = ''
    displayContent = display.textContent;
})
