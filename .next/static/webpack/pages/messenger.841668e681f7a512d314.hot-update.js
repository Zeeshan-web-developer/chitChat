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
      recentUsers.map(function (ci) {
        if (!ci.hasOwnProperty("mesg")) {
          dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["removeRecentUser"])(ci.id));
          console.log("remove first");
        }
      });
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
      lineNumber: 162,
      columnNumber: 12
    }, this);
  } else if (!filtered) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
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
            lineNumber: 170,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "theme-tab",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
            tabs: true,
            id: "myTab1",
            role: "tablist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
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
                      lineNumber: 221,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "details",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                        children: chatlist.first_name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 246,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
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
                        lineNumber: 250,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h6", {
                        className: "font-success status",
                        children: chatlist.onlineStatus
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 254,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 25
                  }, _this)
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsImNoYXRXaXRoSUQiLCJjaGF0V2l0aCIsImlkIiwic2VhcmNoVGVybSIsInNldFNlYXJjaCIsImNoYXRTdWJUYWIiLCJzZXRDaGF0U3ViVGFiIiwib25saW5ldXNlcnMiLCJzZXRPbmxpbmV1c2VycyIsImNsaWVudCIsImFsbHVzZXJTdGF0dXMiLCJmaWx0ZXJkIiwibGVuZ3RoIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJjaSIsImhhc093blByb3BlcnR5IiwicmVtb3ZlUmVjZW50VXNlciIsIm9iakluZGV4IiwiZmluZEluZGV4Iiwib2JqIiwidXBkYXRlTGFzdE1lc3NhZ2VUaW1lIiwidGltZSIsImRhdGVUaW1lIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJjaGFuZ2VDaGF0Q2xpY2siLCJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkVG9Sb3N0ZXIiLCJqaWRkIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMxIiwiaXRlbXMiLCJuYW1lIiwiZ3JvdXBzIiwidXBkYXRlUm9zdGVySXRlbSIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJhY2NlcHRSZXF1ZXN0Iiwib24iLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSIsInRhcmdldCIsInZhbHVlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaGF0bGlzdCIsInNldENoYXRXaXRoIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJUaXBpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVdBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZCxNQUFJQyxPQUFKO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFdBQVgsQ0FBdUJKLEdBQWxDO0FBQUEsR0FBRCxDQUF2QjtBQUNBLE1BQUlLLGVBQWUsR0FBR0wsR0FBRyxJQUFJQSxHQUFHLENBQUNNLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUE3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR04sK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEtBQXRCO0FBQUEsR0FBRCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR1IsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0Es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bUQsdUNBQWUsZ0JBQVNDLDZDQUFULE1BRFY7QUFFTEMsc0NBQWMsRUFBRSxPQUZYO0FBR0xDLDBDQUFrQixFQUFFLFFBSGY7QUFJTEMsK0JBQU8sRUFBRTtBQUpKO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQXlCRTtBQUFLLCtCQUFTLEVBQUMsU0FBZjtBQUFBLDZDQUNFO0FBQUEsa0NBQUtSLFFBQVEsQ0FBQ2hDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBekJGLGVBNkJFO0FBQUssK0JBQVMsRUFBQyxhQUFmO0FBQUEsOENBQ0U7QUFDRSxpQ0FBUyxFQUFDLFNBRFo7QUFFRSwrQkFBTyxFQUFFLGlCQUFDRyxDQUFEO0FBQUEsaUNBQU9zQyxLQUFLLENBQUN0QyxDQUFELENBQVo7QUFBQTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFLRTtBQUFJLGlDQUFTLEVBQUMscUJBQWQ7QUFBQSxrQ0FDRzZCLFFBQVEsQ0FBQy9DO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZCRixtQkFPT0ksQ0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBeUZELGVBdkdGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQURGO0FBOEhEO0FBQ0Y7O0dBalJRakQsSTtVQUVVRyx1RCxFQUNMRSx1RCxFQUVHQSx1RCxFQUNFQSx1RCxFQUlHQSx1RCxFQUNEQSx1RCxFQUlKQSx1RCxFQUNLQSx1RDs7O0FBa1FQTCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzZW5nZXIuODQxNjY4ZTY4MWY3YTUxMmQzMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vMS5qcGdcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwicmVhY3QtYXZhdGFyXCI7XHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hVc2VycyxcclxuICBzZXRDaGF0V2l0aCxcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgY2hhdGVkZWRVc2VycyxcclxuICBhZGROZXdVU2VyLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbiAgdXBkYXRlTGFzdE1lc3NhZ2VUaW1lLFxyXG4gIHNldEFsbFVzZXJzLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBmb3JtKCkge1xyXG4gIGxldCBvbmxpbmVVO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBqaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY3VycmVudFVzZXIuamlkKTtcclxuICB2YXIgamlkTG9nZ2VkSW5Vc2VyID0gamlkICYmIGppZC5zcGxpdChcIkBcIilbMF07XHJcbiAgY29uc3QgdXNlcnNQID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLnVzZXJzKTtcclxuICBjb25zdCBhbGx1c2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hbGx1c2Vycyk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBsZXQgZmlsdGVyZWRVc2VycztcclxuXHJcbiAgY29uc3QgcmVjZW50VXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdGVkVXNlcnMpO1xyXG4gIGNvbnN0IGNoYXRXaXRoSUQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGguaWQpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NoYXRTdWJUYWIsIHNldENoYXRTdWJUYWJdID0gdXNlU3RhdGUoXCJjb250YWN0c1wiKTtcclxuICBjb25zdCBbb25saW5ldXNlcnMsIHNldE9ubGluZXVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBjbGllbnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2xpZW50KTtcclxuICBsZXQgYWxsdXNlclN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hbGx1c2VyU3RhdHVzKTtcclxuICBjb25zdCBmaWx0ZXJkID0gKCkgPT4ge1xyXG4gICAgZmlsdGVyZWRVc2VycyA9XHJcbiAgICAgIHVzZXJzUC5sZW5ndGggPiAwICYmXHJcbiAgICAgIHVzZXJzUFswXS5maWx0ZXIoKHVzZXIpID0+IHVzZXIuaWQgIT09IGppZExvZ2dlZEluVXNlcik7XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcmVkVXNlcnM7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJlZChmaWx0ZXJkKCkpO1xyXG4gIH0sIFt1c2Vyc1BdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlZWZmZWN0IDJuZFwiLCBhbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZFVzZXJzLCBmaWx0ZXJlZCk7XHJcbiAgICBpZiAoZmlsdGVyZWQgJiYgYWxsdXNlclN0YXR1cykge1xyXG4gICAgICBvbmxpbmVVID0gbWVyZ2VkQXJheSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2Vyc1wiLCBhbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZCwgZmlsdGVyZWRVc2Vycyk7XHJcbiAgICAgIHNldE9ubGluZXVzZXJzKG9ubGluZVUpO1xyXG4gICAgfVxyXG4gIH0sIFthbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZF0pO1xyXG5cclxuICBjb25zdCBtZXJnZWRBcmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVyZ2VBcnJheSA9XHJcbiAgICAgIGZpbHRlcmVkICYmXHJcbiAgICAgIGZpbHRlcmVkLm1hcCgodXNlckl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgY2xhc3Nlc0l0ZW0gPSBhbGx1c2VyU3RhdHVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHVzZXJJdGVtLmlkKTtcclxuICAgICAgICByZXR1cm4gY2xhc3Nlc0l0ZW1cclxuICAgICAgICAgID8geyAuLi51c2VySXRlbSwgLi4uY2xhc3Nlc0l0ZW0gfVxyXG4gICAgICAgICAgOiB7IC4uLnVzZXJJdGVtLCBvbmxpbmVTdGF0dXM6IFwib2ZmbGluZVwiIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiT25saW5lIHVzZXJzIG1lcmdlZFwiLCBtZXJnZUFycmF5KTtcclxuICAgIHJldHVybiBtZXJnZUFycmF5O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZE5ldyA9IChpdGVtKSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxldCBmb3VuZElEO1xyXG4gICAgLyogU0VBUkNIIENPTlRBQ1QgSU4gQ0hBVCBUQUIgIFJFVFVSTjpUUlVFIElGIFBSRVNFTlQsUkVUVVJOIEZBTFNFIElGIE5PVCBQUkVTRU5UICovXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IGl0ZW0gaWRcIiwgaXRlbS5pZCk7XHJcbiAgICAgIGlmIChyZWNlbnRVc2Vyc1tpXS5pZCA9PT0gaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgZm91bmRJRCA9IHJlY2VudFVzZXJzW2ldLmlkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogaWYgY29udGFjdCBpcyBwcmVzZW50IGFwcGVuZCBtZXNzYWdlcyAqL1xyXG4gICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlUmVjZW50VXNlcihjaS5pZCkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmUgZmlyc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IG9iakluZGV4ID0gcmVjZW50VXNlcnMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBmb3VuZElEKTtcclxuICAgICAgZGlzcGF0Y2godXBkYXRlTGFzdE1lc3NhZ2VUaW1lKHsgaWQ6IG9iakluZGV4LCB0aW1lOiBkYXRlVGltZSgpIH0pKTtcclxuICAgIH1cclxuICAgIC8qIElmIG5vdCBwcmVzZW50IGluIGNoYXQgc2VjdGlvbi5pZiBhbnkgb3RoZXIgaXMgcHJlc2VudCB3aXRob3V0IG1lc2cgYXR0cmlidXRlIHJlbW92ZSBmaXJzdCB0aGVuIGFkZCovXHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlUmVjZW50VXNlcihjaS5pZCkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmUgZmlyc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgYWRkTmV3VVNlcih7XHJcbiAgICAgICAgICBpZDogaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIsXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiBpdGVtLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICBzdGF0dXM6IGl0ZW0ub25saW5ldXNlcnMsXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IGl0ZW0ub25saW5lU3RhdHVzLFxyXG4gICAgICAgICAgc3RhdHVzOiBpdGVtLm9ubGluZVN0YXR1cyxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNoYXRDbGljayA9IChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYXQtbWFpbiBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUb1Jvc3RlciA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICBsZXQgamlkZCA9IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiO1xyXG4gICAgbGV0IGNvbnRhY3RzMSA9IGF3YWl0IGNsaWVudC5nZXRSb3N0ZXIoKTtcclxuICAgIGxldCBsZW5ndGggPSBjb250YWN0czEuaXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZW5ndGggPiAwICYmXHJcbiAgICAgIGNvbnRhY3RzMS5pdGVtcy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgICBpZiAodXNlci5qaWQgPT09IGppZGQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBpcyBpbiBteSAgcm9zdGVyXCIpO1xyXG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBmb3VuZFwiLCBjbGllbnQpO1xyXG4gICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgIGppZDogamlkZCxcclxuICAgICAgICBuYW1lOiBpdGVtLmZpcnN0X25hbWUsXHJcbiAgICAgICAgZ3JvdXBzOiBbXSxcclxuICAgICAgfTtcclxuICAgICAgY2xpZW50LnVwZGF0ZVJvc3Rlckl0ZW0ob2JqKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnN1YnNjcmliZShqaWRkLCAoKSA9PiBjb25zb2xlLmxvZyhcInN1YnNjcnB0aW9uIHJlcXVlc3Qgc2VudFwiKSk7XHJcbiAgICAgICAgYWNjZXB0UmVxdWVzdCgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGFjY2VwdFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxpc3RlbmluZ1wiKTtcclxuICAgIGNsaWVudC5vbihcInN1YnNjcmliZVwiLCAoUmVjZWl2ZWRQcmVzZW5jZSkgPT5cclxuICAgICAgY2xpZW50LmFjY2VwdFN1YnNjcmlwdGlvbihSZWNlaXZlZFByZXNlbmNlLmZyb20pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGlmICghb25saW5ldXNlcnMpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfSBlbHNlIGlmICghZmlsdGVyZWQpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgICAgICAgPFRhYkNvbnRlbnQgYWN0aXZlVGFiPXtjaGF0U3ViVGFifT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdC1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICB7b25saW5ldXNlcnNcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZpcnN0X25hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhdGxpc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdFtcInN0YXR1c1wiXSA9IFwic2VuZGluZ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0V2l0aElEID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRsaXN0LmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhdFdpdGgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaGF0bGlzdC5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGNoYXRsaXN0Lm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXRsaXN0LmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRBY3RpdmVUYWIoXCJjaGF0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGF0ZWRlZFVzZXJzKFwibmV3XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGROZXcoY2hhdGxpc3QsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvUm9zdGVyKGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0xvZ299KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhdGxpc3QuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXRsaXN0LmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDY+e2NoYXRsaXN0Lm1lc2d9PC9oNj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGktcGluMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBUaXBpbihlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC1zdWNjZXNzIHN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Qub25saW5lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIlNlbmRpbmdcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGYWlsZWRcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZWVuXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdC5zdGF0dXMgPT09IFwiU2VuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXRsaXN0LnN0YXR1cyA9PT0gXCJGYWlsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm9udC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBzdGF0dXNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyBcIlwiIDogY2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeSBzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==