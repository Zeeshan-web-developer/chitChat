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
  });
  client.use(this.setCustomMessageAttributes());

  var setCustomMessageAttributes = function setCustomMessageAttributes() {
    var NS = "xmpp:customAttr";
    var customAttribute = stanzas.define({
      name: "custom",
      element: "custom",
      namespace: NS,
      fields: {
        value: stanzas.utils.textSub(NS, "value"),
        layout: stanzas.utils.attribute("layout")
      }
    });
    stanzas.withMessage(function (Message) {
      stanzas.extend(Message, customAttribute);
    });
  }; //pinging the server


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiWE1QUCIsImppZCIsInRyYW5zcG9ydHMiLCJ3ZWJzb2NrZXQiLCJib3NoIiwicm9zdGVyVmVyIiwidGltZW91dCIsIm9uIiwiZ2V0Q29udGFjdHMiLCJzZW5kUHJlc2VuY2UiLCJ1c2UiLCJzZXRDdXN0b21NZXNzYWdlQXR0cmlidXRlcyIsIk5TIiwiY3VzdG9tQXR0cmlidXRlIiwic3RhbnphcyIsImRlZmluZSIsIm5hbWUiLCJlbGVtZW50IiwibmFtZXNwYWNlIiwiZmllbGRzIiwidmFsdWUiLCJ1dGlscyIsInRleHRTdWIiLCJsYXlvdXQiLCJhdHRyaWJ1dGUiLCJ3aXRoTWVzc2FnZSIsIk1lc3NhZ2UiLCJleHRlbmQiLCJzZXRJbnRlcnZhbCIsImlmQ29ubmVjdGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVjb25uZWN0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXNzIiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25uZWN0Iiwic2V0VGltZW91dCIsImRpc2Nvbm5lY3QiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0TG9naW5FcnJvciIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJmcm9tIiwic3Vic2NyaWJlIiwicHJlc2VuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiLCJ1cGRhdGVVc2VyU3RhdHVzIiwiaWQiLCJzcGxpdCIsIm9ubGluZVN0YXR1cyIsIm5ld01lc3NhZ2UiLCJmb3VuZCIsImZvdW5kSUQiLCJyZWNlbnRVc2VycyIsImdldFN0YXRlIiwiY2hhdGVkVXNlcnMiLCJ1c2Vyc1AiLCJhbGx1c2VycyIsImZpbHRlcmVkVXNlcnMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0byIsImRhdGVUaW1lIiwiaSIsImZpbmQiLCJpdGVtIiwicmVjaXZlZE5hbWUiLCJmaXJzdF9uYW1lIiwibWFwIiwiY2kiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsInN0YXR1cyIsInNldE5ld01lc3NhZ2UiLCJzZXRMYXN0TWVzc2FnZSIsImJvZHkiLCJ0aW1lIiwicm9zdGVyIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMiLCJpdGVtcyIsImdldFJvc3Rlckl0ZW1zIiwic2VuZE5ld01lc3NhZ2UiLCJzZW5kTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBSUEsTUFBSjtBQUVlLFNBQVNDLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCQyxRQUE5QixFQUF3QztBQUNyREMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUwsUUFBTSxHQUFHTSxtREFBQSxDQUFrQjtBQUN6QkMsT0FBRyxFQUFFTCxRQURvQjtBQUV6QkMsWUFBUSxFQUFSQSxRQUZ5QjtBQUd6QkssY0FBVSxFQUFFO0FBQ1ZDLGVBQVMsRUFBRSwyQ0FERDtBQUVWQyxVQUFJLEVBQUU7QUFGSSxLQUhhO0FBT3pCQyxhQUFTLEVBQUUsT0FQYztBQVF6QkMsV0FBTyxFQUFFO0FBUmdCLEdBQWxCLENBQVQsQ0FGcUQsQ0FZckQ7O0FBQ0FaLFFBQU0sQ0FBQ2EsRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakNULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FTLGVBQVc7QUFDWGQsVUFBTSxDQUFDZSxZQUFQO0FBQ0QsR0FKRDtBQU1BZixRQUFNLENBQUNnQixHQUFQLENBQVcsS0FBS0MsMEJBQUwsRUFBWDs7QUFFQSxNQUFNQSwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLEdBQU07QUFDdkMsUUFBTUMsRUFBRSxHQUFHLGlCQUFYO0FBQ0EsUUFBTUMsZUFBZSxHQUFHQyxPQUFPLENBQUNDLE1BQVIsQ0FBZTtBQUNyQ0MsVUFBSSxFQUFFLFFBRCtCO0FBRXJDQyxhQUFPLEVBQUUsUUFGNEI7QUFHckNDLGVBQVMsRUFBRU4sRUFIMEI7QUFJckNPLFlBQU0sRUFBRTtBQUNOQyxhQUFLLEVBQUVOLE9BQU8sQ0FBQ08sS0FBUixDQUFjQyxPQUFkLENBQXNCVixFQUF0QixFQUEwQixPQUExQixDQUREO0FBRU5XLGNBQU0sRUFBRVQsT0FBTyxDQUFDTyxLQUFSLENBQWNHLFNBQWQsQ0FBd0IsUUFBeEI7QUFGRjtBQUo2QixLQUFmLENBQXhCO0FBVUFWLFdBQU8sQ0FBQ1csV0FBUixDQUFvQixVQUFDQyxPQUFELEVBQWE7QUFDL0JaLGFBQU8sQ0FBQ2EsTUFBUixDQUFlRCxPQUFmLEVBQXdCYixlQUF4QjtBQUNELEtBRkQ7QUFHRCxHQWZELENBckJxRCxDQXNDckQ7OztBQUNBZSxhQUFXLENBQUMsWUFBTTtBQUNoQixRQUFJQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsTUFBbkM7QUFDQSxRQUFJQyxTQUFKO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBYjtBQUNBLFFBQU1DLElBQUksR0FBR0YsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWI7O0FBQ0EsUUFBSVAsV0FBSixFQUFpQjtBQUNmbkMsWUFBTSxDQUNINEMsSUFESCxDQUNRMUMsUUFEUixFQUVHMkMsSUFGSCxDQUVRLFVBQUNDLE9BQUQsRUFBYTtBQUNqQjFDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDRCxPQUpILFdBS1MsVUFBQzBDLEtBQUQsRUFBVztBQUNoQjNDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIwQyxLQUExQjtBQUNBUixpQkFBUyxHQUFHdEMsVUFBVSxDQUFDdUMsSUFBRCxFQUFPRyxJQUFQLENBQXRCO0FBQ0F2QyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCbUMsSUFBdkIsRUFBNkJHLElBQTdCLEVBSGdCLENBSWhCOztBQUNBSixpQkFBUyxDQUFDUyxPQUFWO0FBQ0FDLGtCQUFVLENBQUMsWUFBTTtBQUNmN0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0FrQyxtQkFBUyxDQUFDUyxPQUFWO0FBQ0QsU0FIUyxFQUdQLEtBSE8sQ0FBVjtBQUlELE9BZkg7QUFnQkQsS0FqQkQsTUFpQk87QUFDTDVDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0FMLFlBQU0sQ0FBQ2tELFVBQVA7QUFDRDtBQUNGLEdBMUJVLEVBMEJSLElBMUJRLENBQVg7QUE0QkFsRCxRQUFNLENBQUNhLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLFlBQU07QUFDN0JULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0E4Qyw4REFBSyxDQUFDQyxRQUFOLENBQWVDLDBFQUFhLENBQUMsZ0NBQUQsQ0FBNUI7QUFDRCxHQUhEO0FBS0FyRCxRQUFNLENBQUNhLEVBQVAsQ0FBVSxXQUFWLEVBQXVCLFVBQUN5QyxnQkFBRCxFQUFzQjtBQUMzQ2xELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDaUQsZ0JBQXJDO0FBQ0F0RCxVQUFNLENBQUN1RCxrQkFBUCxDQUEwQkQsZ0JBQWdCLENBQUNFLElBQTNDO0FBQ0F4RCxVQUFNLENBQUN5RCxTQUFQLENBQWlCSCxnQkFBZ0IsQ0FBQ0UsSUFBbEMsRUFBd0M7QUFBQSxhQUN0Q3BELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFxQ2lELGdCQUFnQixDQUFDRSxJQUFsRSxDQURzQztBQUFBLEtBQXhDO0FBR0QsR0FORDtBQVFBeEQsUUFBTSxDQUFDYSxFQUFQLENBQVUsVUFBVixFQUFzQixVQUFDNkMsUUFBRCxFQUFjO0FBQ2xDLFFBQUlBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixLQUFtQ0QsUUFBUSxDQUFDRSxJQUFULElBQWlCLGFBQXhELEVBQXVFO0FBQ3JFO0FBQ0F4RCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ3FELFFBQVEsQ0FBQ0YsSUFBekM7QUFDQUwsZ0VBQUssQ0FBQ0MsUUFBTixDQUNFUyw2RUFBZ0IsQ0FBQztBQUNmQyxVQUFFLEVBQUVKLFFBQVEsQ0FBQ0YsSUFBVCxDQUFjTyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBRFc7QUFFZkMsb0JBQVksRUFBRTtBQUZDLE9BQUQsQ0FEbEI7QUFNRCxLQVRELE1BU08sSUFBSSxDQUFDTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBTCxFQUFzQztBQUMzQztBQUNBdkQsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJxRCxRQUFRLENBQUNGLElBQXZDO0FBQ0FMLGdFQUFLLENBQUNDLFFBQU4sQ0FDRVMsNkVBQWdCLENBQUM7QUFDZkMsVUFBRSxFQUFFSixRQUFRLENBQUNGLElBQVQsQ0FBY08sS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixDQURXO0FBRWZDLG9CQUFZLEVBQUU7QUFGQyxPQUFELENBRGxCO0FBTUQ7QUFDRixHQXBCRDtBQXNCQWhFLFFBQU0sQ0FBQ2EsRUFBUCxDQUFVLGFBQVYsRUFBeUIsVUFBQzZDLFFBQUQsRUFBYyxDQUNyQztBQUNELEdBRkQsRUF0R3FELENBeUdyRDtBQUNBO0FBQ0E7QUFFQTs7QUFDQTFELFFBQU0sQ0FBQ2EsRUFBUCxDQUFVLFNBQVYsRUFBcUIsVUFBQ29ELFVBQUQsRUFBZ0I7QUFDbkM3RCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCNEQsVUFBMUI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUNBLFFBQUlDLE9BQUo7QUFDQSxRQUFNQyxXQUFXLEdBQUdqQiwwREFBSyxDQUFDa0IsUUFBTixHQUFpQjdCLElBQWpCLENBQXNCOEIsV0FBMUM7QUFDQSxRQUFNQyxNQUFNLEdBQUdwQiwwREFBSyxDQUFDa0IsUUFBTixHQUFpQjdCLElBQWpCLENBQXNCZ0MsUUFBckM7QUFDQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVlrRSxNQUF4QjtBQUNBLFFBQUlFLGFBQWEsR0FDZkYsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLENBQWhCLElBQ0FILE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUksTUFBVixDQUFpQixVQUFDbkMsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ3NCLEVBQUwsS0FBWUcsVUFBVSxDQUFDVyxFQUFqQztBQUFBLEtBQWpCLENBRkY7QUFJQVgsY0FBVSxDQUFDLGFBQUQsQ0FBVixHQUE0QlksZ0ZBQVEsRUFBcEM7QUFDQVosY0FBVSxDQUFDLFdBQUQsQ0FBVixHQUEwQixVQUExQjtBQUNBQSxjQUFVLENBQUMsTUFBRCxDQUFWLEdBQXFCQSxVQUFVLENBQUNULElBQVgsQ0FBZ0JPLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBQXJCO0FBQ0FFLGNBQVUsQ0FBQyxRQUFELENBQVYsR0FBdUJBLFVBQVUsQ0FBQ1QsSUFBbEM7O0FBRUEsU0FBSyxJQUFJc0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsV0FBVyxDQUFDTSxNQUFoQyxFQUF3Q0ksQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxVQUFJVixXQUFXLENBQUNVLENBQUQsQ0FBWCxDQUFlaEIsRUFBZixLQUFzQkcsVUFBVSxDQUFDVCxJQUFyQyxFQUEyQztBQUN6Q1UsYUFBSyxHQUFHLElBQVI7QUFDQUMsZUFBTyxHQUFHQyxXQUFXLENBQUNVLENBQUQsQ0FBWCxDQUFlaEIsRUFBekI7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0QsUUFBSXhDLElBQUksR0FDTm1ELGFBQWEsSUFDYkEsYUFBYSxDQUFDTSxJQUFkLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNsQixFQUFMLEtBQVlHLFVBQVUsQ0FBQ1QsSUFBakM7QUFBQSxLQUFuQixDQUZGO0FBR0EsUUFBSXlCLFdBQVcsR0FBRzNELElBQUksQ0FBQzRELFVBQXZCO0FBQ0E5RSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBaUJvRSxhQUE3Qjs7QUFDQSxRQUFJLENBQUNQLEtBQUwsRUFBWTtBQUNWRSxpQkFBVyxDQUFDZSxHQUFaLENBQWdCLFVBQUNDLEVBQUQsRUFBUTtBQUN0QixZQUFJLENBQUNBLEVBQUUsQ0FBQ3pCLGNBQUgsQ0FBa0IsTUFBbEIsQ0FBTCxFQUFnQztBQUM5QlIsb0VBQUssQ0FBQ0MsUUFBTixDQUFlaUMsNkVBQWdCLENBQUNELEVBQUUsQ0FBQ3RCLEVBQUosQ0FBL0I7QUFDRDtBQUNGLE9BSkQ7QUFNQVgsZ0VBQUssQ0FBQ0MsUUFBTixDQUNFa0MsdUVBQVUsQ0FBQztBQUNUeEIsVUFBRSxFQUFFRyxVQUFVLENBQUNULElBRFA7QUFFUjBCLGtCQUFVLEVBQUVqQixVQUFVLENBQUNULElBRmY7QUFHUitCLGNBQU0sRUFBRSxRQUhBO0FBSVJ2QixvQkFBWSxFQUFFO0FBSk4sbUJBS0EsUUFMQSxFQURaO0FBU0Q7O0FBQ0Q1RCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBcUM2RCxLQUFqRDtBQUNBZiw4REFBSyxDQUFDQyxRQUFOLENBQWVvQywwRUFBYSxDQUFDdkIsVUFBRCxDQUE1QjtBQUNBZCw4REFBSyxDQUFDQyxRQUFOLENBQ0VxQywyRUFBYyxDQUFDO0FBQ2IzQixRQUFFLEVBQUVHLFVBQVUsQ0FBQ1QsSUFERjtBQUViVixhQUFPLEVBQUVtQixVQUFVLENBQUN5QixJQUZQO0FBR2JDLFVBQUksRUFBRWQsZ0ZBQVE7QUFIRCxLQUFELENBRGhCO0FBT0QsR0F0REQ7QUF1REEsU0FBTzdFLE1BQVA7QUFDRDtBQUVELElBQUk0RixNQUFKOztBQUNBLElBQU05RSxXQUFXO0FBQUEsOExBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDR2QsTUFBTSxDQUFDNkYsU0FBUCxFQURIOztBQUFBO0FBQ2RDLG9CQURjO0FBR2xCRixrQkFBTSxHQUFHRSxRQUFRLENBQUNDLEtBQWxCOztBQUhrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYakYsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjs7QUFNTyxJQUFNa0YsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ2xDLFNBQU9KLE1BQVA7QUFDRCxDQUZNO0FBSUEsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDaEMsVUFBRCxFQUFnQjtBQUM1Q2pFLFFBQU0sSUFBSUEsTUFBTSxDQUFDa0csV0FBUCxDQUFtQmpDLFVBQW5CLENBQVY7QUFDRCxDQUZNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3Nlbmdlci4yYjI0ZDI1NTg4YWQ5ODVlODljYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWE1QUCBmcm9tIFwic3RhbnphXCI7XHJcbmltcG9ydCBkYXRlVGltZSBmcm9tIFwiLi4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9kYXRldGltZVwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgdXBkYXRlVXNlclN0YXR1cyxcclxuICBzZXRMb2dpbkVycm9yLFxyXG4gIHNldE5ld01lc3NhZ2UsXHJcbiAgc2V0TGFzdE1lc3NhZ2UsXHJcbiAgcmVtb3ZlUmVjZW50VXNlcixcclxuICBhZGROZXdVU2VyLFxyXG59IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmxldCBjbGllbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGF0Q2xpZW50KHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiByZXF1ZXN0XCIpO1xyXG4gIGNsaWVudCA9IFhNUFAuY3JlYXRlQ2xpZW50KHtcclxuICAgIGppZDogdXNlcm5hbWUsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIHRyYW5zcG9ydHM6IHtcclxuICAgICAgd2Vic29ja2V0OiBcIndzOi8vbW9uZ29vc2UubXlzbWFydHBieC5vcmc6NTI4MC93cy14bXBwXCIsXHJcbiAgICAgIGJvc2g6IFwiZmFsc2VcIixcclxuICAgIH0sXHJcbiAgICByb3N0ZXJWZXI6IFwidmVyMTRcIixcclxuICAgIHRpbWVvdXQ6IDYwLFxyXG4gIH0pO1xyXG4gIC8vY2xpZW50Lm9uKFwiKlwiLCBjb25zb2xlLmxvZyk7XHJcbiAgY2xpZW50Lm9uKFwic2Vzc2lvbjpzdGFydGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvbiBzdGFydGVkXCIpO1xyXG4gICAgZ2V0Q29udGFjdHMoKTtcclxuICAgIGNsaWVudC5zZW5kUHJlc2VuY2UoKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50LnVzZSh0aGlzLnNldEN1c3RvbU1lc3NhZ2VBdHRyaWJ1dGVzKCkpO1xyXG5cclxuICBjb25zdCBzZXRDdXN0b21NZXNzYWdlQXR0cmlidXRlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IE5TID0gXCJ4bXBwOmN1c3RvbUF0dHJcIjtcclxuICAgIGNvbnN0IGN1c3RvbUF0dHJpYnV0ZSA9IHN0YW56YXMuZGVmaW5lKHtcclxuICAgICAgbmFtZTogXCJjdXN0b21cIixcclxuICAgICAgZWxlbWVudDogXCJjdXN0b21cIixcclxuICAgICAgbmFtZXNwYWNlOiBOUyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgdmFsdWU6IHN0YW56YXMudXRpbHMudGV4dFN1YihOUywgXCJ2YWx1ZVwiKSxcclxuICAgICAgICBsYXlvdXQ6IHN0YW56YXMudXRpbHMuYXR0cmlidXRlKFwibGF5b3V0XCIpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgc3Rhbnphcy53aXRoTWVzc2FnZSgoTWVzc2FnZSkgPT4ge1xyXG4gICAgICBzdGFuemFzLmV4dGVuZChNZXNzYWdlLCBjdXN0b21BdHRyaWJ1dGUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy9waW5naW5nIHRoZSBzZXJ2ZXJcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICB2YXIgaWZDb25uZWN0ZWQgPSB3aW5kb3cubmF2aWdhdG9yLm9uTGluZTtcclxuICAgIGxldCByZWNvbm5lY3Q7XHJcbiAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgIGNvbnN0IHBhc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpO1xyXG4gICAgaWYgKGlmQ29ubmVjdGVkKSB7XHJcbiAgICAgIGNsaWVudFxyXG4gICAgICAgIC5waW5nKHVzZXJuYW1lKVxyXG4gICAgICAgIC50aGVuKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhYWdlIHBpbmdcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBpbmcgZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgcmVjb25uZWN0ID0gY2hhdENsaWVudCh1c2VyLCBwYXNzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdFwiLCB1c2VyLCBwYXNzKTtcclxuICAgICAgICAgIC8vcmVjb25uZWN0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgIHJlY29ubmVjdC5jb25uZWN0KCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBlcnJvciBjb25uZWN0IHRvIHRoZSBzZXJ2ZXIgYWZ0ZXIgNjAgc2Vjbm9kc1wiKTtcclxuICAgICAgICAgICAgcmVjb25uZWN0LmNvbm5lY3QoKTtcclxuICAgICAgICAgIH0sIDYwMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICBjbGllbnQuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIDUwMDApO1xyXG5cclxuICBjbGllbnQub24oXCJhdXRoOmZhaWxlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInhtcHAgYXV0aGVudGljYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goc2V0TG9naW5FcnJvcihcIklOQ09SUkVDVCBVU0VSTkFNRSBPUiBQQVNTV09SRFwiKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInN1YnNjcmliZVwiLCAoUmVjZWl2ZWRQcmVzZW5jZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZWNlaXZlZCByZXF1ZXN0IGZyb21cIiwgUmVjZWl2ZWRQcmVzZW5jZSk7XHJcbiAgICBjbGllbnQuYWNjZXB0U3Vic2NyaXB0aW9uKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSk7XHJcbiAgICBjbGllbnQuc3Vic2NyaWJlKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSwgKCkgPT5cclxuICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JwdGlvbiByZXF1ZXN0IHNlbnQgYmFjayB0b1wiICsgUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwicHJlc2VuY2VcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgICBpZiAocHJlc2VuY2UuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpICYmIHByZXNlbmNlLnR5cGUgPT0gXCJ1bmF2YWlsYWJsZVwiKSB7XHJcbiAgICAgIC8vaGVyZSB3ZSBuZWVkIHRvIHVwZGF0ZSB1c2VyIHN0YXR1cyB0aGF0IHVzZXIgaXMgb2ZmbGluZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImkgYW0gdW5hdmFpbGFibGVcIiwgcHJlc2VuY2UuZnJvbSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHVwZGF0ZVVzZXJTdGF0dXMoe1xyXG4gICAgICAgICAgaWQ6IHByZXNlbmNlLmZyb20uc3BsaXQoXCJAXCIpWzBdLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICghcHJlc2VuY2UuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpKSB7XHJcbiAgICAgIC8vaGVyZSB3ZSBuZWVkIHRvIHVwZGF0ZSB1c2VyIHN0YXR1cyB0aGF0IHVzZXIgaXMgb25saW5lXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSBhdmFpbGFibGVcIiwgcHJlc2VuY2UuZnJvbSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHVwZGF0ZVVzZXJTdGF0dXMoe1xyXG4gICAgICAgICAgaWQ6IHByZXNlbmNlLmZyb20uc3BsaXQoXCJAXCIpWzBdLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInVuYXZhaWxhYmxlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJlc2VuY2UuZnJvbSArIFwiIGlzIG9mZmxpbmVcIik7XHJcbiAgfSk7XHJcbiAgLy8gY2xpZW50Lm9uKFwiYXZhaWxhYmxlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJhdmFpbGFibGVcIiwgcHJlc2VuY2UpO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvL2hlcmUgd2UgbGlzdGVuIGluY29taW5nIG1lc3NhZ2VzXHJcbiAgY2xpZW50Lm9uKFwibWVzc2FnZVwiLCAobmV3TWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJuZXdNZXNzYWdlXCIsIG5ld01lc3NhZ2UpO1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZXQgZm91bmRJRDtcclxuICAgIGNvbnN0IHJlY2VudFVzZXJzID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmNoYXRlZFVzZXJzO1xyXG4gICAgY29uc3QgdXNlcnNQID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmFsbHVzZXJzO1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2VyczogXCIgKyB1c2Vyc1ApO1xyXG4gICAgbGV0IGZpbHRlcmVkVXNlcnMgPVxyXG4gICAgICB1c2Vyc1AubGVuZ3RoID4gMCAmJlxyXG4gICAgICB1c2Vyc1BbMF0uZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBuZXdNZXNzYWdlLnRvKTtcclxuXHJcbiAgICBuZXdNZXNzYWdlW1wibWVzc2FnZVRpbWVcIl0gPSBkYXRlVGltZSgpO1xyXG4gICAgbmV3TWVzc2FnZVtcImRpcmVjdGlvblwiXSA9IFwicmVjZWl2ZWRcIjtcclxuICAgIG5ld01lc3NhZ2VbXCJmcm9tXCJdID0gbmV3TWVzc2FnZS5mcm9tLnNwbGl0KFwiL1wiKVswXTtcclxuICAgIG5ld01lc3NhZ2VbXCJmcm9tdG9cIl0gPSBuZXdNZXNzYWdlLmZyb207XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNlbnRVc2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocmVjZW50VXNlcnNbaV0uaWQgPT09IG5ld01lc3NhZ2UuZnJvbSkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICBmb3VuZElEID0gcmVjZW50VXNlcnNbaV0uaWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBuYW1lID1cclxuICAgICAgZmlsdGVyZWRVc2VycyAmJlxyXG4gICAgICBmaWx0ZXJlZFVzZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IG5ld01lc3NhZ2UuZnJvbSk7XHJcbiAgICBsZXQgcmVjaXZlZE5hbWUgPSBuYW1lLmZpcnN0X25hbWU7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlY2l2ZWQgbmFtZVwiICsgZmlsdGVyZWRVc2Vycyk7XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVtb3ZlUmVjZW50VXNlcihjaS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICAgIGlkOiBuZXdNZXNzYWdlLmZyb20sXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiBuZXdNZXNzYWdlLmZyb20sXHJcbiAgICAgICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwidXNlciBmb3VuZCBvbiBtZXNzYWdlIHJlY2VpdmVkOiBcIiArIGZvdW5kKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHNldE5ld01lc3NhZ2UobmV3TWVzc2FnZSkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHNldExhc3RNZXNzYWdlKHtcclxuICAgICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICAgIG1lc3NhZ2U6IG5ld01lc3NhZ2UuYm9keSxcclxuICAgICAgICB0aW1lOiBkYXRlVGltZSgpLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9KTtcclxuICByZXR1cm4gY2xpZW50O1xyXG59XHJcblxyXG5sZXQgcm9zdGVyO1xyXG5jb25zdCBnZXRDb250YWN0cyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgY29udGFjdHMgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcblxyXG4gIHJvc3RlciA9IGNvbnRhY3RzLml0ZW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJvc3Rlckl0ZW1zID0gKCkgPT4ge1xyXG4gIHJldHVybiByb3N0ZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZE5ld01lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xyXG4gIGNsaWVudCAmJiBjbGllbnQuc2VuZE1lc3NhZ2UobmV3TWVzc2FnZSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=