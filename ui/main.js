console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHtml = 'New value';
var img = document.getElementById('madi');
img.onclick = function () {
  img.style.marginLeft = '100px';  
};