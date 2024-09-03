const timerElm=document.getElementById("timer");
const startElm=document.getElementById("start");
const stopElmnt=document.getElementById("stop");
const resetElmnt=document.getElementById("reset");

let startTime=0;
let elapsedTime=0;
let timerInterval;


function formatTime(elapsedTime){
    const milisecnds=Math.floor((elapsedTime%1000)/10);
    const seconds=Math.floor((elapsedTime%60000)/1000);
    const minutes=Math.floor((elapsedTime% (3600000))/60000);
    const hours=Math.floor((elapsedTime/3600000)) ;

    return (
        ( hours  ? (hours  >9 ? hours :"0" + hours):"00")
        +':'+
        ( minutes  ? (minutes  >9 ? minutes :"0" + minutes):"00")
        +':'+
        ( seconds  ? (seconds  >9 ? seconds :"0" + seconds):"00")
        +':'+
        ( milisecnds  ? (milisecnds  >9 ? milisecnds :"0" + milisecnds):"00")

    );
}

function startTimer(){
    startTime=Date.now()-elapsedTime;
     timerInterval = setInterval(() => {
        elapsedTime = Date.now()-startTime;
        timerElm.textContent = formatTime(elapsedTime);
      }, 10);
      stopElmnt.disabled=false;
      startElm.disabled=true;
      resetElmnt.disabled=false;
}
function stopTimer(){
    clearInterval(timerInterval);
    stopElmnt.disabled=true;
    startElm.disabled=false;
}
function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime=0;
    timerElm.textContent="00:00:00";
    resetElmnt.disabled=true;
    startElm.disabled=false;
}

startElm.addEventListener("click",startTimer);

stopElmnt.addEventListener("click", stopTimer);

resetElmnt.addEventListener("click",resetTimer);