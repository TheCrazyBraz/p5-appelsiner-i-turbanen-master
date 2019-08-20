/*
Først laver vi et nogle variable til at lave en appelsin
 - en kugle som vi vil skyde afsted og fange i en turban
*/


//Grav står for Gravity, som bestemmer hvor hurtigt "Appelsinen" til at falde langsommere eller hurtigere 

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

    x = rad;
    turban = new Kurv(700, 100, 70, 50, 10);
    appelsiner.push(new Appelsin(670, 100, 70, 50, 10));

    timerID = setInterval(function () {
        if(!dead){
        appelsiner.push(new Appelsin(670, 100, 70, 50, 10));
        }  
    }, 6000);
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

/*
OPGAVER
 Opgave 1 - undersøg hvad variablerne  grav  og  tid  bruges til.
            Skriv det i kommentarer, prøv at se hvad der sker, når
            I laver dem om. 

 Opgave 2 - lav programmet om så det er tilfældigt hvor højt oppe 
            på venstre kan appelsinerne starter. Overvej om man kan 
            sikre, at appelsinen ikke ryger ud af skærmens top men 
            stadig har en "pæn" bane

 Opgave 3 - lav programmet om så man også kan bevæge turbanen mod
            højre og venstre med A- og D-tasterne. Prøv jer frem med
            forskellige løsninger for hvor hurtigt turbanen skal rykke

 Opgave 4 - ret programmet til, så det også angives hvor mange 
            appelsiner man IKKE greb med turbanen

 Opgave 5 - Undersøg hvad scriptet  kurv.js  er og gør, samt hvad de 
            funktioner, scriptet indeholder, skal bruges til. Skriv 
            det som kommentarer oven over hver funktion. Forklar tillige,
            hvad sammenhængen mellem dette script og turbanen i hoved-
            programmet er, og forklar det med kommentarer i toppen af 
            kurv.js

 Opgave 6 - find et billede af en turban og sæt det ind i stedet 
            for firkanten. Find eventuelt også en lyd, der kan afspilles, 
            når appelsinen gribes. Se gerne i "p5 Reference" hvordan, 
            hvis ikke I kan huske det:   https://p5js.org/reference/
            Lav programmet om, så man kan flytte turbanen med musen

 Opgave 7 - lav en Appelsin-klasse, lige som der er en Kurv-klasse. 
            Flyt koden til appelsinen ud i et selvstændigt script.
            Overvej hvad det skal hedde, og hvilke variabler og funktioner, 
            der skal lægges over i det nye script, herunder hvordan det 
            kommer til at berøre turbanen. Skriv jeres overvejelser i 
            kommentarerne

 Opgave 8 - ret programmet til, så der kan være flere appelsiner i 
            luften på en gang, dvs. at der kan skydes en ny appelsin
            afsted før den foregående er forsvundet. Overvej hvordan 
            og hvor hurtigt de skal skydes af, og forklar jeres tanker
            i kommentarerne

 Opgave 9 - ret programmet til, så det kan vindes og/eller tabes ved
            at man griber eller misser et antal appelsiner. Sørg for 
            at der vises en "Game Over"-skærm, som fortæller om man 
            vandt eller tabte, og som giver mulighed for at starte et
            nyt spil.

*/