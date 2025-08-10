/*Methods discussion/*


/* find(): It's used to find the first element only in an array that satisfies a provided testing function. 
           It returns the first matching element or undefined if no element is found.
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];
const res = numbers.find((currEle)=>{
    return  currEle>5;
})
console.log(res);

/* findIndex(): The findIndex() of TypedArray instances returns the index of the first element in a typed array
                that satisifies the provided testing function. If no elements satisfy the testing fn(), -1 is returned.
*/

const res1 = numbers.findIndex((currEle)=>{
    return currEle > 2; //Will only return the ans's index.
})
console.log(res1);

/*Filter() is used to create a new array containing only the elements from the 
original array that pass a certain test(condition), you define in a callback function.*/

const res2 = numbers.filter((currEle) => {
    return currEle > 3;
})
console.log(res2);


//Example-1: In an e-commerce website, there is a cart where items are kept, and user's wants to delete value 6, so how can it be done?

let value = 6;
const num = [1,2,3,4,5,6,6,7,8,9,6];

let updatedCart = num.filter((currEle) => {
    return currEle !== value;
})
console.log(updatedCart);

//Example - 2: Use filter() in objects 
const products = [ 
{name:"Laptop", price: 1500000},
{name:"Sandles", price: 4500},
{name:"Phone", price: 11000},
{name:"Dress", price: 2500},
];

//Use filter() to filter the price less than 15,000
const filterProd = products.filter((currEle)=>{
    // console.log(currEle.price <= 15000)
    return currEle.price <= 15000
})
console.log(filterProd);

//Example 3:- Filter unique values
const no = [1,2,3,4,6,5,6,7,8,9,10];
let uniqueVal = no.filter((currEle,index,arr)=>{
 return arr.indexOf(currEle) === index;
})
console.log(uniqueVal)
//Alternate way to get UniqueValues is using new Set()
console.log(new Set(no)); //Or use spread operator to get the array
console.log([...new Set(no)])

//Example 4: Compare and sort the values (Eg: Sort the price by low to high, high to low, etc.)
const shoes = ["Nike", "Caliber","Clarks","Puma","Reebok"]
shoes.sort();
console.log(shoes);
const sortedShoeOrder = shoes.sort((a,b)=> {
   if(a>b)return 1;
   if(b>a)return -1;
});
console.log(sortedShoeOrder);
const sorting_nos = [1,2,4,5,8,10,9];
const no_Sorted = sorting_nos.sort((a,b)=>{
    if(a>b)return 1;
    if(b>a)return -1;
});
console.log(no_Sorted);


//-----map(), filter(), reduce()-----

/*map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements
map() does not change the original array.*/

// Using map to square each number and create a new array
const num1 = [1,2,3,4,5];
let result = num1.map((currEle)=>{
    return currEle *  currEle;
})
console.log(result)
