'use strict';

const arr = [1, 2, 3, -1, -2, -3];
const positiveNumbers = function (arr) {
    const positiveArr = [];

    if (arr.length === 0) return 'The argument array is empty';

    for (let i = 0; i <= arr.length - 1; i++) {
        if (typeof arr[i] !== "number") return 'Please enter only numbers';

        if (arr[i] > 0) positiveArr.push(arr[i]);
    }

    if (positiveArr.length === 0) return null;

    return 'Positive numbers: ' + positiveArr.join(' ');
}

console.log(positiveNumbers(arr));


