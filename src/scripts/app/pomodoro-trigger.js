cabrito.PageLoad.elementReady('time-elapsed', function () {

    var timer = clock.create();
    timer.pomodoro(25, 'time-elapsed');

    cabrito.PageLoad.elementReady('pomodoro-trigger', function () {
        document.getElementById('pomodoro-trigger').removeAttribute('href');
        document.getElementById('pomodoro-trigger').addEventListener('click', function () {
            timer.pomodoro(25, 'time-elapsed');
        });
    });

    cabrito.PageLoad.elementReady('5-min-trigger', function () {
        document.getElementById('5-min-trigger').addEventListener('click', function () {
            timer.pomodoro(5, 'time-elapsed');
        });
        document.getElementById('pomodoro-interval').addEventListener('click', function () {
            timer.pomodoro(5, 'time-elapsed');
        });
    });
});
