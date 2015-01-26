(function () {
    var route = cabrito.Class.extends(function () {
        this.knowTechnique = function () {
            if (cabrito.AB.cookieToggle('about', '1')) {
                document.cookie = 'about=2';
                window.location.href = '/pomodoro.html'
            }
            if (cabrito.AB.cookieToggle('about', '0')) {
                setTimeout(function () {
                    document.cookie = 'about=1';
                }, 30000);
            }
        }
    });
    route.knowTechnique();
})();