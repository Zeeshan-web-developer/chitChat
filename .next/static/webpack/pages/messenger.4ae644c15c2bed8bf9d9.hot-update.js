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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiWE1QUCIsImppZCIsInRyYW5zcG9ydHMiLCJ3ZWJzb2NrZXQiLCJib3NoIiwicm9zdGVyVmVyIiwib24iLCJnZXRDb250YWN0cyIsInNlbmRQcmVzZW5jZSIsInNldEludGVydmFsIiwiaWZDb25uZWN0ZWQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJyZWNvbm5lY3QiLCJwaW5nIiwidGhlbiIsIm1lc3NhZ2UiLCJlcnJvciIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFzcyIsImRpc2Nvbm5lY3QiLCJjb25uZWN0Iiwic3RvcmUiLCJkaXNwYXRjaCIsInNldExvZ2luRXJyb3IiLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSIsInN1YnNjcmliZSIsInByZXNlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJ0eXBlIiwidXBkYXRlVXNlclN0YXR1cyIsImlkIiwic3BsaXQiLCJvbmxpbmVTdGF0dXMiLCJuZXdNZXNzYWdlIiwiZGF0ZVRpbWUiLCJzZXROZXdNZXNzYWdlIiwicm9zdGVyIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMiLCJpdGVtcyIsImdldFJvc3Rlckl0ZW1zIiwic2VuZE5ld01lc3NhZ2UiLCJzZW5kTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQUlBLE1BQUo7QUFFZSxTQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE4QkMsUUFBOUIsRUFBd0M7QUFDckRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0FMLFFBQU0sR0FBR00sbURBQUEsQ0FBa0I7QUFDekJDLE9BQUcsRUFBRUwsUUFEb0I7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Qjs7QUFNTyxJQUFNdUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ2xDLFNBQU9KLE1BQVA7QUFDRCxDQUZNO0FBSUEsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDUixVQUFELEVBQWdCO0FBQzVDN0MsUUFBTSxJQUFJQSxNQUFNLENBQUNzRCxXQUFQLENBQW1CVCxVQUFuQixDQUFWO0FBQ0QsQ0FGTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzZW5nZXIuNGFlNjQ0YzE1YzJiZWQ4YmY5ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFhNUFAgZnJvbSBcInN0YW56YVwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvbGVmdFNpZGViYXIvZGF0ZXRpbWVcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVVzZXJTdGF0dXMsXHJcbiAgc2V0TG9naW5FcnJvcixcclxuICBzZXROZXdNZXNzYWdlLFxyXG59IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmxldCBjbGllbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGF0Q2xpZW50KHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiByZXF1ZXN0XCIpO1xyXG4gIGNsaWVudCA9IFhNUFAuY3JlYXRlQ2xpZW50KHtcclxuICAgIGppZDogdXNlcm5hbWUsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIHRyYW5zcG9ydHM6IHtcclxuICAgICAgd2Vic29ja2V0OiBcIndzOi8vbW9uZ29vc2UubXlzbWFydHBieC5vcmc6NTI4MC93cy14bXBwXCIsXHJcbiAgICAgIGJvc2g6IFwiZmFsc2VcIixcclxuICAgIH0sXHJcbiAgICByb3N0ZXJWZXI6IFwidmVyMTRcIixcclxuICB9KTtcclxuICAvL2NsaWVudC5vbihcIipcIiwgY29uc29sZS5sb2cpO1xyXG4gIGNsaWVudC5vbihcInNlc3Npb246c3RhcnRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gc3RhcnRlZFwiKTtcclxuICAgIGdldENvbnRhY3RzKCk7XHJcbiAgICBjbGllbnQuc2VuZFByZXNlbmNlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcGluZ2luZyB0aGUgc2VydmVyXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdmFyIGlmQ29ubmVjdGVkID0gd2luZG93Lm5hdmlnYXRvci5vbkxpbmU7XHJcbiAgICBsZXQgcmVjb25uZWN0O1xyXG4gICAgaWYgKGlmQ29ubmVjdGVkKSB7XHJcbiAgICAgIGNsaWVudFxyXG4gICAgICAgIC5waW5nKHVzZXJuYW1lKVxyXG4gICAgICAgIC50aGVuKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhYWdlIHBpbmdcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgICAgICAgIGNvbnN0IHBhc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwaW5nIGVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgIHJlY29ubmVjdCA9IGNoYXRDbGllbnQodXNlciwgcGFzcyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RcIiwgdXNlciwgcGFzcyk7XHJcbiAgICAgICAgICByZWNvbm5lY3QuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgcmVjb25uZWN0LmNvbm5lY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICByZWNvbm5lY3QuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIDUwMDApO1xyXG5cclxuICBjbGllbnQub24oXCJhdXRoOmZhaWxlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInhtcHAgYXV0aGVudGljYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goc2V0TG9naW5FcnJvcihcIklOQ09SUkVDVCBVU0VSTkFNRSBPUiBQQVNTV09SRFwiKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInN1YnNjcmliZVwiLCAoUmVjZWl2ZWRQcmVzZW5jZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZWNlaXZlZCByZXF1ZXN0IGZyb21cIiwgUmVjZWl2ZWRQcmVzZW5jZSk7XHJcbiAgICBjbGllbnQuYWNjZXB0U3Vic2NyaXB0aW9uKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSk7XHJcbiAgICBjbGllbnQuc3Vic2NyaWJlKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSwgKCkgPT5cclxuICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JwdGlvbiByZXF1ZXN0IHNlbnQgYmFjayB0b1wiICsgUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwicHJlc2VuY2VcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgICBpZiAocHJlc2VuY2UuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpICYmIHByZXNlbmNlLnR5cGUgPT0gXCJ1bmF2YWlsYWJsZVwiKSB7XHJcbiAgICAgIC8vaGVyZSB3ZSBuZWVkIHRvIHVwZGF0ZSB1c2VyIHN0YXR1cyB0aGF0IHVzZXIgaXMgb2ZmbGluZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImkgYW0gdW5hdmFpbGFibGVcIiwgcHJlc2VuY2UuZnJvbSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHVwZGF0ZVVzZXJTdGF0dXMoe1xyXG4gICAgICAgICAgaWQ6IHByZXNlbmNlLmZyb20uc3BsaXQoXCJAXCIpWzBdLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICghcHJlc2VuY2UuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpKSB7XHJcbiAgICAgIC8vaGVyZSB3ZSBuZWVkIHRvIHVwZGF0ZSB1c2VyIHN0YXR1cyB0aGF0IHVzZXIgaXMgb25saW5lXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSBhdmFpbGFibGVcIiwgcHJlc2VuY2UuZnJvbSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHVwZGF0ZVVzZXJTdGF0dXMoe1xyXG4gICAgICAgICAgaWQ6IHByZXNlbmNlLmZyb20uc3BsaXQoXCJAXCIpWzBdLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInVuYXZhaWxhYmxlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJlc2VuY2UuZnJvbSArIFwiIGlzIG9mZmxpbmVcIik7XHJcbiAgfSk7XHJcbiAgLy8gY2xpZW50Lm9uKFwiYXZhaWxhYmxlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJhdmFpbGFibGVcIiwgcHJlc2VuY2UpO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvL2hlcmUgd2UgbGlzdGVuIGluY29taW5nIG1lc3NhZ2VzXHJcbiAgY2xpZW50Lm9uKFwibWVzc2FnZVwiLCAobmV3TWVzc2FnZSkgPT4ge1xyXG4gICAgbmV3TWVzc2FnZVtcIm1lc3NhZ2VUaW1lXCJdID0gZGF0ZVRpbWUoKTtcclxuICAgIG5ld01lc3NhZ2VbXCJkaXJlY3Rpb25cIl0gPSBcInJlY2VpdmVkXCI7XHJcbiAgICBuZXdNZXNzYWdlW1wiZnJvbVwiXSA9IG5ld01lc3NhZ2UuZnJvbS5zcGxpdChcIi9cIilbMF07XHJcbiAgICBzdG9yZS5kaXNwYXRjaChzZXROZXdNZXNzYWdlKG5ld01lc3NhZ2UpKTtcclxuICB9KTtcclxuICByZXR1cm4gY2xpZW50O1xyXG59XHJcblxyXG5sZXQgcm9zdGVyO1xyXG5jb25zdCBnZXRDb250YWN0cyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgY29udGFjdHMgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcblxyXG4gIHJvc3RlciA9IGNvbnRhY3RzLml0ZW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJvc3Rlckl0ZW1zID0gKCkgPT4ge1xyXG4gIHJldHVybiByb3N0ZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZE5ld01lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xyXG4gIGNsaWVudCAmJiBjbGllbnQuc2VuZE1lc3NhZ2UobmV3TWVzc2FnZSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=