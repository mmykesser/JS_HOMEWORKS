'use strict';

const num = prompt('Please enter the number');
const deg = prompt('To what degree should the number be raised?');

const raisingDegree = function (num, deg = 1) {
    if (isNaN(num) || isNaN(deg)) {
        return 'Error, please enter a number!';
    } else {
        return num ** deg;
    }
}

const result = raisingDegree(num, deg);
alert(result);