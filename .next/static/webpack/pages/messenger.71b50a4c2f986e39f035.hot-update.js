webpackHotUpdate_N_E("pages/messenger",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0YW56YS9jaGF0Q2xpZW50LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImN1cnJlbnRVc2VyIiwidXNlcm5hbWUiLCJhY2NvdW50SWQiLCJqaWQiLCJ1c2VyU3RhdHVzIiwiY2xpZW50IiwibG9naW5FcnJvcnMiLCJsb2FkaW5nIiwiYWN0aXZlVGFiIiwidXNlcnMiLCJjaGF0V2l0aCIsIm5hbWUiLCJzdGF0dXMiLCJpZCIsIm5ld0NvbnRhY3QiLCJjb21wb25lbnRVbm1vdW50Iiwicm9zdGVyIiwiYWxsdXNlclN0YXR1cyIsImFsbHVzZXJzIiwiYWxsTWVzc2FnZSIsImZyb20iLCJ0byIsIm1lc3NhZ2VUaW1lIiwiYm9keSIsImNoYXRUeXBlIiwiZGlyZWN0aW9uIiwiZnJvbXRvIiwiY2hhdGVkVXNlcnMiLCJmaXJzdF9uYW1lIiwibWVzZyIsImxhc3RTZWVuRGF0ZSIsIm9ubGluZVN0YXR1cyIsImxhc3RNZXNzYWdlQXQiLCJ1c2VyX3JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiLCJmaWx0ZXIiLCJ1c2VyIiwidXBkYXRlIiwiJHNldCIsInRpbWUiLCJmb3VuIiwibGVuZ3RoIiwiZmluZCIsInUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaSIsImxhc3RNZXNzYWdlIiwiZm91bmQiLCJmb3VuZDEiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNoYXRDbGllbnQiLCJwYXNzd29yZCIsIlhNUFAiLCJ0cmFuc3BvcnRzIiwid2Vic29ja2V0IiwiYm9zaCIsInJvc3RlclZlciIsInRpbWVvdXQiLCJvbiIsImdldENvbnRhY3RzIiwic2VuZFByZXNlbmNlIiwic2V0SW50ZXJ2YWwiLCJpZkNvbm5lY3RlZCIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm9uTGluZSIsInJlY29ubmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXNzIiwicGluZyIsInRoZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25uZWN0Iiwic2V0VGltZW91dCIsImRpc2Nvbm5lY3QiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0TG9naW5FcnJvciIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJwcmVzZW5jZSIsImhhc093blByb3BlcnR5IiwidXBkYXRlVXNlclN0YXR1cyIsInNwbGl0IiwidXBkYXRlUmVjZW50VXNlclN0YXR1cyIsIm5ld01lc3NhZ2UiLCJyZWNlaXZlZE1lc3NhZ2UiLCJnZXRSb3N0ZXIiLCJjb250YWN0cyIsIml0ZW1zIiwiZ2V0Um9zdGVySXRlbXMiLCJzZW5kTmV3TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwicmVjZW50VXNlcnMiLCJnZXRTdGF0ZSIsImRhdGVUaW1lIiwic3BsaXRCb2R5IiwiY2kiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsInNldE5ld01lc3NhZ2UiLCJzZXRMYXN0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxhQUFXLEVBQUU7QUFBRUMsWUFBUSxFQUFFLElBQVo7QUFBa0JDLGFBQVMsRUFBRSxJQUE3QjtBQUFtQ0MsT0FBRyxFQUFFO0FBQXhDLEdBRE07QUFFbkJELFdBQVMsRUFBRSxJQUZRO0FBR25CRSxZQUFVLEVBQUUsYUFITztBQUluQkMsUUFBTSxFQUFFLElBSlc7QUFLbkJDLGFBQVcsRUFBRSxFQUxNO0FBTW5CQyxTQUFPLEVBQUUsS0FOVTtBQU9uQkMsV0FBUyxFQUFFLE1BUFE7QUFRbkJDLE9BQUssRUFBRSxFQVJZO0FBU25CQyxVQUFRLEVBQUU7QUFBRUMsUUFBSSxFQUFFLEdBQVI7QUFBYUMsVUFBTSxFQUFFLFFBQXJCO0FBQStCQyxNQUFFLEVBQUU7QUFBbkMs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LE1BQWxCLENBQUwsRUFBZ0M7QUFDOUJQLGtFQUFLLENBQUNDLFFBQU4sQ0FBZXVCLDZFQUFnQixDQUFDRCxFQUFFLENBQUM5RixFQUFKLENBQS9CO0FBQ0Q7QUFDRixLQUpEO0FBTUF1RSw4REFBSyxDQUFDQyxRQUFOLENBQ0V3Qix1RUFBVSxDQUFDO0FBQ1RoRyxRQUFFLEVBQUVrRixVQUFVLENBQUMzRSxJQURQO0FBRVJRLGdCQUFVLEVBQUVtRSxVQUFVLENBQUNuRSxVQUZmO0FBR1JoQixZQUFNLEVBQUUsUUFIQTtBQUlSbUIsa0JBQVksRUFBRTtBQUpOLGlCQUtBLFFBTEEsRUFEWjtBQVNEOztBQUNEcUQsNERBQUssQ0FBQ0MsUUFBTixDQUFleUIsMEVBQWEsQ0FBQ2YsVUFBRCxDQUE1QjtBQUNBWCw0REFBSyxDQUFDQyxRQUFOLENBQ0UwQiwyRUFBYyxDQUFDO0FBQ2JsRyxNQUFFLEVBQUVrRixVQUFVLENBQUMzRSxJQURGO0FBRWIyRCxXQUFPLEVBQUVnQixVQUFVLENBQUN4RSxJQUZQO0FBR2JvQixRQUFJLEVBQUU4RCxnRkFBUTtBQUhELEdBQUQsQ0FEaEI7QUFPRCxDQTNDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzZW5nZXIuNzFiNTBhNGMyZjk4NmUzOWYwMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXBkYXRlIGZyb20gXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCI7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBjdXJyZW50VXNlcjogeyB1c2VybmFtZTogbnVsbCwgYWNjb3VudElkOiBudWxsLCBqaWQ6IG51bGwgfSxcclxuICBhY2NvdW50SWQ6IG51bGwsXHJcbiAgdXNlclN0YXR1czogXCJ1bmF2YWlsYWJsZVwiLFxyXG4gIGNsaWVudDogbnVsbCxcclxuICBsb2dpbkVycm9yczogW10sXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgYWN0aXZlVGFiOiBcImNoYXRcIixcclxuICB1c2VyczogW10sXHJcbiAgY2hhdFdpdGg6IHsgbmFtZTogXCJBXCIsIHN0YXR1czogXCJvbmxpbmVcIiwgaWQ6IDIgfSxcclxuICBuZXdDb250YWN0OiBcImNvbnRhY3RcIixcclxuICBjb21wb25lbnRVbm1vdW50OiBudWxsLFxyXG4gIHJvc3RlcjogXCJcIixcclxuICBhbGx1c2VyU3RhdHVzOiBbXSxcclxuICBhbGx1c2VyczogW10sXHJcbiAgYWxsTWVzc2FnZTogW1xyXG4gICAge1xyXG4gICAgICBmcm9tOiAyLFxyXG4gICAgICB0bzogMSxcclxuICAgICAgbWVzc2FnZVRpbWU6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgICBib2R5OiBcImkgaGF2ZSByZWNlaXZlZCB0aGlzIG1lc3NhZ2UgZnJvbSB1c2VyIHdpdGggaWQgMlwiLFxyXG4gICAgICBjaGF0VHlwZTogXCJjaGF0XCIsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJyZWNlaXZlZFwiLFxyXG4gICAgICBmcm9tdG86IDIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgZnJvbTogMSxcclxuICAgICAgdG86IDIsXHJcbiAgICAgIG1lc3NhZ2VUaW1lOiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgICAgYm9keTogXCJhc3N1bWUgaSBhbW0gYSBsb2dnZWQgaW4gdXNlciAuIGkgYW0gc2VuZGluZyB0aGlzIG1lc3NhZ2VcIixcclxuICAgICAgY2hhdFR5cGU6IFwiY2hhdFwiLFxyXG4gICAgICBkaXJlY3Rpb246IFwic2VuZFwiLFxyXG4gICAgICBmcm9tdG86IDIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhdGVkVXNlcnM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiSkFDS0lMSU5FXCIsXHJcbiAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgbWVzZzogXCJob3cgYXJlIHlvdVwiLFxyXG4gICAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcclxuICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBsYXN0TWVzc2FnZUF0OiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBmaXJzdF9uYW1lOiBcIkpvblwiLFxyXG4gICAgICBzdGF0dXM6IFwib2ZmbGluZVwiLFxyXG4gICAgICBtZXNnOiBcImhvdyBhcmUgeW91XCIsXHJcbiAgICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxyXG4gICAgICBvbmxpbmVTdGF0dXM6IFwib2ZmbGluZVwiLFxyXG4gICAgICBsYXN0TWVzc2FnZUF0OiBcIjIwMjEtMDgtMDcgMDk6MDM6NTZcIixcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuY29uc3QgdXNlcl9yZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVJfU1RBVFVTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJTdGF0dXM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0xJRU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ2luRXJyb3JzOiBbYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9MT0RJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQUNUSVZFX1RBQjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhY3RpdmVUYWI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcnM6IFthY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DSEFUX1dJVEg6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hhdFdpdGg6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NIQVRFRF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBuZXdDb250YWN0OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcG9uZW50VW5tb3VudDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5BRERfTkVXX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcblxyXG4gICAgICAgIGNoYXRlZFVzZXJzOiBbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLmNoYXRlZFVzZXJzXSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9ORVdfTUVTU0FHRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgYWxsTWVzc2FnZTogWy4uLnN0YXRlLmFsbE1lc3NhZ2UsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVNT1ZFX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcblxyXG4gICAgICAgIGNoYXRlZFVzZXJzOiBzdGF0ZS5jaGF0ZWRVc2Vycy5maWx0ZXIoXHJcbiAgICAgICAgICAodXNlcikgPT4gdXNlci5pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTEFTVF9NRVNTQUdFX1RJTUU6XHJcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcclxuICAgICAgICBjaGF0ZWRVc2Vyczoge1xyXG4gICAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmlkXToge1xyXG4gICAgICAgICAgICBsYXN0TWVzc2FnZUF0OiB7ICRzZXQ6IGFjdGlvbi5wYXlsb2FkLnRpbWUgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfTEFTVF9NRVNTQUdFOlxyXG4gICAgICBsZXQgZm91biA9XHJcbiAgICAgICAgc3RhdGUuY2hhdGVkVXNlcnMgJiYgc3RhdGUuY2hhdGVkVXNlcnMubGVuZ3RoXHJcbiAgICAgICAgICA/ICEhc3RhdGUuY2hhdGVkVXNlcnMuZmluZCgodSkgPT4gdS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpXHJcbiAgICAgICAgICA6IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZ1bmN0aW9uXCIsIGZvdW4sIGFjdGlvbi5wYXlsb2FkLmlkKTtcclxuICAgICAgaWYgKGZvdW4pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjaGF0ZWRVc2Vyczogc3RhdGUuY2hhdGVkVXNlcnMubWFwKCh1c2VyLCBpKSA9PlxyXG4gICAgICAgICAgICB1c2VyLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgICAgICAgICAgICBtZXNnOiBhY3Rpb24ucGF5bG9hZC5sYXN0TWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgbGFzdE1lc3NhZ2VBdDogYWN0aW9uLnBheWxvYWQudGltZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6IHVzZXJcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfUk9TVEVSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHJvc3RlcjogWy4uLnN0YXRlLnJvc3RlciwgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQUxMX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFsbHVzZXJzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVBEQVRFX1VTRVJfU1RBVFVTOlxyXG4gICAgICBsZXQgZm91bmQgPVxyXG4gICAgICAgIHN0YXRlLmFsbHVzZXJTdGF0dXMgJiYgc3RhdGUuYWxsdXNlclN0YXR1cy5sZW5ndGhcclxuICAgICAgICAgID8gISFzdGF0ZS5hbGx1c2VyU3RhdHVzLmZpbmQoKHUpID0+IHUuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVxyXG4gICAgICAgICAgOiBmYWxzZTtcclxuXHJcbiAgICAgIC8vaWYgdGhlIHVzZXIgaXMgYWxyZWFkeVxyXG4gICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgYWxyZWR5IGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFsbHVzZXJTdGF0dXM6IHN0YXRlLmFsbHVzZXJTdGF0dXMubWFwKCh1c2VyU3RhdHVzLCBpKSA9PlxyXG4gICAgICAgICAgICB1c2VyU3RhdHVzLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICAgICAgID8geyAuLi51c2VyU3RhdHVzLCBvbmxpbmVTdGF0dXM6IGFjdGlvbi5wYXlsb2FkLm9ubGluZVN0YXR1cyB9XHJcbiAgICAgICAgICAgICAgOiB1c2VyU3RhdHVzXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIHRoZSB1c2VyIHN0YXR1cyBmb3IgZmlzdCB0aW1lXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWxsdXNlclN0YXR1czogWy4uLnN0YXRlLmFsbHVzZXJTdGF0dXMsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgLy9VcGRhdGUgcmVjZW50IHVzZXIgc3RhdHVzOlxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfUkVDRU5UX1VTRVJfU1RBVFVTOlxyXG4gICAgICBsZXQgZm91bmQxID1cclxuICAgICAgICBzdGF0ZS5hbGx1c2VyU3RhdHVzICYmIHN0YXRlLmFsbHVzZXJTdGF0dXMubGVuZ3RoXHJcbiAgICAgICAgICA/ICEhc3RhdGUuYWxsdXNlclN0YXR1cy5maW5kKCh1KSA9PiB1LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICAgIDogZmFsc2U7XHJcblxyXG4gICAgICAvL2lmIHRoZSB1c2VyIGlzIGFscmVhZHlcclxuICAgICAgaWYgKGZvdW5kMSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBhbHJlZHkgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY2hhdGVkVXNlcnM6IHN0YXRlLmNoYXRlZFVzZXJzLm1hcCgodXNlclN0YXR1cywgaSkgPT5cclxuICAgICAgICAgICAgdXNlclN0YXR1cy5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICAgICAgICA/IHsgLi4udXNlclN0YXR1cywgb25saW5lU3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5vbmxpbmVTdGF0dXMgfVxyXG4gICAgICAgICAgICAgIDogdXNlclN0YXR1c1xyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHVzZXI6IHVzZXJfcmVkdWNlcixcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgKiBhcyBYTVBQIGZyb20gXCJzdGFuemFcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuLi9jb250YWluZXJzL2xlZnRTaWRlYmFyL2RhdGV0aW1lXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVVc2VyU3RhdHVzLFxyXG4gIHNldExvZ2luRXJyb3IsXHJcbiAgc2V0TmV3TWVzc2FnZSxcclxuICBzZXRMYXN0TWVzc2FnZSxcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIGFkZE5ld1VTZXIsXHJcbiAgdXBkYXRlUmVjZW50VXNlclN0YXR1cyxcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5sZXQgY2xpZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhdENsaWVudCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zb2xlLmxvZyhcImNvbm5lY3Rpb24gcmVxdWVzdFwiKTtcclxuICBjbGllbnQgPSBYTVBQLmNyZWF0ZUNsaWVudCh7XHJcbiAgICBqaWQ6IHVzZXJuYW1lLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICB0cmFuc3BvcnRzOiB7XHJcbiAgICAgIHdlYnNvY2tldDogXCJ3czovL21vbmdvb3NlLm15c21hcnRwYngub3JnOjUyODAvd3MteG1wcFwiLFxyXG4gICAgICBib3NoOiBcImZhbHNlXCIsXHJcbiAgICB9LFxyXG4gICAgcm9zdGVyVmVyOiBcInZlcjE0XCIsXHJcbiAgICB0aW1lb3V0OiA2MCxcclxuICB9KTtcclxuICAvL2NsaWVudC5vbihcIipcIiwgY29uc29sZS5sb2cpO1xyXG4gIGNsaWVudC5vbihcInNlc3Npb246c3RhcnRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gc3RhcnRlZFwiKTtcclxuICAgIGdldENvbnRhY3RzKCk7XHJcbiAgICBjbGllbnQuc2VuZFByZXNlbmNlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcGluZ2luZyB0aGUgc2VydmVyXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdmFyIGlmQ29ubmVjdGVkID0gd2luZG93Lm5hdmlnYXRvci5vbkxpbmU7XHJcbiAgICBsZXQgcmVjb25uZWN0O1xyXG4gICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcbiAgICBjb25zdCBwYXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzd29yZFwiKTtcclxuICAgIGlmIChpZkNvbm5lY3RlZCkge1xyXG4gICAgICBjbGllbnRcclxuICAgICAgICAucGluZyh1c2VybmFtZSlcclxuICAgICAgICAudGhlbigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWFnZSBwaW5nXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwaW5nIGVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgIHJlY29ubmVjdCA9IGNoYXRDbGllbnQodXNlciwgcGFzcyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RcIiwgdXNlciwgcGFzcyk7XHJcbiAgICAgICAgICAvL3JlY29ubmVjdC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICByZWNvbm5lY3QuY29ubmVjdCgpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZXJyb3IgY29ubmVjdCB0byB0aGUgc2VydmVyIGFmdGVyIDYwIHNlY25vZHNcIik7XHJcbiAgICAgICAgICAgIHJlY29ubmVjdC5jb25uZWN0KCk7XHJcbiAgICAgICAgICB9LCA2MDAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gbm90IGF2YWlsYWJsZVwiKTtcclxuICAgICAgY2xpZW50LmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9LCA1MDAwKTtcclxuXHJcbiAgY2xpZW50Lm9uKFwiYXV0aDpmYWlsZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ4bXBwIGF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHNldExvZ2luRXJyb3IoXCJJTkNPUlJFQ1QgVVNFUk5BTUUgT1IgUEFTU1dPUkRcIikpO1xyXG4gIH0pO1xyXG5cclxuICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgcmVxdWVzdCBmcm9tXCIsIFJlY2VpdmVkUHJlc2VuY2UpO1xyXG4gICAgY2xpZW50LmFjY2VwdFN1YnNjcmlwdGlvbihSZWNlaXZlZFByZXNlbmNlLmZyb20pO1xyXG4gICAgY2xpZW50LnN1YnNjcmliZShSZWNlaXZlZFByZXNlbmNlLmZyb20sICgpID0+XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NycHRpb24gcmVxdWVzdCBzZW50IGJhY2sgdG9cIiArIFJlY2VpdmVkUHJlc2VuY2UuZnJvbSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5vbihcInByZXNlbmNlXCIsIChwcmVzZW5jZSkgPT4ge1xyXG4gICAgaWYgKHByZXNlbmNlLmhhc093blByb3BlcnR5KFwidHlwZVwiKSAmJiBwcmVzZW5jZS50eXBlID09IFwidW5hdmFpbGFibGVcIikge1xyXG4gICAgICAvL2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdXNlciBzdGF0dXMgdGhhdCB1c2VyIGlzIG9mZmxpbmVcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIHVuYXZhaWxhYmxlXCIsIHByZXNlbmNlLmZyb20pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB1cGRhdGVVc2VyU3RhdHVzKHtcclxuICAgICAgICAgIGlkOiBwcmVzZW5jZS5mcm9tLnNwbGl0KFwiQFwiKVswXSxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdXBkYXRlUmVjZW50VXNlclN0YXR1cyh7XHJcbiAgICAgICAgICBpZDogcHJlc2VuY2UuZnJvbS5zcGxpdChcIkBcIilbMF0sXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib2ZmbGluZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKCFwcmVzZW5jZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikpIHtcclxuICAgICAgLy9oZXJlIHdlIG5lZWQgdG8gdXBkYXRlIHVzZXIgc3RhdHVzIHRoYXQgdXNlciBpcyBvbmxpbmVcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIGF2YWlsYWJsZVwiLCBwcmVzZW5jZS5mcm9tKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdXBkYXRlVXNlclN0YXR1cyh7XHJcbiAgICAgICAgICBpZDogcHJlc2VuY2UuZnJvbS5zcGxpdChcIkBcIilbMF0sXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdXBkYXRlUmVjZW50VXNlclN0YXR1cyh7XHJcbiAgICAgICAgICBpZDogcHJlc2VuY2UuZnJvbS5zcGxpdChcIkBcIilbMF0sXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwidW5hdmFpbGFibGVcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcmVzZW5jZS5mcm9tICsgXCIgaXMgb2ZmbGluZVwiKTtcclxuICB9KTtcclxuICAvLyBjbGllbnQub24oXCJhdmFpbGFibGVcIiwgKHByZXNlbmNlKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImF2YWlsYWJsZVwiLCBwcmVzZW5jZSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vaGVyZSB3ZSBsaXN0ZW4gaW5jb21pbmcgbWVzc2FnZXNcclxuICBjbGllbnQub24oXCJtZXNzYWdlXCIsIChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uIG1lc3NhZ2VcIiwgbmV3TWVzc2FnZSk7XHJcbiAgICByZWNlaXZlZE1lc3NhZ2UobmV3TWVzc2FnZSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG5cclxubGV0IHJvc3RlcjtcclxuY29uc3QgZ2V0Q29udGFjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhY3RzID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG5cclxuICByb3N0ZXIgPSBjb250YWN0cy5pdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSb3N0ZXJJdGVtcyA9ICgpID0+IHtcclxuICByZXR1cm4gcm9zdGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmROZXdNZXNzYWdlID0gKG5ld01lc3NhZ2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImF0IHNlbmRcIiArIG5ld01lc3NhZ2UpO1xyXG4gIGNsaWVudCAmJiBjbGllbnQuc2VuZE1lc3NhZ2UobmV3TWVzc2FnZSk7XHJcbn07XHJcblxyXG5jb25zdCByZWNlaXZlZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmNoYXRlZFVzZXJzO1xyXG4gIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gIGNvbnNvbGUubG9nKFwicmVjXCIsIG5ld01lc3NhZ2UpO1xyXG4gIG5ld01lc3NhZ2VbXCJtZXNzYWdlVGltZVwiXSA9IGRhdGVUaW1lKCk7XHJcbiAgbmV3TWVzc2FnZVtcImRpcmVjdGlvblwiXSA9IFwicmVjZWl2ZWRcIjtcclxuICBuZXdNZXNzYWdlW1wiZnJvbVwiXSA9IG5ld01lc3NhZ2UuZnJvbS5zcGxpdChcIi9cIilbMF07XHJcbiAgbmV3TWVzc2FnZVtcImZyb210b1wiXSA9IG5ld01lc3NhZ2UuZnJvbTtcclxuICBsZXQgc3BsaXRCb2R5ID0gbmV3TWVzc2FnZSAmJiBuZXdNZXNzYWdlLmJvZHkuc3BsaXQoXCImXCIpO1xyXG4gIG5ld01lc3NhZ2VbXCJib2R5XCJdID0gc3BsaXRCb2R5ICYmIHNwbGl0Qm9keVswXTtcclxuICBuZXdNZXNzYWdlW1wiZmlyc3RfbmFtZVwiXSA9IHNwbGl0Qm9keS5sZW5ndGggPiAwICYmIHNwbGl0Qm9keVsxXS5zcGxpdChcIjpcIilbMV07XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNlbnRVc2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBuZXdNZXNzYWdlLmZyb20pIHtcclxuICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICghZm91bmQpIHtcclxuICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IG5ld01lc3NhZ2UuZmlyc3RfbmFtZSxcclxuICAgICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHN0b3JlLmRpc3BhdGNoKHNldE5ld01lc3NhZ2UobmV3TWVzc2FnZSkpO1xyXG4gIHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgc2V0TGFzdE1lc3NhZ2Uoe1xyXG4gICAgICBpZDogbmV3TWVzc2FnZS5mcm9tLFxyXG4gICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLmJvZHksXHJcbiAgICAgIHRpbWU6IGRhdGVUaW1lKCksXHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=