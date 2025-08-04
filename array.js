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

//How to use CRUD in arrays
let fruits = ['apple', 'banana','mango','strawberry'];
fruits.push("blueberry");
console.log(fruits); //push() will help elements to add at the end of the array, and also it returns the new length.

console.log(fruits.pop()); //pop() removes the last element of an array

//shift() & unshift()
console.log(fruits.unshift('blueberry')); //It wiill add the elements at the beginning of the array.
console.log(fruits);
 
console.log(fruits.shift());// It will remove the first element from  an array.
console.log(fruits);

//What if, we want to add or remove elements anywhere in the array?
//For this, we can use splice() to add or remove elements.
//splice(start, deleteCount, item1, item2,...,itemN)

fruits.splice(1,1,"guava");//This will add the element at this given index by replacing that existing element.
console.log(fruits);
fruits.splice(1,1);//This will remove the element at that index.
console.log(fruits);

//Searching in an Array
/* We have different methods to search elements in an array : "indexOf", "lastIndexOf" & "includes"*/

const numbers = [1,2,3,4,5,6,7,8,9];
//indexOf() : it returns the first index at which a given element can be found in the array or return -1 if its' not present.
console.log(numbers.indexOf(2));

//lastIndexOf() : it returns the last index at which a given element can be found from backwards, and will return -1 if it's not present.
//Syntax: lastIndexOf(searchElement, fromIndex)

//includes(): This checks whether an array includes a certain element, returning true or false.
/* Syntax: includes(searchElement), includes(searchElement, fromIndex);*/

const num1 = [ 1,2,3,4,5,6,7,8,9 ];
const res = num1.includes(6);
console.log(res);
const res1 = num1.includes(10);
console.log(res1);

