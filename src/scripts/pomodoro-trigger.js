var clockId = 'timer';
cabrito.PageLoad.elementReady(clockId, function () {
    var timer = clock.create();
    document.getElementById('pomodoro-trigger').addEventListener('click', function () {
        timer.pomodoro(25, clockId);
    });
});
