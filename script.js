var numOfTimers = 1;
intervalID = null;

function newTimer() {
    // Create a new timer element
    const timersDiv = document.getElementById("timers");
    const timerNameDiv = document.createElement("div");
    timerNameDiv.setAttribute("id", `timerName${numOfTimers}`);
    timerNameDiv.textContent = `Timer ${numOfTimers + 1}`;
    timersDiv.appendChild(timerNameDiv);
    
    // Create a new timer display paragraph
    const timerDisplayPara = document.createElement("p"); 
    timerDisplayPara.setAttribute("id", `timer${numOfTimers}`);
    timerDisplayPara.textContent = "0";
    timerNameDiv.appendChild(timerDisplayPara);
    
    // Create a new start button
    const startButton = document.createElement("button");
    startButton.setAttribute("id", `startTimer${numOfTimers}`);
    startButton.setAttribute("onclick", `startTimer(${numOfTimers})`);
    startButton.textContent = "Start";
    timerNameDiv.appendChild(startButton);

    numOfTimers++;
}

function startTimer(timerIndex) {
    clearInterval(intervalID);
    curTime = 0;
    // Call once immeditely to prevent delay
    curTime = timer(curTime)
    intervalID = setInterval(function() {curTime = timer(curTime);}, 1000);

    function timer(curTime) {
        console.log("current timer is" + `timer${numOfTimers}`)
        console.log(curTime);
        // Update the timer display
        const curTimerHeader = document.getElementById(`timer${timerIndex}`);
        curTimerHeader.textContent = curTime;
        return curTime += 1;
    }
    console.log("Number of timers: " + (numOfTimers + 1));
}
