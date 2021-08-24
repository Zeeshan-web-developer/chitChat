webpackHotUpdate_N_E("pages/index",{

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var initialState = {
  currentUser: {
    username: null,
    accountId: null,
    jid: null
  },
  accountId: null,
  userStatus: "unavailable",
  client: null,
  loginErrors: [],
  loading: false,
  activeTab: "chat",
  users: [],
  chatWith: {
    name: "A",
    status: "online",
    id: 2
  },
  newContact: "contact",
  componentUnmount: null,
  roster: "",
  alluserStatus: [],
  allusers: [],
  allMessage: [{
    from: 2,
    to: 1,
    messageTime: "2021-08-07 09:03:10",
    body: "i have received this message from user with id 2",
    chatType: "chat",
    direction: "received",
    fromto: 2
  }, {
    from: 1,
    to: 2,
    messageTime: "2021-08-07 09:03:10",
    body: "assume i amm a logged in user . i am sending this message",
    chatType: "chat",
    direction: "send",
    fromto: 2
  }],
  chatedUsers: [{
    id: 1,
    first_name: "JACKILINE",
    status: "online",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    lastMessageAt: "2021-08-07 09:03:10"
  }, {
    id: 2,
    first_name: "Jon",
    status: "offline",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "offline",
    lastMessageAt: "2021-08-07 09:03:56"
  }]
};

var user_reducer = function user_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_USER_STATUS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        userStatus: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_CLIENT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        client: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginErrors: [action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_LODING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_ACTIVE_TAB"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        activeTab: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: [action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_CHAT_WITH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatWith: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_CHATED_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        newContact: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["CHAT_COMPONENT_UNMOUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        componentUnmount: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["ADD_NEW_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatedUsers: [action.payload].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.chatedUsers))
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_NEW_MESSAGE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        allMessage: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.allMessage), [action.payload])
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatedUsers: state.chatedUsers.filter(function (user) {
          return user.id !== action.payload;
        })
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["LAST_MESSAGE_TIME"]:
      return react_addons_update__WEBPACK_IMPORTED_MODULE_4___default()(state, {
        chatedUsers: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.payload.id, {
          lastMessageAt: {
            $set: action.payload.time
          }
        })
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_LAST_MESSAGE"]:
      var foun = state.chatedUsers && state.chatedUsers.length ? !!state.chatedUsers.find(function (u) {
        return u.id === action.payload.id;
      }) : false;
      console.log("function", foun, action.payload.id);

      if (foun) {
        return _objectSpread(_objectSpread({}, state), {}, {
          chatedUsers: state.chatedUsers.map(function (user, i) {
            return user.id === action.payload.id ? _objectSpread(_objectSpread({}, user), {}, {
              mesg: action.payload.lastMessage,
              lastMessageAt: action.payload.time
            }) : user;
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_ROSTER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        roster: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.roster), [action.payload])
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_ALL_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        allusers: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_STATUS"]:
      var found = state.alluserStatus && state.alluserStatus.length ? !!state.alluserStatus.find(function (u) {
        return u.id === action.payload.id;
      }) : false; //if the user is already

      if (found) {
        console.log("user alredy already exists");
        return _objectSpread(_objectSpread({}, state), {}, {
          alluserStatus: state.alluserStatus.map(function (userStatus, i) {
            return userStatus.id === action.payload.id ? _objectSpread(_objectSpread({}, userStatus), {}, {
              onlineStatus: action.payload.onlineStatus
            }) : userStatus;
          })
        }); //update the user status for fist time
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          alluserStatus: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.alluserStatus), [action.payload])
        });
      }

    //Update recent user status:

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RECENT_USER_STATUS"]:
      var found1 = state.alluserStatus && state.alluserStatus.length ? !!state.alluserStatus.find(function (u) {
        return u.id === action.payload.id;
      }) : false; //if the user is already

      if (found1) {
        console.log("user alredy already exists");
        return _objectSpread(_objectSpread({}, state), {}, {
          chatedUsers: state.chatedUsers.map(function (userStatus, i) {
            return userStatus.id === action.payload.id ? _objectSpread(_objectSpread({}, userStatus), {}, {
              onlineStatus: action.payload.onlineStatus
            }) : userStatus;
          })
        });
      }

    default:
      {
        return state;
      }
  }
};

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  user: user_reducer
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
      _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["updateRecentUserStatus"])({
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
      _redux_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["updateRecentUserStatus"])({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0YW56YS9jaGF0Q2xpZW50LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImN1cnJlbnRVc2VyIiwidXNlcm5hbWUiLCJhY2NvdW50SWQiLCJqaWQiLCJ1c2VyU3RhdHVzIiwiY2xpZW50IiwibG9naW5FcnJvcnMiLCJsb2FkaW5nIiwiYWN0aXZlVGFiIiwidXNlcnMiLCJjaGF0V2l0aCIsIm5hbWUiLCJzdGF0dXMiLCJpZCIsIm5ld0NvbnRhY3QiLCJjb21wb25lbnRVbm1vdW50Iiwicm9zdGVyIiwiYWxsdXNlclN0YXR1cyIsImFsbHVzZXJzIiwiYWxsTWVzc2FnZSIsImZyb20iLCJ0byIsIm1lc3NhZ2VUaW1lIiwiYm9keSIsImNoYXRUeXBlIiwiZGlyZWN0aW9uIiwiZnJvbXRvIiwiY2hhdGVkVXNlcnMiLCJmaXJzdF9uYW1lIiwibWVzZyIsImxhc3RTZWVuRGF0ZSIsIm9ubGluZVN0YXR1cyIsImxhc3RNZXNzYWdlQXQiLCJ1c2VyX3JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiLCJmaWx0ZXIiLCJ1c2VyIiwidXBkYXRlIiwiJHNldCIsInRpbWUiLCJmb3VuIiwibGVuZ3RoIiwiZmluZCIsInUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaSIsImxhc3RNZXNzYWdlIiwiZm91bmQiLCJmb3VuZDEiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNoYXRDbGllbnQiLCJwYXNzd29yZCIsIlhNUFAiLCJ0cmFuc3BvcnRzIiwid2Vic29ja2V0IiwiYm9zaCIsInJvc3RlclZlciIsInRpbWVvdXQiLCJvbiIsImdldENvbnRhY3RzIiwic2VuZFByZXNlbmNlIiwic2V0SW50ZXJ2YWwiLCJpZkNvbm5lY3RlZCIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm9uTGluZSIsInJlY29ubmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXNzIiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25uZWN0Iiwic2V0VGltZW91dCIsImRpc2Nvbm5lY3QiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0TG9naW5FcnJvciIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJwcmVzZW5jZSIsImhhc093blByb3BlcnR5IiwidXBkYXRlVXNlclN0YXR1cyIsInNwbGl0IiwidXBkYXRlUmVjZW50VXNlclN0YXR1cyIsIm5ld01lc3NhZ2UiLCJyZWNlaXZlZE1lc3NhZ2UiLCJnZXRSb3N0ZXIiLCJjb250YWN0cyIsIml0ZW1zIiwiZ2V0Um9zdGVySXRlbXMiLCJzZW5kTmV3TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwicmVjZW50VXNlcnMiLCJnZXRTdGF0ZSIsImRhdGVUaW1lIiwic3BsaXRCb2R5IiwiY2kiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsInNldE5ld01lc3NhZ2UiLCJzZXRMYXN0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxhQUFXLEVBQUU7QUFBRUMsWUFBUSxFQUFFLElBQVo7QUFBa0JDLGFBQVMsRUFBRSxJQUE3QjtBQUFtQ0MsT0FBRyxFQUFFO0FBQXhDLEdBRE07QUFFbkJELFdBQVMsRUFBRSxJQUZRO0FBR25CRSxZQUFVLEVBQUUsYUFITztBQUluQkMsUUFBTSxFQUFFLElBSlc7QUFLbkJDLGFBQVcsRUFBRSxFQUxNO0FBTW5CQyxTQUFPLEVBQUUsS0FOVTtBQU9uQkMsV0FBUyxFQUFFLE1BUFE7QUFRbkJDLE9BQUssRUFBRSxFQVJZO0FBU25CQyxVQUFRLEVBQUU7QUFBRUMsUUFBSSxFQUFFLEdBQVI7QUFBYUMsVUFBTSxFQUFFLFFBQXJCO0FBQStCQyxNQUFFLEVBQUU7QUFBbkMs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LE1BQWxCLENBQUwsRUFBZ0M7QUFDOUJQLGtFQUFLLENBQUNDLFFBQU4sQ0FBZXVCLDZFQUFnQixDQUFDRCxFQUFFLENBQUM5RixFQUFKLENBQS9CO0FBQ0Q7QUFDRixLQUpEO0FBTUF1RSw4REFBSyxDQUFDQyxRQUFOLENBQ0V3Qix1RUFBVSxDQUFDO0FBQ1RoRyxRQUFFLEVBQUVrRixVQUFVLENBQUMzRSxJQURQO0FBRVJRLGdCQUFVLEVBQUVtRSxVQUFVLENBQUNuRSxVQUZmO0FBR1JoQixZQUFNLEVBQUUsUUFIQTtBQUlSbUIsa0JBQVksRUFBRTtBQUpOLGlCQUtBLFFBTEEsRUFEWjtBQVNEOztBQUNEcUQsNERBQUssQ0FBQ0MsUUFBTixDQUFleUIsMEVBQWEsQ0FBQ2YsVUFBRCxDQUE1QjtBQUNBWCw0REFBSyxDQUFDQyxRQUFOLENBQ0UwQiwyRUFBYyxDQUFDO0FBQ2JsRyxNQUFFLEVBQUVrRixVQUFVLENBQUMzRSxJQURGO0FBRWIyRCxXQUFPLEVBQUVnQixVQUFVLENBQUN4RSxJQUZQO0FBR2JvQixRQUFJLEVBQUU4RCxnRkFBUTtBQUhELEdBQUQsQ0FEaEI7QUFPRCxDQTNDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MWI1MGE0YzJmOTg2ZTM5ZjAzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1cGRhdGUgZnJvbSBcInJlYWN0LWFkZG9ucy11cGRhdGVcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGN1cnJlbnRVc2VyOiB7IHVzZXJuYW1lOiBudWxsLCBhY2NvdW50SWQ6IG51bGwsIGppZDogbnVsbCB9LFxyXG4gIGFjY291bnRJZDogbnVsbCxcclxuICB1c2VyU3RhdHVzOiBcInVuYXZhaWxhYmxlXCIsXHJcbiAgY2xpZW50OiBudWxsLFxyXG4gIGxvZ2luRXJyb3JzOiBbXSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBhY3RpdmVUYWI6IFwiY2hhdFwiLFxyXG4gIHVzZXJzOiBbXSxcclxuICBjaGF0V2l0aDogeyBuYW1lOiBcIkFcIiwgc3RhdHVzOiBcIm9ubGluZVwiLCBpZDogMiB9LFxyXG4gIG5ld0NvbnRhY3Q6IFwiY29udGFjdFwiLFxyXG4gIGNvbXBvbmVudFVubW91bnQ6IG51bGwsXHJcbiAgcm9zdGVyOiBcIlwiLFxyXG4gIGFsbHVzZXJTdGF0dXM6IFtdLFxyXG4gIGFsbHVzZXJzOiBbXSxcclxuICBhbGxNZXNzYWdlOiBbXHJcbiAgICB7XHJcbiAgICAgIGZyb206IDIsXHJcbiAgICAgIHRvOiAxLFxyXG4gICAgICBtZXNzYWdlVGltZTogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXHJcbiAgICAgIGJvZHk6IFwiaSBoYXZlIHJlY2VpdmVkIHRoaXMgbWVzc2FnZSBmcm9tIHVzZXIgd2l0aCBpZCAyXCIsXHJcbiAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcclxuICAgICAgZGlyZWN0aW9uOiBcInJlY2VpdmVkXCIsXHJcbiAgICAgIGZyb210bzogMixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBmcm9tOiAxLFxyXG4gICAgICB0bzogMixcclxuICAgICAgbWVzc2FnZVRpbWU6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgICBib2R5OiBcImFzc3VtZSBpIGFtbSBhIGxvZ2dlZCBpbiB1c2VyIC4gaSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZVwiLFxyXG4gICAgICBjaGF0VHlwZTogXCJjaGF0XCIsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJzZW5kXCIsXHJcbiAgICAgIGZyb210bzogMixcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGF0ZWRVc2VyczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZmlyc3RfbmFtZTogXCJKQUNLSUxJTkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBtZXNnOiBcImhvdyBhcmUgeW91XCIsXHJcbiAgICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxyXG4gICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiSm9uXCIsXHJcbiAgICAgIHN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIG1lc2c6IFwiaG93IGFyZSB5b3VcIixcclxuICAgICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXHJcbiAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzo1NlwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5jb25zdCB1c2VyX3JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudFVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUl9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlclN0YXR1czogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DTElFTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9naW5FcnJvcnM6IFthY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX0xPRElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfVEFCOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFjdGl2ZVRhYjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NIQVRfV0lUSDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGF0V2l0aDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVEVEX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5ld0NvbnRhY3Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0hBVF9DT01QT05FTlRfVU5NT1VOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wb25lbnRVbm1vdW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkFERF9ORVdfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuY2hhdGVkVXNlcnNdLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX05FV19NRVNTQUdFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBhbGxNZXNzYWdlOiBbLi4uc3RhdGUuYWxsTWVzc2FnZSwgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRU1PVkVfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IHN0YXRlLmNoYXRlZFVzZXJzLmZpbHRlcihcclxuICAgICAgICAgICh1c2VyKSA9PiB1c2VyLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MQVNUX01FU1NBR0VfVElNRTpcclxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGNoYXRlZFVzZXJzOiB7XHJcbiAgICAgICAgICBbYWN0aW9uLnBheWxvYWQuaWRdOiB7XHJcbiAgICAgICAgICAgIGxhc3RNZXNzYWdlQXQ6IHsgJHNldDogYWN0aW9uLnBheWxvYWQudGltZSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9MQVNUX01FU1NBR0U6XHJcbiAgICAgIGxldCBmb3VuID1cclxuICAgICAgICBzdGF0ZS5jaGF0ZWRVc2VycyAmJiBzdGF0ZS5jaGF0ZWRVc2Vycy5sZW5ndGhcclxuICAgICAgICAgID8gISFzdGF0ZS5jaGF0ZWRVc2Vycy5maW5kKCh1KSA9PiB1LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICAgIDogZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZnVuY3Rpb25cIiwgZm91biwgYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgICBpZiAoZm91bikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNoYXRlZFVzZXJzOiBzdGF0ZS5jaGF0ZWRVc2Vycy5tYXAoKHVzZXIsIGkpID0+XHJcbiAgICAgICAgICAgIHVzZXIuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgIG1lc2c6IGFjdGlvbi5wYXlsb2FkLmxhc3RNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICBsYXN0TWVzc2FnZUF0OiBhY3Rpb24ucGF5bG9hZC50aW1lLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDogdXNlclxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9ST1NURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcm9zdGVyOiBbLi4uc3RhdGUucm9zdGVyLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9BTExfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWxsdXNlcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfVVNFUl9TVEFUVVM6XHJcbiAgICAgIGxldCBmb3VuZCA9XHJcbiAgICAgICAgc3RhdGUuYWxsdXNlclN0YXR1cyAmJiBzdGF0ZS5hbGx1c2VyU3RhdHVzLmxlbmd0aFxyXG4gICAgICAgICAgPyAhIXN0YXRlLmFsbHVzZXJTdGF0dXMuZmluZCgodSkgPT4gdS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpXHJcbiAgICAgICAgICA6IGZhbHNlO1xyXG5cclxuICAgICAgLy9pZiB0aGUgdXNlciBpcyBhbHJlYWR5XHJcbiAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBhbHJlZHkgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWxsdXNlclN0YXR1czogc3RhdGUuYWxsdXNlclN0YXR1cy5tYXAoKHVzZXJTdGF0dXMsIGkpID0+XHJcbiAgICAgICAgICAgIHVzZXJTdGF0dXMuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgPyB7IC4uLnVzZXJTdGF0dXMsIG9ubGluZVN0YXR1czogYWN0aW9uLnBheWxvYWQub25saW5lU3RhdHVzIH1cclxuICAgICAgICAgICAgICA6IHVzZXJTdGF0dXNcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgdGhlIHVzZXIgc3RhdHVzIGZvciBmaXN0IHRpbWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhbGx1c2VyU3RhdHVzOiBbLi4uc3RhdGUuYWxsdXNlclN0YXR1cywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAvL1VwZGF0ZSByZWNlbnQgdXNlciBzdGF0dXM6XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9SRUNFTlRfVVNFUl9TVEFUVVM6XHJcbiAgICAgIGxldCBmb3VuZDEgPVxyXG4gICAgICAgIHN0YXRlLmFsbHVzZXJTdGF0dXMgJiYgc3RhdGUuYWxsdXNlclN0YXR1cy5sZW5ndGhcclxuICAgICAgICAgID8gISFzdGF0ZS5hbGx1c2VyU3RhdHVzLmZpbmQoKHUpID0+IHUuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVxyXG4gICAgICAgICAgOiBmYWxzZTtcclxuXHJcbiAgICAgIC8vaWYgdGhlIHVzZXIgaXMgYWxyZWFkeVxyXG4gICAgICBpZiAoZm91bmQxKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGFscmVkeSBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjaGF0ZWRVc2Vyczogc3RhdGUuY2hhdGVkVXNlcnMubWFwKCh1c2VyU3RhdHVzLCBpKSA9PlxyXG4gICAgICAgICAgICB1c2VyU3RhdHVzLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICAgICAgID8geyAuLi51c2VyU3RhdHVzLCBvbmxpbmVTdGF0dXM6IGFjdGlvbi5wYXlsb2FkLm9ubGluZVN0YXR1cyB9XHJcbiAgICAgICAgICAgICAgOiB1c2VyU3RhdHVzXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgdXNlcjogdXNlcl9yZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCAqIGFzIFhNUFAgZnJvbSBcInN0YW56YVwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvbGVmdFNpZGViYXIvZGF0ZXRpbWVcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVVzZXJTdGF0dXMsXHJcbiAgc2V0TG9naW5FcnJvcixcclxuICBzZXROZXdNZXNzYWdlLFxyXG4gIHNldExhc3RNZXNzYWdlLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbiAgYWRkTmV3VVNlcixcclxuICB1cGRhdGVSZWNlbnRVc2VyU3RhdHVzLFxyXG59IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmxldCBjbGllbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGF0Q2xpZW50KHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiByZXF1ZXN0XCIpO1xyXG4gIGNsaWVudCA9IFhNUFAuY3JlYXRlQ2xpZW50KHtcclxuICAgIGppZDogdXNlcm5hbWUsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIHRyYW5zcG9ydHM6IHtcclxuICAgICAgd2Vic29ja2V0OiBcIndzOi8vbW9uZ29vc2UubXlzbWFydHBieC5vcmc6NTI4MC93cy14bXBwXCIsXHJcbiAgICAgIGJvc2g6IFwiZmFsc2VcIixcclxuICAgIH0sXHJcbiAgICByb3N0ZXJWZXI6IFwidmVyMTRcIixcclxuICAgIHRpbWVvdXQ6IDYwLFxyXG4gIH0pO1xyXG4gIC8vY2xpZW50Lm9uKFwiKlwiLCBjb25zb2xlLmxvZyk7XHJcbiAgY2xpZW50Lm9uKFwic2Vzc2lvbjpzdGFydGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvbiBzdGFydGVkXCIpO1xyXG4gICAgZ2V0Q29udGFjdHMoKTtcclxuICAgIGNsaWVudC5zZW5kUHJlc2VuY2UoKTtcclxuICB9KTtcclxuXHJcbiAgLy9waW5naW5nIHRoZSBzZXJ2ZXJcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICB2YXIgaWZDb25uZWN0ZWQgPSB3aW5kb3cubmF2aWdhdG9yLm9uTGluZTtcclxuICAgIGxldCByZWNvbm5lY3Q7XHJcbiAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgIGNvbnN0IHBhc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpO1xyXG4gICAgaWYgKGlmQ29ubmVjdGVkKSB7XHJcbiAgICAgIGNsaWVudFxyXG4gICAgICAgIC5waW5nKHVzZXJuYW1lKVxyXG4gICAgICAgIC50aGVuKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhYWdlIHBpbmdcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBpbmcgZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgcmVjb25uZWN0ID0gY2hhdENsaWVudCh1c2VyLCBwYXNzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdFwiLCB1c2VyLCBwYXNzKTtcclxuICAgICAgICAgIC8vcmVjb25uZWN0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgIHJlY29ubmVjdC5jb25uZWN0KCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBlcnJvciBjb25uZWN0IHRvIHRoZSBzZXJ2ZXIgYWZ0ZXIgNjAgc2Vjbm9kc1wiKTtcclxuICAgICAgICAgICAgcmVjb25uZWN0LmNvbm5lY3QoKTtcclxuICAgICAgICAgIH0sIDYwMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICBjbGllbnQuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIDUwMDApO1xyXG5cclxuICBjbGllbnQub24oXCJhdXRoOmZhaWxlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInhtcHAgYXV0aGVudGljYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goc2V0TG9naW5FcnJvcihcIklOQ09SUkVDVCBVU0VSTkFNRSBPUiBQQVNTV09SRFwiKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInN1YnNjcmliZVwiLCAoUmVjZWl2ZWRQcmVzZW5jZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZWNlaXZlZCByZXF1ZXN0IGZyb21cIiwgUmVjZWl2ZWRQcmVzZW5jZSk7XHJcbiAgICBjbGllbnQuYWNjZXB0U3Vic2NyaXB0aW9uKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSk7XHJcbiAgICBjbGllbnQuc3Vic2NyaWJlKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSwgKCkgPT5cclxuICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JwdGlvbiByZXF1ZXN0IHNlbnQgYmFjayB0b1wiICsgUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwicHJlc2VuY2VcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgICBpZiAocHJlc2VuY2UuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpICYmIHByZXNlbmNlLnR5cGUgPT0gXCJ1bmF2YWlsYWJsZVwiKSB7XHJcbiAgICAgIC8vaGVyZSB3ZSBuZWVkIHRvIHVwZGF0ZSB1c2VyIHN0YXR1cyB0aGF0IHVzZXIgaXMgb2ZmbGluZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImkgYW0gdW5hdmFpbGFibGVcIiwgcHJlc2VuY2UuZnJvbSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHVwZGF0ZVVzZXJTdGF0dXMoe1xyXG4gICAgICAgICAgaWQ6IHByZXNlbmNlLmZyb20uc3BsaXQoXCJAXCIpWzBdLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVSZWNlbnRVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoIXByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSkge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9ubGluZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImkgYW0gYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVSZWNlbnRVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJ1bmF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByZXNlbmNlLmZyb20gKyBcIiBpcyBvZmZsaW5lXCIpO1xyXG4gIH0pO1xyXG4gIC8vIGNsaWVudC5vbihcImF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiYXZhaWxhYmxlXCIsIHByZXNlbmNlKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy9oZXJlIHdlIGxpc3RlbiBpbmNvbWluZyBtZXNzYWdlc1xyXG4gIGNsaWVudC5vbihcIm1lc3NhZ2VcIiwgKG5ld01lc3NhZ2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib24gbWVzc2FnZVwiLCBuZXdNZXNzYWdlKTtcclxuICAgIHJlY2VpdmVkTWVzc2FnZShuZXdNZXNzYWdlKTtcclxuICB9KTtcclxuICByZXR1cm4gY2xpZW50O1xyXG59XHJcblxyXG5sZXQgcm9zdGVyO1xyXG5jb25zdCBnZXRDb250YWN0cyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgY29udGFjdHMgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcblxyXG4gIHJvc3RlciA9IGNvbnRhY3RzLml0ZW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJvc3Rlckl0ZW1zID0gKCkgPT4ge1xyXG4gIHJldHVybiByb3N0ZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZE5ld01lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiYXQgc2VuZFwiICsgbmV3TWVzc2FnZSk7XHJcbiAgY2xpZW50ICYmIGNsaWVudC5zZW5kTWVzc2FnZShuZXdNZXNzYWdlKTtcclxufTtcclxuXHJcbmNvbnN0IHJlY2VpdmVkTWVzc2FnZSA9IChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgY29uc3QgcmVjZW50VXNlcnMgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuY2hhdGVkVXNlcnM7XHJcbiAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgY29uc29sZS5sb2coXCJyZWNcIiwgbmV3TWVzc2FnZSk7XHJcbiAgbmV3TWVzc2FnZVtcIm1lc3NhZ2VUaW1lXCJdID0gZGF0ZVRpbWUoKTtcclxuICBuZXdNZXNzYWdlW1wiZGlyZWN0aW9uXCJdID0gXCJyZWNlaXZlZFwiO1xyXG4gIG5ld01lc3NhZ2VbXCJmcm9tXCJdID0gbmV3TWVzc2FnZS5mcm9tLnNwbGl0KFwiL1wiKVswXTtcclxuICBuZXdNZXNzYWdlW1wiZnJvbXRvXCJdID0gbmV3TWVzc2FnZS5mcm9tO1xyXG4gIGxldCBzcGxpdEJvZHkgPSBuZXdNZXNzYWdlICYmIG5ld01lc3NhZ2UuYm9keS5zcGxpdChcIiZcIik7XHJcbiAgbmV3TWVzc2FnZVtcImJvZHlcIl0gPSBzcGxpdEJvZHkgJiYgc3BsaXRCb2R5WzBdO1xyXG4gIG5ld01lc3NhZ2VbXCJmaXJzdF9uYW1lXCJdID0gc3BsaXRCb2R5Lmxlbmd0aCA+IDAgJiYgc3BsaXRCb2R5WzFdLnNwbGl0KFwiOlwiKVsxXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocmVjZW50VXNlcnNbaV0uaWQgPT09IG5ld01lc3NhZ2UuZnJvbSkge1xyXG4gICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCFmb3VuZCkge1xyXG4gICAgcmVjZW50VXNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIGFkZE5ld1VTZXIoe1xyXG4gICAgICAgIGlkOiBuZXdNZXNzYWdlLmZyb20sXHJcbiAgICAgICAgZmlyc3RfbmFtZTogbmV3TWVzc2FnZS5maXJzdF9uYW1lLFxyXG4gICAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgc3RvcmUuZGlzcGF0Y2goc2V0TmV3TWVzc2FnZShuZXdNZXNzYWdlKSk7XHJcbiAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICBzZXRMYXN0TWVzc2FnZSh7XHJcbiAgICAgIGlkOiBuZXdNZXNzYWdlLmZyb20sXHJcbiAgICAgIG1lc3NhZ2U6IG5ld01lc3NhZ2UuYm9keSxcclxuICAgICAgdGltZTogZGF0ZVRpbWUoKSxcclxuICAgIH0pXHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==