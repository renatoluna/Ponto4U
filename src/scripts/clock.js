var script = document.createElement('script');
script.src = 'cabrito.js';
document.body.appendChild(script);
var clock = cabrito.Class.extends(function () {
    var status = 0;
    this.date = function () {
        var d = new Date();
        return d;
    };
    this.pomodoro = function () {
        var d1 = this.date();
        var d2 = this.date();
        d2.setMinutes(d2.getMinutes() + 25);
        var int = setInterval(function () {
            status += 1;
            if (d1 >= d2){
                status = 0;
                clearInterval(int);
                alert('POMODORO!');
            }
        },1000);
    };
    this.status = function () {
        return status;
    };
});
var timer = clock.create();
timer.pomodoro();
