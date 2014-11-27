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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhYnJpdG8uanMiLCJjbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjYWJyaXRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2Ficml0byA9IGNhYnJpdG8gfHwge307XG4gICAgd2luZG93LmNhYnJpdG8gPSBjYWJyaXRvO1xuICAgIHJldHVybiB3aW5kb3cuY2Ficml0bztcbn0pKCk7XG4iLCIoZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xuICAgIGlmICghbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBmdW5jdGlvbiBDbGFzcyAoKSB7fTtcbiAgICAgICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0b3IuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZXh0ZW5kcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgIHZhciBwcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSB0aGlzO1xuICAgICAgICAgICAgYm9keS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgbmFtZXNwYWNlLkNsYXNzID0gbmFtZXNwYWNlLkNsYXNzIHx8IG5ldyBDbGFzcygpO1xuXG4gICAgcmV0dXJuIG5hbWVzcGFjZS5DbGFzcztcbn0pKCh3aW5kb3cuY2Ficml0bykgPyB3aW5kb3cuY2Ficml0byA6IHVuZGVmaW5lZCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=