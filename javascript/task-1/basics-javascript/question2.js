// Question 2
// Censor Words Longer Than Four Characters
// Create a function that takes a string and censors words over four characters with *.


function censor(text) {
    let output = '';
    let myArray = text.split(" ");
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].length > 4) {
            myArray[i] = "*".repeat(myArray[i].length);
        }
        output += myArray[i] + " ";
    }
    return output;
}

console.log(censor("The code is fourty"));
console.log(censor("Two plus three is five"));
console.log(censor("aaaa aaaaa 1234 12345"));