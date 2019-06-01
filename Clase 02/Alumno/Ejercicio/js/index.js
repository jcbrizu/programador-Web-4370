var dia = prompt('Ingrese un dia')
var diaMinuscula = dia.toLowerCase()
switch (diaMinuscula) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('dia habil')

    break
  case 'sabado':
  case 'domingo':
    console.log('es fin de semana')
    break
  default:
    console.log('no es valido')
    break
}
