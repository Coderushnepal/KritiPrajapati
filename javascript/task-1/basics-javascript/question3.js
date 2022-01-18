// Question 3
// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair.

function ObjectToArray(obj) {
    let objKeysArray = Object.keys(obj);
    let result = [];
    for (let i = 0; i < objKeysArray.length; i++) {
        let key = objKeysArray[i];
        result.push([key, obj[key]]);
    }
    return result;
}

console.log(ObjectToArray({ a: 1, b: 2 }));
console.log(ObjectToArray({ shrimp: 15, tots: 12 }));
console.log(ObjectToArray({}));