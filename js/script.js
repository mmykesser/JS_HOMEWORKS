'use strict';

const temp = +prompt('Please specify the temperature :');
const type = prompt('Specify the unit of measurement where F is Fahrenheit and C is Celsius :');

let result;

if (isNaN(temp)){
    result = 'Error, please enter a number';
} else if ( type.toUpperCase() === 'F') {
    result = 'It will be '+(temp - 32) * 5 / 9 + ' degrees Celsius';
} else  if (type.toUpperCase() === 'C'){
    result = 'It will be '+((temp * 9 / 5) + 32) + ' degrees Fahrenheit';
} else
    result = 'Error, select the correct temperature unit';

alert(result);

