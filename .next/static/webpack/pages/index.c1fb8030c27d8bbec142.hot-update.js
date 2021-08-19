webpackHotUpdate_N_E("pages/index",{

/***/ "./stanza/chatClient.js":
/*!******************************!*\
  !*** ./stanza/chatClient.js ***!
  \******************************/
/*! exports provided: default, getRosterItems, sendNewMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chatClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRosterItems", function() { return getRosterItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendNewMessage", function() { return sendNewMessage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var stanza__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stanza */ "./node_modules/stanza/module.js");
/* harmony import */ var _containers_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/leftSidebar/datetime */ "./containers/leftSidebar/datetime.js");
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store/store */ "./redux/store/store.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");






var client;
function chatClient(username, password) {
  console.log("connection request");
  client = stanza__WEBPACK_IMPORTED_MODULE_2__["createClient"]({
    jid: username,
    password: password,
    transports: {
      websocket: "ws://mongoose.mysmartpbx.org:5280/ws-xmpp",
      bosh: "false"
    },
    rosterVer: "ver14"
  }); //client.on("*", console.log);

  client.on("session:started", function () {
    console.log("session started");
    getContacts();
    client.sendPresence();
  }); //pinging the server

  setInterval(function () {
    var ifConnected = window.navigator.onLine;
    var reconnect;

    if (ifConnected) {
      client.ping(username).then(function (message) {
        console.log("Messaage ping");
      })["catch"](function (error) {
        var user = localStorage.getItem("username");
        var pass = localStorage.getItem("password");
        console.log("ping error", error);
        reconnect = chatClient(user, pass);
        console.log("connect", user, pass); //reconnect.disconnect();

        setTimeout(function () {
          console.log("after error connect to the server after 60 secnods");
          reconnect.connect();
        }, 60000);
      });
    } else {
      console.log("Connection not available");
      reconnect.disconnect();
    }
  }, 5000);
  client.on("auth:failed", function () {
    console.log("xmpp authentication failed");
    _redux_store_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["setLoginError"])("INCORRECT USERNAME OR PASSWORD"));
  });
  client.on("subscribe", function (ReceivedPresence) {
    console.log("received request from", ReceivedPresence);
    client.acceptSubscription(ReceivedPresence.from);
    client.subscribe(ReceivedPresence.from, function () {
      return console.log("subscrption request sent back to" + ReceivedPresence.from);
    });
  });
  client.on("presence", function (presence) {
    if (presence.hasOwnProperty("type") && presence.type == "unavailable") {
      //here we need to update user status that user is offline
      console.log("i am unavailable", presence.from);
      _redux_store_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["updateUserStatus"])({
        id: presence.from.split("@")[0],
        onlineStatus: "offline"
      }));
    } else if (!presence.hasOwnProperty("type")) {
      //here we need to update user status that user is online
      console.log("i am available", presence.from);
      _redux_store_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["updateUserStatus"])({
        id: presence.from.split("@")[0],
        onlineStatus: "online"
      }));
    }
  });
  client.on("unavailable", function (presence) {// console.log(presence.from + " is offline");
  }); // client.on("available", (presence) => {
  //   console.log("available", presence);
  // });
  //here we listen incoming messages

  client.on("message", function (newMessage) {
    newMessage["messageTime"] = Object(_containers_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_3__["default"])();
    newMessage["direction"] = "received";
    newMessage["from"] = newMessage.from.split("/")[0];
    _redux_store_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["setNewMessage"])(newMessage));
  });
  return client;
}
var roster;

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
            roster = contacts.items;

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

