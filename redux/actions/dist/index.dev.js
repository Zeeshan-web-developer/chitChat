"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = exports.setNewMessage = exports.setAllUsers = exports.updateUserStatus = exports.setRoster = exports.setLastMessage = exports.updateLastMessageTime = exports.removeRecentUser = exports.addNewUSer = exports.unmountComponent = exports.chatededUsers = exports.setChatWith = exports.setActiveTab = exports.logout = exports.loginLoding = exports.setLoginError = exports.setClient = exports.setUSerStatus = exports.setUser = void 0;

var actionTypes = _interopRequireWildcard(require("./types"));

var _index = _interopRequireDefault(require("../../api/index"));

var _universalCookie = _interopRequireDefault(require("universal-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var id = "fbdcd3c94af9ffaa12f0ff4308d3b9bd";
var cookies = new _universalCookie["default"]();
var cokie = cookies.get("credentials");

var setUser = function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    payload: user
  };
};

exports.setUser = setUser;

var setUSerStatus = function setUSerStatus(userStatus) {
  return {
    type: actionTypes.SET_USER_STATUS,
    payload: userStatus
  };
};

exports.setUSerStatus = setUSerStatus;

var setClient = function setClient(client) {
  return {
    type: actionTypes.SET_CLIENT,
    payload: client
  };
};

exports.setClient = setClient;

var setLoginError = function setLoginError(error) {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: error
  };
};

exports.setLoginError = setLoginError;

var loginLoding = function loginLoding(status) {
  return {
    type: actionTypes.LOGIN_LODING,
    payload: status
  };
};

exports.loginLoding = loginLoding;

var logout = function logout(status) {
  return {
    type: actionTypes.ON_LOGOUT,
    payload: status
  };
};

exports.logout = logout;

var setActiveTab = function setActiveTab(tab) {
  return {
    type: actionTypes.SET_ACTIVE_TAB,
    payload: tab
  };
};

exports.setActiveTab = setActiveTab;

var setChatWith = function setChatWith(username) {
  return {
    type: actionTypes.SET_CHAT_WITH,
    payload: username
  };
};

exports.setChatWith = setChatWith;

var chatededUsers = function chatededUsers(nav) {
  return {
    type: actionTypes.SET_CHATED_USERS,
    payload: nav
  };
};

exports.chatededUsers = chatededUsers;

var unmountComponent = function unmountComponent(any) {
  return {
    type: actionTypes.CHAT_COMPONENT_UNMOUNT,
    payload: any
  };
};

exports.unmountComponent = unmountComponent;

var addNewUSer = function addNewUSer(payload) {
  return {
    type: actionTypes.ADD_NEW_USER,
    payload: payload
  };
};

exports.addNewUSer = addNewUSer;

var removeRecentUser = function removeRecentUser(id) {
  return {
    type: actionTypes.REMOVE_USER,
    payload: id
  };
};

exports.removeRecentUser = removeRecentUser;

var updateLastMessageTime = function updateLastMessageTime(payload) {
  return {
    type: actionTypes.LAST_MESSAGE_TIME,
    payload: {
      id: payload.id,
      time: payload.time
    }
  };
};

exports.updateLastMessageTime = updateLastMessageTime;

var setLastMessage = function setLastMessage(payload) {
  return {
    type: actionTypes.SET_LAST_MESSAGE,
    payload: {
      id: payload.id,
      lastMessage: payload.message,
      time: payload.time
    }
  };
};

exports.setLastMessage = setLastMessage;

var setRoster = function setRoster(contacts) {
  return {
    type: actionTypes.SET_ROSTER,
    payload: contacts
  };
};

exports.setRoster = setRoster;

var updateUserStatus = function updateUserStatus(payload) {
  return {
    type: actionTypes.UPDATE_USER_STATUS,
    payload: {
      id: payload.id,
      onlineStatus: payload.onlineStatus
    }
  };
};

exports.updateUserStatus = updateUserStatus;

var setAllUsers = function setAllUsers(payload) {
  return {
    type: actionTypes.SET_ALL_USERS,
    payload: payload
  };
};

exports.setAllUsers = setAllUsers;

var setNewMessage = function setNewMessage(payload) {
  return {
    type: actionTypes.SET_NEW_MESSAGE,
    payload: payload
  };
};

exports.setNewMessage = setNewMessage;

var fetchUsers = function fetchUsers() {
  try {
    return function _callee(dispatch) {
      var response;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_index["default"].get("accounts/".concat(id, "/users"), {
                headers: {
                  "x-auth-token": cokie.AuthToken
                }
              }));

            case 2:
              response = _context.sent;
              dispatch({
                type: actionTypes.SET_USERS,
                payload: response.data.data
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    };
  } catch (err) {
    dispatch({
      type: actionTypes.LOGIN_ERROR,
      payload: "error in fetching users"
    });
  }
};

exports.fetchUsers = fetchUsers;