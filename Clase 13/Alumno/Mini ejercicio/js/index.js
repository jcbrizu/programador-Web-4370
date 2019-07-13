$(document).ready(function () {

  $('ul > li > i')
    .click(function (event) {
      $(event.target)
        .parent()
        .remove()
    })


});




