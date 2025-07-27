//Write a program to multiply each element of an array by 2 and print the result

//Using forEach()
const arr = [1,2,3,4,5];
arr.forEach((currEle) => {
    console.log(currEle * 2);
    //Actions is performed on each element
})

//Using map()
const mulValue = arr.map((currEle) => {
    return  currEle * 2;
    //Creates a new array with the results of calling a provided function on every element in the calling array
});
console.log(mulValue);