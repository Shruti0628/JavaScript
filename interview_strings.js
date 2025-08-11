//Interview Questions-Strings

/* 1. Write a JS fn() that prints the letters 'a' through 'z' in the console. You should use a loop to 
    iterate through the letters and print each one on a new line.*/
/* 2. Write a fn(), to count the number of vowels in a string? */
/* 3. Write a fn(), to check if all the vowels presents in a string or not? */
/* 4. Write a fn(), to check if the sentence has pangram or not. [Hint: Pangram means a sentence or phrase that contains every letter of the alphabet at least once]*/


// 1. Ans:
let a ="a".charCodeAt(0);
let z = "z".charCodeAt(0);
const alphabets = (()=>{
    for(let i=a; i<=z; i++){
       console.log(String.fromCharCode(i));
    }
    });
   alphabets();

// 2. Ans:
let sentence = "Hello World, My name is Shruti";
let count = 0;
const vowel_count = (()=>{
    for(let i=0; i<sentence.length; i++){
        if(sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence[i] === 'o' || sentence[i] === 'u'){
           count++;
        }
    }
    return count;
});
console.log("The total number of vowel present in this string is: " + vowel_count());

// 3. Ans:

let strings = "Hll";
const bool_vowel = (()=>{
    const lowerString = strings.toLowerCase();
    for(let i=0; i<lowerString.length; i++){
       if(lowerString[i] === 'a' || lowerString[i] === 'e' || lowerString[i] === 'i' || lowerString[i] === 'o' || lowerString[i] === 'u'){
        return true;
       }
    }
    return false;
});

if(bool_vowel()){
    console.log("Vowels are present");
}
else{
    console.log("Vowels aren't present");
}

// 4. Ans:-
let sent1 = "Hello World";
let lowerSent = sent1.toLowerCase();
let start = "a".charCodeAt(0);
let end = "z".charCodeAt(0);
const panagram = (()=>{
    for(let i = start; i<=end; i++){
       let currentChar = String.fromCharCode(i);
       if(!lowerSent.includes(currentChar)){
        return false;
       }
    }
    return true;
});

if(panagram()){
    console.log("It's a panagram");
}else{
    console.log("It's not a panagram");
}