$(document).ready(function () {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    
    
   
    var taustaKuva = new Image();
    taustaKuva.src = "assets/tausta.jpeg";
    
    var render = function() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 400, 400);
        context.drawImage(taustaKuva, 0, 0, canvas.width, canvas.height);
        drawEnemy(ctx);
        drawPlayer(ctx);
    };
    
        function main() {
        update();
        render();
        requestAnimationFrame(main);
    };
    
    main();
    
    
    
    
    
    
   
    
  
    
})