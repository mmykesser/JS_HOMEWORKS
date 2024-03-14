'use strict';

// Task 1
let result = 0;
for (let a = 10; a <= 20; a++) {
    result = result + a;
    if (a < 20) {
        result = result + ',';
    } else {
        result = result + '.';
    }
}
alert(result);

// Task 2
for (let a = 10; a <= 20; a++) {
    console.log('Squares of numbers: ' + a * a);
}

// Task 3
let b = 7;
result = 1;
for (let a = 1; a <= 9; a++) {
    result = a * b;
    console.log(a + '*' + b + '=' + result);
}

// Task 4
result = 0;
for (let a = 1; a <= 15; a++) {
    result = result + a;
}
console.log('Sum of all integers from 1 to 15 = ' + result);

// Task 5
result = 1;
for (let a = 15; a <= 35; a++) {
    result = result * a;
}
console.log('The product of all integers from 15 to 35 = ' + result);

// Task 6
result = 0;
for (let a = 0; a <= 500; a++) {
    result = result + a;
}
console.log('Arithmetic mean of all integers from 1 to 500 = ' + result / 500);

// Task 7
for (let a = 30; a <= 80; a++) {
    if (a % 2 === 0) {
        console.log(a + ' we can divide by 2');
    }
}

// Task 8
for (let a = 100; a <= 200; a++) {
    if (a % 3 === 0) {
        console.log(a + ' we can divide by 3');
    }
}

// Task 9
let num = Number(prompt('Please enter a number'));
result = 0;
for (let a = 0; a <= num; a++) {
    if (num % a === 0) {
        result += num + ' Is divisible without remainder: ' + a + '\n';
    }
}
alert(result);

// Task 10
num = Number(prompt('Please enter a number'));
result = 0;
let cycle = 0;
for (let a = 0; a <= num; a++) {
    if (num % a === 0 && a % 2 === 0) {
        cycle++;
        result = 'The number of its even divisors: ' + cycle;
    } else {
        result = 'No even divisors';
    }
}
alert(result);

// Task 11

num = Number(prompt('Please enter a number'));
result = 0;
let sum = 0;
for (let a = 0; a <= num; a++) {
    if (num % a === 0 && a % 2 === 0) {
        sum += a;
        result = 'The result of even divisors: ' + sum;
    } else {
        result = 'No even divisors';
    }
}
alert(result);

// Task 12

result = 0;
sum = 0;
for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
        sum = a * b;
        result += a + '*' + b + '=' + sum + '\n';
    }
}
console.log(result);


