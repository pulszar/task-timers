function newTimer() {

    // Create a new timer and append it to the timers section
    const newTimerNameDiv = document.createElement("div");
    const newContent = document.createTextNode("New Timer Name")
    newTimerNameDiv.appendChild(newContent);
    const currentDiv = document.getElementById("timers");
    document.body.insertBefore(newTimerNameDiv, currentDiv); 
    console.log("New timer created");

    var curTime = 0;
    // Anonymous function so function return isn't used, the function with the call is used instead
    setInterval(function() {curTime = timer(curTime);}, 1000);

    
    function timer(curTime) {
        console.log(curTime);
        // Update the timer display
        const timerDisplay = document.getElementById("timers_time");
        timerDisplay.textContent = curTime;
        return curTime += 1;
    }
}
