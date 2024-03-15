'use strict';

// Task1
let sum = '';
for (let i = 20; i <= 30; i = i + 0.5) {
    sum += i + ' ';
}
console.log(sum);

// Task 2
const dollar = 27;
sum = '';
for (let i = 10; i <= 100; i = i + 10) {
    sum += i + '$ =' + i * dollar + 'UAH; ';
}
console.log(sum);

// Task 3
let num = +prompt('Please enter the number');
let result = '';

for (let i = 1; i <= 100; i++) {
    if (num > i * i) {
        result += i + '; '
    }
}
console.log('Numbers whose square does not exceed ' + num + ': ' + result);

// Task 4
num = prompt('Please enter the number');
result = '';
if (num <= 1) {
    result = 'Error'
}
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        result = +num + ' is not a prime number';
        break;
    }
    result = +num + ' is a prime number';
}
console.log(result);

// Task 5
num = +prompt('Please enter the number');
result = '';
for (let i = 1; i <= num; i++) {
    const degree = 3 ** i;
    if (degree === num) {
        result = 'We can get the ' + num + ' by raising the number 3 to the ' + i + ' power';
        break;
    } else {
        result = 'We can\'t get that number ' + num + ' by raising the number 3 to the power';
    }
}
console.log(result);






