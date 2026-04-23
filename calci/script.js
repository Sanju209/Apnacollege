const btn = document.querySelectorAll("button");
const display = document.getElementById("display");
const cal = document.getElementsById("calc");

display.innerText = "";

btn.addEventListener("click", addToDisplay());

function addToDisplay(text) {

    if(isNaN(display.innerText.slice(-1)) && isNaN(text) && text != "AC" && text != "Del") {
        display.innerText = "Error";
    }
    else if(text === "AC") {
        display.innerText = "";
    }
    else if(text === "Del") {
        display.innerText = display.innerText.slice(0, -1);
    }
    else {
        display.innerText += text;
    }
}

cal.addEventListener(calc());

function calc() {
    display.innerText = display.innerText.replaceAll("÷","/").replaceAll("×","*");
    display.innerText = eval(display.innerText);
}