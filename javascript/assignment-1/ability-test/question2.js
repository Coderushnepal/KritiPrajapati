// Question 2
// Find the Smallest and Biggest Numbers Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

function minMax(array) {
    let min, max;
    for (let i = 0; i < array.length; i++) {
        if (!max) {
            max = array[i];
        } else if (max < array[i]) {
            max = array[i];
        }
        if (!min) {
            min = array[i];
        } else if (min > array[i]) {
            min = array[i];
        }
    }
    return [min, max]
}

console.log(minMax([2, 3, 5, 1]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]))