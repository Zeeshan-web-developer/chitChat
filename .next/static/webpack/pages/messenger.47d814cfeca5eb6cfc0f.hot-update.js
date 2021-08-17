webpackHotUpdate_N_E("pages/messenger",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: setUser, setUSerStatus, setClient, setLoginError, loginLoding, logout, setActiveTab, setChatWith, chatededUsers, unmountComponent, addNewUSer, removeRecentUser, updateLastMessageTime, setRoster, updateUserStatus, setAllUsers, setOldMessages, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUSerStatus", function() { return setUSerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClient", function() { return setClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoginError", function() { return setLoginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginLoding", function() { return loginLoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveTab", function() { return setActiveTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChatWith", function() { return setChatWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatededUsers", function() { return chatededUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponent", function() { return unmountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewUSer", function() { return addNewUSer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRecentUser", function() { return removeRecentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLastMessageTime", function() { return updateLastMessageTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRoster", function() { return setRoster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserStatus", function() { return updateUserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAllUsers", function() { return setAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOldMessages", function() { return setOldMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/index */ "./api/index.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");





var id = "fbdcd3c94af9ffaa12f0ff4308d3b9bd";
var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_4__["default"]();
var cokie = cookies.get("credentials");
var setUser = function setUser(user) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_USER"],
    payload: user
  };
};
var setUSerStatus = function setUSerStatus(userStatus) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_USER_STATUS"],
    payload: userStatus
  };
};
var setClient = function setClient(client) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_CLIENT"],
    payload: client
  };
};
var setLoginError = function setLoginError(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_ERROR"],
    payload: error
  };
};
var loginLoding = function loginLoding(status) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_LODING"],
    payload: status
  };
};
var logout = function logout(status) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["ON_LOGOUT"],
    payload: status
  };
};
var setActiveTab = function setActiveTab(tab) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_ACTIVE_TAB"],
    payload: tab
  };
};
var setChatWith = function setChatWith(username) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_CHAT_WITH"],
    payload: username
  };
};
var chatededUsers = function chatededUsers(nav) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_CHATED_USERS"],
    payload: nav
  };
};
var unmountComponent = function unmountComponent(any) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["CHAT_COMPONENT_UNMOUNT"],
    payload: any
  };
};
var addNewUSer = function addNewUSer(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["ADD_NEW_USER"],
    payload: payload
  };
};
var removeRecentUser = function removeRecentUser(id) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_USER"],
    payload: id
  };
};
var updateLastMessageTime = function updateLastMessageTime(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["LAST_MESSAGE_TIME"],
    payload: {
      id: payload.id,
      time: payload.time
    }
  };
};
var setRoster = function setRoster(contacts) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_ROSTER"],
    payload: contacts
  };
};
var updateUserStatus = function updateUserStatus(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_STATUS"],
    payload: {
      id: payload.id,
      onlineStatus: payload.onlineStatus
    }
  };
};
var setAllUsers = function setAllUsers(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_ALL_USERS"],
    payload: payload
  };
};
var setOldMessages = function setOldMessages(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_NEW_MESSAGE"],
    payload: payload
  };
};
var fetchUsers = function fetchUsers() {
  try {
    return /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api_index__WEBPACK_IMPORTED_MODULE_3__["default"].get("accounts/".concat(id, "/users"), {
                  headers: {
                    "x-auth-token": cokie.AuthToken
                  }
                });

              case 2:
                response = _context.sent;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_USERS"],
                  payload: response.data.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_ERROR"],
      payload: "error in fetching users"
    });
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: SET_USER, SET_USER_STATUS, SET_CLIENT, LOGIN_ERROR, LOGIN_LODING, ON_LOGOUT, SET_ACTIVE_TAB, SET_USERS, SET_CHAT_WITH, SET_CHATED_USERS, CHAT_COMPONENT_UNMOUNT, ADD_NEW_USER, REMOVE_USER, LAST_MESSAGE_TIME, SET_ROSTER, UPDATE_USER_STATUS, SET_ALL_USERS, SET_NEW_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_STATUS", function() { return SET_USER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CLIENT", function() { return SET_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_LODING", function() { return LOGIN_LODING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOGOUT", function() { return ON_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_TAB", function() { return SET_ACTIVE_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERS", function() { return SET_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHAT_WITH", function() { return SET_CHAT_WITH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHATED_USERS", function() { return SET_CHATED_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_COMPONENT_UNMOUNT", function() { return CHAT_COMPONENT_UNMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_USER", function() { return ADD_NEW_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_USER", function() { return REMOVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MESSAGE_TIME", function() { return LAST_MESSAGE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ROSTER", function() { return SET_ROSTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_STATUS", function() { return UPDATE_USER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALL_USERS", function() { return SET_ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NEW_MESSAGE", function() { return SET_NEW_MESSAGE; });
var SET_USER = "SET_USER";
var SET_USER_STATUS = "SET_USER_STATUS";
var SET_CLIENT = "SET_CLIENT";
var LOGIN_ERROR = "LOGIN_ERROR";
var LOGIN_LODING = "LOGIN_LODING";
var ON_LOGOUT = "ON_LOGOUT";
var SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
var SET_USERS = "SET_USERS";
var SET_CHAT_WITH = "SET_CHAT_WITH";
var SET_CHATED_USERS = "SET_CHATED_USERS";
var CHAT_COMPONENT_UNMOUNT = "CHAT_COMPONENT_UNMOUNT";
var ADD_NEW_USER = "ADD_NEW_USER";
var REMOVE_USER = "REMOVE_USER";
var LAST_MESSAGE_TIME = "LAST_MESSAGE_TIME";
var SET_ROSTER = "SET_ROSTER";
var UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
var SET_ALL_USERS = "SET_ALL_USERS";
var SET_NEW_MESSAGE = "SET_NEW_MESSAGE";

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy90eXBlcy5qcyJdLCJuYW1lcyI6WyJpZCIsImNvb2tpZXMiLCJDb29raWVzIiwiY29raWUiLCJnZXQiLCJzZXRVc2VyIiwidXNlciIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiLCJzZXRVU2VyU3RhdHVzIiwidXNlclN0YXR1cyIsInNldENsaWVudCIsImNsaWVudCIsInNldExvZ2luRXJyb3IiLCJlcnJvciIsImxvZ2luTG9kaW5nIiwic3RhdHVzIiwibG9nb3V0Iiwic2V0QWN0aXZlVGFiIiwidGFiIiwic2V0Q2hhdFdpdGgiLCJ1c2VybmFtZSIsImNoYXRlZGVkVXNlcnMiLCJuYXYiLCJ1bm1vdW50Q29tcG9uZW50IiwiYW55IiwiYWRkTmV3VVNlciIsInJlbW92ZVJlY2VudFVzZXIiLCJ1cGRhdGVMYXN0TWVzc2FnZVRpbWUiLCJ0aW1lIiwic2V0Um9zdGVyIiwiY29udGFjdHMiLCJ1cGRhdGVVc2VyU3RhdHVzIiwib25saW5lU3RhdHVzIiwic2V0QWxsVXNlcnMiLCJzZXRPbGRNZXNzYWdlcyIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhUb2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsIlNFVF9VU0VSIiwiU0VUX1VTRVJfU1RBVFVTIiwiU0VUX0NMSUVOVCIsIkxPR0lOX0VSUk9SIiwiTE9HSU5fTE9ESU5HIiwiT05fTE9HT1VUIiwiU0VUX0FDVElWRV9UQUIiLCJTRVRfVVNFUlMiLCJTRVRfQ0hBVF9XSVRIIiwiU0VUX0NIQVRFRF9VU0VSUyIsIkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQiLCJBRERfTkVXX1VTRVIiLCJSRU1PVkVfVVNFUiIsIkxBU1RfTUVTU0FHRV9USU1FIiwiU0VUX1JPU1RFUiIsIlVQREFURV9VU0VSX1NUQVRVUyIsIlNFVF9BTExfVVNF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d2VicGFjay9wYWdlcy9tZXNzZW5nZXIuNDdkODE0Y2ZlY2E1ZWI2Y2ZjMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vYXBpL2luZGV4XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XHJcbmNvbnN0IGlkID0gXCJmYmRjZDNjOTRhZjlmZmFhMTJmMGZmNDMwOGQzYjliZFwiO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuY29uc3QgY29raWUgPSBjb29raWVzLmdldChcImNyZWRlbnRpYWxzXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXIgPSAodXNlcikgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfVVNFUixcclxuICBwYXlsb2FkOiB1c2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVU2VyU3RhdHVzID0gKHVzZXJTdGF0dXMpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVJfU1RBVFVTLFxyXG4gIHBheWxvYWQ6IHVzZXJTdGF0dXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENsaWVudCA9IChjbGllbnQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NMSUVOVCxcclxuICBwYXlsb2FkOiBjbGllbnQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvZ2luRXJyb3IgPSAoZXJyb3IpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fRVJST1IsXHJcbiAgcGF5bG9hZDogZXJyb3IsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9naW5Mb2RpbmcgPSAoc3RhdHVzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX0xPRElORyxcclxuICBwYXlsb2FkOiBzdGF0dXMsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKHN0YXR1cykgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5PTl9MT0dPVVQsXHJcbiAgcGF5bG9hZDogc3RhdHVzLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVRhYiA9ICh0YWIpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0FDVElWRV9UQUIsXHJcbiAgcGF5bG9hZDogdGFiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDaGF0V2l0aCA9ICh1c2VybmFtZSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ0hBVF9XSVRILFxyXG4gIHBheWxvYWQ6IHVzZXJuYW1lLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGF0ZWRlZFVzZXJzID0gKG5hdikgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ0hBVEVEX1VTRVJTLFxyXG4gIHBheWxvYWQ6IG5hdixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdW5tb3VudENvbXBvbmVudCA9IChhbnkpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuQ0hBVF9DT01QT05FTlRfVU5NT1VOVCxcclxuICBwYXlsb2FkOiBhbnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE5ld1VTZXIgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5BRERfTkVXX1VTRVIsXHJcbiAgcGF5bG9hZDogcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUmVjZW50VXNlciA9IChpZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5SRU1PVkVfVVNFUixcclxuICBwYXlsb2FkOiBpZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTGFzdE1lc3NhZ2VUaW1lID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuTEFTVF9NRVNTQUdFX1RJTUUsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWQ6IHBheWxvYWQuaWQsXHJcbiAgICB0aW1lOiBwYXlsb2FkLnRpbWUsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Um9zdGVyID0gKGNvbnRhY3RzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9ST1NURVIsXHJcbiAgcGF5bG9hZDogY29udGFjdHMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJTdGF0dXMgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfVVNFUl9TVEFUVVMsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWQ6IHBheWxvYWQuaWQsXHJcbiAgICBvbmxpbmVTdGF0dXM6IHBheWxvYWQub25saW5lU3RhdHVzLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFsbFVzZXJzID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0FMTF9VU0VSUyxcclxuICBwYXlsb2FkOiBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRPbGRNZXNzYWdlcyA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9ORVdfTUVTU0FHRSxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBhY2NvdW50cy8ke2lkfS91c2Vyc2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBjb2tpZS5BdXRoVG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVJTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLmRhdGEgfSk7XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUixcclxuICAgICAgcGF5bG9hZDogXCJlcnJvciBpbiBmZXRjaGluZyB1c2Vyc1wiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgU0VUX1VTRVIgPSBcIlNFVF9VU0VSXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfVVNFUl9TVEFUVVMgPSBcIlNFVF9VU0VSX1NUQVRVU1wiO1xyXG5leHBvcnQgY29uc3QgU0VUX0NMSUVOVCA9IFwiU0VUX0NMSUVOVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSBcIkxPR0lOX0VSUk9SXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9MT0RJTkcgPSBcIkxPR0lOX0xPRElOR1wiO1xyXG5leHBvcnQgY29uc3QgT05fTE9HT1VUID0gXCJPTl9MT0dPVVRcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9BQ1RJVkVfVEFCID0gXCJTRVRfQUNUSVZFX1RBQlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJTID0gXCJTRVRfVVNFUlNcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9DSEFUX1dJVEggPSBcIlNFVF9DSEFUX1dJVEhcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9DSEFURURfVVNFUlMgPSBcIlNFVF9DSEFURURfVVNFUlNcIjtcclxuZXhwb3J0IGNvbnN0IENIQVRfQ09NUE9ORU5UX1VOTU9VTlQgPSBcIkNIQVRfQ09NUE9ORU5UX1VOTU9VTlRcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9ORVdfVVNFUiA9IFwiQUREX05FV19VU0VSXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUiA9IFwiUkVNT1ZFX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IExBU1RfTUVTU0FHRV9USU1FID0gXCJMQVNUX01FU1NBR0VfVElNRVwiO1xyXG5leHBvcnQgY29uc3QgU0VUX1JPU1RFUiA9IFwiU0VUX1JPU1RFUlwiO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfU1RBVFVTID0gXCJVUERBVEVfVVNFUl9TVEFUVVNcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9BTExfVVNFUlMgPSBcIlNFVF9BTExfVVNFUlNcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9ORVdfTUVTU0FHRSA9IFwiU0VUX05FV19NRVNTQUdFXCI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=