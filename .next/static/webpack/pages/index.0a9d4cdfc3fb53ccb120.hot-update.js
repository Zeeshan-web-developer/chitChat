webpackHotUpdate_N_E("pages/index",{

/***/ "./stanza/chatClient.js":
/*!******************************!*\
  !*** ./stanza/chatClient.js ***!
  \******************************/
/*! exports provided: default, getContacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chatClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContacts", function() { return getContacts; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var stanza__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stanza */ "./node_modules/stanza/module.js");



var client;
function chatClient(username, password) {
  client = stanza__WEBPACK_IMPORTED_MODULE_2__["createClient"]({
    jid: username,
    password: password,
    transports: {
      websocket: "ws://mongoose.mysmartpbx.org:5280/ws-xmpp",
      bosh: "false"
    },
    rosterVer: "ver14"
  });
  client.on("*", console.log);
  client.on("session:started", function () {
    // client.subscribe("sumanth@mongoose.mysmartpbx.org");
    console.log("session started");
    getContacts();
    client.sendPresence();
  });
  client.on("auth:failed", function () {
    console.log("xmpp authentication failed");
  });
  return client;
}
var getContacts = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var contacts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.getRoster();

          case 2:
            contacts = _context.sent;
            console.log("all contacts ", contacts.items);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getContacts() {
    return _ref.apply(this, arguments);
  };
}();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJYTVBQIiwiamlkIiwidHJhbnNwb3J0cyIsIndlYnNvY2tldCIsImJvc2giLCJyb3N0ZXJWZXIiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb250YWN0cyIsInNlbmRQcmVzZW5jZSIsImdldFJvc3RlciIsImNvbnRhY3RzIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQUlBLE1BQUo7QUFFZSxTQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE4QkMsUUFBOUIsRUFBd0M7QUFDckRILFFBQU0sR0FBR0ksbURBQUEsQ0FBa0I7QUFDekJDLE9BQUcsRUFBRUgsUUFEb0I7QUFFekJDLFlBQVEsRUFBUkEsUUFGeUI7QUFHekJHLGNBQVUsRUFBRTtBQUNWQyxlQUFTLEVBQUUsMkNBREQ7QUFFVkMsVUFBSSxFQUFFO0FBRkksS0FIYTtBQU96QkMsYUFBUyxFQUFFO0FBUGMsR0FBbEIsQ0FBVDtBQVNBVCxRQUFNLENBQUNVLEVBQVAsQ0FBVSxHQUFWLEVBQWVDLE9BQU8sQ0FBQ0MsR0FBdkI7QUFDQVosUUFBTSxDQUFDVSxFQUFQLENBQVUsaUJBQVYsRUFBNkIsWUFBTTtBQUNqQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBQyxlQUFXO0FBQ1hiLFVBQU0sQ0FBQ2MsWUFBUDtBQUNELEdBTEQ7QUFPQWQsUUFBTSxDQUFDVSxFQUFQLENBQVUsYUFBVixFQUF5QixZQUFNO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtBQUNELEdBRkQ7QUFHQSxTQUFPWixNQUFQO0FBQ0Q7QUFFTSxJQUFNYSxXQUFXO0FBQUEsOExBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRmIsTUFBTSxDQUFDZSxTQUFQLEVBREU7O0FBQUE7QUFDbkJDLG9CQURtQjtBQUV6QkwsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJJLFFBQVEsQ0FBQ0MsS0FBdEM7O0FBRnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhKLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGE5ZDRjZGZjM2ZiNTNjY2IxMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFhNUFAgZnJvbSBcInN0YW56YVwiO1xyXG5sZXQgY2xpZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhdENsaWVudCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjbGllbnQgPSBYTVBQLmNyZWF0ZUNsaWVudCh7XHJcbiAgICBqaWQ6IHVzZXJuYW1lLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICB0cmFuc3BvcnRzOiB7XHJcbiAgICAgIHdlYnNvY2tldDogXCJ3czovL21vbmdvb3NlLm15c21hcnRwYngub3JnOjUyODAvd3MteG1wcFwiLFxyXG4gICAgICBib3NoOiBcImZhbHNlXCIsXHJcbiAgICB9LFxyXG4gICAgcm9zdGVyVmVyOiBcInZlcjE0XCIsXHJcbiAgfSk7XHJcbiAgY2xpZW50Lm9uKFwiKlwiLCBjb25zb2xlLmxvZyk7XHJcbiAgY2xpZW50Lm9uKFwic2Vzc2lvbjpzdGFydGVkXCIsICgpID0+IHtcclxuICAgIC8vIGNsaWVudC5zdWJzY3JpYmUoXCJzdW1hbnRoQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJzZXNzaW9uIHN0YXJ0ZWRcIik7XHJcbiAgICBnZXRDb250YWN0cygpO1xyXG4gICAgY2xpZW50LnNlbmRQcmVzZW5jZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJhdXRoOmZhaWxlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInhtcHAgYXV0aGVudGljYXRpb24gZmFpbGVkXCIpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb250YWN0cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb250YWN0cyA9IGF3YWl0IGNsaWVudC5nZXRSb3N0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhcImFsbCBjb250YWN0cyBcIiwgY29udGFjdHMuaXRlbXMpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9