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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiWE1QUCIsImppZCIsInRyYW5zcG9ydHMiLCJ3ZWJzb2NrZXQiLCJib3NoIiwicm9zdGVyVmVyIiwidGltZW91dCIsIm9uIiwiZ2V0Q29udGFjdHMiLCJzZW5kUHJlc2VuY2UiLCJzZXRJbnRlcnZhbCIsImlmQ29ubmVjdGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVjb25uZWN0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXNzIiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25uZWN0Iiwic2V0VGltZW91dCIsImRpc2Nvbm5lY3QiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0TG9naW5FcnJvciIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJmcm9tIiwic3Vic2NyaWJlIiwicHJlc2VuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiLCJ1cGRhdGVVc2VyU3RhdHVzIiwiaWQiLCJzcGxpdCIsIm9ubGluZVN0YXR1cyIsIm5ld01lc3NhZ2UiLCJyZWNlaXZlZE1lc3NhZ2UiLCJyb3N0ZXIiLCJnZXRSb3N0ZXIiLCJjb250YWN0cyIsIml0ZW1zIiwiZ2V0Um9zdGVySXRlbXMiLCJzZW5kTmV3TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwiZm91bmQiLCJyZWNlbnRVc2VycyIsImdldFN0YXRlIiwiY2hhdGVkVXNlcnMiLCJ1c2Vyc1AiLCJhbGx1c2VycyIsImZpbHRlcmVkVXNlcnMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0byIsImRhdGVUaW1lIiwiaSIsIm5hbWUiLCJmaW5kIiwiaXRlbSIsInJlY2l2ZWROYW1lIiwiZmlyc3RfbmFtZSIsIm1hcCIsImNpIiwicmVtb3ZlUmVjZW50VXNlciIsImFkZE5ld1VTZXIiLCJzdGF0dXMiLCJzZXROZXdNZXNzYWdlIiwic2V0TGFzdE1lc3NhZ2UiLCJib2R5IiwidGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBSUEsTUFBSjtBQUVlLFNBQVNDLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCQyxRQUE5QixFQUF3QztBQUNyREMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUwsUUFBTSxHQUFHTSxtREFBQSxDQUFrQjtBQUN6QkMsT0FBRyxFQUFFTCxRQURvQjtBQUV6QkMsWUFBUSxFQUFSQSxRQUZ5QjtBQUd6QkssY0FBVSxFQUFFO0FBQ1ZDLGVBQVMsRUFBRSwyQ0FERDtBQUVWQyxVQUFJLEVBQUU7QUFGSSxLQUhhO0FBT3pCQyxhQUFTLEVBQUUsT0FQYztBQVF6QkMsV0FBTyxFQUFFO0FBUmdCLEdBQWxCLENBQVQsQ0FGcUQsQ0FZckQ7O0FBQ0FaLFFBQU0sQ0FBQ2EsRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakNULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FTLGVBQVc7QUFDWGQsVUFBTSxDQUFDZSxZQUFQO0FBQ0QsR0FKRCxFQWJxRCxDQW1CckQ7O0FBQ0FDLGFBQVcsQ0FBQyxZQUFNO0FBQ2hCLFFBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxNQUFuQztBQUNBLFFBQUlDLFNBQUo7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFiO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBYjs7QUFDQSxRQUFJUCxXQUFKLEVBQWlCO0FBQ2ZqQixZQUFNLENBQ0gwQixJQURILENBQ1F4QixRQURSLEVBRUd5QixJQUZILENBRVEsVUFBQ0MsT0FBRCxFQUFhO0FBQ2pCeEIsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFB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QUVSa0MsZ0JBQVUsRUFBRXpCLFVBQVUsQ0FBQ1QsSUFGZjtBQUdSdUMsWUFBTSxFQUFFLFFBSEE7QUFJUi9CLGtCQUFZLEVBQUU7QUFKTixpQkFLQSxRQUxBLEVBRFo7QUFTRDs7QUFDRGIsNERBQUssQ0FBQ0MsUUFBTixDQUFlNEMsMEVBQWEsQ0FBQy9CLFVBQUQsQ0FBNUI7QUFDQWQsNERBQUssQ0FBQ0MsUUFBTixDQUNFNkMsMkVBQWMsQ0FBQztBQUNibkMsTUFBRSxFQUFFRyxVQUFVLENBQUNULElBREY7QUFFYlYsV0FBTyxFQUFFbUIsVUFBVSxDQUFDaUMsSUFGUDtBQUdiQyxRQUFJLEVBQUVmLGdGQUFRO0FBSEQsR0FBRCxDQURoQjtBQU9ELENBaEREIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3Nlbmdlci45YjZhZjNhMWQyZWU0M2UxMGEzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWE1QUCBmcm9tIFwic3RhbnphXCI7XHJcbmltcG9ydCBkYXRlVGltZSBmcm9tIFwiLi4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9kYXRldGltZVwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgdXBkYXRlVXNlclN0YXR1cyxcclxuICBzZXRMb2dpbkVycm9yLFxyXG4gIHNldE5ld01lc3NhZ2UsXHJcbiAgc2V0TGFzdE1lc3NhZ2UsXHJcbiAgcmVtb3ZlUmVjZW50VXNlcixcclxuICBhZGROZXdVU2VyLFxyXG59IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmxldCBjbGllbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGF0Q2xpZW50KHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiByZXF1ZXN0XCIpO1xyXG4gIGNsaWVudCA9IFhNUFAuY3JlYXRlQ2xpZW50KHtcclxuICAgIGppZDogdXNlcm5hbWUsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIHRyYW5zcG9ydHM6IHtcclxuICAgICAgd2Vic29ja2V0OiBcIndzOi8vbW9uZ29vc2UubXlzbWFydHBieC5vcmc6NTI4MC93cy14bXBwXCIsXHJcbiAgICAgIGJvc2g6IFwiZmFsc2VcIixcclxuICAgIH0sXHJcbiAgICByb3N0ZXJWZXI6IFwidmVyMTRcIixcclxuICAgIHRpbWVvdXQ6IDYwLFxyXG4gIH0pO1xyXG4gIC8vY2xpZW50Lm9uKFwiKlwiLCBjb25zb2xlLmxvZyk7XHJcbiAgY2xpZW50Lm9uKFwic2Vzc2lvbjpzdGFydGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvbiBzdGFydGVkXCIpO1xyXG4gICAgZ2V0Q29udGFjdHMoKTtcclxuICAgIGNsaWVudC5zZW5kUHJlc2VuY2UoKTtcclxuICB9KTtcclxuXHJcbiAgLy9waW5naW5nIHRoZSBzZXJ2ZXJcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICB2YXIgaWZDb25uZWN0ZWQgPSB3aW5kb3cubmF2aWdhdG9yLm9uTGluZTtcclxuICAgIGxldCByZWNvbm5lY3Q7XHJcbiAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgIGNvbnN0IHBhc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpO1xyXG4gICAgaWYgKGlmQ29ubmVjdGVkKSB7XHJcbiAgICAgIGNsaWVudFxyXG4gICAgICAgIC5waW5nKHVzZXJuYW1lKVxyXG4gICAgICAgIC50aGVuKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhYWdlIHBpbmdcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBpbmcgZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgcmVjb25uZWN0ID0gY2hhdENsaWVudCh1c2VyLCBwYXNzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdFwiLCB1c2VyLCBwYXNzKTtcclxuICAgICAgICAgIC8vcmVjb25uZWN0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgIHJlY29ubmVjdC5jb25uZWN0KCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBlcnJvciBjb25uZWN0IHRvIHRoZSBzZXJ2ZXIgYWZ0ZXIgNjAgc2Vjbm9kc1wiKTtcclxuICAgICAgICAgICAgcmVjb25uZWN0LmNvbm5lY3QoKTtcclxuICAgICAgICAgIH0sIDYwMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICBjbGllbnQuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIDUwMDApO1xyXG5cclxuICBjbGllbnQub24oXCJhdXRoOmZhaWxlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInhtcHAgYXV0aGVudGljYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goc2V0TG9naW5FcnJvcihcIklOQ09SUkVDVCBVU0VSTkFNRSBPUiBQQVNTV09SRFwiKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInN1YnNjcmliZVwiLCAoUmVjZWl2ZWRQcmVzZW5jZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZWNlaXZlZCByZXF1ZXN0IGZyb21cIiwgUmVjZWl2ZWRQcmVzZW5jZSk7XHJcbiAgICBjbGllbnQuYWNjZXB0U3Vic2NyaXB0aW9uKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSk7XHJcbiAgICBjbGllbnQuc3Vic2NyaWJlKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSwgKCkgPT5cclxuICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JwdGlvbiByZXF1ZXN0IHNlbnQgYmFjayB0b1wiICsgUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwicHJlc2VuY2VcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgICBpZiAocHJlc2VuY2UuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpICYmIHByZXNlbmNlLnR5cGUgPT0gXCJ1bmF2YWlsYWJsZVwiKSB7XHJcbiAgICAgIC8vaGVyZSB3ZSBuZWVkIHRvIHVwZGF0ZSB1c2VyIHN0YXR1cyB0aGF0IHVzZXIgaXMgb2ZmbGluZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImkgYW0gdW5hdmFpbGFibGVcIiwgcHJlc2VuY2UuZnJvbSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHVwZGF0ZVVzZXJTdGF0dXMoe1xyXG4gICAgICAgICAgaWQ6IHByZXNlbmNlLmZyb20uc3BsaXQoXCJAXCIpWzBdLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICghcHJlc2VuY2UuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpKSB7XHJcbiAgICAgIC8vaGVyZSB3ZSBuZWVkIHRvIHVwZGF0ZSB1c2VyIHN0YXR1cyB0aGF0IHVzZXIgaXMgb25saW5lXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSBhdmFpbGFibGVcIiwgcHJlc2VuY2UuZnJvbSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHVwZGF0ZVVzZXJTdGF0dXMoe1xyXG4gICAgICAgICAgaWQ6IHByZXNlbmNlLmZyb20uc3BsaXQoXCJAXCIpWzBdLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInVuYXZhaWxhYmxlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJlc2VuY2UuZnJvbSArIFwiIGlzIG9mZmxpbmVcIik7XHJcbiAgfSk7XHJcbiAgLy8gY2xpZW50Lm9uKFwiYXZhaWxhYmxlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJhdmFpbGFibGVcIiwgcHJlc2VuY2UpO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvL2hlcmUgd2UgbGlzdGVuIGluY29taW5nIG1lc3NhZ2VzXHJcbiAgY2xpZW50Lm9uKFwibWVzc2FnZVwiLCAobmV3TWVzc2FnZSkgPT4ge1xyXG4gICAgcmVjZWl2ZWRNZXNzYWdlKG5ld01lc3NhZ2UpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmxldCByb3N0ZXI7XHJcbmNvbnN0IGdldENvbnRhY3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCBjb250YWN0cyA9IGF3YWl0IGNsaWVudC5nZXRSb3N0ZXIoKTtcclxuXHJcbiAgcm9zdGVyID0gY29udGFjdHMuaXRlbXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Um9zdGVySXRlbXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHJvc3RlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kTmV3TWVzc2FnZSA9IChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJhdCBzZW5kXCIgKyBuZXdNZXNzYWdlKTtcclxuICBjbGllbnQgJiYgY2xpZW50LnNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpO1xyXG59O1xyXG5cclxuY29uc3QgcmVjZWl2ZWRNZXNzYWdlID0gKHJlY2VpdmVkTWVzc2FnZSkgPT4ge1xyXG4gIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmNoYXRlZFVzZXJzO1xyXG4gIGNvbnN0IHVzZXJzUCA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5hbGx1c2VycztcclxuICBjb25zb2xlLmxvZyhcInVzZXJwXCIsIHVzZXJzUCk7XHJcbiAgbGV0IGZpbHRlcmVkVXNlcnMgPVxyXG4gICAgdXNlcnNQLmxlbmd0aCA+IDAgJiYgdXNlcnNQWzBdLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gbmV3TWVzc2FnZS50byk7XHJcblxyXG4gIG5ld01lc3NhZ2VbXCJtZXNzYWdlVGltZVwiXSA9IGRhdGVUaW1lKCk7XHJcbiAgbmV3TWVzc2FnZVtcImRpcmVjdGlvblwiXSA9IFwicmVjZWl2ZWRcIjtcclxuICBuZXdNZXNzYWdlW1wiZnJvbVwiXSA9IG5ld01lc3NhZ2UuZnJvbS5zcGxpdChcIi9cIilbMF07XHJcbiAgbmV3TWVzc2FnZVtcImZyb210b1wiXSA9IG5ld01lc3NhZ2UuZnJvbTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNlbnRVc2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBuZXdNZXNzYWdlLmZyb20pIHtcclxuICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgdmFyIG5hbWUgPVxyXG4gICAgZmlsdGVyZWRVc2VycyAmJiBmaWx0ZXJlZFVzZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IG5ld01lc3NhZ2UuZnJvbSk7XHJcbiAgbGV0IHJlY2l2ZWROYW1lID0gbmFtZS5maXJzdF9uYW1lO1xyXG4gIGNvbnNvbGUubG9nKFwicmVjaXZlZCBuYW1lXCIgKyBmaWx0ZXJlZFVzZXJzKTtcclxuICBpZiAoIWZvdW5kKSB7XHJcbiAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgIGlmICghY2kuaGFzT3duUHJvcGVydHkoXCJtZXNnXCIpKSB7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVtb3ZlUmVjZW50VXNlcihjaS5pZCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgYWRkTmV3VVNlcih7XHJcbiAgICAgICAgaWQ6IG5ld01lc3NhZ2UuZnJvbSxcclxuICAgICAgICBmaXJzdF9uYW1lOiBuZXdNZXNzYWdlLmZyb20sXHJcbiAgICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICBzdG9yZS5kaXNwYXRjaChzZXROZXdNZXNzYWdlKG5ld01lc3NhZ2UpKTtcclxuICBzdG9yZS5kaXNwYXRjaChcclxuICAgIHNldExhc3RNZXNzYWdlKHtcclxuICAgICAgaWQ6IG5ld01lc3NhZ2UuZnJvbSxcclxuICAgICAgbWVzc2FnZTogbmV3TWVzc2FnZS5ib2R5LFxyXG4gICAgICB0aW1lOiBkYXRlVGltZSgpLFxyXG4gICAgfSlcclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9