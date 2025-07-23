function calculator(num1,num2,operator){
    let res;
    switch(operator){
        case '+':
            res = num1 + num2;
            console.log(`Result: ${res}`);
            break;
        
        case '-':
            res = num1 - num2;
            console.log(`Result: ${res}`);
            break;
        
        case '*':
            res = num1 * num2;
            console.log(`Result: ${res}`);
            break;
        
        default:
            console.log("Invalid operator. Please use +, -, or *.");
            break;
    }
}
console.log("Calculator Function Example:");
calculator(5,2,'+');
calculator(5,2,'-');
calculator(5,2,);
calculator(5,2,'*');