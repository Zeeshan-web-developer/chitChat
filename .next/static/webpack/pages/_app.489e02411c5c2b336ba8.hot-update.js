webpackHotUpdate_N_E("pages/_app",{

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
    direction: "received"
  }, {
    from: 1,
    to: 2,
    messageTime: "2021-08-07 09:03:10",
    body: "assume i amm a logged in user . i am sending this message",
    chatType: "chat",
    direction: "send"
  }, {
    from: 2,
    to: 1,
    messageTime: "2021-08-07 09:03:10",
    body: "i have received second  message from user with id 2",
    chatType: "chat",
    direction: "received"
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
    first_name: "BRONNNZE",
    status: "offline",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "offline",
    lastMessageAt: "2021-08-07 09:03:56"
  }, {
    id: 3,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY3VycmVudFVzZXIiLCJ1c2VybmFtZSIsImFjY291bnRJZCIsImppZCIsInVzZXJTdGF0dXMiLCJjbGllbnQiLCJsb2dpbkVycm9ycyIsImxvYWRpbmciLCJhY3RpdmVUYWIiLCJ1c2VycyIsImNoYXRXaXRoIiwibmFtZSIsInN0YXR1cyIsImlkIiwibmV3Q29udGFjdCIsImNvbXBvbmVudFVubW91bnQiLCJyb3N0ZXIiLCJhbGx1c2VyU3RhdHVzIiwiYWxsdXNlcnMiLCJhbGxNZXNzYWdlIiwiZnJvbSIsInRvIiwibWVzc2FnZVRpbWUiLCJib2R5IiwiY2hhdFR5cGUiLCJkaXJlY3Rpb24iLCJjaGF0ZWRVc2VycyIsImZpcnN0X25hbWUiLCJtZXNnIiwibGFzdFNlZW5EYXRlIiwib25saW5lU3RhdHVzIiwibGFzdE1lc3NhZ2VBdCIsInVzZXJfcmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFjdGlvblR5cGVzIiwicGF5bG9hZCIsImZpbHRlciIsInVzZXIiLCJ1cGRhdGUiLCIkc2V0IiwidGltZSIsImZvdW4iLCJsZW5ndGgiLCJmaW5kIiwidSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpIiwibGFzdE1lc3NhZ2UiLCJmb3VuZCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLGFBQVcsRUFBRTtBQUFFQyxZQUFRLEVBQUUsSUFBWjtBQUFrQkMsYUFBUyxFQUFFLElBQTdCO0FBQW1DQyxPQUFHLEVBQUU7QUFBeEMsR0FETTtBQUVuQkQsV0FBUyxFQUFFLElBRlE7QUFHbkJFLFlBQVUsRUFBRSxhQUhPO0FBSW5CQyxRQUFNLEVBQUUsSUFKVztBQUtuQkMsYUFBVyxF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QUNoQixhQUFOLENBQW9CNEIsSUFBcEIsQ0FBeUIsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ2pDLEVBQUYsS0FBU3FCLE1BQU0sQ0FBQ0csT0FBUCxDQUFleEIsRUFBL0I7QUFBQSxPQUF6QixDQUROLEdBRUksS0FITixDQURGLENBTUU7O0FBQ0EsVUFBSXVDLEtBQUosRUFBVztBQUNUTCxlQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtBQUNBLCtDQUNLZixLQURMO0FBRUVoQix1QkFBYSxFQUFFZ0IsS0FBSyxDQUFDaEIsYUFBTixDQUFvQmdDLEdBQXBCLENBQXdCLFVBQUM3QyxVQUFELEVBQWE4QyxDQUFiO0FBQUEsbUJBQ3JDOUMsVUFBVSxDQUFDUyxFQUFYLEtBQWtCcUIsTUFBTSxDQUFDRyxPQUFQLENBQWV4QixFQUFqQyxtQ0FDU1QsVUFEVDtBQUNxQjBCLDBCQUFZLEVBQUVJLE1BQU0sQ0FBQ0csT0FBUCxDQUFlUDtBQURsRCxpQkFFSTFCLFVBSGlDO0FBQUEsV0FBeEI7QUFGakIsV0FGUyxDQVdUO0FBQ0QsT0FaRCxNQVlPO0FBQ0wsK0NBQ0s2QixLQURMO0FBRUVoQix1QkFBYSx5R0FBTWdCLEtBQUssQ0FBQ2hCLGFBQVosSUFBMkJpQixNQUFNLENBQUNHLE9BQWxDO0FBRmY7QUFJRDs7QUFFSDtBQUFTO0FBQ1AsZUFBT0osS0FBUDtBQUNEO0FBaEpIO0FBa0pELENBbkpEOztBQXFKQSxJQUFNb0IsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDZixNQUFJLEVBQUVQO0FBRDRCLENBQUQsQ0FBbkM7QUFHZXFCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDg5ZTAyNDExYzVjMmIzMzZiYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXBkYXRlIGZyb20gXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCI7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBjdXJyZW50VXNlcjogeyB1c2VybmFtZTogbnVsbCwgYWNjb3VudElkOiBudWxsLCBqaWQ6IG51bGwgfSxcclxuICBhY2NvdW50SWQ6IG51bGwsXHJcbiAgdXNlclN0YXR1czogXCJ1bmF2YWlsYWJsZVwiLFxyXG4gIGNsaWVudDogbnVsbCxcclxuICBsb2dpbkVycm9yczogW10sXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgYWN0aXZlVGFiOiBcImNoYXRcIixcclxuICB1c2VyczogW10sXHJcbiAgY2hhdFdpdGg6IHsgbmFtZTogXCJBXCIsIHN0YXR1czogXCJvbmxpbmVcIiwgaWQ6IDIgfSxcclxuICBuZXdDb250YWN0OiBcImNvbnRhY3RcIixcclxuICBjb21wb25lbnRVbm1vdW50OiBudWxsLFxyXG4gIHJvc3RlcjogXCJcIixcclxuICBhbGx1c2VyU3RhdHVzOiBbXSxcclxuICBhbGx1c2VyczogW10sXHJcbiAgYWxsTWVzc2FnZTogW1xyXG4gICAge1xyXG4gICAgICBmcm9tOiAyLFxyXG4gICAgICB0bzogMSxcclxuICAgICAgbWVzc2FnZVRpbWU6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgICBib2R5OiBcImkgaGF2ZSByZWNlaXZlZCB0aGlzIG1lc3NhZ2UgZnJvbSB1c2VyIHdpdGggaWQgMlwiLFxyXG4gICAgICBjaGF0VHlwZTogXCJjaGF0XCIsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJyZWNlaXZlZFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGZyb206IDEsXHJcbiAgICAgIHRvOiAyLFxyXG4gICAgICBtZXNzYWdlVGltZTogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXHJcbiAgICAgIGJvZHk6IFwiYXNzdW1lIGkgYW1tIGEgbG9nZ2VkIGluIHVzZXIgLiBpIGFtIHNlbmRpbmcgdGhpcyBtZXNzYWdlXCIsXHJcbiAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcclxuICAgICAgZGlyZWN0aW9uOiBcInNlbmRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZyb206IDIsXHJcbiAgICAgIHRvOiAxLFxyXG4gICAgICBtZXNzYWdlVGltZTogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXHJcbiAgICAgIGJvZHk6IFwiaSBoYXZlIHJlY2VpdmVkIHNlY29uZCAgbWVzc2FnZSBmcm9tIHVzZXIgd2l0aCBpZCAyXCIsXHJcbiAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcclxuICAgICAgZGlyZWN0aW9uOiBcInJlY2VpdmVkXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhdGVkVXNlcnM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiSkFDS0lMSU5FXCIsXHJcbiAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgbWVzZzogXCJob3cgYXJlIHlvdVwiLFxyXG4gICAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcclxuICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBsYXN0TWVzc2FnZUF0OiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBmaXJzdF9uYW1lOiBcIkJST05OTlpFXCIsXHJcbiAgICAgIHN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIG1lc2c6IFwiaG93IGFyZSB5b3VcIixcclxuICAgICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXHJcbiAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzo1NlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiSm9uXCIsXHJcbiAgICAgIHN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIG1lc2c6IFwiaG93IGFyZSB5b3VcIixcclxuICAgICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXHJcbiAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzo1NlwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5jb25zdCB1c2VyX3JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudFVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUl9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlclN0YXR1czogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DTElFTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9naW5FcnJvcnM6IFthY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX0xPRElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfVEFCOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFjdGl2ZVRhYjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NIQVRfV0lUSDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGF0V2l0aDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVEVEX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5ld0NvbnRhY3Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0hBVF9DT01QT05FTlRfVU5NT1VOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wb25lbnRVbm1vdW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkFERF9ORVdfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuY2hhdGVkVXNlcnNdLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX05FV19NRVNTQUdFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBhbGxNZXNzYWdlOiBbLi4uc3RhdGUuYWxsTWVzc2FnZSwgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRU1PVkVfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IHN0YXRlLmNoYXRlZFVzZXJzLmZpbHRlcihcclxuICAgICAgICAgICh1c2VyKSA9PiB1c2VyLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MQVNUX01FU1NBR0VfVElNRTpcclxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGNoYXRlZFVzZXJzOiB7XHJcbiAgICAgICAgICBbYWN0aW9uLnBheWxvYWQuaWRdOiB7XHJcbiAgICAgICAgICAgIGxhc3RNZXNzYWdlQXQ6IHsgJHNldDogYWN0aW9uLnBheWxvYWQudGltZSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9MQVNUX01FU1NBR0U6XHJcbiAgICAgIGxldCBmb3VuID1cclxuICAgICAgICBzdGF0ZS5jaGF0ZWRVc2VycyAmJiBzdGF0ZS5jaGF0ZWRVc2Vycy5sZW5ndGhcclxuICAgICAgICAgID8gISFzdGF0ZS5jaGF0ZWRVc2Vycy5maW5kKCh1KSA9PiB1LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICAgIDogZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZnVuY3Rpb25cIiwgZm91biwgYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgICBpZiAoZm91bikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNoYXRlZFVzZXJzOiBzdGF0ZS5jaGF0ZWRVc2Vycy5tYXAoKHVzZXIsIGkpID0+XHJcbiAgICAgICAgICAgIHVzZXIuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgIG1lc2c6IGFjdGlvbi5wYXlsb2FkLmxhc3RNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICBsYXN0TWVzc2FnZUF0OiBhY3Rpb24ucGF5bG9hZC50aW1lLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDogdXNlclxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9ST1NURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcm9zdGVyOiBbLi4uc3RhdGUucm9zdGVyLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9BTExfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWxsdXNlcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfVVNFUl9TVEFUVVM6XHJcbiAgICAgIGxldCBmb3VuZCA9XHJcbiAgICAgICAgc3RhdGUuYWxsdXNlclN0YXR1cyAmJiBzdGF0ZS5hbGx1c2VyU3RhdHVzLmxlbmd0aFxyXG4gICAgICAgICAgPyAhIXN0YXRlLmFsbHVzZXJTdGF0dXMuZmluZCgodSkgPT4gdS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpXHJcbiAgICAgICAgICA6IGZhbHNlO1xyXG5cclxuICAgICAgLy9pZiB0aGUgdXNlciBpcyBhbHJlYWR5XHJcbiAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBhbHJlZHkgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWxsdXNlclN0YXR1czogc3RhdGUuYWxsdXNlclN0YXR1cy5tYXAoKHVzZXJTdGF0dXMsIGkpID0+XHJcbiAgICAgICAgICAgIHVzZXJTdGF0dXMuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgPyB7IC4uLnVzZXJTdGF0dXMsIG9ubGluZVN0YXR1czogYWN0aW9uLnBheWxvYWQub25saW5lU3RhdHVzIH1cclxuICAgICAgICAgICAgICA6IHVzZXJTdGF0dXNcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgdGhlIHVzZXIgc3RhdHVzIGZvciBmaXN0IHRpbWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhbGx1c2VyU3RhdHVzOiBbLi4uc3RhdGUuYWxsdXNlclN0YXR1cywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgdXNlcjogdXNlcl9yZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=