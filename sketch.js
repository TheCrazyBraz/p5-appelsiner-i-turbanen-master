//Alle vores variable
var turban;
var tid = 20;
var score = 0;
var life = 10;
var missed = life;
var appelsiner = []

//Bruger denne værdi til når spillet først bliver startet vil den oprette et nyt spil og der efter kun genstarte spillet efter.
var FirstStart = false;

//Bruger disse to værdier til at sætte en score når spillet er færdigt.
var highScore = 0;
var bestHighScore = 0

//Værdien for multiplayer programmet, som er givet af lærene.
var socket;

//Ser om spillet er i gang.
var IsGameRunning = false;

//Da der er en fejl under genstarten af spillet hvis spiller 1 først genstarter og tvinger programmet til at opdatere appelsiner, som ikke er lavet, vil denne værdi få programmet til at vente en frame og fikser derfor fejlen.
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

//Opsætter et dictionary som vil holde positionen for turbanen og vil blive brugt til syncronisering.
var STurban = {
    tX: 0,
    tY: 0
}

//Opsætter en array, som vil blive brugt til syncroniseringen af appelsinerne.
var ray = [];

//Laver en setup funktion som bliver kaldt når programmet først starter.
function setup() {
    //Skaber og opsætter nye html elementer.
    createElement("h1").parent("Overskrift").id("IP");
    createCanvas(750, 600).id('Game');
    createElement("div").id("container");
    createElement("h1").id("GameOverText").position(100, 200).parent("container");
    createElement().position(100, 300).id("Restart").mousePressed(ReadyButtom).parent("container");
    createElement("p").position(325, 635).id("StatusText");
    createElement("h1").id("highscore").position(100, 350);
    createElement("h1").id("besthighscore").position(100, 400);
}

//Laver en draw funktion, som opdatere spillet hver frame.
function draw() {
    //Kalder "WaitForBothPlayers" som tjekker hvornår den enden skal starte eller genstarte spillet.
    WaitForBothPlayers();

    if (IsGameRunning) {
        //Alle funktionerne som skal gøre mens spillet er i gang, som vil sige når "IsGameRunning" er sand.
        CheckForDamage();
        CheckForScore();
        SyncAppelsiner(null, false);
        SyncTurban();

        if (LocalPlayer["missed"] > 0) {
            //Alle funktionerne som skal køre mens den lokale spiller stadig er i live.
            display();

            if (LocalPlayer["teamNumber"] == 2) {
                //Alle funktionerne der skal køre hvis den lokale spiller er på hold 2.
                //Opdatere turbanens position og sender den nye position til den anden spiller.
                turban.move();
                const TurbanMSG = {
                    x: turban.x,
                    y: turban.y
                }
                socket.sendMessage(TurbanMSG);

            } else if (LocalPlayer["teamNumber"] == 1) {
                //Alle funktionerne der skal køre hvis den lokale spiller er på hold 1.
                //Kalder funktionen "SyncTurban" for at opdatere turbanens nye position.
                SyncTurban();
            }
        } else {
            //Hvis den lokale spiller ikke længere er i live skal den vise game over skærmen.
            DeathScreen();
        }
    } else {
        //Hvis spillet ikke er i gang skal den vise vente skærmen.
        WaitingScreen();
    }
}

//Vente funktion der scanner om de to spillere er klar
function WaitForBothPlayers() {
    //Hvis bool værdien af "FirstStart" er falsk, så skal den starte et nyt spil. 
    if (LocalPlayer["IsReady"] == true && OtherPlayer["IsReady"] == true && IsGameRunning == false && !FirstStart) {
        //Kalder funktionen "StartGame", som vil oprette et nyt spil.
        StartGame();
        //Nu da spillet er blevet oprettet bliver "FirstStart" sat til sandt.
        FirstStart = true;
    }

    //Hvis bool værdien af "FirstStart" er sand, vil den kun genstarte spillet i stedet for at starte et nyt.
    if (LocalPlayer["IsReady"] == true && OtherPlayer["IsReady"] == true && IsGameRunning == false && FirstStart) {
        //Kalder funktionen "RestartGame", som vil genstarte spillet.
        RestartGame();
    }
}

