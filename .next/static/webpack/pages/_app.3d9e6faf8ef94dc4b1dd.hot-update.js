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
        console.log("update recent user status");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY3VycmVudFVzZXIiLCJ1c2VybmFtZSIsImFjY291bnRJZCIsImppZCIsInVzZXJTdGF0dXMiLCJjbGllbnQiLCJsb2dpbkVycm9ycyIsImxvYWRpbmciLCJhY3RpdmVUYWIiLCJ1c2VycyIsImNoYXRXaXRoIiwibmFtZSIsInN0YXR1cyIsImlkIiwibmV3Q29udGFjdCIsImNvbXBvbmVudFVubW91bnQiLCJyb3N0ZXIiLCJhbGx1c2VyU3RhdHVzIiwiYWxsdXNlcnMiLCJhbGxNZXNzYWdlIiwiZnJvbSIsInRvIiwibWVzc2FnZVRpbWUiLCJib2R5IiwiY2hhdFR5cGUiLCJkaXJlY3Rpb24iLCJmcm9tdG8iLCJjaGF0ZWRVc2VycyIsImZpcnN0X25hbWUiLCJtZXNnIiwibGFzdFNlZW5EYXRlIiwib25saW5lU3RhdHVzIiwibGFzdE1lc3NhZ2VBdCIsInVzZXJfcmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFjdGlvblR5cGVzIiwicGF5bG9hZCIsImZpbHRlciIsInVzZXIiLCJ1cGRhdGUiLCIkc2V0IiwidGltZSIsImZvdW4iLCJsZW5ndGgiLCJmaW5kIiwidSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpIiwibGFzdE1lc3NhZ2UiLCJmb3VuZCIsImZvdW5kMSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLGFBQVcsRUFBRTtBQUFFQyxZQUFRLEVBQUUsSUFBWjtBQUFrQkMsYUFBUyxFQUFFLElBQTdCO0FBQW1DQyxPQUFHLEVBQUU7QUFBeEMsR0FETTtBQUVuQkQsV0FBUyxFQUFFLElBRlE7QUFHbkJFLFlBQVUsRUFBRSxhQUhPO0FBSW5CQyxRQUFNLEVBQUUs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ZjtBQVFEOztBQUVIO0FBQVM7QUFDUCxlQUFPOEIsS0FBUDtBQUNEO0FBcEtIO0FBc0tELENBdktEOztBQXlLQSxJQUFNcUIsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDaEIsTUFBSSxFQUFFUDtBQUQ0QixDQUFELENBQW5DO0FBR2VzQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNkOWU2ZmFmOGVmOTRkYzRiMWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVwZGF0ZSBmcm9tIFwicmVhY3QtYWRkb25zLXVwZGF0ZVwiO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY3VycmVudFVzZXI6IHsgdXNlcm5hbWU6IG51bGwsIGFjY291bnRJZDogbnVsbCwgamlkOiBudWxsIH0sXHJcbiAgYWNjb3VudElkOiBudWxsLFxyXG4gIHVzZXJTdGF0dXM6IFwidW5hdmFpbGFibGVcIixcclxuICBjbGllbnQ6IG51bGwsXHJcbiAgbG9naW5FcnJvcnM6IFtdLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIGFjdGl2ZVRhYjogXCJjaGF0XCIsXHJcbiAgdXNlcnM6IFtdLFxyXG4gIGNoYXRXaXRoOiB7IG5hbWU6IFwiQVwiLCBzdGF0dXM6IFwib25saW5lXCIsIGlkOiAyIH0sXHJcbiAgbmV3Q29udGFjdDogXCJjb250YWN0XCIsXHJcbiAgY29tcG9uZW50VW5tb3VudDogbnVsbCxcclxuICByb3N0ZXI6IFwiXCIsXHJcbiAgYWxsdXNlclN0YXR1czogW10sXHJcbiAgYWxsdXNlcnM6IFtdLFxyXG4gIGFsbE1lc3NhZ2U6IFtcclxuICAgIHtcclxuICAgICAgZnJvbTogMixcclxuICAgICAgdG86IDEsXHJcbiAgICAgIG1lc3NhZ2VUaW1lOiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgICAgYm9keTogXCJpIGhhdmUgcmVjZWl2ZWQgdGhpcyBtZXNzYWdlIGZyb20gdXNlciB3aXRoIGlkIDJcIixcclxuICAgICAgY2hhdFR5cGU6IFwiY2hhdFwiLFxyXG4gICAgICBkaXJlY3Rpb246IFwicmVjZWl2ZWRcIixcclxuICAgICAgZnJvbXRvOiAyLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGZyb206IDEsXHJcbiAgICAgIHRvOiAyLFxyXG4gICAgICBtZXNzYWdlVGltZTogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXHJcbiAgICAgIGJvZHk6IFwiYXNzdW1lIGkgYW1tIGEgbG9nZ2VkIGluIHVzZXIgLiBpIGFtIHNlbmRpbmcgdGhpcyBtZXNzYWdlXCIsXHJcbiAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcclxuICAgICAgZGlyZWN0aW9uOiBcInNlbmRcIixcclxuICAgICAgZnJvbXRvOiAyLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNoYXRlZFVzZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBmaXJzdF9uYW1lOiBcIkpBQ0tJTElORVwiLFxyXG4gICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIG1lc2c6IFwiaG93IGFyZSB5b3VcIixcclxuICAgICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXHJcbiAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgbGFzdE1lc3NhZ2VBdDogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgZmlyc3RfbmFtZTogXCJKb25cIixcclxuICAgICAgc3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgbWVzZzogXCJob3cgYXJlIHlvdVwiLFxyXG4gICAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcclxuICAgICAgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgbGFzdE1lc3NhZ2VBdDogXCIyMDIxLTA4LTA3IDA5OjAzOjU2XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbmNvbnN0IHVzZXJfcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50VXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSX1NUQVRVUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyU3RhdHVzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NMSUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnQ6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dpbkVycm9yczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fTE9ESU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0FDVElWRV9UQUI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWN0aXZlVGFiOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJzOiBbYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVF9XSVRIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYXRXaXRoOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DSEFURURfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmV3Q29udGFjdDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5DSEFUX0NPTVBPTkVOVF9VTk1PVU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbXBvbmVudFVubW91bnQ6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQUREX05FV19VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBjaGF0ZWRVc2VyczogW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5jaGF0ZWRVc2Vyc10sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfTkVXX01FU1NBR0U6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcblxyXG4gICAgICAgIGFsbE1lc3NhZ2U6IFsuLi5zdGF0ZS5hbGxNZXNzYWdlLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFTU9WRV9VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBjaGF0ZWRVc2Vyczogc3RhdGUuY2hhdGVkVXNlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKHVzZXIpID0+IHVzZXIuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxBU1RfTUVTU0FHRV9USU1FOlxyXG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IHtcclxuICAgICAgICAgIFthY3Rpb24ucGF5bG9hZC5pZF06IHtcclxuICAgICAgICAgICAgbGFzdE1lc3NhZ2VBdDogeyAkc2V0OiBhY3Rpb24ucGF5bG9hZC50aW1lIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0xBU1RfTUVTU0FHRTpcclxuICAgICAgbGV0IGZvdW4gPVxyXG4gICAgICAgIHN0YXRlLmNoYXRlZFVzZXJzICYmIHN0YXRlLmNoYXRlZFVzZXJzLmxlbmd0aFxyXG4gICAgICAgICAgPyAhIXN0YXRlLmNoYXRlZFVzZXJzLmZpbmQoKHUpID0+IHUuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVxyXG4gICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coXCJmdW5jdGlvblwiLCBmb3VuLCBhY3Rpb24ucGF5bG9hZC5pZCk7XHJcbiAgICAgIGlmIChmb3VuKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY2hhdGVkVXNlcnM6IHN0YXRlLmNoYXRlZFVzZXJzLm1hcCgodXNlciwgaSkgPT5cclxuICAgICAgICAgICAgdXNlci5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgICAgICAgICAgbWVzZzogYWN0aW9uLnBheWxvYWQubGFzdE1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgIGxhc3RNZXNzYWdlQXQ6IGFjdGlvbi5wYXlsb2FkLnRpbWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOiB1c2VyXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1JPU1RFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByb3N0ZXI6IFsuLi5zdGF0ZS5yb3N0ZXIsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0FMTF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhbGx1c2VyczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9VU0VSX1NUQVRVUzpcclxuICAgICAgbGV0IGZvdW5kID1cclxuICAgICAgICBzdGF0ZS5hbGx1c2VyU3RhdHVzICYmIHN0YXRlLmFsbHVzZXJTdGF0dXMubGVuZ3RoXHJcbiAgICAgICAgICA/ICEhc3RhdGUuYWxsdXNlclN0YXR1cy5maW5kKCh1KSA9PiB1LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICAgIDogZmFsc2U7XHJcblxyXG4gICAgICAvL2lmIHRoZSB1c2VyIGlzIGFscmVhZHlcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGFscmVkeSBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhbGx1c2VyU3RhdHVzOiBzdGF0ZS5hbGx1c2VyU3RhdHVzLm1hcCgodXNlclN0YXR1cywgaSkgPT5cclxuICAgICAgICAgICAgdXNlclN0YXR1cy5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICAgICAgICA/IHsgLi4udXNlclN0YXR1cywgb25saW5lU3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5vbmxpbmVTdGF0dXMgfVxyXG4gICAgICAgICAgICAgIDogdXNlclN0YXR1c1xyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSB0aGUgdXNlciBzdGF0dXMgZm9yIGZpc3QgdGltZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFsbHVzZXJTdGF0dXM6IFsuLi5zdGF0ZS5hbGx1c2VyU3RhdHVzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgIC8vVXBkYXRlIHJlY2VudCB1c2VyIHN0YXR1czpcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVBEQVRFX1JFQ0VOVF9VU0VSX1NUQVRVUzpcclxuICAgICAgbGV0IGZvdW5kMSA9XHJcbiAgICAgICAgc3RhdGUuYWxsdXNlclN0YXR1cyAmJiBzdGF0ZS5hbGx1c2VyU3RhdHVzLmxlbmd0aFxyXG4gICAgICAgICAgPyAhIXN0YXRlLmFsbHVzZXJTdGF0dXMuZmluZCgodSkgPT4gdS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpXHJcbiAgICAgICAgICA6IGZhbHNlO1xyXG5cclxuICAgICAgLy9pZiB0aGUgdXNlciBpcyBhbHJlYWR5XHJcbiAgICAgIGlmIChmb3VuZDEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSByZWNlbnQgdXNlciBzdGF0dXNcIik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY2hhdGVkVXNlcnM6IHN0YXRlLmNoYXRlZFVzZXJzLm1hcCgodXNlclN0YXR1cywgaSkgPT5cclxuICAgICAgICAgICAgdXNlclN0YXR1cy5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICAgICAgICA/IHsgLi4udXNlclN0YXR1cywgb25saW5lU3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5vbmxpbmVTdGF0dXMgfVxyXG4gICAgICAgICAgICAgIDogdXNlclN0YXR1c1xyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHVzZXI6IHVzZXJfcmVkdWNlcixcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9