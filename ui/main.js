console.log('Loaded!');

// change the text of the main text div
var element = document.getElementById('maintext');
element.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('img');
img.onclick = function() {
    img.style.marginleft = '100px';
};
