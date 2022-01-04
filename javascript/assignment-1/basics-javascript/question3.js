function ObjectToArray(obj) {
    let objKeysArray = Object.keys(obj);
    let result = [];
    objKeysArray.forEach(function(key) {
        result.push([key, obj[key]]);
    });
    return result;
}

console.log(ObjectToArray({ a: 1, b: 2 }));