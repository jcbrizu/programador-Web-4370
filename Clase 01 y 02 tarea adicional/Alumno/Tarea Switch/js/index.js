var carac = prompt('Ingrese un caracter')
var carac = carac.toLowerCase()

switch (carac) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log('Es una vocal')
    break
  case 'b':
  case 'c':
  case 'd':
  case 'f':
  case 'g':
  case 'h':
  case 'j':
  case 'k':
  case 'l':
  case 'm':
  case 'n':
  case 'ñ':
  case 'p':
  case 'q':
  case 'r':
  case 's':
  case 't':
  case 'v':
  case 'w':
  case 'x':
  case 'y':
  case 'z':
    console.log('Es una consonante')
    break
  default:
    document.write('No es una letra')
    alert('No es una letra')
    break
}
