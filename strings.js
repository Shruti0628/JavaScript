//match(): Returns an array of the matched values or null if no match is found
let text = "Hello JavaScript, Welcome to our world best JavaScript course";
let res = text.match("JavaScript");
//let res = text.match("Javascript") => null
let res1 = text.match(/JavaScript/); // => Behind the scenes, the string is converted to this regular expression.
let res2 = text.match(/JavaScript/g); //=> If we define this as global, we will get the no of times JavaScript has been repeated.
console.log(res);
console.log(res1);
console.log(res2);

/* matchAll(): Returns an iterator of all matches, providing detailed info about each match. Returns an empty iterator if no match is found.
               It will also convert the text to regular expression, text.match(/JavaScript/g), also adds the g flag at the end and gives the index of thos repeating words.      
*/

let text1 = "Hello JavaScript, welcome to our world best JavaScript course";
let textres = text1.matchAll("JavaScript");
console.log(... textres);

// Concepts of slice and substring are also there as similar to arrays but substring is deprecated now.
let text2 = "Hello World";
let result = text2.substring(1);
let result1 = text2. substring(-1);
let result2 = text2.slice(1);
let result3 = text2.slice(-1);
//Positive index always starts with 0, and negative index always starts with -1;

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

/* The reasoning when slice() and substring(), both works identically why do we prefer using slice(). It's beacause slice() can handle the negative indexing or say accept it. But, substring() treats any negative index as 0, providing unexpected results at times.
   Also, slice(start, end) does "NOT SWAP", if start>end, it just returns an empty string, whereas 
         substring(start,end) "SWAPS" automatically, if start>end.
*/

//replace() and replaceAll() are the methods that will help to replace the characters at that position

/* Extracting String Characters: There are 3 methods for extracting string characters.
   1. charAt(): It returns the character at a specified index in a string.
   2. charCodeAt(): It returns the code of the character at a specified index in a string. The method returns a UTF-16 code i.e. ASCII code
   3. at(): It returns the character at a specified index in a string. It allows the use of negative indexes while charAt() don't.
*/

/* Replacing String Content:
   1. replace(): The replace() is used to replace a specified value with another value.
      g =  in regular expression, is used for global that means the places there are the word all changes can be done.
      i =  in regular expression, is used for considering the case-sensitive alphabets.
*/

/* Other Useful Methods:
   1. toUpperCase() and toLowerCase(): Converts the string to uppercase or lowercase.
   2. trim(): Removes whitespaces from the both ends of the string.
   3. split(): Splits the string into an array of substrings based on a specified delimiter.
   4. reverse(): Will reverse the elements easily.
   5. join(): Will join the string after split easily.
*/