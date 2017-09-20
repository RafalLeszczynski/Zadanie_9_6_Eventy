//js

var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
    var element = document.createElement('li');
    var counter = document.getElementsByTagName('li')
    element.innerHTML = 'item ' + counter.length; 
    list.appendChild(element);
});
console.log(document);
