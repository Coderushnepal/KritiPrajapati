// Question 4
// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
// Note * A string with a single character is trivially counted as a string with repeating identical characters. * If there are no strings with repeating identical characters, return an empty array (see example #3).

function identicalFilter(array) {
  let identicalArray = [];
  for (let i = 0; i < array.length; i++) {
    let firstLetter = array[i][0];
    if (array[i] === firstLetter.repeat(array[i].length)) {
      identicalArray.push(array[i]);
    }
  }
  return identicalArray;
}

console.log(identicalFilter(["88", "999", "22", "545", "133"]));
console.log(identicalFilter(["xxxxo ", "oxo ", "xox ", "ooxxoo ", "oxo"]));
