document.body.onload = addElement;

function newTimer() {
    console.log("New timer created");
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("New Timer")

    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("timers");
    document.body.insertBefore(newDiv, currentDiv); 

}