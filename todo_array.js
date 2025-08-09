//Challenge time
/*
Ques.1) Add "Dec" at the end of an array?
Ques.2) What is the return value of splice method?
Ques.3) Update march to March(update)?
Ques.4) Delete June from an array?
*/

//1. Ans -> using slice()
const months = ['Jan','Feb','mar','Apr','June'];
months.splice(months.length, 0, "Dec");
console.log(months);

//2. Ans-> returns an empty array [].
// console.log(months.splice(months.length,0,"Dec"));

//3. Ans-> 
const indexToUpdate = months.indexOf("mar");
months.splice(indexToUpdate,1,"March");
console.log(months);

//4. Ans->
const delIndex = months.indexOf("June", "Dec");
months.splice(delIndex,1);
// months.splice(delIndex,2);
console.log(months);

//  0 -> It's from starting index from this position and for removing nothing.
// 1-> It's from starting from this position and removing only one element.