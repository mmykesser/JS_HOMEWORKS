'use strict';

// Task 1
const arr1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i <= arr1.length; i++) {
    sum = sum + i;
}
console.log('Sum of elements = ' + sum);

// Task 2
const arr2 = [1, 2, 3, 4, 5];
sum = 0;
for (let i = 0; i <= arr2.length; i++) {
    sum += Math.pow(i, 2);
}
console.log('Sum of squares of array element = ' + sum);



