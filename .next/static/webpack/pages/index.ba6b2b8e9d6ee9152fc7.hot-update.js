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
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-avatar */ "./node_modules/react-avatar/es/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);




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
    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["fetchUsers"])());
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
      console.log("new item id", item.id);

      if (recentUsers[i].id === item.id + "@mongoose.mysmartpbx.org") {
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
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["updateLastMessageTime"])({
        id: objIndex,
        time: Object(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])()
      }));
    }
    /* If not present in chat section.if any other is present without mesg attribute remove first then add*/


    if (!found) {
      recentUsers.map(function (ci) {
        if (!ci.hasOwnProperty("mesg")) {
          dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["removeRecentUser"])(ci.id));
        }
      });
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["addNewUSer"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
        id: item.id + "@mongoose.mysmartpbx.org",
        first_name: item.first_name,
        status: item.onlineusers,
        onlineStatus: item.onlineStatus
      }, "status", item.onlineStatus)));
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 12
    }, this);
  } else if (!filtered) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 12
    }, this);
  } else {
    var _jsxDEV2;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], (_jsxDEV2 = {
            type: "email",
            name: "email"
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "type", "search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "placeholder", "Search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "onChange", function onChange(e) {
            return setSearch(e.target.value);
          }), _jsxDEV2), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "theme-tab",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
            tabs: true,
            id: "myTab1",
            role: "tablist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabContent"], {
            activeTab: chatSubTab,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
              className: "chat-main",
              children: onlineusers.filter(function (data) {
                if (searchTerm == null) {
                  return data;
                } else if (data.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return data;
                }
              }).map(function (chatlist, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                  className: "".concat(1 === chatlist.id ? "active" : ""),
                  style: {
                    borderBottom: "2px solid green"
                  },
                  onClick: function onClick(e) {
                    changeChatClick(e, chatlist);
                    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["setChatWith"])({
                      name: chatlist.first_name,
                      status: chatlist.onlineStatus,
                      id: chatlist.id + "@mongoose.mysmartpbx.org"
                    }));
                    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["setActiveTab"])("chat"));
                    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["chatededUsers"])("new"));
                    addNew(chatlist, e);
                    addToRoster(chatlist);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                    className: "chat-box",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "profile ".concat(chatlist.onlineStatus),
                      style: {
                        backgroundImage: "url(".concat(_1_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, ")"),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "block"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "details",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                        children: chatlist.first_name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 233,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "date-status",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("i", {
                        className: "ti-pin2",
                        onClick: function onClick(e) {
                          return Tipin(e);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 25
                  }, _this)
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2giLCJjaGF0U3ViVGFiIiwic2V0Q2hhdFN1YlRhYiIsIm9ubGluZXVzZXJzIiwic2V0T25saW5ldXNlcnMiLCJjbGllbnQiLCJhbGx1c2VyU3RhdHVzIiwiZmlsdGVyZCIsImxlbmd0aCIsImZpbHRlciIsImlkIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJkYXRlVGltZSIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJjaGFuZ2VDaGF0Q2xpY2siLCJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkVG9Sb3N0ZXIiLCJqaWRkIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMxIiwiaXRlbXMiLCJuYW1lIiwiZ3JvdXBzIiwidXBkYXRlUm9zdGVySXRlbSIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJhY2NlcHRSZXF1ZXN0Iiwib24iLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSIsInRhcmdldCIsInZhbHVlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaGF0bGlzdCIsImJvcmRlckJvdHRvbSIsInNldENoYXRXaXRoIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJUaXBpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVdBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZCxNQUFJQyxPQUFKO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFdBQVgsQ0FBdUJKLEdBQWxDO0FBQUEsR0FBRCxDQUF2QjtBQUNBLE1BQUlLLGVBQWUsR0FBR0wsR0FBRyxJQUFJQSxHQUFHLENBQUNNLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUE3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR04sK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEtBQXRCO0FBQUEsR0FBRCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR1IsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFD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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CRixtQkFFT2QsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBaUZELGVBOUZGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQURGO0FBcUhEO0FBQ0Y7O0dBaFFRL0MsSTtVQUVVRyx1RCxFQUNMRSx1RCxFQUVHQSx1RCxFQUNFQSx1RCxFQUlHQSx1RCxFQUlMQSx1RCxFQUNLQSx1RDs7O0FBa1BQTCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYTZiMmI4ZTlkNmVlOTE1MmZjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBkYXRlVGltZSBmcm9tIFwiLi9kYXRldGltZVwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi8xLmpwZ1wiO1xyXG5pbXBvcnQgeyBOYXYsIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJyZWFjdC1hdmF0YXJcIjtcclxuaW1wb3J0IHtcclxuICBmZXRjaFVzZXJzLFxyXG4gIHNldENoYXRXaXRoLFxyXG4gIHNldEFjdGl2ZVRhYixcclxuICBjaGF0ZWRlZFVzZXJzLFxyXG4gIGFkZE5ld1VTZXIsXHJcbiAgcmVtb3ZlUmVjZW50VXNlcixcclxuICB1cGRhdGVMYXN0TWVzc2FnZVRpbWUsXHJcbiAgc2V0QWxsVXNlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIGZvcm0oKSB7XHJcbiAgbGV0IG9ubGluZVU7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGppZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jdXJyZW50VXNlci5qaWQpO1xyXG4gIHZhciBqaWRMb2dnZWRJblVzZXIgPSBqaWQgJiYgamlkLnNwbGl0KFwiQFwiKVswXTtcclxuICBjb25zdCB1c2Vyc1AgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcnMpO1xyXG4gIGNvbnN0IGFsbHVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmFsbHVzZXJzKTtcclxuICBjb25zdCBbZmlsdGVyZWQsIHNldEZpbHRlcmVkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGxldCBmaWx0ZXJlZFVzZXJzO1xyXG5cclxuICBjb25zdCByZWNlbnRVc2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0ZWRVc2Vycyk7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY2hhdFN1YlRhYiwgc2V0Q2hhdFN1YlRhYl0gPSB1c2VTdGF0ZShcImNvbnRhY3RzXCIpO1xyXG4gIGNvbnN0IFtvbmxpbmV1c2Vycywgc2V0T25saW5ldXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGNsaWVudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jbGllbnQpO1xyXG4gIGxldCBhbGx1c2VyU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmFsbHVzZXJTdGF0dXMpO1xyXG4gIGNvbnN0IGZpbHRlcmQgPSAoKSA9PiB7XHJcbiAgICBmaWx0ZXJlZFVzZXJzID1cclxuICAgICAgdXNlcnNQLmxlbmd0aCA+IDAgJiZcclxuICAgICAgdXNlcnNQWzBdLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gamlkTG9nZ2VkSW5Vc2VyKTtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyZWRVc2VycztcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZpbHRlcmVkKGZpbHRlcmQoKSk7XHJcbiAgfSwgW3VzZXJzUF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2VlZmZlY3QgMm5kXCIsIGFsbHVzZXJTdGF0dXMsIGZpbHRlcmVkVXNlcnMsIGZpbHRlcmVkKTtcclxuICAgIGlmIChmaWx0ZXJlZCAmJiBhbGx1c2VyU3RhdHVzKSB7XHJcbiAgICAgIG9ubGluZVUgPSBtZXJnZWRBcmF5KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiT25saW5lIHVzZXJzXCIsIGFsbHVzZXJTdGF0dXMsIGZpbHRlcmVkLCBmaWx0ZXJlZFVzZXJzKTtcclxuICAgICAgc2V0T25saW5ldXNlcnMob25saW5lVSk7XHJcbiAgICB9XHJcbiAgfSwgW2FsbHVzZXJTdGF0dXMsIGZpbHRlcmVkXSk7XHJcblxyXG4gIGNvbnN0IG1lcmdlZEFyYXkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZXJnZUFycmF5ID1cclxuICAgICAgZmlsdGVyZWQgJiZcclxuICAgICAgZmlsdGVyZWQubWFwKCh1c2VySXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBjbGFzc2VzSXRlbSA9IGFsbHVzZXJTdGF0dXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdXNlckl0ZW0uaWQpO1xyXG4gICAgICAgIHJldHVybiBjbGFzc2VzSXRlbVxyXG4gICAgICAgICAgPyB7IC4uLnVzZXJJdGVtLCAuLi5jbGFzc2VzSXRlbSB9XHJcbiAgICAgICAgICA6IHsgLi4udXNlckl0ZW0sIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJPbmxpbmUgdXNlcnMgbWVyZ2VkXCIsIG1lcmdlQXJyYXkpO1xyXG4gICAgcmV0dXJuIG1lcmdlQXJyYXk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkTmV3ID0gKGl0ZW0pID0+IHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGV0IGZvdW5kSUQ7XHJcbiAgICAvKiBTRUFSQ0ggQ09OVEFDVCBJTiBDSEFUIFRBQiAgUkVUVVJOOlRSVUUgSUYgUFJFU0VOVCxSRVRVUk4gRkFMU0UgSUYgTk9UIFBSRVNFTlQgKi9cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjZW50VXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXcgaXRlbSBpZFwiLCBpdGVtLmlkKTtcclxuICAgICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBpdGVtLmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIikge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICBmb3VuZElEID0gcmVjZW50VXNlcnNbaV0uaWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBpZiBjb250YWN0IGlzIHByZXNlbnQgYXBwZW5kIG1lc3NhZ2VzICovXHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgbGV0IG9iakluZGV4ID0gcmVjZW50VXNlcnMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBmb3VuZElEKTtcclxuICAgICAgZGlzcGF0Y2godXBkYXRlTGFzdE1lc3NhZ2VUaW1lKHsgaWQ6IG9iakluZGV4LCB0aW1lOiBkYXRlVGltZSgpIH0pKTtcclxuICAgIH1cclxuICAgIC8qIElmIG5vdCBwcmVzZW50IGluIGNoYXQgc2VjdGlvbi5pZiBhbnkgb3RoZXIgaXMgcHJlc2VudCB3aXRob3V0IG1lc2cgYXR0cmlidXRlIHJlbW92ZSBmaXJzdCB0aGVuIGFkZCovXHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlUmVjZW50VXNlcihjaS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGFkZE5ld1VTZXIoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgc3RhdHVzOiBpdGVtLm9ubGluZXVzZXJzLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBpdGVtLm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgIHN0YXR1czogaXRlbS5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDaGF0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0LW1haW4gbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVG9Sb3N0ZXIgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGppZGQgPSBpdGVtLmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIjtcclxuICAgIGxldCBjb250YWN0czEgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcbiAgICBsZXQgbGVuZ3RoID0gY29udGFjdHMxLml0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGVuZ3RoID4gMCAmJlxyXG4gICAgICBjb250YWN0czEuaXRlbXMubWFwKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuamlkID09PSBqaWRkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgaXMgaW4gbXkgIHJvc3RlclwiKTtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJub3QgZm91bmRcIiwgY2xpZW50KTtcclxuICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICBqaWQ6IGppZGQsXHJcbiAgICAgICAgbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGdyb3VwczogW10sXHJcbiAgICAgIH07XHJcbiAgICAgIGNsaWVudC51cGRhdGVSb3N0ZXJJdGVtKG9iaik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zdWJzY3JpYmUoamlkZCwgKCkgPT4gY29uc29sZS5sb2coXCJzdWJzY3JwdGlvbiByZXF1ZXN0IHNlbnRcIikpO1xyXG4gICAgICAgIGFjY2VwdFJlcXVlc3QoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhY2NlcHRSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJsaXN0ZW5pbmdcIik7XHJcbiAgICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+XHJcbiAgICAgIGNsaWVudC5hY2NlcHRTdWJzY3JpcHRpb24oUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpZiAoIW9ubGluZXVzZXJzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSBpZiAoIWZpbHRlcmVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgICAgICAgIDxOYXYgdGFicyBpZD1cIm15VGFiMVwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9OYXY+XHJcbiAgICAgICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17Y2hhdFN1YlRhYn0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAge29ubGluZXVzZXJzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXRsaXN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AkezEgPT09IGNoYXRsaXN0LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkIGdyZWVuXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhdFdpdGgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaGF0bGlzdC5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGNoYXRsaXN0Lm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXRsaXN0LmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRBY3RpdmVUYWIoXCJjaGF0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGF0ZWRlZFVzZXJzKFwibmV3XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGROZXcoY2hhdGxpc3QsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvUm9zdGVyKGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0xvZ299KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhdGxpc3QuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXRsaXN0LmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDY+e2NoYXRsaXN0Lm1lc2d9PC9oNj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGktcGluMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBUaXBpbihlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg2PntjaGF0bGlzdC5sYXN0U2VlbkRhdGV9PC9oNj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCIgfHwgXCJGYWlsZWRcIiB8fCBcIlNlZW5cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0bGlzdC5zdGF0dXMgPT09IFwiRmFpbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm9udC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgc3RhdHVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyBcIlwiIDogY2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IHNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=