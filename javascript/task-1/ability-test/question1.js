// Question 1
// Consider the following problem:
// Write a short program that prints each number from 1 to 100 on a new line. 
// For each multiple of 3, print "Fizz" instead of the number. 
// For each multiple of 5, print "Buzz" instead of the number. 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0) {
            output += "Fizz";
        }
        if (i % 5 === 0) {
            output += "Buzz";
        }
        if (output === '') {
            output = i;
        }
        console.log(output)
    }
}

fizzbuzz();