webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var store = null;
var Store = (_class = function Store(isServer, lastUpdate) {
  var _this = this;

  _classCallCheck(this, Store);

  _initializerDefineProperty(this, "lastUpdate", _descriptor, this);

  _initializerDefineProperty(this, "light", _descriptor2, this);

  _initializerDefineProperty(this, "name", _descriptor3, this);

  _initializerDefineProperty(this, "updateName", _descriptor4, this);

  _initializerDefineProperty(this, "clearName", _descriptor5, this);

  _initializerDefineProperty(this, "start", _descriptor6, this);

  this.stop = function () {
    return clearInterval(_this.timer);
  };

  this.lastUpdate = lastUpdate;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "lastUpdate", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "light", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "name", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "updateName", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.name = "Hello Bro";
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "clearName", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      _this3.name = "";
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "start", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      _this4.timer = setInterval(function () {
        _this4.lastUpdate = Date.now();
        _this4.light = true;
      }, 1000);
    };
  }
})), _class);
function initializeStore(isServer) {
  var lastUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

  if (isServer) {
    return new Store(isServer, lastUpdate);
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate);
    }

    return store;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.ddf40ef962780631f11a.hot-update.js.map