var pedirpass = prompt('Ingrese su contraseña')

while (pedirpass === '' || pedirpass === '1234') {
  pedirpass
  pedirpass = prompt('Ingrese su contraseña')
}
