function incluyeTexto(textoABuscar, textoCompleto) {
  var tabIsString = typeof textoABuscar === 'string';
  var tcIsString = typeof textoCompleto === 'string';
  if (!tabIsString || !tcIsString) {
    return false
  }
  var textoABuscar = textoABuscar.toLowerCase();
  var textoCompleto = textoCompleto.toLowerCase();
  var estaEnTextoCompleto = textoCompleto.indexOf(textoABuscar);
  if (estaEnTextoCompleto > -1) {
    return true
  }
  return false
}
console.log(incluyeTexto('Pa', 'Patricia'))
console.log(incluyeTexto('Patricia', 'Pa'))
