$(document).ready(function () {

  function getData(url, cbk) {
    $.ajax()

      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }


  function getPersonById(id, cb)
  getData(`https://swapi.co/api/people/${id}`, cb)
  getData('https://swapi.co/api/people/1', function handleRequest(error, data) {
    if (!error) {
      console.log(data)

    } else {
      console.error('Fallò el request: ', error)
    }
  })
})


