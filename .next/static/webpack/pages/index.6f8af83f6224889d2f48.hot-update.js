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
                      }, _this), sending === "Sending" || "Failed" || "Seen" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h6", {
                        className: "".concat(sending === "Sending" ? "font-dark" : failed === "Failed" ? "font-danger" : "font-success", "  status"),
                        children: 8 === "8" ? "" : chatlist.status
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 243,
                        columnNumber: 31
                      }, _this) : "", 8 === "8" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        className: "badge badge-primary sm",
                        children: sending
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 31
                      }, _this) : ""]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2giLCJjaGF0U3ViVGFiIiwic2V0Q2hhdFN1YlRhYiIsIm9ubGluZXVzZXJzIiwic2V0T25saW5ldXNlcnMiLCJjbGllbnQiLCJhbGx1c2VyU3RhdHVzIiwiZmlsdGVyZCIsImxlbmd0aCIsImZpbHRlciIsImlkIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJkYXRlVGltZSIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJjaGFuZ2VDaGF0Q2xpY2siLCJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkVG9Sb3N0ZXIiLCJqaWRkIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMxIiwiaXRlbXMiLCJuYW1lIiwiZ3JvdXBzIiwidXBkYXRlUm9zdGVySXRlbSIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJhY2NlcHRSZXF1ZXN0Iiwib24iLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSIsInRhcmdldCIsInZhbHVlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaGF0bGlzdCIsInNldENoYXRXaXRoIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJUaXBpbiIsInNlbmRpbmciLCJmYWlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFXQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQ2QsTUFBSUMsT0FBSjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxXQUFYLENBQXVCSixHQUFsQztBQUFBLEdBQUQsQ0FBdkI7QUFDQSxNQUFJSyxlQUFlLEdBQUdMLEdBQUcsSUFBSUEsR0FBRyxDQUFDTSxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsQ0FBN0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdOLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxLQUF0QjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdSLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUss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QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFLRTtBQUFBLGtDQUFLNkIsUUFBUSxDQUFDL0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUxGLEVBTUd5RCxPQUFPLEtBQUssU0FBWixJQUF5QixRQUF6QixJQUFxQyxNQUFyQyxnQkFDQztBQUNFLGlDQUFTLFlBQ1BBLE9BQU8sS0FBSyxTQUFaLEdBQ0ksV0FESixHQUVJQyxNQUFNLEtBQUssUUFBWCxHQUNBLGFBREEsR0FFQSxjQUxHLGFBRFg7QUFBQSxrQ0FTRyxNQUFNLEdBQU4sR0FBWSxFQUFaLEdBQWlCWCxRQUFRLENBQUMvQjtBQVQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELEdBYUMsRUFuQkosRUFxQkcsTUFBTSxHQUFOLGdCQUNDO0FBQUssaUNBQVMsRUFBQyx3QkFBZjtBQUFBLGtDQUNHeUM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELEdBS0MsRUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQkYsbUJBRU9yRCxDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFnRkQsZUE5RkY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREY7QUFxSEQ7QUFDRjs7R0FoUVEvQyxJO1VBRVVHLHVELEVBQ0xFLHVELEVBRUdBLHVELEVBQ0VBLHVELEVBSUdBLHVELEVBSUxBLHVELEVBQ0tBLHVEOzs7QUFrUFBMLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmOGFmODNmNjIyNDg4OWQyZjQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuL2RhdGV0aW1lXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLzEuanBnXCI7XHJcbmltcG9ydCB7IE5hdiwgVGFiQ29udGVudCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcInJlYWN0LWF2YXRhclwiO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoVXNlcnMsXHJcbiAgc2V0Q2hhdFdpdGgsXHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGNoYXRlZGVkVXNlcnMsXHJcbiAgYWRkTmV3VVNlcixcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIHVwZGF0ZUxhc3RNZXNzYWdlVGltZSxcclxuICBzZXRBbGxVc2VycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gZm9ybSgpIHtcclxuICBsZXQgb25saW5lVTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgamlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLmppZCk7XHJcbiAgdmFyIGppZExvZ2dlZEluVXNlciA9IGppZCAmJiBqaWQuc3BsaXQoXCJAXCIpWzBdO1xyXG4gIGNvbnN0IHVzZXJzUCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2Vycyk7XHJcbiAgY29uc3QgYWxsdXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlcnMpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgbGV0IGZpbHRlcmVkVXNlcnM7XHJcblxyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRlZFVzZXJzKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjaGF0U3ViVGFiLCBzZXRDaGF0U3ViVGFiXSA9IHVzZVN0YXRlKFwiY29udGFjdHNcIik7XHJcbiAgY29uc3QgW29ubGluZXVzZXJzLCBzZXRPbmxpbmV1c2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgY2xpZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNsaWVudCk7XHJcbiAgbGV0IGFsbHVzZXJTdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlclN0YXR1cyk7XHJcbiAgY29uc3QgZmlsdGVyZCA9ICgpID0+IHtcclxuICAgIGZpbHRlcmVkVXNlcnMgPVxyXG4gICAgICB1c2Vyc1AubGVuZ3RoID4gMCAmJlxyXG4gICAgICB1c2Vyc1BbMF0uZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBqaWRMb2dnZWRJblVzZXIpO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZFVzZXJzO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoVXNlcnMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyZWQoZmlsdGVyZCgpKTtcclxuICB9LCBbdXNlcnNQXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZWVmZmVjdCAybmRcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWRVc2VycywgZmlsdGVyZWQpO1xyXG4gICAgaWYgKGZpbHRlcmVkICYmIGFsbHVzZXJTdGF0dXMpIHtcclxuICAgICAgb25saW5lVSA9IG1lcmdlZEFyYXkoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJPbmxpbmUgdXNlcnNcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWQsIGZpbHRlcmVkVXNlcnMpO1xyXG4gICAgICBzZXRPbmxpbmV1c2VycyhvbmxpbmVVKTtcclxuICAgIH1cclxuICB9LCBbYWxsdXNlclN0YXR1cywgZmlsdGVyZWRdKTtcclxuXHJcbiAgY29uc3QgbWVyZ2VkQXJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lcmdlQXJyYXkgPVxyXG4gICAgICBmaWx0ZXJlZCAmJlxyXG4gICAgICBmaWx0ZXJlZC5tYXAoKHVzZXJJdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsYXNzZXNJdGVtID0gYWxsdXNlclN0YXR1cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSB1c2VySXRlbS5pZCk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXNJdGVtXHJcbiAgICAgICAgICA/IHsgLi4udXNlckl0ZW0sIC4uLmNsYXNzZXNJdGVtIH1cclxuICAgICAgICAgIDogeyAuLi51c2VySXRlbSwgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIiB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2VycyBtZXJnZWRcIiwgbWVyZ2VBcnJheSk7XHJcbiAgICByZXR1cm4gbWVyZ2VBcnJheTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGROZXcgPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZXQgZm91bmRJRDtcclxuICAgIC8qIFNFQVJDSCBDT05UQUNUIElOIENIQVQgVEFCICBSRVRVUk46VFJVRSBJRiBQUkVTRU5ULFJFVFVSTiBGQUxTRSBJRiBOT1QgUFJFU0VOVCAqL1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNlbnRVc2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5ldyBpdGVtIGlkXCIsIGl0ZW0uaWQpO1xyXG4gICAgICBpZiAocmVjZW50VXNlcnNbaV0uaWQgPT09IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGZvdW5kSUQgPSByZWNlbnRVc2Vyc1tpXS5pZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGlmIGNvbnRhY3QgaXMgcHJlc2VudCBhcHBlbmQgbWVzc2FnZXMgKi9cclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICBsZXQgb2JqSW5kZXggPSByZWNlbnRVc2Vycy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGZvdW5kSUQpO1xyXG4gICAgICBkaXNwYXRjaCh1cGRhdGVMYXN0TWVzc2FnZVRpbWUoeyBpZDogb2JqSW5kZXgsIHRpbWU6IGRhdGVUaW1lKCkgfSkpO1xyXG4gICAgfVxyXG4gICAgLyogSWYgbm90IHByZXNlbnQgaW4gY2hhdCBzZWN0aW9uLmlmIGFueSBvdGhlciBpcyBwcmVzZW50IHdpdGhvdXQgbWVzZyBhdHRyaWJ1dGUgcmVtb3ZlIGZpcnN0IHRoZW4gYWRkKi9cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgcmVjZW50VXNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICAgIGlmICghY2kuaGFzT3duUHJvcGVydHkoXCJtZXNnXCIpKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgYWRkTmV3VVNlcih7XHJcbiAgICAgICAgICBpZDogaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIsXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiBpdGVtLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICBzdGF0dXM6IGl0ZW0ub25saW5ldXNlcnMsXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IGl0ZW0ub25saW5lU3RhdHVzLFxyXG4gICAgICAgICAgc3RhdHVzOiBpdGVtLm9ubGluZVN0YXR1cyxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNoYXRDbGljayA9IChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYXQtbWFpbiBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUb1Jvc3RlciA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICBsZXQgamlkZCA9IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiO1xyXG4gICAgbGV0IGNvbnRhY3RzMSA9IGF3YWl0IGNsaWVudC5nZXRSb3N0ZXIoKTtcclxuICAgIGxldCBsZW5ndGggPSBjb250YWN0czEuaXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZW5ndGggPiAwICYmXHJcbiAgICAgIGNvbnRhY3RzMS5pdGVtcy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgICBpZiAodXNlci5qaWQgPT09IGppZGQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBpcyBpbiBteSAgcm9zdGVyXCIpO1xyXG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBmb3VuZFwiLCBjbGllbnQpO1xyXG4gICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgIGppZDogamlkZCxcclxuICAgICAgICBuYW1lOiBpdGVtLmZpcnN0X25hbWUsXHJcbiAgICAgICAgZ3JvdXBzOiBbXSxcclxuICAgICAgfTtcclxuICAgICAgY2xpZW50LnVwZGF0ZVJvc3Rlckl0ZW0ob2JqKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnN1YnNjcmliZShqaWRkLCAoKSA9PiBjb25zb2xlLmxvZyhcInN1YnNjcnB0aW9uIHJlcXVlc3Qgc2VudFwiKSk7XHJcbiAgICAgICAgYWNjZXB0UmVxdWVzdCgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGFjY2VwdFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxpc3RlbmluZ1wiKTtcclxuICAgIGNsaWVudC5vbihcInN1YnNjcmliZVwiLCAoUmVjZWl2ZWRQcmVzZW5jZSkgPT5cclxuICAgICAgY2xpZW50LmFjY2VwdFN1YnNjcmlwdGlvbihSZWNlaXZlZFByZXNlbmNlLmZyb20pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGlmICghb25saW5ldXNlcnMpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfSBlbHNlIGlmICghZmlsdGVyZWQpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgICAgICAgPFRhYkNvbnRlbnQgYWN0aXZlVGFiPXtjaGF0U3ViVGFifT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdC1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICB7b25saW5ldXNlcnNcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZpcnN0X25hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhdGxpc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXRsaXN0XCIsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7MSA9PT0gY2hhdGxpc3QuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYXRXaXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2hhdGxpc3QuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjaGF0bGlzdC5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGF0bGlzdC5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0QWN0aXZlVGFiKFwiY2hhdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhdGVkZWRVc2VycyhcIm5ld1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3KGNoYXRsaXN0LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb1Jvc3RlcihjaGF0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtMb2dvfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NoYXRsaXN0LmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezQ1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjaGF0bGlzdC5maXJzdF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg2PntjaGF0bGlzdC5tZXNnfTwvaDY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpLXBpbjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gVGlwaW4oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntjaGF0bGlzdC5vbmxpbmVTdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZW5kaW5nID09PSBcIlNlbmRpbmdcIiB8fCBcIkZhaWxlZFwiIHx8IFwiU2VlblwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGluZyA9PT0gXCJTZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFpbGVkID09PSBcIkZhaWxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJmb250LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIHN0YXR1c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7OCA9PT0gXCI4XCIgPyBcIlwiIDogY2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs4ID09PSBcIjhcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IHNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9