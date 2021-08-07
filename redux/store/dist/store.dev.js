"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _index = _interopRequireDefault(require("../reducers/index"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxReset = _interopRequireDefault(require("redux-reset"));

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)(_index["default"], (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _reduxReset["default"])(), (0, _redux.applyMiddleware)(_reduxThunk["default"])));
var _default = store;
exports["default"] = _default;