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
  var chatWithID = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.chatWith.id;
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
      lineNumber: 155,
      columnNumber: 12
    }, this);
  } else if (!filtered) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
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
            lineNumber: 163,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "theme-tab",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
            tabs: true,
            id: "myTab1",
            role: "tablist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
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
                chatlist["status"] = "sending";
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                  className: "".concat(chatWithID === chatlist.id + "@mongoose.mysmartpbx.org" ? "active" : ""),
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
                      lineNumber: 215,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "details",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                        children: chatlist.first_name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 240,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
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
                        lineNumber: 244,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h6", {
                        className: "font-success status",
                        children: chatlist.onlineStatus
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 248,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 25
                  }, _this)
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)
    }, void 0, false);
  }
}

_s(form, "ISMxt7wOqF9LtL1QT+/aR2SJw68=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsImNoYXRXaXRoSUQiLCJjaGF0V2l0aCIsImlkIiwic2VhcmNoVGVybSIsInNldFNlYXJjaCIsImNoYXRTdWJUYWIiLCJzZXRDaGF0U3ViVGFiIiwib25saW5ldXNlcnMiLCJzZXRPbmxpbmV1c2VycyIsImNsaWVudCIsImFsbHVzZXJTdGF0dXMiLCJmaWx0ZXJkIiwibGVuZ3RoIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJkYXRlVGltZSIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJjaGFuZ2VDaGF0Q2xpY2siLCJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkVG9Sb3N0ZXIiLCJqaWRkIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMxIiwiaXRlbXMiLCJuYW1lIiwiZ3JvdXBzIiwidXBkYXRlUm9zdGVySXRlbSIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJhY2NlcHRSZXF1ZXN0Iiwib24iLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSIsInRhcmdldCIsInZhbHVlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaGF0bGlzdCIsInNldENoYXRXaXRoIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJUaXBpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVdBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZCxNQUFJQyxPQUFKO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFdBQVgsQ0FBdUJKLEdBQWxDO0FBQUEsR0FBRCxDQUF2QjtBQUNBLE1BQUlLLGVBQWUsR0FBR0wsR0FBRyxJQUFJQSxHQUFHLENBQUNNLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUE3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR04sK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEtBQXRCO0FBQUEsR0FBRCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR1IsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0Es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QTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXpCRixlQTZCRTtBQUFLLCtCQUFTLEVBQUMsYUFBZjtBQUFBLDhDQUNFO0FBQ0UsaUNBQVMsRUFBQyxTQURaO0FBRUUsK0JBQU8sRUFBRSxpQkFBQ0csQ0FBRDtBQUFBLGlDQUFPc0MsS0FBSyxDQUFDdEMsQ0FBRCxDQUFaO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBS0U7QUFBSSxpQ0FBUyxFQUFDLHFCQUFkO0FBQUEsa0NBQ0c2QixRQUFRLENBQUMvQztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QkYsbUJBT09JLENBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQXlGRCxlQXhHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFERjtBQStIRDtBQUNGOztHQTNRUWpELEk7VUFFVUcsdUQsRUFDTEUsdUQsRUFFR0EsdUQsRUFDRUEsdUQsRUFJR0EsdUQsRUFDREEsdUQsRUFJSkEsdUQsRUFDS0EsdUQ7OztBQTRQUEwsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLjQ0YWIyMWNmZWI3MjUyMTQwMjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuL2RhdGV0aW1lXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLzEuanBnXCI7XHJcbmltcG9ydCB7IE5hdiwgVGFiQ29udGVudCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcInJlYWN0LWF2YXRhclwiO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoVXNlcnMsXHJcbiAgc2V0Q2hhdFdpdGgsXHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGNoYXRlZGVkVXNlcnMsXHJcbiAgYWRkTmV3VVNlcixcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIHVwZGF0ZUxhc3RNZXNzYWdlVGltZSxcclxuICBzZXRBbGxVc2VycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gZm9ybSgpIHtcclxuICBsZXQgb25saW5lVTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgamlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLmppZCk7XHJcbiAgdmFyIGppZExvZ2dlZEluVXNlciA9IGppZCAmJiBqaWQuc3BsaXQoXCJAXCIpWzBdO1xyXG4gIGNvbnN0IHVzZXJzUCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2Vycyk7XHJcbiAgY29uc3QgYWxsdXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlcnMpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgbGV0IGZpbHRlcmVkVXNlcnM7XHJcblxyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRlZFVzZXJzKTtcclxuICBjb25zdCBjaGF0V2l0aElEID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRXaXRoLmlkKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjaGF0U3ViVGFiLCBzZXRDaGF0U3ViVGFiXSA9IHVzZVN0YXRlKFwiY29udGFjdHNcIik7XHJcbiAgY29uc3QgW29ubGluZXVzZXJzLCBzZXRPbmxpbmV1c2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgY2xpZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNsaWVudCk7XHJcbiAgbGV0IGFsbHVzZXJTdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlclN0YXR1cyk7XHJcbiAgY29uc3QgZmlsdGVyZCA9ICgpID0+IHtcclxuICAgIGZpbHRlcmVkVXNlcnMgPVxyXG4gICAgICB1c2Vyc1AubGVuZ3RoID4gMCAmJlxyXG4gICAgICB1c2Vyc1BbMF0uZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBqaWRMb2dnZWRJblVzZXIpO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZFVzZXJzO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoVXNlcnMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyZWQoZmlsdGVyZCgpKTtcclxuICB9LCBbdXNlcnNQXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZWVmZmVjdCAybmRcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWRVc2VycywgZmlsdGVyZWQpO1xyXG4gICAgaWYgKGZpbHRlcmVkICYmIGFsbHVzZXJTdGF0dXMpIHtcclxuICAgICAgb25saW5lVSA9IG1lcmdlZEFyYXkoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJPbmxpbmUgdXNlcnNcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWQsIGZpbHRlcmVkVXNlcnMpO1xyXG4gICAgICBzZXRPbmxpbmV1c2VycyhvbmxpbmVVKTtcclxuICAgIH1cclxuICB9LCBbYWxsdXNlclN0YXR1cywgZmlsdGVyZWRdKTtcclxuXHJcbiAgY29uc3QgbWVyZ2VkQXJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lcmdlQXJyYXkgPVxyXG4gICAgICBmaWx0ZXJlZCAmJlxyXG4gICAgICBmaWx0ZXJlZC5tYXAoKHVzZXJJdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsYXNzZXNJdGVtID0gYWxsdXNlclN0YXR1cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSB1c2VySXRlbS5pZCk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXNJdGVtXHJcbiAgICAgICAgICA/IHsgLi4udXNlckl0ZW0sIC4uLmNsYXNzZXNJdGVtIH1cclxuICAgICAgICAgIDogeyAuLi51c2VySXRlbSwgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIiB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2VycyBtZXJnZWRcIiwgbWVyZ2VBcnJheSk7XHJcbiAgICByZXR1cm4gbWVyZ2VBcnJheTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGROZXcgPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZXQgZm91bmRJRDtcclxuICAgIC8qIFNFQVJDSCBDT05UQUNUIElOIENIQVQgVEFCICBSRVRVUk46VFJVRSBJRiBQUkVTRU5ULFJFVFVSTiBGQUxTRSBJRiBOT1QgUFJFU0VOVCAqL1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNlbnRVc2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5ldyBpdGVtIGlkXCIsIGl0ZW0uaWQpO1xyXG4gICAgICBpZiAocmVjZW50VXNlcnNbaV0uaWQgPT09IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGZvdW5kSUQgPSByZWNlbnRVc2Vyc1tpXS5pZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGlmIGNvbnRhY3QgaXMgcHJlc2VudCBhcHBlbmQgbWVzc2FnZXMgKi9cclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICBsZXQgb2JqSW5kZXggPSByZWNlbnRVc2Vycy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGZvdW5kSUQpO1xyXG4gICAgICBkaXNwYXRjaCh1cGRhdGVMYXN0TWVzc2FnZVRpbWUoeyBpZDogb2JqSW5kZXgsIHRpbWU6IGRhdGVUaW1lKCkgfSkpO1xyXG4gICAgfVxyXG4gICAgLyogSWYgbm90IHByZXNlbnQgaW4gY2hhdCBzZWN0aW9uLmlmIGFueSBvdGhlciBpcyBwcmVzZW50IHdpdGhvdXQgbWVzZyBhdHRyaWJ1dGUgcmVtb3ZlIGZpcnN0IHRoZW4gYWRkKi9cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgcmVjZW50VXNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICAgIGlmICghY2kuaGFzT3duUHJvcGVydHkoXCJtZXNnXCIpKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgYWRkTmV3VVNlcih7XHJcbiAgICAgICAgICBpZDogaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIsXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiBpdGVtLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICBzdGF0dXM6IGl0ZW0ub25saW5ldXNlcnMsXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IGl0ZW0ub25saW5lU3RhdHVzLFxyXG4gICAgICAgICAgc3RhdHVzOiBpdGVtLm9ubGluZVN0YXR1cyxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNoYXRDbGljayA9IChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYXQtbWFpbiBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUb1Jvc3RlciA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICBsZXQgamlkZCA9IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiO1xyXG4gICAgbGV0IGNvbnRhY3RzMSA9IGF3YWl0IGNsaWVudC5nZXRSb3N0ZXIoKTtcclxuICAgIGxldCBsZW5ndGggPSBjb250YWN0czEuaXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZW5ndGggPiAwICYmXHJcbiAgICAgIGNvbnRhY3RzMS5pdGVtcy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgICBpZiAodXNlci5qaWQgPT09IGppZGQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBpcyBpbiBteSAgcm9zdGVyXCIpO1xyXG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBmb3VuZFwiLCBjbGllbnQpO1xyXG4gICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgIGppZDogamlkZCxcclxuICAgICAgICBuYW1lOiBpdGVtLmZpcnN0X25hbWUsXHJcbiAgICAgICAgZ3JvdXBzOiBbXSxcclxuICAgICAgfTtcclxuICAgICAgY2xpZW50LnVwZGF0ZVJvc3Rlckl0ZW0ob2JqKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnN1YnNjcmliZShqaWRkLCAoKSA9PiBjb25zb2xlLmxvZyhcInN1YnNjcnB0aW9uIHJlcXVlc3Qgc2VudFwiKSk7XHJcbiAgICAgICAgYWNjZXB0UmVxdWVzdCgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGFjY2VwdFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxpc3RlbmluZ1wiKTtcclxuICAgIGNsaWVudC5vbihcInN1YnNjcmliZVwiLCAoUmVjZWl2ZWRQcmVzZW5jZSkgPT5cclxuICAgICAgY2xpZW50LmFjY2VwdFN1YnNjcmlwdGlvbihSZWNlaXZlZFByZXNlbmNlLmZyb20pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGlmICghb25saW5ldXNlcnMpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfSBlbHNlIGlmICghZmlsdGVyZWQpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgICAgICAgPFRhYkNvbnRlbnQgYWN0aXZlVGFiPXtjaGF0U3ViVGFifT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdC1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICB7b25saW5ldXNlcnNcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZpcnN0X25hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhdGxpc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXRsaXN0XCIsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdFtcInN0YXR1c1wiXSA9IFwic2VuZGluZ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0V2l0aElEID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRsaXN0LmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhdFdpdGgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaGF0bGlzdC5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGNoYXRsaXN0Lm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXRsaXN0LmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRBY3RpdmVUYWIoXCJjaGF0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGF0ZWRlZFVzZXJzKFwibmV3XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGROZXcoY2hhdGxpc3QsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvUm9zdGVyKGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0xvZ299KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhdGxpc3QuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXRsaXN0LmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDY+e2NoYXRsaXN0Lm1lc2d9PC9oNj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGktcGluMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBUaXBpbihlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC1zdWNjZXNzIHN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Qub25saW5lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIlNlbmRpbmdcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGYWlsZWRcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZWVuXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdC5zdGF0dXMgPT09IFwiU2VuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXRsaXN0LnN0YXR1cyA9PT0gXCJGYWlsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm9udC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBzdGF0dXNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyBcIlwiIDogY2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeSBzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==