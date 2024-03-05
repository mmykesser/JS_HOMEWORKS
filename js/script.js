'use strict';

const firstNumber = Number(prompt('Please enter the first number'));

if (!isNaN(firstNumber)) {
    const secondNumber = Number(prompt('Please enter the second number'));
    if (!isNaN(secondNumber)) {
        const thirdNumber = Number(prompt('Please enter the third number'));
        if (!isNaN(thirdNumber)) {
            const sum = (firstNumber + secondNumber + thirdNumber) / 3;
            alert('Arithmetic mean is '+ sum);
        } else {
            console.log('Error, please enter only numbers');
        }
    } else {
        console.log('Error, please enter only numbers');
    }
} else {
    console.log('Error, please enter only numbers');
}




