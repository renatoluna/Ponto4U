var utils = cabrito.Class.extends(function (time) {
    this.getCookie = function (cookieName) {
        var cookie = document.cookie;
        var startIndex = cookie.indexOf(cookieName);

        if (startIndex === -1) {
            return "";
        }

        var middleIndex = cookie.indexOf('=', startIndex) + 1;
        var endIndex = cookie.indexOf(';', middleIndex);
        if (endIndex === -1){
            endIndex = cookie.length;
        }

        return unescape(cookie.substring(middleIndex, endIndex));
    }
});