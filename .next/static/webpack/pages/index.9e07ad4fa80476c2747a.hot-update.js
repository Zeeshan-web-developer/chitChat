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
/* harmony import */ var _calls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calls */ "./containers/leftSidebar/calls.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var _stanza_chatClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../stanza/chatClient */ "./stanza/chatClient.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\chat\\containers\\leftSidebar\\chatSection.js",
    _this = undefined,
    _s = $RefreshSig$();












var ChatSection = function ChatSection() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      searchToggle = _useState[0],
      setSearchToggle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      ChatContact = _useState2[0],
      setChatContact = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var atab = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.activeTab;
  });
  var jid = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.currentUser.jid;
  });

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("chat"),
      activeTab = _useState3[0],
      setActivetab = _useState3[1];

  var activeNav = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.newContact;
  });

  var ToggleTab = function ToggleTab(tab) {
    setActivetab(tab);

    if (tab === "chat") {
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_7__["setActiveTab"])("chat"));
    } else if (tab === "contact") {
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_7__["setActiveTab"])("contact"));
    } else {
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_7__["setActiveTab"])("call"));
    }
  }; // useEffect(() => {
  //   let rosterAray = getRosterItems();
  //   dispatch(setRoster(rosterAray));
  // }, []);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    className: "chat custom-scroll",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "theme-title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "media",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
            children: "Chat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h4", {
            children: "Start New Conversation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "media-body text-right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
            className: "icon-btn btn-outline-light btn-sm search contact-search",
            href: "#",
            onClick: function onClick() {
              return setSearchToggle(true);
            },
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Search"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
            className: "form-inline search-form ".concat(searchToggle ? "open" : ""),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                className: "form-control-plaintext",
                type: "search",
                placeholder: "Search.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "icon-close close-search",
                onClick: function onClick() {
                  return setSearchToggle(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
            className: "icon-btn btn-primary btn-fix chat-cont-toggle outside",
            href: "#",
            onClick: function onClick() {
              return setChatContact(!ChatContact);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Plus"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "theme-tab tab-sm chat-tabs logo-warpper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
        tabs: true,
        id: "myTab",
        role: "tablist",
        style: {
          borderBottom: "1px solid #eff1f2"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
            className: "button-effect step4 ".concat(atab === "chat" ? "active" : ""),
            onClick: function onClick() {
              return ToggleTab("chat");
            },
            "data-intro": "Start chat",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["MessageSquare"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), "Chat"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
            className: "button-effect ".concat(atab === "call" ? "active" : ""),
            onClick: function onClick() {
              return ToggleTab("call");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Phone"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this), "call"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
            className: "button-effect ".concat(atab === "contact" ? "active" : ""),
            onClick: function onClick() {
              ToggleTab("contact");
              dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_7__["chatededUsers"])("contact"));
              dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_7__["fetchUsers"])());
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["UserPlus"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this), "Contact"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabContent"], {
        activeTab: activeTab,
        style: {
          overflowY: "auto"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabPane"], {
          tabId: "chat",
          className: "fade show",
          id: "chat",
          role: "tabpanel",
          "aria-labelledby": "chat-tab",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chatedUsers__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabPane"], {
          tabId: "call",
          className: "fade show",
          id: "call",
          role: "tabpanel",
          "aria-labelledby": "chat-tab",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_calls__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabPane"], {
          tabId: "contact",
          className: "fade show",
          id: "contact",
          role: "tabpanel",
          "aria-labelledby": "contact-tab",
          children: activeNav === "contact" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_contactSearch__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 40
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chatedUsers__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};

_s(ChatSection, "LihN8WRFJrpUuMcJOIV83LZov2c=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJDaGF0U2VjdGlvbiIsInVzZVN0YXRlIiwic2VhcmNoVG9nZ2xlIiwic2V0U2VhcmNoVG9nZ2xlIiwiQ2hhdENvbnRhY3QiLCJzZXRDaGF0Q29udGFjdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhdGFiIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJhY3RpdmVUYWIiLCJqaWQiLCJjdXJyZW50VXNlciIsInNldEFjdGl2ZXRhYiIsImFjdGl2ZU5hdiIsIm5ld0NvbnRhY3QiLCJUb2dnbGVUYWIiLCJ0YWIiLCJzZXRBY3RpdmVUYWIiLCJib3JkZXJCb3R0b20iLCJjaGF0ZWRlZFVzZXJzIiwiZmV0Y2hVc2VycyIsIm92ZXJmbG93WSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOzs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLGtCQUF3Q0Msc0RBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBc0NGLHNEQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBLE1BQU9HLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFNBQXRCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0osK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdHLFdBQVgsQ0FBdUJELEdBQWxD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LDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjllMDdhZDRmYTgwNDc2YzI3NDdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFjdFNlYXJjaCBmcm9tIFwiLi9jb250YWN0U2VhcmNoXCI7XG5pbXBvcnQgQ2hhdGVkVXNlcnMgZnJvbSBcIi4vY2hhdGVkVXNlcnNcIjtcbmltcG9ydCBDYWxscyBmcm9tIFwiLi9jYWxsc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBNZXNzYWdlU3F1YXJlLCBVc2VyUGx1cywgUGhvbmUsIFNlYXJjaCwgUGx1cyB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XG5pbXBvcnQgeyBOYXYsIE5hdkxpbmssIE5hdkl0ZW0sIFRhYkNvbnRlbnQsIFRhYlBhbmUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHtcbiAgc2V0QWN0aXZlVGFiLFxuICBjaGF0ZWRlZFVzZXJzLFxuICBmZXRjaFVzZXJzLFxuICBzZXRSb3N0ZXIsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBnZXRSb3N0ZXJJdGVtcyB9IGZyb20gXCIuLi8uLi9zdGFuemEvY2hhdENsaWVudFwiO1xuXG5jb25zdCBDaGF0U2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFRvZ2dsZSwgc2V0U2VhcmNoVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW0NoYXRDb250YWN0LCBzZXRDaGF0Q29udGFjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgYXRhYiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hY3RpdmVUYWIpO1xuICBjb25zdCBqaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY3VycmVudFVzZXIuamlkKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZldGFiXSA9IHVzZVN0YXRlKFwiY2hhdFwiKTtcbiAgY29uc3QgYWN0aXZlTmF2ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm5ld0NvbnRhY3QpO1xuICBjb25zdCBUb2dnbGVUYWIgPSAodGFiKSA9PiB7XG4gICAgc2V0QWN0aXZldGFiKHRhYik7XG4gICAgaWYgKHRhYiA9PT0gXCJjaGF0XCIpIHtcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNoYXRcIikpO1xuICAgIH0gZWxzZSBpZiAodGFiID09PSBcImNvbnRhY3RcIikge1xuICAgICAgZGlzcGF0Y2goc2V0QWN0aXZlVGFiKFwiY29udGFjdFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNhbGxcIikpO1xuICAgIH1cbiAgfTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBsZXQgcm9zdGVyQXJheSA9IGdldFJvc3Rlckl0ZW1zKCk7XG4gIC8vICAgZGlzcGF0Y2goc2V0Um9zdGVyKHJvc3RlckFyYXkpKTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0IGN1c3RvbS1zY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGl0bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+Q2hhdDwvaDI+XG4gICAgICAgICAgICA8aDQ+U3RhcnQgTmV3IENvbnZlcnNhdGlvbjwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbSBzZWFyY2ggY29udGFjdC1zZWFyY2hcIlxuICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFRvZ2dsZSh0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWlubGluZSBzZWFyY2gtZm9ybSAke1xuICAgICAgICAgICAgICAgIHNlYXJjaFRvZ2dsZSA/IFwib3BlblwiIDogXCJcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWNsb3NlIGNsb3NlLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hUb2dnbGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tcHJpbWFyeSBidG4tZml4IGNoYXQtY29udC10b2dnbGUgb3V0c2lkZVwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2hhdENvbnRhY3QoIUNoYXRDb250YWN0KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBsdXMgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiIHRhYi1zbSBjaGF0LXRhYnMgbG9nby13YXJwcGVyXCI+XG4gICAgICAgIDxOYXZcbiAgICAgICAgICB0YWJzXG4gICAgICAgICAgaWQ9XCJteVRhYlwiXG4gICAgICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2VmZjFmMlwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbi1lZmZlY3Qgc3RlcDQgJHtcbiAgICAgICAgICAgICAgICBhdGFiID09PSBcImNoYXRcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBUb2dnbGVUYWIoXCJjaGF0XCIpfVxuICAgICAgICAgICAgICBkYXRhLWludHJvPVwiU3RhcnQgY2hhdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZXNzYWdlU3F1YXJlIC8+XG4gICAgICAgICAgICAgIENoYXRcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbi1lZmZlY3QgJHthdGFiID09PSBcImNhbGxcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFRvZ2dsZVRhYihcImNhbGxcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQaG9uZSAvPlxuICAgICAgICAgICAgICBjYWxsXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24tZWZmZWN0ICR7YXRhYiA9PT0gXCJjb250YWN0XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgVG9nZ2xlVGFiKFwiY29udGFjdFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGF0ZWRlZFVzZXJzKFwiY29udGFjdFwiKSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFVzZXJQbHVzIC8+XG4gICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2PlxuXG4gICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17YWN0aXZlVGFifSBzdHlsZT17eyBvdmVyZmxvd1k6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxUYWJQYW5lXG4gICAgICAgICAgICB0YWJJZD1cImNoYXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFkZSBzaG93XCJcbiAgICAgICAgICAgIGlkPVwiY2hhdFwiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY2hhdC10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGF0ZWRVc2VycyAvPlxuICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICA8VGFiUGFuZVxuICAgICAgICAgICAgdGFiSWQ9XCJjYWxsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhZGUgc2hvd1wiXG4gICAgICAgICAgICBpZD1cImNhbGxcIlxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNoYXQtdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FsbHMgLz5cbiAgICAgICAgICA8L1RhYlBhbmU+XG5cbiAgICAgICAgICA8VGFiUGFuZVxuICAgICAgICAgICAgdGFiSWQ9XCJjb250YWN0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhZGUgc2hvd1wiXG4gICAgICAgICAgICBpZD1cImNvbnRhY3RcIlxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhY3QtdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWN0aXZlTmF2ID09PSBcImNvbnRhY3RcIiA/IDxDb250YWN0U2VhcmNoIC8+IDogPENoYXRlZFVzZXJzIC8+fVxuICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0U2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=