var turban;
var tid = 20;
var score = 0;
var life = 3
var missed = life;
var appelsiner = []

var timerID = 0;

var highScore = 0;
var bestHighScore = 0

var socket;

var IsGameRunning = false;

var LocalPlayer = {
    IsReady: false,
    IsOnServer: false,
    teamNumber: 0,
    IsAlive: true,
    missed: 3,
    score: 0,
    activeFruits: 0
};
var OtherPlayer = {
    IsReady: false,
    IsOnServer: false,
    teamNumber: 0,
    IsAlive: true,
    missed: 3,
    score: 0,
    activeFruits: 0
};
var STurban = {
    tX: 0,
    tY: 0
}

ray = [];

function setup() {
    //Creating new elements to use for displaying information and for the game itself.
    createElement("h1").parent("Overskrift").id("IP");
    createCanvas(750, 600).id('Game');
    createElement("div").id("container");
    createElement("h1").id("GameOverText").position(100, 200).parent("container");
    createElement().position(100, 300).id("Restart").mousePressed(RestartGame).parent("container");
    createElement("div").id("status").hide();
    createElement("p", "Game is Running").position(325, 635).id("StatusText");
    document.getElementById("status").innerHTML = "Green";
    createElement("h1").id("highscore").position(100, 350);
    createElement("h1").id("besthighscore").position(100, 400);
    //noCursor();
}

function draw() {
    WaitForBothPlayers();

    if (IsGameRunning) {
        CheckForDamage();

        if (LocalPlayer["IsAlive"]) {
            display();

            if (LocalPlayer["teamNumber"] == 2) {
                turban.move();

                const TurbanMSG = {
                    x: turban.x,
                    y: turban.y
                }
                socket.sendMessage(TurbanMSG);
            } else if (LocalPlayer["teamNumber"] == 1) {
                SyncTurban();
            }
        } else {
            Death();
        }

        if (document.getElementById("status").innerHTML == "Green") {
            fill(0, 255, 0);
        } else if (document.getElementById("status").innerHTML == "Red") {
            fill(255, 0, 0);
        }
        rect(0, height - 50, width, 50);
    } else {
        WaitingScreen();
    }

    SpawnNewFruit();
    SyncAppelsiner();
    SyncTurban();
}

function WaitForBothPlayers() {
    if (LocalPlayer["IsReady"] == true && OtherPlayer["IsReady"] == true && IsGameRunning == false) {
        StartGame();
    }
}

function StartGame() {
    IsGameRunning = true;

    x = rad;
    turban = new Kurv(700, 100, 70, 50, 10);
    appelsiner.push(new Appelsin(670, 100, 70, 50, 10));

    if (LocalPlayer["teamNumber"] == 1) {
        timerID = setInterval(function () {
            if (IsGameRunning) {
                appelsiner.push(new Appelsin(670, 100, 70, 50, 10));
            }
        }, 6000);
    }
    document.getElementById("IP").innerHTML = "";
    document.getElementById("Player1").innerHTML = "";
    document.getElementById("Player2").innerHTML = "";

    LocalPlayer["IsAlive"] = true;
    OtherPlayer["IsAlive"] = true;
}

function display() {
    background(0);

    fill(255);
    text("Score: " + LocalPlayer["score"], width - 80, 30);
    text("Liv: " + LocalPlayer["missed"], width - 80, 50);

    turban.tegn();

    for (var i = 0; i < appelsiner.length; i++) {
        var appelsin = appelsiner[i]
        appelsin.checkScore(turban);
        appelsin.move();
        appelsin.appelsin();
    }
}

function WaitingScreen() {
    document.getElementById("Player1").innerHTML = LocalPlayer["IsReady"];
    document.getElementById("Player2").innerHTML = OtherPlayer["IsReady"];
}

function CheckForDamage() {
    if (missed != LocalPlayer["missed"] && LocalPlayer["teamNumber"] == 2) {
        LocalPlayer["missed"] = missed;
        const msg = {
            oMissed: LocalPlayer["missed"]
        }
        socket.sendMessage(msg);
    } else if (missed != OtherPlayer["missed"] && LocalPlayer["teamNumber"] == 1) {
        missed = OtherPlayer["missed"];
    }
}

