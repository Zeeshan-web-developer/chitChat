webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: SET_USER, SET_USER_STATUS, SET_CLIENT, LOGIN_ERROR, LOGIN_LODING, ON_LOGOUT, SET_ACTIVE_TAB, SET_USERS, SET_CHAT_WITH, SET_CHATED_USERS, CHAT_COMPONENT_UNMOUNT, ADD_NEW_USER, REMOVE_USER, LAST_MESSAGE_TIME, SET_ROSTER, UPDATE_USER_STATUS, SET_ALL_USERS, SET_NEW_MESSAGE, SET_LAST_MESSAGE, UPDATE_RECENT_USER_STATUS */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LAST_MESSAGE", function() { return SET_LAST_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_RECENT_USER_STATUS", function() { return UPDATE_RECENT_USER_STATUS; });
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
var SET_LAST_MESSAGE = "SET_LAST_MESSAGE";
var UPDATE_RECENT_USER_STATUS = "UPDATE_RECENT_USER_STATUS";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy90eXBlcy5qcyJdLCJuYW1lcyI6WyJTRVRfVVNFUiIsIlNFVF9VU0VSX1NUQVRVUyIsIlNFVF9DTElFTlQiLCJMT0dJTl9FUlJPUiIsIkxPR0lOX0xPRElORyIsIk9OX0xPR09VVCIsIlNFVF9BQ1RJVkVfVEFCIiwiU0VUX1VTRVJTIiwiU0VUX0NIQVRfV0lUSCIsIlNFVF9DSEFURURfVVNFUlMiLCJDSEFUX0NPTVBPTkVOVF9VTk1PVU5UIiwiQUREX05FV19VU0VSIiwiUkVNT1ZFX1VTRVIiLCJMQVNUX01FU1NBR0VfVElNRSIsIlNFVF9ST1NURVIiLCJVUERBVEVfVVNFUl9TVEFUVVMiLCJTRVRfQUxMX1VTRVJTIiwiU0VUX05FV19NRVNTQUdFIiwiU0VUX0xBU1RfTUVTU0FHRSIsIlVQREFURV9SRUNFTlRfVVNFUl9TVEFUVVMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyx5QkFBeUIsR0FBRywyQkFBbEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40YzkwYjBmYjAzMmVlZTJjNTBiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gXCJTRVRfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJfU1RBVFVTID0gXCJTRVRfVVNFUl9TVEFUVVNcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9DTElFTlQgPSBcIlNFVF9DTElFTlRcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOX0VSUk9SID0gXCJMT0dJTl9FUlJPUlwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fTE9ESU5HID0gXCJMT0dJTl9MT0RJTkdcIjtcclxuZXhwb3J0IGNvbnN0IE9OX0xPR09VVCA9IFwiT05fTE9HT1VUXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQUNUSVZFX1RBQiA9IFwiU0VUX0FDVElWRV9UQUJcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9VU0VSUyA9IFwiU0VUX1VTRVJTXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQ0hBVF9XSVRIID0gXCJTRVRfQ0hBVF9XSVRIXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQ0hBVEVEX1VTRVJTID0gXCJTRVRfQ0hBVEVEX1VTRVJTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFUX0NPTVBPTkVOVF9VTk1PVU5UID0gXCJDSEFUX0NPTVBPTkVOVF9VTk1PVU5UXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfTkVXX1VTRVIgPSBcIkFERF9ORVdfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVIgPSBcIlJFTU9WRV9VU0VSXCI7XHJcbmV4cG9ydCBjb25zdCBMQVNUX01FU1NBR0VfVElNRSA9IFwiTEFTVF9NRVNTQUdFX1RJTUVcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9ST1NURVIgPSBcIlNFVF9ST1NURVJcIjtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX1NUQVRVUyA9IFwiVVBEQVRFX1VTRVJfU1RBVFVTXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQUxMX1VTRVJTID0gXCJTRVRfQUxMX1VTRVJTXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfTkVXX01FU1NBR0UgPSBcIlNFVF9ORVdfTUVTU0FHRVwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0xBU1RfTUVTU0FHRSA9IFwiU0VUX0xBU1RfTUVTU0FHRVwiO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1JFQ0VOVF9VU0VSX1NUQVRVUyA9IFwiVVBEQVRFX1JFQ0VOVF9VU0VSX1NUQVRVU1wiO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9