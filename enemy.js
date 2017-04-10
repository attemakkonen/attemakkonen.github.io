var enemies = [];

function addEnemy() {
var enemy = {
        x: Math.floor((Math.random() * 370) + 30),
        y: Math.floor((Math.random() * 370) + 30),
        w: 40,
        h: 40,
        speed: 10, 
        direction: 1
    };
    
    return enemy;
};

for(i=0; i < 4; i++) {
    enemies.push(addEnemy());
};
 
function move() {
   for(i=0; i < enemies.length; i++) {
       var monster = enemies[i];
       
       if(monster.direction == 1) {
       monster.x = monster.x + monster.speed
       }
       if(monster.x >= 350) {
           monster.direction = 2
           
       }
       if(monster.direction == 2) {
           monster.x = monster.x - monster.speed
       }
       if(monster.x <= 50) {
           monster.direction = 1
           
       }
       
}
}


