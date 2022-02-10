// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   console.log("hello World");
// });



// const addTwonumandDivide = (a, b) => {
//   let c = a + b;
//   return (divider) => {
//     return c / divider;
//   };
// };

// console.log(addTwonumandDivide(2, 3)(5));

const normalFunction = (callBackFn)=>{
    let a= 5;
    callBackFn(a,10);
}

function getSum(x,y){
    console.log(x,y)
    return x + y;
}




console.log(normalFunction(getSum));
console.log(getSum(3,4));


