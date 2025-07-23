//This is a function expression example
var myName = function name(a,b){
    console.log("Hello," + a + " " + b);
}
myName("Shruti","Rouniyar");

//This is an anynymous function expression example
var res = function (a,b){
    console.log("Sum is: ", a + b);
}
res(5,10);

//This is an IIFE (Immediately Invoked Function Expression) example
(function sum(a,b){
    console.log("Sum is:", a+b);
})(5,10);