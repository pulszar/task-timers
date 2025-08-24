var numOfTimers = 1;
intervalID = null;

function newTimer() {
    // Create a new timer element
    const timersDiv = document.getElementById("timers");
    const timerNameDiv = document.createElement("div");
    timerNameDiv.setAttribute("id", `timerName${numOfTimers}`);
    timerNameDiv.setAttribute("class", "timerDisplay");
    timersDiv.appendChild(timerNameDiv);


    const timerInputBoxDiv = document.createElement("div");
    timerInputBoxDiv.setAttribute("class", "timerInputBox");
    timerNameDiv.appendChild(timerInputBoxDiv);


    // Create a new input field for the timer name
    const timerNameInput = document.createElement("input");
    timerNameInput.setAttribute("type", "text");
    timerNameInput.setAttribute("id", `timerNameInput${numOfTimers}`);
    timerNameInput.setAttribute("class", "timerFieldName");
    timerNameInput.setAttribute("value", `Timer ${numOfTimers + 1}`);
    timerInputBoxDiv.appendChild(timerNameInput);

    
    // Create a new timer display paragraph
    const timerDisplayPara = document.createElement("p"); 
    timerDisplayPara.setAttribute("id", `timer${numOfTimers}`);
    timerDisplayPara.textContent = "0";
    timerNameDiv.appendChild(timerDisplayPara);
    
    // Buttons for timer control

    // Div for buttons
    const timerButtons = document.createElement("div");
    timerButtons.setAttribute("id", `timerButton${numOfTimers}`);
    timerNameDiv.appendChild(timerButtons);


    // Create a new start button
    const startButton = document.createElement("button");
    startButton.setAttribute("id", `startTimer${numOfTimers}`);
    startButton.setAttribute("onclick", `startTimer(${numOfTimers})`);
    startButton.setAttribute("class", "timerButton");
    startButton.textContent = "Start";
    timerButtons.appendChild(startButton);

    // Create a new delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `deleteTimer${numOfTimers}`);
    deleteButton.setAttribute("onclick", `deleteTimer(${numOfTimers})`);
    deleteButton.setAttribute("class", "timerButton");
    deleteButton.textContent = "Delete";
    timerButtons.appendChild(deleteButton);

    numOfTimers++;
}

function startTimer(timerIndex) {
    // Kill start button after starting timer
    document.getElementById(`startTimer${timerIndex}`).remove();
    // Kill delete button after starting timer, restore it later to maintain order
    document.getElementById(`deleteTimer${timerIndex}`).remove();

    // Set initial conditions

    // Prevent previous internval from affecting new timer
    clearInterval(intervalID);
    let curTime = 0;
    
    // Render in pause and reset buttons
    
    // Create a new stop button
    const timerButtons = document.getElementById(`timerButton${timerIndex}`);
    console.log(timerButtons)

    const stopButton = document.createElement("button");
    stopButton.setAttribute("id", `stopTimer${timerIndex}`);
    stopButton.setAttribute("onclick", `stopTimer(${timerIndex})`);
    stopButton.setAttribute("class", "timerButton");
    stopButton.textContent = "Stop";
    timerButtons.appendChild(stopButton);

    // Create a new reset button
    const resetButton = document.createElement("button");
    resetButton.setAttribute("id", `resetTimer${timerIndex}`);
    resetButton.setAttribute("onclick", `resetTimer(${timerIndex})`);
    resetButton.setAttribute("class", "timerButton");
    resetButton.textContent = "Reset";
    timerButtons.appendChild(resetButton);

    // Restore delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `deleteTimer${timerIndex}`);
    deleteButton.setAttribute("onclick", `deleteTimer(${timerIndex})`);
    deleteButton.setAttribute("class", "timerButton");
    deleteButton.textContent = "Delete";
    timerButtons.appendChild(deleteButton);


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
    console.log("Resetting timer... timer"+timerIndex);
    clearInterval(intervalID);
    const curTimerHeader = document.getElementById(`timer${timerIndex}`);
    curTimerHeader.textContent = "0";
    
    // Remove stop, reset, and delete buttons
    document.getElementById(`stopTimer${timerIndex}`).remove();
    document.getElementById(`resetTimer${timerIndex}`).remove();
    document.getElementById(`deleteTimer${timerIndex}`).remove();
    
    // Restore start button
    const timerButtons = document.getElementById(`timerButton${timerIndex}`); 
    console.log(timerButtons);
    const startButton = document.createElement("button");
    startButton.setAttribute("id", `startTimer${timerIndex}`);
    startButton.setAttribute("onclick", `startTimer(${timerIndex})`);
    startButton.setAttribute("class", "timerButton");
    startButton.textContent = "Start";
    timerButtons.appendChild(startButton);

    // Restore delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `deleteTimer${timerIndex}`);
    deleteButton.setAttribute("onclick", `deleteTimer(${timerIndex})`);
    deleteButton.setAttribute("class", "timerButton");
    deleteButton.textContent = "Delete";
    timerButtons.appendChild(deleteButton);

    // console.log("Reset timer " + timerIndex);
}

function deleteTimer(timerIndex) {
    document.getElementById(`timerName${timerIndex}`).remove();
}