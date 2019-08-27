//alle vores variable
var turban;
var tid = 20;
var score = 0;
var life = 10;
var missed = life;
var appelsiner = []

var FirstStart = false;

var highScore = 0;
var bestHighScore = 0

var socket;

var IsGameRunning = false;

var updateDelay = false;

//Variable for lokale og externe spillere
var LocalPlayer = {
    IsReady: false,
    teamNumber: 0,
    missed: life,
    score: 0,
    activeFruits: 0
};
var OtherPlayer = {
    IsReady: false,
    teamNumber: 0,
    missed: life,
    score: 0,
    activeFruits: 0
};
var STurban = {
    tX: 0,
    tY: 0
}

var ray = [];

function setup() {
    //Creating new elements to use for displaying information and for the game itself.
    createElement("h1").parent("Overskrift").id("IP");
    createCanvas(750, 600).id('Game');
    createElement("div").id("container");
    createElement("h1").id("GameOverText").position(100, 200).parent("container");
    createElement().position(100, 300).id("Restart").mousePressed(ReadyButtom).parent("container");
    createElement("div").id("status").hide();
    createElement("p").position(325, 635).id("StatusText");
    document.getElementById("status").innerHTML = "Green";
    createElement("h1").id("highscore").position(100, 350);
    createElement("h1").id("besthighscore").position(100, 400);
}

function draw() {
    WaitForBothPlayers();

    if (IsGameRunning) {
        CheckForDamage();
        CheckForScore();
        SyncAppelsiner(null, false);
        SyncTurban();

        if (LocalPlayer["missed"] > 0) {
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
            DeathScreen();
        }
    } else {
        WaitingScreen();
    }
}
//Vente funktion der scanner om de to spillere er klar
function WaitForBothPlayers() {
    if (LocalPlayer["IsReady"] == true && OtherPlayer["IsReady"] == true && IsGameRunning == false && !FirstStart) {
        StartGame();
        FirstStart = true;
    }

    if (LocalPlayer["IsReady"] == true && OtherPlayer["IsReady"] == true && IsGameRunning == false && FirstStart) {
        RestartGame();
    }
}
//Setup til at starte spillet
function StartGame() {
    IsGameRunning = true;

    x = rad;
    turban = new Kurv(700, 100, 70, 50, 10);

    document.getElementById("IP").innerHTML = "";
    document.getElementById("Player1").innerHTML = "";
    document.getElementById("Player2").innerHTML = "";

    LocalPlayer["missed"] = life;
    OtherPlayer["missed"] = life;
}

//Laver spillet
function display() {
    background(0);

    fill(255);
    text("Score: " + LocalPlayer["score"], width - 80, 30);
    text("Liv: " + LocalPlayer["missed"], width - 80, 50);

    turban.tegn();

    for (var i = 0; i < appelsiner.length; i++) {
        var appelsin = appelsiner[i]
        appelsin.checkScore(turban);
        appelsin.appelsin();
    }
}

// Vente Skærm
function WaitingScreen() {
    background(255);

    document.getElementById("Player1").innerHTML = "Your Connection Status: " + LocalPlayer["IsReady"];
    document.getElementById("Player2").innerHTML = "Opponent Connection Status: " + OtherPlayer["IsReady"];
}

function CheckForDamage(msg, isReceived) {
    if (LocalPlayer["teamNumber"] == 1 && isReceived) {
        LocalPlayer["missed"] = msg["oMissed"];
    }

    if (LocalPlayer["teamNumber"] == 2) {
        LocalPlayer["missed"] = missed

        const msg = {
            oMissed: LocalPlayer["missed"]
        }

        socket.sendMessage(msg);
    }
}

function CheckForScore(msg, isReceived) {
    if (LocalPlayer["teamNumber"] == 1 && isReceived) {
        LocalPlayer["score"] = msg["oScore"];
    }

    if (LocalPlayer["teamNumber"] == 2) {
        LocalPlayer["score"] = score

        const msg = {
            oScore: LocalPlayer["score"]
        }

        socket.sendMessage(msg);
    }
}

