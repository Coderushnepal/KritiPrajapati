var body = document.body;
var mainWrapper = document.createElement("div");
mainWrapper.classList.add("main-wrapper");
var container = document.createElement("div");
container.classList.add("container");
var boxWrapper = document.createElement("div");
boxWrapper.classList.add("box-wrapper");

body.appendChild(mainWrapper);
mainWrapper.appendChild(container);
container.appendChild(boxWrapper);

var boxTitle = document.createElement("h2");
boxTitle.innerHTML = "Multiple Ball Bouncing with OOP";

mainWrapper.style = `
    min-width: 700px;
    font-family: "Roboto",sans-serif;
    background-color:  #f5f5ff;
`;

container.style = `
    width: 700px;
    margin: 0 auto;
    padding: 50px 30px;
`;

boxWrapper.style = `
    background-color: #ffffff;
    padding: 20px 50px ;
    border-radius: 3px;
`;

boxWrapper.appendChild(boxTitle);

function position(size) {
    return {
        top: parseInt(Math.random() * size),
        left: parseInt(Math.random() * size),
    };
}
var groundSize = 500;
var defaultBallSize = 50;
var ground = new Playground(groundSize);
ground.create(boxWrapper);

for (var i = 0; i < 10; i++) {
    var ball = new Ball(defaultBallSize, i);
    ball.create(ground.element, `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}`, position(groundSize - defaultBallSize));
}