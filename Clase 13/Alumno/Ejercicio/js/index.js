$(document).ready(function () {
  $(document).keydown(changeCounter)


});

var counter = 0;

function changeCounter(event) {
  var key = event.which
  switch (key) {
    case 13:
      counter = 0;
      break;
    case 38:
      counter++
      break;
    case 40:
      counter--
      break;
  }
  $('#counter').html(counter)
}