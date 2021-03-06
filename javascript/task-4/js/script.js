var body = document.body;
var mainWrapper = document.createElement('div');
mainWrapper.classList.add("main-wrapper");
var container = document.createElement('div');
container.classList.add("container");
var boxWrapper = document.createElement('div');
boxWrapper.classList.add("box-wrapper");

body.appendChild(mainWrapper);
mainWrapper.appendChild(container);
container.appendChild(boxWrapper);


var btnGenerateBalloon = document.createElement("button");
btnGenerateBalloon.innerHTML = "Generate Balloon";
btnGenerateBalloon.classList.add("btn");

var box = document.createElement('div');
box.classList.add("box");

boxWrapper.appendChild(btnGenerateBalloon);
boxWrapper.appendChild(box);


btnGenerateBalloon.addEventListener("click", function() {
    var balloon = document.createElement('div');
    balloon.classList.add("balloon");

    //color of balloon
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    balloon.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";

    box.appendChild(balloon, balloon.clientWidth);
    console.log(box.clientWidth)
    balloon.style.left = (box.clientWidth - balloon.clientWidth) * Math.random() + 'px';
    balloon.style.top = (box.clientHeight - balloon.clientHeight) * Math.random() + 'px'

});