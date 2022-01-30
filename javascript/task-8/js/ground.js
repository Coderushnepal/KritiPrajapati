function Playground(size) {
    this.size = size;

    this.create = function(parent) {
        this.element = document.createElement("div");
        this.element.style.width = this.size + "px";
        this.element.style.height = this.size + "px";
        this.element.style.border = "1px solid black";
        this.element.style.position = "relative";
        this.element.style.margin = "15px";

        parent.appendChild(this.element);
    };
}