var getRosterItems = function getRosterItems() {
  return roster;
};
var sendNewMessage = function sendNewMessage(newMessage) {
  client && client.sendMessage(newMessage);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiWE1QUCIsImppZCIsInRyYW5zcG9ydHMiLCJ3ZWJzb2NrZXQiLCJib3NoIiwicm9zdGVyVmVyIiwib24iLCJnZXRDb250YWN0cyIsInNlbmRQcmVzZW5jZSIsInNldEludGVydmFsIiwiaWZDb25uZWN0ZWQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJyZWNvbm5lY3QiLCJwaW5nIiwidGhlbiIsIm1lc3NhZ2UiLCJlcnJvciIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFzcyIsInNldFRpbWVvdXQiLCJjb25uZWN0IiwiZGlzY29ubmVjdCIsInN0b3JlIiwiZGlzcGF0Y2giLCJzZXRMb2dpbkVycm9yIiwiUmVjZWl2ZWRQcmVzZW5jZSIsImFjY2VwdFN1YnNjcmlwdGlvbiIsImZyb20iLCJzdWJzY3JpYmUiLCJwcmVzZW5jZSIsImhhc093blByb3BlcnR5IiwidHlwZSIsInVwZGF0ZVVzZXJTdGF0dXMiLCJpZCIsInNwbGl0Iiwib25saW5lU3RhdHVzIiwibmV3TWVzc2FnZSIsImRhdGVUaW1lIiwic2V0TmV3TWVzc2FnZSIsInJvc3RlciIsImdldFJvc3RlciIsImNvbnRhY3RzIiwiaXRlbXMiLCJnZXRSb3N0ZXJJdGVtcyIsInNlbmROZXdNZXNzYWdlIiwic2VuZE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFJQSxNQUFKO0FBRWUsU0FBU0MsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEJDLFFBQTlCLEVBQXdDO0FBQ3JEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBTCxRQUFNLEdBQUdNLG1EQUFBLENBQWtCO0FBQ3pCQyxPQUFH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Q0MsS0FBbEI7O0FBSGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVh2QyxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCOztBQU1PLElBQU13QyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDbEMsU0FBT0osTUFBUDtBQUNELENBRk07QUFJQSxJQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNSLFVBQUQsRUFBZ0I7QUFDNUM5QyxRQUFNLElBQUlBLE1BQU0sQ0FBQ3VELFdBQVAsQ0FBbUJULFVBQW5CLENBQVY7QUFDRCxDQUZNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMxZmI4MDMwYzI3ZDhiYmVjMTQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYTVBQIGZyb20gXCJzdGFuemFcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuLi9jb250YWluZXJzL2xlZnRTaWRlYmFyL2RhdGV0aW1lXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVVc2VyU3RhdHVzLFxyXG4gIHNldExvZ2luRXJyb3IsXHJcbiAgc2V0TmV3TWVzc2FnZSxcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5sZXQgY2xpZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhdENsaWVudCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zb2xlLmxvZyhcImNvbm5lY3Rpb24gcmVxdWVzdFwiKTtcclxuICBjbGllbnQgPSBYTVBQLmNyZWF0ZUNsaWVudCh7XHJcbiAgICBqaWQ6IHVzZXJuYW1lLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICB0cmFuc3BvcnRzOiB7XHJcbiAgICAgIHdlYnNvY2tldDogXCJ3czovL21vbmdvb3NlLm15c21hcnRwYngub3JnOjUyODAvd3MteG1wcFwiLFxyXG4gICAgICBib3NoOiBcImZhbHNlXCIsXHJcbiAgICB9LFxyXG4gICAgcm9zdGVyVmVyOiBcInZlcjE0XCIsXHJcbiAgfSk7XHJcbiAgLy9jbGllbnQub24oXCIqXCIsIGNvbnNvbGUubG9nKTtcclxuICBjbGllbnQub24oXCJzZXNzaW9uOnN0YXJ0ZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzZXNzaW9uIHN0YXJ0ZWRcIik7XHJcbiAgICBnZXRDb250YWN0cygpO1xyXG4gICAgY2xpZW50LnNlbmRQcmVzZW5jZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvL3BpbmdpbmcgdGhlIHNlcnZlclxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHZhciBpZkNvbm5lY3RlZCA9IHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lO1xyXG4gICAgbGV0IHJlY29ubmVjdDtcclxuICAgIGlmIChpZkNvbm5lY3RlZCkge1xyXG4gICAgICBjbGllbnRcclxuICAgICAgICAucGluZyh1c2VybmFtZSlcclxuICAgICAgICAudGhlbigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWFnZSBwaW5nXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcbiAgICAgICAgICBjb25zdCBwYXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzd29yZFwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGluZyBlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICByZWNvbm5lY3QgPSBjaGF0Q2xpZW50KHVzZXIsIHBhc3MpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0XCIsIHVzZXIsIHBhc3MpO1xyXG4gICAgICAgICAgLy9yZWNvbm5lY3QuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZXJyb3IgY29ubmVjdCB0byB0aGUgc2VydmVyIGFmdGVyIDYwIHNlY25vZHNcIik7XHJcbiAgICAgICAgICAgIHJlY29ubmVjdC5jb25uZWN0KCk7XHJcbiAgICAgICAgICB9LCA2MDAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gbm90IGF2YWlsYWJsZVwiKTtcclxuICAgICAgcmVjb25uZWN0LmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9LCA1MDAwKTtcclxuXHJcbiAgY2xpZW50Lm9uKFwiYXV0aDpmYWlsZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ4bXBwIGF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHNldExvZ2luRXJyb3IoXCJJTkNPUlJFQ1QgVVNFUk5BTUUgT1IgUEFTU1dPUkRcIikpO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgcmVxdWVzdCBmcm9tXCIsIFJlY2VpdmVkUHJlc2VuY2UpO1xyXG4gICAgY2xpZW50LmFjY2VwdFN1YnNjcmlwdGlvbihSZWNlaXZlZFByZXNlbmNlLmZyb20pO1xyXG4gICAgY2xpZW50LnN1YnNjcmliZShSZWNlaXZlZFByZXNlbmNlLmZyb20sICgpID0+XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NycHRpb24gcmVxdWVzdCBzZW50IGJhY2sgdG9cIiArIFJlY2VpdmVkUHJlc2VuY2UuZnJvbSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInByZXNlbmNlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gICAgaWYgKHByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSAmJiBwcmVzZW5jZS50eXBlID09IFwidW5hdmFpbGFibGVcIikge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9mZmxpbmVcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIHVuYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoIXByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSkge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9ubGluZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImkgYW0gYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJ1bmF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByZXNlbmNlLmZyb20gKyBcIiBpcyBvZmZsaW5lXCIpO1xyXG4gIH0pO1xyXG4gIC8vIGNsaWVudC5vbihcImF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiYXZhaWxhYmxlXCIsIHByZXNlbmNlKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy9oZXJlIHdlIGxpc3RlbiBpbmNvbWluZyBtZXNzYWdlc1xyXG4gIGNsaWVudC5vbihcIm1lc3NhZ2VcIiwgKG5ld01lc3NhZ2UpID0+IHtcclxuICAgIG5ld01lc3NhZ2VbXCJtZXNzYWdlVGltZVwiXSA9IGRhdGVUaW1lKCk7XHJcbiAgICBuZXdNZXNzYWdlW1wiZGlyZWN0aW9uXCJdID0gXCJyZWNlaXZlZFwiO1xyXG4gICAgbmV3TWVzc2FnZVtcImZyb21cIl0gPSBuZXdNZXNzYWdlLmZyb20uc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goc2V0TmV3TWVzc2FnZShuZXdNZXNzYWdlKSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG5cclxubGV0IHJvc3RlcjtcclxuY29uc3QgZ2V0Q29udGFjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhY3RzID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG5cclxuICByb3N0ZXIgPSBjb250YWN0cy5pdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSb3N0ZXJJdGVtcyA9ICgpID0+IHtcclxuICByZXR1cm4gcm9zdGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmROZXdNZXNzYWdlID0gKG5ld01lc3NhZ2UpID0+IHtcclxuICBjbGllbnQgJiYgY2xpZW50LnNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9