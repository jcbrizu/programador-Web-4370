$(document).ready(function () {
  var button = $('.btn-danger')

  button.click(handleDelete)

  function handleDelete(event) {
    var id = $(event.target).parent().parent().attr('id')
    console.log(id)
    removeElementWithAnimation(id)
  }
  function removeElementWithAnimation(id) {
    $('#' + id).fadeOut(3000, function () {
      $('#' + id).remove()
      console.log('el elemento fue removido')

    })
  }

});
