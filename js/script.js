'use strict';

// Task 1

let x = 10, y = 7;

x > y ? console.log('x більше за y') : console.log('x не більше, ніж y');

// Task 2

const number = prompt('Please, enter the number');
if (number > 0) {
    if (number.length <= 1) {
        alert('Число: ' + number + ' однозначне позитивне');
    } else if (number.length <= 2) {
        alert('Число: ' + number + ' двозначне позитивне');
    } else if (number.length <= 3) {
        alert('Число: ' + number + ' тризначне позитивне');
    } else {
        alert('Число: ' + number + ' більше тризначного позитивне');
    }
} else {
    if (number.length <= 2) {
        alert('Число: ' + number + ' однозначне негативне');
    } else if (number.length <= 3) {
        alert('Число: ' + number + ' двозначне негативне');
    } else if (number.length <= 4) {
        alert('Число: ' + number + ' тризначне негативне');
    } else {
        alert('Число: ' + number + ' більше тризначного негативне');
    }
}

// Task 3

const num1 = Number(prompt('Please, enter the first number'));
const num2 = Number(prompt('Please, enter the second number'));
const num3 = Number(prompt('Please, enter the third  number'));

if (num1 > num2 && num1 > num3) {
    console.log('The first number: ' + num1 + ' is the largest');
} else if (num2 > num1 && num2 > num3) {
    console.log('The second number: ' + num2 + ' is the largest');
} else if (num3 > num2 && num3 > num1) {
    console.log('The third number: ' + num3 + ' is the largest');
} else {
    console.log('Error');
}

// Task 4
const number1 = Number(prompt('Please, enter the first number'));
const number2 = Number(prompt('Please, enter the second number'));
const number3 = Number(prompt('Please, enter the third  number'));

if (number1+number2 > number3 && number2+number3 > number1 && number3+number1 > number2 ){
    console.log('Right triangle')
} else {
    console.log('Irregular triangle')
}


