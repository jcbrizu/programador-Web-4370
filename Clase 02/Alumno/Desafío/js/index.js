var genero = prompt('Ingrese su genero')
var edadString = prompt('Ingrese su edad')
var edadInt = parseInt(edadString)
var genero = genero.toLowerCase()
var pronombre

switch (genero) {
  case 'male':
    pronombre = 'Sr. '
    break
  case 'female':
    pronombre = 'Sra. '
    break

  default:
    pronombre = 'Sx. '
    break
}

if (edadInt <= 18) {
  console.log(pronombre + 'usted es menor de edad. No puede ingresar.')
} else {
  console.log(pronombre + 'usted es mayor de edad. Puede ingresar.')
}
