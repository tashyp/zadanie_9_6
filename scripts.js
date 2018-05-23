//scripts.js Events

/*
function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});
*/

//addEventListener

var list = document.getElementById('list');
var add = document.getElementsByTagName('button');

var element;
var liItem;

addEventListener('click', function() {
	liItem = document.getElementsByTagName('li');
	element = document.createElement('li');
	element.innerHTML = 'item' + liItem.length;
	list.appendChild(element);
});