function SyncTurban(x, y) {
    STurban["tX"] = x;
    STurban["tY"] = y;

    if (LocalPlayer["teamNumber"] == 1 && STurban["tX"] != null && STurban["tY"] != null && turban != null) {
        turban.x = lerp(turban.x, STurban["tX"], 0.5);
        turban.y = lerp(turban.y, STurban["tY"], 0.5);
    }

    if (LocalPlayer["teamNumber"] == 2 && turban != null) {
        const msg = {
            tX: turban.x,
            tY: turban.y
        }
        socket.sendMessage(msg);
    }
}

function SyncAppelsiner(msg, isReceived) {
    if (LocalPlayer["teamNumber"] == 1 && isReceived == true && updateDelay) {
        ray = msg["xyAppelsin"];
        for (var i = 0; i < ray.length; i++) {
            appelsin = appelsiner[i];
            var newPositions = ray[i];

            if (newPositions["x"] != null && newPositions["y"] != null && newPositions["rot"] != null) {
                appelsin.x = lerp(appelsin.x, newPositions["x"], 0.5);
                appelsin.y = lerp(appelsin.y, newPositions["y"], 0.5);
                appelsin.rot = lerp(appelsin.rot, newPositions["rot"], 0.5);
            }
        }
    }

    if (LocalPlayer["teamNumber"] == 2 && appelsiner.length != null) {
        ray.length = 0;

        for (var i = 0; i < appelsiner.length; i++) {
            if (appelsiner[i] != null) {
                var appelsin = appelsiner[i];
                appelsin.move();

                if (appelsin.x != null && appelsin.y != null && appelsin.rot != null) {
                    ray.push({
                        x: appelsin.x,
                        y: appelsin.y,
                        rot: appelsin.rot
                    });
                }
            }
        }

        const msg = {
            xyAppelsin: ray
        }
        socket.sendMessage(msg);
    }

    updateDelay = true;
}

function SpawnNewFruit(newFruits, yPos) {
    if (LocalPlayer["teamNumber"] == 1) {
        appelsiner.push(new Appelsin(mouseY));

        OtherPlayer["activeFruits"] += 1;

        const msg = {
            oFruitSpawn: 1,
            oMouse: mouseY
        }
        socket.sendMessage(msg);
    }

    if (LocalPlayer["teamNumber"] == 2) {
        for (var i = 0; i < newFruits; i++) {
            appelsiner.push(new Appelsin(yPos));
            LocalPlayer["activeFruits"] += 1;
        }
    }
}

//Setting up a function that is called when the player has lost all their lifes.
function DeathScreen() {
    background(255);
    LocalPlayer["IsReady"] = false;
    OtherPlayer["IsReady"] = false;

    if (LocalPlayer["teamNumber"] == 1 && LocalPlayer["missed"] == 0) {
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

        HighScoreCounter();

        updateDelay = false;
    }

    if (LocalPlayer["teamNumber"] == 2 && LocalPlayer["missed"] == 0) {
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

        HighScoreCounter();
    }
}

function ReadyButtom() {
    IsGameRunning = false;

    document.getElementById("GameOverText").innerHTML = "";
    document.getElementById("Restart").innerHTML = "";
    document.getElementById("highscore").innerHTML = "";
    document.getElementById("besthighscore").innerHTML = "";
    LocalPlayer["IsReady"] = true;

    const msg = {
        oReady: true
    }
    socket.sendMessage(msg);
}

