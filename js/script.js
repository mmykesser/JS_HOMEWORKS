'use strict';

// Task 1
let arr = ['a', 'b', 'c', 'd'];
console.log(arr.slice(0, 2).join('+') + ',' + arr.slice(2, 4).join('+'));

// Task 2
arr = [2,5,3,9];
const sum1 = arr [0] * arr[1];
const sum2 = arr [2] * arr[3];
let result = sum1 + sum2;
console.log(result);

// Task 3
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr [1] [0]);

// Task 4
const myObject = {};
myObject.js = ['jQuery', 'Angular'];
myObject.php = 'Hello';
myObject.css = 'World';

console.log(myObject.js[0]);

// Task 5
arr = [];
for (let i = 1; i <= 3; i++) {
    arr.push('x'.repeat(i));
}
console.log(arr);

// Task 6
arr = [];
for (let i = 1; i <= 3; i++){
    let str = '';
    for (let j = 0; j < i; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);

// Option 2

arr = [];
for (let i = 1; i <= 3; i++) {
    arr.push(i.toString().repeat(i));
}
console.log('Option 2 :', arr);

// Task 7
const arrFill = function (a, b) {
    arr = [];
    for (let i = 1; i <= b; i++) {
        arr.push(a);
    }
    return arr;
}
console.log(arrFill('x', 5));

// Task 8
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let index = 0;
for (let i = 0; arr.length - 1 >= i; i++) {
    sum += arr[i];
    if (sum > 10) {
        break;
    }
    index += 1;
}
console.log('Our Array: ', arr, '\nWe need to add ' + index + ' elements');

// Task 9
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrReverse = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arrReverse.push(arr[i]);
}
console.log(arrReverse);


// Task 10
arr = [[1, 2, 3], [4, 5], [6]];
result = arr.flat(Infinity).reduce((sum, index) => sum + index, 0);
console.log('Easy option: ' + result);

// Option 2
const arrOption2 = function (ourArray) {
    let sum = 0;
    for (let i = 0; i < ourArray.length; i++) {
        for (let j = 0; j < ourArray[i].length; j++) {
            sum += ourArray[i][j];
        }
    }
    return sum;
}
arr = [[1, 2, 3], [4, 5], [6]];
console.log('Option 2 : ', arrOption2(arr));


// Task 11
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
result = arr.flat(Infinity).reduce((sum, index) => sum + index, 0);
console.log('Easy option: ' + result);

// Option 2
const arrOption3 = function (ourArray) {
    let sum = 0;
    for (let i = 0; i < ourArray.length; i++) {
        for (let j = 0; j < ourArray[i].length; j++) {
            for (let l = 0; l < ourArray[j].length; l++) {
                sum += ourArray[i][j][l];
            }
        }
    }
    return sum;
}
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log('Option 2 : ', arrOption3(arr));
