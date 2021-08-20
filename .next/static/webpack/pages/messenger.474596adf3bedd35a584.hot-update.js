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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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
    console.log("newMessage", newMessage);
    var found = false;
    var foundID;
    var recentUsers = _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].getState().user.chatedUsers;
    var usersP = _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].getState().user.allusers;
    console.log("users: " + usersP);
    var filteredUsers = usersP.length > 0 && usersP[0].filter(function (user) {
      return user.id !== newMessage.to;
    });
    newMessage["messageTime"] = Object(_containers_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_4__["default"])();
    newMessage["direction"] = "received";
    newMessage["from"] = newMessage.from.split("/")[0];
    newMessage["fromto"] = newMessage.from;

    for (var i = 0; i < recentUsers.length; i++) {
      if (recentUsers[i].id === newMessage.from) {
        found = true;
        foundID = recentUsers[i].id;
        break;
      }
    }

    var name = filteredUsers && filteredUsers.find(function (item) {
      return item.id === newMessage.from;
    });
    var recivedName = name.first_name;
    console.log("recived name" + filteredUsers);

    if (!found) {
      recentUsers.map(function (ci) {
        if (!ci.hasOwnProperty("mesg")) {
          _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["removeRecentUser"])(ci.id));
        }
      });
      _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["addNewUSer"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
        id: newMessage.from,
        first_name: newMessage.from,
        status: "online",
        onlineStatus: "online"
      }, "status", "online")));
    }

    console.log("user found on message received: " + found);
    _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["setNewMessage"])(newMessage));
    _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["setLastMessage"])({
      id: newMessage.from,
      message: newMessage.body,
      time: Object(_containers_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_4__["default"])()
    }));
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
  client.use(setCustomMessageAttributes());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiWE1QUCIsImppZCIsInRyYW5zcG9ydHMiLCJ3ZWJzb2NrZXQiLCJib3NoIiwicm9zdGVyVmVyIiwidGltZW91dCIsIm9uIiwiZ2V0Q29udGFjdHMiLCJzZW5kUHJlc2VuY2UiLCJzZXRJbnRlcnZhbCIsImlmQ29ubmVjdGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVjb25uZWN0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXNzIiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25uZWN0Iiwic2V0VGltZW91dCIsImRpc2Nvbm5lY3QiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0TG9naW5FcnJvciIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJmcm9tIiwic3Vic2NyaWJlIiwicHJlc2VuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiLCJ1cGRhdGVVc2VyU3RhdHVzIiwiaWQiLCJzcGxpdCIsIm9ubGluZVN0YXR1cyIsIm5ld01lc3NhZ2UiLCJmb3VuZCIsImZvdW5kSUQiLCJyZWNlbnRVc2VycyIsImdldFN0YXRlIiwiY2hhdGVkVXNlcnMiLCJ1c2Vyc1AiLCJhbGx1c2VycyIsImZpbHRlcmVkVXNlcnMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0byIsImRhdGVUaW1lIiwiaSIsIm5hbWUiLCJmaW5kIiwiaXRlbSIsInJlY2l2ZWROYW1lIiwiZmlyc3RfbmFtZSIsIm1hcCIsImNpIiwicmVtb3ZlUmVjZW50VXNlciIsImFkZE5ld1VTZXIiLCJzdGF0dXMiLCJzZXROZXdNZXNzYWdlIiwic2V0TGFzdE1lc3NhZ2UiLCJib2R5IiwidGltZSIsInJvc3RlciIsImdldFJvc3RlciIsImNvbnRhY3RzIiwiaXRlbXMiLCJnZXRSb3N0ZXJJdGVtcyIsInNlbmROZXdNZXNzYWdlIiwidXNlIiwic2V0Q3VzdG9tTWVzc2FnZUF0dHJpYnV0ZXMiLCJzZW5kTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBSUEsTUFBSjtBQUVlLFNBQVNDLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCQyxRQUE5QixFQUF3QztBQUNyREMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUwsUUFBTSxHQUFHTSxtREFBQSxDQUFrQjtBQUN6QkMsT0FBRyxFQUFFTCxRQURvQjtBQUV6QkMsWUFBUSxFQUFSQSxRQUZ5QjtBQUd6QkssY0FBVSxFQUFFO0FBQ1ZDLGVBQVMsRUFBRSwyQ0FERDtBQUVWQyxVQUFJLEVBQUU7QUFGSSxLQUhhO0FBT3pCQyxhQUFTLEVBQUUsT0FQYztBQVF6QkMsV0FBTyxFQUFFO0FBUmdCLEdBQWxCLENBQVQsQ0FGcUQsQ0FZckQ7O0FBQ0FaLFFBQU0sQ0FBQ2EsRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakNULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FTLGVBQVc7QUFDWGQsVUFBTSxDQUFDZSxZQUFQO0FBQ0QsR0FKRCxFQWJxRCxDQW1CckQ7O0FBQ0FDLGFBQVcsQ0FBQyxZQUFNO0FBQ2hCLFFBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxNQUFuQztBQUNBLFFBQUlDLFNBQUo7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFiO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBYjs7QUFDQSxRQUFJUCxXQUFKLEVBQWlCO0FBQ2ZqQixZQUFNLENBQ0gwQixJQURILENBQ1F4QixRQURSLEVBRUd5QixJQUZILENBRVEsVUFBQ0MsT0FBRCxFQUFhO0FBQ2pC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QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDR2QsTUFBTSxDQUFDNEUsU0FBUCxFQURIOztBQUFBO0FBQ2RDLG9CQURjO0FBR2xCRixrQkFBTSxHQUFHRSxRQUFRLENBQUNDLEtBQWxCOztBQUhrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYaEUsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjs7QUFNTyxJQUFNaUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ2xDLFNBQU9KLE1BQVA7QUFDRCxDQUZNO0FBSUEsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDakMsVUFBRCxFQUFnQjtBQUM1Qy9DLFFBQU0sQ0FBQ2lGLEdBQVAsQ0FBV0MsMEJBQTBCLEVBQXJDO0FBQ0FsRixRQUFNLElBQUlBLE1BQU0sQ0FBQ21GLFdBQVAsQ0FBbUJwQyxVQUFuQixDQUFWO0FBQ0QsQ0FITSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzZW5nZXIuNDc0NTk2YWRmM2JlZGQzNWE1ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFhNUFAgZnJvbSBcInN0YW56YVwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvbGVmdFNpZGViYXIvZGF0ZXRpbWVcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVVzZXJTdGF0dXMsXHJcbiAgc2V0TG9naW5FcnJvcixcclxuICBzZXROZXdNZXNzYWdlLFxyXG4gIHNldExhc3RNZXNzYWdlLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbiAgYWRkTmV3VVNlcixcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5sZXQgY2xpZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhdENsaWVudCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zb2xlLmxvZyhcImNvbm5lY3Rpb24gcmVxdWVzdFwiKTtcclxuICBjbGllbnQgPSBYTVBQLmNyZWF0ZUNsaWVudCh7XHJcbiAgICBqaWQ6IHVzZXJuYW1lLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICB0cmFuc3BvcnRzOiB7XHJcbiAgICAgIHdlYnNvY2tldDogXCJ3czovL21vbmdvb3NlLm15c21hcnRwYngub3JnOjUyODAvd3MteG1wcFwiLFxyXG4gICAgICBib3NoOiBcImZhbHNlXCIsXHJcbiAgICB9LFxyXG4gICAgcm9zdGVyVmVyOiBcInZlcjE0XCIsXHJcbiAgICB0aW1lb3V0OiA2MCxcclxuICB9KTtcclxuICAvL2NsaWVudC5vbihcIipcIiwgY29uc29sZS5sb2cpO1xyXG4gIGNsaWVudC5vbihcInNlc3Npb246c3RhcnRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gc3RhcnRlZFwiKTtcclxuICAgIGdldENvbnRhY3RzKCk7XHJcbiAgICBjbGllbnQuc2VuZFByZXNlbmNlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcGluZ2luZyB0aGUgc2VydmVyXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdmFyIGlmQ29ubmVjdGVkID0gd2luZG93Lm5hdmlnYXRvci5vbkxpbmU7XHJcbiAgICBsZXQgcmVjb25uZWN0O1xyXG4gICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcbiAgICBjb25zdCBwYXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzd29yZFwiKTtcclxuICAgIGlmIChpZkNvbm5lY3RlZCkge1xyXG4gICAgICBjbGllbnRcclxuICAgICAgICAucGluZyh1c2VybmFtZSlcclxuICAgICAgICAudGhlbigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWFnZSBwaW5nXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwaW5nIGVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgIHJlY29ubmVjdCA9IGNoYXRDbGllbnQodXNlciwgcGFzcyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RcIiwgdXNlciwgcGFzcyk7XHJcbiAgICAgICAgICAvL3JlY29ubmVjdC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICByZWNvbm5lY3QuY29ubmVjdCgpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZXJyb3IgY29ubmVjdCB0byB0aGUgc2VydmVyIGFmdGVyIDYwIHNlY25vZHNcIik7XHJcbiAgICAgICAgICAgIHJlY29ubmVjdC5jb25uZWN0KCk7XHJcbiAgICAgICAgICB9LCA2MDAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gbm90IGF2YWlsYWJsZVwiKTtcclxuICAgICAgY2xpZW50LmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9LCA1MDAwKTtcclxuXHJcbiAgY2xpZW50Lm9uKFwiYXV0aDpmYWlsZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ4bXBwIGF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHNldExvZ2luRXJyb3IoXCJJTkNPUlJFQ1QgVVNFUk5BTUUgT1IgUEFTU1dPUkRcIikpO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgcmVxdWVzdCBmcm9tXCIsIFJlY2VpdmVkUHJlc2VuY2UpO1xyXG4gICAgY2xpZW50LmFjY2VwdFN1YnNjcmlwdGlvbihSZWNlaXZlZFByZXNlbmNlLmZyb20pO1xyXG4gICAgY2xpZW50LnN1YnNjcmliZShSZWNlaXZlZFByZXNlbmNlLmZyb20sICgpID0+XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NycHRpb24gcmVxdWVzdCBzZW50IGJhY2sgdG9cIiArIFJlY2VpdmVkUHJlc2VuY2UuZnJvbSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInByZXNlbmNlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gICAgaWYgKHByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSAmJiBwcmVzZW5jZS50eXBlID09IFwidW5hdmFpbGFibGVcIikge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9mZmxpbmVcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIHVuYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoIXByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSkge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9ubGluZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImkgYW0gYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJ1bmF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByZXNlbmNlLmZyb20gKyBcIiBpcyBvZmZsaW5lXCIpO1xyXG4gIH0pO1xyXG4gIC8vIGNsaWVudC5vbihcImF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiYXZhaWxhYmxlXCIsIHByZXNlbmNlKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy9oZXJlIHdlIGxpc3RlbiBpbmNvbWluZyBtZXNzYWdlc1xyXG4gIGNsaWVudC5vbihcIm1lc3NhZ2VcIiwgKG5ld01lc3NhZ2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3TWVzc2FnZVwiLCBuZXdNZXNzYWdlKTtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGV0IGZvdW5kSUQ7XHJcbiAgICBjb25zdCByZWNlbnRVc2VycyA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5jaGF0ZWRVc2VycztcclxuICAgIGNvbnN0IHVzZXJzUCA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5hbGx1c2VycztcclxuICAgIGNvbnNvbGUubG9nKFwidXNlcnM6IFwiICsgdXNlcnNQKTtcclxuICAgIGxldCBmaWx0ZXJlZFVzZXJzID1cclxuICAgICAgdXNlcnNQLmxlbmd0aCA+IDAgJiZcclxuICAgICAgdXNlcnNQWzBdLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gbmV3TWVzc2FnZS50byk7XHJcblxyXG4gICAgbmV3TWVzc2FnZVtcIm1lc3NhZ2VUaW1lXCJdID0gZGF0ZVRpbWUoKTtcclxuICAgIG5ld01lc3NhZ2VbXCJkaXJlY3Rpb25cIl0gPSBcInJlY2VpdmVkXCI7XHJcbiAgICBuZXdNZXNzYWdlW1wiZnJvbVwiXSA9IG5ld01lc3NhZ2UuZnJvbS5zcGxpdChcIi9cIilbMF07XHJcbiAgICBuZXdNZXNzYWdlW1wiZnJvbXRvXCJdID0gbmV3TWVzc2FnZS5mcm9tO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjZW50VXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBuZXdNZXNzYWdlLmZyb20pIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgZm91bmRJRCA9IHJlY2VudFVzZXJzW2ldLmlkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgbmFtZSA9XHJcbiAgICAgIGZpbHRlcmVkVXNlcnMgJiZcclxuICAgICAgZmlsdGVyZWRVc2Vycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBuZXdNZXNzYWdlLmZyb20pO1xyXG4gICAgbGV0IHJlY2l2ZWROYW1lID0gbmFtZS5maXJzdF9uYW1lO1xyXG4gICAgY29uc29sZS5sb2coXCJyZWNpdmVkIG5hbWVcIiArIGZpbHRlcmVkVXNlcnMpO1xyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgYWRkTmV3VVNlcih7XHJcbiAgICAgICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZXIgZm91bmQgb24gbWVzc2FnZSByZWNlaXZlZDogXCIgKyBmb3VuZCk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChzZXROZXdNZXNzYWdlKG5ld01lc3NhZ2UpKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBzZXRMYXN0TWVzc2FnZSh7XHJcbiAgICAgICAgaWQ6IG5ld01lc3NhZ2UuZnJvbSxcclxuICAgICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLmJvZHksXHJcbiAgICAgICAgdGltZTogZGF0ZVRpbWUoKSxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG5cclxubGV0IHJvc3RlcjtcclxuY29uc3QgZ2V0Q29udGFjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhY3RzID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG5cclxuICByb3N0ZXIgPSBjb250YWN0cy5pdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSb3N0ZXJJdGVtcyA9ICgpID0+IHtcclxuICByZXR1cm4gcm9zdGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmROZXdNZXNzYWdlID0gKG5ld01lc3NhZ2UpID0+IHtcclxuICBjbGllbnQudXNlKHNldEN1c3RvbU1lc3NhZ2VBdHRyaWJ1dGVzKCkpO1xyXG4gIGNsaWVudCAmJiBjbGllbnQuc2VuZE1lc3NhZ2UobmV3TWVzc2FnZSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=