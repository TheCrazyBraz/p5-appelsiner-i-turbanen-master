/*
 *Dette script er hovedklassen for turban i script.js, dette betyder også vi kan lave flere kurve fra samme klasse med dette script
 * Dette script definerer klassen Kurv
*/

function Kurv(x, y, w, h, speed) {
    /* Den første del af funktionen er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet this
     */
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.col = [250,230,150];


    img = loadImage('turban.png');
    this.tegn = function() {
        fill(this.col);
        image(img, this.x, this.y, this.w, this.h);
    }
    //Denne tegner kurven

    this.move = function(tast) {
        this.x = mouseX;
        this.y = mouseY;
    }

//Disse funktioner hjælper kurven med at bevæge sig

    this.grebet = function(xa, ya, ra) {
        if ((ya < this.y+30 && ya > this.y-3) && xa > this.x+ra && xa < this.x+this.w-ra) {
            return true;
        }
        else {
            return false;
        }
    }

    //Denne funktion hjælper kurven med at fange appelsinen
} 