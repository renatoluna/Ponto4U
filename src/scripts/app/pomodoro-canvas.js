cabrito.PageLoad.elementReady('pomodoro', function () {
    var canvas = document.getElementById('pomodoro');
    var ctx = canvas.getContext('2d');
    var raf;

    var ball = {
        x : canvas.width / 2,
        y : canvas.height / 2,
        radius : 44,
        
        draw: function () {
            ctx.save();
            // ctx.rotate(Math.PI*2500);
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
            ctx.fillStyle = '#F00000';
            ctx.fill();
        }
    };

    var plant = {
        draw : function () {
            ctx.save();
            // ctx.rotate(Math.PI/2500);
            ctx.beginPath();
            ctx.fillStyle = '#526F35';
            ctx.moveTo(45, 0);
            ctx.lineTo(0, 45);
            ctx.lineTo(45, 45);
            ctx.closePath();
            ctx.moveTo(0, 0);
            ctx.lineTo(22, 45);
            ctx.lineTo(45, 22);
            ctx.stroke();
            ctx.closePath();
            ctx.fill();
        }
        
    }

    function draw() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        // ball.draw();
        plant.draw();   
        raf = window.requestAnimationFrame(draw);
    }
    raf = window.requestAnimationFrame(draw);

    var dataURL = canvas.toDataURL();
    document.getElementById('pomodoro').src = dataURL;

});
