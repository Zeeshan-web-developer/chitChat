webpackHotUpdate_N_E("pages/messenger",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: setUser, setUSerStatus, setClient, setLoginError, loginLoding, logout, setActiveTab, setChatWith, chatededUsers, unmountComponent, addNewUSer, removeRecentUser, updateLastMessageTime, setLastMessage, setRoster, updateUserStatus, updateRecentUserStatus, setAllUsers, setNewMessage, fetchUsers */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLastMessage", function() { return setLastMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRoster", function() { return setRoster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserStatus", function() { return updateUserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRecentUserStatus", function() { return updateRecentUserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAllUsers", function() { return setAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewMessage", function() { return setNewMessage; });
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
var setLastMessage = function setLastMessage(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_LAST_MESSAGE"],
    payload: {
      id: payload.id,
      lastMessage: payload.message,
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
var updateRecentUserStatus = function updateRecentUserStatus(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RECENT_USER_STATUS"],
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
var setNewMessage = function setNewMessage(payload) {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpZCIsImNvb2tpZXMiLCJDb29raWVzIiwiY29raWUiLCJnZXQiLCJzZXRVc2VyIiwidXNlciIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiLCJzZXRVU2VyU3RhdHVzIiwidXNlclN0YXR1cyIsInNldENsaWVudCIsImNsaWVudCIsInNldExvZ2luRXJyb3IiLCJlcnJvciIsImxvZ2luTG9kaW5nIiwic3RhdHVzIiwibG9nb3V0Iiwic2V0QWN0aXZlVGFiIiwidGFiIiwic2V0Q2hhdFdpdGgiLCJ1c2VybmFtZSIsImNoYXRlZGVkVXNlcnMiLCJuYXYiLCJ1bm1vdW50Q29tcG9uZW50IiwiYW55IiwiYWRkTmV3VVNlciIsInJlbW92ZVJlY2VudFVzZXIiLCJ1cGRhdGVMYXN0TWVzc2FnZVRpbWUiLCJ0aW1lIiwic2V0TGFzdE1lc3NhZ2UiLCJsYXN0TWVzc2FnZSIsIm1lc3NhZ2UiLCJzZXRSb3N0ZXIiLCJjb250YWN0cyIsInVwZGF0ZVVzZXJTdGF0dXMiLCJvbmxpbmVTdGF0dXMiLCJ1cGRhdGVSZWNlbnRVc2VyU3RhdHVzIiwic2V0QWxsVXNlcnMiLCJzZXROZXdNZXNzYWdlIiwiZmV0Y2hVc2VycyIsImRpc3BhdGNoIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aFRva2VuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUcsa0NBQVg7QUFDQSxJQUFNQyxPQUFPLEdBQUcsSUFBSUMsd0RBQUosRUFBaEI7QUFDQSxJQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLGFBQVosQ0FBZDtBQUVPLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQ2hD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QWtDO0FBQ3ZENEMseUJBQU8sRUFBRTtBQUNQLG9DQUFnQnpDLEtBQUssQ0FBQzBDO0FBRGY7QUFEOEMsaUJBQWxDLENBRGxCOztBQUFBO0FBQ0NDLHdCQUREO0FBTUxKLHdCQUFRLENBQUM7QUFBRW5DLHNCQUFJLEVBQUVDLGdEQUFSO0FBQStCQyx5QkFBTyxFQUFFcUMsUUFBUSxDQUFDQyxJQUFULENBQWNBO0FBQXRELGlCQUFELENBQVI7O0FBTks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFELEdBVEQsQ0FTRSxPQUFPQyxHQUFQLEVBQVk7QUFDWk4sWUFBUSxDQUFDO0FBQ1BuQyxVQUFJLEVBQUVDLGtEQURDO0FBRVBDLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlEO0FBQ0YsQ0FoQk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLmFkOGRlY2FiOTdkMjExY2EyNmZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xyXG5jb25zdCBpZCA9IFwiZmJkY2QzYzk0YWY5ZmZhYTEyZjBmZjQzMDhkM2I5YmRcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbmNvbnN0IGNva2llID0gY29va2llcy5nZXQoXCJjcmVkZW50aWFsc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyID0gKHVzZXIpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVIsXHJcbiAgcGF5bG9hZDogdXNlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VVNlclN0YXR1cyA9ICh1c2VyU3RhdHVzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9VU0VSX1NUQVRVUyxcclxuICBwYXlsb2FkOiB1c2VyU3RhdHVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDbGllbnQgPSAoY2xpZW50KSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9DTElFTlQsXHJcbiAgcGF5bG9hZDogY2xpZW50LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2dpbkVycm9yID0gKGVycm9yKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX0VSUk9SLFxyXG4gIHBheWxvYWQ6IGVycm9yLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luTG9kaW5nID0gKHN0YXR1cykgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9MT0RJTkcsXHJcbiAgcGF5bG9hZDogc3RhdHVzLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IChzdGF0dXMpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuT05fTE9HT1VULFxyXG4gIHBheWxvYWQ6IHN0YXR1cyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVUYWIgPSAodGFiKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfVEFCLFxyXG4gIHBheWxvYWQ6IHRhYixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2hhdFdpdGggPSAodXNlcm5hbWUpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NIQVRfV0lUSCxcclxuICBwYXlsb2FkOiB1c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhdGVkZWRVc2VycyA9IChuYXYpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NIQVRFRF9VU0VSUyxcclxuICBwYXlsb2FkOiBuYXYsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVubW91bnRDb21wb25lbnQgPSAoYW55KSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQsXHJcbiAgcGF5bG9hZDogYW55LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGROZXdVU2VyID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuQUREX05FV19VU0VSLFxyXG4gIHBheWxvYWQ6IHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVJlY2VudFVzZXIgPSAoaWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuUkVNT1ZFX1VTRVIsXHJcbiAgcGF5bG9hZDogaWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxhc3RNZXNzYWdlVGltZSA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxBU1RfTUVTU0FHRV9USU1FLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkOiBwYXlsb2FkLmlkLFxyXG4gICAgdGltZTogcGF5bG9hZC50aW1lLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExhc3RNZXNzYWdlID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0xBU1RfTUVTU0FHRSxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZDogcGF5bG9hZC5pZCxcclxuICAgIGxhc3RNZXNzYWdlOiBwYXlsb2FkLm1lc3NhZ2UsXHJcbiAgICB0aW1lOiBwYXlsb2FkLnRpbWUsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Um9zdGVyID0gKGNvbnRhY3RzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9ST1NURVIsXHJcbiAgcGF5bG9hZDogY29udGFjdHMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJTdGF0dXMgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfVVNFUl9TVEFUVVMsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWQ6IHBheWxvYWQuaWQsXHJcbiAgICBvbmxpbmVTdGF0dXM6IHBheWxvYWQub25saW5lU3RhdHVzLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlY2VudFVzZXJTdGF0dXMgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfUkVDRU5UX1VTRVJfU1RBVFVTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkOiBwYXlsb2FkLmlkLFxyXG4gICAgb25saW5lU3RhdHVzOiBwYXlsb2FkLm9ubGluZVN0YXR1cyxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBbGxVc2VycyA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9BTExfVVNFUlMsXHJcbiAgcGF5bG9hZDogcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TmV3TWVzc2FnZSA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9ORVdfTUVTU0FHRSxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBhY2NvdW50cy8ke2lkfS91c2Vyc2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBjb2tpZS5BdXRoVG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVJTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLmRhdGEgfSk7XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUixcclxuICAgICAgcGF5bG9hZDogXCJlcnJvciBpbiBmZXRjaGluZyB1c2Vyc1wiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9