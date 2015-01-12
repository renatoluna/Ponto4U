cabrito.PageLoad.elementReady('pomodoro', function () {
    var canvas = document.getElementById('pomodoro');
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 44;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#F00000';
    context.fill();

    context.beginPath();
    context.fillStyle = '#526F35';
    context.moveTo(45, 0);
    context.lineTo(0, 45);
    context.lineTo(45, 45);
    context.closePath();
    context.moveTo(0, 0);
    context.lineTo(22, 45);
    context.lineTo(45, 22);
    context.stroke();
    context.closePath();
    context.fill();
});