//Setup til at starte spillet
function StartGame() {
    //Når spillet bliver startet vil "IsGameRunning" blive sat til sand.
    IsGameRunning = true;

    //Opretter en kurv i form af en turban.
    turban = new Kurv(700, 100, 70, 50, 10);

    //Fjerner teksten i venteskærmen.
    document.getElementById("IP").innerHTML = "";
    document.getElementById("Player1").innerHTML = "";
    document.getElementById("Player2").innerHTML = "";

    //Setting the displayed status text to read "Game is Running".
    document.getElementById("StatusText").innerHTML = "Game is Running"
}

//"Display" funktionen vil blive brugt til at opdatere det visuale mens spillet er i gang.
function display() {
    //Tegner en ny baggrund over den gamle frame.
    background(0);

    //Giver teksten en hvid farve og tegner scoren og antallet af liv spilleren har tilbage.
    fill(255);
    text("Score: " + LocalPlayer["score"], width - 80, 30);
    text("Liv: " + LocalPlayer["missed"], width - 80, 50);

    //Tegner turbanen.
    turban.tegn();

    //Tegner appelsinerne, samt opdatere scoren.
    for (var i = 0; i < appelsiner.length; i++) {
        var appelsin = appelsiner[i]
        appelsin.checkScore(turban);
        appelsin.appelsin();
    }
}

//Vente Skærm som viser hvem der er klar til at spille.
function WaitingScreen() {
    //Tegner en ny baggrund over den gamle frame.
    background(255);

    //Skriver hvem der er klar til at spille.
    document.getElementById("Player1").innerHTML = "Your Connection Status: " + LocalPlayer["IsReady"];
    document.getElementById("Player2").innerHTML = "Opponent Connection Status: " + OtherPlayer["IsReady"];
}

//Funktionen som opdatere og evt. sender hvor meget skade der er.
function CheckForDamage(msg, isReceived) {
    //Hvis spilleren er på hold 1 og hvis man har modtaget ny information.
    if (LocalPlayer["teamNumber"] == 1 && isReceived) {
        //Opdatere den lokale antal af mistede appelsiner.
        LocalPlayer["missed"] = msg["oMissed"];
    }

    //Hvis spilleren er på hold 2.
    if (LocalPlayer["teamNumber"] == 2) {
        //Sætter den lokale antal af mistede appelsiner til antallet af appelsiner der kom forbi turbanen.
        LocalPlayer["missed"] = missed

        //Sender den nye lokale værdi af "missed" til den anden spiller.
        const msg = {
            oMissed: LocalPlayer["missed"]
        }
        socket.sendMessage(msg);
    }
}

//Funktionen som opdatere og evt. sender hvad scoren er.
function CheckForScore(msg, isReceived) {
    //Hvis den lokale spillers hold er 1 og der er kommet en ny besked.
    if (LocalPlayer["teamNumber"] == 1 && isReceived) {
        //Opdatere den lokale spillers score.
        LocalPlayer["score"] = msg["oScore"];
    }

    //Hvis den lokale spillers hold er 2.
    if (LocalPlayer["teamNumber"] == 2) {
        //Sætter den lokale spillers score til den udregnet score fra appelsinerne.
        LocalPlayer["score"] = score

        //Sender den nye score til anden spiller.
        const msg = {
            oScore: LocalPlayer["score"]
        }
        socket.sendMessage(msg);
    }
}

//Funktionen som vil opdatere og evt. sende turbanens nye position.
function SyncTurban(x, y) {
    //Opdatere den nye position for turbanen.
    STurban["tX"] = x;
    STurban["tY"] = y;

    //Hvis det loakel hold for spilleren er 1 og så længde den nye position og turbanen ikke er tom.
    if (LocalPlayer["teamNumber"] == 1 && STurban["tX"] != null && STurban["tY"] != null && turban != null) {
        //Lerper mellem den gamle og nye position for at stoppe turbanen for at telepotere rund på skærmen.
        turban.x = lerp(turban.x, STurban["tX"], 0.5);
        turban.y = lerp(turban.y, STurban["tY"], 0.5);
    }

    //Hvis det lokale hold for spilleren er 2 og turbanen ikke er tom.
    if (LocalPlayer["teamNumber"] == 2 && turban != null) {
        //Sender den nye postionen til den anden spiller.
        const msg = {
            tX: turban.x,
            tY: turban.y
        }
        socket.sendMessage(msg);
    }
}

