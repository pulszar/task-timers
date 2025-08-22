var numOfTimers = 1;
// const map = new Map();
intervalID = null;

function newTimer() {
    clearInterval(intervalID);

    const timers = document.getElementById("timers");

    let element = document.getElementById("timer");
    console.log(element.innerHTML)
    const newTimerDiv = document.createElement("div");
    newTimerDiv.setAttribute("id", `timer${numOfTimers}`);
    timers.appendChild(newTimerDiv);

    // // Create a new timer display element  
    // const newTimerPara = document.createElement("p");
    // newTimerPara.setAttribute("id", `timer${numOfTimers}`);
    // newTimerPara.textContent = "0";


    // curTimerHeader = document.getElementById("timer"); 
    // parentTimerNameDiv.insertBefore(newTimerPara, timerNameDiv);

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
