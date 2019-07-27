var dictionary = {
  male: 'Masculino',
  female: 'Femenino',
  blue: 'azul',
  red: 'rojo',
  yellow: 'amarillo',
  brown: 'marron',
  'blue-gray': 'azul grisaseo',
  hazel: 'avellana',
  unknown: 'desconocido',
  black: 'negro',
  dark: 'oscuro',
  white: 'blanco',
  'green, yellow': 'verde, amarillo',
  orange: 'naranja',
  pink: 'rosa',
  'red, blue': 'rojo, azul',
  gold: 'dorado',
  'n/a': 'N/D',
  hermaphrodite: 'hermafrodita',
  none: 'N/D'
}


function translateToSpanish(wordInEnglish) {
  var word = wordInEnglish.toLowerCase()
  var traduccion = dictionary[word]
  if (traduccion) {
    return traduccion
  }
  return word
}

export { translateToSpanish }