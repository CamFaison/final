//function for countdownTimer V1 for wk1-2
function start(){
    console.log("start() function started");
    // created variable currTime set it equal to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
}

function blastoffTimerV2(){
    console.log("blastoffTimerV2() started");
    var countdownTimer = 10;
    var stepTime = 1000;

    for(var i = 0; i < countdownTimer; i + i + 1){
        setTimeout(function(){
            console.log(countdownTimer);
            document.getElementById("countdownStatus").innerHTML = countdownTimer;
            countdownTimer = countdownTimer - 1;
         }, stepTime * i)
    }
    document.getElementById("countdownStatus").innerHTML = "Blastoff!";

}

function blastoffTimerV3(){
    console.log("blastoffTimerV2() started");
    var countdownTimer = 10;
    var stepTime = 1000;

    for(var i = 0; i <= countdownTimer; i + i + 1){
        setTimeout(function(){
            console.log(countdownTimer);
            if(countdownTimer <= 0){
                document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
                console.log("Blastoff!");
            } else if (countdownTimer < 5){
                document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left = " + countdownTimer
                countdownTimer = countdownTimer - 1;
            } else {
                document.getElementById("countdownStatus").innerHTML = countdownTimer;
                countdownTimer = countdownTimer - 1;
            }            
         }, stepTime * i)
    }

}

function startFun(){
    console.log("startFun() started");
    document.getElementById("data").rows["seconds"].innerHTML = "reading data";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function stopFun(){
    console.log("stopFun() started");
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-backround.mp3");
    mySound.play();
}

function playBowie(){
    console.log("playStation() started");
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
}