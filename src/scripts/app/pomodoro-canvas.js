function drawPomodoro () {

	var $static = this.constructor.prototype;

    $static.circle = {
        canvas : document.getElementById('pomodoro'),
        radius : 44,
        x : 44,
        y : 44,
		amount : 0,
        background : '#ad2323',
        draw : function () {
            var ctx = $static.circle.canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
            ctx.clip();
            ctx.rect(0, $static.circle.amount, this.radius * 2, this.radius * 2);
            ctx.closePath();
            ctx.fillStyle = this.background;
            ctx.fill();
            if ($static.circle.amount < this.radius * 2) {
                window.requestAnimationFrame(function () {
					$static.circle.draw();
                });
            } else {
				$static.plant.draw();
            }
        }
    }

	$static.plant = {
        canvas : document.getElementById('plant'),
        draw : function () {
            var ctx = $static.plant.canvas.getContext("2d");
            ctx.save();
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

	return this;
}
