var enemiesArray = [];


var enemyKuva = new Image();
enemyKuva.src = "assets/raindrops.jpg";

function getRandomInteger( min, max ){
    var different = max - min;
    
    var number = parseInt(Math.round(Math.random() * different + min));
    return number;
}


function createEnemies() {
    
     for (i = 0; i < 4; i++) {
            var enemy = {
        x: Math.floor((Math.random() * 370) + 30),
        y: Math.floor((Math.random() * 370) + 30),
        w: 40,
        h: 40,
        speed: 10, 
        direction: getRandomInteger(0, 4)
    };
    
    enemies.push(enemy);
     }
};


 
function moveEnemies() {
   
       
}

function drawEnemies(context) {
$.each(enemiesArray, function(index, ass) {
var x = player.x - (player.w / 2);
var y = player.y - (player.h / 2);
        context.drawImage(
        playerKuva,
        x,
        y,
        player.w,
        player.h);
    });
}
       




