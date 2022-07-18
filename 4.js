//function for countdownTimer V1 for wk1-2
function start(){
    console.log("start() function started");
    // created variable currTime set it equal to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
}

function blastoffTimer(){
    console.log("blastoffTimerV2() started");
    var countdownTimer = 10;
    var stepTime = 10;

    for(var i = 0; i < countdownTimer; i + i + 1){
        setTimeout(function(){
            console.log(countdownTimer);
            document.getElementById("countdownStatus").innerHTML = countdownTimer;
            countdownTimer = countdownTimer - 1;
         }, stepTime * i)
    }
    document.getElementById("countdownStatus").innerHTML = "Blastoff!";

}
   