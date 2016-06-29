function pow(number, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= number;
  }
  return result;
}

// number = prompt("Введите число:", '');
// exponent = prompt("Введите степень:", '');
// var results = pow(number, exponent);
//
// alert('Результат: ' + results);
// console.log(results);


module.exports = pow;

