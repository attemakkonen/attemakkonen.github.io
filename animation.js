$(document).ready( function() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    
    document.body.appendChild(canvas);
    
    var photo = false;
    
    var playerKuva = new Image();
    playerKuva.onload = function() {
        photo = true;
        
    }
    
    playerKuva.src = "assets/pilvi.png"
    
    
    
     function drawEnemy(context) {
        var x = player.x - (player.w / 2);
        var y = player.y - (player.h / 2);
        context.fillStyle = '#FFBAD2';
        
    };
    
    var keysDown = {};
    
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
    }
    
    window.addEventListener('keydown', function(e) {
        keysDown[e.keyCode] = true;
    });
    
    
    window.addEventListener('keyup', function(e) {
        delete keysDown[e.keyCode];
    });
    
    
    var render = function() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 400, 400);
        drawEnemy(ctx);
        drawPlayer(ctx);
    };
    
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
        move()
    };
    
    function main() {
        update();
        render();
        requestAnimationFrame(main);
    };
    
    main();
    
  
    
})