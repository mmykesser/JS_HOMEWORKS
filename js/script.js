'use strict';


const action = prompt('Please select action: add, sub, mult, div');
if (isNaN(action)) {
    const number1 = +prompt('Please enter the first number :');
    if (!isNaN(number1)) {
        const number2 = +prompt('Please enter the second number :');

        if (!isNaN(number2)) {
            if (action === 'add' || action === 'ADD' || action === 'Add') {
                console.log(`Addition: ${number1}+${number2} = ${number1 + number2}`);
            } else if (action === 'sub' || action === 'SUB' || action === 'Sub') {
                console.log(`Subtraction: ${number1}-${number2} = ${number1 - number2}`);
            } else if (action === 'mult' || action === 'MULT' || action === 'Mult') {
                console.log(`Multiplication: ${number1}*${number2} = ${number1 * number2}`);
            } else if (action === 'div' || action === 'DIV' || action === 'Div') {
                console.log(`Division: ${number1}/${number2} = ${number1 / number2}`);
            } else if (action !== 'add' || action !== 'sub' || action !== 'mult' || action !== 'div') {
                console.log('Error, enter the correct data');
            }
        } else {
            console.log('Error,please enter second number');
        }
    } else {
        console.log('Error,please enter first number');
    }
} else {
    console.log('Error, you specified a number');
}
