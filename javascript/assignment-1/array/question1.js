// Question 1
// Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
    newArray = [];
    for(let i=0; i<arr.length; i++){
        newArray.push(typeof(arr[i]));
    }
    return newArray;
}

console.log(arrayValuesTypes([1, 2, "null", []]));

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));

console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));
