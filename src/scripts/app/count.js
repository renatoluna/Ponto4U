cabrito.PageLoad.elementReady('pomodoro-count', function () {
    var getCookie = function (name) {
        var cookie = document.cookie;
        if (cookie.indexOf(name) < 0) {
            return;
        }
        var startIndex = cookie.indexOf(name) + name.length + 1;
        var endIndex = document.cookie.substring(document.cookie.indexOf(name) + name.length+1).indexOf(';');
        return cookie.substring(startIndex).substring(0, endIndex);
    };
    document.getElementById('pomodoro-count').innerHTML = getCookie('pomodoros');
});