function CheckForScore() {
    if (score != LocalPlayer["score"] && LocalPlayer["teamNumber"] == 1) {
        LocalPlayer["score"] = score;
        const msg = {
            oScore: LocalPlayer["score"]
        }
        socket.sendMessage();
    } else if (score != OtherPlayer["score"] && LocalPlayer["teamNumber"] == 2) {
        score = OtherPlayer["score"];
    }
}

function SyncTurban(x, y) {
    STurban["tX"] = x;
    STurban["tY"] = y;

    if (LocalPlayer["teamNumber"] == 1 && STurban["tX"] != null && STurban["tY"] != null && turban != null) {
        turban.x = lerp(turban.x, STurban["tX"], 0.5);
        turban.y = lerp(turban.y, STurban["tY"], 0.5);
    } else if (LocalPlayer["teamNumber"] == 2 && turban != null) {
        const msg = {
            tX: turban.x,
            tY: turban.y
        }
        socket.sendMessage(msg);
    }
}

function SyncAppelsiner(update) {
    if (appelsiner.length >= 0) {
        if (LocalPlayer["teamNumber"] == 1) {
            for (var i = 0; i < appelsiner.length; i++) {
                var appelsin = appelsiner[i]

                ray.push({
                    x: appelsin.x,
                    y: appelsin.y
                })
            }

            socket.sendMessage(ray);
        } else if (LocalPlayer["teamNumber"] == 2 && ray.length >= 0) {
            for (var i = 0; i < appelsiner.length; i++) {
                var appelsin = appelsiner[i]
                var update = ray[i];
                if (update != null) {
                    if (update["aX"] != null && update["aY"] != null) {
                        appelsin.x = update["aX"];
                        appelsin.y = update["aY"];
                    }
                }
            }
        }
    }
    ray.length = 0;
}

function SpawnNewFruit() {
    if (LocalPlayer["activeFruits"] > OtherPlayer["activeFruits"]) {
        OtherPlayer["activeFruits"] = LocalPlayer["activeFruits"];
        const msg = {
            oFruits: OtherPlayer["activeFruits"]
        }
        socket.sendMessage(msg);
    }

    if (appelsiner.length < LocalPlayer["activeFruits"] && LocalPlayer["IsAlive"] && OtherPlayer["IsAlive"]) {
        appelsiner.push(new Appelsin(670, 100, 70, 50, 10));
        const msg = {
            oFruits: appelsiner.length
        }
        socket.sendMessage(msg);
    }

    if(appelsiner.length > OtherPlayer["activeFruits"]){
        const msg = {
            oFruits: appelsiner.length
        }
        socket.sendMessage(msg);
    }
}

//Setting up a function that is called when the player has lost all their lifes.
function Death() {
    /*
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
    */
    if (OtherPlayer["teamNumber"] == 2 && OtherPlayer["missed"] == 0) {
        clearInterval(timerID);
        //Removes the current fruits.
        appelsiner.length = 0;
        //Setting the game status to "Red".
        document.getElementById("status").innerHTML = "Red";
        //Setting the displayed status text to read "Game is Paused".
        document.getElementById("StatusText").innerHTML = "Game is Paused"
        //Displaying a "Game Over" text to show the player, that they have died.
        document.getElementById("GameOverText").innerHTML = "You Won!";
        //Displaying a button so that the player may restart the game.
        document.getElementById("Restart").innerHTML = "Click to Restart";
    }

    if (LocalPlayer["teamNumber"] == 2 && LocalPlayer["missed"] == 0) {
        clearInterval(timerID);
        //Removes the current fruits.
        appelsiner.length = 0;
        //Setting the game status to "Red".
        document.getElementById("status").innerHTML = "Red";
        //Setting the displayed status text to read "Game is Paused".
        document.getElementById("StatusText").innerHTML = "Game is Paused"
        //Displaying a "Game Over" text to show the player, that they have died.
        document.getElementById("GameOverText").innerHTML = "Game Over!";
        //Displaying a button so that the player may restart the game.
        document.getElementById("Restart").innerHTML = "Click to Restart";

        const msg = {
            oMissed: 3
        };
        socket.sendMessage(msg);

        HighScoreCounter();

        cursor();


    }
}

