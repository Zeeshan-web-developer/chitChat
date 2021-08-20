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
  console.log("rec", newMessage);
  var found = false;
  var recentUsers = _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].getState().user.chatedUsers;
  var usersP = _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].getState().user.allusers;
  console.log("userp", usersP);
  var filteredUsers = usersP.length > 0 && usersP[0].filter(function (user) {
    return user.id !== newMessage.to;
  });
  newMessage["messageTime"] = Object(_containers_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_4__["default"])();
  newMessage["direction"] = "received";
  newMessage["from"] = newMessage.from.split("/")[0];
  newMessage["fromto"] = newMessage.from;
  var splitBody = newMessage.body.split("&");
  newMessage["body"] = splitBody[0];
  newMessage["first_name"] = splitBody(":")[1];
  console.log("after" + newMessage);

  for (var i = 0; i < recentUsers.length; i++) {
    if (recentUsers[i].id === newMessage.from) {
      found = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiWE1QUCIsImppZCIsInRyYW5zcG9ydHMiLCJ3ZWJzb2NrZXQiLCJib3NoIiwicm9zdGVyVmVyIiwidGltZW91dCIsIm9uIiwiZ2V0Q29udGFjdHMiLCJzZW5kUHJlc2VuY2UiLCJzZXRJbnRlcnZhbCIsImlmQ29ubmVjdGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVjb25uZWN0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXNzIiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25uZWN0Iiwic2V0VGltZW91dCIsImRpc2Nvbm5lY3QiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0TG9naW5FcnJvciIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJmcm9tIiwic3Vic2NyaWJlIiwicHJlc2VuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiLCJ1cGRhdGVVc2VyU3RhdHVzIiwiaWQiLCJzcGxpdCIsIm9ubGluZVN0YXR1cyIsIm5ld01lc3NhZ2UiLCJyZWNlaXZlZE1lc3NhZ2UiLCJyb3N0ZXIiLCJnZXRSb3N0ZXIiLCJjb250YWN0cyIsIml0ZW1zIiwiZ2V0Um9zdGVySXRlbXMiLCJzZW5kTmV3TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwiZm91bmQiLCJyZWNlbnRVc2VycyIsImdldFN0YXRlIiwiY2hhdGVkVXNlcnMiLCJ1c2Vyc1AiLCJhbGx1c2VycyIsImZpbHRlcmVkVXNlcnMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0byIsImRhdGVUaW1lIiwic3BsaXRCb2R5IiwiYm9keSIsImkiLCJuYW1lIiwiZmluZCIsIml0ZW0iLCJyZWNpdmVkTmFtZSIsImZpcnN0X25hbWUiLCJtYXAiLCJjaSIsInJlbW92ZVJlY2VudFVzZXIiLCJhZGROZXdVU2VyIiwic3RhdHVzIiwic2V0TmV3TWVzc2FnZSIsInNldExhc3RNZXNzYWdlIiwidGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBSUEsTUFBSjtBQUVlLFNBQVNDLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCQyxRQUE5QixFQUF3QztBQUNyREMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUwsUUFBTSxHQUFHTSxtREFBQSxDQUFrQjtBQUN6QkMsT0FBRyxFQUFFTCxRQURvQjtBQUV6QkMsWUFBUSxFQUFSQSxRQUZ5QjtBQUd6QkssY0FBVSxFQUFFO0FBQ1ZDLGVBQVMsRUFBRSwyQ0FERDtBQUVWQyxVQUFJLEVBQUU7QUFGSSxLQUhhO0FBT3pCQyxhQUFTLEVBQUUsT0FQYztBQVF6QkMsV0FBTyxFQUFFO0FBUmdCLEdBQWxCLENBQVQsQ0FGcUQsQ0FZckQ7O0FBQ0FaLFFBQU0sQ0FBQ2EsRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakNULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FTLGVBQVc7QUFDWGQsVUFBTSxDQUFDZSxZQUFQO0FBQ0QsR0FKRCxFQWJxRCxDQW1CckQ7O0FBQ0FDLGFBQVcsQ0FBQyxZQUFNO0FBQ2hCLFFBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxNQUFuQztBQUNBLFFBQUlDLFNBQUo7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFiO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBYjs7QUFDQSxRQUFJUCxXQUFKLEVBQWlCO0FBQ2ZqQixZQUFNLENBQ0gwQixJQURILENBQ1F4QixRQURSLEVBRUd5QixJQUZILENBRVEsVUFBQ0MsT0FBRCxFQUFhO0FBQ2pCeEIsZUFBTyxDQUFDQyxH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QVIsQ0FBWSxpQkFBaUJ5RCxhQUE3Qjs7QUFDQSxNQUFJLENBQUNOLEtBQUwsRUFBWTtBQUNWQyxlQUFXLENBQUNrQixHQUFaLENBQWdCLFVBQUNDLEVBQUQsRUFBUTtBQUN0QixVQUFJLENBQUNBLEVBQUUsQ0FBQ25DLGNBQUgsQ0FBa0IsTUFBbEIsQ0FBTCxFQUFnQztBQUM5QlIsa0VBQUssQ0FBQ0MsUUFBTixDQUFlMkMsNkVBQWdCLENBQUNELEVBQUUsQ0FBQ2hDLEVBQUosQ0FBL0I7QUFDRDtBQUNGLEtBSkQ7QUFNQVgsOERBQUssQ0FBQ0MsUUFBTixDQUNFNEMsdUVBQVUsQ0FBQztBQUNUbEMsUUFBRSxFQUFFRyxVQUFVLENBQUNULElBRFA7QUFFUm9DLGdCQUFVLEVBQUUzQixVQUFVLENBQUMyQixVQUZmO0FBR1JLLFlBQU0sRUFBRSxRQUhBO0FBSVJqQyxrQkFBWSxFQUFFO0FBSk4saUJBS0EsUUFMQSxFQURaO0FBU0Q7O0FBQ0RiLDREQUFLLENBQUNDLFFBQU4sQ0FBZThDLDBFQUFhLENBQUNqQyxVQUFELENBQTVCO0FBQ0FkLDREQUFLLENBQUNDLFFBQU4sQ0FDRStDLDJFQUFjLENBQUM7QUFDYnJDLE1BQUUsRUFBRUcsVUFBVSxDQUFDVCxJQURGO0FBRWJWLFdBQU8sRUFBRW1CLFVBQVUsQ0FBQ3FCLElBRlA7QUFHYmMsUUFBSSxFQUFFaEIsZ0ZBQVE7QUFIRCxHQUFELENBRGhCO0FBT0QsQ0FwREQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzI0YWM5MDhiZjcyZWZkMzk3MmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFhNUFAgZnJvbSBcInN0YW56YVwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvbGVmdFNpZGViYXIvZGF0ZXRpbWVcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVVzZXJTdGF0dXMsXHJcbiAgc2V0TG9naW5FcnJvcixcclxuICBzZXROZXdNZXNzYWdlLFxyXG4gIHNldExhc3RNZXNzYWdlLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbiAgYWRkTmV3VVNlcixcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5sZXQgY2xpZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhdENsaWVudCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zb2xlLmxvZyhcImNvbm5lY3Rpb24gcmVxdWVzdFwiKTtcclxuICBjbGllbnQgPSBYTVBQLmNyZWF0ZUNsaWVudCh7XHJcbiAgICBqaWQ6IHVzZXJuYW1lLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICB0cmFuc3BvcnRzOiB7XHJcbiAgICAgIHdlYnNvY2tldDogXCJ3czovL21vbmdvb3NlLm15c21hcnRwYngub3JnOjUyODAvd3MteG1wcFwiLFxyXG4gICAgICBib3NoOiBcImZhbHNlXCIsXHJcbiAgICB9LFxyXG4gICAgcm9zdGVyVmVyOiBcInZlcjE0XCIsXHJcbiAgICB0aW1lb3V0OiA2MCxcclxuICB9KTtcclxuICAvL2NsaWVudC5vbihcIipcIiwgY29uc29sZS5sb2cpO1xyXG4gIGNsaWVudC5vbihcInNlc3Npb246c3RhcnRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gc3RhcnRlZFwiKTtcclxuICAgIGdldENvbnRhY3RzKCk7XHJcbiAgICBjbGllbnQuc2VuZFByZXNlbmNlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcGluZ2luZyB0aGUgc2VydmVyXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdmFyIGlmQ29ubmVjdGVkID0gd2luZG93Lm5hdmlnYXRvci5vbkxpbmU7XHJcbiAgICBsZXQgcmVjb25uZWN0O1xyXG4gICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcbiAgICBjb25zdCBwYXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzd29yZFwiKTtcclxuICAgIGlmIChpZkNvbm5lY3RlZCkge1xyXG4gICAgICBjbGllbnRcclxuICAgICAgICAucGluZyh1c2VybmFtZSlcclxuICAgICAgICAudGhlbigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWFnZSBwaW5nXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwaW5nIGVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgIHJlY29ubmVjdCA9IGNoYXRDbGllbnQodXNlciwgcGFzcyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RcIiwgdXNlciwgcGFzcyk7XHJcbiAgICAgICAgICAvL3JlY29ubmVjdC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICByZWNvbm5lY3QuY29ubmVjdCgpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZXJyb3IgY29ubmVjdCB0byB0aGUgc2VydmVyIGFmdGVyIDYwIHNlY25vZHNcIik7XHJcbiAgICAgICAgICAgIHJlY29ubmVjdC5jb25uZWN0KCk7XHJcbiAgICAgICAgICB9LCA2MDAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gbm90IGF2YWlsYWJsZVwiKTtcclxuICAgICAgY2xpZW50LmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9LCA1MDAwKTtcclxuXHJcbiAgY2xpZW50Lm9uKFwiYXV0aDpmYWlsZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ4bXBwIGF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHNldExvZ2luRXJyb3IoXCJJTkNPUlJFQ1QgVVNFUk5BTUUgT1IgUEFTU1dPUkRcIikpO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgcmVxdWVzdCBmcm9tXCIsIFJlY2VpdmVkUHJlc2VuY2UpO1xyXG4gICAgY2xpZW50LmFjY2VwdFN1YnNjcmlwdGlvbihSZWNlaXZlZFByZXNlbmNlLmZyb20pO1xyXG4gICAgY2xpZW50LnN1YnNjcmliZShSZWNlaXZlZFByZXNlbmNlLmZyb20sICgpID0+XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NycHRpb24gcmVxdWVzdCBzZW50IGJhY2sgdG9cIiArIFJlY2VpdmVkUHJlc2VuY2UuZnJvbSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInByZXNlbmNlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gICAgaWYgKHByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSAmJiBwcmVzZW5jZS50eXBlID09IFwidW5hdmFpbGFibGVcIikge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9mZmxpbmVcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIHVuYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoIXByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSkge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9ubGluZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImkgYW0gYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJ1bmF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByZXNlbmNlLmZyb20gKyBcIiBpcyBvZmZsaW5lXCIpO1xyXG4gIH0pO1xyXG4gIC8vIGNsaWVudC5vbihcImF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiYXZhaWxhYmxlXCIsIHByZXNlbmNlKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy9oZXJlIHdlIGxpc3RlbiBpbmNvbWluZyBtZXNzYWdlc1xyXG4gIGNsaWVudC5vbihcIm1lc3NhZ2VcIiwgKG5ld01lc3NhZ2UpID0+IHtcclxuICAgIHJlY2VpdmVkTWVzc2FnZShuZXdNZXNzYWdlKTtcclxuICB9KTtcclxuICByZXR1cm4gY2xpZW50O1xyXG59XHJcblxyXG5sZXQgcm9zdGVyO1xyXG5jb25zdCBnZXRDb250YWN0cyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgY29udGFjdHMgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcblxyXG4gIHJvc3RlciA9IGNvbnRhY3RzLml0ZW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJvc3Rlckl0ZW1zID0gKCkgPT4ge1xyXG4gIHJldHVybiByb3N0ZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZE5ld01lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiYXQgc2VuZFwiICsgbmV3TWVzc2FnZSk7XHJcbiAgY2xpZW50ICYmIGNsaWVudC5zZW5kTWVzc2FnZShuZXdNZXNzYWdlKTtcclxufTtcclxuXHJcbmNvbnN0IHJlY2VpdmVkTWVzc2FnZSA9IChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJyZWNcIiwgbmV3TWVzc2FnZSk7XHJcbiAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgY29uc3QgcmVjZW50VXNlcnMgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuY2hhdGVkVXNlcnM7XHJcbiAgY29uc3QgdXNlcnNQID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmFsbHVzZXJzO1xyXG4gIGNvbnNvbGUubG9nKFwidXNlcnBcIiwgdXNlcnNQKTtcclxuICBsZXQgZmlsdGVyZWRVc2VycyA9XHJcbiAgICB1c2Vyc1AubGVuZ3RoID4gMCAmJiB1c2Vyc1BbMF0uZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBuZXdNZXNzYWdlLnRvKTtcclxuXHJcbiAgbmV3TWVzc2FnZVtcIm1lc3NhZ2VUaW1lXCJdID0gZGF0ZVRpbWUoKTtcclxuICBuZXdNZXNzYWdlW1wiZGlyZWN0aW9uXCJdID0gXCJyZWNlaXZlZFwiO1xyXG4gIG5ld01lc3NhZ2VbXCJmcm9tXCJdID0gbmV3TWVzc2FnZS5mcm9tLnNwbGl0KFwiL1wiKVswXTtcclxuICBuZXdNZXNzYWdlW1wiZnJvbXRvXCJdID0gbmV3TWVzc2FnZS5mcm9tO1xyXG4gIGxldCBzcGxpdEJvZHkgPSBuZXdNZXNzYWdlLmJvZHkuc3BsaXQoXCImXCIpO1xyXG4gIG5ld01lc3NhZ2VbXCJib2R5XCJdID0gc3BsaXRCb2R5WzBdO1xyXG4gIG5ld01lc3NhZ2VbXCJmaXJzdF9uYW1lXCJdID0gc3BsaXRCb2R5KFwiOlwiKVsxXTtcclxuICBjb25zb2xlLmxvZyhcImFmdGVyXCIgKyBuZXdNZXNzYWdlKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocmVjZW50VXNlcnNbaV0uaWQgPT09IG5ld01lc3NhZ2UuZnJvbSkge1xyXG4gICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YXIgbmFtZSA9XHJcbiAgICBmaWx0ZXJlZFVzZXJzICYmIGZpbHRlcmVkVXNlcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbmV3TWVzc2FnZS5mcm9tKTtcclxuICBsZXQgcmVjaXZlZE5hbWUgPSBuYW1lLmZpcnN0X25hbWU7XHJcbiAgY29uc29sZS5sb2coXCJyZWNpdmVkIG5hbWVcIiArIGZpbHRlcmVkVXNlcnMpO1xyXG4gIGlmICghZm91bmQpIHtcclxuICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IG5ld01lc3NhZ2UuZmlyc3RfbmFtZSxcclxuICAgICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHN0b3JlLmRpc3BhdGNoKHNldE5ld01lc3NhZ2UobmV3TWVzc2FnZSkpO1xyXG4gIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgc2V0TGFzdE1lc3NhZ2Uoe1xyXG4gICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLmJvZHksXHJcbiAgICAgIHRpbWU6IGRhdGVUaW1lKCksXHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=