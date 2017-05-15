//Asettaa pelaajan alkusijainnin.
var player = {
       x: 200,
       y: 200,
       w: 40,
       h: 40,
       speed: 10
};
   

//Pelaajan kuvan valinta.
var playerKuva = new Image();
playerKuva.src = "assets/pilvi.png";


//Vaihtaa pelaajan nopeutta, kun painiketta painaa.
function changeSpeed(s) {
    player.speed += s;
};


//Resetoi pelin, kun 
function reset() {
    player.x = 200;
    player.y = 200;
    player.speed = 5;
    createEnemies();
    enemiesArray.splice(0, 4);
}

    
//Piirtää pelaajan canvasille.
function drawPlayer(context) {
    var x = player.x - (player.w / 2);
    var y = player.y - (player.h / 2);
    context.drawImage(
    playerKuva,
    x,
    y,
    player.w,
     player.h);
};
    
var keysDown = {};
    
    
//Liikuttaa pelaajaa eri suuntiin riippuen nuolinäppäinten painalluksista.
function movePlayer(direction) {
        switch (direction) {
            case "left":
                player.x -= player.speed;
                if (player.x < 20) {
                    player.x = 20;
                }
                break;
            case "right":
                player.x += player.speed;
                if (player.x > 380) {
                    player.x = 380;
                }
                break;
            case "up":
                player.y -= player.speed;
                if (player.y < 20) {
                    player.y = 20;
                }
                break;
            case "down":
                player.y += player.speed;
                if (player.y > 380) {
                    player.y = 380;
                }
                break;
        }
};


//Liittyy pelaajan liikuttamiseen.
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
    

//Liittyy pelaajan liikuttamiseen.
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});
    

//Liikuttaa pelaajaa haluttuihin suuntiin riippuen mitä nappia painetaan.
 function update() {
        if (38 in keysDown) {
            movePlayer('up');
        }
        
        if (40 in keysDown) {
            movePlayer('down');
        }
        
        if (37 in keysDown) {
            movePlayer('left');
        }
        
        if (39 in keysDown) {
            movePlayer('right');
        }
        
};
    

//Aiheuttaa vihollisen suunnanvaihdoksen, kun se törmää pelaajaan.
 function collision() {
        for (var i in enemiesArray) {
            if (
		        player.x <= (enemiesArray[i].x + 40)
		        && enemiesArray[i].x <= (player.x + 40)
		        && player.y <= (enemiesArray[i].y + 40)
		        && enemiesArray[i].y <= (player.y + 40)
	           ) {
                    if (enemiesArray[i].direction == 0) {
                        enemiesArray[i].direction = 1;
                        break;
                    }
                    if (enemiesArray[i].direction == 1) {
                        enemiesArray[i].direction = 0;
                        break;
                    }
                    if (enemiesArray[i].direction == 2) {
                        enemiesArray[i].direction = 3;
                        break;
	                }
                    if (enemiesArray[i].direction == 3) {
                        enemiesArray[i].direction = 2;
                        break;
                    }
            }
        }
};
    