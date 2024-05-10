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
            console.log(displayContent)
            console.log(typeof displayContent)

            const clear = document.querySelector(".clear");
            clear.addEventListener("click", () => {
            display.textContent = ''
            displayContent = display.textContent;
            })
            
            const equals = document.querySelector(".equals");
            equals.addEventListener("click", () => {
             if (displayContent.includes('x')) {
              let displayArr = displayContent.split('x')
              let product = multiply(displayArr[0], displayArr[1])
              display.textContent = product
            }
            })
        });
    });






// split string with operator as separator
