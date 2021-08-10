webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpZCIsImNvb2tpZXMiLCJDb29raWVzIiwiY29raWUiLCJnZXQiLCJzZXRVc2VyIiwidXNlciIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiLCJzZXRVU2VyU3RhdHVzIiwidXNlclN0YXR1cyIsInNldENsaWVudCIsImNsaWVudCIsInNldExvZ2luRXJyb3IiLCJlcnJvciIsImxvZ2luTG9kaW5nIiwic3RhdHVzIiwibG9nb3V0Iiwic2V0QWN0aXZlVGFiIiwidGFiIiwic2V0Q2hhdFdpdGgiLCJ1c2VybmFtZSIsImNoYXRlZGVkVXNlcnMiLCJuYXYiLCJ1bm1vdW50Q29tcG9uZW50IiwiYW55IiwiYWRkTmV3VVNlciIsInJlbW92ZVJlY2VudFVzZXIiLCJ1cGRhdGVMYXN0TWVzc2FnZVRpbWUiLCJmZXRjaFVzZXJzIiwiZGlzcGF0Y2giLCJheGlvcyIsImhlYWRlcnMiLCJBdXRoVG9rZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBRyxrQ0FBWDtBQUNBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjtBQUNBLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksYUFBWixDQUFkO0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDaENDLFFBQUksRUFBRUMsK0NBRDBCO0FBRWhDQyxXQUFPLEVBQUVIO0FBRnVCLEdBQVg7QUFBQSxDQUFoQjtBQUtBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRDtBQUFBLFNBQWlCO0FBQzVDSixRQUFJLEVBQUVDLHNEQURzQztBQUU1Q0MsV0FBTyxFQUFFRTtBQUZtQyxH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QixVQUFJLEVBQUVDLGtEQURDO0FBRVBDLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlEO0FBQ0YsQ0FoQk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGZiMzI2M2UwNTllNmZkOTdjNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vYXBpL2luZGV4XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XHJcbmNvbnN0IGlkID0gXCJmYmRjZDNjOTRhZjlmZmFhMTJmMGZmNDMwOGQzYjliZFwiO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuY29uc3QgY29raWUgPSBjb29raWVzLmdldChcImNyZWRlbnRpYWxzXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXIgPSAodXNlcikgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfVVNFUixcclxuICBwYXlsb2FkOiB1c2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVU2VyU3RhdHVzID0gKHVzZXJTdGF0dXMpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVJfU1RBVFVTLFxyXG4gIHBheWxvYWQ6IHVzZXJTdGF0dXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENsaWVudCA9IChjbGllbnQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NMSUVOVCxcclxuICBwYXlsb2FkOiBjbGllbnQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvZ2luRXJyb3IgPSAoZXJyb3IpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fRVJST1IsXHJcbiAgcGF5bG9hZDogZXJyb3IsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9naW5Mb2RpbmcgPSAoc3RhdHVzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX0xPRElORyxcclxuICBwYXlsb2FkOiBzdGF0dXMsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKHN0YXR1cykgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5PTl9MT0dPVVQsXHJcbiAgcGF5bG9hZDogc3RhdHVzLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVRhYiA9ICh0YWIpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0FDVElWRV9UQUIsXHJcbiAgcGF5bG9hZDogdGFiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDaGF0V2l0aCA9ICh1c2VybmFtZSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ0hBVF9XSVRILFxyXG4gIHBheWxvYWQ6IHVzZXJuYW1lLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGF0ZWRlZFVzZXJzID0gKG5hdikgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ0hBVEVEX1VTRVJTLFxyXG4gIHBheWxvYWQ6IG5hdixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdW5tb3VudENvbXBvbmVudCA9IChhbnkpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuQ0hBVF9DT01QT05FTlRfVU5NT1VOVCxcclxuICBwYXlsb2FkOiBhbnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE5ld1VTZXIgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5BRERfTkVXX1VTRVIsXHJcbiAgcGF5bG9hZDogcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUmVjZW50VXNlciA9IChpZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5SRU1PVkVfVVNFUixcclxuICBwYXlsb2FkOiBpZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTGFzdE1lc3NhZ2VUaW1lID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuTEFTVF9NRVNTQUdFX1RJTUUsXHJcbiAgcGF5bG9hZDogcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgYWNjb3VudHMvJHtpZH0vdXNlcnNgLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjogY29raWUuQXV0aFRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLlNFVF9VU0VSUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS5kYXRhIH0pO1xyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fRVJST1IsXHJcbiAgICAgIHBheWxvYWQ6IFwiZXJyb3IgaW4gZmV0Y2hpbmcgdXNlcnNcIixcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==