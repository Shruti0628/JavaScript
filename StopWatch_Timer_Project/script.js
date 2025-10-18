const reset_btn = document.getElementById("reset");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const lap_btn = document.getElementById("lap");

const curr_time = document.getElementById("time");
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalID = null;

// Function to update the time display 
const updateTime = () => {
    const h = hours.toString().padStart(2,'0'); // Will add pad '0' if single digit
    const m = minutes.toString().padStart(2,'0');
    const s = seconds.toString().padStart(2,'0');
    curr_time.textContent = `${h} : ${m} : ${s}`;
}

const startTimer = () =>{
 if(intervalID !== null) return;
 intervalID = setInterval(()=>{
    seconds++;
    if(seconds === 60){
        minutes++;
        seconds = 0;
    }
    if(minutes === 60){
        hours++;
        minutes = 0;
    }
    updateTime();
 },1000);
}

const stopTimer = () => {
    clearInterval(intervalID);
    intervalID = null;
}

const resetTimer = () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTime();
}

const lapTimer = () => {
    if(intervalID === null) return; // Prevent lap if timer not running
    const lap_time = curr_time.textContent;
    const originalContent = curr_time.textContent;
    curr_time.textContent = `Lapped Time: ${lap_time}`;
    curr_time.classList.add("lapped");
    // Storing current time values to show lapped times
    const currentHours = hours;
    const currentMinutes = minutes;
    const currentSeconds = seconds;
    // Timer continues in background for accurate timekeeping
    const tempIntervalID = intervalID
    clearInterval(intervalID);
    // Wait for any button clicks
    const resumeTimer = () => {
        if ( tempIntervalID === intervalID) {
            hours = currentHours;
            minutes = currentMinutes;
            seconds = currentSeconds;
            startTimer();
        }
        updateTime();
    };
    start_btn.addEventListener("click", resumeTimer, { once: true });
    stop_btn.addEventListener("click", resumeTimer, { once: true });
    reset_btn.addEventListener("click", resumeTimer, { once: true });
    lap_btn.addEventListener("click", resumeTimer, { once: true });
}
start_btn.addEventListener("click", startTimer);
stop_btn.addEventListener("click", stopTimer);
reset_btn.addEventListener("click", resetTimer);
lap_btn.addEventListener("click", lapTimer);
updateTime();

