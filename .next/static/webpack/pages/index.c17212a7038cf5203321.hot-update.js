webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/leftSidebar/chatSection.js":
/*!***********************************************!*\
  !*** ./containers/leftSidebar/chatSection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contactSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactSearch */ "./containers/leftSidebar/contactSearch.js");
/* harmony import */ var _chatedUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatedUsers */ "./containers/leftSidebar/chatedUsers.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\chat\\containers\\leftSidebar\\chatSection.js",
    _this = undefined,
    _s = $RefreshSig$();










var ChatSection = function ChatSection() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var atab = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.activeTab;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("chat"),
      activeTab = _useState[0],
      setActivetab = _useState[1];

  var activeNav = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.newContact;
  });

  var ToggleTab = function ToggleTab(tab) {
    setActivetab(tab);

    if (tab === "chat") {
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["setActiveTab"])("chat"));
    } else if (tab === "contact") {
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["setActiveTab"])("contact"));
    } else {
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["setActiveTab"])("call"));
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "chat custom-scroll",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "theme-title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "media",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
            children: "Chat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
            children: "Start New Conversation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "media-body text-right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "theme-tab tab-sm chat-tabs logo-warpper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
        tabs: true,
        id: "myTab",
        role: "tablist",
        style: {
          borderBottom: "1px solid #eff1f2"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
            className: "button-effect step4 ".concat(atab === "chat" ? "active" : ""),
            onClick: function onClick() {
              return ToggleTab("chat");
            },
            "data-intro": "Start chat",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["MessageSquare"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this), "Chat"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
            className: "button-effect ".concat(atab === "call" ? "active" : ""),
            onClick: function onClick() {
              return ToggleTab("call");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["Phone"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), "call"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
            className: "button-effect ".concat(atab === "contact" ? "active" : ""),
            onClick: function onClick() {
              ToggleTab("contact");
              dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["chatededUsers"])("contact"));
              dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_6__["fetchUsers"])());
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["UserPlus"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), "Contact"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabContent"], {
        activeTab: activeTab,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabPane"], {
          tabId: "chat",
          className: "fade show",
          id: "chat",
          role: "tabpanel",
          "aria-labelledby": "chat-tab",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_chatedUsers__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabPane"], {
          tabId: "call",
          className: "fade show",
          id: "call",
          role: "tabpanel",
          "aria-labelledby": "chat-tab",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_chatedUsers__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabPane"], {
          tabId: "contact",
          className: "fade show",
          id: "contact",
          role: "tabpanel",
          "aria-labelledby": "contact-tab",
          children: activeNav === "contact" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_contactSearch__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 40
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_chatedUsers__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(ChatSection, "4jIodA68Ajfq7Ti205pijz8gobU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = ChatSection;
/* harmony default export */ __webpack_exports__["default"] = (ChatSection);

var _c;

$RefreshReg$(_c, "ChatSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJDaGF0U2VjdGlvbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhdGFiIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJhY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsInNldEFjdGl2ZXRhYiIsImFjdGl2ZU5hdiIsIm5ld0NvbnRhY3QiLCJUb2dnbGVUYWIiLCJ0YWIiLCJzZXRBY3RpdmVUYWIiLCJib3JkZXJCb3R0b20iLCJjaGF0ZWRlZFVzZXJzIiwiZmV0Y2hVc2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxTQUF0QjtBQUFBLEdBQUQsQ0FBeEI7O0FBQ0Esa0JBQWtDQyxzREFBUSxDQUFDLE1BQUQsQ0FBMUM7QUFBQSxNQUFPRCxTQUFQO0FBQUEsTUFBa0JFLFlBQWxCOztBQUNBLE1BQU1DLFNBQVMsR0FBR04sK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdLLFVBQXRCO0FBQUEsR0FBRCxDQUE3Qjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxHQUFELEVBQVM7QUFDekJKLGdCQUFZLENBQUNJLEdBQUQsQ0FBWjs7QUFDQSxRQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtBQUNsQlosY0FBUSxDQUFDYSx5RUFBWSxDQUFDLE1BQUQsQ0FBYixDQUFSO0FBQ0QsS0FGRCxNQUVPLElB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QUMsa0RBQUQ7QUFDRSxlQUFLLEVBQUMsTUFEUjtBQUVFLG1CQUFTLEVBQUMsV0FGWjtBQUdFLFlBQUUsRUFBQyxNQUhMO0FBSUUsY0FBSSxFQUFDLFVBSlA7QUFLRSw2QkFBZ0IsVUFMbEI7QUFBQSxpQ0FPRSxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixlQW9CRSxxRUFBQyxrREFBRDtBQUNFLGVBQUssRUFBQyxTQURSO0FBRUUsbUJBQVMsRUFBQyxXQUZaO0FBR0UsWUFBRSxFQUFDLFNBSEw7QUFJRSxjQUFJLEVBQUMsVUFKUDtBQUtFLDZCQUFnQixhQUxsQjtBQUFBLG9CQU9HRyxTQUFTLEtBQUssU0FBZCxnQkFBMEIscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBMUIsZ0JBQThDLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUZELENBekdEOztHQUFNVixXO1VBQ2FFLHVELEVBQ0pFLHVELEVBRUtBLHVEOzs7S0FKZEosVztBQTJHU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzE3MjEyYTcwMzhjZjUyMDMzMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWN0U2VhcmNoIGZyb20gXCIuL2NvbnRhY3RTZWFyY2hcIjtcbmltcG9ydCBDaGF0ZWRVc2VycyBmcm9tIFwiLi9jaGF0ZWRVc2Vyc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBNZXNzYWdlU3F1YXJlLCBVc2VyUGx1cywgUGhvbmUgfSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuaW1wb3J0IHsgTmF2LCBOYXZMaW5rLCBOYXZJdGVtLCBUYWJDb250ZW50LCBUYWJQYW5lIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7XG4gIHNldEFjdGl2ZVRhYixcbiAgY2hhdGVkZWRVc2VycyxcbiAgZmV0Y2hVc2Vycyxcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcbmNvbnN0IENoYXRTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGF0YWIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWN0aXZlVGFiKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZldGFiXSA9IHVzZVN0YXRlKFwiY2hhdFwiKTtcbiAgY29uc3QgYWN0aXZlTmF2ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm5ld0NvbnRhY3QpO1xuICBjb25zdCBUb2dnbGVUYWIgPSAodGFiKSA9PiB7XG4gICAgc2V0QWN0aXZldGFiKHRhYik7XG4gICAgaWYgKHRhYiA9PT0gXCJjaGF0XCIpIHtcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNoYXRcIikpO1xuICAgIH0gZWxzZSBpZiAodGFiID09PSBcImNvbnRhY3RcIikge1xuICAgICAgZGlzcGF0Y2goc2V0QWN0aXZlVGFiKFwiY29udGFjdFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNhbGxcIikpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdCBjdXN0b20tc2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXRpdGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPkNoYXQ8L2gyPlxuICAgICAgICAgICAgPGg0PlN0YXJ0IE5ldyBDb252ZXJzYXRpb248L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keSB0ZXh0LXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXRhYiB0YWItc20gY2hhdC10YWJzIGxvZ28td2FycHBlclwiPlxuICAgICAgICA8TmF2XG4gICAgICAgICAgdGFic1xuICAgICAgICAgIGlkPVwibXlUYWJcIlxuICAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNlZmYxZjJcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24tZWZmZWN0IHN0ZXA0ICR7XG4gICAgICAgICAgICAgICAgYXRhYiA9PT0gXCJjaGF0XCIgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gVG9nZ2xlVGFiKFwiY2hhdFwiKX1cbiAgICAgICAgICAgICAgZGF0YS1pbnRybz1cIlN0YXJ0IGNoYXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVzc2FnZVNxdWFyZSAvPlxuICAgICAgICAgICAgICBDaGF0XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24tZWZmZWN0ICR7YXRhYiA9PT0gXCJjYWxsXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBUb2dnbGVUYWIoXCJjYWxsXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGhvbmUgLz5cbiAgICAgICAgICAgICAgY2FsbFxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cblxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uLWVmZmVjdCAke2F0YWIgPT09IFwiY29udGFjdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvZ2dsZVRhYihcImNvbnRhY3RcIik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhdGVkZWRVc2VycyhcImNvbnRhY3RcIikpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoVXNlcnMoKSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxVc2VyUGx1cyAvPlxuICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8L05hdj5cblxuICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2FjdGl2ZVRhYn0+XG4gICAgICAgICAgPFRhYlBhbmVcbiAgICAgICAgICAgIHRhYklkPVwiY2hhdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYWRlIHNob3dcIlxuICAgICAgICAgICAgaWQ9XCJjaGF0XCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjaGF0LXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoYXRlZFVzZXJzIC8+XG4gICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgIDxUYWJQYW5lXG4gICAgICAgICAgICB0YWJJZD1cImNhbGxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFkZSBzaG93XCJcbiAgICAgICAgICAgIGlkPVwiY2FsbFwiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY2hhdC10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGF0ZWRVc2VycyAvPlxuICAgICAgICAgIDwvVGFiUGFuZT5cblxuICAgICAgICAgIDxUYWJQYW5lXG4gICAgICAgICAgICB0YWJJZD1cImNvbnRhY3RcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFkZSBzaG93XCJcbiAgICAgICAgICAgIGlkPVwiY29udGFjdFwiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFjdC10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthY3RpdmVOYXYgPT09IFwiY29udGFjdFwiID8gPENvbnRhY3RTZWFyY2ggLz4gOiA8Q2hhdGVkVXNlcnMgLz59XG4gICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRTZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==