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

    
    // // Create a new timer display paragraph
    // const timerDisplayPara = document.createElement("p"); 
    // timerDisplayPara.setAttribute("id", `timer${numOfTimers}`);
    // timerDisplayPara.textContent = "0";
    // timerNameDiv.appendChild(timerDisplayPara);

    // Create timer parts div
    const timerPartsDiv = document.createElement("div");
    timerPartsDiv.setAttribute("class", "timerParts");
    timerNameDiv.appendChild(timerPartsDiv);

    // Create hours part
    const hoursPara = document.createElement("p");
    hoursPara.setAttribute("id", `hours${numOfTimers}`);
    timerPartsDiv.appendChild(hoursPara);
    // Create colon placeholder for hours
    const hoursColon = document.createElement("p");
    hoursColon.setAttribute("id", `hoursColon${numOfTimers}`);
    hoursColon.textContent = "";
    hoursPara.insertAdjacentElement("afterend", hoursColon);
    // Create minutes part
    const minutesPara = document.createElement("p");
    minutesPara.setAttribute("id", `minutes${numOfTimers}`);
    timerPartsDiv.appendChild(minutesPara);
    // Create colon placeholder for minutes
    const minutesColon = document.createElement("p");
    minutesColon.setAttribute("id", `minutesColon${numOfTimers}`);
    minutesColon.textContent = "";
    minutesPara.insertAdjacentElement("afterend", minutesColon);
    // Create seconds part
    const secondsPara = document.createElement("p");
    secondsPara.setAttribute("id", `seconds${numOfTimers}`);
    timerPartsDiv.appendChild(secondsPara);
    hoursPara.textContent = "0";

    
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
    let seconds = 58;
    
    // Render in pause and reset buttons
    
    // Create a new pause button
    const timerButtons = document.getElementById(`timerButton${timerIndex}`);
    console.log(timerButtons)

    const pauseButton = document.createElement("button");
    pauseButton.setAttribute("id", `pauseTimer${timerIndex}`);
    pauseButton.setAttribute("onclick", `pauseTimer(${timerIndex})`);
    pauseButton.setAttribute("class", "timerButton");
    pauseButton.textContent = "Pause";
    timerButtons.appendChild(pauseButton);

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
    seconds = timer(seconds, timerIndex)
    intervalID = setInterval(function() {seconds = timer(seconds, timerIndex);}, 1000);
    // Helper function to update the timer
    console.log("Number of timers: " + (numOfTimers + 1));
}

function timer(seconds, timerIndex) {
    console.log("current second is" +seconds)
    const hoursPara = document.getElementById(`hours${timerIndex}`);
    const minutesPara = document.getElementById(`minutes${timerIndex}`);
    const secondsPara = document.getElementById(`seconds${timerIndex}`);
    var hours = hoursPara.textContent;
    var minutes = minutesPara.textContent;
    // var seconds = secondsPara.textContent;

    if (seconds % 60 == 0 && seconds != 0) {
        // Create colon if it doesn't exist
        if (document.getElementById(`minutesColon${timerIndex}`).textContent != ":") {
            newColon = document.createElement("p");
            newColon.setAttribute("id", `minutesColon${timerIndex}`);
            newColon.textContent = ":";
            minutesPara.insertAdjacentElement("afterend", newColon);
        }
        console.log("incrementing minutes");
        minutes++;
        minutesPara.textContent = minutes;
        seconds = 0;
        secondsPara.textContent = seconds;
    }
    if (minutes % 60 == 0 && minutes != 0) {
        // Create colon if it doesn't exist
        if (document.getElementById(`hoursColon${timerIndex}`).textContent != ":") {
            newColon = document.createElement("p");
            newColon.setAttribute("id", `hoursColon${timerIndex}`);
            newColon.textContent = ":";
            hoursPara.insertAdjacentElement("afterend", newColon);
        }
        console.log("incrementing hours");
        hours++;
        hoursPara.textContent = hours;
        minutes = 0;
        minutesPara.textContent = minutes;
    }
    secondsPara.textContent = seconds;
    console.log("hours: " + hours + " minutes: " + minutes + " seconds: " + seconds);


    console.log("current timer is" + `timer${timerIndex}`)
    console.log(seconds);
    return seconds += 1;
}

function pauseTimer(timerIndex) {
    console.log(clearInterval(intervalID));
    clearInterval(intervalID);
    console.log("Paused timer " + timerIndex);

    // Change pause button to resume button
    const resumeButton = document.getElementById(`pauseTimer${timerIndex}`);
    resumeButton.setAttribute("id", `resumeTimer${timerIndex}`);
    resumeButton.setAttribute("onclick", `resumeTimer(${timerIndex})`);
    resumeButton.setAttribute("class", "timerButton");
    resumeButton.textContent = "Resume";
}

function resumeTimer(timerIndex) {
    // Change resume button to pause button
    const pauseButton = document.getElementById(`resumeTimer${timerIndex}`);
    pauseButton.setAttribute("id", `pauseTimer${timerIndex}`);
    pauseButton.setAttribute("onclick", `pauseTimer(${timerIndex})`);
    pauseButton.setAttribute("class", "timerButton");
    pauseButton.textContent = "Pause";

    // Get current time from timer display
    const secondsrHeader = document.getElementById(`timer${timerIndex}`);
    let seconds = parseInt(secondsrHeader.textContent);

    // Resume interval
    // Call once immeditely to prevent delay
    seconds = timer(seconds, timerIndex);
    intervalID = setInterval(function() {seconds = timer(seconds, timerIndex);}, 1000);

}

function resetTimer(timerIndex) {
    console.log("Resetting timer... timer"+timerIndex);
    clearInterval(intervalID);
    const secondsrHeader = document.getElementById(`timer${timerIndex}`);
    secondsrHeader.textContent = "0";
    
    // Remove pause/resume, reset, and delete buttons

    // If pause is active, remove it, otherwise resume is active, so remove that instead
    if (document.getElementById(`pauseTimer${timerIndex}`)) {
        document.getElementById(`pauseTimer${timerIndex}`).remove();
    } else {
        document.getElementById(`resumeTimer${timerIndex}`).remove();
    }
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