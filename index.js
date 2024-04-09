let twentySecondsBtnEle = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEle = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEle = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEle = document.getElementById("oneMinuteBtn");
let timerTextEle = document.getElementById("timerText");

let secsLeft  = 0;
let timeText = "Your Moment is Completed"
let timerId;

function buttonsClick(){
    clearInterval(timerId)

}
twentySecondsBtnEle.onclick = function(){
    secsLeft = 20;;
    buttonsClick();
    setTime();
}
thirtySecondsBtnEle.onclick = function(){
    secsLeft = 30;
    buttonsClick();
    setTime();
}
fortySecondsBtnEle.onclick = function(){
    secsLeft = 40;
    buttonsClick();
    setTime();
}
oneMinuteBtnEle.onclick = function(){
    secsLeft = 60;
    buttonsClick();
    setTime();
}

function setTime(){
    timerTextEle.textContent = secsLeft+" seconds left";
     timerId= setInterval(startTime,1000);
}

function startTime(){
    if(secsLeft > 1){
        secsLeft -= 1;
        timerTextEle.textContent = secsLeft+" seconds left"
    }
    else{
        buttonsClick();
        timerTextEle.textContent = timeText;
    }
}