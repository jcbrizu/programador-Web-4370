$(document).ready(function () {
  var input = $('#firstName')
  input.blur(replaceAllElements)

});

function replaceAllElements(e) {
  $('.list-group-item').html(e.target.value)
}