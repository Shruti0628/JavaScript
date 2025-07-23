//Check if a no is a palindrome or not
const palindrome = (num)=>{
    let modulo = num;
        let reverse = 0;
        while(modulo>0){
            let digit = modulo % 10;
            reverse = reverse * 10 + digit;
            modulo = Math.floor(modulo / 10);;
            if(reverse === num){
                return true;
            }
        }
        return false;
    }

console.log(palindrome(121)); 
console.log(palindrome(123));