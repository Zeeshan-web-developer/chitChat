webpackHotUpdate_N_E("pages/messenger",{

/***/ "./containers/leftSidebar/contactSearch.js":
/*!*************************************************!*\
  !*** ./containers/leftSidebar/contactSearch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datetime */ "./containers/leftSidebar/datetime.js");
/* harmony import */ var _stanza_chatClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../stanza/chatClient */ "./stanza/chatClient.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "D:\\chat\\containers\\leftSidebar\\contactSearch.js",
    _s = $RefreshSig$();











function form() {
  _s();

  var _jsxDEV2,
      _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var jid = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.currentUser.jid;
  });
  var jidLoggedInUser = jid && jid.split("@")[0];
  var usersP = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.users;
  });
  var filteredUsers = usersP.length > 0 && usersP[0].filter(function (user) {
    return user.id !== jidLoggedInUser;
  });
  var recentUsers = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.chatedUsers;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      searchTerm = _useState[0],
      setSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("contacts"),
      chatSubTab = _useState2[0],
      setChatSubTab = _useState2[1];

  var client = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.client;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["fetchUsers"])());
  }, []);

  var addNew = function addNew(item, e) {
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
        lastMessageAt: Object(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])(),
        mesg: "msg at ".concat(Object(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])())
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
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(item) {
      var jidd, contacts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              jidd = item.id + "@mongoose.mysmartpbx.org";
              _context.prev = 1;
              _context.next = 4;
              return client.getRoster();

            case 4:
              contacts = _context.sent;
              contacts.items.map(function (users) {
                if (users.jid !== jidd) {
                  console.log("new user added");
                  client.updateRosterItem({
                    jid: jidd,
                    name: item.first_name,
                    groups: []
                  });
                } else {
                  console.log("user already added");
                }
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log("error", _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function addToRoster(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], (_jsxDEV2 = {
        type: "email",
        name: "email"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "type", "search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "placeholder", "Search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "onChange", function onChange(e) {
        return setSearch(e.target.value);
      }), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "theme-tab",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
        tabs: true,
        id: "myTab1",
        role: "tablist"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabContent"], {
        activeTab: chatSubTab,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("ul", {
          className: "chat-main",
          children: filteredUsers.length > 0 && filteredUsers.filter(function (data) {
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
                dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["setChatWith"])(chatlist.first_name));
                dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["setActiveTab"])("chat"));
                dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_8__["chatededUsers"])("new"));
                addNew(chatlist, e);
                addToRoster(chatlist);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "chat-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "profile  ".concat(chatlist.last_name),
                  style: {
                    backgroundImage: "url('assets/images/".concat(chatlist.thumb, "')"),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                    className: "bg-img",
                    src: "assets/images/".concat(chatlist.thumb),
                    alt: "Avatar",
                    style: {
                      display: "none"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "details",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h5", {
                    children: chatlist.first_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h6", {
                    children: "Team Leader"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "date-status",
                  children: chatlist.last_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 23
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 21
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

_s(form, "I7s7AxiG2AcyBSPXjjvYflqcTw4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiamlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjdXJyZW50VXNlciIsImppZExvZ2dlZEluVXNlciIsInNwbGl0IiwidXNlcnNQIiwidXNlcnMiLCJmaWx0ZXJlZFVzZXJzIiwibGVuZ3RoIiwiZmlsdGVyIiwiaWQiLCJyZWNlbnRVc2VycyIsImNoYXRlZFVzZXJzIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoIiwiY2hhdFN1YlRhYiIsInNldENoYXRTdWJUYWIiLCJjbGllbnQiLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXJzIiwiYWRkTmV3IiwiaXRlbSIsImUiLCJmb3VuZCIsImZvdW5kSUQiLCJpIiwib2JqSW5kZXgiLCJmaW5kSW5kZXgiLCJvYmoiLCJ1cGRhdGVMYXN0TWVzc2FnZVRpbWUiLCJ0aW1lIiwiZGF0ZVRpbWUiLCJtYXAiLCJjaSIsImhhc093blByb3BlcnR5IiwicmVtb3ZlUmVjZW50VXNlciIsImFkZE5ld1VTZXIiLCJmaXJzdF9uYW1lIiwibGFzdE1lc3NhZ2VBdCIsIm1lc2ciLCJjaGFuZ2VDaGF0Q2xpY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3VycmVudFRhcmdldCIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRUb1Jvc3RlciIsImppZGQiLCJnZXRSb3N0ZXIiLCJjb250YWN0cyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVJvc3Rlckl0ZW0iLCJuYW1lIiwiZ3JvdXBzIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNoYXRsaXN0Iiwic2V0Q2hhdFdpdGgiLCJzZXRBY3RpdmVUYWIiLCJjaGF0ZWRlZFVzZXJzIiwibGFzdF9uYW1lIiwiYmFja2dyb3VuZEltYWdlIiwidGh1bWIiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFVQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7QUFBQTs7QUFDZCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsV0FBWCxDQUF1QkosR0FBbEM7QUFBQSxHQUFELENBQXZCO0FBQ0EsTUFBSUssZUFBZSxHQUFHTCxHQUFHLElBQUlBLEdBQUcsQ0FBQ00sS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0ssS0FBdEI7QUFBQSxHQUFELENBQTFCO0FBQ0EsTUFBTUMsYUFBYSxHQUNqQkYsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLENBQWhCLElBQ0FILE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUksTUFBVixDQUFpQixVQUFDUixJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDUyxFQUFMLEtBQVlQLGVBQXRCO0FBQUEsR0FBakIsQ0FGRjtBQUdBLE1BQU1RLFdBQVcsR0FBR1osK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdXLFdBQXRCO0FBQUEsR0FBRCxDQUEvQjs7QUFDQSxrQkFBZ0NDLHNEQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsU0FBbkI7O0FBQ0EsbUJBQW9DRixzREFBUSxDQUFD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LG1CQUZUO0FBQUEseUNBU0U7QUFDRSw2QkFBUyxFQUFDLFFBRFo7QUFFRSx1QkFBRywwQkFBbUJULFFBQVEsQ0FBQ00sS0FBNUIsQ0FGTDtBQUdFLHVCQUFHLEVBQUMsUUFITjtBQUlFLHlCQUFLLEVBQUU7QUFBRUcsNkJBQU8sRUFBRTtBQUFYO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFpQkU7QUFBSywyQkFBUyxFQUFDLFNBQWY7QUFBQSwwQ0FDRTtBQUFBLDhCQUFLVCxRQUFRLENBQUMzQjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBakJGLGVBcUJFO0FBQUssMkJBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQThCMkIsUUFBUSxDQUFDSTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRixlQUVPM0MsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBc0NELFdBbkRIO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlFRDs7R0F6SlEvQixJO1VBQ1VFLHVELEVBQ0xFLHVELEVBRUdBLHVELEVBSUtBLHVELEVBR0xBLHVEOzs7QUFnSkZKLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3Nlbmdlci43ZTc4MGVhNzRmNDQ0M2Y2YzUwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBkYXRlVGltZSBmcm9tIFwiLi9kYXRldGltZVwiO1xyXG5pbXBvcnQgeyBOYXYsIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBnZXRSb3N0ZXJJdGVtcyB9IGZyb20gXCIuLi8uLi9zdGFuemEvY2hhdENsaWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoVXNlcnMsXHJcbiAgc2V0Q2hhdFdpdGgsXHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGNoYXRlZGVkVXNlcnMsXHJcbiAgYWRkTmV3VVNlcixcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG4gIHVwZGF0ZUxhc3RNZXNzYWdlVGltZSxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gZm9ybSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgamlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLmppZCk7XHJcbiAgdmFyIGppZExvZ2dlZEluVXNlciA9IGppZCAmJiBqaWQuc3BsaXQoXCJAXCIpWzBdO1xyXG4gIGNvbnN0IHVzZXJzUCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2Vycyk7XHJcbiAgY29uc3QgZmlsdGVyZWRVc2VycyA9XHJcbiAgICB1c2Vyc1AubGVuZ3RoID4gMCAmJlxyXG4gICAgdXNlcnNQWzBdLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gamlkTG9nZ2VkSW5Vc2VyKTtcclxuICBjb25zdCByZWNlbnRVc2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0ZWRVc2Vycyk7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY2hhdFN1YlRhYiwgc2V0Q2hhdFN1YlRhYl0gPSB1c2VTdGF0ZShcImNvbnRhY3RzXCIpO1xyXG4gIGNvbnN0IGNsaWVudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jbGllbnQpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYWRkTmV3ID0gKGl0ZW0sIGUpID0+IHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGV0IGZvdW5kSUQ7XHJcbiAgICAvKiBTRUFSQ0ggQ09OVEFDVCBJTiBDSEFUIFRBQiAgUkVUVVJOOlRSVUUgSUYgUFJFU0VOVCxSRVRVUk4gRkFMU0UgSUYgTk9UIFBSRVNFTlQgKi9cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjZW50VXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGZvdW5kSUQgPSByZWNlbnRVc2Vyc1tpXS5pZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGlmIGNvbnRhY3QgaXMgcHJlc2VudCBhcHBlbmQgbWVzc2FnZXMgKi9cclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICBsZXQgb2JqSW5kZXggPSByZWNlbnRVc2Vycy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGZvdW5kSUQpO1xyXG4gICAgICBkaXNwYXRjaCh1cGRhdGVMYXN0TWVzc2FnZVRpbWUoeyBpZDogb2JqSW5kZXgsIHRpbWU6IGRhdGVUaW1lKCkgfSkpO1xyXG4gICAgfVxyXG4gICAgLyogSWYgbm90IHByZXNlbnQgaW4gY2hhdCBzZWN0aW9uLmlmIGFueSBvdGhlciBpcyBwcmVzZW50IHdpdGhvdXQgbWVzZyBhdHRyaWJ1dGUgcmVtb3ZlIGZpcnN0IHRoZW4gYWRkKi9cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgcmVjZW50VXNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICAgIGlmICghY2kuaGFzT3duUHJvcGVydHkoXCJtZXNnXCIpKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgYWRkTmV3VVNlcih7XHJcbiAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGl0ZW0uZmlyc3RfbmFtZSxcclxuICAgICAgICAgIGxhc3RNZXNzYWdlQXQ6IGRhdGVUaW1lKCksXHJcbiAgICAgICAgICBtZXNnOiBgbXNnIGF0ICR7ZGF0ZVRpbWUoKX1gLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ2hhdENsaWNrID0gKGUpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdC1tYWluIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvUm9zdGVyID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgIGxldCBqaWRkID0gaXRlbS5pZCArIFwiQG1vbmdvb3NlLm15c21hcnRwYngub3JnXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgY29udGFjdHMgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcbiAgICAgIGNvbnRhY3RzLml0ZW1zLm1hcCgodXNlcnMpID0+IHtcclxuICAgICAgICBpZiAodXNlcnMuamlkICE9PSBqaWRkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyB1c2VyIGFkZGVkXCIpO1xyXG4gICAgICAgICAgY2xpZW50LnVwZGF0ZVJvc3Rlckl0ZW0oe1xyXG4gICAgICAgICAgICBqaWQ6IGppZGQsXHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0uZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgZ3JvdXBzOiBbXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgYWxyZWFkeSBhZGRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2NoYXRTdWJUYWJ9PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRVc2Vycy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgZmlsdGVyZWRVc2Vyc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKChjaGF0bGlzdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHsxID09PSBjaGF0bGlzdC5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDaGF0V2l0aChjaGF0bGlzdC5maXJzdF9uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNoYXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGF0ZWRlZFVzZXJzKFwibmV3XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3KGNoYXRsaXN0LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9Sb3N0ZXIoY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICAke2NoYXRsaXN0Lmxhc3RfbmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJ2Fzc2V0cy9pbWFnZXMvJHtjaGF0bGlzdC50aHVtYn0nKWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgYXNzZXRzL2ltYWdlcy8ke2NoYXRsaXN0LnRodW1ifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjaGF0bGlzdC5maXJzdF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlRlYW0gTGVhZGVyPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zdGF0dXNcIj57Y2hhdGxpc3QubGFzdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=