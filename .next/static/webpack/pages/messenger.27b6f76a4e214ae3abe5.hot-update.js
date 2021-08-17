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
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_OLD_MESSAGES"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpZCIsImNvb2tpZXMiLCJDb29raWVzIiwiY29raWUiLCJnZXQiLCJzZXRVc2VyIiwidXNlciIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiLCJzZXRVU2VyU3RhdHVzIiwidXNlclN0YXR1cyIsInNldENsaWVudCIsImNsaWVudCIsInNldExvZ2luRXJyb3IiLCJlcnJvciIsImxvZ2luTG9kaW5nIiwic3RhdHVzIiwibG9nb3V0Iiwic2V0QWN0aXZlVGFiIiwidGFiIiwic2V0Q2hhdFdpdGgiLCJ1c2VybmFtZSIsImNoYXRlZGVkVXNlcnMiLCJuYXYiLCJ1bm1vdW50Q29tcG9uZW50IiwiYW55IiwiYWRkTmV3VVNlciIsInJlbW92ZVJlY2VudFVzZXIiLCJ1cGRhdGVMYXN0TWVzc2FnZVRpbWUiLCJ0aW1lIiwic2V0Um9zdGVyIiwiY29udGFjdHMiLCJ1cGRhdGVVc2VyU3RhdHVzIiwib25saW5lU3RhdHVzIiwic2V0QWxsVXNlcnMiLCJzZXRPbGRNZXNzYWdlcyIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhUb2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBRyxrQ0FBWDtBQUNBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjtBQUNBLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksYUFBWixDQUFkO0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDaENDLFFBQUksRUFBRUMsK0NBRDBCO0FBRWhDQyxXQUFPLEVBQUVIO0FBRnVCLEdBQVg7QUFBQSxDQUFoQjtBQUtBLElB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Rm1DLEdBQWQ7QUFBQSxDQUF6QjtBQVFBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUMxQixPQUFEO0FBQUEsU0FBYztBQUN2Q0YsUUFBSSxFQUFFQyxvREFEaUM7QUFFdkNDLFdBQU8sRUFBRUE7QUFGOEIsR0FBZDtBQUFBLENBQXBCO0FBS0EsSUFBTTJCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQzNCLE9BQUQ7QUFBQSxTQUFjO0FBQzFDRixRQUFJLEVBQUVDLHVEQURvQztBQUUxQ0MsV0FBTyxFQUFFQTtBQUZpQyxHQUFkO0FBQUEsQ0FBdkI7QUFLQSxJQUFNNEIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM5QixNQUFJO0FBQ0Y7QUFBQSxrTUFBTyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNrQkMsa0RBQUssQ0FBQ25DLEdBQU4sb0JBQXNCSixFQUF0QixhQUFrQztBQUN2RHdDLHlCQUFPLEVBQUU7QUFDUCxvQ0FBZ0JyQyxLQUFLLENBQUNzQztBQURmO0FBRDhDLGlCQUFsQyxDQURsQjs7QUFBQTtBQUNDQyx3QkFERDtBQU1MSix3QkFBUSxDQUFDO0FBQUUvQixzQkFBSSxFQUFFQyxnREFBUjtBQUErQkMseUJBQU8sRUFBRWlDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQTtBQUF0RCxpQkFBRCxDQUFSOztBQU5LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRRCxHQVRELENBU0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1pOLFlBQVEsQ0FBQztBQUNQL0IsVUFBSSxFQUFFQyxrREFEQztBQUVQQyxhQUFPLEVBQUU7QUFGRixLQUFELENBQVI7QUFJRDtBQUNGLENBaEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3Nlbmdlci4yN2I2Zjc2YTRlMjE0YWUzYWJlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuY29uc3QgaWQgPSBcImZiZGNkM2M5NGFmOWZmYWExMmYwZmY0MzA4ZDNiOWJkXCI7XHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5jb25zdCBjb2tpZSA9IGNvb2tpZXMuZ2V0KFwiY3JlZGVudGlhbHNcIik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VXNlciA9ICh1c2VyKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9VU0VSLFxyXG4gIHBheWxvYWQ6IHVzZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVTZXJTdGF0dXMgPSAodXNlclN0YXR1cykgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfVVNFUl9TVEFUVVMsXHJcbiAgcGF5bG9hZDogdXNlclN0YXR1cyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2xpZW50ID0gKGNsaWVudCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ0xJRU5ULFxyXG4gIHBheWxvYWQ6IGNsaWVudCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9naW5FcnJvciA9IChlcnJvcikgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUixcclxuICBwYXlsb2FkOiBlcnJvcixcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsb2dpbkxvZGluZyA9IChzdGF0dXMpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fTE9ESU5HLFxyXG4gIHBheWxvYWQ6IHN0YXR1cyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoc3RhdHVzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLk9OX0xPR09VVCxcclxuICBwYXlsb2FkOiBzdGF0dXMsXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlVGFiID0gKHRhYikgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQUNUSVZFX1RBQixcclxuICBwYXlsb2FkOiB0YWIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENoYXRXaXRoID0gKHVzZXJuYW1lKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9DSEFUX1dJVEgsXHJcbiAgcGF5bG9hZDogdXNlcm5hbWUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYXRlZGVkVXNlcnMgPSAobmF2KSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9DSEFURURfVVNFUlMsXHJcbiAgcGF5bG9hZDogbmF2LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bm1vdW50Q29tcG9uZW50ID0gKGFueSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5DSEFUX0NPTVBPTkVOVF9VTk1PVU5ULFxyXG4gIHBheWxvYWQ6IGFueSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTmV3VVNlciA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkFERF9ORVdfVVNFUixcclxuICBwYXlsb2FkOiBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVSZWNlbnRVc2VyID0gKGlkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlJFTU9WRV9VU0VSLFxyXG4gIHBheWxvYWQ6IGlkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMYXN0TWVzc2FnZVRpbWUgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5MQVNUX01FU1NBR0VfVElNRSxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZDogcGF5bG9hZC5pZCxcclxuICAgIHRpbWU6IHBheWxvYWQudGltZSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRSb3N0ZXIgPSAoY29udGFjdHMpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1JPU1RFUixcclxuICBwYXlsb2FkOiBjb250YWN0cyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclN0YXR1cyA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlVQREFURV9VU0VSX1NUQVRVUyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZDogcGF5bG9hZC5pZCxcclxuICAgIG9ubGluZVN0YXR1czogcGF5bG9hZC5vbmxpbmVTdGF0dXMsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWxsVXNlcnMgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQUxMX1VTRVJTLFxyXG4gIHBheWxvYWQ6IHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE9sZE1lc3NhZ2VzID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX09MRF9NRVNTQUdFUyxcclxuICBwYXlsb2FkOiBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBhY2NvdW50cy8ke2lkfS91c2Vyc2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBjb2tpZS5BdXRoVG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVJTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLmRhdGEgfSk7XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUixcclxuICAgICAgcGF5bG9hZDogXCJlcnJvciBpbiBmZXRjaGluZyB1c2Vyc1wiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9