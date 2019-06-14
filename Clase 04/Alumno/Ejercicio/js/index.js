var resultados = [7, 5, 6, 4, 3, 2, 8];


function promedio(resultados) {
  var acumulador = 0;
  for (var i = 0; i < resultados.length; i += 1) {
    acumulador = acumulador + resultados[i]

  }
  return acumulador / resultados.length

}

console.log(promedio(resultados))