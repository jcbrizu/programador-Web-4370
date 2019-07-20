class Pepe {
  constructor(nombre) {
    this.nombre = nombre;
  }

  sayNombre() {
    console.log(this.nombre)
  }
}


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
var apellido = prompt('Ingrese apellido: ')
var posicion = buscarAlumnoPorNombreYApellido(nombre, apellido, studentsList);
console.log(posicion)


let a = new Pepe('grillo');
a.sayNombre()
