function getId(person) {
  return parseInt(person.url.split('/')[5])
}


function postData(url, data, cbk) {
  $.ajax({
    url: url,
    method: 'POST',
    data: data
  })
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}



export { getId }

