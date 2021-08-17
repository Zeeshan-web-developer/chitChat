webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/leftSidebar/contactSearch.js":
/*!*************************************************!*\
  !*** ./containers/leftSidebar/contactSearch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datetime */ "./containers/leftSidebar/datetime.js");
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./1.jpg */ "./containers/leftSidebar/1.jpg");
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_1_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "D:\\chat\\containers\\leftSidebar\\contactSearch.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function form() {
  _s();

  var _this = this;

  var onlineU;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var jid = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.currentUser.jid;
  });
  var jidLoggedInUser = jid && jid.split("@")[0];
  var usersP = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.users;
  });
  var allusers = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.allusers;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      filtered = _useState[0],
      setFiltered = _useState[1];

  var filteredUsers;
  var recentUsers = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.chatedUsers;
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      searchTerm = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("contacts"),
      chatSubTab = _useState3[0],
      setChatSubTab = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      onlineusers = _useState4[0],
      setOnlineusers = _useState4[1];

  var client = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.client;
  });
  var alluserStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.alluserStatus;
  });

  var filterd = function filterd() {
    filteredUsers = usersP.length > 0 && usersP[0].filter(function (user) {
      return user.id !== jidLoggedInUser;
    });
    return filteredUsers;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["fetchUsers"])());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setFiltered(filterd());
  }, [usersP]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log("useeffect 2nd", alluserStatus, filteredUsers, filtered);

    if (filtered && alluserStatus) {
      onlineU = mergedAray();
      console.log("Online users", alluserStatus, filtered, filteredUsers);
      setOnlineusers(onlineU);
    }
  }, [alluserStatus, filtered]);

  var mergedAray = function mergedAray() {
    var mergeArray = filtered && filtered.map(function (userItem) {
      var classesItem = alluserStatus.find(function (item) {
        return item.id === userItem.id;
      });
      return classesItem ? _objectSpread(_objectSpread({}, userItem), classesItem) : _objectSpread(_objectSpread({}, userItem), {}, {
        onlineStatus: "offline"
      });
    });
    console.log("Online users merged", mergeArray);
    return mergeArray;
  };

  var addNew = function addNew(item) {
    var found = false;
    var foundID;
    /* SEARCH CONTACT IN CHAT TAB  RETURN:TRUE IF PRESENT,RETURN FALSE IF NOT PRESENT */

    for (var i = 0; i < recentUsers.length; i++) {
      if (recentUsers[i].id === item.id) {
        found = true;
        foundID = recentUsers[i].id;
        break;
      }
    }
    /* if contact is present append messages */


    if (found) {
      var objIndex = recentUsers.findIndex(function (obj) {
        return obj.id == foundID;
      });
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["updateLastMessageTime"])({
        id: objIndex,
        time: Object(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])()
      }));
    }
    /* If not present in chat section.if any other is present without mesg attribute remove first then add*/


    if (!found) {
      recentUsers.map(function (ci) {
        if (!ci.hasOwnProperty("mesg")) {
          dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["removeRecentUser"])(ci.id));
        }
      });
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["addNewUSer"])({
        id: item.id,
        first_name: item.first_name,
        status: item.onlineusers,
        mesg: "msg at ".concat(Object(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])()),
        onlineStatus: item.onlineStatus,
        lastMessageAt: Object(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])()
      }));
    }
  };

  var changeChatClick = function changeChatClick(e) {
    document.querySelectorAll(".chat-main li").forEach(function (item) {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    document.querySelector(".sidebar-toggle").classList.add("mobile-menu");
  };

  var addToRoster = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(item) {
      var jidd, contacts1, length, found, obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              jidd = item.id + "@mongoose.mysmartpbx.org";
              _context.next = 3;
              return client.getRoster();

            case 3:
              contacts1 = _context.sent;
              length = contacts1.items.length;
              found = false;
              length > 0 && contacts1.items.map(function (user) {
                if (user.jid === jidd) {
                  console.log("user is in my  roster");
                  found = true;
                }
              });

              if (!found) {
                console.log("not found", client);
                obj = {
                  jid: jidd,
                  name: item.first_name,
                  groups: []
                };
                client.updateRosterItem(obj);
                setTimeout(function () {
                  client.subscribe(jidd, function () {
                    return console.log("subscrption request sent");
                  });
                  acceptRequest();
                }, 1000);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addToRoster(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var acceptRequest = function acceptRequest() {
    console.log("listening");
    client.on("subscribe", function (ReceivedPresence) {
      return client.acceptSubscription(ReceivedPresence.from);
    });
  };

  if (!onlineusers) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 12
    }, this);
  } else if (!filtered) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 12
    }, this);
  } else {
    var _jsxDEV2;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], (_jsxDEV2 = {
            type: "email",
            name: "email"
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "type", "search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "placeholder", "Search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "onChange", function onChange(e) {
            return setSearch(e.target.value);
          }), _jsxDEV2), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "theme-tab",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
            tabs: true,
            id: "myTab1",
            role: "tablist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabContent"], {
            activeTab: chatSubTab,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("ul", {
              className: "chat-main",
              children: onlineusers.filter(function (data) {
                if (searchTerm == null) {
                  return data;
                } else if (data.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return data;
                }
              }).map(function (chatlist, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                  className: "".concat(1 === chatlist.id ? "active" : ""),
                  onClick: function onClick(e) {
                    changeChatClick(e, chatlist);
                    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["setChatWith"])({
                      name: chatlist.first_name,
                      status: chatlist.onlineStatus,
                      id: chatlist.id
                    }));
                    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["setActiveTab"])("chat"));
                    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["chatededUsers"])("new"));
                    addNew(chatlist, e);
                    addToRoster(chatlist);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "chat-box",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                      className: "profile ".concat(chatlist.onlineStatus),
                      style: {
                        backgroundImage: "url(".concat(_1_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, ")"),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "block"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                        className: "bg-img",
                        src: _1_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
                        alt: "Avatar",
                        style: {
                          display: "none"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                      className: "details",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h5", {
                        children: chatlist.first_name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                      className: "date-status",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                        className: "ti-pin2",
                        onClick: function onClick(e) {
                          return Tipin(e);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 25
                  }, _this)
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this)
    }, void 0, false);
  }
}

