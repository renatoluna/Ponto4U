var clock = cabrito.Class.extends(function (time) {

    var timers = [];

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

    this.setEstimatedTime = function (time) {
        var d1 = this.date();
        var d2 = this.date();
        d2.setMinutes(d2.getMinutes() + time);
        this.estimatedTime = (d2 - d1) / 1000;
    };

    this.getEstimatedTime = function () {
        return this.estimatedTime;
    };

    this.clearIntervals = function () {
        for (var i = 0; i < timers.length; i++) {
            clearInterval(timers[i]);
        }
    };

    this.getPercentage = function (currentTime) {
        return (currentTime * 100) / this.estimatedTime;
    };

    this.pomodoro = function (time, div) {
        this.clearIntervals();
        this.setEstimatedTime(time);
        var seconds_left = this.getEstimatedTime();
        var getTimer = this.getTimer;
        var message;
        if (seconds_left / 60 == 25) {
            message = 'POMODORO!';
        } else {
            message = 'Interval!';
        }
        div = document.getElementById(div);
        if (div) {
            div.innerHTML = this.getTimer(seconds_left);
            document.title = 'Ponto4U - ' + getTimer(seconds_left);
        }
        var int = setInterval(function () {
            seconds_left = seconds_left - 1;
            if (seconds_left < 0) {
                document.title = document.title.replace(getTimer(seconds_left), 'Pomodoro');
                clearInterval(int);
                alert(message);
                return;
            }
            if (div) {
                div.innerHTML = getTimer(seconds_left);
            }
            document.title = 'Ponto4U - ' + getTimer(seconds_left);
        }, 1000);
        timers.push(int);
    };
});
