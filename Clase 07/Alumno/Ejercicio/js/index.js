
function setLocalList(key, array) {
  // validar si key es un string
  var keyIsString = typeof key === 'string'
  var arrayIsArray = Array.isArray(array)
  if (!keyIsString || !arrayIsArray) {
    return false
  }
  // stringifiar el array
  var str = JSON.stringify(array)
  // guardar en el local Storage el array stringifeado
  localStorage.setItem(key, str)
  // si la operación es existosa returnar true

  return true
}

var array = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']
setLocalList('studentsList', array)


console.log(localStorage.getItem('studentsList'))
