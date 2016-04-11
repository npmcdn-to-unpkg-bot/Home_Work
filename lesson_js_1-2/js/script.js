/*
 Задание №1
 */
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("Введите число:", '');
var n = prompt("Введите степень:", '');

alert( pow(x, n) );
console.log( pow(x, n) );


/*
Задание №2
*/

var names = [];

for (var i = 0; i <= 4; i++) {
    var user = prompt('Введите имя', '');
    names.push(user);
    console.log(names);
}

var login = prompt('Введите Ваше имя', '');

for (var j = 0; j < names.length; j++) {
    if (login === names[j]) {
        alert(login + ', вы успешно вошли!');
        break;
    } else {
        alert('Это не верное имя');
    }
}


