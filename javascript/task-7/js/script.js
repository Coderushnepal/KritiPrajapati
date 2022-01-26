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
boxTitle.innerHTML = "Bounce Ball Animation";

var box = document.createElement("div");
box.classList.add("box");

var ball = document.createElement("div");
ball.classList.add("ball");

boxWrapper.appendChild(boxTitle);
boxWrapper.appendChild(box);
box.appendChild(ball);

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

box.style = `
    border-radius: 3px;
    width: 550px;
    height: 450px;
    border: 1px solid #999999;
    position: relative;
    overflow: hidden;
    margin: 20px 0;
`;

ball.style = `
    position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #370e24;
    top: 0px;
    left: 0px;
`;

var speedTop = 10;
var speedLeft = 2;

setInterval(function() {
    ballTopPosition = parseInt(ball.style.top);
    ballTopPosition += speedTop;
    ball.style.top = ballTopPosition + "px";

    if (ballTopPosition <= 0 || ballTopPosition >= box.clientHeight - ball.clientHeight) {
        speedTop *= -1;
    }

    ballLeftPosition = parseInt(ball.style.left);
    ballLeftPosition += speedLeft;
    ball.style.left = ballLeftPosition + "px";

    if (ballLeftPosition <= 0 || ballLeftPosition >= box.clientWidth - ball.clientWidth) {
        speedLeft *= -1;
    }
}, 1000 / 60);