
var operacion = prompt('Ingrese operacion a realizar. Debe ser "suma, resta, multuplicacion o division"')
var number1 = prompt('Ingrese el primer número')
var parsedNumber1 = parseFloat(number1, 10)
var number2
var parsedNumber2

do {
  number2 = prompt('Ingrese el segundo número')
  parsedNumber2 = parseFloat(number2, 10)
} while (operacion === 'div' && parsedNumber2 === 0)

var result
switch (operacion) {
  case 'suma':
    result = parsedNumber1 + parsedNumber2
    break
  case 'resta':
    result = parsedNumber1 - parsedNumber2
    break
  case 'multiplicacion':
    result = parsedNumber1 * parsedNumber2
    break
  case 'division':
    result = parsedNumber1 / parsedNumber2
    break
  default:
    result = 'Operación erronea'
    break
}
var mensaje = 'El resultado de la ' + operacion + ' es: ' + result

console.log(mensaje)