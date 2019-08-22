var turban;
var tid = 20;
var score = 0;
var life = 3
var missed = life;
var appelsiner = []

var dead = false;

var timerID = 0;

var highScore = 0;
var bestHighScore = 0

function setup() {
    //Creating new elements to use for displaying information and for the game itself.
    createElement("h1","Appelsiner i turban").parent("Overskrift");
    createCanvas(750, 600).id('Game');
    createElement("div").id("container");
    createElement("h1").id("GameOverText").position(100, 200).parent("container");
    createElement().position(100, 300).id("Restart").mousePressed(RestartGame).parent("container");
    createElement("div").id("status").hide();
    createElement("p", "Game is Running").position(325, 635).id("StatusText");
    document.getElementById("status").innerHTML = "Green";
    createElement("h1").id("highscore").position(100, 350);
    createElement("h1").id("besthighscore").position(100, 400);

    noCursor();

    x = rad;
    turban = new Kurv(700, 100, 70, 50, 10);
    appelsiner.push(new Appelsin(670, 100, 70, 50, 10));

    timerID = setInterval(function () {
        if(!dead){
        appelsiner.push(new Appelsin(670, 100, 70, 50, 10));
        }  
    }, 60000);
}

function draw() {
    if(!dead){
        background(0);
    
        display();

        turban.move();

        Death();
    }
    else{
        background(200);
    }

    for (var i = 0; i < appelsiner.length; i++) {
        var appelsin = appelsiner[i]
        appelsin.checkScore(turban);
        appelsin.move();
        appelsin.appelsin();
    }

    if(document.getElementById("status").innerHTML == "Green"){
        fill(0,255,0);
    } else if(document.getElementById("status").innerHTML == "Red"){
        fill(255,0,0);
    }
    rect(0, height-50, width, 50);
}

function display() {
    fill(255)
    text("Score: " + score, width - 80, 30);
    text("Liv: " + missed, width - 80, 50);

    turban.tegn();
}

//Setting up a function that is called when the player has lost all their lifes.
function Death(){
    if(!dead && missed <= 0){
        highScore = score;

        //Stops the constant adding of fruits.
        clearInterval(timerID);
        //Removes the current fruits.
        appelsiner.length = 0;
        //The player is now dead.
        dead = true;
        //Setting the game status to "Red".
        document.getElementById("status").innerHTML = "Red";
        //Setting the displayed status text to read "Game is Paused".
        document.getElementById("StatusText").innerHTML = "Game is Paused"
        //Displaying a "Game Over" text to show the player, that they have died.
        document.getElementById("GameOverText").innerHTML = "Game Over";
        //Displaying a button so that the player may restart the game.
        document.getElementById("Restart").innerHTML = "Click to Restart";

        HighScoreCounter();
    }
}

//Setting up a function to handle the restart of the game after the player has pressed the "Restart" button.
function RestartGame(){
    //Removing the "Game Over" menus text.
    document.getElementById("GameOverText").innerHTML = "";
    document.getElementById("Restart").innerHTML = "";

    //The player is no longer dead and has been giving the same amount of life as when first started.
    dead = false;
    missed = life;

    //Starting a new interval to increasse the dificultie over time.
    timerID = setInterval(function () {
        if(!dead){
        appelsiner.push(new Appelsin(670, 100, 70, 50, 10));
        }  
    }, 6000); 

    appelsiner.push(new Appelsin(670, 100, 70, 50, 10));

    //Setting the status to green to show the game is running again.
    document.getElementById("status").innerHTML = "Green"
    document.getElementById("StatusText").innerHTML = "Game is Running";

    document.getElementById("highscore").innerHTML = "";
    document.getElementById("besthighscore").innerHTML = "";

    //Reseting the players score.
    score = 0;
    
}

//A function for checking and displaying scores.
function HighScoreCounter(){
    //If the current highscore is greater then the current best score, then it will be replaced.
    if(highScore > bestHighScore){
        bestHighScore = highScore;
    }

    //Displaying the to scores.
    document.getElementById("highscore").innerHTML = "Highscore: " + highScore;
    document.getElementById("besthighscore").innerHTML = "Best Highscore: " + bestHighScore;
}

function keyPressed() {

}

function mousePressed() {

}