_s(form, "ija3Zx1lIliGcHtVAgsfDOWOs1w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (form);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2giLCJjaGF0U3ViVGFiIiwic2V0Q2hhdFN1YlRhYiIsIm9ubGluZXVzZXJzIiwic2V0T25saW5ldXNlcnMiLCJjbGllbnQiLCJhbGx1c2VyU3RhdHVzIiwiZmlsdGVyZCIsImxlbmd0aCIsImZpbHRlciIsImlkIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJkYXRlVGltZSIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJtZXNnIiwibGFzdE1lc3NhZ2VBdCIsImNoYW5nZUNoYXRDbGljayIsImUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3VycmVudFRhcmdldCIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRUb1Jvc3RlciIsImppZGQiLCJnZXRSb3N0ZXIiLCJjb250YWN0czEiLCJpdGVtcyIsIm5hbWUiLCJncm91cHMiLCJ1cGRhdGVSb3N0ZXJJdGVtIiwic2V0VGltZW91dCIsInN1YnNjcmliZSIsImFjY2VwdFJlcXVlc3QiLCJvbiIsIlJlY2VpdmVkUHJlc2VuY2UiLCJhY2NlcHRTdWJzY3JpcHRpb24iLCJmcm9tIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNoYXRsaXN0Iiwic2V0Q2hhdFdpdGgiLCJzZXRBY3RpdmVUYWIiLCJjaGF0ZWRlZFVzZXJzIiwiYmFja2dyb3VuZEltYWdlIiwiTG9nbyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsIlRpcGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBV0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUNkLE1BQUlDLE9BQUo7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsV0FBWCxDQUF1QkosR0FBbEM7QUFBQSxHQUFELENBQXZCO0FBQ0EsTUFBSUssZUFBZSxHQUFHTCxHQUFHLElBQUlBLEdBQUcsQ0FBQ00sS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0ssS0FBdEI7QUFBQSxHQUFELENBQTFCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHUiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENB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Q0FBRDtBQUFBLGlDQUFPc0MsS0FBSyxDQUFDdEMsQ0FBRCxDQUFaO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbEJGLG1CQUVPaEIsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBeUVELGVBdEZGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQURGO0FBNkdEO0FBQ0Y7O0dBeFBRL0MsSTtVQUVVRyx1RCxFQUNMRSx1RCxFQUVHQSx1RCxFQUNFQSx1RCxFQUlHQSx1RCxFQUlMQSx1RCxFQUNLQSx1RDs7O0FBME9QTCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jY2ZiYmI1NTdjNTEyZjYyNjBmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBkYXRlVGltZSBmcm9tIFwiLi9kYXRldGltZVwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi8xLmpwZ1wiO1xyXG5pbXBvcnQgeyBOYXYsIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoVXNlcnMsXHJcbiAgc2V0Q2hhdFdpdGgsXHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGNoYXRlZGVkVXNlcnMsXHJcbiAgYWRkTmV3VVNlcixcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIHVwZGF0ZUxhc3RNZXNzYWdlVGltZSxcclxuICBzZXRBbGxVc2VycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gZm9ybSgpIHtcclxuICBsZXQgb25saW5lVTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgamlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLmppZCk7XHJcbiAgdmFyIGppZExvZ2dlZEluVXNlciA9IGppZCAmJiBqaWQuc3BsaXQoXCJAXCIpWzBdO1xyXG4gIGNvbnN0IHVzZXJzUCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2Vycyk7XHJcbiAgY29uc3QgYWxsdXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlcnMpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgbGV0IGZpbHRlcmVkVXNlcnM7XHJcblxyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRlZFVzZXJzKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjaGF0U3ViVGFiLCBzZXRDaGF0U3ViVGFiXSA9IHVzZVN0YXRlKFwiY29udGFjdHNcIik7XHJcbiAgY29uc3QgW29ubGluZXVzZXJzLCBzZXRPbmxpbmV1c2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgY2xpZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNsaWVudCk7XHJcbiAgbGV0IGFsbHVzZXJTdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlclN0YXR1cyk7XHJcbiAgY29uc3QgZmlsdGVyZCA9ICgpID0+IHtcclxuICAgIGZpbHRlcmVkVXNlcnMgPVxyXG4gICAgICB1c2Vyc1AubGVuZ3RoID4gMCAmJlxyXG4gICAgICB1c2Vyc1BbMF0uZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBqaWRMb2dnZWRJblVzZXIpO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZFVzZXJzO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoVXNlcnMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyZWQoZmlsdGVyZCgpKTtcclxuICB9LCBbdXNlcnNQXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZWVmZmVjdCAybmRcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWRVc2VycywgZmlsdGVyZWQpO1xyXG4gICAgaWYgKGZpbHRlcmVkICYmIGFsbHVzZXJTdGF0dXMpIHtcclxuICAgICAgb25saW5lVSA9IG1lcmdlZEFyYXkoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJPbmxpbmUgdXNlcnNcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWQsIGZpbHRlcmVkVXNlcnMpO1xyXG4gICAgICBzZXRPbmxpbmV1c2VycyhvbmxpbmVVKTtcclxuICAgIH1cclxuICB9LCBbYWxsdXNlclN0YXR1cywgZmlsdGVyZWRdKTtcclxuXHJcbiAgY29uc3QgbWVyZ2VkQXJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lcmdlQXJyYXkgPVxyXG4gICAgICBmaWx0ZXJlZCAmJlxyXG4gICAgICBmaWx0ZXJlZC5tYXAoKHVzZXJJdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsYXNzZXNJdGVtID0gYWxsdXNlclN0YXR1cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSB1c2VySXRlbS5pZCk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXNJdGVtXHJcbiAgICAgICAgICA/IHsgLi4udXNlckl0ZW0sIC4uLmNsYXNzZXNJdGVtIH1cclxuICAgICAgICAgIDogeyAuLi51c2VySXRlbSwgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIiB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2VycyBtZXJnZWRcIiwgbWVyZ2VBcnJheSk7XHJcbiAgICByZXR1cm4gbWVyZ2VBcnJheTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGROZXcgPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZXQgZm91bmRJRDtcclxuICAgIC8qIFNFQVJDSCBDT05UQUNUIElOIENIQVQgVEFCICBSRVRVUk46VFJVRSBJRiBQUkVTRU5ULFJFVFVSTiBGQUxTRSBJRiBOT1QgUFJFU0VOVCAqL1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNlbnRVc2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocmVjZW50VXNlcnNbaV0uaWQgPT09IGl0ZW0uaWQpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgZm91bmRJRCA9IHJlY2VudFVzZXJzW2ldLmlkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogaWYgY29udGFjdCBpcyBwcmVzZW50IGFwcGVuZCBtZXNzYWdlcyAqL1xyXG4gICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgIGxldCBvYmpJbmRleCA9IHJlY2VudFVzZXJzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gZm91bmRJRCk7XHJcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUxhc3RNZXNzYWdlVGltZSh7IGlkOiBvYmpJbmRleCwgdGltZTogZGF0ZVRpbWUoKSB9KSk7XHJcbiAgICB9XHJcbiAgICAvKiBJZiBub3QgcHJlc2VudCBpbiBjaGF0IHNlY3Rpb24uaWYgYW55IG90aGVyIGlzIHByZXNlbnQgd2l0aG91dCBtZXNnIGF0dHJpYnV0ZSByZW1vdmUgZmlyc3QgdGhlbiBhZGQqL1xyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgc3RhdHVzOiBpdGVtLm9ubGluZXVzZXJzLFxyXG4gICAgICAgICAgbWVzZzogYG1zZyBhdCAke2RhdGVUaW1lKCl9YCxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogaXRlbS5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICBsYXN0TWVzc2FnZUF0OiBkYXRlVGltZSgpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ2hhdENsaWNrID0gKGUpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdC1tYWluIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvUm9zdGVyID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgIGxldCBqaWRkID0gaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCI7XHJcbiAgICBsZXQgY29udGFjdHMxID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG4gICAgbGV0IGxlbmd0aCA9IGNvbnRhY3RzMS5pdGVtcy5sZW5ndGg7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxlbmd0aCA+IDAgJiZcclxuICAgICAgY29udGFjdHMxLml0ZW1zLm1hcCgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyLmppZCA9PT0gamlkZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGlzIGluIG15ICByb3N0ZXJcIik7XHJcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibm90IGZvdW5kXCIsIGNsaWVudCk7XHJcbiAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgamlkOiBqaWRkLFxyXG4gICAgICAgIG5hbWU6IGl0ZW0uZmlyc3RfbmFtZSxcclxuICAgICAgICBncm91cHM6IFtdLFxyXG4gICAgICB9O1xyXG4gICAgICBjbGllbnQudXBkYXRlUm9zdGVySXRlbShvYmopO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjbGllbnQuc3Vic2NyaWJlKGppZGQsICgpID0+IGNvbnNvbGUubG9nKFwic3Vic2NycHRpb24gcmVxdWVzdCBzZW50XCIpKTtcclxuICAgICAgICBhY2NlcHRSZXF1ZXN0KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgYWNjZXB0UmVxdWVzdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibGlzdGVuaW5nXCIpO1xyXG4gICAgY2xpZW50Lm9uKFwic3Vic2NyaWJlXCIsIChSZWNlaXZlZFByZXNlbmNlKSA9PlxyXG4gICAgICBjbGllbnQuYWNjZXB0U3Vic2NyaXB0aW9uKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFvbmxpbmV1c2Vycykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9IGVsc2UgaWYgKCFmaWx0ZXJlZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXRhYlwiPlxyXG4gICAgICAgICAgICA8TmF2IHRhYnMgaWQ9XCJteVRhYjFcIiByb2xlPVwidGFibGlzdFwiPjwvTmF2PlxyXG4gICAgICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2NoYXRTdWJUYWJ9PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGF0LW1haW5cIj5cclxuICAgICAgICAgICAgICAgIHtvbmxpbmV1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChjaGF0bGlzdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHsxID09PSBjaGF0bGlzdC5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhdFdpdGgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaGF0bGlzdC5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGNoYXRsaXN0Lm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXRsaXN0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNoYXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYXRlZGVkVXNlcnMoXCJuZXdcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ldyhjaGF0bGlzdCwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9Sb3N0ZXIoY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZmlsZSAke2NoYXRsaXN0Lm9ubGluZVN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7TG9nb30pYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXRsaXN0LmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDY+e2NoYXRsaXN0Lm1lc2d9PC9oNj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGktcGluMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBUaXBpbihlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg2PntjaGF0bGlzdC5sYXN0U2VlbkRhdGV9PC9oNj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCIgfHwgXCJGYWlsZWRcIiB8fCBcIlNlZW5cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0bGlzdC5zdGF0dXMgPT09IFwiRmFpbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm9udC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgc3RhdHVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyBcIlwiIDogY2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IHNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=