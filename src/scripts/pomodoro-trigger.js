cabrito.PageLoad.ready(function () {
    console.log('loaded!');
    var timer = clock.create();
    timer.pomodoro(25, 'timer');
});
