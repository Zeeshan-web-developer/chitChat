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
      //let objIndex = recentUsers.findIndex((obj) => obj.id == foundID);
      //dispatch(updateLastMessageTime({ id: objIndex, time: dateTime() }));
      recentUsers.map(function (ci) {
        if (!ci.hasOwnProperty("mesg")) {
          dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["removeRecentUser"])(ci.id));
          console.log("remove first");
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsImNoYXRXaXRoSUQiLCJjaGF0V2l0aCIsImlkIiwic2VhcmNoVGVybSIsInNldFNlYXJjaCIsImNoYXRTdWJUYWIiLCJzZXRDaGF0U3ViVGFiIiwib25saW5ldXNlcnMiLCJzZXRPbmxpbmV1c2VycyIsImNsaWVudCIsImFsbHVzZXJTdGF0dXMiLCJmaWx0ZXJkIiwibGVuZ3RoIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJjaSIsImhhc093blByb3BlcnR5IiwicmVtb3ZlUmVjZW50VXNlciIsImFkZE5ld1VTZXIiLCJmaXJzdF9uYW1lIiwic3RhdHVzIiwiY2hhbmdlQ2hhdENsaWNrIiwiZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjdXJyZW50VGFyZ2V0IiwiYWRkIiwicXVlcnlTZWxlY3RvciIsImFkZFRvUm9zdGVyIiwiamlkZCIsImdldFJvc3RlciIsImNvbnRhY3RzMSIsIml0ZW1zIiwib2JqIiwibmFtZSIsImdyb3VwcyIsInVwZGF0ZVJvc3Rlckl0ZW0iLCJzZXRUaW1lb3V0Iiwic3Vic2NyaWJlIiwiYWNjZXB0UmVxdWVzdCIsIm9uIiwiUmVjZWl2ZWRQcmVzZW5jZSIsImFjY2VwdFN1YnNjcmlwdGlvbiIsImZyb20iLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY2hhdGxpc3QiLCJzZXRDaGF0V2l0aCIsInNldEFjdGl2ZVRhYiIsImNoYXRlZGVkVXNlcnMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJMb2dvIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkaXNwbGF5IiwiVGlwaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFXQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQ2QsTUFBSUMsT0FBSjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxXQUFYLENBQXVCSixHQUFsQztBQUFBLEdBQUQsQ0FBdkI7QUFDQSxNQUFJSyxlQUFlLEdBQUdMLEdBQUcsSUFBSUEsR0FBRyxDQUFDTSxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsQ0FBN0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdOLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxLQUF0QjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdSLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXTSxRQUF0QjtBQUFBLEdBQUQsQ0FBNUI7O0FBQ0Esa0JBQWdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQUlDLGFBQUo7QUFFQSxNQUFNQyxXQUFXLEdBQUdiLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXWSxXQUF0QjtBQUFBLEdBQUQsQ0FBL0I7QUFDQSxNQUFNQyxVQUFVLEdBQUdmLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXYyxRQUFYLENBQW9CQyxFQUEvQjtBQUFBLEdBQUQsQ0FBOUI7O0FBQ0EsbUJBQWdDUixzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPUyxVQUFQO0FBQUEsTUFBbUJDLFNBQW5COztBQUNBLG1CQUFvQ1Ysc0RBQVEsQ0FBQyxVQUFELENBQTVDO0FBQUEsTUFBT1csVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBc0NaLHNEQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBLE1BQU9hLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHeEIsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdzQixNQUF0QjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFJQyxhQUFhLEdBQUd6QiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV3VCLGFBQXRCO0FBQUEsR0FBRCxDQUEvQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCZCxpQkFBYSxHQUNYTixNQUFNLENBQUNxQixNQUFQLEdBQWdCLENBQWhCLElBQ0FyQixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVzQixNQUFWLENBQWlCLFVBQUMxQixJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDZSxFQUFMLEtBQVliLGVBQXRCO0FBQUEsS0FBakIsQ0FGRjtBQUlBLFdBQU9RLGFBQVA7QUFDRCxHQU5EOztBQU9BaUIseURBQVMsQ0FBQyxZQUFNO0FBQ2RoQyxZQUFRLENBQUNpQyx1RUFBVSxFQUFYLENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFELHlEQUFTLENBQUMsWUFBTTtBQUNkbEIsZUFBVyxDQUFDZSxPQUFPLEVBQVIsQ0FBWDtBQUNELEdBRlEsRUFFTixDQUFDcEIsTUFBRCxDQUZNLENBQVQ7QUFJQXVCLHlEQUFTLENBQUMsWUFBTTtBQUNkRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCUCxhQUE3QixFQUE0Q2IsYUFBNUMsRUFBMkRGLFFBQTNEOztBQUNBLFFBQUlBLFFBQVEsSUFBSWUsYUFBaEIsRUFBK0I7QUFDN0I3QixhQUFPLEdBQUdxQyxVQUFVLEVBQXBCO0FBQ0FGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJQLGFBQTVCLEVBQTJDZixRQUEzQyxFQUFxREUsYUFBckQ7QUFDQVcsb0JBQWMsQ0FBQzNCLE9BQUQsQ0FBZDtBQUNEO0FBQ0YsR0FQUSxFQU9OLENBQUM2QixhQUFELEVBQWdCZixRQUFoQixDQVBNLENBQVQ7O0FBU0EsTUFBTXVCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBTUMsVUFBVSxHQUNkeEIsUUFBUSxJQUNSQSxRQUFRLENBQUN5QixHQUFULENBQWEsVUFBQ0MsUUFBRCxFQUFjO0FBQ3pCLFVBQUlDLFdBQVcsR0FBR1osYUFBYSxDQUFDYSxJQUFkLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUN0QixFQUFMLEtBQVltQixRQUFRLENBQUNuQixFQUEvQjtBQUFBLE9BQW5CLENBQWxCO0FBQ0EsYUFBT29CLFdBQVcsbUNBQ1RELFFBRFMsR0FDSUMsV0FESixvQ0FFVEQsUUFGUztBQUVDSSxvQkFBWSxFQUFFO0FBRmYsUUFBbEI7QUFHRCxLQUxELENBRkY7QUFTQVQsV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNFLFVBQW5DO0FBQ0EsV0FBT0EsVUFBUDtBQUNELEdBWkQ7O0FBY0EsTUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0YsSUFBRCxFQUFVO0FBQ3ZCLFFBQUlHLEtBQUssR0FBRyxLQUFaO0FBQ0EsUUFBSUMsT0FBSjtBQUNBOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRy9CLFdBQVcsQ0FBQ2MsTUFBaEMsRUFBd0NpQixDQUFDLEVBQXpDLEVBQTZDO0FBQzNDYixhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCTyxJQUFJLENBQUN0QixFQUFoQzs7QUFDQSxVQUFJSixXQUFXLENBQUMrQixDQUFELENBQVgsQ0FBZTNCLEVBQWYsS0FBc0JzQixJQUFJLENBQUN0QixFQUFMLEdBQVUsMEJBQXBDLEVBQWdFO0FBQzlEeUIsYUFBSyxHQUFHLElBQVI7QUFDQUMsZUFBTyxHQUFHOUIsV0FBVyxDQUFDK0IsQ0FBRCxDQUFYLENBQWUzQixFQUF6QjtBQUNBO0FBQ0Q7QUFDRjtBQUVEOzs7QUFDQSxRQUFJeUIsS0FBSixFQUFXO0FBQ1Q7QUFDQTtBQUNBN0IsaUJBQVcsQ0FBQ3NCLEdBQVosQ0FBZ0IsVUFBQ1UsRUFBRCxFQUFRO0FBQ3RCLFlBQUksQ0FBQ0EsRUFBRSxDQUFDQyxjQUFILENBQWtCLE1BQWxCLENBQUwsRUFBZ0M7QUFDOUJqRCxrQkFBUSxDQUFDa0QsNkVBQWdCLENBQUNGLEVBQUUsQ0FBQzVCLEVBQUosQ0FBakIsQ0FBUjtBQUNBYyxpQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNEO0FBQ0YsT0FMRDtBQU1EO0FBQ0Q7OztBQUNBLFFBQUksQ0FBQ1UsS0FBTCxFQUFZO0FBQ1Y3QixpQkFBVyxDQUFDc0IsR0FBWixDQUFnQixVQUFDVSxFQUFELEVBQVE7QUFDdEIsWUFBSSxDQUFDQSxFQUFFLENBQUNDLGNBQUgsQ0FBa0IsTUFBbEIsQ0FBTCxFQUFnQztBQUM5QmpELGtCQUFRLENBQUNrRCw2RUFBZ0IsQ0FBQ0YsRUFBRSxDQUFDNUIsRUFBSixDQUFqQixDQUFSO0FBQ0FjLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0Q7QUFDRixPQUxEO0FBTUFuQyxjQUFRLENBQ05tRCx1RUFBVSxDQUFDO0FBQ1QvQixVQUFFLEVBQUVzQixJQUFJLENBQUN0QixFQUFMLEdBQVUsMEJBRE47QUFFUmdDLGtCQUFVLEVBQUVWLElBQUksQ0FBQ1UsVUFGVDtBQUdSQyxjQUFNLEVBQUVYLElBQUksQ0FBQ2pCLFdBSEw7QUFJUmtCLG9CQUFZLEVBQUVELElBQUksQ0FBQ0M7QUFKWCxtQkFLQUQsSUFBSSxDQUFDQyxZQUxMLEVBREosQ0FBUjtBQVNEO0FBQ0YsR0ExQ0Q7O0FBNENBLE1BQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzdCQyxZQUFRLENBQUNDLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDQyxPQUEzQyxDQUFtRCxVQUFDaEIsSUFBRCxFQUFVO0FBQzNEQSxVQUFJLENBQUNpQixTQUFMLENBQWVDLE1BQWYsQ0FBc0IsUUFBdEI7QUFDRCxLQUZEO0FBR0FMLEtBQUMsQ0FBQ00sYUFBRixDQUFnQkYsU0FBaEIsQ0FBMEJHLEdBQTFCLENBQThCLFFBQTlCO0FBQ0FOLFlBQVEsQ0FBQ08sYUFBVCxDQUF1QixpQkFBdkIsRUFBMENKLFNBQTFDLENBQW9ERyxHQUFwRCxDQUF3RCxhQUF4RDtBQUNELEdBTkQ7O0FBUUEsTUFBTUUsV0FBVztBQUFBLGdNQUFHLGlCQUFPdEIsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZHVCLGtCQURjLEdBQ1B2QixJQUFJLENBQUN0QixFQUFMLEdBQVUsMEJBREg7QUFBQTtBQUFBLHFCQUVJTyxNQUFNLENBQUN1QyxTQUFQLEVBRko7O0FBQUE7QUFFZEMsdUJBRmM7QUFHZHJDLG9CQUhjLEdBR0xxQyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0J0QyxNQUhYO0FBSWRlLG1CQUpjLEdBSU4sS0FKTTtBQUtsQmYsb0JBQU0sR0FBRyxDQUFULElBQ0VxQyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0I5QixHQUFoQixDQUFvQixVQUFDakMsSUFBRCxFQUFVO0FBQzVCLG9CQUFJQSxJQUFJLENBQUNILEdBQUwsS0FBYStELElBQWpCLEVBQXVCO0FBQ3JCL0IseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0FVLHVCQUFLLEdBQUcsSUFBUjtBQUNEO0FBQ0YsZUFMRCxDQURGOztBQVFBLGtCQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWWCx1QkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlIsTUFBekI7QUFDSTBDLG1CQUZNLEdBRUE7QUFDUm5FLHFCQUFHLEVBQUUrRCxJQURHO0FBRVJLLHNCQUFJLEVBQUU1QixJQUFJLENBQUNVLFVBRkg7QUFHUm1CLHdCQUFNLEVBQUU7QUFIQSxpQkFGQTtBQU9WNUMsc0JBQU0sQ0FBQzZDLGdCQUFQLENBQXdCSCxHQUF4QjtBQUNBSSwwQkFBVSxDQUFDLFlBQU07QUFDZjlDLHdCQUFNLENBQUMrQyxTQUFQLENBQWlCVCxJQUFqQixFQUF1QjtBQUFBLDJCQUFNL0IsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosQ0FBTjtBQUFBLG1CQUF2QjtBQUNBd0MsK0JBQWE7QUFDZCxpQkFIUyxFQUdQLElBSE8sQ0FBVjtBQUlEOztBQXpCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWFgsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUEyQkEsTUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCekMsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBUixVQUFNLENBQUNpRCxFQUFQLENBQVUsV0FBVixFQUF1QixVQUFDQyxnQkFBRDtBQUFBLGFBQ3JCbEQsTUFBTSxDQUFDbUQsa0JBQVAsQ0FBMEJELGdCQUFnQixDQUFDRSxJQUEzQyxDQURxQjtBQUFBLEtBQXZCO0FBR0QsR0FMRDs7QUFPQSxNQUFJLENBQUN0RCxXQUFMLEVBQWtCO0FBQ2hCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxDQUFDWixRQUFMLEVBQWU7QUFDcEIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNELEdBRk0sTUFFQTtBQUFBOztBQUNMLHdCQUNFO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRSxzRUFBQyxvREFBRDtBQUFBLGlDQUNFLHNFQUFDLGdEQUFEO0FBQ0UsZ0JBQUksRUFBQyxPQURQO0FBRUUsZ0JBQUksRUFBQztBQUZQLHlIQUdPLFFBSFAsc0hBSWMsUUFKZCxtSEFLWSxrQkFBQzBDLENBQUQ7QUFBQSxtQkFBT2pDLFNBQVMsQ0FBQ2lDLENBQUMsQ0FBQ3lCLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBLFdBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFVRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFLHNFQUFDLDhDQUFEO0FBQUssZ0JBQUksTUFBVDtBQUFVLGNBQUUsRUFBQyxRQUFiO0FBQXNCLGdCQUFJLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHNFQUFDLHFEQUFEO0FBQVkscUJBQVMsRUFBRTFELFVBQXZCO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFDLFdBQWQ7QUFBQSx3QkFDR0UsV0FBVyxDQUNUTSxNQURGLENBQ1MsVUFBQ21ELElBQUQsRUFBVTtBQUNoQixvQkFBSTdELFVBQVUsSUFBSSxJQUFsQixFQUF3QjtBQUN0Qix5QkFBTzZELElBQVA7QUFDRCxpQkFGRCxNQUVPLElBQ0xBLElBQUksQ0FBQzlCLFVBQUwsQ0FDRytCLFdBREgsR0FFR0MsUUFGSCxDQUVZL0QsVUFBVSxDQUFDOEQsV0FBWCxFQUZaLENBREssRUFJTDtBQUNBLHlCQUFPRCxJQUFQO0FBQ0Q7QUFDRixlQVhGLEVBWUU1QyxHQVpGLENBWU0sVUFBQytDLFFBQUQsRUFBV3RDLENBQVgsRUFBaUI7QUFDcEJzQyx3QkFBUSxDQUFDLFFBQUQsQ0FBUixHQUFxQixTQUFyQjtBQUNBLG9DQUNFO0FBQ0UsMkJBQVMsWUFDUG5FLFVBQVUsS0FDVm1FLFFBQVEsQ0FBQ2pFLEVBQVQsR0FBYywwQkFEZCxHQUVJLFFBRkosR0FHSSxFQUpHLENBRFg7QUFRRSx5QkFBTyxFQUFFLGlCQUFDbUMsQ0FBRCxFQUFPO0FBQ2RELG1DQUFlLENBQUNDLENBQUQsRUFBSThCLFFBQUosQ0FBZjtBQUNBckYsNEJBQVEsQ0FDTnNGLHdFQUFXLENBQUM7QUFDVmhCLDBCQUFJLEVBQUVlLFFBQVEsQ0FBQ2pDLFVBREw7QUFFVkMsNEJBQU0sRUFBRWdDLFFBQVEsQ0FBQzFDLFlBRlA7QUFHVnZCLHdCQUFFLEVBQUVpRSxRQUFRLENBQUNqRSxFQUFULEdBQWM7QUFIUixxQkFBRCxDQURMLENBQVI7QUFPQXBCLDRCQUFRLENBQUN1Rix5RUFBWSxDQUFDLE1BQUQsQ0FBYixDQUFSO0FBQ0F2Riw0QkFBUSxDQUFDd0YsMEVBQWEsQ0FBQyxLQUFELENBQWQsQ0FBUjtBQUNBNUMsMEJBQU0sQ0FBQ3lDLFFBQUQsRUFBVzlCLENBQVgsQ0FBTjtBQUNBUywrQkFBVyxDQUFDcUIsUUFBRCxDQUFYO0FBQ0QsbUJBckJIO0FBQUEseUNBdUJFO0FBQUssNkJBQVMsRUFBQyxVQUFmO0FBQUEsNENBQ0U7QUFDRSwrQkFBUyxvQkFBYUEsUUFBUSxDQUFDMUMsWUFBdEIsQ0FEWDtBQUVFLDJCQUFLLEVBQUU7QUFDTDhDLHVDQUFlLGdCQUFTQyw2Q0FBVCxNQURWO0FBRUxDLHNDQUFjLEVBQUUsT0FGWDtBQUdMQywwQ0FBa0IsRUFBRSxRQUhmO0FBSUxDLCtCQUFPLEVBQUU7QUFKSjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUF5QkU7QUFBSywrQkFBUyxFQUFDLFNBQWY7QUFBQSw2Q0FDRTtBQUFBLGtDQUFLUixRQUFRLENBQUNqQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXpCRixlQTZCRTtBQUFLLCtCQUFTLEVBQUMsYUFBZjtBQUFBLDhDQUNFO0FBQ0UsaUNBQVMsRUFBQyxTQURaO0FBRUUsK0JBQU8sRUFBRSxpQkFBQ0csQ0FBRDtBQUFBLGlDQUFPdUMsS0FBSyxDQUFDdkMsQ0FBRCxDQUFaO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBS0U7QUFBSSxpQ0FBUyxFQUFDLHFCQUFkO0FBQUEsa0NBQ0c4QixRQUFRLENBQUMxQztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QkYsbUJBT09JLENBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQXlGRCxlQXZHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFERjtBQThIRDtBQUNGOztHQWpSUWpELEk7VUFFVUcsdUQsRUFDTEUsdUQsRUFFR0EsdUQsRUFDRUEsdUQsRUFJR0EsdUQsRUFDREEsdUQsRUFJSkEsdUQsRUFDS0EsdUQ7OztBQWtRUEwsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjg5NmI0NWJlZDFlMWMwYWM2YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vMS5qcGdcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwicmVhY3QtYXZhdGFyXCI7XHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hVc2VycyxcclxuICBzZXRDaGF0V2l0aCxcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgY2hhdGVkZWRVc2VycyxcclxuICBhZGROZXdVU2VyLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbiAgdXBkYXRlTGFzdE1lc3NhZ2VUaW1lLFxyXG4gIHNldEFsbFVzZXJzLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBmb3JtKCkge1xyXG4gIGxldCBvbmxpbmVVO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBqaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY3VycmVudFVzZXIuamlkKTtcclxuICB2YXIgamlkTG9nZ2VkSW5Vc2VyID0gamlkICYmIGppZC5zcGxpdChcIkBcIilbMF07XHJcbiAgY29uc3QgdXNlcnNQID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLnVzZXJzKTtcclxuICBjb25zdCBhbGx1c2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hbGx1c2Vycyk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBsZXQgZmlsdGVyZWRVc2VycztcclxuXHJcbiAgY29uc3QgcmVjZW50VXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdGVkVXNlcnMpO1xyXG4gIGNvbnN0IGNoYXRXaXRoSUQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGguaWQpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NoYXRTdWJUYWIsIHNldENoYXRTdWJUYWJdID0gdXNlU3RhdGUoXCJjb250YWN0c1wiKTtcclxuICBjb25zdCBbb25saW5ldXNlcnMsIHNldE9ubGluZXVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBjbGllbnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2xpZW50KTtcclxuICBsZXQgYWxsdXNlclN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hbGx1c2VyU3RhdHVzKTtcclxuICBjb25zdCBmaWx0ZXJkID0gKCkgPT4ge1xyXG4gICAgZmlsdGVyZWRVc2VycyA9XHJcbiAgICAgIHVzZXJzUC5sZW5ndGggPiAwICYmXHJcbiAgICAgIHVzZXJzUFswXS5maWx0ZXIoKHVzZXIpID0+IHVzZXIuaWQgIT09IGppZExvZ2dlZEluVXNlcik7XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcmVkVXNlcnM7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJlZChmaWx0ZXJkKCkpO1xyXG4gIH0sIFt1c2Vyc1BdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlZWZmZWN0IDJuZFwiLCBhbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZFVzZXJzLCBmaWx0ZXJlZCk7XHJcbiAgICBpZiAoZmlsdGVyZWQgJiYgYWxsdXNlclN0YXR1cykge1xyXG4gICAgICBvbmxpbmVVID0gbWVyZ2VkQXJheSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2Vyc1wiLCBhbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZCwgZmlsdGVyZWRVc2Vycyk7XHJcbiAgICAgIHNldE9ubGluZXVzZXJzKG9ubGluZVUpO1xyXG4gICAgfVxyXG4gIH0sIFthbGx1c2VyU3RhdHVzLCBmaWx0ZXJlZF0pO1xyXG5cclxuICBjb25zdCBtZXJnZWRBcmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVyZ2VBcnJheSA9XHJcbiAgICAgIGZpbHRlcmVkICYmXHJcbiAgICAgIGZpbHRlcmVkLm1hcCgodXNlckl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgY2xhc3Nlc0l0ZW0gPSBhbGx1c2VyU3RhdHVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHVzZXJJdGVtLmlkKTtcclxuICAgICAgICByZXR1cm4gY2xhc3Nlc0l0ZW1cclxuICAgICAgICAgID8geyAuLi51c2VySXRlbSwgLi4uY2xhc3Nlc0l0ZW0gfVxyXG4gICAgICAgICAgOiB7IC4uLnVzZXJJdGVtLCBvbmxpbmVTdGF0dXM6IFwib2ZmbGluZVwiIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiT25saW5lIHVzZXJzIG1lcmdlZFwiLCBtZXJnZUFycmF5KTtcclxuICAgIHJldHVybiBtZXJnZUFycmF5O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZE5ldyA9IChpdGVtKSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxldCBmb3VuZElEO1xyXG4gICAgLyogU0VBUkNIIENPTlRBQ1QgSU4gQ0hBVCBUQUIgIFJFVFVSTjpUUlVFIElGIFBSRVNFTlQsUkVUVVJOIEZBTFNFIElGIE5PVCBQUkVTRU5UICovXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IGl0ZW0gaWRcIiwgaXRlbS5pZCk7XHJcbiAgICAgIGlmIChyZWNlbnRVc2Vyc1tpXS5pZCA9PT0gaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgZm91bmRJRCA9IHJlY2VudFVzZXJzW2ldLmlkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogaWYgY29udGFjdCBpcyBwcmVzZW50IGFwcGVuZCBtZXNzYWdlcyAqL1xyXG4gICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgIC8vbGV0IG9iakluZGV4ID0gcmVjZW50VXNlcnMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBmb3VuZElEKTtcclxuICAgICAgLy9kaXNwYXRjaCh1cGRhdGVMYXN0TWVzc2FnZVRpbWUoeyBpZDogb2JqSW5kZXgsIHRpbWU6IGRhdGVUaW1lKCkgfSkpO1xyXG4gICAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlIGZpcnN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKiBJZiBub3QgcHJlc2VudCBpbiBjaGF0IHNlY3Rpb24uaWYgYW55IG90aGVyIGlzIHByZXNlbnQgd2l0aG91dCBtZXNnIGF0dHJpYnV0ZSByZW1vdmUgZmlyc3QgdGhlbiBhZGQqL1xyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlIGZpcnN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGFkZE5ld1VTZXIoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgc3RhdHVzOiBpdGVtLm9ubGluZXVzZXJzLFxyXG4gICAgICAgICAgb25saW5lU3RhdHVzOiBpdGVtLm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgIHN0YXR1czogaXRlbS5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDaGF0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0LW1haW4gbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVG9Sb3N0ZXIgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGppZGQgPSBpdGVtLmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIjtcclxuICAgIGxldCBjb250YWN0czEgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcbiAgICBsZXQgbGVuZ3RoID0gY29udGFjdHMxLml0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGVuZ3RoID4gMCAmJlxyXG4gICAgICBjb250YWN0czEuaXRlbXMubWFwKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuamlkID09PSBqaWRkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgaXMgaW4gbXkgIHJvc3RlclwiKTtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJub3QgZm91bmRcIiwgY2xpZW50KTtcclxuICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICBqaWQ6IGppZGQsXHJcbiAgICAgICAgbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGdyb3VwczogW10sXHJcbiAgICAgIH07XHJcbiAgICAgIGNsaWVudC51cGRhdGVSb3N0ZXJJdGVtKG9iaik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zdWJzY3JpYmUoamlkZCwgKCkgPT4gY29uc29sZS5sb2coXCJzdWJzY3JwdGlvbiByZXF1ZXN0IHNlbnRcIikpO1xyXG4gICAgICAgIGFjY2VwdFJlcXVlc3QoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhY2NlcHRSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJsaXN0ZW5pbmdcIik7XHJcbiAgICBjbGllbnQub24oXCJzdWJzY3JpYmVcIiwgKFJlY2VpdmVkUHJlc2VuY2UpID0+XHJcbiAgICAgIGNsaWVudC5hY2NlcHRTdWJzY3JpcHRpb24oUmVjZWl2ZWRQcmVzZW5jZS5mcm9tKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpZiAoIW9ubGluZXVzZXJzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSBpZiAoIWZpbHRlcmVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgICAgICAgIDxOYXYgdGFicyBpZD1cIm15VGFiMVwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9OYXY+XHJcbiAgICAgICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17Y2hhdFN1YlRhYn0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAge29ubGluZXVzZXJzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXRsaXN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhdGxpc3RbXCJzdGF0dXNcIl0gPSBcInNlbmRpbmdcIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdFdpdGhJRCA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdC5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYXRXaXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2hhdGxpc3QuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjaGF0bGlzdC5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGF0bGlzdC5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0QWN0aXZlVGFiKFwiY2hhdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhdGVkZWRVc2VycyhcIm5ld1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3KGNoYXRsaXN0LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb1Jvc3RlcihjaGF0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtMb2dvfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NoYXRsaXN0LmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezQ1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjaGF0bGlzdC5maXJzdF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg2PntjaGF0bGlzdC5tZXNnfTwvaDY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpLXBpbjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gVGlwaW4oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtc3VjY2VzcyBzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0Lm9ubGluZVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFpbGVkXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2VlblwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdGxpc3Quc3RhdHVzID09PSBcIlNlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0bGlzdC5zdGF0dXMgPT09IFwiRmFpbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZvbnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgc3RhdHVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gXCJcIiA6IGNoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnkgc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=