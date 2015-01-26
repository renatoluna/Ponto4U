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
    };

    this.setCookie = function(name, value, expiredays, domain) {
        var cookie;
        if (!name) {
            return;
        }

        expiredays = expiredays || 45;

        if(value.substring(0,1) == ";") {
            value = value.substr(1);
        }
        value = escape(value);

        var exdate = exdate || new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        exdate = exdate.toUTCString();
        
        cookie = name + "=" + value + ";expires=" + exdate + ";path=/;domain="+ domain +";";
        return document.cookie = cookie;
    };
});