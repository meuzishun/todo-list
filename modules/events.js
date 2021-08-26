var events = (function() {
    
    var _events = {};

    function printEvents() {
        console.log(_events);
    }

    function on(eventName, fn) {
        _events[eventName] = _events[eventName] || [];
        _events[eventName].push(fn);
    }

    function off(eventName, fn) {
        if (_events[eventName]) {
            for (var i = 0; i < _events[eventName].length; i++) {
                if (_events[eventName][i] === fn) {
                    _events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    }

    function emit(eventName, data) {
        if (_events[eventName]) {
            _events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    }

    return {
        on,
        off,
        emit,
        printEvents
    }

})();

export { events };