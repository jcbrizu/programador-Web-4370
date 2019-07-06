$(document).ready(function () {
  $('#email').blur(handleBlur)

});

function handleBlur(e) {
  var email = $(e.target)
  var value = email.val()
  if (value.indexOf('.') > -1 && (value.indexOf('@') > -1)) {
    email.addClass('is-valid')
    email.removeClass('is-invalid')
  } else {
    email.addClass('is-invalid')
    email.removeClass('is-valid')
  }
}

