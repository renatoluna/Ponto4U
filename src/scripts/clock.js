var clock = cabrito.Class.extends(function (time) {

    var timers = [];

    var getMinutes = function (seconds_left) {
        return parseInt(seconds_left / 60);
    };

    var getSeconds = function (seconds_left) {
        var seconds = parseInt(seconds_left % 60);
        if (seconds <= 9) {
            seconds = '0' + seconds;
        }
        return seconds;
    };

    this.date = function () {
        var d = new Date();
        return d;
    };

    this.getTimer = function (seconds_left) {
        var timeString = getMinutes(seconds_left) + ':' + getSeconds(seconds_left);
        if (timeString.length < 5) {
            timeString = '0' + timeString;
        }
        return timeString;
    };

    this.clearTimers = function () {
        for (var i = 0; i < timers.length; i++) {
            clearInterval(timers[i]);
        }
    };

    this.getEstimatedTime = function (time) {
        var d1 = this.date();
        var d2 = this.date();
        d2.setMinutes(d2.getMinutes() + time);
        return (d2 - d1) / 1000;
    };

    this.pomodoro = function (time, div) {
        this.clearTimers();
        var estimated = this.getEstimatedTime(time);
        var seconds_left = estimated;
        var message;
        if (estimated / 60 == 25) {
            message = 'POMODORO!';
        } else {
            message = 'Interval!';
        }
        div = document.getElementById(div);
        if (div) {
            div.innerHTML = this.getTimer(seconds_left);
        }
        var getTimer = this.getTimer;
        var int = setInterval(function () {
            seconds_left = seconds_left - 1;
            if (seconds_left < 0) {
                clearInterval(int);
                alert(message);
                return;
            }
            if (div) {
                div.innerHTML = getTimer(seconds_left);
            }
        }, 1000);
        timers.push(int);
    };
});
