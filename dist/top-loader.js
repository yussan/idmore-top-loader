'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

+function () {
    'use strict';
    //inject .css

    window.addEventListener('load', function () {
        console.log('css injection...');
    });

    //create wrapper


    // main toploader

    var TopLoader = function () {
        function TopLoader() {
            _classCallCheck(this, TopLoader);
        }

        _createClass(TopLoader, [{
            key: 'start',
            value: function start() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standart';

                return 'starting toploader ...';
            }
        }, {
            key: 'end',
            value: function end() {
                return 'stop toploader ...';
            }
        }]);

        return TopLoader;
    }();

    //declaration


    window.toploader = new TopLoader();
}();
