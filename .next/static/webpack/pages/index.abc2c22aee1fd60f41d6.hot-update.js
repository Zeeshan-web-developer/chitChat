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
      }); //dispatch(updateLastMessageTime({ id: objIndex, time: dateTime() }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsImNoYXRXaXRoSUQiLCJjaGF0V2l0aCIsImlkIiwic2VhcmNoVGVybSIsInNldFNlYXJjaCIsImNoYXRTdWJUYWIiLCJzZXRDaGF0U3ViVGFiIiwib25saW5ldXNlcnMiLCJzZXRPbmxpbmV1c2VycyIsImNsaWVudCIsImFsbHVzZXJTdGF0dXMiLCJmaWx0ZXJkIiwibGVuZ3RoIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJjaGFuZ2VDaGF0Q2xpY2siLCJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkVG9Sb3N0ZXIiLCJqaWRkIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMxIiwiaXRlbXMiLCJuYW1lIiwiZ3JvdXBzIiwidXBkYXRlUm9zdGVySXRlbSIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJhY2NlcHRSZXF1ZXN0Iiwib24iLCJSZWNlaXZlZFByZXNlbmNlIiwiYWNjZXB0U3Vic2NyaXB0aW9uIiwiZnJvbSIsInRhcmdldCIsInZhbHVlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaGF0bGlzdCIsInNldENoYXRXaXRoIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJUaXBpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVdBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZCxNQUFJQyxPQUFKO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFdBQVgsQ0FBdUJKLEdBQWxDO0FBQUEsR0FBRCxDQUF2QjtBQUNBLE1BQUlLLGVBQWUsR0FBR0wsR0FBRyxJQUFJQSxHQUFHLENBQUNNLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUE3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR04sK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEtBQXRCO0FBQUEsR0FBRCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR1IsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdNLFFBQXRCO0FBQUEsR0FBRCxDQUE1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Q3RDLENBQUQsQ0FBWjtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQUtFO0FBQUksaUNBQVMsRUFBQyxxQkFBZDtBQUFBLGtDQUNHNkIsUUFBUSxDQUFDNUM7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdkJGLG1CQU9PSSxDQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUF5RkQsZUF2R0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREY7QUE4SEQ7QUFDRjs7R0EzUVFqRCxJO1VBRVVHLHVELEVBQ0xFLHVELEVBRUdBLHVELEVBQ0VBLHVELEVBSUdBLHVELEVBQ0RBLHVELEVBSUpBLHVELEVBQ0tBLHVEOzs7QUE0UFBMLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFiYzJjMjJhZWUxZmQ2MGY0MWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuL2RhdGV0aW1lXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLzEuanBnXCI7XHJcbmltcG9ydCB7IE5hdiwgVGFiQ29udGVudCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcInJlYWN0LWF2YXRhclwiO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoVXNlcnMsXHJcbiAgc2V0Q2hhdFdpdGgsXHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGNoYXRlZGVkVXNlcnMsXHJcbiAgYWRkTmV3VVNlcixcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIHVwZGF0ZUxhc3RNZXNzYWdlVGltZSxcclxuICBzZXRBbGxVc2VycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gZm9ybSgpIHtcclxuICBsZXQgb25saW5lVTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgamlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLmppZCk7XHJcbiAgdmFyIGppZExvZ2dlZEluVXNlciA9IGppZCAmJiBqaWQuc3BsaXQoXCJAXCIpWzBdO1xyXG4gIGNvbnN0IHVzZXJzUCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2Vycyk7XHJcbiAgY29uc3QgYWxsdXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlcnMpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgbGV0IGZpbHRlcmVkVXNlcnM7XHJcblxyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRlZFVzZXJzKTtcclxuICBjb25zdCBjaGF0V2l0aElEID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRXaXRoLmlkKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjaGF0U3ViVGFiLCBzZXRDaGF0U3ViVGFiXSA9IHVzZVN0YXRlKFwiY29udGFjdHNcIik7XHJcbiAgY29uc3QgW29ubGluZXVzZXJzLCBzZXRPbmxpbmV1c2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgY2xpZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNsaWVudCk7XHJcbiAgbGV0IGFsbHVzZXJTdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlclN0YXR1cyk7XHJcbiAgY29uc3QgZmlsdGVyZCA9ICgpID0+IHtcclxuICAgIGZpbHRlcmVkVXNlcnMgPVxyXG4gICAgICB1c2Vyc1AubGVuZ3RoID4gMCAmJlxyXG4gICAgICB1c2Vyc1BbMF0uZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBqaWRMb2dnZWRJblVzZXIpO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZFVzZXJzO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoVXNlcnMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyZWQoZmlsdGVyZCgpKTtcclxuICB9LCBbdXNlcnNQXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZWVmZmVjdCAybmRcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWRVc2VycywgZmlsdGVyZWQpO1xyXG4gICAgaWYgKGZpbHRlcmVkICYmIGFsbHVzZXJTdGF0dXMpIHtcclxuICAgICAgb25saW5lVSA9IG1lcmdlZEFyYXkoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJPbmxpbmUgdXNlcnNcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWQsIGZpbHRlcmVkVXNlcnMpO1xyXG4gICAgICBzZXRPbmxpbmV1c2VycyhvbmxpbmVVKTtcclxuICAgIH1cclxuICB9LCBbYWxsdXNlclN0YXR1cywgZmlsdGVyZWRdKTtcclxuXHJcbiAgY29uc3QgbWVyZ2VkQXJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lcmdlQXJyYXkgPVxyXG4gICAgICBmaWx0ZXJlZCAmJlxyXG4gICAgICBmaWx0ZXJlZC5tYXAoKHVzZXJJdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsYXNzZXNJdGVtID0gYWxsdXNlclN0YXR1cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSB1c2VySXRlbS5pZCk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXNJdGVtXHJcbiAgICAgICAgICA/IHsgLi4udXNlckl0ZW0sIC4uLmNsYXNzZXNJdGVtIH1cclxuICAgICAgICAgIDogeyAuLi51c2VySXRlbSwgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIiB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2VycyBtZXJnZWRcIiwgbWVyZ2VBcnJheSk7XHJcbiAgICByZXR1cm4gbWVyZ2VBcnJheTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGROZXcgPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZXQgZm91bmRJRDtcclxuICAgIC8qIFNFQVJDSCBDT05UQUNUIElOIENIQVQgVEFCICBSRVRVUk46VFJVRSBJRiBQUkVTRU5ULFJFVFVSTiBGQUxTRSBJRiBOT1QgUFJFU0VOVCAqL1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNlbnRVc2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5ldyBpdGVtIGlkXCIsIGl0ZW0uaWQpO1xyXG4gICAgICBpZiAocmVjZW50VXNlcnNbaV0uaWQgPT09IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGZvdW5kSUQgPSByZWNlbnRVc2Vyc1tpXS5pZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGlmIGNvbnRhY3QgaXMgcHJlc2VudCBhcHBlbmQgbWVzc2FnZXMgKi9cclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICBsZXQgb2JqSW5kZXggPSByZWNlbnRVc2Vycy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGZvdW5kSUQpO1xyXG4gICAgICAvL2Rpc3BhdGNoKHVwZGF0ZUxhc3RNZXNzYWdlVGltZSh7IGlkOiBvYmpJbmRleCwgdGltZTogZGF0ZVRpbWUoKSB9KSk7XHJcbiAgICB9XHJcbiAgICAvKiBJZiBub3QgcHJlc2VudCBpbiBjaGF0IHNlY3Rpb24uaWYgYW55IG90aGVyIGlzIHByZXNlbnQgd2l0aG91dCBtZXNnIGF0dHJpYnV0ZSByZW1vdmUgZmlyc3QgdGhlbiBhZGQqL1xyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlIGZpcnN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGFkZE5ld1VTZXIoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgc3RhdHVzOiBpdGVtLm9ubGluZXVzZXJzLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBpdGVtLm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgIHN0YXR1czogaXRlbS5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDaGF0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0LW1haW4gbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVG9Sb3N0ZXIgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGppZGQgPSBpdGVtLmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIjtcclxuICAgIGxldCBjb250YWN0czEgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcbiAgICBsZXQgbGVuZ3RoID0gY29udGFjdHMxLml0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGVuZ3RoID4gMCAmJlxyXG4gICAgICBjb250YWN0czEuaXRlbXMubWFwKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuamlkID09PSBqaWRkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgaXMgaW4gbXkgIHJvc3RlclwiKTtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJub3QgZm91bmRcIiwgY2xpZW50KTtcclxuICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICBqaWQ6IGppZGQsXHJcbiAgICAgICAgbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGdyb3VwczogW10sXHJcbiAgICAgIH07XHJcbiAgICAgIGNsaWVudC51cGRhdGVSb3N0ZXJJdGVtKG9iaik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zdWJzY3JpYmUoamlkZCwgKCkgPT4gY29uc29sZS5sb2coXCJzdWJzY3JwdGlvbiByZXF1ZXN0IHNlbnRcIikpO1xyXG4gICAgICAgIGFjY2VwdFJlcXVlc3QoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhY2NlcHRSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJsaXN0ZW5pbmdcIik7XHJcbiAgICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+XHJcbiAgICAgIGNsaWVudC5hY2NlcHRTdWJzY3JpcHRpb24oUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpZiAoIW9ubGluZXVzZXJzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSBpZiAoIWZpbHRlcmVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgICAgICAgIDxOYXYgdGFicyBpZD1cIm15VGFiMVwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9OYXY+XHJcbiAgICAgICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17Y2hhdFN1YlRhYn0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAge29ubGluZXVzZXJzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXRsaXN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhdGxpc3RbXCJzdGF0dXNcIl0gPSBcInNlbmRpbmdcIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdFdpdGhJRCA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdC5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYXRXaXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2hhdGxpc3QuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjaGF0bGlzdC5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGF0bGlzdC5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0QWN0aXZlVGFiKFwiY2hhdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhdGVkZWRVc2VycyhcIm5ld1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3KGNoYXRsaXN0LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb1Jvc3RlcihjaGF0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtMb2dvfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NoYXRsaXN0LmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezQ1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjaGF0bGlzdC5maXJzdF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg2PntjaGF0bGlzdC5tZXNnfTwvaDY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpLXBpbjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gVGlwaW4oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtc3VjY2VzcyBzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0Lm9ubGluZVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFpbGVkXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2VlblwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdGxpc3Quc3RhdHVzID09PSBcIlNlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0bGlzdC5zdGF0dXMgPT09IFwiRmFpbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZvbnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgc3RhdHVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gXCJcIiA6IGNoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnkgc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=