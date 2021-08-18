webpackHotUpdate_N_E("pages/messenger",{

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
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");







var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_6__["default"]();
var cokie = cookies.get("credentials");
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
        console.log("connect", user, pass);
        reconnect.disconnect();
        reconnect.connect();
      });
    } else {
      console.log("Connection not available");
      reconnect.disconnect();
    }
  }, 60000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY29va2llcyIsIkNvb2tpZXMiLCJjb2tpZSIsImdldCIsImNsaWVudCIsImNoYXRDbGllbnQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsIlhNUFAiLCJqaWQiLCJ0cmFuc3BvcnRzIiwid2Vic29ja2V0IiwiYm9zaCIsInJvc3RlclZlciIsIm9uIiwiZ2V0Q29udGFjdHMiLCJzZW5kUHJlc2VuY2UiLCJzZXRJbnRlcnZhbCIsImlmQ29ubmVjdGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVjb25uZWN0IiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhc3MiLCJkaXNjb25uZWN0IiwiY29ubmVjdCIsInN0b3JlIiwiZGlzcGF0Y2giLCJzZXRMb2dpbkVycm9yIiwiUmVjZWl2ZWRQcmVzZW5jZSIsImFjY2VwdFN1YnNjcmlwdGlvbiIsImZyb20iLCJzdWJzY3JpYmUiLCJwcmVzZW5jZSIsImhhc093blByb3BlcnR5IiwidHlwZSIsInVwZGF0ZVVzZXJTdGF0dXMiLCJpZCIsInNwbGl0Iiwib25saW5lU3RhdHVzIiwibmV3TWVzc2FnZSIsImRhdGVUaW1lIiwic2V0TmV3TWVzc2FnZSIsInJvc3RlciIsImdldFJvc3RlciIsImNvbnRhY3RzIiwiaXRlbXMiLCJnZXRSb3N0ZXJJdGVtcyIsInNlbmROZXdNZXNzYWdlIiwic2VuZE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQSxJQUFNQSxPQUFPLEdBQUcsSUFBSUMsd0RBQUosRUFBaEI7QUFDQSxJQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLGFBQVosQ0FBZDtBQUNBLElBQUlDLE1BQUo7QUFF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QUFBO0FBQ2RDLG9CQURjO0FBR2xCRixrQkFBTSxHQUFHRSxRQUFRLENBQUNDLEtBQWxCOztBQUhrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYdEMsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjs7QUFNTyxJQUFNdUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ2xDLFNBQU9KLE1BQVA7QUFDRCxDQUZNO0FBSUEsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDUixVQUFELEVBQWdCO0FBQzVDN0MsUUFBTSxJQUFJQSxNQUFNLENBQUNzRCxXQUFQLENBQW1CVCxVQUFuQixDQUFWO0FBQ0QsQ0FGTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzZW5nZXIuMTA3MDY0YmVkNDA5YWVhNzY5MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFhNUFAgZnJvbSBcInN0YW56YVwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvbGVmdFNpZGViYXIvZGF0ZXRpbWVcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVVzZXJTdGF0dXMsXHJcbiAgc2V0TG9naW5FcnJvcixcclxuICBzZXROZXdNZXNzYWdlLFxyXG59IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5jb25zdCBjb2tpZSA9IGNvb2tpZXMuZ2V0KFwiY3JlZGVudGlhbHNcIik7XHJcbmxldCBjbGllbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGF0Q2xpZW50KHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiByZXF1ZXN0XCIpO1xyXG4gIGNsaWVudCA9IFhNUFAuY3JlYXRlQ2xpZW50KHtcclxuICAgIGppZDogdXNlcm5hbWUsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIHRyYW5zcG9ydHM6IHtcclxuICAgICAgd2Vic29ja2V0OiBcIndzOi8vbW9uZ29vc2UubXlzbWFydHBieC5vcmc6NTI4MC93cy14bXBwXCIsXHJcbiAgICAgIGJvc2g6IFwiZmFsc2VcIixcclxuICAgIH0sXHJcbiAgICByb3N0ZXJWZXI6IFwidmVyMTRcIixcclxuICB9KTtcclxuICAvL2NsaWVudC5vbihcIipcIiwgY29uc29sZS5sb2cpO1xyXG4gIGNsaWVudC5vbihcInNlc3Npb246c3RhcnRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gc3RhcnRlZFwiKTtcclxuICAgIGdldENvbnRhY3RzKCk7XHJcbiAgICBjbGllbnQuc2VuZFByZXNlbmNlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcGluZ2luZyB0aGUgc2VydmVyXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdmFyIGlmQ29ubmVjdGVkID0gd2luZG93Lm5hdmlnYXRvci5vbkxpbmU7XHJcbiAgICBsZXQgcmVjb25uZWN0O1xyXG4gICAgaWYgKGlmQ29ubmVjdGVkKSB7XHJcbiAgICAgIGNsaWVudFxyXG4gICAgICAgIC5waW5nKHVzZXJuYW1lKVxyXG4gICAgICAgIC50aGVuKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhYWdlIHBpbmdcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgICAgICAgIGNvbnN0IHBhc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwaW5nIGVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgIHJlY29ubmVjdCA9IGNoYXRDbGllbnQodXNlciwgcGFzcyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RcIiwgdXNlciwgcGFzcyk7XHJcbiAgICAgICAgICByZWNvbm5lY3QuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgcmVjb25uZWN0LmNvbm5lY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICByZWNvbm5lY3QuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIDYwMDAwKTtcclxuXHJcbiAgY2xpZW50Lm9uKFwiYXV0aDpmYWlsZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ4bXBwIGF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHNldExvZ2luRXJyb3IoXCJJTkNPUlJFQ1QgVVNFUk5BTUUgT1IgUEFTU1dPUkRcIikpO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgcmVxdWVzdCBmcm9tXCIsIFJlY2VpdmVkUHJlc2VuY2UpO1xyXG4gICAgY2xpZW50LmFjY2VwdFN1YnNjcmlwdGlvbihSZWNlaXZlZFByZXNlbmNlLmZyb20pO1xyXG4gICAgY2xpZW50LnN1YnNjcmliZShSZWNlaXZlZFByZXNlbmNlLmZyb20sICgpID0+XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NycHRpb24gcmVxdWVzdCBzZW50IGJhY2sgdG9cIiArIFJlY2VpdmVkUHJlc2VuY2UuZnJvbSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInByZXNlbmNlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gICAgaWYgKHByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSAmJiBwcmVzZW5jZS50eXBlID09IFwidW5hdmFpbGFibGVcIikge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9mZmxpbmVcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIHVuYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoIXByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSkge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9ubGluZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImkgYW0gYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJ1bmF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByZXNlbmNlLmZyb20gKyBcIiBpcyBvZmZsaW5lXCIpO1xyXG4gIH0pO1xyXG4gIC8vIGNsaWVudC5vbihcImF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiYXZhaWxhYmxlXCIsIHByZXNlbmNlKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy9oZXJlIHdlIGxpc3RlbiBpbmNvbWluZyBtZXNzYWdlc1xyXG4gIGNsaWVudC5vbihcIm1lc3NhZ2VcIiwgKG5ld01lc3NhZ2UpID0+IHtcclxuICAgIG5ld01lc3NhZ2VbXCJtZXNzYWdlVGltZVwiXSA9IGRhdGVUaW1lKCk7XHJcbiAgICBuZXdNZXNzYWdlW1wiZGlyZWN0aW9uXCJdID0gXCJyZWNlaXZlZFwiO1xyXG4gICAgbmV3TWVzc2FnZVtcImZyb21cIl0gPSBuZXdNZXNzYWdlLmZyb20uc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goc2V0TmV3TWVzc2FnZShuZXdNZXNzYWdlKSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG5cclxubGV0IHJvc3RlcjtcclxuY29uc3QgZ2V0Q29udGFjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhY3RzID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG5cclxuICByb3N0ZXIgPSBjb250YWN0cy5pdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSb3N0ZXJJdGVtcyA9ICgpID0+IHtcclxuICByZXR1cm4gcm9zdGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmROZXdNZXNzYWdlID0gKG5ld01lc3NhZ2UpID0+IHtcclxuICBjbGllbnQgJiYgY2xpZW50LnNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9