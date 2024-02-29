'use strict';

const temp = +prompt('Please specify the temperature :');
const type = prompt('Specify the unit of measurement where F is Fahrenheit and C is Celsius :');

let result;

 if ( typeof temp === 'number' && type === 'F') {
    result = ('It will be ')+(temp - 32) * 5 / 9 + (' degrees Fahrenheit');
} else  if (type === 'C'){
    result = ('It will be ')+((temp * 9 / 5) + 32) + (' degrees Celsius');
} else
    result = ('Error, check the entered data and try again ');

alert(result);

