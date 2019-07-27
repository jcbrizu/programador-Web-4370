function getData(url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}

getData('https://swapi.co/api/people', getAllList)



function getAllList(error, data) {
  if (data.results) {
    var results = data.results
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].name)
    }
  }
  if (data.next) {
    getData(data.next, getAllList)
  }
}
