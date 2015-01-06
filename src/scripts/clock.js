var clock = cabrito.Class.extends(function (time) {
    var status = 0;
    this.timeElapsed = time;
    this.date = function () {
        var d = new Date();
        return d;
    };

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

    this.getTimer = function (seconds_left) {
        return getMinutes(seconds_left) + ':' + getSeconds(seconds_left);
    };

    this.pomodoro = function (time, div) {
        var d1 = this.date();
        var d2 = this.date();
        d2.setMinutes(d2.getMinutes() + time);
        var seconds_left = (d2 - d1) / 1000;
        div = document.getElementById(div);
        if (div) {
            div.innerHTML = this.getTimer(seconds_left);
        }
        var getTimer = this.getTimer;
        var int = setInterval(function () {
            status += 1;
            seconds_left = seconds_left - 1;
            if (div) {
                div.innerHTML = getTimer(seconds_left);
            }
            if (d1 >= d2) {
                status = 0;
                clearInterval(int);
                alert('POMODORO!');
            }
        }, 1000);
    };
    this.status = function () {
        return status;
    };
});
