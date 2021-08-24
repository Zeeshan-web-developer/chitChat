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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var stanza__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stanza */ "./node_modules/stanza/module.js");
/* harmony import */ var _containers_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/leftSidebar/datetime */ "./containers/leftSidebar/datetime.js");
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store/store */ "./redux/store/store.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");







var client;
function chatClient(username, password) {
  console.log("connection request");
  client = stanza__WEBPACK_IMPORTED_MODULE_3__["createClient"]({
    jid: username,
    password: password,
    transports: {
      websocket: "ws://mongoose.mysmartpbx.org:5280/ws-xmpp",
      bosh: "false"
    },
    rosterVer: "ver14",
    timeout: 60
  }); //client.on("*", console.log);

  client.on("session:started", function () {
    console.log("session started");
    getContacts();
    client.sendPresence();
  }); //pinging the server

  setInterval(function () {
    var ifConnected = window.navigator.onLine;
    var reconnect;
    var user = localStorage.getItem("username");
    var pass = localStorage.getItem("password");

    if (ifConnected) {
      client.ping(username).then(function (message) {
        console.log("Messaage ping");
      })["catch"](function (error) {
        console.log("ping error", error);
        reconnect = chatClient(user, pass);
        console.log("connect", user, pass); //reconnect.disconnect();

        reconnect.connect();
        setTimeout(function () {
          console.log("after error connect to the server after 60 secnods");
          reconnect.connect();
        }, 60000);
      });
    } else {
      console.log("Connection not available");
      client.disconnect();
    }
  }, 5000);
  client.on("auth:failed", function () {
    console.log("xmpp authentication failed");
    _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["setLoginError"])("INCORRECT USERNAME OR PASSWORD"));
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
      _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["updateUserStatus"])({
        id: presence.from.split("@")[0],
        onlineStatus: "offline"
      }));
    } else if (!presence.hasOwnProperty("type")) {
      //here we need to update user status that user is online
      console.log("i am available", presence.from);
      _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["updateUserStatus"])({
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
    console.log("on message", newMessage);
    receivedMessage(newMessage);
  });
  return client;
}
var roster;

var getContacts = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var contacts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
  console.log("at send" + newMessage);
  client && client.sendMessage(newMessage);
};

