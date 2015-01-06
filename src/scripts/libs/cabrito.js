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
        this.ready = function (fn, timeout) {
            var readyState = document.readyState;
            timeout = (timeout ? timeout + 10 : 0);
            if (typeof fn != "function") {
                return false;
            }
            if (readyState && readyState == "complete") {
                fn();
            } else {
                setTimeout(function() {
                    $public.ready(fn, timeout);
                }, timeout);
            }
        };
    };

    namespace.PageLoad = namespace.PageLoad || new PageLoad();

    return namespace.PageLoad;
})((window.cabrito) ? window.cabrito : undefined);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhYnJpdG8uanMiLCJjbGFzcy5qcyIsInBhZ2Vsb2FkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNhYnJpdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYWJyaXRvID0gY2Ficml0byB8fCB7fTtcbiAgICB3aW5kb3cuY2Ficml0byA9IGNhYnJpdG87XG4gICAgcmV0dXJuIHdpbmRvdy5jYWJyaXRvO1xufSkoKTtcbiIsIihmdW5jdGlvbiAobmFtZXNwYWNlKSB7XG4gICAgaWYgKCFuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIENsYXNzICgpIHt9O1xuICAgICAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgICAgICBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5leHRlbmRzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgdmFyIHByb3RvdHlwZSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IHRoaXM7XG4gICAgICAgICAgICBib2R5LmNhbGwodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBuYW1lc3BhY2UuQ2xhc3MgPSBuYW1lc3BhY2UuQ2xhc3MgfHwgbmV3IENsYXNzKCk7XG5cbiAgICByZXR1cm4gbmFtZXNwYWNlLkNsYXNzO1xufSkoKHdpbmRvdy5jYWJyaXRvKSA/IHdpbmRvdy5jYWJyaXRvIDogdW5kZWZpbmVkKTtcbiIsIihmdW5jdGlvbiAobmFtZXNwYWNlKSB7XHJcbiAgICBpZiAoIW5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgUGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICRwdWJsaWMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSBmdW5jdGlvbiAoZm4sIHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gKHRpbWVvdXQgPyB0aW1lb3V0ICsgMTAgOiAwKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVhZHlTdGF0ZSAmJiByZWFkeVN0YXRlID09IFwiY29tcGxldGVcIikge1xyXG4gICAgICAgICAgICAgICAgZm4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHB1YmxpYy5yZWFkeShmbiwgdGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIG5hbWVzcGFjZS5QYWdlTG9hZCA9IG5hbWVzcGFjZS5QYWdlTG9hZCB8fCBuZXcgUGFnZUxvYWQoKTtcclxuXHJcbiAgICByZXR1cm4gbmFtZXNwYWNlLlBhZ2VMb2FkO1xyXG59KSgod2luZG93LmNhYnJpdG8pID8gd2luZG93LmNhYnJpdG8gOiB1bmRlZmluZWQpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
