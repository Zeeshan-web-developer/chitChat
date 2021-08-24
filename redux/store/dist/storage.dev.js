"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createWebStorage = _interopRequireDefault(require("redux-persist/lib/storage/createWebStorage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createNoopStorage = function createNoopStorage() {
  return {
    getItem: function getItem(_key) {
      return Promise.resolve(null);
    },
    setItem: function setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem: function removeItem(_key) {
      return Promise.resolve();
    }
  };
};

var storage = typeof window !== "undefined" ? (0, _createWebStorage["default"])("local") : createNoopStorage();
var _default = storage;
exports["default"] = _default;