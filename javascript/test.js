var array = [
    "j mahar",
    "k mahar"
];
var filter = array.filter(

    function(value) {
        var spiltt = value.split(" ");
        if (spiltt[-1] === "mahar") {
            return value;
        }
    }
)

console.log(filter);