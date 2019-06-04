var nota = prompt('Introduzca la calificacion')
var floatnumber = nota
var floatnumber = parseFloat()

if (nota >= 7 && nota <= 10) {
  console.log('El alumno está promocionado')
} else {
  if (nota <= 6.99 && nota >= 4) {
    console.log('El alumno está aprobado')
  } else {
    if (nota <= 3.99 && nota >= 0) {
      console.log('El alumno está reprobado')
      console.log('Debe esforzarse mas')
    }
  }
}