//Funktionen som vil opdatere og evt. sende appelsinernes nye position og rotation.
function SyncAppelsiner(msg, isReceived) {
    //Hvis den lokale spillers hold er 1 og den har fået en ny position og rotation, samt for at sikre mod fejl, at "updateDelay" er sandt.
    if (LocalPlayer["teamNumber"] == 1 && isReceived == true && updateDelay) {
        //Opdater arrayen som vil holde de nye positioner og rotationer.
        ray = msg["xyAppelsin"];
        //Opdatere alle appelsinerne.
        for (var i = 0; i < ray.length; i++) {
            appelsin = appelsiner[i];
            var newPositions = ray[i];

            if (newPositions["x"] != null && newPositions["y"] != null && newPositions["rot"] != null) {
                //Lerper mellem de gamle og nye værdier, for at stoppe teleportation og for at lave en smooth rotation.
                appelsin.x = lerp(appelsin.x, newPositions["x"], 0.5);
                appelsin.y = lerp(appelsin.y, newPositions["y"], 0.5);
                appelsin.rot = lerp(appelsin.rot, newPositions["rot"], 0.5);
            }
        }
    }

    //Hvis den lokale spillers hold er 2 og der er nogle appelsinger at opdatere.
    if (LocalPlayer["teamNumber"] == 2 && appelsiner.length != null) {
        //Fjerner de gamle positioner og rotationer, som tidligere er blevet sendt.
        ray.length = 0;

        //Opdatere hver appelsin.
        for (var i = 0; i < appelsiner.length; i++) {
            if (appelsiner[i] != null) {
                var appelsin = appelsiner[i];
                //Bevæger appelsinerne.
                appelsin.move();
                if (appelsin.x != null && appelsin.y != null && appelsin.rot != null) {
                    //Opdatere de nye positioner og rotationer.
                    ray.push({
                        x: appelsin.x,
                        y: appelsin.y,
                        rot: appelsin.rot
                    });
                }
            }
        }
        //Sender de nye positioner og rotationer til den anden spiller.
        const msg = {
            xyAppelsin: ray
        }
        socket.sendMessage(msg);
    }

    //Efter en frame når spillet bliver genstartet vil den prøve at opdatere appelsiner der ikke findes. Ved at vente indtil "updateDelay" bliver sandt, forsvinder det problem.
    updateDelay = true;
}

//Funktionen som vil lave nye appelsiner.
function SpawnNewFruit(newFruits, yPos) {
    //Hvis den lokale spillers hold er 1.
    if (LocalPlayer["teamNumber"] == 1) {
        //Laver en ny appelsin med en y værdi som svare til musens y værdi.
        appelsiner.push(new Appelsin(mouseY));

        //Siger til den anden spiller at de også skal lave en ny appelsin.
        const msg = {
            oFruitSpawn: 1,
            oMouse: mouseY
        }
        socket.sendMessage(msg);
    }

    //Hvis den lokale spillers hold er 2.
    if (LocalPlayer["teamNumber"] == 2) {
        //Laver nye appelsiner baseret på hvor mange den anden spiller har lavet.
        for (var i = 0; i < newFruits; i++) {
            appelsiner.push(new Appelsin(yPos));
        }
    }
}

//Funktionen som kontrolere hvad spilleren vil se når spillet er færdigt.
function DeathScreen() {
    //Tegner en ny baggrund over den gamle.
    background(255);

    //Begge spillerne bliver sat til ikke klar til et nyt spil.
    LocalPlayer["IsReady"] = false;
    OtherPlayer["IsReady"] = false;

    if (LocalPlayer["teamNumber"] == 1 && LocalPlayer["missed"] == 0) {
        //Removes the current fruits.
        appelsiner.length = 0;
        //Setting the displayed status text to read "Game is Paused".
        document.getElementById("StatusText").innerHTML = "Game is Paused"
        //Displaying a "Game Over" text to show the player, that they have died.
        document.getElementById("GameOverText").innerHTML = "Game Over!";
        //Displaying a button so that the player may restart the game.
        document.getElementById("Restart").innerHTML = "Click to Restart";

        //Opdater score viserne.
        HighScoreCounter();

        //Sætter "updateDelay" til falsk for at sikre mod fejl.
        updateDelay = false;
    }

    if (LocalPlayer["teamNumber"] == 2 && LocalPlayer["missed"] == 0) {
        //Removes the current fruits.
        appelsiner.length = 0;
        //Setting the displayed status text to read "Game is Paused".
        document.getElementById("StatusText").innerHTML = "Game is Paused"
        //Displaying a "Game Over" text to show the player, that they have died.
        document.getElementById("GameOverText").innerHTML = "Game Over!";
        //Displaying a button so that the player may restart the game.
        document.getElementById("Restart").innerHTML = "Click to Restart";

        //Opdater score viserne
        HighScoreCounter();
    }
}

