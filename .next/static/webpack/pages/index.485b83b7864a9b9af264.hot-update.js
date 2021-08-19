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
                console.log("chatlist", chatlist);
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                  className: "".concat(1 === chatlist.id ? "active" : ""),
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
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("i", {
                        className: "ti-pin2",
                        onClick: function onClick(e) {
                          return Tipin(e);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h6", {
                        children: chatlist.onlineStatus
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
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
                  lineNumber: 189,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2giLCJjaGF0U3ViVGFiIiwic2V0Q2hhdFN1YlRhYiIsIm9ubGluZXVzZXJzIiwic2V0T25saW5ldXNlcnMiLCJjbGllbnQiLCJhbGx1c2VyU3RhdHVzIiwiZmlsdGVyZCIsImxlbmd0aCIsImZpbHRlciIsImlkIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJkYXRlVGltZSIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJjaGFuZ2VDaGF0Q2xpY2siLCJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkVG9Sb3N0ZXIiLCJqaWRkIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMxIiwiaXRlbXMiLCJuYW1lIiwiZ3JvdXBzIiwidXBkYXRlUm9zdGVySXRlbSIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJhY2NlcHRSZXF1ZXN0Iiwib24iLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSIsInRhcmdldCIsInZhbHVlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaGF0bGlzdCIsInNldENoYXRXaXRoIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJUaXBpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVdBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZCxNQUFJQyxPQUFKO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFdBQVgsQ0FBdUJKLEdBQWxDO0FBQUEsR0FBRCxDQUF2QjtBQUNBLE1BQUlLLGVBQWUsR0FBR0wsR0FBRyxJQUFJQSxHQUFHLENBQUNNLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUE3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR04sK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEtBQXRCO0FBQUEsR0FBRCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR1IsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdNLFFB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RixlQUtFO0FBQUEsa0NBQUs2QixRQUFRLENBQUMvQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQkYsbUJBRU9JLENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQWdGRCxlQTlGRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFERjtBQXFIRDtBQUNGOztHQWhRUS9DLEk7VUFFVUcsdUQsRUFDTEUsdUQsRUFFR0EsdUQsRUFDRUEsdUQsRUFJR0EsdUQsRUFJTEEsdUQsRUFDS0EsdUQ7OztBQWtQUEwsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDg1YjgzYjc4NjRhOWI5YWYyNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vMS5qcGdcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwicmVhY3QtYXZhdGFyXCI7XHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hVc2VycyxcclxuICBzZXRDaGF0V2l0aCxcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgY2hhdGVkZWRVc2VycyxcclxuICBhZGROZXdVU2VyLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbiAgdXBkYXRlTGFzdE1lc3NhZ2VUaW1lLFxyXG4gIHNldEFsbFVzZXJzLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBmb3JtKCkge1xyXG4gIGxldCBvbmxpbmVVO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBqaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY3VycmVudFVzZXIuamlkKTtcclxuICB2YXIgamlkTG9nZ2VkSW5Vc2VyID0gamlkICYmIGppZC5zcGxpdChcIkBcIilbMF07XHJcbiAgY29uc3QgdXNlcnNQID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLnVzZXJzKTtcclxuICBjb25zdCBhbGx1c2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hbGx1c2Vycyk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBsZXQgZmlsdGVyZWRVc2VycztcclxuXHJcbiAgY29uc3QgcmVjZW50VXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdGVkVXNlcnMpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NoYXRTdWJUYWIsIHNldENoYXRTdWJUYWJdID0gdXNlU3RhdGUoXCJjb250YWN0c1wiKTtcclxuICBjb25zdCBbb25saW5ldXNlcnMsIHNldE9ubGluZXVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBjbGllbnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2xpZW50KTtcclxuICBsZXQgYWxsdXNlclN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hbGx1c2VyU3RhdHVzKTtcclxuICBjb25zdCBmaWx0ZXJkID0gKCkgPT4ge1xyXG4gICAgZmlsdGVyZWRVc2VycyA9XHJcbiAgICAgIHVzZXJzUC5sZW5ndGggPiAwICYmXHJcbiAgICAgIHVzZXJzUFswXS5maWx0ZXIoKHVzZXIpID0+IHVzZXIuaWQgIT09IGppZExvZ2dlZEluVXNlcik7XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcmVkVXNlcnM7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJlZChmaWx0ZXJkKCkpO1xyXG4gIH0sIFt1c2Vyc1BdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlZWZmZWN0IDJuZFwiLCBhbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZFVzZXJzLCBmaWx0ZXJlZCk7XHJcbiAgICBpZiAoZmlsdGVyZWQgJiYgYWxsdXNlclN0YXR1cykge1xyXG4gICAgICBvbmxpbmVVID0gbWVyZ2VkQXJheSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2Vyc1wiLCBhbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZCwgZmlsdGVyZWRVc2Vycyk7XHJcbiAgICAgIHNldE9ubGluZXVzZXJzKG9ubGluZVUpO1xyXG4gICAgfVxyXG4gIH0sIFthbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZF0pO1xyXG5cclxuICBjb25zdCBtZXJnZWRBcmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVyZ2VBcnJheSA9XHJcbiAgICAgIGZpbHRlcmVkICYmXHJcbiAgICAgIGZpbHRlcmVkLm1hcCgodXNlckl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgY2xhc3Nlc0l0ZW0gPSBhbGx1c2VyU3RhdHVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHVzZXJJdGVtLmlkKTtcclxuICAgICAgICByZXR1cm4gY2xhc3Nlc0l0ZW1cclxuICAgICAgICAgID8geyAuLi51c2VySXRlbSwgLi4uY2xhc3Nlc0l0ZW0gfVxyXG4gICAgICAgICAgOiB7IC4uLnVzZXJJdGVtLCBvbmxpbmVTdGF0dXM6IFwib2ZmbGluZVwiIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiT25saW5lIHVzZXJzIG1lcmdlZFwiLCBtZXJnZUFycmF5KTtcclxuICAgIHJldHVybiBtZXJnZUFycmF5O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZE5ldyA9IChpdGVtKSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxldCBmb3VuZElEO1xyXG4gICAgLyogU0VBUkNIIENPTlRBQ1QgSU4gQ0hBVCBUQUIgIFJFVFVSTjpUUlVFIElGIFBSRVNFTlQsUkVUVVJOIEZBTFNFIElGIE5PVCBQUkVTRU5UICovXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IGl0ZW0gaWRcIiwgaXRlbS5pZCk7XHJcbiAgICAgIGlmIChyZWNlbnRVc2Vyc1tpXS5pZCA9PT0gaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgZm91bmRJRCA9IHJlY2VudFVzZXJzW2ldLmlkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogaWYgY29udGFjdCBpcyBwcmVzZW50IGFwcGVuZCBtZXNzYWdlcyAqL1xyXG4gICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgIGxldCBvYmpJbmRleCA9IHJlY2VudFVzZXJzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gZm91bmRJRCk7XHJcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUxhc3RNZXNzYWdlVGltZSh7IGlkOiBvYmpJbmRleCwgdGltZTogZGF0ZVRpbWUoKSB9KSk7XHJcbiAgICB9XHJcbiAgICAvKiBJZiBub3QgcHJlc2VudCBpbiBjaGF0IHNlY3Rpb24uaWYgYW55IG90aGVyIGlzIHByZXNlbnQgd2l0aG91dCBtZXNnIGF0dHJpYnV0ZSByZW1vdmUgZmlyc3QgdGhlbiBhZGQqL1xyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICAgIGlkOiBpdGVtLmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIixcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGl0ZW0uZmlyc3RfbmFtZSxcclxuICAgICAgICAgIHN0YXR1czogaXRlbS5vbmxpbmV1c2VycyxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogaXRlbS5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICBzdGF0dXM6IGl0ZW0ub25saW5lU3RhdHVzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ2hhdENsaWNrID0gKGUpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdC1tYWluIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvUm9zdGVyID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgIGxldCBqaWRkID0gaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCI7XHJcbiAgICBsZXQgY29udGFjdHMxID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG4gICAgbGV0IGxlbmd0aCA9IGNvbnRhY3RzMS5pdGVtcy5sZW5ndGg7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxlbmd0aCA+IDAgJiZcclxuICAgICAgY29udGFjdHMxLml0ZW1zLm1hcCgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyLmppZCA9PT0gamlkZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGlzIGluIG15ICByb3N0ZXJcIik7XHJcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibm90IGZvdW5kXCIsIGNsaWVudCk7XHJcbiAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgamlkOiBqaWRkLFxyXG4gICAgICAgIG5hbWU6IGl0ZW0uZmlyc3RfbmFtZSxcclxuICAgICAgICBncm91cHM6IFtdLFxyXG4gICAgICB9O1xyXG4gICAgICBjbGllbnQudXBkYXRlUm9zdGVySXRlbShvYmopO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjbGllbnQuc3Vic2NyaWJlKGppZGQsICgpID0+IGNvbnNvbGUubG9nKFwic3Vic2NycHRpb24gcmVxdWVzdCBzZW50XCIpKTtcclxuICAgICAgICBhY2NlcHRSZXF1ZXN0KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgYWNjZXB0UmVxdWVzdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibGlzdGVuaW5nXCIpO1xyXG4gICAgY2xpZW50Lm9uKFwic3Vic2NyaWJlXCIsIChSZWNlaXZlZFByZXNlbmNlKSA9PlxyXG4gICAgICBjbGllbnQuYWNjZXB0U3Vic2NyaXB0aW9uKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFvbmxpbmV1c2Vycykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9IGVsc2UgaWYgKCFmaWx0ZXJlZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXRhYlwiPlxyXG4gICAgICAgICAgICA8TmF2IHRhYnMgaWQ9XCJteVRhYjFcIiByb2xlPVwidGFibGlzdFwiPjwvTmF2PlxyXG4gICAgICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2NoYXRTdWJUYWJ9PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGF0LW1haW5cIj5cclxuICAgICAgICAgICAgICAgIHtvbmxpbmV1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChjaGF0bGlzdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhdGxpc3RcIiwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHsxID09PSBjaGF0bGlzdC5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhdFdpdGgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaGF0bGlzdC5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGNoYXRsaXN0Lm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXRsaXN0LmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRBY3RpdmVUYWIoXCJjaGF0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGF0ZWRlZFVzZXJzKFwibmV3XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGROZXcoY2hhdGxpc3QsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvUm9zdGVyKGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0xvZ299KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhdGxpc3QuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXRsaXN0LmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDY+e2NoYXRsaXN0Lm1lc2d9PC9oNj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGktcGluMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBUaXBpbihlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2NoYXRsaXN0Lm9ubGluZVN0YXR1c308L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiU2VuZGluZ1wiIHx8IFwiRmFpbGVkXCIgfHwgXCJTZWVuXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdC5zdGF0dXMgPT09IFwiU2VuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhdGxpc3Quc3RhdHVzID09PSBcIkZhaWxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZvbnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIHN0YXR1c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gXCJcIiA6IGNoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIjhcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeSBzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9