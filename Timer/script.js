let displayTime = document.getElementById('displayTime');
let totalSeconds;
let timer = null;

let startMinutes = 1;
let startSeconds = 59;

totalSeconds = (startMinutes * 60) + startSeconds

function countdown(){
    if(totalSeconds <= 0){ // equal or less than 0
        clearInterval(timer); //clears a timed repeating action that was set in setInterval
        displayTime.innerHTML = "00:00"
    
    /*console.log("Timer Finished!");
  return*/;
  }  


totalSeconds--; //decrease by 1

let minutes = Math.floor(totalSeconds / 60);
 let seconds = totalSeconds % 60;

 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;

 displayTime.innerHTML = m + ":" + s;

}

function watchStart (){
    if(timer !== null){
        clearInterval(timer);//clears a timed repeating action that was set in setInterval
    }
     let initialM = Math.floor(totalSeconds / 60);
    let initialS = totalSeconds % 60;
    displayTime.innerHTML = `${initialM < 10 ? "0" + initialM : initialM} : ${initialS < 10 ? "0" + initialS : initialS}`;

    timer = setInterval(countdown,1000);// executes countdown function every 1 second
}

function resetWatch(){
    clearInterval(timer);
      totalSeconds = (startMinutes * 60) + startSeconds;
    let initialM = Math.floor(totalSeconds / 60);
    let initialS = totalSeconds % 60;
    displayTime.innerHTML = `${initialM < 10 ? "0" + initialM : initialM} : ${initialS < 10 ? "0" + initialS : initialS}`;
}


document.addEventListener("DOMContentLoaded", (event)=>{
    resetWatch();
})


