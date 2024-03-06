'use strict';

const number1 = Number(prompt('Please enter the first number:'));
if (!isNaN(number1)) {
    const number2 = Number(prompt('Please enter the second number:'));
    if (!isNaN(number2)) {
        const add = number1 + number2;
        console.log(add);
        const sub = number1 - number2;
        console.log(sub);
        const mult = number1 * number2;
        console.log(mult);
        const div = number1 / number2;

        alert('User entered ' + number1 + ' and ' + number2 +
            '\n' + number1 + '+' + number2 + '=' + add +
            '\n' + number1 + '-' + number2 + '=' + sub +
            '\n' + number1 + '*' + number2 + '=' + mult +
            '\n' + number1 + '/' + number2 + '=' + div);

    } else {
        alert('Error,please enter second number');
    }
} else {
    alert('Error,please enter the first number');
}
