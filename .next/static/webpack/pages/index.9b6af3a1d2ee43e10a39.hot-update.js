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

var receivedMessage = function receivedMessage(_receivedMessage) {
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
      first_name: newMessage.from,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiWE1QUCIsImppZCIsInRyYW5zcG9ydHMiLCJ3ZWJzb2NrZXQiLCJib3NoIiwicm9zdGVyVmVyIiwidGltZW91dCIsIm9uIiwiZ2V0Q29udGFjdHMiLCJzZW5kUHJlc2VuY2UiLCJzZXRJbnRlcnZhbCIsImlmQ29ubmVjdGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVjb25uZWN0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXNzIiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25uZWN0Iiwic2V0VGltZW91dCIsImRpc2Nvbm5lY3QiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0TG9naW5FcnJvciIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJmcm9tIiwic3Vic2NyaWJlIiwicHJlc2VuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiLCJ1cGRhdGVVc2VyU3RhdHVzIiwiaWQiLCJzcGxpdCIsIm9ubGluZVN0YXR1cyIsIm5ld01lc3NhZ2UiLCJyZWNlaXZlZE1lc3NhZ2UiLCJyb3N0ZXIiLCJnZXRSb3N0ZXIiLCJjb250YWN0cyIsIml0ZW1zIiwiZ2V0Um9zdGVySXRlbXMiLCJzZW5kTmV3TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwiZm91bmQiLCJyZWNlbnRVc2VycyIsImdldFN0YXRlIiwiY2hhdGVkVXNlcnMiLCJ1c2Vyc1AiLCJhbGx1c2VycyIsImZpbHRlcmVkVXNlcnMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0byIsImRhdGVUaW1lIiwiaSIsIm5hbWUiLCJmaW5kIiwiaXRlbSIsInJlY2l2ZWROYW1lIiwiZmlyc3RfbmFtZSIsIm1hcCIsImNpIiwicmVtb3ZlUmVjZW50VXNlciIsImFkZE5ld1VTZXIiLCJzdGF0dXMiLCJzZXROZXdNZXNzYWdlIiwic2V0TGFzdE1lc3NhZ2UiLCJib2R5IiwidGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBSUEsTUFBSjtBQUVlLFNBQVNDLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCQyxRQUE5QixFQUF3QztBQUNyREMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUwsUUFBTSxHQUFHTSxtREFBQSxDQUFrQjtBQUN6QkMsT0FBRyxFQUFFTCxRQURvQjtBQUV6QkMsWUFBUSxFQUFSQSxRQUZ5QjtBQUd6QkssY0FBVSxFQUFFO0FBQ1ZDLGVBQVMsRUFBRSwyQ0FERDtBQUVWQyxVQUFJLEVBQUU7QUFGSSxLQUhhO0FBT3pCQyxhQUFTLEVBQUUsT0FQYztBQVF6QkMsV0FBTyxFQUFFO0FBUmdCLEdBQWxCLENBQVQsQ0FGcUQsQ0FZckQ7O0FBQ0FaLFFBQU0sQ0FBQ2EsRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakNULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FTLGVBQVc7QUFDWGQsVUFBTSxDQUFDZSxZQUFQO0FBQ0QsR0FKRCxFQWJxRCxDQW1CckQ7O0FBQ0FDLGFBQVcsQ0FBQyxZQUFNO0FBQ2hCLFFBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxNQUFuQztBQUNBLFFBQUlDLFNBQUo7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFiO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBYjs7QUFDQSxRQUFJUCxXQUFKLEVBQWlCO0FBQ2ZqQixZQUFNLENBQ0gwQixJQURILENBQ1F4QixRQURSLEVBRUd5QixJQUZILENBRVEsVUFBQ0MsT0FBRCxFQUFhO0FBQ2pCeEIsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFB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QUVSa0MsZ0JBQVUsRUFBRXpCLFVBQVUsQ0FBQ1QsSUFGZjtBQUdSdUMsWUFBTSxFQUFFLFFBSEE7QUFJUi9CLGtCQUFZLEVBQUU7QUFKTixpQkFLQSxRQUxBLEVBRFo7QUFTRDs7QUFDRGIsNERBQUssQ0FBQ0MsUUFBTixDQUFlNEMsMEVBQWEsQ0FBQy9CLFVBQUQsQ0FBNUI7QUFDQWQsNERBQUssQ0FBQ0MsUUFBTixDQUNFNkMsMkVBQWMsQ0FBQztBQUNibkMsTUFBRSxFQUFFRyxVQUFVLENBQUNULElBREY7QUFFYlYsV0FBTyxFQUFFbUIsVUFBVSxDQUFDaUMsSUFGUDtBQUdiQyxRQUFJLEVBQUVmLGdGQUFRO0FBSEQsR0FBRCxDQURoQjtBQU9ELENBaEREIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjliNmFmM2ExZDJlZTQzZTEwYTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYTVBQIGZyb20gXCJzdGFuemFcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuLi9jb250YWluZXJzL2xlZnRTaWRlYmFyL2RhdGV0aW1lXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVVc2VyU3RhdHVzLFxyXG4gIHNldExvZ2luRXJyb3IsXHJcbiAgc2V0TmV3TWVzc2FnZSxcclxuICBzZXRMYXN0TWVzc2FnZSxcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIGFkZE5ld1VTZXIsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxubGV0IGNsaWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXRDbGllbnQodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY29uc29sZS5sb2coXCJjb25uZWN0aW9uIHJlcXVlc3RcIik7XHJcbiAgY2xpZW50ID0gWE1QUC5jcmVhdGVDbGllbnQoe1xyXG4gICAgamlkOiB1c2VybmFtZSxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgdHJhbnNwb3J0czoge1xyXG4gICAgICB3ZWJzb2NrZXQ6IFwid3M6Ly9tb25nb29zZS5teXNtYXJ0cGJ4Lm9yZzo1MjgwL3dzLXhtcHBcIixcclxuICAgICAgYm9zaDogXCJmYWxzZVwiLFxyXG4gICAgfSxcclxuICAgIHJvc3RlclZlcjogXCJ2ZXIxNFwiLFxyXG4gICAgdGltZW91dDogNjAsXHJcbiAgfSk7XHJcbiAgLy9jbGllbnQub24oXCIqXCIsIGNvbnNvbGUubG9nKTtcclxuICBjbGllbnQub24oXCJzZXNzaW9uOnN0YXJ0ZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzZXNzaW9uIHN0YXJ0ZWRcIik7XHJcbiAgICBnZXRDb250YWN0cygpO1xyXG4gICAgY2xpZW50LnNlbmRQcmVzZW5jZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvL3BpbmdpbmcgdGhlIHNlcnZlclxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHZhciBpZkNvbm5lY3RlZCA9IHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lO1xyXG4gICAgbGV0IHJlY29ubmVjdDtcclxuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xyXG4gICAgY29uc3QgcGFzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc3dvcmRcIik7XHJcbiAgICBpZiAoaWZDb25uZWN0ZWQpIHtcclxuICAgICAgY2xpZW50XHJcbiAgICAgICAgLnBpbmcodXNlcm5hbWUpXHJcbiAgICAgICAgLnRoZW4oKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FhZ2UgcGluZ1wiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGluZyBlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICByZWNvbm5lY3QgPSBjaGF0Q2xpZW50KHVzZXIsIHBhc3MpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0XCIsIHVzZXIsIHBhc3MpO1xyXG4gICAgICAgICAgLy9yZWNvbm5lY3QuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgcmVjb25uZWN0LmNvbm5lY3QoKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIGVycm9yIGNvbm5lY3QgdG8gdGhlIHNlcnZlciBhZnRlciA2MCBzZWNub2RzXCIpO1xyXG4gICAgICAgICAgICByZWNvbm5lY3QuY29ubmVjdCgpO1xyXG4gICAgICAgICAgfSwgNjAwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgIGNsaWVudC5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgfSwgNTAwMCk7XHJcblxyXG4gIGNsaWVudC5vbihcImF1dGg6ZmFpbGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwieG1wcCBhdXRoZW50aWNhdGlvbiBmYWlsZWRcIik7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChzZXRMb2dpbkVycm9yKFwiSU5DT1JSRUNUIFVTRVJOQU1FIE9SIFBBU1NXT1JEXCIpKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwic3Vic2NyaWJlXCIsIChSZWNlaXZlZFByZXNlbmNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIHJlcXVlc3QgZnJvbVwiLCBSZWNlaXZlZFByZXNlbmNlKTtcclxuICAgIGNsaWVudC5hY2NlcHRTdWJzY3JpcHRpb24oUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKTtcclxuICAgIGNsaWVudC5zdWJzY3JpYmUoUmVjZWl2ZWRQcmVzZW5jZS5mcm9tLCAoKSA9PlxyXG4gICAgICBjb25zb2xlLmxvZyhcInN1YnNjcnB0aW9uIHJlcXVlc3Qgc2VudCBiYWNrIHRvXCIgKyBSZWNlaXZlZFByZXNlbmNlLmZyb20pXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJwcmVzZW5jZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAgIGlmIChwcmVzZW5jZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikgJiYgcHJlc2VuY2UudHlwZSA9PSBcInVuYXZhaWxhYmxlXCIpIHtcclxuICAgICAgLy9oZXJlIHdlIG5lZWQgdG8gdXBkYXRlIHVzZXIgc3RhdHVzIHRoYXQgdXNlciBpcyBvZmZsaW5lXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSB1bmF2YWlsYWJsZVwiLCBwcmVzZW5jZS5mcm9tKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdXBkYXRlVXNlclN0YXR1cyh7XHJcbiAgICAgICAgICBpZDogcHJlc2VuY2UuZnJvbS5zcGxpdChcIkBcIilbMF0sXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib2ZmbGluZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKCFwcmVzZW5jZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikpIHtcclxuICAgICAgLy9oZXJlIHdlIG5lZWQgdG8gdXBkYXRlIHVzZXIgc3RhdHVzIHRoYXQgdXNlciBpcyBvbmxpbmVcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIGF2YWlsYWJsZVwiLCBwcmVzZW5jZS5mcm9tKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdXBkYXRlVXNlclN0YXR1cyh7XHJcbiAgICAgICAgICBpZDogcHJlc2VuY2UuZnJvbS5zcGxpdChcIkBcIilbMF0sXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwidW5hdmFpbGFibGVcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcmVzZW5jZS5mcm9tICsgXCIgaXMgb2ZmbGluZVwiKTtcclxuICB9KTtcclxuICAvLyBjbGllbnQub24oXCJhdmFpbGFibGVcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImF2YWlsYWJsZVwiLCBwcmVzZW5jZSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vaGVyZSB3ZSBsaXN0ZW4gaW5jb21pbmcgbWVzc2FnZXNcclxuICBjbGllbnQub24oXCJtZXNzYWdlXCIsIChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgICByZWNlaXZlZE1lc3NhZ2UobmV3TWVzc2FnZSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG5cclxubGV0IHJvc3RlcjtcclxuY29uc3QgZ2V0Q29udGFjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhY3RzID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG5cclxuICByb3N0ZXIgPSBjb250YWN0cy5pdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSb3N0ZXJJdGVtcyA9ICgpID0+IHtcclxuICByZXR1cm4gcm9zdGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmROZXdNZXNzYWdlID0gKG5ld01lc3NhZ2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImF0IHNlbmRcIiArIG5ld01lc3NhZ2UpO1xyXG4gIGNsaWVudCAmJiBjbGllbnQuc2VuZE1lc3NhZ2UobmV3TWVzc2FnZSk7XHJcbn07XHJcblxyXG5jb25zdCByZWNlaXZlZE1lc3NhZ2UgPSAocmVjZWl2ZWRNZXNzYWdlKSA9PiB7XHJcbiAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgY29uc3QgcmVjZW50VXNlcnMgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuY2hhdGVkVXNlcnM7XHJcbiAgY29uc3QgdXNlcnNQID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmFsbHVzZXJzO1xyXG4gIGNvbnNvbGUubG9nKFwidXNlcnBcIiwgdXNlcnNQKTtcclxuICBsZXQgZmlsdGVyZWRVc2VycyA9XHJcbiAgICB1c2Vyc1AubGVuZ3RoID4gMCAmJiB1c2Vyc1BbMF0uZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBuZXdNZXNzYWdlLnRvKTtcclxuXHJcbiAgbmV3TWVzc2FnZVtcIm1lc3NhZ2VUaW1lXCJdID0gZGF0ZVRpbWUoKTtcclxuICBuZXdNZXNzYWdlW1wiZGlyZWN0aW9uXCJdID0gXCJyZWNlaXZlZFwiO1xyXG4gIG5ld01lc3NhZ2VbXCJmcm9tXCJdID0gbmV3TWVzc2FnZS5mcm9tLnNwbGl0KFwiL1wiKVswXTtcclxuICBuZXdNZXNzYWdlW1wiZnJvbXRvXCJdID0gbmV3TWVzc2FnZS5mcm9tO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocmVjZW50VXNlcnNbaV0uaWQgPT09IG5ld01lc3NhZ2UuZnJvbSkge1xyXG4gICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YXIgbmFtZSA9XHJcbiAgICBmaWx0ZXJlZFVzZXJzICYmIGZpbHRlcmVkVXNlcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbmV3TWVzc2FnZS5mcm9tKTtcclxuICBsZXQgcmVjaXZlZE5hbWUgPSBuYW1lLmZpcnN0X25hbWU7XHJcbiAgY29uc29sZS5sb2coXCJyZWNpdmVkIG5hbWVcIiArIGZpbHRlcmVkVXNlcnMpO1xyXG4gIGlmICghZm91bmQpIHtcclxuICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IG5ld01lc3NhZ2UuZnJvbSxcclxuICAgICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHN0b3JlLmRpc3BhdGNoKHNldE5ld01lc3NhZ2UobmV3TWVzc2FnZSkpO1xyXG4gIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgc2V0TGFzdE1lc3NhZ2Uoe1xyXG4gICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLmJvZHksXHJcbiAgICAgIHRpbWU6IGRhdGVUaW1lKCksXHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=