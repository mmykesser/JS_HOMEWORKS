'use strict';

const action = prompt('Please select action: add, sub, mult, div');
    if (isNaN(action)) {
        const number1 = +prompt('Please enter the first number :');
        if (!isNaN(number1)) {
            const number2 = +prompt('Please enter the second number :');

            if (!isNaN(number2)) {
                if (action === 'add' || action === 'ADD' || action === 'Add') {
                    alert(`Addition: ${number1}+${number2} = ${number1 + number2}`);
                } else if (action === 'sub' || action === 'SUB' || action === 'Sub') {
                    alert(`Subtraction: ${number1}-${number2} = ${number1 - number2}`);
                } else if (action === 'mult' || action === 'MULT' || action === 'Mult') {
                    alert(`Multiplication: ${number1}*${number2} = ${number1 * number2}`);
                } else if (action === 'div' || action === 'DIV' || action === 'Div') {
                    alert(`Division: ${number1}/${number2} = ${number1 / number2}`);
                } else if (action !== 'add' || action !== 'sub' || action !== 'mult' || action !== 'div') {
                    alert('Error, enter the correct data');
                }
            } else {
                alert('Error,please enter second number');
            }
        } else {
            alert('Error,please enter first number');
        }
    } else {
        alert('Error, you specified a number');
    }
