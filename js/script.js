'use strict';

// Task 1
let a = 0;
a === 0 ? console.log('True') : console.log('False');

// Task 2
a = 2;
a > 0 ? console.log('True') : console.log('False');

// Task 3
a = -1;
a < 0 ? console.log('True') : console.log('False');

// Task 4
a = 2;
a >= 0 ? console.log('True') : console.log('False');

// Task 5
a = -5;
a <= 0 ? console.log('True') : console.log('False');

// Task 6
a = 45;
a !== 0 ? console.log('True') : console.log('False');

// Task 7
a = 'test';
a === 'test' ? console.log('True') : console.log('False');

// Task 8
a = 1;
a === 1 ? console.log('True') : console.log('False');

// Task 9
a = 2;
a > 0 && a < 5 ? console.log('True') : console.log('False');

// Task 10
a = 2;
a === 0 || a === 2 ? console.log(a + 7) : console.log(a / 10);

// Task 11
a = 1;
let b = 3;
a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);

// Task 12
a = 3;
b = 11;
(a > 2 && a < 11) && (b >= 6 && b < 14) ? console.log('True') : console.log('False');

// Task 13
let num = Number(prompt('Please enter a number between 1 to 4'));
let result;

switch (num) {
    case 1 :
        alert(result = 'Winter');
        break;
    case 2 :
        alert(result = 'Spring');
        break;
    case 3 :
        alert(result = 'Summer');
        break;
    case 4 :
        alert(result = 'Autumn');
        break;
    default :
        alert('Error')

}

