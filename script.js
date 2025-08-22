var numOfTimers = 0;
// const map = new Map();
intervalID = null;

function newTimer() {
    clearInterval(intervalID);

    // Create a new timer and append it to the timers section
    const newTimerNameDiv = document.createElement("div");
    const newTimerName = document.createTextNode("New Timer Name")
    newTimerNameDiv.appendChild(newTimerName);
    newTimerNameDiv.setAttribute("id", `timerName${numOfTimers}`);
    // console.log("Creating new timer with ID: " + `timerName${numOfTimers}`);

    // Insert the new timer name before the current timer name
    const parentTimerNameDiv = document.getElementById("timer").parentNode;
    const timerNameDiv = document.getElementById("timer")
    parentTimerNameDiv.insertBefore(newTimerNameDiv, timerNameDiv);
    console.log("New timer created");

    // Create a new timer display element  
    const newTimerPara = document.createElement("p");
    newTimerPara.setAttribute("id", `timer${numOfTimers}`);
    const newTime = document.createTextNode("0");
    newTimerPara.appendChild(newTime);

    // Insert the new timer display before the current timer display
    curTimerHeader = document.getElementById("timer"); 
    parentTimerNameDiv.insertBefore(newTimerPara, timerNameDiv);

    curTime = 0;

    // Anonymous function so function return isn't used, the function with the call is used instead
    intervalID = setInterval(function() {curTime = timer(curTime);}, 1000);

    function timer(curTime) {
        console.log("current timer is" + `timer${numOfTimers}`)
        console.log(curTime);
        // Update the timer display
        const curTimerHeader = document.getElementById(`timer${numOfTimers - 1}`);
        curTimerHeader.textContent = curTime;
        return curTime += 1;
    }
    console.log("Number of timers: " + (numOfTimers + 1));
    numOfTimers++;
}
