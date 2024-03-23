'use strict';

// Task 1
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr.concat(arr2));

// Task 2
arr = [1, 2, 3];
console.log(arr.reverse());

// Task 3
arr = [1, 2, 3];

console.log(arr.push(4, 5, 6));
console.log(arr);

// Task 4
arr = [1, 2, 3];
console.log(arr.unshift(4, 5, 6));
console.log(arr);

// Task 5
arr = ['js', 'css', 'jq'];
console.log(arr.shift());

// Task 6
arr = ['js', 'css', 'jq'];
console.log(arr.pop());

// Task 7
arr = [1, 2, 3, 4, 5];
let newArr = arr.splice(0, 3);
console.log(newArr);

// Task 8
arr = [1, 2, 3, 4, 5];
newArr = arr.splice(3, 2);
console.log(newArr);

// Task 9
arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

// Task 10
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4));

// Task 11
arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

// Task 12
arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);

// Task 13
arr = [3, 4, 1, 2, 7];

function sortNumber(a, b) {
    return a > b ? 1 : -1;
}

arr.sort(sortNumber);
console.log(arr);

// Task 14
arr = [5, 6, 7, 8, 9];
let arrResult = arr.reduce((sum, index) => sum + index, 0);
console.log(arrResult);

// Task 15
arr = [5, 6, 7, 8, 9];
arrResult = arr.map(index => Math.pow(index, 2));
console.log(arrResult);

// Task 16
arr = [1, -3, 5, 6, -7, 8, 9, -11];
arrResult = arr.filter(index => index < 0);
console.log(arrResult);

// Task 17
arr = [1, -3, 5, 6, -7, 8, 9, -11];
arrResult = arr.filter(index => index % 2 === 0);
console.log(arrResult);

// Task 18
arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
arrResult = arr.filter(index => index.length > 5);
console.log(arrResult);

// Task 19
arr = [1, 2, [3, 4], 5, [6, 7]];
arrResult = arr.filter(index => Array.isArray(index));
console.log(arrResult);

// Task 20
arr = [5, -3, 6, -5, 0, -7, 8, 9];
arrResult = arr.filter(index => index < 0);
console.log(arrResult.length);