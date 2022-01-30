function Ball(size, id) {
    this.size = size;
    this.id = id;

    this.create = function(ground, color, position) {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.element.style.width = this.size + "px";
        this.element.style.height = this.size + "px";
        this.element.style.borderRadius = "50%";
        this.element.style.background = color;
        this.element.style.position = "absolute";
        this.element.style.top = position.top + "px";
        this.element.style.left = position.left + "px";
        this.element.style.cursor = "pointer";

        var isMoving = false;
        var myInterval;

        this.element.addEventListener("click", function(e) {
            if (isMoving) {
                isMoving = false;
                clearInterval(myInterval);
            } else {
                isMoving = true;
                var speedTop = 2;
                myInterval = setInterval(function() {
                    ballTopPosition = parseInt(e.target.style.top);
                    console.log(ballTopPosition);
                    ballTopPosition += speedTop;
                    e.target.style.top = ballTopPosition + "px";
                    console.log(ground.clientHeight + 2, e.target.clientHeight);

                    if (ballTopPosition <= 0 || ballTopPosition >= ground.clientHeight + 2 - e.target.clientHeight) {
                        speedTop *= -1;
                    }
                }, 1000 / 60);
            }
        });
        ground.appendChild(this.element);
    };
}