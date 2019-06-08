var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var nombre = prompt('Ingrese nombre: ')
var resultado = buscarAlumnoPorNombre(nombre, studentsList)
console.log(resultado)

function buscarAlumnoPorNombre (nombre, listaAlumnos) {
  var nombreLower = nombre.toLowerCase()
  for (var i = 0; i < listaAlumnos.length; i++) {
    if (listaAlumnos[i].firstName.toLowerCase() === nombreLower) {
      return i
    }
  }
  return -1
}
