var clock = cabrito.Class.extends(function (time) {

    var timers = [];
    var estimatedTime;
    var percentage = 0;

    var getSeconds = function (seconds_left) {
        var seconds = parseInt(seconds_left % 60);
        if (seconds <= 9) {
            seconds = '0' + seconds;
        }
        return seconds;
    };

    var getMinutes = function (seconds_left) {
        return parseInt(seconds_left / 60);
    };

    var validateTimeField = function (field) {
        if (field < 60) {
            return field;
        }
        return;
    };

    this.getTimer = function (seconds_left) {
        var minutes = validateTimeField(getMinutes(seconds_left));
        var seconds = validateTimeField(getSeconds(seconds_left));
        if (minutes === undefined || seconds === undefined) {
            return;
        }
        var timeString = minutes + ':' + seconds;
        if (timeString.length < 5) {
            timeString = '0' + timeString;
        }
        return timeString;
    };

    this.date = function () {
        var d = new Date();
        return d;
    };

    this.updateEstimatedTime = function () {
        estimatedTime = this.estimatedTime;
    };

    this.setEstimatedTime = function (time) {
        var d1 = this.date();
        var d2 = this.date();
        d2.setMinutes(d2.getMinutes() + time);
        this.estimatedTime = (d2 - d1) / 1000;
        this.updateEstimatedTime();
    };

    this.getEstimatedTime = function () {
        return this.estimatedTime;
    };

    this.clearIntervals = function () {
        for (var i = 0; i < timers.length; i++) {
            clearInterval(timers[i]);
        }
    };

    this.setPercentage = function (currentTime) {
        percentage = (currentTime * 100) / estimatedTime;
    };

    this.getPercentage = function () {
        return percentage;
    };

    this.increaseCookieValue = function () {
        var cookie = utils.getCookie('pomodoros');
        if (!cookie) {
            return 1;
        }
        return parseInt(cookie) + 1;
    };

    this.pomodoro = function (time, div) {
        var drawPomodoro = new window.drawPomodoro();
        this.clearIntervals();
        this.setEstimatedTime(time);
        drawPomodoro.circle.draw();
        var increaseCookieValue = this.increaseCookieValue;
        var seconds_left = this.getEstimatedTime();
        var getTimer = this.getTimer;
        var setPercentage = this.setPercentage;
        var isPomodoro = false;
        if (seconds_left / 60 == 25) {
            isPomodoro = true;
        }
        div = document.getElementById(div);
        if (div) {
            div.innerHTML = this.getTimer(seconds_left);
            document.title = getTimer(seconds_left) + ' - Ponto4U';
        }
        var int = setInterval(function () {
            seconds_left = seconds_left - 1;
            setPercentage(seconds_left);
            drawPomodoro.circle.amount = 100 - percentage;
            if (seconds_left < 0) {
                document.title = document.title.replace(getTimer(seconds_left), 'Pomodoro');
                document.cookie = 'pomodoros=' + increaseCookieValue();
                drawPomodoro.circle.amount = 0;
                if (isPomodoro) {
                    alert('POMODORO!');
                    clock.create().pomodoro(5, 'timer');
                } else {
                    alert('Interval!');
                    clock.create().pomodoro(25, 'timer');
                }
                clearInterval(int);
                return;
            }
            if (div) {
                div.innerHTML = getTimer(seconds_left);
            }
            document.title = getTimer(seconds_left) + ' - Ponto4U';
        }, 1000);
        timers.push(int);
    };
});
