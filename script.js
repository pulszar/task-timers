function newTimer() {

    // Create a new timer and append it to the timers section
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("New Timer")
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("timers");
    document.body.insertBefore(newDiv, currentDiv); 
    console.log("New timer created");

    var curTime = 0;
    // Anonymous function so function return isn't used, the function with the call is used instead
    setInterval(function() {curTime = timer(curTime);}, 1000);

    
    function timer(curTime) {
        console.log(curTime);
        return curTime += 1;
    }
}
