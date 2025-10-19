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

// ...existing code...

const lapTimer = () => {
    if (intervalID === null) return;
    
    // Store current time values
    const lappedHours = hours;
    const lappedMinutes = minutes;
    const lappedSeconds = seconds;
    
    // Show lapped time with different styling
    const lappedTime = curr_time.textContent;
    curr_time.textContent = `Lapped: ${lappedTime}`;
    curr_time.classList.add('lapped');
    
    // Pause the current timer
    clearInterval(intervalID);
    intervalID = null;  // Important: Reset intervalID to indicate timer is stopped
    
    // Function to resume from lapped time
    const resumeFromLap = (e) => {
        curr_time.classList.remove('lapped');
        
        // Only resume if Start button is clicked
        if (e.target.id === 'start') {
            hours = lappedHours;
            minutes = lappedMinutes;
            seconds = lappedSeconds;
            updateTime(); // Update display first
            startTimer(); // Then start timer
        } else if (e.target.id === 'reset') {
            resetTimer();
        } 
        
        // Remove event listeners
        ['start', 'stop', 'reset', 'lap'].forEach(btn => {
            document.getElementById(btn).removeEventListener('click', resumeFromLap);
        });
    };

    // Add one-time click listeners to all buttons
    ['start', 'stop', 'reset', 'lap'].forEach(btn => {
        document.getElementById(btn).addEventListener('click', resumeFromLap, { once: true });
    });
};

// ...existing code...
start_btn.addEventListener("click", startTimer);
stop_btn.addEventListener("click", stopTimer);
reset_btn.addEventListener("click", resetTimer);
lap_btn.addEventListener("click", lapTimer);
updateTime();

