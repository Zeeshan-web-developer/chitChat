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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJvbmxpbmVVIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImppZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJjaGF0ZWRVc2VycyIsImNoYXRXaXRoSUQiLCJjaGF0V2l0aCIsImlkIiwic2VhcmNoVGVybSIsInNldFNlYXJjaCIsImNoYXRTdWJUYWIiLCJzZXRDaGF0U3ViVGFiIiwib25saW5ldXNlcnMiLCJzZXRPbmxpbmV1c2VycyIsImNsaWVudCIsImFsbHVzZXJTdGF0dXMiLCJmaWx0ZXJkIiwibGVuZ3RoIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJtZXJnZWRBcmF5IiwibWVyZ2VBcnJheSIsIm1hcCIsInVzZXJJdGVtIiwiY2xhc3Nlc0l0ZW0iLCJmaW5kIiwiaXRlbSIsIm9ubGluZVN0YXR1cyIsImFkZE5ldyIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJjaSIsImhhc093blByb3BlcnR5IiwicmVtb3ZlUmVjZW50VXNlciIsImFkZE5ld1VTZXIiLCJmaXJzdF9uYW1lIiwic3RhdHVzIiwiY2hhbmdlQ2hhdENsaWNrIiwiZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjdXJyZW50VGFyZ2V0IiwiYWRkIiwicXVlcnlTZWxlY3RvciIsImFkZFRvUm9zdGVyIiwiamlkZCIsImdldFJvc3RlciIsImNvbnRhY3RzMSIsIml0ZW1zIiwib2JqIiwibmFtZSIsImdyb3VwcyIsInVwZGF0ZVJvc3Rlckl0ZW0iLCJzZXRUaW1lb3V0Iiwic3Vic2NyaWJlIiwiYWNjZXB0UmVxdWVzdCIsIm9uIiwiUmVjZWl2ZWRQcmVzZW5jZSIsImFjY2VwdFN1YnNjcmlwdGlvbiIsImZyb20iLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY2hhdGxpc3QiLCJzZXRDaGF0V2l0aCIsInNldEFjdGl2ZVRhYiIsImNoYXRlZGVkVXNlcnMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJMb2dvIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkaXNwbGF5IiwiVGlwaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFXQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQ2QsTUFBSUMsT0FBSjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxXQUFYLENBQXVCSixHQUFsQztBQUFBLEdBQUQsQ0FBdkI7QUFDQSxNQUFJSyxlQUFlLEdBQUdMLEdBQUcsSUFBSUEsR0FBRyxDQUFDTSxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsQ0FBN0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdOLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxLQUF0QjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdSLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXTSxRQUF0QjtBQUFBLEdBQUQsQ0FBNUI7O0FBQ0Esa0JBQWdDQyxzREFBUSxD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QUNFO0FBQ0UsaUNBQVMsRUFBQyxTQURaO0FBRUUsK0JBQU8sRUFBRSxpQkFBQ0csQ0FBRDtBQUFBLGlDQUFPdUMsS0FBSyxDQUFDdkMsQ0FBRCxDQUFaO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBS0U7QUFBSSxpQ0FBUyxFQUFDLHFCQUFkO0FBQUEsa0NBQ0c4QixRQUFRLENBQUMxQztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QkYsbUJBT09JLENBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQXlGRCxlQXZHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFERjtBQThIRDtBQUNGOztHQWpSUWpELEk7VUFFVUcsdUQsRUFDTEUsdUQsRUFFR0EsdUQsRUFDRUEsdUQsRUFJR0EsdUQsRUFDREEsdUQsRUFJSkEsdUQsRUFDS0EsdUQ7OztBQWtRUEwsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLmI4OTZiNDViZWQxZTFjMGFjNmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuL2RhdGV0aW1lXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLzEuanBnXCI7XHJcbmltcG9ydCB7IE5hdiwgVGFiQ29udGVudCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcInJlYWN0LWF2YXRhclwiO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoVXNlcnMsXHJcbiAgc2V0Q2hhdFdpdGgsXHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGNoYXRlZGVkVXNlcnMsXHJcbiAgYWRkTmV3VVNlcixcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIHVwZGF0ZUxhc3RNZXNzYWdlVGltZSxcclxuICBzZXRBbGxVc2VycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gZm9ybSgpIHtcclxuICBsZXQgb25saW5lVTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgamlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLmppZCk7XHJcbiAgdmFyIGppZExvZ2dlZEluVXNlciA9IGppZCAmJiBqaWQuc3BsaXQoXCJAXCIpWzBdO1xyXG4gIGNvbnN0IHVzZXJzUCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2Vycyk7XHJcbiAgY29uc3QgYWxsdXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlcnMpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgbGV0IGZpbHRlcmVkVXNlcnM7XHJcblxyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRlZFVzZXJzKTtcclxuICBjb25zdCBjaGF0V2l0aElEID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRXaXRoLmlkKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjaGF0U3ViVGFiLCBzZXRDaGF0U3ViVGFiXSA9IHVzZVN0YXRlKFwiY29udGFjdHNcIik7XHJcbiAgY29uc3QgW29ubGluZXVzZXJzLCBzZXRPbmxpbmV1c2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgY2xpZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNsaWVudCk7XHJcbiAgbGV0IGFsbHVzZXJTdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWxsdXNlclN0YXR1cyk7XHJcbiAgY29uc3QgZmlsdGVyZCA9ICgpID0+IHtcclxuICAgIGZpbHRlcmVkVXNlcnMgPVxyXG4gICAgICB1c2Vyc1AubGVuZ3RoID4gMCAmJlxyXG4gICAgICB1c2Vyc1BbMF0uZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBqaWRMb2dnZWRJblVzZXIpO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZFVzZXJzO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoVXNlcnMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyZWQoZmlsdGVyZCgpKTtcclxuICB9LCBbdXNlcnNQXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZWVmZmVjdCAybmRcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWRVc2VycywgZmlsdGVyZWQpO1xyXG4gICAgaWYgKGZpbHRlcmVkICYmIGFsbHVzZXJTdGF0dXMpIHtcclxuICAgICAgb25saW5lVSA9IG1lcmdlZEFyYXkoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJPbmxpbmUgdXNlcnNcIiwgYWxsdXNlclN0YXR1cywgZmlsdGVyZWQsIGZpbHRlcmVkVXNlcnMpO1xyXG4gICAgICBzZXRPbmxpbmV1c2VycyhvbmxpbmVVKTtcclxuICAgIH1cclxuICB9LCBbYWxsdXNlclN0YXR1cywgZmlsdGVyZWRdKTtcclxuXHJcbiAgY29uc3QgbWVyZ2VkQXJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lcmdlQXJyYXkgPVxyXG4gICAgICBmaWx0ZXJlZCAmJlxyXG4gICAgICBmaWx0ZXJlZC5tYXAoKHVzZXJJdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsYXNzZXNJdGVtID0gYWxsdXNlclN0YXR1cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSB1c2VySXRlbS5pZCk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXNJdGVtXHJcbiAgICAgICAgICA/IHsgLi4udXNlckl0ZW0sIC4uLmNsYXNzZXNJdGVtIH1cclxuICAgICAgICAgIDogeyAuLi51c2VySXRlbSwgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIiB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2VycyBtZXJnZWRcIiwgbWVyZ2VBcnJheSk7XHJcbiAgICByZXR1cm4gbWVyZ2VBcnJheTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGROZXcgPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZXQgZm91bmRJRDtcclxuICAgIC8qIFNFQVJDSCBDT05UQUNUIElOIENIQVQgVEFCICBSRVRVUk46VFJVRSBJRiBQUkVTRU5ULFJFVFVSTiBGQUxTRSBJRiBOT1QgUFJFU0VOVCAqL1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNlbnRVc2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5ldyBpdGVtIGlkXCIsIGl0ZW0uaWQpO1xyXG4gICAgICBpZiAocmVjZW50VXNlcnNbaV0uaWQgPT09IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGZvdW5kSUQgPSByZWNlbnRVc2Vyc1tpXS5pZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGlmIGNvbnRhY3QgaXMgcHJlc2VudCBhcHBlbmQgbWVzc2FnZXMgKi9cclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAvL2xldCBvYmpJbmRleCA9IHJlY2VudFVzZXJzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gZm91bmRJRCk7XHJcbiAgICAgIC8vZGlzcGF0Y2godXBkYXRlTGFzdE1lc3NhZ2VUaW1lKHsgaWQ6IG9iakluZGV4LCB0aW1lOiBkYXRlVGltZSgpIH0pKTtcclxuICAgICAgcmVjZW50VXNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICAgIGlmICghY2kuaGFzT3duUHJvcGVydHkoXCJtZXNnXCIpKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZSBmaXJzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyogSWYgbm90IHByZXNlbnQgaW4gY2hhdCBzZWN0aW9uLmlmIGFueSBvdGhlciBpcyBwcmVzZW50IHdpdGhvdXQgbWVzZyBhdHRyaWJ1dGUgcmVtb3ZlIGZpcnN0IHRoZW4gYWRkKi9cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgcmVjZW50VXNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICAgIGlmICghY2kuaGFzT3duUHJvcGVydHkoXCJtZXNnXCIpKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZSBmaXJzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICAgIGlkOiBpdGVtLmlkICsgXCJAbW9uZ29vc2UubXlzbWFydHBieC5vcmdcIixcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGl0ZW0uZmlyc3RfbmFtZSxcclxuICAgICAgICAgIHN0YXR1czogaXRlbS5vbmxpbmV1c2VycyxcclxuICAgICAgICAgIG9ubGluZVN0YXR1czogaXRlbS5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICBzdGF0dXM6IGl0ZW0ub25saW5lU3RhdHVzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ2hhdENsaWNrID0gKGUpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdC1tYWluIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvUm9zdGVyID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgIGxldCBqaWRkID0gaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCI7XHJcbiAgICBsZXQgY29udGFjdHMxID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG4gICAgbGV0IGxlbmd0aCA9IGNvbnRhY3RzMS5pdGVtcy5sZW5ndGg7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxlbmd0aCA+IDAgJiZcclxuICAgICAgY29udGFjdHMxLml0ZW1zLm1hcCgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyLmppZCA9PT0gamlkZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGlzIGluIG15ICByb3N0ZXJcIik7XHJcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibm90IGZvdW5kXCIsIGNsaWVudCk7XHJcbiAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgamlkOiBqaWRkLFxyXG4gICAgICAgIG5hbWU6IGl0ZW0uZmlyc3RfbmFtZSxcclxuICAgICAgICBncm91cHM6IFtdLFxyXG4gICAgICB9O1xyXG4gICAgICBjbGllbnQudXBkYXRlUm9zdGVySXRlbShvYmopO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjbGllbnQuc3Vic2NyaWJlKGppZGQsICgpID0+IGNvbnNvbGUubG9nKFwic3Vic2NycHRpb24gcmVxdWVzdCBzZW50XCIpKTtcclxuICAgICAgICBhY2NlcHRSZXF1ZXN0KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgYWNjZXB0UmVxdWVzdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibGlzdGVuaW5nXCIpO1xyXG4gICAgY2xpZW50Lm9uKFwic3Vic2NyaWJlXCIsIChSZWNlaXZlZFByZXNlbmNlKSA9PlxyXG4gICAgICBjbGllbnQuYWNjZXB0U3Vic2NyaXB0aW9uKFJlY2VpdmVkUHJlc2VuY2UuZnJvbSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFvbmxpbmV1c2Vycykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9IGVsc2UgaWYgKCFmaWx0ZXJlZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXRhYlwiPlxyXG4gICAgICAgICAgICA8TmF2IHRhYnMgaWQ9XCJteVRhYjFcIiByb2xlPVwidGFibGlzdFwiPjwvTmF2PlxyXG4gICAgICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2NoYXRTdWJUYWJ9PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGF0LW1haW5cIj5cclxuICAgICAgICAgICAgICAgIHtvbmxpbmV1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChjaGF0bGlzdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXRsaXN0W1wic3RhdHVzXCJdID0gXCJzZW5kaW5nXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRXaXRoSUQgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdGxpc3QuaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNoYXRDbGljayhlLCBjaGF0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGF0V2l0aCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNoYXRsaXN0LmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogY2hhdGxpc3Qub25saW5lU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhdGxpc3QuaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNoYXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYXRlZGVkVXNlcnMoXCJuZXdcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ldyhjaGF0bGlzdCwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9Sb3N0ZXIoY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZmlsZSAke2NoYXRsaXN0Lm9ubGluZVN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7TG9nb30pYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZmlsZSAke2NoYXRsaXN0Lm9ubGluZVN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjaGF0bGlzdC5maXJzdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs0NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57Y2hhdGxpc3QuZmlyc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoNj57Y2hhdGxpc3QubWVzZ308L2g2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aS1waW4yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IFRpcGluKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXN1Y2Nlc3Mgc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiU2VuZGluZ1wiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZhaWxlZFwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNlZW5cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhdGxpc3Quc3RhdHVzID09PSBcIkZhaWxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJmb250LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIHN0YXR1c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIjhcIiA/IFwiXCIgOiBjaGF0bGlzdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIjhcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IHNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9