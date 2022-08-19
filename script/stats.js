class Stats {
    constructor() {
        this.clickNumber = 0;
        this.timeEarn = 0;
        this.timeLoss = 0;
        this.score = 0;
        this.divClickNumber = document.querySelector(".clickNumber");
        this.divTimeEarn = document.querySelector(".timeEarn");
        this.divTimeLoss = document.querySelector(".timeLoss");
    }

    updateScore() {
        const scoreText = document.querySelector(".score");
        this.score += 5;
        scoreText.innerText = "Score " + this.score;
    }

    displayStats() {
        
        this.divClickNumber.innerText = "Number of click : " + this.clickNumber;
        this.divTimeEarn.innerText = "Time earn : +" + this.timeEarn;
        this.divTimeLoss.innerText = "Time loss : -" + this.timeLoss;
    }

    deleteStats() {
        this.clickNumber = 0;
        this.timeEarn = 0;
        this.timeLoss = 0;
        this.score = 0;
        this.divClickNumber.innerText = "";
        this.divTimeEarn.innerText = ""
        this.divTimeLoss.innerText = "";
    }
}