webpackHotUpdate_N_E("pages/messenger",{

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
  var chatWithID = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.chatWith.id;
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
            onClick: function onClick(e) {
              changeChatClick(e, chatlist);
              dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["setChatWith"])({
                name: chatlist.first_name,
                status: chatlist.onlineStatus,
                id: chatlist.id
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
                  lineNumber: 71,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "details",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                  children: chatlist.first_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  children: chatlist.mesg
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
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
                  lineNumber: 83,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  children: chatlist.lastMessageAt
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 21
                }, _this), chatlist.status === "Sending" || "Failed" || "Seen" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  className: "".concat(chatlist.status === "Sending" ? "font-dark" : chatlist.status === "Failed" ? "font-danger" : "font-success", "  status"),
                  children: chatlist.status === "8" ? "" : chatlist.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 23
                }, _this) : "", chatlist.status === "8" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "badge badge-primary sm",
                  children: chatlist.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 23
                }, _this) : ""]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
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

_s(chatedUsers, "ZysX86+L/kbnxWTE90lmVbpy9S4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0ZWRVc2Vycy5qcyJdLCJuYW1lcyI6WyJjaGF0ZWRVc2VycyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1bm1vdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjb21wb25lbnRVbm1vdW50IiwicmVjZW50VVNlcnMiLCJjaGF0V2l0aElEIiwiY2hhdFdpdGgiLCJpZCIsImNoYW5nZUNoYXRDbGljayIsImUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiVGlwaW4iLCJ0b2dnbGUiLCJjaGVja0hhc01lc3NhZ2VzIiwibWFwIiwiY2kiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbW92ZVJlY2VudFVzZXIiLCJ1c2VFZmZlY3QiLCJTb3RlZFVzZXJzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImxhc3RNZXNzYWdlQXQiLCJjaGF0bGlzdCIsImkiLCJzZXRDaGF0V2l0aCIsIm5hbWUiLCJmaXJzdF9uYW1lIiwic3RhdHVzIiwib25saW5lU3RhdHVzIiwiYmFja2dyb3VuZEltYWdlIiwiTG9nbyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsIm1lc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsZ0JBQXRCO0FBQUEsR0FBRCxDQUEzQjtBQUNBLE1BQU1D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LEVBQTFCLEdBQStCTCxRQUFRLENBQUNLO0FBVDNDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsR0FhQyxFQWhCSixFQWtCR0wsUUFBUSxDQUFDSyxNQUFULEtBQW9CLEdBQXBCLGdCQUNDO0FBQUssMkJBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNHTCxRQUFRLENBQUNLO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxHQUtDLEVBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkYsYUFFT0osQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBa0VELFNBbkVBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZFRDs7R0E5R1F0QyxXO1VBQ1VFLHVELEVBQ0RFLHVELEVBQ0lBLHVELEVBQ0RBLHVEOzs7QUE0R05KLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3Nlbmdlci4yMTJkYTFhNGU2ODRhNjdlYjM4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXYsIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZXRDaGF0V2l0aCwgcmVtb3ZlUmVjZW50VXNlciB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi8xLmpwZ1wiO1xyXG5mdW5jdGlvbiBjaGF0ZWRVc2VycygpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdW5tb3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jb21wb25lbnRVbm1vdW50KTtcclxuICBjb25zdCByZWNlbnRVU2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0ZWRVc2Vycyk7XHJcbiAgY29uc3QgY2hhdFdpdGhJRCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0V2l0aC5pZCk7XHJcbiAgY29uc3QgY2hhbmdlQ2hhdENsaWNrID0gKGUpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdC1tYWluIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFRpcGluID0gKGUpID0+IHtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwicGluZWRcIik7XHJcbiAgfTtcclxuICBjb25zdCBjaGVja0hhc01lc3NhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmVjZW50VVNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVubW91bnQpIHtcclxuICAgICAgY2hlY2tIYXNNZXNzYWdlcygpO1xyXG4gICAgfVxyXG4gIH0sIFt1bm1vdW50XSk7XHJcblxyXG4gIGxldCBTb3RlZFVzZXJzID0gcmVjZW50VVNlcnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGIubGFzdE1lc3NhZ2VBdCkgLSBuZXcgRGF0ZShhLmxhc3RNZXNzYWdlQXQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgPFRhYkNvbnRlbnQ+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAge1NvdGVkVXNlcnMubWFwKChjaGF0bGlzdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtgJHtjaGF0V2l0aElEID09PSBjaGF0bGlzdC5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICBzZXRDaGF0V2l0aCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaGF0bGlzdC5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjaGF0bGlzdC5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhdGxpc3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgaSA+IDAgPyBjaGVja0hhc01lc3NhZ2VzKCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICAke2NoYXRsaXN0Lm9ubGluZVN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtMb2dvfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXRsaXN0LmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2NoYXRsaXN0Lm1lc2d9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1waW4yXCIgb25DbGljaz17KGUpID0+IFRpcGluKGUpfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntjaGF0bGlzdC5sYXN0TWVzc2FnZUF0fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCIgfHwgXCJGYWlsZWRcIiB8fCBcIlNlZW5cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRsaXN0LnN0YXR1cyA9PT0gXCJTZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0bGlzdC5zdGF0dXMgPT09IFwiRmFpbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm9udC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgc3RhdHVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyBcIlwiIDogY2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1cyA9PT0gXCI4XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnkgc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhdGVkVXNlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=