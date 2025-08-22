var numOfTimers = 1;
intervalID = null;

function newTimer() {
    // Create a new timer element
    const timersDiv = document.getElementById("timers");
    const timerNameDiv = document.createElement("div");
    timerNameDiv.setAttribute("id", `timerName${numOfTimers}`);
    timerNameDiv.setAttribute("class", "timerDisplay");
    timersDiv.appendChild(timerNameDiv);

    // // Create a new input field for the timer name
    const timerNameInput = document.createElement("input");
    timerNameInput.setAttribute("type", "text");
    timerNameInput.setAttribute("id", `timerNameInput${numOfTimers}`);
    timerNameInput.setAttribute("value", `Timer ${numOfTimers + 1}`);
    timerNameDiv.appendChild(timerNameInput);
    
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

    // Create a new stop button
    const stopButton = document.createElement("button");
    stopButton.setAttribute("id", `stopTimer${numOfTimers}`);
    stopButton.setAttribute("onclick", `stopTimer(${numOfTimers})`);
    stopButton.textContent = "Stop";
    timerNameDiv.appendChild(stopButton);

    // Create a new reset button
    const resetButton = document.createElement("button");
    resetButton.setAttribute("id", `resetTimer${numOfTimers}`);
    resetButton.setAttribute("onclick", `resetTimer(${numOfTimers})`);
    resetButton.textContent = "Reset";
    timerNameDiv.appendChild(resetButton);


    numOfTimers++;
}

function startTimer(timerIndex) {
    // Set initial conditions
    clearInterval(intervalID);
    let curTime = 0;
    // Call once immeditely to prevent delay
    curTime = timer(curTime)
    intervalID = setInterval(function() {curTime = timer(curTime);}, 1000);

    // Helper function to update the timer
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

function stopTimer(timerIndex) {
    clearInterval(intervalID);
    console.log("Stopped timer " + timerIndex);
}

function resetTimer(timerIndex) {
    clearInterval(intervalID);
    const curTimerHeader = document.getElementById(`timer${timerIndex}`);
    curTimerHeader.textContent = "0";
    console.log("Reset timer " + timerIndex);
}