//Setting up a function to handle the restart of the game after the player has pressed the "Restart" button.
function RestartGame() {
    //Removing the "Game Over" menus text.
    document.getElementById("GameOverText").innerHTML = "";
    document.getElementById("Restart").innerHTML = "";

    //The player is no longer dead and has been giving the same amount of life as when first started.
    missed = life;

    //Starting a new interval to increasse the dificultie over time.
    timerID = setInterval(function () {
        if (IsGameRunning) {
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
function HighScoreCounter() {
    //If the current highscore is greater then the current best score, then it will be replaced.
    if (highScore > bestHighScore) {
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

document.addEventListener('DOMContentLoaded', function () {

    const landingPage = document.getElementById('landing-page');
    const socketsPage = document.getElementById('eline-sockets');
    const createBtn = document.getElementById('create-btn');
    const connectBtn = document.getElementById('connect-btn');
    const header = document.getElementById('header');
    const socketPin = document.getElementById('socket-pin');
    const sendBtn = document.getElementById('send');
    socketsPage.hidden = true;

    // Når vi først har vores socket, er logikken den samme
    function useSocket(socket) {
        // skriv hvilket id socket'en bruger
        socketPin.innerText = socket.id;

        // når der trykkes send, hentes værdien ud af input feltet, og sendes til socket'en
        // efterfølgende nulstilles input feltet.
        sendBtn.addEventListener('click', () => {
            if (LocalPlayer["teamNumber"] == 1) {
                const msg = {
                    x: mouseX,
                    y: mouseY
                };
                socket.sendMessage(msg);
            }
        });

        // Når der kommer en besked fra den anden side, sættes den ind som et liste element
        // i listen over beskeder.
        socket.onMessage(msg => {
            if (msg["x"] != null && msg["y" != null]) {
                appelsiner.push(new Appelsin(msg["x"], msg["y"], 70, 50, 10));
            }

            if (msg["oTeam"] != null && msg["oReady"] != null && msg["oServer"] != null) {
                OtherPlayer["teamNumber"] = msg["oTeam"];
                OtherPlayer["IsReady"] = msg["oReady"];
                OtherPlayer["isReady"] = msg["oServer"];

                const reply = {
                    oTeam: LocalPlayer["teamNumber"],
                    oReady: LocalPlayer["IsReady"],
                    oServer: LocalPlayer["IsOnServer"]
                }
                socket.sendMessage(reply);
            }

            if (msg["oMissed"] != null) {
                OtherPlayer["missed"] = msg["oMissed"];
            }

            if (msg["aX"] != null && msg["aY"] != null) {
                SyncAppelsiner(msg);
            }

            if (msg["tX"] != null && msg["tY"] != null) {
                SyncTurban(msg["tX"], msg["tY"]);
            }

            if (msg["oScore"] != null) {
                OtherPlayer["score"] = msg["oScore"];
            }

            if (msg["oFruits"] != null) {
                LocalPlayer["activeFruits"] = msg["oFruits"];
            }
        });
    }

    createBtn.addEventListener('click', () => {
        landingPage.hidden = true;
        socketsPage.hidden = true;
        header.innerText = 'Creator';
        socket = ElineSocket.create();
        useSocket(socket);

        document.getElementById("IP").innerHTML = socket.id;

        LocalPlayer["teamNumber"] = 1;
        LocalPlayer["IsReady"] = true;
        LocalPlayer["IsOnServer"] = true;
    });

    // Når der trykkes på connect, skal man indtaste en pin kode (prompt)
    // og denne bruges til at lave en socket med ElineSocket.connect(pin).
    connectBtn.addEventListener('click', () => {
        landingPage.hidden = true;
        socketsPage.hidden = true;
        header.innerText = 'Connector';
        const pin = prompt("Pin: ");
        socket = ElineSocket.connect(pin);
        useSocket(socket);

        LocalPlayer["teamNumber"] = 2;
        LocalPlayer["IsReady"] = true;
        LocalPlayer["IsOnServer"] = true;

        const msg = {
            oTeam: 2,
            oReady: true,
            oServer: true
        }
        socket.sendMessage(msg);
    });
});