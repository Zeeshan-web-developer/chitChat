webpackHotUpdate_N_E("pages/messenger",{

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
          overflow: "scroll"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJDaGF0U2VjdGlvbiIsInVzZVN0YXRlIiwic2VhcmNoVG9nZ2xlIiwic2V0U2VhcmNoVG9nZ2xlIiwiQ2hhdENvbnRhY3QiLCJzZXRDaGF0Q29udGFjdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhdGFiIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJhY3RpdmVUYWIiLCJqaWQiLCJjdXJyZW50VXNlciIsInNldEFjdGl2ZXRhYiIsImFjdGl2ZU5hdiIsIm5ld0NvbnRhY3QiLCJUb2dnbGVUYWIiLCJ0YWIiLCJzZXRBY3RpdmVUYWIiLCJib3JkZXJCb3R0b20iLCJjaGF0ZWRlZFVzZXJzIiwiZmV0Y2hVc2VycyIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsa0JBQXdDQyxzREFBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPQyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFzQ0Ysc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQUEsTUFBT0csV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsU0FBdEI7QUFBQSxHQUFELENBQXhCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0csV0FBWCxDQUF1QkQsR0FBbEM7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MEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLmNhYWVkMGQ1ODM1OWI4MTU5OGUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFjdFNlYXJjaCBmcm9tIFwiLi9jb250YWN0U2VhcmNoXCI7XG5pbXBvcnQgQ2hhdGVkVXNlcnMgZnJvbSBcIi4vY2hhdGVkVXNlcnNcIjtcbmltcG9ydCBDYWxscyBmcm9tIFwiLi9jYWxsc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBNZXNzYWdlU3F1YXJlLCBVc2VyUGx1cywgUGhvbmUsIFNlYXJjaCwgUGx1cyB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XG5pbXBvcnQgeyBOYXYsIE5hdkxpbmssIE5hdkl0ZW0sIFRhYkNvbnRlbnQsIFRhYlBhbmUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHtcbiAgc2V0QWN0aXZlVGFiLFxuICBjaGF0ZWRlZFVzZXJzLFxuICBmZXRjaFVzZXJzLFxuICBzZXRSb3N0ZXIsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBnZXRSb3N0ZXJJdGVtcyB9IGZyb20gXCIuLi8uLi9zdGFuemEvY2hhdENsaWVudFwiO1xuXG5jb25zdCBDaGF0U2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFRvZ2dsZSwgc2V0U2VhcmNoVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW0NoYXRDb250YWN0LCBzZXRDaGF0Q29udGFjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgYXRhYiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hY3RpdmVUYWIpO1xuICBjb25zdCBqaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY3VycmVudFVzZXIuamlkKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZldGFiXSA9IHVzZVN0YXRlKFwiY2hhdFwiKTtcbiAgY29uc3QgYWN0aXZlTmF2ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm5ld0NvbnRhY3QpO1xuICBjb25zdCBUb2dnbGVUYWIgPSAodGFiKSA9PiB7XG4gICAgc2V0QWN0aXZldGFiKHRhYik7XG4gICAgaWYgKHRhYiA9PT0gXCJjaGF0XCIpIHtcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNoYXRcIikpO1xuICAgIH0gZWxzZSBpZiAodGFiID09PSBcImNvbnRhY3RcIikge1xuICAgICAgZGlzcGF0Y2goc2V0QWN0aXZlVGFiKFwiY29udGFjdFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNhbGxcIikpO1xuICAgIH1cbiAgfTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBsZXQgcm9zdGVyQXJheSA9IGdldFJvc3Rlckl0ZW1zKCk7XG4gIC8vICAgZGlzcGF0Y2goc2V0Um9zdGVyKHJvc3RlckFyYXkpKTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0IGN1c3RvbS1zY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGl0bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+Q2hhdDwvaDI+XG4gICAgICAgICAgICA8aDQ+U3RhcnQgTmV3IENvbnZlcnNhdGlvbjwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbSBzZWFyY2ggY29udGFjdC1zZWFyY2hcIlxuICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFRvZ2dsZSh0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWlubGluZSBzZWFyY2gtZm9ybSAke1xuICAgICAgICAgICAgICAgIHNlYXJjaFRvZ2dsZSA/IFwib3BlblwiIDogXCJcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWNsb3NlIGNsb3NlLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hUb2dnbGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tcHJpbWFyeSBidG4tZml4IGNoYXQtY29udC10b2dnbGUgb3V0c2lkZVwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2hhdENvbnRhY3QoIUNoYXRDb250YWN0KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBsdXMgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiIHRhYi1zbSBjaGF0LXRhYnMgbG9nby13YXJwcGVyXCI+XG4gICAgICAgIDxOYXZcbiAgICAgICAgICB0YWJzXG4gICAgICAgICAgaWQ9XCJteVRhYlwiXG4gICAgICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2VmZjFmMlwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbi1lZmZlY3Qgc3RlcDQgJHtcbiAgICAgICAgICAgICAgICBhdGFiID09PSBcImNoYXRcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBUb2dnbGVUYWIoXCJjaGF0XCIpfVxuICAgICAgICAgICAgICBkYXRhLWludHJvPVwiU3RhcnQgY2hhdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZXNzYWdlU3F1YXJlIC8+XG4gICAgICAgICAgICAgIENoYXRcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbi1lZmZlY3QgJHthdGFiID09PSBcImNhbGxcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFRvZ2dsZVRhYihcImNhbGxcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQaG9uZSAvPlxuICAgICAgICAgICAgICBjYWxsXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24tZWZmZWN0ICR7YXRhYiA9PT0gXCJjb250YWN0XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgVG9nZ2xlVGFiKFwiY29udGFjdFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGF0ZWRlZFVzZXJzKFwiY29udGFjdFwiKSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFVzZXJQbHVzIC8+XG4gICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2PlxuXG4gICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17YWN0aXZlVGFifSBzdHlsZT17eyBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fT5cbiAgICAgICAgICA8VGFiUGFuZVxuICAgICAgICAgICAgdGFiSWQ9XCJjaGF0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhZGUgc2hvd1wiXG4gICAgICAgICAgICBpZD1cImNoYXRcIlxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNoYXQtdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hhdGVkVXNlcnMgLz5cbiAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgPFRhYlBhbmVcbiAgICAgICAgICAgIHRhYklkPVwiY2FsbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYWRlIHNob3dcIlxuICAgICAgICAgICAgaWQ9XCJjYWxsXCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjaGF0LXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhbGxzIC8+XG4gICAgICAgICAgPC9UYWJQYW5lPlxuXG4gICAgICAgICAgPFRhYlBhbmVcbiAgICAgICAgICAgIHRhYklkPVwiY29udGFjdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYWRlIHNob3dcIlxuICAgICAgICAgICAgaWQ9XCJjb250YWN0XCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWN0LXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FjdGl2ZU5hdiA9PT0gXCJjb250YWN0XCIgPyA8Q29udGFjdFNlYXJjaCAvPiA6IDxDaGF0ZWRVc2VycyAvPn1cbiAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFNlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9