(function () {
    var route = cabrito.Class.extends(function () {
        this.knowTechnique = function () {
            if (cabrito.AB.cookieToggle('about', '0')) {
                utils.setCookie('about', '1', 7, '.ponto4u.com.br');
                return;
            }
            if (cabrito.AB.cookieToggle('about', '1')) {
                utils.setCookie('about', '0', 7, '.ponto4u.com.br');
                window.location.href = '/pomodoro.html';
                return;
            } else {
                setTimeout(function () {
                    utils.setCookie('about', '1', 7, '.ponto4u.com.br');
                }, 30000);
            }
        }
    });
    route.knowTechnique();
})();