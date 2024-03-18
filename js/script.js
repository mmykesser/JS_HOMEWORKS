'use strict';

const year = prompt('Please enter your year of birth');
const city = prompt('What city do you live in?');
const sport = prompt('What is your favorite sport? \n Boxing, Football, Athletics ? ');

let age = null;
let country = null;
let champion = null;

if (year === null) {
    age = ('It\'s a pity you didn\'t want to enter your age');
} else {
    age = 2024 - year;
}

if (city == null) {
    country = ('It\'s a pity you didn\'t want to share your city of residence');
} else if (city === 'London') {
    country = 'You live in the capital of England';
} else if (city === 'Kyiv') {
    country = 'You live in the capital of Ukraine';
} else if (city === 'Washington') {
    country = 'You live in the capital of the United States';
} else {
    country = 'You live in a ' + city;
}

switch (sport) {
    case null:
        champion = 'It\'s a pity that you didn\'t want to specify your favorite sport';
        break;
    case 'Boxing':
        champion = 'Cool! Do you want to be Wladimir Klitschko?';
        break;
    case 'Football':
        champion = 'Cool! Do you want to be Cristiano Ronaldo?';
        break;
    case 'Athletics':
        champion = 'Cool! Do you want to be Usain Bolt?';
        break;
    default:
        champion = 'Become a champion';
}


alert('Your age is ' + age + ' years old \n'
    + country + '\n' + champion);




