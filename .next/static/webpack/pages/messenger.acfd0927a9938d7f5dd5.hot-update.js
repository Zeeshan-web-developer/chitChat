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
    status: "online"
  },
  newContact: "contact",
  componentUnmount: null,
  roster: "",
  alluserStatus: [],
  allusers: [],
  messages: [{
    from: 2,
    to: 1,
    messageTime: "2021-08-07 09:03:10",
    messageBody: "hello dear",
    chatType: "chat",
    direction: "received"
  }, {
    from: 2,
    to: 1,
    messageTime: "2021-08-07 09:03:10",
    messageBody: "hello dear",
    chatType: "chat",
    direction: "send"
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

    case "ALL_Messages":
      return _objectSpread(_objectSpread({}, state), {}, {
        messages: action.payload
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

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_ROSTER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        roster: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.roster), [action.payload])
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_ALL_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        allusers: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_STATUS"]:
      console.log("inside reducer");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY3VycmVudFVzZXIiLCJ1c2VybmFtZSIsImFjY291bnRJZCIsImppZCIsInVzZXJTdGF0dXMiLCJjbGllbnQiLCJsb2dpbkVycm9ycyIsImxvYWRpbmciLCJhY3RpdmVUYWIiLCJ1c2VycyIsImNoYXRXaXRoIiwibmFtZSIsInN0YXR1cyIsIm5ld0NvbnRhY3QiLCJjb21wb25lbnRVbm1vdW50Iiwicm9zdGVyIiwiYWxsdXNlclN0YXR1cyIsImFsbHVzZXJzIiwibWVzc2FnZXMiLCJmcm9tIiwidG8iLCJtZXNzYWdlVGltZSIsIm1lc3NhZ2VCb2R5IiwiY2hhdFR5cGUiLCJkaXJlY3Rpb24iLCJjaGF0ZWRVc2VycyIsImlkIiwiZmlyc3RfbmFtZSIsIm1lc2ciLCJsYXN0U2VlbkRhdGUiLCJvbmxpbmVTdGF0dXMiLCJsYXN0TWVzc2FnZUF0IiwidXNlcl9yZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwiZmlsdGVyIiwidXNlciIsInVwZGF0ZSIsIiRzZXQiLCJ0aW1lIiwiY29uc29sZSIsImxvZyIsImZvdW5kIiwibGVuZ3RoIiwiZmluZCIsInUiLCJtYXAiLCJpIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsYUFBVyxFQUFFO0FBQUVDLFlBQVEsRUFBRSxJQUFaO0FBQWtCQyxhQUFTLEVBQUUsSUFBN0I7QUFBbUNDLE9BQUcsRUFBRTtBQUF4QyxHQURNO0FBRW5CRCxXQUFTLEVBQUUsSUFGUTtBQUduQkUsWUFBVSxFQUFFLGFBSE87QUFJbkJDLFFBQU0sRUFBRSxJQUpXO0FBS25CQyxhQUFXLEVBQUUsRUFMTTtBQU1uQkMs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QjtBQUFBLE9BQXpCLENBRE4sR0FFSSxLQUhOLENBRkYsQ0FPRTs7QUFDQSxVQUFJbUIsS0FBSixFQUFXO0FBQ1RGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0EsK0NBQ0tYLEtBREw7QUFFRWpCLHVCQUFhLEVBQUVpQixLQUFLLENBQUNqQixhQUFOLENBQW9CaUMsR0FBcEIsQ0FBd0IsVUFBQzdDLFVBQUQsRUFBYThDLENBQWI7QUFBQSxtQkFDckM5QyxVQUFVLENBQUNzQixFQUFYLEtBQWtCUSxNQUFNLENBQUNHLE9BQVAsQ0FBZVgsRUFBakMsbUNBQ1N0QixVQURUO0FBQ3FCMEIsMEJBQVksRUFBRUksTUFBTSxDQUFDRyxPQUFQLENBQWVQO0FBRGxELGlCQUVJMUIsVUFIaUM7QUFBQSxXQUF4QjtBQUZqQixXQUZTLENBV1Q7QUFDRCxPQVpELE1BWU87QUFDTCwrQ0FDSzZCLEtBREw7QUFFRWpCLHVCQUFhLHlHQUFNaUIsS0FBSyxDQUFDakIsYUFBWixJQUEyQmtCLE1BQU0sQ0FBQ0csT0FBbEM7QUFGZjtBQUlEOztBQUVIO0FBQVM7QUFDUCxlQUFPSixLQUFQO0FBQ0Q7QUExSEg7QUE0SEQsQ0E3SEQ7O0FBK0hBLElBQU1rQixXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbENiLE1BQUksRUFBRVA7QUFENEIsQ0FBRCxDQUFuQztBQUdlbUIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLmFjZmQwOTI3YTk5MzhkN2Y1ZGQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVwZGF0ZSBmcm9tIFwicmVhY3QtYWRkb25zLXVwZGF0ZVwiO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY3VycmVudFVzZXI6IHsgdXNlcm5hbWU6IG51bGwsIGFjY291bnRJZDogbnVsbCwgamlkOiBudWxsIH0sXHJcbiAgYWNjb3VudElkOiBudWxsLFxyXG4gIHVzZXJTdGF0dXM6IFwidW5hdmFpbGFibGVcIixcclxuICBjbGllbnQ6IG51bGwsXHJcbiAgbG9naW5FcnJvcnM6IFtdLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIGFjdGl2ZVRhYjogXCJjaGF0XCIsXHJcbiAgdXNlcnM6IFtdLFxyXG4gIGNoYXRXaXRoOiB7IG5hbWU6IFwiQVwiLCBzdGF0dXM6IFwib25saW5lXCIgfSxcclxuICBuZXdDb250YWN0OiBcImNvbnRhY3RcIixcclxuICBjb21wb25lbnRVbm1vdW50OiBudWxsLFxyXG4gIHJvc3RlcjogXCJcIixcclxuICBhbGx1c2VyU3RhdHVzOiBbXSxcclxuICBhbGx1c2VyczogW10sXHJcbiAgbWVzc2FnZXM6IFtcclxuICAgIHtcclxuICAgICAgZnJvbTogMixcclxuICAgICAgdG86IDEsXHJcbiAgICAgIG1lc3NhZ2VUaW1lOiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgICAgbWVzc2FnZUJvZHk6IFwiaGVsbG8gZGVhclwiLFxyXG4gICAgICBjaGF0VHlwZTogXCJjaGF0XCIsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJyZWNlaXZlZFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZnJvbTogMixcclxuICAgICAgdG86IDEsXHJcbiAgICAgIG1lc3NhZ2VUaW1lOiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgICAgbWVzc2FnZUJvZHk6IFwiaGVsbG8gZGVhclwiLFxyXG4gICAgICBjaGF0VHlwZTogXCJjaGF0XCIsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJzZW5kXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhdGVkVXNlcnM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiSkFDS0lMSU5FXCIsXHJcbiAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgbWVzZzogXCJob3cgYXJlIHlvdVwiLFxyXG4gICAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcclxuICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBsYXN0TWVzc2FnZUF0OiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBmaXJzdF9uYW1lOiBcIkJST05OTlpFXCIsXHJcbiAgICAgIHN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIG1lc2c6IFwiaG93IGFyZSB5b3VcIixcclxuICAgICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXHJcbiAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzo1NlwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5jb25zdCB1c2VyX3JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudFVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUl9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlclN0YXR1czogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DTElFTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9naW5FcnJvcnM6IFthY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX0xPRElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfVEFCOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFjdGl2ZVRhYjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NIQVRfV0lUSDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGF0V2l0aDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQUxMX01lc3NhZ2VzXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZXM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVEVEX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5ld0NvbnRhY3Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0hBVF9DT01QT05FTlRfVU5NT1VOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wb25lbnRVbm1vdW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkFERF9ORVdfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuY2hhdGVkVXNlcnNdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRU1PVkVfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IHN0YXRlLmNoYXRlZFVzZXJzLmZpbHRlcihcclxuICAgICAgICAgICh1c2VyKSA9PiB1c2VyLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MQVNUX01FU1NBR0VfVElNRTpcclxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGNoYXRlZFVzZXJzOiB7XHJcbiAgICAgICAgICBbYWN0aW9uLnBheWxvYWQuaWRdOiB7XHJcbiAgICAgICAgICAgIGxhc3RNZXNzYWdlQXQ6IHsgJHNldDogYWN0aW9uLnBheWxvYWQudGltZSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9ST1NURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcm9zdGVyOiBbLi4uc3RhdGUucm9zdGVyLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9BTExfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWxsdXNlcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfVVNFUl9TVEFUVVM6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHJlZHVjZXJcIik7XHJcbiAgICAgIGxldCBmb3VuZCA9XHJcbiAgICAgICAgc3RhdGUuYWxsdXNlclN0YXR1cyAmJiBzdGF0ZS5hbGx1c2VyU3RhdHVzLmxlbmd0aFxyXG4gICAgICAgICAgPyAhIXN0YXRlLmFsbHVzZXJTdGF0dXMuZmluZCgodSkgPT4gdS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpXHJcbiAgICAgICAgICA6IGZhbHNlO1xyXG5cclxuICAgICAgLy9pZiB0aGUgdXNlciBpcyBhbHJlYWR5XHJcbiAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBhbHJlZHkgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWxsdXNlclN0YXR1czogc3RhdGUuYWxsdXNlclN0YXR1cy5tYXAoKHVzZXJTdGF0dXMsIGkpID0+XHJcbiAgICAgICAgICAgIHVzZXJTdGF0dXMuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgPyB7IC4uLnVzZXJTdGF0dXMsIG9ubGluZVN0YXR1czogYWN0aW9uLnBheWxvYWQub25saW5lU3RhdHVzIH1cclxuICAgICAgICAgICAgICA6IHVzZXJTdGF0dXNcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgdGhlIHVzZXIgc3RhdHVzIGZvciBmaXN0IHRpbWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhbGx1c2VyU3RhdHVzOiBbLi4uc3RhdGUuYWxsdXNlclN0YXR1cywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgdXNlcjogdXNlcl9yZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=