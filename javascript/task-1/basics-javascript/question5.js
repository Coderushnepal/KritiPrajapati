// Question 5
// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays.

// Notes * Remember to sort the keys.


function keysAndValues(obj) {
    let valuesArray = [];
    let keysArray = Object.keys(obj);
    keysArray.sort();
    for(let i=0; i<keysArray.length; i++){
        valuesArray[i] = obj[keysArray[i]];
    }
    return [keysArray, valuesArray];
}

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));