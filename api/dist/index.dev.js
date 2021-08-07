"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.instance = exports.fetchChatApi = exports.fetchChatMemberApi = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchChatMemberApi = function fetchChatMemberApi() {
  return _axios["default"].get("/api/chatMember.json");
};

exports.fetchChatMemberApi = fetchChatMemberApi;

var fetchChatApi = function fetchChatApi() {
  return _axios["default"].get("/api/chat.chats.json");
};

exports.fetchChatApi = fetchChatApi;

var instance = _axios["default"].create({
  baseURL: "https://karthik.mysmartpbx.org:8443/v2/"
});

exports.instance = instance;
var _default = instance;
exports["default"] = _default;