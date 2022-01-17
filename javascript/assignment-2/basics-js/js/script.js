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
    let startsWithInitialLetterCount = 0;
    for (let i = 0; i < totalObjects; i++) {
        let initialFromObject = arrayOfObject[i].firstName[0].toLowerCase();
        let initialFromParams = initialLetter.toLowerCase();
        if (initialFromObject === initialFromParams) {
            startsWithInitialLetterCount++;
        }
    }
    return `${startsWithInitialLetterCount} and ${
    totalObjects - startsWithInitialLetterCount}`;
}

console.log("find('s') -> ", find("s"));
console.log("find('a ') -> ", find("a"));

console.log("\n***********************************\n");

console.log("Solution 3");
let object = {};
for (let i = 0; i < arrayOfObject.length; i++) {
    let objId = arrayOfObject[i].id;
    object[objId] = {
        firstName: arrayOfObject[i].firstName,
        lastName: arrayOfObject[i].lastName,
    };
}
console.log(object, "object");