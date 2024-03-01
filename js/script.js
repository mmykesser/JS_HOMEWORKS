'use strict';

const number1 = +prompt('Please enter the first number:');
if (!isNaN(number1)) {
    const number2 = +prompt('Please enter the second number:');
    if (!isNaN(number2)) {
        console.log(`Addition: ${number1}+${number2} = ${number1+number2}`);
        console.log(`Subtraction: ${number1}-${number2} = ${number1-number2}`);
        console.log(`Multiplication: ${number1}*${number2} = ${number1*number2}`);
        console.log(`Division: ${number1}/${number2} = ${number1/number2}`);

    } else {
        alert('Error,please enter second number');
    }
} else {
        alert('Error,please enter the first number');
}
