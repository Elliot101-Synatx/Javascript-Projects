let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function(){ //Code executed Once the page finishes loading!!
    progress.max = song.duration;
    progress.value = song.currentTime;
   
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause(); //song will pause
        ctrlIcon.classList.remove('fa-pause'); //fa-pause will disapper
        ctrlIcon.classList.add('fa-play');// fa-play will apper
    }
    else{
        song.play();
         ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play')
    }
}

if(song.play()){ // if song is playing 
    setInterval(()=>{ //set the follong func to happens in every 'given' time
        progress.value = song.currentTime; //This function would be executed repeatedly,every half a second
    },500);

}

progress.onchange = function(){ //Executes once you change the progress
    song.play(); //Play to the current position after the change  in position
    song.currentTime = progress.value
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play')
}

