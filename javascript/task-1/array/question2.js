// Question 2
// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
    newArray = [];
    for (let i=0; i<arr.length; i++) {
        if (!(typeof(arr[i]) === "string")) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(filterArray([1, 2, "a", "b"]));

console.log(filterArray([1, "a", "b", 0, 15]));

console.log(filterArray([1, 2, "aasf", "1", "123", 123]));