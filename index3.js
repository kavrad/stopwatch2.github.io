//declare variables and initialise it to zero
var seconds= 00;
var tens = 00;

//Access the element by id and store it in the variables appendTens and appendSeconds
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var Start = document.getElementById('start');
var Stop = document.getElementById('stop');
var Reset= document.getElementById('reset');
var interval; //this variable will store timer values

//this function will run when click on start
function startTimer(){
    tens++;
    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML=seconds;
    }
}
//this starts the timer when click on start
Start.onclick = function(){
    interval = setInterval(startTimer);
};
//this starts the timer when click on stop
Stop.onclick = function(){
    clearInterval(interval);
};
//this starts the timer when click on reset
Reset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens
};