//Funktionen som bestemmer hvad der sker når spilleren trykker på "Restart" knappen.
function ReadyButtom() {
    //Spillet køre ikke længere.
    IsGameRunning = false;

    //Fjerner teksten som bliver vist på "DeathScreen".
    document.getElementById("GameOverText").innerHTML = "";
    document.getElementById("Restart").innerHTML = "";
    document.getElementById("highscore").innerHTML = "";
    document.getElementById("besthighscore").innerHTML = "";

    //Den lokale spiller er nu blevet klar.
    LocalPlayer["IsReady"] = true;

    //Sender en besked til den anden spiller for at fortælle at man er klar.
    const msg = {
        oReady: true
    }
    socket.sendMessage(msg);
}

//Funktionen som vil gøre spille klar igen-
function RestartGame() {
    //Giver ny liv til spillerne.
    LocalPlayer["missed"] = life;
    OtherPlayer["missed"] = life;
    missed = life;

    //Sætter teksten til at vise at spillet køre igen.
    document.getElementById("StatusText").innerHTML = "Game is Running";

    //Fjerne highscore teksten så den ikke kan ses.
    document.getElementById("highscore").innerHTML = "";
    document.getElementById("besthighscore").innerHTML = "";

    //Fjerner statusen der fortæller hvilke spiller er klar til et nyt spil.
    document.getElementById("Player1").innerHTML = "";
    document.getElementById("Player2").innerHTML = "";

    //Nulstiller spillernes score.
    LocalPlayer["score"] = 0;
    OtherPlayer["score"] = 0;
    score = 0;

    //Spillet køre igen.
    IsGameRunning = true;
}

//Funktionen som vil vise og opdater scoren.
function HighScoreCounter() {
    //Hvis den lokale score er bedre en største highscore.
    if (LocalPlayer["score"] > bestHighScore) {
        //Så vil den gamle highscore blive erstatet med den nye.
        bestHighScore = LocalPlayer["score"];
    }

    //Viser scorene ud fra hvad spillerens lokale hold er.
    if (LocalPlayer["teamNumber"] == 1) {
        document.getElementById("highscore").innerHTML = "Highscore: " + LocalPlayer["score"];
        document.getElementById("besthighscore").innerHTML = "Best Highscore: " + bestHighScore;
    }

    if (LocalPlayer["teamNumber"] == 2) {
        document.getElementById("highscore").innerHTML = "Opponents Highscore: " + LocalPlayer["score"];
        document.getElementById("besthighscore").innerHTML = "Opponents Best Highscore: " + bestHighScore;
    }
}

//Når musen bliver brugt.
function mousePressed() {
    //Hvis den lokale spillers hold er 1 og spillet er i gang.
    if (LocalPlayer["teamNumber"] == 1 && IsGameRunning) {
        //Kalder funktionen "SpawnNewFruits" som vil laven en ny appelsin.
        SpawnNewFruit();
    }
}

