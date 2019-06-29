window.onload = function () {
  var mail = document.getElementById('email')

  mail.onblur = function (event) {
    var value = event.target.value
    if (value.indexOf('.') > 0 && (value.indexOf('@') > 0)) {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    } else {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')
    }
  }
}