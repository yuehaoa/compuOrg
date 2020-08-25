"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _iview = _interopRequireDefault(require("iview"));

require("iview/dist/styles/iview.css");

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vueDraggableResizable = _interopRequireDefault(require("vue-draggable-resizable"));

require("vue-draggable-resizable/dist/VueDraggableResizable.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].component('vue-draggable-resizable', _vueDraggableResizable["default"]);

_vue["default"].use(_iview["default"]); //使用iview组件 


_vue["default"].use(_vueRouter["default"]);

_vue["default"].config.productionTip = false;
var routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: "/index",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("./page/index.vue"));
    });
  }
}, {
  path: "/login",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("./page/login.vue"));
    });
  }
}, {
  path: "/experiment1",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("./page/experiment1.vue"));
    });
  }
}, {
  path: "/experiment1.2",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("./page/experiment1.2.vue"));
    });
  }
}];
var router = new _vueRouter["default"]({
  routes: routes
});
new _vue["default"]({
  router: router,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');