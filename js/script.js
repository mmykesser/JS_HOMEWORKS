'use strict';

const num = Number(prompt('Please enter the number'));
let result = '';
if (num < 1) {
    result = 'NaN';
} else if (num === 1) {
    result = 'Minimum divisor of a number ' + num;
} else {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            result = 'Minimum divisor of a number ' + num + '. This is the ' + i;
            break;
        } else {
            result = 'Minimum divisor of a number ' + num + '. This is the ' + i;
        }
    }
}
console.log(result);



