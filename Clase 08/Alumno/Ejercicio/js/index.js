var texts = ['Ed', 'Edd', 'Eddy']
var lis = document.getElementById('mainList')


// for (var i = 0; i < texts.length; i++) {
//   var item = document.createElement('li')
//   item.className = 'list-group'
//   item.innerHTML = texts[i]
//   lis.appendChild(item)
// }

function imprimirLista() {
  var ul = document.createElement('ul');

  texts = ['Ed', 'Edd', 'Eddy'];

  document.getElementById('mainList').appendChild(ul);

  function renderProductList(element, index, arr) {
    var li = document.createElement('li');

    ul.appendChild(li);


  }
};



