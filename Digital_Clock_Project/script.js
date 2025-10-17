currentTime = () => {
    let curr_time = new Date().toLocaleTimeString();
    document.getElementById("time").innerText = curr_time;
}
const id_time = setInterval(() => { // For repeating the function after every 1000 milliseconds ( 1 second)
    currentTime();
}, 1000);

setTimeout(() => { // For stopping the clock after 5 seconds
    clearInterval(id_time);
}, 5000);  

currentDate = () => {
    let curr_date = new Date();
    const day = curr_date.getDate();
    const month = curr_date.getMonth() + 1; // Months are zero-based
    const year = curr_date.getFullYear();
    // For adding suffix to dates (th, st, nd, rd)
    const suffix = (day) => {
        if(day > 3 && day < 21) return 'th';
        switch(day){
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";   
        }
    };
    const month_suffix = (month) => {
        switch(month){
            case 1: return "Jan";
            case 2: return "Feb";
            case 3: return "Mar";
            case 4: return "Apr";   
            case 5: return "May";
            case 6: return "Jun";
            case 7: return "Jul";
            case 8: return "Aug";
            case 9: return "Sep";
            case 10: return "Oct";
            case 11: return "Nov";
            case 12: return "Dec";
            default: return "";   
        }
    };
    curr_date = `${day}${suffix(day)} - ${month_suffix(month)} - ${year}`;
    document.getElementById("date").innerText = curr_date;
}
currentDate();