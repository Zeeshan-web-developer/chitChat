webpackHotUpdate_N_E("pages/messenger",{

/***/ "./stanza/chatClient.js":
/*!******************************!*\
  !*** ./stanza/chatClient.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chatClient; });
/* harmony import */ var stanza__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stanza */ "./node_modules/stanza/module.js");

var client;
function chatClient(username, password) {
  client = stanza__WEBPACK_IMPORTED_MODULE_0__["createClient"]({
    jid: username,
    password: password,
    transports: {
      websocket: "ws://mongoose.mysmartpbx.org:5280/ws-xmpp",
      bosh: "false"
    },
    rosterVer: "ver14"
  }); // client.on("*", console.log);

  client.on("session:started", function () {
    // client.subscribe("sumanth@mongoose.mysmartpbx.org");
    console.log("session started");
    client.sendPresence();
  });
  client.on("auth:failed", function () {
    console.log("xmpp authentication failed");
  });
  client.on("subscribe", function (ReceivedPresence) {
    return client.acceptSubscription(ReceivedPresence.from);
  });
  return client;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJYTVBQIiwiamlkIiwidHJhbnNwb3J0cyIsIndlYnNvY2tldCIsImJvc2giLCJyb3N0ZXJWZXIiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kUHJlc2VuY2UiLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBSUEsTUFBSjtBQUVlLFNBQVNDLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCQyxRQUE5QixFQUF3QztBQUNyREgsUUFBTSxHQUFHSSxtREFBQSxDQUFrQjtBQUN6QkMsT0FBRyxFQUFFSCxRQURvQjtBQUV6QkMsWUFBUSxFQUFSQSxRQUZ5QjtBQUd6QkcsY0FBVSxFQUFFO0FBQ1ZDLGVBQVMsRUFBRSwyQ0FERDtBQUVWQyxVQUFJLEVBQUU7QUFGSSxLQUhhO0FBT3pCQyxhQUFTLEVBQUU7QUFQYyxHQUFsQixDQUFULENBRHFELENBVXJEOztBQUNBVCxRQUFNLENBQUNVLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixZQUFNO0FBQ2pDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FaLFVBQU0sQ0FBQ2EsWUFBUDtBQUNELEdBSkQ7QUFNQWIsUUFBTSxDQUFDVSxFQUFQLENBQVUsYUFBVixFQUF5QixZQUFNO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtBQUNELEdBRkQ7QUFHQVosUUFBTSxDQUFDVSxFQUFQLENBQVUsV0FBVixFQUF1QixVQUFDSSxnQkFBRDtBQUFBLFdBQ3JCZCxNQUFNLENBQUNlLGtCQUFQLENBQTBCRCxnQkFBZ0IsQ0FBQ0UsSUFBM0MsQ0FEcUI7QUFBQSxHQUF2QjtBQUdBLFNBQU9oQixNQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLjJkZGIzMjI0YTgyMWJlMGJjZmI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYTVBQIGZyb20gXCJzdGFuemFcIjtcclxubGV0IGNsaWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXRDbGllbnQodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY2xpZW50ID0gWE1QUC5jcmVhdGVDbGllbnQoe1xyXG4gICAgamlkOiB1c2VybmFtZSxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgdHJhbnNwb3J0czoge1xyXG4gICAgICB3ZWJzb2NrZXQ6IFwid3M6Ly9tb25nb29zZS5teXNtYXJ0cGJ4Lm9yZzo1MjgwL3dzLXhtcHBcIixcclxuICAgICAgYm9zaDogXCJmYWxzZVwiLFxyXG4gICAgfSxcclxuICAgIHJvc3RlclZlcjogXCJ2ZXIxNFwiLFxyXG4gIH0pO1xyXG4gIC8vIGNsaWVudC5vbihcIipcIiwgY29uc29sZS5sb2cpO1xyXG4gIGNsaWVudC5vbihcInNlc3Npb246c3RhcnRlZFwiLCAoKSA9PiB7XHJcbiAgICAvLyBjbGllbnQuc3Vic2NyaWJlKFwic3VtYW50aEBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvbiBzdGFydGVkXCIpO1xyXG4gICAgY2xpZW50LnNlbmRQcmVzZW5jZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJhdXRoOmZhaWxlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInhtcHAgYXV0aGVudGljYXRpb24gZmFpbGVkXCIpO1xyXG4gIH0pO1xyXG4gIGNsaWVudC5vbihcInN1YnNjcmliZVwiLCAoUmVjZWl2ZWRQcmVzZW5jZSkgPT5cclxuICAgIGNsaWVudC5hY2NlcHRTdWJzY3JpcHRpb24oUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICk7XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9