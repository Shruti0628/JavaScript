/*
WAP that defines a function called repeatedFunction. This function shoyld log the message 
"This function repeats every 1000 milliseconds ( 1 second ) " to the console. Then, set up an
interval using setInterval() to call this function every 1000 milliseconds ( 1 second ). Additionlly, after 5 seconds have elapsed,
use setTImeout() to clear the interval, stopping the repeated execution of the function. Make sure to log the message "Interval cleared after 5 seconds." when the interval is cleared.
*/

const repeatedFunction = () => {
    console.log("This function repeats every 1000 milliseconds (1 second)");
}
const intervalID = setInterval(repeatedFunction, 1000);
setTimeout(() => {
    clearInterval(intervalID);
    console.log("Interval cleared after 5 seconds.");
}, 5000);