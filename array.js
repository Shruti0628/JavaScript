//Writing arrays

// Using Array constructor
let arr1 = new Array('apple', 'banana', 'cherry');
console.log(arr1);

//Using array literal notation
let arr2 = ['apple', 'banana', 'cherry'];
console.log(arr2); 

//Using forEach()
arr1.forEach((currEle, index,arr)=>{
console.log (`This is the ${currEle} at ${index},and these are the complete list [${arr}]`);
})

//Using map()
const myArr = arr2.map((currEle, index, arr) => {
   return `This is the ${currEle} at ${index}, and these are the complete list [${arr}]`;
})
console.log(myArr);