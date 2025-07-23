//Reverse a string in JS
const rev = (s) => {
    let res = '';
    for( let i = s.length - 1; i >= 0; i--) {
        res+=s[i];
}
    return res;
}
console.log(rev("My world"));