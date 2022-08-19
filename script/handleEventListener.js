const startBtn = document.querySelector(".play");
const difficulty = document.querySelector(".difficulty");
const game = new Game(selectDifficulty.value);
const stats = new Stats();


console.log(difficulty.value);


startBtn.addEventListener("click", initialiseGame);

function initialiseGame() {
    startBtn.disabled = true;
    difficulty.disabled = true;
    stats.deleteStats();
    initialiseTimer();
    interval();
    game.goodTarget.createTarget();
    game.isAlive = true;
}

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if( e.target.matches('.overTarget')) {
            stats.clickNumber +=1;
            game.endGame();
        }
        else if (e.target.matches('.target')) {
            stats.clickNumber +=1;
            stats.updateScore()
            game.targetTriger();

           for (i = 0; i <= difficulty.value; i++) {
                game.event();
            }
        }
        else if (e.target.matches('.addTime')) {
            time += 5;
            stats.clickNumber +=1;
            stats.timeEarn +=5;
            game.targetTimeUp.deleteTarget();
        }
        else if (e.target.matches('.subTime')) {
            time -= 5;
            stats.clickNumber +=1;
            stats.timeLoss +=5;
            game.targetTimeDown.deleteTarget();
        }
    });
}

addGlobalEventListener("click", e => {});
