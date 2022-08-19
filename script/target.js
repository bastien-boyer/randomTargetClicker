class Target {
    constructor(type) {
        this.type = type;
        this.gameMap = document.querySelector(".gameMap");
        this.x = 0;
        this.y = 0;
        this.btn = document.createElement("button");
        this.btn.classList.add("btn", "targetBtn");
        this.contour = document.createElement("div");
        this.mid = document.createElement("div");
        this.center = document.createElement("div");
    }

    createTargetTime() {
        this.x = getRandomIntBetweenMinAndMAx(90, 10);
        this.y = getRandomIntBetweenMinAndMAx(90, 10);
        this.btn.style.left = this.x + "%";
        this.btn.style.top = this.y + "%";
        this.addClass();
    }


    addClass() {
        this.btn.classList.add(this.type);
        if (this.type == "target" || this.type == "overTarget") {
            this.contour.classList.add("contour");
            this.mid.classList.add("mid");
            this.center.classList.add("center");
        }
        else if (this.type == "subTime") {
            this.btn.classList.add("targetTimeDown");
        }
        else if (this.type == "addTime") {
            this.btn.classList.add("targetTimeUp");
        }
    }

    customTarget(color, zIndex) {
        this.contour.style.background = color;
        this.contour.style.zIndex = zIndex;
        this.mid.style.zIndex = zIndex + 1;
        this.center.style.background = color;
        this.center.style.zIndex = zIndex + 2;
    }

    createTarget(color, zIndex) {
        this.addClass();
        this.x = getRandomIntBetweenMinAndMAx(90, 10);
        this.y = getRandomIntBetweenMinAndMAx(90, 10);

        this.contour.appendChild(this.mid);
        this.mid.appendChild(this.center);
        this.gameMap.appendChild(this.contour);


        this.contour.style.left = this.x + "%";
        this.contour.style.top = this.y + "%";

        this.btn.style.left = this.x + "%";
        this.btn.style.top = this.y + "%";
        if (color) {
            this.customTarget(color, zIndex);
        }
        this.addTargetInMap();
    }

    deleteTarget() {
        this.btn.innerHTML = "";
        if (this.gameMap.hasChildNodes()) {
            this.gameMap.removeChild(this.btn);
        }
    }

    addTargetInMap() {
        this.gameMap = document.querySelector(".gameMap");
        this.gameMap.appendChild(this.btn);
    }


    getBtn() {
        return this.btn;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

function getRandomIntBetweenMinAndMAx(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}