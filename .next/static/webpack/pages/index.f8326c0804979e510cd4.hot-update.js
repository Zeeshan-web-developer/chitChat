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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabPane"], {
          tabId: "chat",
          className: "fade show",
          id: "chat",
          role: "tabpanel",
          "aria-labelledby": "chat-tab",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chatedUsers__WEBPACK_IMPORTED_MODULE_2__["default"], {
            style: {
              overflow: scrollY
            }
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJDaGF0U2VjdGlvbiIsInVzZVN0YXRlIiwic2VhcmNoVG9nZ2xlIiwic2V0U2VhcmNoVG9nZ2xlIiwiQ2hhdENvbnRhY3QiLCJzZXRDaGF0Q29udGFjdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhdGFiIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJhY3RpdmVUYWIiLCJqaWQiLCJjdXJyZW50VXNlciIsInNldEFjdGl2ZXRhYiIsImFjdGl2ZU5hdiIsIm5ld0NvbnRhY3QiLCJUb2dnbGVUYWIiLCJ0YWIiLCJzZXRBY3RpdmVUYWIiLCJib3JkZXJCb3R0b20iLCJjaGF0ZWRlZFVzZXJzIiwiZmV0Y2hVc2VycyIsIm92ZXJmbG93Iiwic2Nyb2xsWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOzs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLGtCQUF3Q0Msc0RBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBc0NGLHNEQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBLE1BQU9HLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFNBQXRCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0osK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdHLFdBQVgsQ0FB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VCxXO0FBbUpTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mODMyNmMwODA0OTc5ZTUxMGNkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhY3RTZWFyY2ggZnJvbSBcIi4vY29udGFjdFNlYXJjaFwiO1xuaW1wb3J0IENoYXRlZFVzZXJzIGZyb20gXCIuL2NoYXRlZFVzZXJzXCI7XG5pbXBvcnQgQ2FsbHMgZnJvbSBcIi4vY2FsbHNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTWVzc2FnZVNxdWFyZSwgVXNlclBsdXMsIFBob25lLCBTZWFyY2gsIFBsdXMgfSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuaW1wb3J0IHsgTmF2LCBOYXZMaW5rLCBOYXZJdGVtLCBUYWJDb250ZW50LCBUYWJQYW5lIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7XG4gIHNldEFjdGl2ZVRhYixcbiAgY2hhdGVkZWRVc2VycyxcbiAgZmV0Y2hVc2VycyxcbiAgc2V0Um9zdGVyLFxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xuaW1wb3J0IHsgZ2V0Um9zdGVySXRlbXMgfSBmcm9tIFwiLi4vLi4vc3RhbnphL2NoYXRDbGllbnRcIjtcblxuY29uc3QgQ2hhdFNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hUb2dnbGUsIHNldFNlYXJjaFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtDaGF0Q29udGFjdCwgc2V0Q2hhdENvbnRhY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGF0YWIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWN0aXZlVGFiKTtcbiAgY29uc3QgamlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLmppZCk7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZXRhYl0gPSB1c2VTdGF0ZShcImNoYXRcIik7XG4gIGNvbnN0IGFjdGl2ZU5hdiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5uZXdDb250YWN0KTtcbiAgY29uc3QgVG9nZ2xlVGFiID0gKHRhYikgPT4ge1xuICAgIHNldEFjdGl2ZXRhYih0YWIpO1xuICAgIGlmICh0YWIgPT09IFwiY2hhdFwiKSB7XG4gICAgICBkaXNwYXRjaChzZXRBY3RpdmVUYWIoXCJjaGF0XCIpKTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNvbnRhY3RcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChzZXRBY3RpdmVUYWIoXCJjYWxsXCIpKTtcbiAgICB9XG4gIH07XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgbGV0IHJvc3RlckFyYXkgPSBnZXRSb3N0ZXJJdGVtcygpO1xuICAvLyAgIGRpc3BhdGNoKHNldFJvc3Rlcihyb3N0ZXJBcmF5KSk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdCBjdXN0b20tc2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXRpdGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPkNoYXQ8L2gyPlxuICAgICAgICAgICAgPGg0PlN0YXJ0IE5ldyBDb252ZXJzYXRpb248L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc20gc2VhcmNoIGNvbnRhY3Qtc2VhcmNoXCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hUb2dnbGUodHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgPFNlYXJjaCAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1pbmxpbmUgc2VhcmNoLWZvcm0gJHtcbiAgICAgICAgICAgICAgICBzZWFyY2hUb2dnbGUgPyBcIm9wZW5cIiA6IFwiXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWludGV4dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi5cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1jbG9zZSBjbG9zZS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoVG9nZ2xlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLXByaW1hcnkgYnRuLWZpeCBjaGF0LWNvbnQtdG9nZ2xlIG91dHNpZGVcIlxuICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoYXRDb250YWN0KCFDaGF0Q29udGFjdCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQbHVzIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXRhYiB0YWItc20gY2hhdC10YWJzIGxvZ28td2FycHBlclwiPlxuICAgICAgICA8TmF2XG4gICAgICAgICAgdGFic1xuICAgICAgICAgIGlkPVwibXlUYWJcIlxuICAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNlZmYxZjJcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24tZWZmZWN0IHN0ZXA0ICR7XG4gICAgICAgICAgICAgICAgYXRhYiA9PT0gXCJjaGF0XCIgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gVG9nZ2xlVGFiKFwiY2hhdFwiKX1cbiAgICAgICAgICAgICAgZGF0YS1pbnRybz1cIlN0YXJ0IGNoYXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVzc2FnZVNxdWFyZSAvPlxuICAgICAgICAgICAgICBDaGF0XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24tZWZmZWN0ICR7YXRhYiA9PT0gXCJjYWxsXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBUb2dnbGVUYWIoXCJjYWxsXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGhvbmUgLz5cbiAgICAgICAgICAgICAgY2FsbFxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cblxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uLWVmZmVjdCAke2F0YWIgPT09IFwiY29udGFjdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvZ2dsZVRhYihcImNvbnRhY3RcIik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhdGVkZWRVc2VycyhcImNvbnRhY3RcIikpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoVXNlcnMoKSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxVc2VyUGx1cyAvPlxuICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8L05hdj5cblxuICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2FjdGl2ZVRhYn0+XG4gICAgICAgICAgPFRhYlBhbmVcbiAgICAgICAgICAgIHRhYklkPVwiY2hhdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYWRlIHNob3dcIlxuICAgICAgICAgICAgaWQ9XCJjaGF0XCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjaGF0LXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoYXRlZFVzZXJzIHN0eWxlPXt7IG92ZXJmbG93OiBzY3JvbGxZIH19IC8+XG4gICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgIDxUYWJQYW5lXG4gICAgICAgICAgICB0YWJJZD1cImNhbGxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFkZSBzaG93XCJcbiAgICAgICAgICAgIGlkPVwiY2FsbFwiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY2hhdC10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYWxscyAvPlxuICAgICAgICAgIDwvVGFiUGFuZT5cblxuICAgICAgICAgIDxUYWJQYW5lXG4gICAgICAgICAgICB0YWJJZD1cImNvbnRhY3RcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFkZSBzaG93XCJcbiAgICAgICAgICAgIGlkPVwiY29udGFjdFwiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFjdC10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthY3RpdmVOYXYgPT09IFwiY29udGFjdFwiID8gPENvbnRhY3RTZWFyY2ggLz4gOiA8Q2hhdGVkVXNlcnMgLz59XG4gICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRTZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==