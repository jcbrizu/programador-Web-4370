function getLocalList(key) {
  //  validar si key es string, si no lo es return false
  var keyIsString = typeof key === 'string'
  if (!keyIsString) {
    return false
  }
  // traer item del localStorage para esa key.
  var valor = localStorage.getItem(key)

  if (!valor) {
    return []
  }

  var parseoArray = JSON.parse(valor)

  Array.isArray(parseoArray)
  if (Array.isArray(parseoArray)) {
    return parseoArray

  }
  return []
}

localStorage.setItem('string', '[1,2,3]')
console.log(getLocalList('string'))
var studentsList = getLocalList('studentsList')