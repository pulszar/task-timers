var numOfTimers = 1;
// const map = new Map();
intervalID = null;

function newTimer() {
    clearInterval(intervalID);

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
    startButton.textContent = "Start";
    timerNameDiv.appendChild(startButton);


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
