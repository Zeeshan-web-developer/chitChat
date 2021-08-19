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
          console.log("remove first");
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
      lineNumber: 156,
      columnNumber: 12
    }, this);
  } else if (!filtered) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
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
            lineNumber: 164,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "theme-tab",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
            tabs: true,
            id: "myTab1",
            role: "tablist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
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
              lineNumber: 175,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsImNoYXRXaXRoSUQiLCJjaGF0V2l0aCIsImlkIiwic2VhcmNoVGVybSIsInNldFNlYXJjaCIsImNoYXRTdWJUYWIiLCJzZXRDaGF0U3ViVGFiIiwib25saW5ldXNlcnMiLCJzZXRPbmxpbmV1c2VycyIsImNsaWVudCIsImFsbHVzZXJTdGF0dXMiLCJmaWx0ZXJkIiwibGVuZ3RoIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJkYXRlVGltZSIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJjaGFuZ2VDaGF0Q2xpY2siLCJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkVG9Sb3N0ZXIiLCJqaWRkIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMxIiwiaXRlbXMiLCJuYW1lIiwiZ3JvdXBzIiwidXBkYXRlUm9zdGVySXRlbSIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJhY2NlcHRSZXF1ZXN0Iiwib24iLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSIsInRhcmdldCIsInZhbHVlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaGF0bGlzdCIsInNldENoYXRXaXRoIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJUaXBpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVdBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZCxNQUFJQyxPQUFKO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFdBQVgsQ0FBdUJKLEdBQWxDO0FBQUEsR0FBRCxDQUF2QjtBQUNBLE1BQUlLLGVBQWUsR0FBR0wsR0FBRyxJQUFJQSxHQUFHLENBQUNNLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUE3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR04sK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEtBQXRCO0FBQUEsR0FBRCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR1IsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0Es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QURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBekJGLGVBNkJFO0FBQUssK0JBQVMsRUFBQyxhQUFmO0FBQUEsOENBQ0U7QUFDRSxpQ0FBUyxFQUFDLFNBRFo7QUFFRSwrQkFBTyxFQUFFLGlCQUFDRyxDQUFEO0FBQUEsaUNBQU9zQyxLQUFLLENBQUN0QyxDQUFELENBQVo7QUFBQTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFLRTtBQUFJLGlDQUFTLEVBQUMscUJBQWQ7QUFBQSxrQ0FDRzZCLFFBQVEsQ0FBQy9DO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZCRixtQkFPT0ksQ0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBeUZELGVBdkdGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQURGO0FBOEhEO0FBQ0Y7O0dBM1FRakQsSTtVQUVVRyx1RCxFQUNMRSx1RCxFQUVHQSx1RCxFQUNFQSx1RCxFQUlHQSx1RCxFQUNEQSx1RCxFQUlKQSx1RCxFQUNLQSx1RDs7O0FBNFBQTCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzZW5nZXIuMTMxZjI4MzFkOTUwMDBkNjZlNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vMS5qcGdcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwicmVhY3QtYXZhdGFyXCI7XHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hVc2VycyxcclxuICBzZXRDaGF0V2l0aCxcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgY2hhdGVkZWRVc2VycyxcclxuICBhZGROZXdVU2VyLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbiAgdXBkYXRlTGFzdE1lc3NhZ2VUaW1lLFxyXG4gIHNldEFsbFVzZXJzLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBmb3JtKCkge1xyXG4gIGxldCBvbmxpbmVVO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBqaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY3VycmVudFVzZXIuamlkKTtcclxuICB2YXIgamlkTG9nZ2VkSW5Vc2VyID0gamlkICYmIGppZC5zcGxpdChcIkBcIilbMF07XHJcbiAgY29uc3QgdXNlcnNQID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLnVzZXJzKTtcclxuICBjb25zdCBhbGx1c2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hbGx1c2Vycyk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBsZXQgZmlsdGVyZWRVc2VycztcclxuXHJcbiAgY29uc3QgcmVjZW50VXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdGVkVXNlcnMpO1xyXG4gIGNvbnN0IGNoYXRXaXRoSUQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGguaWQpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NoYXRTdWJUYWIsIHNldENoYXRTdWJUYWJdID0gdXNlU3RhdGUoXCJjb250YWN0c1wiKTtcclxuICBjb25zdCBbb25saW5ldXNlcnMsIHNldE9ubGluZXVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBjbGllbnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2xpZW50KTtcclxuICBsZXQgYWxsdXNlclN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hbGx1c2VyU3RhdHVzKTtcclxuICBjb25zdCBmaWx0ZXJkID0gKCkgPT4ge1xyXG4gICAgZmlsdGVyZWRVc2VycyA9XHJcbiAgICAgIHVzZXJzUC5sZW5ndGggPiAwICYmXHJcbiAgICAgIHVzZXJzUFswXS5maWx0ZXIoKHVzZXIpID0+IHVzZXIuaWQgIT09IGppZExvZ2dlZEluVXNlcik7XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcmVkVXNlcnM7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJlZChmaWx0ZXJkKCkpO1xyXG4gIH0sIFt1c2Vyc1BdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlZWZmZWN0IDJuZFwiLCBhbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZFVzZXJzLCBmaWx0ZXJlZCk7XHJcbiAgICBpZiAoZmlsdGVyZWQgJiYgYWxsdXNlclN0YXR1cykge1xyXG4gICAgICBvbmxpbmVVID0gbWVyZ2VkQXJheSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2Vyc1wiLCBhbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZCwgZmlsdGVyZWRVc2Vycyk7XHJcbiAgICAgIHNldE9ubGluZXVzZXJzKG9ubGluZVUpO1xyXG4gICAgfVxyXG4gIH0sIFthbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZF0pO1xyXG5cclxuICBjb25zdCBtZXJnZWRBcmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVyZ2VBcnJheSA9XHJcbiAgICAgIGZpbHRlcmVkICYmXHJcbiAgICAgIGZpbHRlcmVkLm1hcCgodXNlckl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgY2xhc3Nlc0l0ZW0gPSBhbGx1c2VyU3RhdHVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHVzZXJJdGVtLmlkKTtcclxuICAgICAgICByZXR1cm4gY2xhc3Nlc0l0ZW1cclxuICAgICAgICAgID8geyAuLi51c2VySXRlbSwgLi4uY2xhc3Nlc0l0ZW0gfVxyXG4gICAgICAgICAgOiB7IC4uLnVzZXJJdGVtLCBvbmxpbmVTdGF0dXM6IFwib2ZmbGluZVwiIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiT25saW5lIHVzZXJzIG1lcmdlZFwiLCBtZXJnZUFycmF5KTtcclxuICAgIHJldHVybiBtZXJnZUFycmF5O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZE5ldyA9IChpdGVtKSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxldCBmb3VuZElEO1xyXG4gICAgLyogU0VBUkNIIENPTlRBQ1QgSU4gQ0hBVCBUQUIgIFJFVFVSTjpUUlVFIElGIFBSRVNFTlQsUkVUVVJOIEZBTFNFIElGIE5PVCBQUkVTRU5UICovXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IGl0ZW0gaWRcIiwgaXRlbS5pZCk7XHJcbiAgICAgIGlmIChyZWNlbnRVc2Vyc1tpXS5pZCA9PT0gaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgZm91bmRJRCA9IHJlY2VudFVzZXJzW2ldLmlkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogaWYgY29udGFjdCBpcyBwcmVzZW50IGFwcGVuZCBtZXNzYWdlcyAqL1xyXG4gICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgIGxldCBvYmpJbmRleCA9IHJlY2VudFVzZXJzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gZm91bmRJRCk7XHJcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUxhc3RNZXNzYWdlVGltZSh7IGlkOiBvYmpJbmRleCwgdGltZTogZGF0ZVRpbWUoKSB9KSk7XHJcbiAgICB9XHJcbiAgICAvKiBJZiBub3QgcHJlc2VudCBpbiBjaGF0IHNlY3Rpb24uaWYgYW55IG90aGVyIGlzIHByZXNlbnQgd2l0aG91dCBtZXNnIGF0dHJpYnV0ZSByZW1vdmUgZmlyc3QgdGhlbiBhZGQqL1xyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlIGZpcnN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGFkZE5ld1VTZXIoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgc3RhdHVzOiBpdGVtLm9ubGluZXVzZXJzLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBpdGVtLm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgIHN0YXR1czogaXRlbS5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDaGF0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0LW1haW4gbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVG9Sb3N0ZXIgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGppZGQgPSBpdGVtLmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIjtcclxuICAgIGxldCBjb250YWN0czEgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcbiAgICBsZXQgbGVuZ3RoID0gY29udGFjdHMxLml0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGVuZ3RoID4gMCAmJlxyXG4gICAgICBjb250YWN0czEuaXRlbXMubWFwKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuamlkID09PSBqaWRkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgaXMgaW4gbXkgIHJvc3RlclwiKTtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJub3QgZm91bmRcIiwgY2xpZW50KTtcclxuICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICBqaWQ6IGppZGQsXHJcbiAgICAgICAgbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGdyb3VwczogW10sXHJcbiAgICAgIH07XHJcbiAgICAgIGNsaWVudC51cGRhdGVSb3N0ZXJJdGVtKG9iaik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zdWJzY3JpYmUoamlkZCwgKCkgPT4gY29uc29sZS5sb2coXCJzdWJzY3JwdGlvbiByZXF1ZXN0IHNlbnRcIikpO1xyXG4gICAgICAgIGFjY2VwdFJlcXVlc3QoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhY2NlcHRSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJsaXN0ZW5pbmdcIik7XHJcbiAgICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+XHJcbiAgICAgIGNsaWVudC5hY2NlcHRTdWJzY3JpcHRpb24oUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpZiAoIW9ubGluZXVzZXJzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSBpZiAoIWZpbHRlcmVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgICAgICAgIDxOYXYgdGFicyBpZD1cIm15VGFiMVwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9OYXY+XHJcbiAgICAgICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17Y2hhdFN1YlRhYn0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAge29ubGluZXVzZXJzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXRsaXN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhdGxpc3RbXCJzdGF0dXNcIl0gPSBcInNlbmRpbmdcIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdFdpdGhJRCA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdC5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYXRXaXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2hhdGxpc3QuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjaGF0bGlzdC5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGF0bGlzdC5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0QWN0aXZlVGFiKFwiY2hhdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhdGVkZWRVc2VycyhcIm5ld1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3KGNoYXRsaXN0LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb1Jvc3RlcihjaGF0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtMb2dvfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NoYXRsaXN0LmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezQ1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjaGF0bGlzdC5maXJzdF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg2PntjaGF0bGlzdC5tZXNnfTwvaDY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpLXBpbjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gVGlwaW4oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtc3VjY2VzcyBzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0Lm9ubGluZVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFpbGVkXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2VlblwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdGxpc3Quc3RhdHVzID09PSBcIlNlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0bGlzdC5zdGF0dXMgPT09IFwiRmFpbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZvbnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgc3RhdHVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gXCJcIiA6IGNoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnkgc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=