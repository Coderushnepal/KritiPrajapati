// function parenthesis(string) {
//   myNum = string;
//   // console.log(string.split("").reverse());

//   if (string === parseInt((string.toString().split("").reverse().join()))){
//     console.log("HEllo World");
//   }
  // }
  // let stack = [];
  // let map = {
  //   "(": ")",
  //   "{": "}",
  //   "[": "]",
  // };
  // let a = "kriti";

  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
  //     stack.push(string[i]);
  //   } else {
  //     lastEle = stack.pop();
  //     if (string[i] !== map[lastEle]) {
  //       return false;
  //     }
  //   }
  // }

  // if (stack.length !== 0) {
  //   return false;
  // }
  // return true;
//   let final = 0, rem;
// while (string>0){
//   rem = string% 10;
//   string = parseInt(string/10);
//   final = final * 10 + rem;
// }
// if (myNum === final){
//   console.log("HEllo World");
// }

// }

// parenthesis(1111);

// function getSum(a, b) {
//   function add() {
//       return a + b;
//   }
//   return add();
// }

// console.log(getSum(1, 3));

// console.log(myVar);

// var myVar = 10;

// console.log(myVar);

// console.log(myFunc);

// function myFunc() {
//   return 'Hello';
// }

// console.log(myFunc2);

// var myFunc2 = function() {
//   return 'Hello Again';
// }

// console.log(myFunc2());

// function a(){
//   console.log('I am a normal function');
//   }
  
//  const b = () => {
//  console.log('I am an arrow function')
//  }
 
//  // They are essentially the same but with a few differences which we will cover as we go along this tutorial. 
 
//  // We can pass variables as arguments
 
//  const c = (name) => {
//  console.log(`My name is ${name}`)
//  }
//  a()
//  b()
 
//  c("kriti");
//  // `` template literal are a new addition to the language. Very useful for string formatting. Values are accessed using ${} inside them.
 
 
//  // We can even pass functions as arguments to a function. Will see more on this when we try to understand closures.
 
//  const greet = () =>  {
//      const prefix = 'Mr'
//      return (name) => {
//          console.log(`${prefix} ${name}, welcome!`)
//      }
//  }
 
//  console.log(greet()('Jack'))
 

 const add2numberAndDivideAndMultiple =(a,b) => {
   let cyy = a + b;
   return (divider)=>{
     let dyy = cyy /divider;
     return (multipler) => {
       return [dyy, cyy * multipler];
     };
   }
 }
 
console.log (add2numberAndDivideAndMultiple(1,3)(5)(2));

// function 
// ball(i,position) {
//   var id=i,
//   var top= position.top;

  
// }

// function position(size) {
//   return {
//       top: parseInt(Math.random() * size),
//       left: parseInt(Math.random() * size),
//   };
// }

// ball(i, position(6));


const init = (callBackFn) => {
  let a = 5;
  callBackFn(a, 10);
}

function getSum(a,b) {
  return a + b;
}

init(getSum);
getSum(5,10);

// var array = [1, 2, 3, 4, 5];

// var result = array.forEach(function(val, index) {
//     console.log(index, val);
//     return val + 1;
// });

// console.log('ForEach', result, array);

// var result = array.map(function(val, index) {
//     console.log(index, val);
//     return val + 1;
// });

// console.log('Map', result, array);

// for (var i = 0; i < 10; i++) {
//   setTimeout(function() {
//       console.log(i);
//   }, 1000);
// }
// zero timer problem
for (var i = 10; i < 20; i++) {
  setTimeout(
    (function(i) {
      return () =>console.log(i);
  })(i),
  100);
}

console.log(a);
let a= 10;
