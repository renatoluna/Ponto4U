cabrito.PageLoad.elementReady('timer', function () {

    var timer = clock.create();

    cabrito.PageLoad.elementReady('pomodoro-trigger', function () {
        document.getElementById('pomodoro-trigger').addEventListener('click', function () {
            timer.pomodoro(25, 'timer');
        });
    });

    cabrito.PageLoad.elementReady('5-min-trigger', function () {
        document.getElementById('5-min-trigger').addEventListener('click', function () {
            timer.pomodoro(5, 'timer');
        });
    });
});
