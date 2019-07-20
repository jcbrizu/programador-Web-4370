function includesText(texto, textoBase) {

  if (typeof texto === 'string' && typeof textoBase === 'string') {

    var textoLowerCase = texto.toLowerCase()
    var textoBaseLowerCase = textoBase.toLowerCase()
    if (textoBaseLowerCase.indexOf(textoLowerCase) !== -1) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return false
  }
}

includesText('Pa', 'Patricia') // Deberá devolver true
includesText('Patricia', 'Pa') // Deberá devolver false
includesText(2, 'Pa') // Deberá devolver false
