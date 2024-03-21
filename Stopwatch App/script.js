// fetch the displayTime Element
let displayTime = document.querySelector('#displayTime');
// fetch the timingStatus Element
let timingStatus = document.getElementById('timingStatus');
// create variable to store setInterval function
let timer = null;
// create a array to store multiple varaible
let [seconds, minutes, hours] = [0,0,0];

// created a function which can run for every seconds
function stopWatch(){
    // update the seconds by one
    seconds++;

    // if seconds become 60 means 1 minute completed
    if(seconds == 60){
        // so make the seconds to 0
        seconds = 0;
        // update the minutes by one
        minutes++;

        // if minutes become 60 means 1 hours completed
        if(minutes == 60){
            // so make the minutes to 0
            minutes = 0;
            // update the hours by one
            hours++;
        }
    }

    /* here we can use the conditional operator to check the hours,minutes and
    seconds to if they can have only 1 digit so add 0 before that
    and if they have to digits then add directly */
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // Set the innerHTML in displayTime Element
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

// created a function to start the watch
function watchStart(){

    // if timer variable is not a null means the stop watch is already started
    if(timer !== null){
        // so first clearInterval
        clearInterval(timer);
    }

    timingStatus.textContent = "Watch is runing";
    timingStatus.style.color = "green";

    // and now start the new setInterval which can call the stopWatch function in every 1 second
    timer = setInterval(stopWatch, 1000);
}

// created a function which can stop the stop watch
function watchStop(){
    // for stop the watch we just clear the interval
    // means the setInterval is not runing the right now
    // so it's not call the stopWatch function in every second
    clearInterval(timer);

    timingStatus.textContent = "Watch is pause";
    timingStatus.style.color = "red";
}

// created a function which can reset the stop watch
function watchReset(){
    // for reset the stop watch we can clear the interval
    clearInterval(timer);
    // again set the all variables to 0
    [seconds, minutes, hours] = [0,0,0];
    // and update the displayTime Element test to 00:00:00
    displayTime.innerHTML = "00:00:00";

    timingStatus.textContent = "Watch is reset";
    timingStatus.style.color = "white";

    // this can clear the timingStatus content after 1 second
    setTimeout( () => {
        timingStatus.textContent = "";
    },1000);

}