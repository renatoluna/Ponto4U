(function () {
    var cabrito = cabrito || {};
    window.cabrito = cabrito;
    return window.cabrito;
})();

(function (namespace) {
    if (!namespace) {
        return;
    }

    var Class = function () {
        this.constructor = function Class () {};
        this.create = function () {
            var instance = this;
            instance.constructor.apply(instance, arguments);
            return instance;
        };
        this.extends = function (body) {
            var constructor = function () {};
            var prototype = constructor.prototype = this;
            body.call(this);
            return constructor.prototype;
        };
    };

    namespace.Class = namespace.Class || new Class();

    return namespace.Class;
})((window.cabrito) ? window.cabrito : undefined);

(function (namespace) {
    if (!namespace) {
        return;
    }

    var PageLoad = function () {
        var $public = this;
        var hasLoaded = function (condition, fn, timeout) {
            eval('var result =' + condition);
            timeout = (timeout ? timeout + 10 : 0);
            if (typeof fn != "function") {
                return false;
            }
            if (result) {
                fn();
            } else {
                setTimeout(function() {
                    hasLoaded(condition, fn, timeout);
                }, timeout);
            }
        };
        this.elementReady = function (id, fn, timeout) {
            hasLoaded('document.getElementById("' + id + '")', fn, timeout);
        };
        this.ready = function (fn, timeout) {
            var condition = 'document.readyState && document.readyState == "complete"';
            hasLoaded(condition, fn, timeout);
        };
    };

    namespace.PageLoad = namespace.PageLoad || new PageLoad();

    return namespace.PageLoad;
})((window.cabrito) ? window.cabrito : undefined);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhYnJpdG8uanMiLCJjbGFzcy5qcyIsInBhZ2Vsb2FkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY2Ficml0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhYnJpdG8gPSBjYWJyaXRvIHx8IHt9O1xuICAgIHdpbmRvdy5jYWJyaXRvID0gY2Ficml0bztcbiAgICByZXR1cm4gd2luZG93LmNhYnJpdG87XG59KSgpO1xuIiwiKGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcbiAgICBpZiAoIW5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIENsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZnVuY3Rpb24gQ2xhc3MgKCkge307XG4gICAgICAgIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICAgIGluc3RhbmNlLmNvbnN0cnVjdG9yLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmV4dGVuZHMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlID0gdGhpcztcbiAgICAgICAgICAgIGJvZHkuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIG5hbWVzcGFjZS5DbGFzcyA9IG5hbWVzcGFjZS5DbGFzcyB8fCBuZXcgQ2xhc3MoKTtcblxuICAgIHJldHVybiBuYW1lc3BhY2UuQ2xhc3M7XG59KSgod2luZG93LmNhYnJpdG8pID8gd2luZG93LmNhYnJpdG8gOiB1bmRlZmluZWQpO1xuIiwiKGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcclxuICAgIGlmICghbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBQYWdlTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHB1YmxpYyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGhhc0xvYWRlZCA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZuLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGV2YWwoJ3ZhciByZXN1bHQgPScgKyBjb25kaXRpb24pO1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gKHRpbWVvdXQgPyB0aW1lb3V0ICsgMTAgOiAwKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBmbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNMb2FkZWQoY29uZGl0aW9uLCBmbiwgdGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVhZHkgPSBmdW5jdGlvbiAoaWQsIGZuLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGhhc0xvYWRlZCgnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCInICsgaWQgKyAnXCIpJywgZm4sIHRpbWVvdXQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IGZ1bmN0aW9uIChmbiwgdGltZW91dCkge1xyXG4gICAgICAgICAgICB2YXIgY29uZGl0aW9uID0gJ2RvY3VtZW50LnJlYWR5U3RhdGUgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCInO1xyXG4gICAgICAgICAgICBoYXNMb2FkZWQoY29uZGl0aW9uLCBmbiwgdGltZW91dCk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgbmFtZXNwYWNlLlBhZ2VMb2FkID0gbmFtZXNwYWNlLlBhZ2VMb2FkIHx8IG5ldyBQYWdlTG9hZCgpO1xyXG5cclxuICAgIHJldHVybiBuYW1lc3BhY2UuUGFnZUxvYWQ7XHJcbn0pKCh3aW5kb3cuY2Ficml0bykgPyB3aW5kb3cuY2Ficml0byA6IHVuZGVmaW5lZCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