//Setting up a function to handle the restart of the game after the player has pressed the "Restart" button.
function RestartGame() {
    //Removing the "Game Over" menus text.
    document.getElementById("GameOverText").innerHTML = "";
    document.getElementById("Restart").innerHTML = "";

    //The player is no longer dead and has been giving the same amount of life as when first started.
    LocalPlayer["missed"] = life;
    OtherPlayer["missed"] = life;
    missed = life;

    //Setting the status to green to show the game is running again.
    document.getElementById("status").innerHTML = "Green"
    document.getElementById("StatusText").innerHTML = "Game is Running";

    document.getElementById("highscore").innerHTML = "";
    document.getElementById("besthighscore").innerHTML = "";

    document.getElementById("Player1").innerHTML = "";
    document.getElementById("Player2").innerHTML = "";

    //Reseting the players score.
    LocalPlayer["score"] = 0;
    OtherPlayer["score"] = 0;
    score = 0;

    IsGameRunning = true;
}

//A function for checking and displaying scores.
function HighScoreCounter() {
    //If the current highscore is greater then the current best score, then it will be replaced.
    if (LocalPlayer["score"] > bestHighScore) {
        bestHighScore = LocalPlayer["score"];
    }

    //Displaying the to scores.
    if (LocalPlayer["teamNumber"] == 1) {
        document.getElementById("highscore").innerHTML = "Highscore: " + LocalPlayer["score"];
        document.getElementById("besthighscore").innerHTML = "Best Highscore: " + bestHighScore;
    }

    if (LocalPlayer["teamNumber"] == 2) {
        document.getElementById("highscore").innerHTML = "Opponents Highscore: " + LocalPlayer["score"];
        document.getElementById("besthighscore").innerHTML = "Opponents Best Highscore: " + bestHighScore;
    }
}

function keyPressed() {

}

function mousePressed() {
    if (LocalPlayer["teamNumber"] == 1 && IsGameRunning) {
        SpawnNewFruit();
    }
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

    document.getElementById("DemoName").innerHTML = "Eline Socket Demo: Appelsiner i Turbanen"
    document.getElementById("MadeBy").innerHTML = "Made by Marc and Mads"

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

            if (msg["oTeam"] != null && msg["oReady"] != null) {
                OtherPlayer["teamNumber"] = msg["oTeam"];
                OtherPlayer["IsReady"] = msg["oReady"];

                msg["oReady"] = null;

                const Reply = {
                    oTeamR: LocalPlayer["teamNumber"],
                    oReadyR: LocalPlayer["IsReady"]
                }
                socket.sendMessage(Reply);
            }

            if (msg["oTeamR"] != null && msg["oReadyR"] != null) {
                OtherPlayer["teamNumber"] = msg["oTeamR"];
                OtherPlayer["IsReady"] = msg["oReadyR"];

                msg["oReadyR"] = null;
            }

            if (msg["oMissed"] != null) {
                CheckForDamage(msg, true);
            }

            if (msg["oFruitSpawn"] != null && msg["oMouse"] != null) {
                SpawnNewFruit(msg["oFruitSpawn"], msg["oMouse"])
                msg["oFruitSpawn"] = null;
            }

            if (msg["xyAppelsin"] != null && msg["xyAppelsin"].length > 0) {
                SyncAppelsiner(msg, true);
            }

            if (msg["tX"] != null && msg["tY"] != null) {
                SyncTurban(msg["tX"], msg["tY"]);
            }

            if (msg["oScore"] != null) {
                CheckForScore(msg, true)
            }

            if (msg["oReady"] != null) {
                OtherPlayer["IsReady"] = msg["oReady"];

                const Reply = {
                    rReady: LocalPlayer["IsReady"]
                }
                socket.sendMessage(Reply);
            }

            if (msg["rReady"] != null) {
                OtherPlayer["IsReady"] = msg["rReady"];
            }
        });
    }

    createBtn.addEventListener('click', () => {
        landingPage.hidden = true;
        socketsPage.hidden = true;
        header.innerText = 'Creator';
        socket = ElineSocket.create();
        useSocket(socket);

        document.getElementById("IP").innerHTML = "Game IP: " + socket.id;

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
            oTeam: LocalPlayer["teamNumber"],
            oReady: LocalPlayer["IsReady"],
        }
        socket.sendMessage(msg);
    });
});