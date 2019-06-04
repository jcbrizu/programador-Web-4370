var nota = prompt('Introduzca la calificacion')

if (nota >= 7 && nota <= 10) {
  console.log('El alumno está promocionado')
} else {
  if (nota < 7 && nota >= 4) {
    console.log('El alumno está aprobado')
  } else {
    if (nota < 4 && nota >= 0) {
      console.log('El alumno está reprobado')
      console.log('Debe esforzarse mas')
    }
  }
}
