'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = function (length, characters) {
    let key = '';
    for (let i = 1; i <= length; i++) {
        const mix = Math.floor(Math.random() * characters.length);
        key += characters[mix];
    }
    return key;
}

console.log(generateKey(characters.length, characters));


