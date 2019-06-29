function getLocalList(key) {

  var keyIsString = typeof key === 'string'
  if (!keyIsString) {
    return false
  }

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