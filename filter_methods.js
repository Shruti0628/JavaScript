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