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
    messageBody: "i have received this message from user with id 2",
    chatType: "chat",
    direction: "received"
  }, {
    from: 1,
    to: 2,
    messageTime: "2021-08-07 09:03:10",
    messageBody: "assume i amm a logged in user . i am sending this message",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY3VycmVudFVzZXIiLCJ1c2VybmFtZSIsImFjY291bnRJZCIsImppZCIsInVzZXJTdGF0dXMiLCJjbGllbnQiLCJsb2dpbkVycm9ycyIsImxvYWRpbmciLCJhY3RpdmVUYWIiLCJ1c2VycyIsImNoYXRXaXRoIiwibmFtZSIsInN0YXR1cyIsImlkIiwibmV3Q29udGFjdCIsImNvbXBvbmVudFVubW91bnQiLCJyb3N0ZXIiLCJhbGx1c2VyU3RhdHVzIiwiYWxsdXNlcnMiLCJhbGxNZXNzYWdlIiwiZnJvbSIsInRvIiwibWVzc2FnZVRpbWUiLCJtZXNzYWdlQm9keSIsImNoYXRUeXBlIiwiZGlyZWN0aW9uIiwiY2hhdGVkVXNlcnMiLCJmaXJzdF9uYW1lIiwibWVzZyIsImxhc3RTZWVuRGF0ZSIsIm9ubGluZVN0YXR1cyIsImxhc3RNZXNzYWdlQXQiLCJ1c2VyX3JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiLCJmaWx0ZXIiLCJ1c2VyIiwidXBkYXRlIiwiJHNldCIsInRpbWUiLCJjb25zb2xlIiwibG9nIiwiZm91bmQiLCJsZW5ndGgiLCJmaW5kIiwidSIsIm1hcCIsImkiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxhQUFXLEVBQUU7QUFBRUMsWUFBUSxFQUFFLElBQVo7QUFBa0JDLGFBQVMsRUFBRSxJQUE3QjtBQUFtQ0MsT0FBRyxFQUFFO0FBQXhDLEdBRE07QUFFbkJELFdBQVMsRUFBRSxJQUZRO0FBR25CRSxZQUFVLEVBQUUsYUFITztBQUluQkMsUUFBTSxFQUFFLElBSlc7QUFLbkJDLGFBQVcsRUFBRSxFQUxNO0FBTW5C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RTs7QUFDQSxVQUFJZ0MsS0FBSixFQUFXO0FBQ1RGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0EsK0NBQ0tYLEtBREw7QUFFRWhCLHVCQUFhLEVBQUVnQixLQUFLLENBQUNoQixhQUFOLENBQW9CZ0MsR0FBcEIsQ0FBd0IsVUFBQzdDLFVBQUQsRUFBYThDLENBQWI7QUFBQSxtQkFDckM5QyxVQUFVLENBQUNTLEVBQVgsS0FBa0JxQixNQUFNLENBQUNHLE9BQVAsQ0FBZXhCLEVBQWpDLG1DQUNTVCxVQURUO0FBQ3FCMEIsMEJBQVksRUFBRUksTUFBTSxDQUFDRyxPQUFQLENBQWVQO0FBRGxELGlCQUVJMUIsVUFIaUM7QUFBQSxXQUF4QjtBQUZqQixXQUZTLENBV1Q7QUFDRCxPQVpELE1BWU87QUFDTCwrQ0FDSzZCLEtBREw7QUFFRWhCLHVCQUFhLHlHQUFNZ0IsS0FBSyxDQUFDaEIsYUFBWixJQUEyQmlCLE1BQU0sQ0FBQ0csT0FBbEM7QUFGZjtBQUlEOztBQUVIO0FBQVM7QUFDUCxlQUFPSixLQUFQO0FBQ0Q7QUF0SEg7QUF3SEQsQ0F6SEQ7O0FBMkhBLElBQU1rQixXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbENiLE1BQUksRUFBRVA7QUFENEIsQ0FBRCxDQUFuQztBQUdlbUIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41YzVlM2Q1ZjExNDBjNzQyZTA4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1cGRhdGUgZnJvbSBcInJlYWN0LWFkZG9ucy11cGRhdGVcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGN1cnJlbnRVc2VyOiB7IHVzZXJuYW1lOiBudWxsLCBhY2NvdW50SWQ6IG51bGwsIGppZDogbnVsbCB9LFxyXG4gIGFjY291bnRJZDogbnVsbCxcclxuICB1c2VyU3RhdHVzOiBcInVuYXZhaWxhYmxlXCIsXHJcbiAgY2xpZW50OiBudWxsLFxyXG4gIGxvZ2luRXJyb3JzOiBbXSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBhY3RpdmVUYWI6IFwiY2hhdFwiLFxyXG4gIHVzZXJzOiBbXSxcclxuICBjaGF0V2l0aDogeyBuYW1lOiBcIkFcIiwgc3RhdHVzOiBcIm9ubGluZVwiLCBpZDogMiB9LFxyXG4gIG5ld0NvbnRhY3Q6IFwiY29udGFjdFwiLFxyXG4gIGNvbXBvbmVudFVubW91bnQ6IG51bGwsXHJcbiAgcm9zdGVyOiBcIlwiLFxyXG4gIGFsbHVzZXJTdGF0dXM6IFtdLFxyXG4gIGFsbHVzZXJzOiBbXSxcclxuICBhbGxNZXNzYWdlOiBbXHJcbiAgICB7XHJcbiAgICAgIGZyb206IDIsXHJcbiAgICAgIHRvOiAxLFxyXG4gICAgICBtZXNzYWdlVGltZTogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXHJcbiAgICAgIG1lc3NhZ2VCb2R5OiBcImkgaGF2ZSByZWNlaXZlZCB0aGlzIG1lc3NhZ2UgZnJvbSB1c2VyIHdpdGggaWQgMlwiLFxyXG4gICAgICBjaGF0VHlwZTogXCJjaGF0XCIsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJyZWNlaXZlZFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZnJvbTogMSxcclxuICAgICAgdG86IDIsXHJcbiAgICAgIG1lc3NhZ2VUaW1lOiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgICAgbWVzc2FnZUJvZHk6IFwiYXNzdW1lIGkgYW1tIGEgbG9nZ2VkIGluIHVzZXIgLiBpIGFtIHNlbmRpbmcgdGhpcyBtZXNzYWdlXCIsXHJcbiAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcclxuICAgICAgZGlyZWN0aW9uOiBcInNlbmRcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGF0ZWRVc2VyczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZmlyc3RfbmFtZTogXCJKQUNLSUxJTkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBtZXNnOiBcImhvdyBhcmUgeW91XCIsXHJcbiAgICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxyXG4gICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiQlJPTk5OWkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgbWVzZzogXCJob3cgYXJlIHlvdVwiLFxyXG4gICAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcclxuICAgICAgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgbGFzdE1lc3NhZ2VBdDogXCIyMDIxLTA4LTA3IDA5OjAzOjU2XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbmNvbnN0IHVzZXJfcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50VXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSX1NUQVRVUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyU3RhdHVzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NMSUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnQ6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dpbkVycm9yczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fTE9ESU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0FDVElWRV9UQUI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWN0aXZlVGFiOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJzOiBbYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVF9XSVRIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYXRXaXRoOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DSEFURURfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmV3Q29udGFjdDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5DSEFUX0NPTVBPTkVOVF9VTk1PVU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbXBvbmVudFVubW91bnQ6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQUREX05FV19VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBjaGF0ZWRVc2VyczogW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5jaGF0ZWRVc2Vyc10sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFTU9WRV9VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBjaGF0ZWRVc2Vyczogc3RhdGUuY2hhdGVkVXNlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKHVzZXIpID0+IHVzZXIuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxBU1RfTUVTU0FHRV9USU1FOlxyXG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IHtcclxuICAgICAgICAgIFthY3Rpb24ucGF5bG9hZC5pZF06IHtcclxuICAgICAgICAgICAgbGFzdE1lc3NhZ2VBdDogeyAkc2V0OiBhY3Rpb24ucGF5bG9hZC50aW1lIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1JPU1RFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByb3N0ZXI6IFsuLi5zdGF0ZS5yb3N0ZXIsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0FMTF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhbGx1c2VyczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9VU0VSX1NUQVRVUzpcclxuICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgcmVkdWNlclwiKTtcclxuICAgICAgbGV0IGZvdW5kID1cclxuICAgICAgICBzdGF0ZS5hbGx1c2VyU3RhdHVzICYmIHN0YXRlLmFsbHVzZXJTdGF0dXMubGVuZ3RoXHJcbiAgICAgICAgICA/ICEhc3RhdGUuYWxsdXNlclN0YXR1cy5maW5kKCh1KSA9PiB1LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICAgIDogZmFsc2U7XHJcblxyXG4gICAgICAvL2lmIHRoZSB1c2VyIGlzIGFscmVhZHlcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGFscmVkeSBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhbGx1c2VyU3RhdHVzOiBzdGF0ZS5hbGx1c2VyU3RhdHVzLm1hcCgodXNlclN0YXR1cywgaSkgPT5cclxuICAgICAgICAgICAgdXNlclN0YXR1cy5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICAgICAgICA/IHsgLi4udXNlclN0YXR1cywgb25saW5lU3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5vbmxpbmVTdGF0dXMgfVxyXG4gICAgICAgICAgICAgIDogdXNlclN0YXR1c1xyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSB0aGUgdXNlciBzdGF0dXMgZm9yIGZpc3QgdGltZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFsbHVzZXJTdGF0dXM6IFsuLi5zdGF0ZS5hbGx1c2VyU3RhdHVzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyOiB1c2VyX3JlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==