var receivedMessage = function receivedMessage(newMessage) {
  var recentUsers = _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].getState().user.chatedUsers;
  var found = false;
  console.log("rec", newMessage);
  newMessage["messageTime"] = Object(_containers_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_4__["default"])();
  newMessage["direction"] = "received";
  newMessage["from"] = newMessage.from.split("/")[0];
  newMessage["fromto"] = newMessage.from;
  var splitBody = newMessage && newMessage.body.split("&");
  newMessage["body"] = splitBody && splitBody[0];
  newMessage["first_name"] = splitBody.length > 0 && splitBody[1].split(":")[1];

  for (var i = 0; i < recentUsers.length; i++) {
    if (recentUsers[i].id === newMessage.from) {
      found = true;
      break;
    }
  }

  if (!found) {
    recentUsers.map(function (ci) {
      if (!ci.hasOwnProperty("mesg")) {
        _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["removeRecentUser"])(ci.id));
      }
    });
    _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["addNewUSer"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      id: newMessage.from,
      first_name: newMessage.first_name,
      status: "online",
      onlineStatus: "online"
    }, "status", "online")));
  }

  _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["setNewMessage"])(newMessage));
  _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["setLastMessage"])({
    id: newMessage.from,
    message: newMessage.body,
    time: Object(_containers_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiWE1QUCIsImppZCIsInRyYW5zcG9ydHMiLCJ3ZWJzb2NrZXQiLCJib3NoIiwicm9zdGVyVmVyIiwidGltZW91dCIsIm9uIiwiZ2V0Q29udGFjdHMiLCJzZW5kUHJlc2VuY2UiLCJzZXRJbnRlcnZhbCIsImlmQ29ubmVjdGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVjb25uZWN0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXNzIiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25uZWN0Iiwic2V0VGltZW91dCIsImRpc2Nvbm5lY3QiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0TG9naW5FcnJvciIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJmcm9tIiwic3Vic2NyaWJlIiwicHJlc2VuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiLCJ1cGRhdGVVc2VyU3RhdHVzIiwiaWQiLCJzcGxpdCIsIm9ubGluZVN0YXR1cyIsIm5ld01lc3NhZ2UiLCJyZWNlaXZlZE1lc3NhZ2UiLCJyb3N0ZXIiLCJnZXRSb3N0ZXIiLCJjb250YWN0cyIsIml0ZW1zIiwiZ2V0Um9zdGVySXRlbXMiLCJzZW5kTmV3TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwicmVjZW50VXNlcnMiLCJnZXRTdGF0ZSIsImNoYXRlZFVzZXJzIiwiZm91bmQiLCJkYXRlVGltZSIsInNwbGl0Qm9keSIsImJvZHkiLCJsZW5ndGgiLCJpIiwibWFwIiwiY2kiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJzZXROZXdNZXNzYWdlIiwic2V0TGFzdE1lc3NhZ2UiLCJ0aW1l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TUFBRSxFQUFFRyxVQUFVLENBQUNULElBREY7QUFFYlYsV0FBTyxFQUFFbUIsVUFBVSxDQUFDZSxJQUZQO0FBR2JXLFFBQUksRUFBRWIsZ0ZBQVE7QUFIRCxHQUFELENBRGhCO0FBT0QsQ0EzQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLjRmYmRmNjgxNGU0M2UzM2RkZjk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYTVBQIGZyb20gXCJzdGFuemFcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuLi9jb250YWluZXJzL2xlZnRTaWRlYmFyL2RhdGV0aW1lXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVVc2VyU3RhdHVzLFxyXG4gIHNldExvZ2luRXJyb3IsXHJcbiAgc2V0TmV3TWVzc2FnZSxcclxuICBzZXRMYXN0TWVzc2FnZSxcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIGFkZE5ld1VTZXIsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxubGV0IGNsaWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXRDbGllbnQodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY29uc29sZS5sb2coXCJjb25uZWN0aW9uIHJlcXVlc3RcIik7XHJcbiAgY2xpZW50ID0gWE1QUC5jcmVhdGVDbGllbnQoe1xyXG4gICAgamlkOiB1c2VybmFtZSxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgdHJhbnNwb3J0czoge1xyXG4gICAgICB3ZWJzb2NrZXQ6IFwid3M6Ly9tb25nb29zZS5teXNtYXJ0cGJ4Lm9yZzo1MjgwL3dzLXhtcHBcIixcclxuICAgICAgYm9zaDogXCJmYWxzZVwiLFxyXG4gICAgfSxcclxuICAgIHJvc3RlclZlcjogXCJ2ZXIxNFwiLFxyXG4gICAgdGltZW91dDogNjAsXHJcbiAgfSk7XHJcbiAgLy9jbGllbnQub24oXCIqXCIsIGNvbnNvbGUubG9nKTtcclxuICBjbGllbnQub24oXCJzZXNzaW9uOnN0YXJ0ZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzZXNzaW9uIHN0YXJ0ZWRcIik7XHJcbiAgICBnZXRDb250YWN0cygpO1xyXG4gICAgY2xpZW50LnNlbmRQcmVzZW5jZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvL3BpbmdpbmcgdGhlIHNlcnZlclxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHZhciBpZkNvbm5lY3RlZCA9IHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lO1xyXG4gICAgbGV0IHJlY29ubmVjdDtcclxuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xyXG4gICAgY29uc3QgcGFzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc3dvcmRcIik7XHJcbiAgICBpZiAoaWZDb25uZWN0ZWQpIHtcclxuICAgICAgY2xpZW50XHJcbiAgICAgICAgLnBpbmcodXNlcm5hbWUpXHJcbiAgICAgICAgLnRoZW4oKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FhZ2UgcGluZ1wiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGluZyBlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICByZWNvbm5lY3QgPSBjaGF0Q2xpZW50KHVzZXIsIHBhc3MpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0XCIsIHVzZXIsIHBhc3MpO1xyXG4gICAgICAgICAgLy9yZWNvbm5lY3QuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgcmVjb25uZWN0LmNvbm5lY3QoKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIGVycm9yIGNvbm5lY3QgdG8gdGhlIHNlcnZlciBhZnRlciA2MCBzZWNub2RzXCIpO1xyXG4gICAgICAgICAgICByZWNvbm5lY3QuY29ubmVjdCgpO1xyXG4gICAgICAgICAgfSwgNjAwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgIGNsaWVudC5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgfSwgNTAwMCk7XHJcblxyXG4gIGNsaWVudC5vbihcImF1dGg6ZmFpbGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwieG1wcCBhdXRoZW50aWNhdGlvbiBmYWlsZWRcIik7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChzZXRMb2dpbkVycm9yKFwiSU5DT1JSRUNUIFVTRVJOQU1FIE9SIFBBU1NXT1JEXCIpKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwic3Vic2NyaWJlXCIsIChSZWNlaXZlZFByZXNlbmNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIHJlcXVlc3QgZnJvbVwiLCBSZWNlaXZlZFByZXNlbmNlKTtcclxuICAgIGNsaWVudC5hY2NlcHRTdWJzY3JpcHRpb24oUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKTtcclxuICAgIGNsaWVudC5zdWJzY3JpYmUoUmVjZWl2ZWRQcmVzZW5jZS5mcm9tLCAoKSA9PlxyXG4gICAgICBjb25zb2xlLmxvZyhcInN1YnNjcnB0aW9uIHJlcXVlc3Qgc2VudCBiYWNrIHRvXCIgKyBSZWNlaXZlZFByZXNlbmNlLmZyb20pXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJwcmVzZW5jZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAgIGlmIChwcmVzZW5jZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikgJiYgcHJlc2VuY2UudHlwZSA9PSBcInVuYXZhaWxhYmxlXCIpIHtcclxuICAgICAgLy9oZXJlIHdlIG5lZWQgdG8gdXBkYXRlIHVzZXIgc3RhdHVzIHRoYXQgdXNlciBpcyBvZmZsaW5lXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSB1bmF2YWlsYWJsZVwiLCBwcmVzZW5jZS5mcm9tKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdXBkYXRlVXNlclN0YXR1cyh7XHJcbiAgICAgICAgICBpZDogcHJlc2VuY2UuZnJvbS5zcGxpdChcIkBcIilbMF0sXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib2ZmbGluZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKCFwcmVzZW5jZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikpIHtcclxuICAgICAgLy9oZXJlIHdlIG5lZWQgdG8gdXBkYXRlIHVzZXIgc3RhdHVzIHRoYXQgdXNlciBpcyBvbmxpbmVcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIGF2YWlsYWJsZVwiLCBwcmVzZW5jZS5mcm9tKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdXBkYXRlVXNlclN0YXR1cyh7XHJcbiAgICAgICAgICBpZDogcHJlc2VuY2UuZnJvbS5zcGxpdChcIkBcIilbMF0sXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwidW5hdmFpbGFibGVcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcmVzZW5jZS5mcm9tICsgXCIgaXMgb2ZmbGluZVwiKTtcclxuICB9KTtcclxuICAvLyBjbGllbnQub24oXCJhdmFpbGFibGVcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImF2YWlsYWJsZVwiLCBwcmVzZW5jZSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vaGVyZSB3ZSBsaXN0ZW4gaW5jb21pbmcgbWVzc2FnZXNcclxuICBjbGllbnQub24oXCJtZXNzYWdlXCIsIChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uIG1lc3NhZ2VcIiwgbmV3TWVzc2FnZSk7XHJcbiAgICByZWNlaXZlZE1lc3NhZ2UobmV3TWVzc2FnZSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG5cclxubGV0IHJvc3RlcjtcclxuY29uc3QgZ2V0Q29udGFjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhY3RzID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG5cclxuICByb3N0ZXIgPSBjb250YWN0cy5pdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSb3N0ZXJJdGVtcyA9ICgpID0+IHtcclxuICByZXR1cm4gcm9zdGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmROZXdNZXNzYWdlID0gKG5ld01lc3NhZ2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImF0IHNlbmRcIiArIG5ld01lc3NhZ2UpO1xyXG4gIGNsaWVudCAmJiBjbGllbnQuc2VuZE1lc3NhZ2UobmV3TWVzc2FnZSk7XHJcbn07XHJcblxyXG5jb25zdCByZWNlaXZlZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmNoYXRlZFVzZXJzO1xyXG4gIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gIGNvbnNvbGUubG9nKFwicmVjXCIsIG5ld01lc3NhZ2UpO1xyXG4gIG5ld01lc3NhZ2VbXCJtZXNzYWdlVGltZVwiXSA9IGRhdGVUaW1lKCk7XHJcbiAgbmV3TWVzc2FnZVtcImRpcmVjdGlvblwiXSA9IFwicmVjZWl2ZWRcIjtcclxuICBuZXdNZXNzYWdlW1wiZnJvbVwiXSA9IG5ld01lc3NhZ2UuZnJvbS5zcGxpdChcIi9cIilbMF07XHJcbiAgbmV3TWVzc2FnZVtcImZyb210b1wiXSA9IG5ld01lc3NhZ2UuZnJvbTtcclxuICBsZXQgc3BsaXRCb2R5ID0gbmV3TWVzc2FnZSAmJiBuZXdNZXNzYWdlLmJvZHkuc3BsaXQoXCImXCIpO1xyXG4gIG5ld01lc3NhZ2VbXCJib2R5XCJdID0gc3BsaXRCb2R5ICYmIHNwbGl0Qm9keVswXTtcclxuICBuZXdNZXNzYWdlW1wiZmlyc3RfbmFtZVwiXSA9IHNwbGl0Qm9keS5sZW5ndGggPiAwICYmIHNwbGl0Qm9keVsxXS5zcGxpdChcIjpcIilbMV07XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNlbnRVc2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBuZXdNZXNzYWdlLmZyb20pIHtcclxuICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICghZm91bmQpIHtcclxuICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IG5ld01lc3NhZ2UuZmlyc3RfbmFtZSxcclxuICAgICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHN0b3JlLmRpc3BhdGNoKHNldE5ld01lc3NhZ2UobmV3TWVzc2FnZSkpO1xyXG4gIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgc2V0TGFzdE1lc3NhZ2Uoe1xyXG4gICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLmJvZHksXHJcbiAgICAgIHRpbWU6IGRhdGVUaW1lKCksXHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=