var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

function promedio (examResults) {
  var acumulador = 0
  for (var i = 0; i < examResults.length; i += 1) {
    var acumuladorDeNumeros = acumulador + examResults[i]
  }
  return acumuladorDeNumeros / examResults.length
}
