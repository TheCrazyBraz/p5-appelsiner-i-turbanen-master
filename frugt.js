//Variabler

var grav = 0.1;
var col = [200, 100, 0];
var rad = 20;

var turban;

var score = 0;
var missed = 3;

//Dette er en overordnet funktion  der styrer selve appelsin objektet
function Appelsin(startY) {
    //Lokale variable for appelsinen
    var tid = 0;
    this.x = 0;
    this.y = startY;
    var xspeed = random(2, 6);
    var yspeed = random(0, this.y / 600 * 10) * -1;
    this.yspeed = yspeed;
    var rad = 20;

    this.rot = 0.1;
    // Loader billedet for appelsinen
    img2 = loadImage('appelsin.png');

    this.appelsin = function () {
        //Her skal vi sørge for at appelsinen bliver vist, hvis den skal vises
        if (tid > 0) {
            tid -= 1;
        }
        if (tid < 100) {
            fill(col);
            translate(this.x + rad / 2, this.y + rad / 2);
            rotate(this.rot);
            image(img2, -rad, -rad, rad * 2, rad * 2);
            resetMatrix();
        }

    }

    this.move = function () {
        //Her skal vi sørge for at appelsinen bevæger sig, hvis den er startet
        if (tid <= 0) {
            this.x += xspeed;
            this.y += yspeed;
            yspeed += grav;
            this.rot += 0.1
        }
        //her sørger vi for at missed score fungerer
        if (this.x > width || this.y > height) {
            missed -= 1
            this.shootNew();
        }
    }

    this.shootNew = function () {
        //Her skal vi sørge for at en ny appelsin skydes afsted 
        this.x = rad;
        this.y = random(0, 550);
        yspeed = random(0, this.y / 600 * 10) * -1;
        xspeed = random(2, 6);
        tid = (int)(Math.random() * 400);
    }

    this.checkScore = function (turban) {
        // Her checkes om turbanen har fanget appelsinen. Hvis ja, skydes en ny appelsin afsted
        if (yspeed > 0) {
            if (turban.grebet(this.x, this.y, rad)) {
                score += 1;
                this.shootNew();

            }
        }
        //Missed pt. 2
        if (this.x > width || this.y > height) {
            missed -= 1
            this.shootNew();
        }
    }
}