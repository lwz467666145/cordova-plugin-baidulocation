var exec = require('cordova/exec');

var baiduLocation = {

    getLocation: function (successCallback, errorCallback, options) {
        var timeoutTimer = {timer: null};
        var win = function (p) {
            clearTimeout(timeoutTimer.timer);
            if (!(timeoutTimer.timer)) {
                return;
            }
            successCallback(p);
        };
        var fail = function (e) {
            clearTimeout(timeoutTimer.timer);
            timeoutTimer.timer = null;
            if (errorCallback) {
                errorCallback(e);
            }
        };
        if (options && options.timeout !== Infinity) {
            timeoutTimer.timer = createTimeout(fail, options.timeout);
        } else {
            timeoutTimer.timer = true;
        }
        exec(win, fail, 'BaiduLocation', 'getLocation', [options]);
        return timeoutTimer
    }
    
};

function createTimeout(errorCallback, timeout) {
    var t = setTimeout(function () {
        clearTimeout(t);
        t = null;
        errorCallback({
            code: -1,
            message: "Position retrieval timed out."
        });
    }, timeout);
    return t;
}

module.exports = baiduLocation