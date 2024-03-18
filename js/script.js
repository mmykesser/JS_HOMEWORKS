'use strict';

const padString = function (str, length, symbol = '*', stringRight = true) {
    if (typeof str !== 'string') return 'Error in 1 line, you did not enter a string';
    if (typeof length !== 'number' || isNaN(length)) return 'Error in 2 line, please enter only numbers';

    if (str.length > length) return str.substring(0, length);

    if (symbol.length !== 1 || typeof symbol !== 'string') return 'Error in 3 line, we can only enter 1 symbol';
    if (typeof stringRight !== 'boolean') return 'Error in 4 line, we can only enter a boolean type';

    const repeat = symbol.repeat(length - str.length);

    if (!stringRight) {
        return repeat + str;
    } else {
        return str + repeat;
    }
}

console.log(padString('Hello', 8));
console.log(padString('Hello', 7, '*', false));
console.log(padString('Hello', 7, '*', true));
console.log(padString('Hello', 2));

console.log(padString(2, 'Hello'));
console.log(padString('Hello', 'Hello'));
console.log(padString('Hello', 7, '$$'));
console.log(padString('Hello', 7, '$', 'NFC'))

