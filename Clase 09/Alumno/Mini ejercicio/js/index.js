window.onload = function () {
  var field = document.getElementById('age')
  var button = document.getElementById('button')
  button.onclick = function (e) {
    var value = parseInt(field.value)
    var isOlderThan18 = value > 18
    if (isOlderThan18) {
      console.log('Es mayor')
    } else {
      console.log('Es menor')
    }
  }

}