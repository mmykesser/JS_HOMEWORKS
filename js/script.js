'use strict';

const year = prompt('Введіть число');

switch (true){
    case isNaN(+year):
        alert('Введіть будь ласка число');
        break;
    case year <= 1:
        alert('1 рік');
        break;
    case year <= 4:
        alert(year + ' роки');
        break;
    case year > 4:
        alert(year + ' років');
        break;
    default:
        alert( "Немає таких значень" );
}
