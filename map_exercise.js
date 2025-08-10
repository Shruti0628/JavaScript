/* Interview Questions - Array Filter

1. Using map(), write a function that takes an array of
strings and returns a new array where each string is capitalized.

*/

const { slice } = require("stylis");

// 1. Ans:
const words = ["shruti","sanyam","ujjwal","bikky","sumi"];
const res = words.map((ele)=>{
    // return ele.toUpperCase(); -> for string capitalization
    //For getting first letter capitalize, we can do this
    return ele.charAt(0).toUpperCase() + ele.slice(1);
    })
console.log(res);

/* 
2. Using map(), write a function that takes an array of numbers and returns a  new array
where each number is squared, but only if it's an even no.
*/

// 2. Ans:
const no = [1,2,3,4,5,6,7];
const res1 = no.map((ele)=>{
    if(ele % 2 == 0){
        return ele * ele;
    }
}).filter((ele)=>ele !== undefined); //Using filter() will help to remove out the elements that are odd and undefined.
console.log(res1)

/*
3. Using map(), write a function that takes an array of names and returns a new array 
where each name is prefixed with "Mr."
*/

// 3. Ans:
const names = ["Sanyam", "Sandeep","Ujjwal","Bikky","Saurav"];
const prefixed_names = names.map((ele)=>{
    return `"Mr. ${ele}";`
})
console.log(prefixed_names)