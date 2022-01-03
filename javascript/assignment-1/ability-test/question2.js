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