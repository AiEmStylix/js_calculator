let num1 = 0;
let num2 = 0;
let operator = '';
const operators = {
    '&plus;': '+',
    '&times;': '*',
    '&minus;': '-',
    '&divide;': '/'
}

//Calculator Logics
function add(first, sec) {
    return first + sec;
}

function subtract(first, sec) {
    return first - sec;
}

function multiply(first, sec) {
    return first * sec;
}

function divide(first, sec) {
    return first / sec;
}



function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

//DOM Elements
const output = document.querySelector('.output');
const numsBtn = document.querySelectorAll('.numBtn');
const operatorsBtn = document.querySelectorAll('.operatorBtn');
const resultBtn = document.querySelector('.resultBtn');
const clearBtn = document.querySelector('.clearBtn');
const deleteBtn = document.querySelector('.deleteBtn');


