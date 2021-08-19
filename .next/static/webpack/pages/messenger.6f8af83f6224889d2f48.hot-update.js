webpackHotUpdate_N_E("pages/messenger",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2giLCJjaGF0U3ViVGFiIiwic2V0Q2hhdFN1YlRhYiIsIm9ubGluZXVzZXJzIiwic2V0T25saW5ldXNlcnMiLCJjbGllbnQiLCJhbGx1c2VyU3RhdHVzIiwiZmlsdGVyZCIsImxlbmd0aCIsImZpbHRlciIsImlkIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJkYXRlVGltZSIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJjaGFuZ2VDaGF0Q2xpY2siLCJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkVG9Sb3N0ZXIiLCJqaWRkIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMxIiwiaXRlbXMiLCJuYW1lIiwiZ3JvdXBzIiwidXBkYXRlUm9zdGVySXRlbSIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJhY2NlcHRSZXF1ZXN0Iiwib24iLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSIsInRhcmdldCIsInZhbHVlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaGF0bGlzdCIsInNldENoYXRXaXRoIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJUaXBpbiIsInNlbmRpbmciLCJmYWlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFXQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQ2QsTUFBSUMsT0FBSjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxXQUFYLENBQXVCSixHQUFsQztBQUFBLEdBQUQsQ0FBdkI7QUFDQSxNQUFJSyxlQUFlLEdBQUdMLEdBQUcsSUFBSUEsR0FBRyxDQUFDTSxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsQ0FBN0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdOLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxLQUF0QjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdSLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUss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QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFLRTtBQUFBLGtDQUFLNkIsUUFBUSxDQUFDL0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUxGLEVBTUd5RCxPQUFPLEtBQUssU0FBWixJQUF5QixRQUF6QixJQUFxQyxNQUFyQyxnQkFDQztBQUNFLGlDQUFTLFlBQ1BBLE9BQU8sS0FBSyxTQUFaLEdBQ0ksV0FESixHQUVJQyxNQUFNLEtBQUssUUFBWCxHQUNBLGFBREEsR0FFQSxjQUxHLGFBRFg7QUFBQSxrQ0FTRyxNQUFNLEdBQU4sR0FBWSxFQUFaLEdBQWlCWCxRQUFRLENBQUMvQjtBQVQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELEdBYUMsRUFuQkosRUFxQkcsTUFBTSxHQUFOLGdCQUNDO0FBQUssaUNBQVMsRUFBQyx3QkFBZjtBQUFBLGtDQUNHeUM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELEdBS0MsRUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQkYsbUJBRU9yRCxDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFnRkQsZUE5RkY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREY7QUFxSEQ7QUFDRjs7R0FoUVEvQyxJO1VBRVVHLHVELEVBQ0xFLHVELEVBRUdBLHVELEVBQ0VBLHVELEVBSUdBLHVELEVBSUxBLHVELEVBQ0tBLHVEOzs7QUFrUFBMLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3Nlbmdlci42ZjhhZjgzZjYyMjQ4ODlkMmY0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBkYXRlVGltZSBmcm9tIFwiLi9kYXRldGltZVwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi8xLmpwZ1wiO1xyXG5pbXBvcnQgeyBOYXYsIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJyZWFjdC1hdmF0YXJcIjtcclxuaW1wb3J0IHtcclxuICBmZXRjaFVzZXJzLFxyXG4gIHNldENoYXRXaXRoLFxyXG4gIHNldEFjdGl2ZVRhYixcclxuICBjaGF0ZWRlZFVzZXJzLFxyXG4gIGFkZE5ld1VTZXIsXHJcbiAgcmVtb3ZlUmVjZW50VXNlcixcclxuICB1cGRhdGVMYXN0TWVzc2FnZVRpbWUsXHJcbiAgc2V0QWxsVXNlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIGZvcm0oKSB7XHJcbiAgbGV0IG9ubGluZVU7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGppZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jdXJyZW50VXNlci5qaWQpO1xyXG4gIHZhciBqaWRMb2dnZWRJblVzZXIgPSBqaWQgJiYgamlkLnNwbGl0KFwiQFwiKVswXTtcclxuICBjb25zdCB1c2Vyc1AgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcnMpO1xyXG4gIGNvbnN0IGFsbHVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmFsbHVzZXJzKTtcclxuICBjb25zdCBbZmlsdGVyZWQsIHNldEZpbHRlcmVkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGxldCBmaWx0ZXJlZFVzZXJzO1xyXG5cclxuICBjb25zdCByZWNlbnRVc2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0ZWRVc2Vycyk7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY2hhdFN1YlRhYiwgc2V0Q2hhdFN1YlRhYl0gPSB1c2VTdGF0ZShcImNvbnRhY3RzXCIpO1xyXG4gIGNvbnN0IFtvbmxpbmV1c2Vycywgc2V0T25saW5ldXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGNsaWVudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jbGllbnQpO1xyXG4gIGxldCBhbGx1c2VyU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmFsbHVzZXJTdGF0dXMpO1xyXG4gIGNvbnN0IGZpbHRlcmQgPSAoKSA9PiB7XHJcbiAgICBmaWx0ZXJlZFVzZXJzID1cclxuICAgICAgdXNlcnNQLmxlbmd0aCA+IDAgJiZcclxuICAgICAgdXNlcnNQWzBdLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gamlkTG9nZ2VkSW5Vc2VyKTtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyZWRVc2VycztcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZpbHRlcmVkKGZpbHRlcmQoKSk7XHJcbiAgfSwgW3VzZXJzUF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2VlZmZlY3QgMm5kXCIsIGFsbHVzZXJTdGF0dXMsIGZpbHRlcmVkVXNlcnMsIGZpbHRlcmVkKTtcclxuICAgIGlmIChmaWx0ZXJlZCAmJiBhbGx1c2VyU3RhdHVzKSB7XHJcbiAgICAgIG9ubGluZVUgPSBtZXJnZWRBcmF5KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiT25saW5lIHVzZXJzXCIsIGFsbHVzZXJTdGF0dXMsIGZpbHRlcmVkLCBmaWx0ZXJlZFVzZXJzKTtcclxuICAgICAgc2V0T25saW5ldXNlcnMob25saW5lVSk7XHJcbiAgICB9XHJcbiAgfSwgW2FsbHVzZXJTdGF0dXMsIGZpbHRlcmVkXSk7XHJcblxyXG4gIGNvbnN0IG1lcmdlZEFyYXkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZXJnZUFycmF5ID1cclxuICAgICAgZmlsdGVyZWQgJiZcclxuICAgICAgZmlsdGVyZWQubWFwKCh1c2VySXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBjbGFzc2VzSXRlbSA9IGFsbHVzZXJTdGF0dXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdXNlckl0ZW0uaWQpO1xyXG4gICAgICAgIHJldHVybiBjbGFzc2VzSXRlbVxyXG4gICAgICAgICAgPyB7IC4uLnVzZXJJdGVtLCAuLi5jbGFzc2VzSXRlbSB9XHJcbiAgICAgICAgICA6IHsgLi4udXNlckl0ZW0sIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJPbmxpbmUgdXNlcnMgbWVyZ2VkXCIsIG1lcmdlQXJyYXkpO1xyXG4gICAgcmV0dXJuIG1lcmdlQXJyYXk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkTmV3ID0gKGl0ZW0pID0+IHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGV0IGZvdW5kSUQ7XHJcbiAgICAvKiBTRUFSQ0ggQ09OVEFDVCBJTiBDSEFUIFRBQiAgUkVUVVJOOlRSVUUgSUYgUFJFU0VOVCxSRVRVUk4gRkFMU0UgSUYgTk9UIFBSRVNFTlQgKi9cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjZW50VXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXcgaXRlbSBpZFwiLCBpdGVtLmlkKTtcclxuICAgICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBpdGVtLmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIikge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICBmb3VuZElEID0gcmVjZW50VXNlcnNbaV0uaWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBpZiBjb250YWN0IGlzIHByZXNlbnQgYXBwZW5kIG1lc3NhZ2VzICovXHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgbGV0IG9iakluZGV4ID0gcmVjZW50VXNlcnMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBmb3VuZElEKTtcclxuICAgICAgZGlzcGF0Y2godXBkYXRlTGFzdE1lc3NhZ2VUaW1lKHsgaWQ6IG9iakluZGV4LCB0aW1lOiBkYXRlVGltZSgpIH0pKTtcclxuICAgIH1cclxuICAgIC8qIElmIG5vdCBwcmVzZW50IGluIGNoYXQgc2VjdGlvbi5pZiBhbnkgb3RoZXIgaXMgcHJlc2VudCB3aXRob3V0IG1lc2cgYXR0cmlidXRlIHJlbW92ZSBmaXJzdCB0aGVuIGFkZCovXHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlUmVjZW50VXNlcihjaS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGFkZE5ld1VTZXIoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgc3RhdHVzOiBpdGVtLm9ubGluZXVzZXJzLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBpdGVtLm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgIHN0YXR1czogaXRlbS5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDaGF0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0LW1haW4gbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVG9Sb3N0ZXIgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGppZGQgPSBpdGVtLmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIjtcclxuICAgIGxldCBjb250YWN0czEgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcbiAgICBsZXQgbGVuZ3RoID0gY29udGFjdHMxLml0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGVuZ3RoID4gMCAmJlxyXG4gICAgICBjb250YWN0czEuaXRlbXMubWFwKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuamlkID09PSBqaWRkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgaXMgaW4gbXkgIHJvc3RlclwiKTtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJub3QgZm91bmRcIiwgY2xpZW50KTtcclxuICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICBqaWQ6IGppZGQsXHJcbiAgICAgICAgbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGdyb3VwczogW10sXHJcbiAgICAgIH07XHJcbiAgICAgIGNsaWVudC51cGRhdGVSb3N0ZXJJdGVtKG9iaik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zdWJzY3JpYmUoamlkZCwgKCkgPT4gY29uc29sZS5sb2coXCJzdWJzY3JwdGlvbiByZXF1ZXN0IHNlbnRcIikpO1xyXG4gICAgICAgIGFjY2VwdFJlcXVlc3QoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhY2NlcHRSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJsaXN0ZW5pbmdcIik7XHJcbiAgICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+XHJcbiAgICAgIGNsaWVudC5hY2NlcHRTdWJzY3JpcHRpb24oUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpZiAoIW9ubGluZXVzZXJzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSBpZiAoIWZpbHRlcmVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgICAgICAgIDxOYXYgdGFicyBpZD1cIm15VGFiMVwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9OYXY+XHJcbiAgICAgICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17Y2hhdFN1YlRhYn0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAge29ubGluZXVzZXJzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXRsaXN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGF0bGlzdFwiLCBjaGF0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AkezEgPT09IGNoYXRsaXN0LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNoYXRDbGljayhlLCBjaGF0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGF0V2l0aCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNoYXRsaXN0LmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogY2hhdGxpc3Qub25saW5lU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhdGxpc3QuaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNoYXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYXRlZGVkVXNlcnMoXCJuZXdcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ldyhjaGF0bGlzdCwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9Sb3N0ZXIoY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZmlsZSAke2NoYXRsaXN0Lm9ubGluZVN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7TG9nb30pYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZmlsZSAke2NoYXRsaXN0Lm9ubGluZVN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjaGF0bGlzdC5maXJzdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs0NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57Y2hhdGxpc3QuZmlyc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoNj57Y2hhdGxpc3QubWVzZ308L2g2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aS1waW4yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IFRpcGluKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57Y2hhdGxpc3Qub25saW5lU3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VuZGluZyA9PT0gXCJTZW5kaW5nXCIgfHwgXCJGYWlsZWRcIiB8fCBcIlNlZW5cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRpbmcgPT09IFwiU2VuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhaWxlZCA9PT0gXCJGYWlsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm9udC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBzdGF0dXNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezggPT09IFwiOFwiID8gXCJcIiA6IGNoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7OCA9PT0gXCI4XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeSBzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==