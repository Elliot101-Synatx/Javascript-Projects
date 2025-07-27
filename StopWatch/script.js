let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById('displayTime');
let timer = null;


function stopwatch(){
    seconds++; // and 1 in every count
    if(seconds == 60){ 
        seconds = 0; // return to 0
        minutes ++; // and 1 number each time  seconds == 60
        if(minutes == 60){
            minutes = 0; // return  0
            hours++; // and 1 number each time  minutes == 60
        }
    }
    let hr = hours < 10 ? "0" + hours : hours //if hrs < 10 be 0 and and hr
    let min = minutes < 10 ? "0" + minutes : minutes // if min < 10 be 0 and and min
   let sec = seconds < 10 ? "0" + seconds : seconds // if sec < 10 be 0 and and sec

    displayTime.innerHTML = hr + ":"+ min + ":" + sec
}

function watchStart(){
    if(timer !== null){ //To make sure that if timer is already running,its cleared before adding new one
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000);// executes stopwatch every 1 second
}


function watchStop(){
      clearInterval(timer); // Stops timer that was previously running
}

function watchReset(){
      clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}