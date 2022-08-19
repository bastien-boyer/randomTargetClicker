class Game {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.targetOver;
        this.goodTarget = new Target("target");
        this.gameOverTarget = new Target("overTarget");
        this.targetTimeUp = new Target("addTime");
        this.targetTimeDown = new Target("subTime");
        this.isAlive;
    }

    targetTriger() {
        const gameMap = document.querySelector(".gameMap");
        while (gameMap.firstChild) {
            gameMap.removeChild(gameMap.lastChild);
        }
        this.goodTarget.createTarget();
    }

    event() {
        const event = getRandomIntBetweenMinAndMAx(0, 100);
        if (event < 50) {
            this.targetOver = new Target("overTarget");
            this.targetOver.createTarget("#1b1725", 10);
        }
        else if (event > 50 && event < 60) {
            this.targetTimeUp.createTargetTime();
            this.targetTimeUp.addTargetInMap();
        }
        else {
            this.targetTimeDown.createTargetTime();
            this.targetTimeDown.addTargetInMap();
        }
    }

    isAlive() {
        return this.isAlive;
    }

    endGame() {
        time = 0;
        startBtn.disabled = false;
        difficulty.disabled = false;
    }
}
