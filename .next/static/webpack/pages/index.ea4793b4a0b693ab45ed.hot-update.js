webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/leftSidebar/chatedUsers.js":
/*!***********************************************!*\
  !*** ./containers/leftSidebar/chatedUsers.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./1.jpg */ "./containers/leftSidebar/1.jpg");
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\chat\\containers\\leftSidebar\\chatedUsers.js",
    _s = $RefreshSig$();








function chatedUsers() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var unmount = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.componentUnmount;
  });
  var recentUSers = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.chatedUsers;
  });

  var changeChatClick = function changeChatClick(e) {
    document.querySelectorAll(".chat-main li").forEach(function (item) {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    document.querySelector(".sidebar-toggle").classList.add("mobile-menu");
  };

  var Tipin = function Tipin(e) {
    e.currentTarget.classList.toggle("pined");
  };

  var checkHasMessages = function checkHasMessages() {
    recentUSers.map(function (ci) {
      if (!ci.hasOwnProperty("mesg")) {
        dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["removeRecentUser"])(ci.id));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (unmount) {
      checkHasMessages();
    }
  }, [unmount]);
  var SotedUsers = recentUSers.sort(function (a, b) {
    return new Date(b.lastMessageAt) - new Date(a.lastMessageAt);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "theme-tab",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      tabs: true,
      id: "myTab1",
      role: "tablist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
        className: "chat-main",
        children: SotedUsers.map(function (chatlist, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "".concat(1 === chatlist.id && !chatlist.mesg && i == 0 ? "active" : chatlist.mesg && i == 0 ? "active" : ""),
            onClick: function onClick(e) {
              changeChatClick(e, chatlist);
              dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["setChatWith"])({
                name: chatlist.first_name,
                status: chatlist.onlineStatus
              }));
              i > 0 ? checkHasMessages() : null;
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "chat-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "profile  ".concat(chatlist.onlineStatus),
                style: {
                  backgroundImage: "url(".concat(_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, ")"),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "block"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                  className: "bg-img",
                  src: _1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
                  alt: "Avatar",
                  style: {
                    display: "none"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "details",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                  children: chatlist.first_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  children: chatlist.mesg
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "date-status",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                  className: "ti-pin2",
                  onClick: function onClick(e) {
                    return Tipin(e);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  children: chatlist.lastSeenDate
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 21
                }, _this), chatlist.status === "Sending" || "Failed" || "Seen" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  className: "".concat(chatlist.status === "Sending" ? "font-dark" : chatlist.status === "Failed" ? "font-danger" : "font-success", "  status"),
                  children: chatlist.status === "8" ? "" : chatlist.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 23
                }, _this) : "", chatlist.status === "8" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "badge badge-primary sm",
                  children: chatlist.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 23
                }, _this) : ""]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(chatedUsers, "73ElVBMDXiXKH9LlGOnMp7V8wIA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (chatedUsers);

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

/***/ }),

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
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);




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
    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["fetchUsers"])());
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
      if (recentUsers[i].id === item.id) {
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
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["updateLastMessageTime"])({
        id: objIndex,
        time: Object(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])()
      }));
    }
    /* If not present in chat section.if any other is present without mesg attribute remove first then add*/


    if (!found) {
      recentUsers.map(function (ci) {
        if (!ci.hasOwnProperty("mesg")) {
          dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["removeRecentUser"])(ci.id));
        }
      });
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["addNewUSer"])({
        id: item.id,
        first_name: item.first_name,
        status: item.onlineusers,
        mesg: "msg at ".concat(Object(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])()),
        onlineStatus: item.onlineStatus,
        lastMessageAt: Object(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])()
      }));
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 12
    }, this);
  } else if (!filtered) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 12
    }, this);
  } else {
    var _jsxDEV2;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], (_jsxDEV2 = {
            type: "email",
            name: "email"
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "type", "search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "placeholder", "Search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "onChange", function onChange(e) {
            return setSearch(e.target.value);
          }), _jsxDEV2), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "theme-tab",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
            tabs: true,
            id: "myTab1",
            role: "tablist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabContent"], {
            activeTab: chatSubTab,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("ul", {
              className: "chat-main",
              children: onlineusers.filter(function (data) {
                if (searchTerm == null) {
                  return data;
                } else if (data.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return data;
                }
              }).map(function (chatlist, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                  className: "".concat(1 === chatlist.id ? "active" : ""),
                  onClick: function onClick(e) {
                    changeChatClick(e, chatlist);
                    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["setChatWith"])({
                      name: chatlist.first_name,
                      status: chatlist.onlineStatus
                    }));
                    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["setActiveTab"])("chat"));
                    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["chatededUsers"])("new"));
                    addNew(chatlist, e);
                    addToRoster(chatlist);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "chat-box",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                      className: "profile ".concat(chatlist.onlineStatus),
                      style: {
                        backgroundImage: "url(".concat(_1_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, ")"),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "block"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                        className: "bg-img",
                        src: _1_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
                        alt: "Avatar",
                        style: {
                          display: "none"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                      className: "details",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h5", {
                        children: chatlist.first_name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 223,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                      className: "date-status",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                        className: "ti-pin2",
                        onClick: function onClick(e) {
                          return Tipin(e);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 25
                  }, _this)
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0ZWRVc2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImNoYXRlZFVzZXJzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVubW91bnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImNvbXBvbmVudFVubW91bnQiLCJyZWNlbnRVU2VycyIsImNoYW5nZUNoYXRDbGljayIsImUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiVGlwaW4iLCJ0b2dnbGUiLCJjaGVja0hhc01lc3NhZ2VzIiwibWFwIiwiY2kiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbW92ZVJlY2VudFVzZXIiLCJpZCIsInVzZUVmZmVjdCIsIlNvdGVkVXNlcnMiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwibGFzdE1lc3NhZ2VBdCIsImNoYXRsaXN0IiwiaSIsIm1lc2ciLCJzZXRDaGF0V2l0aCIsIm5hbWUiLCJmaXJzdF9uYW1lIiwic3RhdHVzIiwib25saW5lU3RhdHVzIiwiYmFja2dyb3VuZEltYWdlIiwiTG9nbyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsImxhc3RTZWVuRGF0ZSIsImZvcm0iLCJvbmxpbmVVIiwiamlkIiwiY3VycmVudFVzZXIiLCJqaWRMb2dnZWRJblVzZXIiLCJzcGxpdCIsInVzZXJzUCIsInVzZXJzIiwiYWxsdXNlcnMiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJmaWx0ZXJlZFVzZXJzIiwicmVjZW50VXNlcnMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoIiwiY2hhdFN1YlRhYiIsInNldENoYXRTdWJUYWIiLCJvbmxpbmV1c2VycyIsInNldE9ubGluZXVzZXJzIiwiY2xpZW50IiwiYWxsdXNlclN0YXR1cyIsImZpbHRlcmQiLCJsZW5ndGgiLCJmaWx0ZXIiLCJmZXRjaFVzZXJzIiwiY29uc29sZSIsImxvZyIsIm1lcmdlZEFyYXkiLCJtZXJnZUFycmF5IiwidXNlckl0ZW0iLCJjbGFzc2VzSXRlbSIsImZpbmQiLCJhZGROZXciLCJmb3VuZCIsImZvdW5kSUQiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJkYXRlVGltZSIsImFkZE5ld1VTZXIiLCJhZGRUb1Jvc3RlciIsImppZGQiLCJnZXRSb3N0ZXIiLCJjb250YWN0czEiLCJpdGVtcyIsImdyb3VwcyIsInVwZGF0ZVJvc3Rlckl0ZW0iLCJzZXRUaW1lb3V0Iiwic3Vic2NyaWJlIiwiYWNjZXB0UmVxdWVzdCIsIm9uIiwiUmVjZWl2ZWRQcmVzZW5jZSIsImFjY2VwdFN1YnNjcmlwdGlvbiIsImZyb20iLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQ3JCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxnQkFBdEI7QUFBQSxHQUFELENBQTNCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV04sV0FBdEI7QUFBQSxHQUFELENBQS9COztBQUVBLE1BQU1TLGVB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QU8sRUFBRSxpQkFBQzlCLENBQUQ7QUFBQSxpQ0FBT1UsS0FBSyxDQUFDVixDQUFELENBQVo7QUFBQTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkYsbUJBRU8wQixDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUF3RUQsZUFyRkY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREY7QUE0R0Q7QUFDRjs7R0F2UFFhLEk7VUFFVS9DLHVELEVBQ0xFLHVELEVBRUdBLHVELEVBQ0VBLHVELEVBSUdBLHVELEVBSUxBLHVELEVBQ0tBLHVEOzs7QUF5T1A2QyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYTQ3OTNiNGEwYjY5M2FiNDVlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXYsIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZXRDaGF0V2l0aCwgcmVtb3ZlUmVjZW50VXNlciB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi8xLmpwZ1wiO1xyXG5mdW5jdGlvbiBjaGF0ZWRVc2VycygpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdW5tb3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jb21wb25lbnRVbm1vdW50KTtcclxuICBjb25zdCByZWNlbnRVU2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0ZWRVc2Vycyk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNoYXRDbGljayA9IChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYXQtbWFpbiBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBUaXBpbiA9IChlKSA9PiB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcInBpbmVkXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgY2hlY2tIYXNNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgIHJlY2VudFVTZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICBkaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1bm1vdW50KSB7XHJcbiAgICAgIGNoZWNrSGFzTWVzc2FnZXMoKTtcclxuICAgIH1cclxuICB9LCBbdW5tb3VudF0pO1xyXG5cclxuICBsZXQgU290ZWRVc2VycyA9IHJlY2VudFVTZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShiLmxhc3RNZXNzYWdlQXQpIC0gbmV3IERhdGUoYS5sYXN0TWVzc2FnZUF0KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgIDxOYXYgdGFicyBpZD1cIm15VGFiMVwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9OYXY+XHJcbiAgICAgIDxUYWJDb250ZW50PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGF0LW1haW5cIj5cclxuICAgICAgICAgIHtTb3RlZFVzZXJzLm1hcCgoY2hhdGxpc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIDEgPT09IGNoYXRsaXN0LmlkICYmICFjaGF0bGlzdC5tZXNnICYmIGkgPT0gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogY2hhdGxpc3QubWVzZyAmJiBpID09IDBcclxuICAgICAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hhdFdpdGgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2hhdGxpc3QuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogY2hhdGxpc3Qub25saW5lU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGkgPiAwID8gY2hlY2tIYXNNZXNzYWdlcygpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZmlsZSAgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7TG9nb30pYCxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PntjaGF0bGlzdC5maXJzdF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntjaGF0bGlzdC5tZXNnfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktcGluMlwiIG9uQ2xpY2s9eyhlKSA9PiBUaXBpbihlKX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57Y2hhdGxpc3QubGFzdFNlZW5EYXRlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCIgfHwgXCJGYWlsZWRcIiB8fCBcIlNlZW5cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0bGlzdC5zdGF0dXMgPT09IFwiRmFpbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm9udC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgc3RhdHVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyBcIlwiIDogY2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnkgc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhdGVkVXNlcnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vMS5qcGdcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHtcclxuICBmZXRjaFVzZXJzLFxyXG4gIHNldENoYXRXaXRoLFxyXG4gIHNldEFjdGl2ZVRhYixcclxuICBjaGF0ZWRlZFVzZXJzLFxyXG4gIGFkZE5ld1VTZXIsXHJcbiAgcmVtb3ZlUmVjZW50VXNlcixcclxuICB1cGRhdGVMYXN0TWVzc2FnZVRpbWUsXHJcbiAgc2V0QWxsVXNlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIGZvcm0oKSB7XHJcbiAgbGV0IG9ubGluZVU7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGppZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jdXJyZW50VXNlci5qaWQpO1xyXG4gIHZhciBqaWRMb2dnZWRJblVzZXIgPSBqaWQgJiYgamlkLnNwbGl0KFwiQFwiKVswXTtcclxuICBjb25zdCB1c2Vyc1AgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcnMpO1xyXG4gIGNvbnN0IGFsbHVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmFsbHVzZXJzKTtcclxuICBjb25zdCBbZmlsdGVyZWQsIHNldEZpbHRlcmVkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGxldCBmaWx0ZXJlZFVzZXJzO1xyXG5cclxuICBjb25zdCByZWNlbnRVc2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0ZWRVc2Vycyk7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY2hhdFN1YlRhYiwgc2V0Q2hhdFN1YlRhYl0gPSB1c2VTdGF0ZShcImNvbnRhY3RzXCIpO1xyXG4gIGNvbnN0IFtvbmxpbmV1c2Vycywgc2V0T25saW5ldXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGNsaWVudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jbGllbnQpO1xyXG4gIGxldCBhbGx1c2VyU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmFsbHVzZXJTdGF0dXMpO1xyXG4gIGNvbnN0IGZpbHRlcmQgPSAoKSA9PiB7XHJcbiAgICBmaWx0ZXJlZFVzZXJzID1cclxuICAgICAgdXNlcnNQLmxlbmd0aCA+IDAgJiZcclxuICAgICAgdXNlcnNQWzBdLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gamlkTG9nZ2VkSW5Vc2VyKTtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyZWRVc2VycztcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZpbHRlcmVkKGZpbHRlcmQoKSk7XHJcbiAgfSwgW3VzZXJzUF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2VlZmZlY3QgMm5kXCIsIGFsbHVzZXJTdGF0dXMsIGZpbHRlcmVkVXNlcnMsIGZpbHRlcmVkKTtcclxuICAgIGlmIChmaWx0ZXJlZCAmJiBhbGx1c2VyU3RhdHVzKSB7XHJcbiAgICAgIG9ubGluZVUgPSBtZXJnZWRBcmF5KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiT25saW5lIHVzZXJzXCIsIGFsbHVzZXJTdGF0dXMsIGZpbHRlcmVkLCBmaWx0ZXJlZFVzZXJzKTtcclxuICAgICAgc2V0T25saW5ldXNlcnMob25saW5lVSk7XHJcbiAgICB9XHJcbiAgfSwgW2FsbHVzZXJTdGF0dXMsIGZpbHRlcmVkXSk7XHJcblxyXG4gIGNvbnN0IG1lcmdlZEFyYXkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZXJnZUFycmF5ID1cclxuICAgICAgZmlsdGVyZWQgJiZcclxuICAgICAgZmlsdGVyZWQubWFwKCh1c2VySXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBjbGFzc2VzSXRlbSA9IGFsbHVzZXJTdGF0dXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdXNlckl0ZW0uaWQpO1xyXG4gICAgICAgIHJldHVybiBjbGFzc2VzSXRlbVxyXG4gICAgICAgICAgPyB7IC4uLnVzZXJJdGVtLCAuLi5jbGFzc2VzSXRlbSB9XHJcbiAgICAgICAgICA6IHsgLi4udXNlckl0ZW0sIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJPbmxpbmUgdXNlcnMgbWVyZ2VkXCIsIG1lcmdlQXJyYXkpO1xyXG4gICAgcmV0dXJuIG1lcmdlQXJyYXk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkTmV3ID0gKGl0ZW0pID0+IHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGV0IGZvdW5kSUQ7XHJcbiAgICAvKiBTRUFSQ0ggQ09OVEFDVCBJTiBDSEFUIFRBQiAgUkVUVVJOOlRSVUUgSUYgUFJFU0VOVCxSRVRVUk4gRkFMU0UgSUYgTk9UIFBSRVNFTlQgKi9cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjZW50VXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGZvdW5kSUQgPSByZWNlbnRVc2Vyc1tpXS5pZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGlmIGNvbnRhY3QgaXMgcHJlc2VudCBhcHBlbmQgbWVzc2FnZXMgKi9cclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICBsZXQgb2JqSW5kZXggPSByZWNlbnRVc2Vycy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGZvdW5kSUQpO1xyXG4gICAgICBkaXNwYXRjaCh1cGRhdGVMYXN0TWVzc2FnZVRpbWUoeyBpZDogb2JqSW5kZXgsIHRpbWU6IGRhdGVUaW1lKCkgfSkpO1xyXG4gICAgfVxyXG4gICAgLyogSWYgbm90IHByZXNlbnQgaW4gY2hhdCBzZWN0aW9uLmlmIGFueSBvdGhlciBpcyBwcmVzZW50IHdpdGhvdXQgbWVzZyBhdHRyaWJ1dGUgcmVtb3ZlIGZpcnN0IHRoZW4gYWRkKi9cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgcmVjZW50VXNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICAgIGlmICghY2kuaGFzT3duUHJvcGVydHkoXCJtZXNnXCIpKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgYWRkTmV3VVNlcih7XHJcbiAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGl0ZW0uZmlyc3RfbmFtZSxcclxuICAgICAgICAgIHN0YXR1czogaXRlbS5vbmxpbmV1c2VycyxcclxuICAgICAgICAgIG1lc2c6IGBtc2cgYXQgJHtkYXRlVGltZSgpfWAsXHJcbiAgICAgICAgICBvbmxpbmVTdGF0dXM6IGl0ZW0ub25saW5lU3RhdHVzLFxyXG4gICAgICAgICAgbGFzdE1lc3NhZ2VBdDogZGF0ZVRpbWUoKSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNoYXRDbGljayA9IChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYXQtbWFpbiBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUb1Jvc3RlciA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICBsZXQgamlkZCA9IGl0ZW0uaWQgKyBcIkBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiO1xyXG4gICAgbGV0IGNvbnRhY3RzMSA9IGF3YWl0IGNsaWVudC5nZXRSb3N0ZXIoKTtcclxuICAgIGxldCBsZW5ndGggPSBjb250YWN0czEuaXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZW5ndGggPiAwICYmXHJcbiAgICAgIGNvbnRhY3RzMS5pdGVtcy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgICBpZiAodXNlci5qaWQgPT09IGppZGQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBpcyBpbiBteSAgcm9zdGVyXCIpO1xyXG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBmb3VuZFwiLCBjbGllbnQpO1xyXG4gICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgIGppZDogamlkZCxcclxuICAgICAgICBuYW1lOiBpdGVtLmZpcnN0X25hbWUsXHJcbiAgICAgICAgZ3JvdXBzOiBbXSxcclxuICAgICAgfTtcclxuICAgICAgY2xpZW50LnVwZGF0ZVJvc3Rlckl0ZW0ob2JqKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnN1YnNjcmliZShqaWRkLCAoKSA9PiBjb25zb2xlLmxvZyhcInN1YnNjcnB0aW9uIHJlcXVlc3Qgc2VudFwiKSk7XHJcbiAgICAgICAgYWNjZXB0UmVxdWVzdCgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGFjY2VwdFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxpc3RlbmluZ1wiKTtcclxuICAgIGNsaWVudC5vbihcInN1YnNjcmliZVwiLCAoUmVjZWl2ZWRQcmVzZW5jZSkgPT5cclxuICAgICAgY2xpZW50LmFjY2VwdFN1YnNjcmlwdGlvbihSZWNlaXZlZFByZXNlbmNlLmZyb20pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGlmICghb25saW5ldXNlcnMpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfSBlbHNlIGlmICghZmlsdGVyZWQpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgICAgICAgPFRhYkNvbnRlbnQgYWN0aXZlVGFiPXtjaGF0U3ViVGFifT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdC1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICB7b25saW5ldXNlcnNcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZpcnN0X25hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhdGxpc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7MSA9PT0gY2hhdGxpc3QuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYXRXaXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2hhdGxpc3QuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjaGF0bGlzdC5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0QWN0aXZlVGFiKFwiY2hhdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhdGVkZWRVc2VycyhcIm5ld1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3KGNoYXRsaXN0LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb1Jvc3RlcihjaGF0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtMb2dvfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57Y2hhdGxpc3QuZmlyc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoNj57Y2hhdGxpc3QubWVzZ308L2g2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aS1waW4yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IFRpcGluKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDY+e2NoYXRsaXN0Lmxhc3RTZWVuRGF0ZX08L2g2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIlNlbmRpbmdcIiB8fCBcIkZhaWxlZFwiIHx8IFwiU2VlblwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdGxpc3Quc3RhdHVzID09PSBcIlNlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXRsaXN0LnN0YXR1cyA9PT0gXCJGYWlsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJmb250LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBzdGF0dXNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIjhcIiA/IFwiXCIgOiBjaGF0bGlzdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnkgc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==