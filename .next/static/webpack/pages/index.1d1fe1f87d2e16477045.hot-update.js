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
  console.log("at send" + newMessage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiWE1QUCIsImppZCIsInRyYW5zcG9ydHMiLCJ3ZWJzb2NrZXQiLCJib3NoIiwicm9zdGVyVmVyIiwidGltZW91dCIsIm9uIiwiZ2V0Q29udGFjdHMiLCJzZW5kUHJlc2VuY2UiLCJzZXRJbnRlcnZhbCIsImlmQ29ubmVjdGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVjb25uZWN0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXNzIiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25uZWN0Iiwic2V0VGltZW91dCIsImRpc2Nvbm5lY3QiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0TG9naW5FcnJvciIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJmcm9tIiwic3Vic2NyaWJlIiwicHJlc2VuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiLCJ1cGRhdGVVc2VyU3RhdHVzIiwiaWQiLCJzcGxpdCIsIm9ubGluZVN0YXR1cyIsIm5ld01lc3NhZ2UiLCJmb3VuZCIsImZvdW5kSUQiLCJyZWNlbnRVc2VycyIsImdldFN0YXRlIiwiY2hhdGVkVXNlcnMiLCJ1c2Vyc1AiLCJhbGx1c2VycyIsImZpbHRlcmVkVXNlcnMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0byIsImRhdGVUaW1lIiwiaSIsIm5hbWUiLCJmaW5kIiwiaXRlbSIsInJlY2l2ZWROYW1lIiwiZmlyc3RfbmFtZSIsIm1hcCIsImNpIiwicmVtb3ZlUmVjZW50VXNlciIsImFkZE5ld1VTZXIiLCJzdGF0dXMiLCJzZXROZXdNZXNzYWdlIiwic2V0TGFzdE1lc3NhZ2UiLCJib2R5IiwidGltZSIsInJvc3RlciIsImdldFJvc3RlciIsImNvbnRhY3RzIiwiaXRlbXMiLCJnZXRSb3N0ZXJJdGVtcyIsInNlbmROZXdNZXNzYWdlIiwic2VuZE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVFBLElBQUlBLE1BQUo7QUFFZSxTQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE4QkMsUUFBOUIsRUFBd0M7QUFDckRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0FMLFFBQU0sR0FBR00sbURBQUEsQ0FBa0I7QUFDekJDLE9BQUcsRUFBRUwsUUFEb0I7QUFFekJDLFlBQVEsRUFBUkEsUUFGeUI7QUFHekJLLGNBQVUsRUFBRTtBQUNWQyxlQUFTLEVBQUUsMkNBREQ7QUFFVkMsVUFBSSxFQUFFO0FBRkksS0FIYTtBQU96QkMsYUFBUyxFQUFFLE9BUGM7QUFRekJDLFdBQU8sRUFBRTtBQVJnQixHQUFsQixDQUFULENBRnFELENBWXJEOztBQUNBWixRQUFNLENBQUNhLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixZQUFNO0FBQ2pDVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBUyxlQUFXO0FBQ1hkLFVBQU0sQ0FBQ2UsWUFBUDtBQUNELEdBSkQsRUFicUQsQ0FtQnJEOztBQUNBQyxhQUFXLENBQUMsWUFBTTtBQUNoQixRQUFJQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsTUFBbkM7QUFDQSxRQUFJQyxTQUFKO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBYjtBQUNBLFFBQU1DLElBQUksR0FBR0YsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWI7O0FBQ0EsUUFBSVAsV0FBSixFQUFpQjtBQUNmakIsWUFBTSxDQUNIMEIsSUFESCxDQUNReEIsUUFEUixFQUVHeUIsSUFGSCxDQUVRLFVBQUNDLE9BQUQsRUFBYTtBQUNqQnhCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDRCxP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QzRFLFNBQVAsRUFESDs7QUFBQTtBQUNkQyxvQkFEYztBQUdsQkYsa0JBQU0sR0FBR0UsUUFBUSxDQUFDQyxLQUFsQjs7QUFIa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWGhFLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakI7O0FBTU8sSUFBTWlFLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUNsQyxTQUFPSixNQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2pDLFVBQUQsRUFBZ0I7QUFDNUMzQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZMEMsVUFBeEI7QUFDQS9DLFFBQU0sSUFBSUEsTUFBTSxDQUFDaUYsV0FBUCxDQUFtQmxDLFVBQW5CLENBQVY7QUFDRCxDQUhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFkMWZlMWY4N2QyZTE2NDc3MDQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYTVBQIGZyb20gXCJzdGFuemFcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuLi9jb250YWluZXJzL2xlZnRTaWRlYmFyL2RhdGV0aW1lXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVVc2VyU3RhdHVzLFxyXG4gIHNldExvZ2luRXJyb3IsXHJcbiAgc2V0TmV3TWVzc2FnZSxcclxuICBzZXRMYXN0TWVzc2FnZSxcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIGFkZE5ld1VTZXIsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxubGV0IGNsaWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXRDbGllbnQodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY29uc29sZS5sb2coXCJjb25uZWN0aW9uIHJlcXVlc3RcIik7XHJcbiAgY2xpZW50ID0gWE1QUC5jcmVhdGVDbGllbnQoe1xyXG4gICAgamlkOiB1c2VybmFtZSxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgdHJhbnNwb3J0czoge1xyXG4gICAgICB3ZWJzb2NrZXQ6IFwid3M6Ly9tb25nb29zZS5teXNtYXJ0cGJ4Lm9yZzo1MjgwL3dzLXhtcHBcIixcclxuICAgICAgYm9zaDogXCJmYWxzZVwiLFxyXG4gICAgfSxcclxuICAgIHJvc3RlclZlcjogXCJ2ZXIxNFwiLFxyXG4gICAgdGltZW91dDogNjAsXHJcbiAgfSk7XHJcbiAgLy9jbGllbnQub24oXCIqXCIsIGNvbnNvbGUubG9nKTtcclxuICBjbGllbnQub24oXCJzZXNzaW9uOnN0YXJ0ZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzZXNzaW9uIHN0YXJ0ZWRcIik7XHJcbiAgICBnZXRDb250YWN0cygpO1xyXG4gICAgY2xpZW50LnNlbmRQcmVzZW5jZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvL3BpbmdpbmcgdGhlIHNlcnZlclxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHZhciBpZkNvbm5lY3RlZCA9IHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lO1xyXG4gICAgbGV0IHJlY29ubmVjdDtcclxuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xyXG4gICAgY29uc3QgcGFzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc3dvcmRcIik7XHJcbiAgICBpZiAoaWZDb25uZWN0ZWQpIHtcclxuICAgICAgY2xpZW50XHJcbiAgICAgICAgLnBpbmcodXNlcm5hbWUpXHJcbiAgICAgICAgLnRoZW4oKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FhZ2UgcGluZ1wiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGluZyBlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICByZWNvbm5lY3QgPSBjaGF0Q2xpZW50KHVzZXIsIHBhc3MpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0XCIsIHVzZXIsIHBhc3MpO1xyXG4gICAgICAgICAgLy9yZWNvbm5lY3QuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgcmVjb25uZWN0LmNvbm5lY3QoKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIGVycm9yIGNvbm5lY3QgdG8gdGhlIHNlcnZlciBhZnRlciA2MCBzZWNub2RzXCIpO1xyXG4gICAgICAgICAgICByZWNvbm5lY3QuY29ubmVjdCgpO1xyXG4gICAgICAgICAgfSwgNjAwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgIGNsaWVudC5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgfSwgNTAwMCk7XHJcblxyXG4gIGNsaWVudC5vbihcImF1dGg6ZmFpbGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwieG1wcCBhdXRoZW50aWNhdGlvbiBmYWlsZWRcIik7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChzZXRMb2dpbkVycm9yKFwiSU5DT1JSRUNUIFVTRVJOQU1FIE9SIFBBU1NXT1JEXCIpKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwic3Vic2NyaWJlXCIsIChSZWNlaXZlZFByZXNlbmNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIHJlcXVlc3QgZnJvbVwiLCBSZWNlaXZlZFByZXNlbmNlKTtcclxuICAgIGNsaWVudC5hY2NlcHRTdWJzY3JpcHRpb24oUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKTtcclxuICAgIGNsaWVudC5zdWJzY3JpYmUoUmVjZWl2ZWRQcmVzZW5jZS5mcm9tLCAoKSA9PlxyXG4gICAgICBjb25zb2xlLmxvZyhcInN1YnNjcnB0aW9uIHJlcXVlc3Qgc2VudCBiYWNrIHRvXCIgKyBSZWNlaXZlZFByZXNlbmNlLmZyb20pXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJwcmVzZW5jZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAgIGlmIChwcmVzZW5jZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikgJiYgcHJlc2VuY2UudHlwZSA9PSBcInVuYXZhaWxhYmxlXCIpIHtcclxuICAgICAgLy9oZXJlIHdlIG5lZWQgdG8gdXBkYXRlIHVzZXIgc3RhdHVzIHRoYXQgdXNlciBpcyBvZmZsaW5lXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSB1bmF2YWlsYWJsZVwiLCBwcmVzZW5jZS5mcm9tKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdXBkYXRlVXNlclN0YXR1cyh7XHJcbiAgICAgICAgICBpZDogcHJlc2VuY2UuZnJvbS5zcGxpdChcIkBcIilbMF0sXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib2ZmbGluZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKCFwcmVzZW5jZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikpIHtcclxuICAgICAgLy9oZXJlIHdlIG5lZWQgdG8gdXBkYXRlIHVzZXIgc3RhdHVzIHRoYXQgdXNlciBpcyBvbmxpbmVcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIGF2YWlsYWJsZVwiLCBwcmVzZW5jZS5mcm9tKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdXBkYXRlVXNlclN0YXR1cyh7XHJcbiAgICAgICAgICBpZDogcHJlc2VuY2UuZnJvbS5zcGxpdChcIkBcIilbMF0sXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwidW5hdmFpbGFibGVcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcmVzZW5jZS5mcm9tICsgXCIgaXMgb2ZmbGluZVwiKTtcclxuICB9KTtcclxuICAvLyBjbGllbnQub24oXCJhdmFpbGFibGVcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImF2YWlsYWJsZVwiLCBwcmVzZW5jZSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vaGVyZSB3ZSBsaXN0ZW4gaW5jb21pbmcgbWVzc2FnZXNcclxuICBjbGllbnQub24oXCJtZXNzYWdlXCIsIChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5ld01lc3NhZ2VcIiwgbmV3TWVzc2FnZSk7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxldCBmb3VuZElEO1xyXG4gICAgY29uc3QgcmVjZW50VXNlcnMgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuY2hhdGVkVXNlcnM7XHJcbiAgICBjb25zdCB1c2Vyc1AgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuYWxsdXNlcnM7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZXJzOiBcIiArIHVzZXJzUCk7XHJcbiAgICBsZXQgZmlsdGVyZWRVc2VycyA9XHJcbiAgICAgIHVzZXJzUC5sZW5ndGggPiAwICYmXHJcbiAgICAgIHVzZXJzUFswXS5maWx0ZXIoKHVzZXIpID0+IHVzZXIuaWQgIT09IG5ld01lc3NhZ2UudG8pO1xyXG5cclxuICAgIG5ld01lc3NhZ2VbXCJtZXNzYWdlVGltZVwiXSA9IGRhdGVUaW1lKCk7XHJcbiAgICBuZXdNZXNzYWdlW1wiZGlyZWN0aW9uXCJdID0gXCJyZWNlaXZlZFwiO1xyXG4gICAgbmV3TWVzc2FnZVtcImZyb21cIl0gPSBuZXdNZXNzYWdlLmZyb20uc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgbmV3TWVzc2FnZVtcImZyb210b1wiXSA9IG5ld01lc3NhZ2UuZnJvbTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChyZWNlbnRVc2Vyc1tpXS5pZCA9PT0gbmV3TWVzc2FnZS5mcm9tKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGZvdW5kSUQgPSByZWNlbnRVc2Vyc1tpXS5pZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIG5hbWUgPVxyXG4gICAgICBmaWx0ZXJlZFVzZXJzICYmXHJcbiAgICAgIGZpbHRlcmVkVXNlcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbmV3TWVzc2FnZS5mcm9tKTtcclxuICAgIGxldCByZWNpdmVkTmFtZSA9IG5hbWUuZmlyc3RfbmFtZTtcclxuICAgIGNvbnNvbGUubG9nKFwicmVjaXZlZCBuYW1lXCIgKyBmaWx0ZXJlZFVzZXJzKTtcclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgcmVjZW50VXNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICAgIGlmICghY2kuaGFzT3duUHJvcGVydHkoXCJtZXNnXCIpKSB7XHJcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIGFkZE5ld1VTZXIoe1xyXG4gICAgICAgICAgaWQ6IG5ld01lc3NhZ2UuZnJvbSxcclxuICAgICAgICAgIGZpcnN0X25hbWU6IG5ld01lc3NhZ2UuZnJvbSxcclxuICAgICAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJ1c2VyIGZvdW5kIG9uIG1lc3NhZ2UgcmVjZWl2ZWQ6IFwiICsgZm91bmQpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goc2V0TmV3TWVzc2FnZShuZXdNZXNzYWdlKSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgc2V0TGFzdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGlkOiBuZXdNZXNzYWdlLmZyb20sXHJcbiAgICAgICAgbWVzc2FnZTogbmV3TWVzc2FnZS5ib2R5LFxyXG4gICAgICAgIHRpbWU6IGRhdGVUaW1lKCksXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmxldCByb3N0ZXI7XHJcbmNvbnN0IGdldENvbnRhY3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCBjb250YWN0cyA9IGF3YWl0IGNsaWVudC5nZXRSb3N0ZXIoKTtcclxuXHJcbiAgcm9zdGVyID0gY29udGFjdHMuaXRlbXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Um9zdGVySXRlbXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHJvc3RlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kTmV3TWVzc2FnZSA9IChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJhdCBzZW5kXCIgKyBuZXdNZXNzYWdlKTtcclxuICBjbGllbnQgJiYgY2xpZW50LnNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9