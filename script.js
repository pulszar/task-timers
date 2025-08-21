var numOfTimers = 0;
// const map = new Map();
intervalID = null;

function newTimer() {
    clearInterval(intervalID);

    // Create a new timer and append it to the timers section
    const newTimerNameDiv = document.createElement("div");
    const newTimerName = document.createTextNode("New Timer Name")
    newTimerNameDiv.appendChild(newTimerName);

    const parentTimerNameDiv = document.getElementById("timer").parentNode;
    const timerNameDiv = document.getElementById("timer")
    parentTimerNameDiv.insertBefore(newTimerNameDiv, timerNameDiv);
    console.log("New timer created");

    
    const newTimerPara = document.createElement("p");
    newTimerPara.setAttribute("id", `timer${numOfTimers}`);
    const newTime = document.createTextNode("0");
    newTimerPara.appendChild(newTime);

    curTimerHeader = document.getElementById("timer"); // Appending at the timers div, not the previous timer currently 
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
