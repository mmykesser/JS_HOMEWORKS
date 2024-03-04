'use strict';

 // #Task1

const user = {}
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

// #Task2

// Да, мы можем изменять объект объявленный при помощи const , так как const защищает саму переменную user. Переменная user в нашем случае хранит ссылку на сам объект в памяти, а не то, что находиться внутри этого объекта

// #Task3

const  salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

function sum(salaries) {
 return  salaries.John + salaries.Ann + salaries.Pete;
}

console.log('The team\'\s salary is  : '+sum(salaries));




