function draw() {
        var canvas = document.getElementById('screen')
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d')
                
                ctx.fillStyle="#008000"
                ctx.fillRect(10, 10, 10, 5)

                ctx.fillStyle="#7F7F00";
                ctx.beginPath();
                ctx.arc(100,100,5,0,Math.PI*2,true);
                ctx.closePath();
                ctx.fill();
        }
      }

draw()