const timer = document.getElementById("timer");

let time = 0;
let intervalTimer;

function initialiseTimer() {
    time = 90;
    timer.innerText = "Timer : " + getMinuteAndSeconde(time);
}

function getMinuteAndSeconde (time) {
    let minutes = parseInt(time / 60, 10);
    let secondes = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    return minutes + ":" + secondes;
}

function actualiseTimer () {
    time = time <= 0 ? 0 : time -1;
    if (time == 0) {
        game.goodTarget.deleteTarget();
        game.goodTarget.gameMap.innerHTML = "";
        clearInterval(intervalTimer);
        timer.innerText = "Timer : --:--";
        stats.displayStats();
        game.endGame();
        return;

    }
    timer.innerText = "Timer : " + getMinuteAndSeconde(time);
}

function interval() {
       intervalTimer = setInterval(actualiseTimer, 1000);
}

