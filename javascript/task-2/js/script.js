// Basics of JavaScript Assignment 2

console.log("Solution 1");

let namesArray = [
    "Neeta sapkota",
    "neha shiwakoti",
    "Srijana Khatiwada",
    "Smrity Dhakal",
    "Sami Chakradhar",
    "Kirtee Maharjan",
    "Trija Thebe",
    "Sindhu Aryal",
    "Kusum Ranjitkar",
    "Elisha Bista",
    "Rachana kafle",
    "Barsha Maharjan",
    "Pooja Gurung",
    "Bisikha Subedi",
    "Kritika Baral",
    "Srijana Thulung",
];

let arrayOfObject = namesArray.map(function(name, index) {
    let splitedName = name.split(" ");
    let nameObj = {
        id: index + 1,
        firstName: splitedName[0][0].toUpperCase() + splitedName[0].slice(1),
        lastName: splitedName[1][0].toUpperCase() + splitedName[1].slice(1),
    };
    return nameObj;
});

console.log(arrayOfObject, "arrayOfObject");
console.log("\n\n***********************************\n\n");

console.log("Solution 2");

function find(initialLetter) {
    let totalObjects = arrayOfObject.length;
    var startsWithInitialLetterCount = 0;

    arrayOfObject.filter(function(value) {
        if (value.firstName[0].toUpperCase() === initialLetter.toUpperCase()) {
            startsWithInitialLetterCount++;
        }
    });
    return `${startsWithInitialLetterCount} and ${ totalObjects - startsWithInitialLetterCount}`;
}

console.log("find('s') -> ", find("s"));
console.log("find('a ') -> ", find("a"));

console.log("\n***********************************\n");

console.log("Solution 3");
let object = {};

arrayOfObject.forEach(function(value) {
    var objId = value.id;
    object[objId] = {
        firstName: value.firstName,
        lastName: value.lastName,
    };
})

console.log(object, "object");