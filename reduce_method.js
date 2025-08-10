/* ---Reduce method---
reduce() :- this method is used to accumulate array val into 
a single res-which could be a number,string,object, or even array

For an example: whenever we get total by adding the items in the cart, reduce() is being used.
Syntax: arr.reduce( function callback (accumulator, currentValue, index, array){
        //Logic here 
        //Return the updated accumulator value
}, initialValue);


---Definition of these terms---
1. callback():- A function is called as a callback() when you pass an arg to another fn() so that the other fn() can call it later at the appropriate time.
Suppose for an example, as being an employee to the organization, the hiring manager said 
    "Whenever you want to have a discussion, ping me up"
    Here, ping me up -> callback function that is required to get triggered by the employee
    and HR -> is the main function which responds to it and returns some value.

2. accumulator:- The value returned from previous callback().
3. currentValue:- currenet element in array is being processed in that iteration.
4. index:- current element of index is being processed.
5. array:- original array.
6. initialValue:- starting value of accumulator.

*/


const price = [1000, 2000, 3349, 3500, 69];
const res = price.reduce((acc, currEle)=>{
    return acc+currEle;
},0);

console.log(res);