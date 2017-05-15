$(document).ready(function () {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    createEnemies();
    
    
    //Taustakuvan valinta.
    var taustaKuva = new Image();
    taustaKuva.src = "assets/tausta.jpeg";
    
    
    //Estää canvasin liikkumisen.
    window.addEventListener("keydown",function(e){
      if([37,38,39,40].indexOf(e.keyCode)>-1){
          e.preventDefault();
      };
    });
    
    
    //Liittyy hiiren oikean puoleisen näppäimen painamiseen.
    function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
        };
    }
    
    
    //Kun hiiren oikean puoleista näppäintä painaa, yksi vihollinen poistuu pelistä.
    canvas.addEventListener("mousedown", function(e){
     removeEnemy(getMousePos(canvas,e).x, getMousePos(canvas,e).y);
    })

    
    //Asettaa canvasin koon, taustakuvan ja pelihenkilöt canvasille.
    var render = function() {
        ctx.fillRect(0, 0, 400, 400);
        ctx.drawImage(taustaKuva, 0, 0, canvas.width, canvas.height);
        drawEnemies(ctx);
        drawPlayer(ctx);
    };
    
    
    //Laittaa pelin komennot toimimaann.
        function main() {
        update();
        render();
        requestAnimationFrame(main);
        collision();
        moveEnemies();
        };
    
    main();
    
    
    
    
    
    
   
    
  
    
});