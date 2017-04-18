(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.injectCSS = injectCSS;
function injectCSS(target) {
    return true;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = require('./helpers');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

exports.default = TopLoader;


+function () {
    'use strict';
    //inject .css

    window.addEventListener('load', function () {
        console.log('css injection...');
        (0, _helpers.injectCSS)('./dist/top-loader.css');
    });

    //create wrapper


    //declaration
    window.toploader = new TopLoader();
}();

},{"./helpers":1}]},{},[2]);
