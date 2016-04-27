/*
 Задание №1
 */
function pow(number, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= number;
  }
  return result;
}

number = prompt("Введите число:", '');
exponent = prompt("Введите степень:", '');
var results = pow(number, exponent);

alert('Результат: ' + results);
console.log(results);


/*
Задание №2
*/

var names = [];

for (var i = 0; i <= 4; i++) {
    var user = prompt('Введите имя', '');
    names.push(user);
}

console.log(names);

var login = prompt('Введите Ваше имя', '');
var flag =false;

for (var j = 0; j < names.length; j++) {
    if (login === names[j]) {
        flag =true;
        break;
    }
}
if (flag) {
    alert(login + ', вы успешно вошли!');
} else {
    alert('Это не верное имя');
}
