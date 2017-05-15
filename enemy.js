//Luo arrayn, johon viholliset tallennetaan.
var enemiesArray = [];

//Vihollisen kuvan valinta.
var enemyKuva = new Image();
enemyKuva.src = "assets/raindrops.jpg";

//Satunnaismuuttujan valinta, jotta viholliset saadaan satunnaisiin sijainteihin.
function getRandomInteger(min, max) {
    var random = Math.floor((Math.random() * max) + min);
    return random;
}

//Luo viholliset pelikentälle.
function createEnemies() {
     for (i = 0; i < 4; i++) {
         var enemy = {
            x: getRandomInteger(10, 350),
            y: getRandomInteger(10, 350),
            w: 40,
            h: 40,
            speed: 2,
            direction: getRandomInteger(0, 4)
        };
    
        enemiesArray.push(enemy);
     }
} ;


//Piirtää vihollisen canvasille.
function drawEnemies(context) {
    $.each(enemiesArray, function(index, enemy) {
            var x = enemy.x - (enemy.w / 2);
            var y = enemy.y - (enemy.h / 2);
            context.drawImage(
            enemyKuva,
            x,
            y,
            enemy.w,
            enemy.h);
    });
}


//Liikuttaa vihollisia eri suuntiin riippuen paikasta.
function moveEnemies() {
        
    for (var i in enemiesArray) {
        switch (enemiesArray[i].direction) {
            case 0:
                enemiesArray[i].x -= enemiesArray[i].speed;
                if (enemiesArray[i].x < 20) {
                    enemiesArray[i].direction = 1;
                }
                break;
            case 1:
                enemiesArray[i].x += enemiesArray[i].speed;
                if (enemiesArray[i].x > 380) {
                    enemiesArray[i].direction = 0;
                }
                break;
            case 2:
                enemiesArray[i].y -= enemiesArray[i].speed;
                if (enemiesArray[i].y < 20) {
                    enemiesArray[i].direction = 3;
                }
                break;
            case 3:
                enemiesArray[i].y += enemiesArray[i].speed;
                if (enemiesArray[i].y > 380) {
                    enemiesArray[i].direction = 2;
                }
        break;    
        }
    }
};

    
//Poistaa vihollisen canvasilta, kun sitä on painettu hiiren oikealla näppäimellä.
function removeEnemy(clickX, clickY) {
     for(k = 0; k < enemiesArray.length; k++){
        var distance = Math.sqrt(Math.pow((clickX - enemiesArray[k].x),2) + Math.pow((clickY - enemiesArray[k].y),2));
            if(distance < 20){
                enemiesArray.splice(k,1);
                canAdd = true;
            }  
     }
}