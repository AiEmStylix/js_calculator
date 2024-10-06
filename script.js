let operator = "";
let previousNum = 0;
let nextNum = 0;
const display = document.querySelector(".display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    operator = "";
    previousNum = 0;
    nextNum = 0;
}

function setOperator(operatorInput) {
    if (display.value !== "") {
        if (previousNum === 0) {
            previousNum = parseFloat(display.value);
            display.value = "";
        } else {
            calculate();
        }
        operator = operatorInput;
    }
}

function calculate() {
    if (operator !== "" && display.value !== "") {
        nextNum = parseFloat(display.value);
        let result;
        switch (operator) {
            case '+':
                result = previousNum + nextNum;
                break;
            case '-':
                result = previousNum - nextNum;
                break;
            case '*':
                result = previousNum * nextNum;
                break;
            case '/':
                if (nextNum === 0) {
                    result = "Error: Division by zero";
                } else {
                    result = previousNum / nextNum;
                }
                break;
            default:
                return;
        }
        display.value = result;
        previousNum = result;
        nextNum = 0;
        operator = "";
    }
}