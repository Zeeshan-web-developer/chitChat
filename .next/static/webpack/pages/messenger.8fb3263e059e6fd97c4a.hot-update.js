webpackHotUpdate_N_E("pages/messenger",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: setUser, setUSerStatus, setClient, setLoginError, loginLoding, logout, setActiveTab, setChatWith, chatededUsers, unmountComponent, addNewUSer, removeRecentUser, updateLastMessageTime, fetchUsers */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpZCIsImNvb2tpZXMiLCJDb29raWVzIiwiY29raWUiLCJnZXQiLCJzZXRVc2VyIiwidXNlciIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiLCJzZXRVU2VyU3RhdHVzIiwidXNlclN0YXR1cyIsInNldENsaWVudCIsImNsaWVudCIsInNldExvZ2luRXJyb3IiLCJlcnJvciIsImxvZ2luTG9kaW5nIiwic3RhdHVzIiwibG9nb3V0Iiwic2V0QWN0aXZlVGFiIiwidGFiIiwic2V0Q2hhdFdpdGgiLCJ1c2VybmFtZSIsImNoYXRlZGVkVXNlcnMiLCJuYXYiLCJ1bm1vdW50Q29tcG9uZW50IiwiYW55IiwiYWRkTmV3VVNlciIsInJlbW92ZVJlY2VudFVzZXIiLCJ1cGRhdGVMYXN0TWVzc2FnZVRpbWUiLCJmZXRjaFVzZXJzIiwiZGlzcGF0Y2giLCJheGlvcyIsImhlYWRlcnMiLCJBdXRoVG9rZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBRyxrQ0FBWDtBQUNBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjtBQUNBLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksYUFBWixDQUFkO0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDaENDLFFBQUksRUFBRUMsK0NBRDBCO0FBRWhDQyxXQUFPLEVBQUVIO0FBRnVCLEdBQVg7QUFBQSxDQUFoQjtBQUtBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRDtBQUFBLFNBQWlCO0FBQzVDSixRQUFJLEVBQUVDLHNEQURzQztBQUU1Q0MsV0FBTyxFQUFFRTtBQUZtQyxH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QixVQUFJLEVBQUVDLGtEQURDO0FBRVBDLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlEO0FBQ0YsQ0FoQk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLjhmYjMyNjNlMDU5ZTZmZDk3YzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xyXG5jb25zdCBpZCA9IFwiZmJkY2QzYzk0YWY5ZmZhYTEyZjBmZjQzMDhkM2I5YmRcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbmNvbnN0IGNva2llID0gY29va2llcy5nZXQoXCJjcmVkZW50aWFsc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyID0gKHVzZXIpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVIsXHJcbiAgcGF5bG9hZDogdXNlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VVNlclN0YXR1cyA9ICh1c2VyU3RhdHVzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9VU0VSX1NUQVRVUyxcclxuICBwYXlsb2FkOiB1c2VyU3RhdHVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDbGllbnQgPSAoY2xpZW50KSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9DTElFTlQsXHJcbiAgcGF5bG9hZDogY2xpZW50LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2dpbkVycm9yID0gKGVycm9yKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX0VSUk9SLFxyXG4gIHBheWxvYWQ6IGVycm9yLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luTG9kaW5nID0gKHN0YXR1cykgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9MT0RJTkcsXHJcbiAgcGF5bG9hZDogc3RhdHVzLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IChzdGF0dXMpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuT05fTE9HT1VULFxyXG4gIHBheWxvYWQ6IHN0YXR1cyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVUYWIgPSAodGFiKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfVEFCLFxyXG4gIHBheWxvYWQ6IHRhYixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2hhdFdpdGggPSAodXNlcm5hbWUpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NIQVRfV0lUSCxcclxuICBwYXlsb2FkOiB1c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhdGVkZWRVc2VycyA9IChuYXYpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NIQVRFRF9VU0VSUyxcclxuICBwYXlsb2FkOiBuYXYsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVubW91bnRDb21wb25lbnQgPSAoYW55KSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQsXHJcbiAgcGF5bG9hZDogYW55LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGROZXdVU2VyID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuQUREX05FV19VU0VSLFxyXG4gIHBheWxvYWQ6IHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVJlY2VudFVzZXIgPSAoaWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuUkVNT1ZFX1VTRVIsXHJcbiAgcGF5bG9hZDogaWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxhc3RNZXNzYWdlVGltZSA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxBU1RfTUVTU0FHRV9USU1FLFxyXG4gIHBheWxvYWQ6IHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGFjY291bnRzLyR7aWR9L3VzZXJzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6IGNva2llLkF1dGhUb2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfVVNFUlMsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX0VSUk9SLFxyXG4gICAgICBwYXlsb2FkOiBcImVycm9yIGluIGZldGNoaW5nIHVzZXJzXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=