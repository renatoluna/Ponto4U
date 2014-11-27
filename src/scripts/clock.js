var script = document.createElement('script');
script.src = 'cabrito.js';
document.body.appendChild(script);
var clock = cabrito.Class.extends(function () {
    this.date = function () {
        var d = new Date();
        return d;
    };
    this.pomodoro = function () {
        var d2 = this.date();
        d2.setMinutes(d2.getMinutes() + 25);
        var int = setInterval(function () {
            var d = new Date();
            if (d >= d2){
                clearInterval(int);
                alert('POMODORO!');
            }
        },1000);
    };
});
clock.pomodoro();
