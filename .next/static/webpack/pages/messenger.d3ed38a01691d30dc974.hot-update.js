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
    return console.log("listenining for request", ReceivedPresence);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJYTVBQIiwiamlkIiwidHJhbnNwb3J0cyIsIndlYnNvY2tldCIsImJvc2giLCJyb3N0ZXJWZXIiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kUHJlc2VuY2UiLCJSZWNlaXZlZFByZXNlbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFJQSxNQUFKO0FBRWUsU0FBU0MsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEJDLFFBQTlCLEVBQXdDO0FBQ3JESCxRQUFNLEdBQUdJLG1EQUFBLENBQWtCO0FBQ3pCQyxPQUFHLEVBQUVILFFBRG9CO0FBRXpCQyxZQUFRLEVBQVJBLFFBRnlCO0FBR3pCRyxjQUFVLEVBQUU7QUFDVkMsZUFBUyxFQUFFLDJDQUREO0FBRVZDLFVBQUksRUFBRTtBQUZJLEtBSGE7QUFPekJDLGFBQVMsRUFBRTtBQVBjLEdBQWxCLENBQVQsQ0FEcUQsQ0FVckQ7O0FBQ0FULFFBQU0sQ0FBQ1UsRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQVosVUFBTSxDQUFDYSxZQUFQO0FBQ0QsR0FKRDtBQU1BYixRQUFNLENBQUNVLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLFlBQU07QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0QsR0FGRDtBQUdBWixRQUFNLENBQUNVLEVBQVAsQ0FBVSxXQUFWLEVBQXVCLFVBQUNJLGdCQUFEO0FBQUEsV0FDckJILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDRSxnQkFBdkMsQ0FEcUI7QUFBQSxHQUF2QjtBQUdBLFNBQU9kLE1BQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzZW5nZXIuZDNlZDM4YTAxNjkxZDMwZGM5NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFhNUFAgZnJvbSBcInN0YW56YVwiO1xyXG5sZXQgY2xpZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhdENsaWVudCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjbGllbnQgPSBYTVBQLmNyZWF0ZUNsaWVudCh7XHJcbiAgICBqaWQ6IHVzZXJuYW1lLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICB0cmFuc3BvcnRzOiB7XHJcbiAgICAgIHdlYnNvY2tldDogXCJ3czovL21vbmdvb3NlLm15c21hcnRwYngub3JnOjUyODAvd3MteG1wcFwiLFxyXG4gICAgICBib3NoOiBcImZhbHNlXCIsXHJcbiAgICB9LFxyXG4gICAgcm9zdGVyVmVyOiBcInZlcjE0XCIsXHJcbiAgfSk7XHJcbiAgLy8gY2xpZW50Lm9uKFwiKlwiLCBjb25zb2xlLmxvZyk7XHJcbiAgY2xpZW50Lm9uKFwic2Vzc2lvbjpzdGFydGVkXCIsICgpID0+IHtcclxuICAgIC8vIGNsaWVudC5zdWJzY3JpYmUoXCJzdW1hbnRoQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJzZXNzaW9uIHN0YXJ0ZWRcIik7XHJcbiAgICBjbGllbnQuc2VuZFByZXNlbmNlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcImF1dGg6ZmFpbGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwieG1wcCBhdXRoZW50aWNhdGlvbiBmYWlsZWRcIik7XHJcbiAgfSk7XHJcbiAgY2xpZW50Lm9uKFwic3Vic2NyaWJlXCIsIChSZWNlaXZlZFByZXNlbmNlKSA9PlxyXG4gICAgY29uc29sZS5sb2coXCJsaXN0ZW5pbmluZyBmb3IgcmVxdWVzdFwiLCBSZWNlaXZlZFByZXNlbmNlKVxyXG4gICk7XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9