//Når documentet er færdig med at loade. Dette er det første man ser når programmet starter.
document.addEventListener('DOMContentLoaded', function () {
    //Finder de nødvendige elementer som er blevet skrevet i "index.html".
    const landingPage = document.getElementById('landing-page');
    const socketsPage = document.getElementById('eline-sockets');
    const createBtn = document.getElementById('create-btn');
    const connectBtn = document.getElementById('connect-btn');
    const header = document.getElementById('header');
    const socketPin = document.getElementById('socket-pin');
    const sendBtn = document.getElementById('send');
    socketsPage.hidden = true;

    //Ændre teksten til at vise hvad programmet handler om og hvem der har lavet det.
    document.getElementById("DemoName").innerHTML = "Eline Socket Demo: Appelsiner i Turbanen"
    document.getElementById("MadeBy").innerHTML = "Made by Marc and Mads"

    //Når vi først har vores socket, er logikken den samme,
    function useSocket(socket) {
        //Skriver hvilket id socket'en bruger.
        socketPin.innerText = socket.id;

        //Når der trykkes send, hentes værdien ud af input feltet, og sendes til socket'en efterfølgende nulstilles input feltet.
        sendBtn.addEventListener('click', () => {
            if (LocalPlayer["teamNumber"] == 1) {
                const msg = {
                    x: mouseX,
                    y: mouseY
                };
                socket.sendMessage(msg);
            }
        });

        //Når der kommer en besked fra den anden side, sættes den ind som et liste element i listen over beskeder.
        socket.onMessage(msg => {
            //Når spillerne først joiner bliver deres hold og om de er klar sendt til hinanden.
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

            //Når spilleren modtagere svar fra en spiller som har joinet før dem selv. 
            if (msg["oTeamR"] != null && msg["oReadyR"] != null) {
                OtherPlayer["teamNumber"] = msg["oTeamR"];
                OtherPlayer["IsReady"] = msg["oReadyR"];

                msg["oReadyR"] = null;
            }

            //Når spilleren modtager ny besked angående hvor mange appelsiner der er mistet.
            if (msg["oMissed"] != null) {
                //Så køre "CheckForDamage" med de sende værdier.
                CheckForDamage(msg, true);
            }

            //Når spilleren modtager ny besked om at lave en ny appelsin.
            if (msg["oFruitSpawn"] != null && msg["oMouse"] != null) {
                //Så køre "SpawnNewFruit" med de givet værdier.
                SpawnNewFruit(msg["oFruitSpawn"], msg["oMouse"])
                //For at sikre der ikke bliver lavet flere appelsiner vil antalet der skal laves blive nulstillet.
                msg["oFruitSpawn"] = null;
            }

            //Når spilleren modtager nye positioner og rotationer.
            if (msg["xyAppelsin"] != null && msg["xyAppelsin"].length > 0) {
                //Så køre "SyncAppelsiner" med de nye værdier.
                SyncAppelsiner(msg, true);
            }

            //Når spilleren modtager ny positioner for turbanen.
            if (msg["tX"] != null && msg["tY"] != null) {
                //Så vil "SyncTurban" køre med de givet værdier
                SyncTurban(msg["tX"], msg["tY"]);
            }

            //Når spilleren modtager en ny score.
            if (msg["oScore"] != null) {
                //Så køre "CheckForScore" med de givet værdier.
                CheckForScore(msg, true)
            }

            //Når spilleren modtager besked om den modsatte spiller er klar til at genstarte spillet.
            if (msg["oReady"] != null) {
                //Så opdatere den at den modsatte spiller er klar.
                OtherPlayer["IsReady"] = msg["oReady"];

                //Sender en besked tilbage om den lokale spiller er klar.
                const Reply = {
                    rReady: LocalPlayer["IsReady"]
                }
                socket.sendMessage(Reply);
            }

            //Når den anden spiller sender en klar besked tilbage.
            if (msg["rReady"] != null) {
                //Så bliver spilleren sat til klar.
                OtherPlayer["IsReady"] = msg["rReady"];
            }
        });
    }

    //Bliver kaldt når "Create" knappen bliver trykket på.
    createBtn.addEventListener('click', () => {
        //Fjerner noget af teksten.
        landingPage.hidden = true;
        socketsPage.hidden = true;
        header.innerText = 'Creator';

        //Opretter serveren ved hjælp af "Socket"
        socket = ElineSocket.create();
        useSocket(socket);

        //Sætter op så man kan se IP'en og derved joine den først spiller.
        document.getElementById("IP").innerHTML = "Game IP: " + socket.id;

        //Sætter nogle af de lokale værdier, som skal bruges til at oprette spillet.
        LocalPlayer["teamNumber"] = 1;
        LocalPlayer["IsReady"] = true;
        LocalPlayer["IsOnServer"] = true;
    });

    //Når der trykkes på connect, skal man indtaste en pin kode (prompt) og denne bruges til at lave en socket med ElineSocket.connect(pin).
    connectBtn.addEventListener('click', () => {
        //Gemmer teksten.
        landingPage.hidden = true;
        socketsPage.hidden = true;
        header.innerText = 'Connector';
        const pin = prompt("Pin: ");

        //Forbinder til den anden spiller.
        socket = ElineSocket.connect(pin);
        useSocket(socket);
        
        //Sætter nogle af de lokale værdier, som skal bruges til at oprette spillet.
        LocalPlayer["teamNumber"] = 2;
        LocalPlayer["IsReady"] = true;
        LocalPlayer["IsOnServer"] = true;

        //Sender værdier til den anden spiller.
        const msg = {
            oTeam: LocalPlayer["teamNumber"],
            oReady: LocalPlayer["IsReady"],
        }
        socket.sendMessage(msg);
    });
});