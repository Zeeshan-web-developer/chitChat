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
  var chatWithID = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.chatWith.id;
  });

  var changeChatClick = function changeChatClick(e) {
    // document.querySelectorAll(".chat-main li").forEach((item) => {
    //   item.classList.remove("active");
    // });
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    changeChatClick();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "theme-tab",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      tabs: true,
      id: "myTab1",
      role: "tablist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
        className: "chat-main",
        children: SotedUsers.map(function (chatlist, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "".concat(chatWithID === chatlist.id ? "active" : ""),
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
                  lineNumber: 74,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "details",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                  children: chatlist.first_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  children: chatlist.mesg
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
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
                  lineNumber: 86,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  children: chatlist.lastMessageAt
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 21
                }, _this), chatlist.status === "Sending" || "Failed" || "Seen" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  className: "".concat(chatlist.status === "Sending" ? "font-dark" : chatlist.status === "Failed" ? "font-danger" : "font-success", "  status"),
                  children: chatlist.status === "8" ? "" : chatlist.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 23
                }, _this) : "", chatlist.status === "8" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "badge badge-primary sm",
                  children: chatlist.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 23
                }, _this) : ""]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

_s(chatedUsers, "YpF6LBTuGnQTwWusfTCa1T76xho=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0ZWRVc2Vycy5qcyJdLCJuYW1lcyI6WyJjaGF0ZWRVc2VycyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1bm1vdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjb21wb25lbnRVbm1vdW50IiwicmVjZW50VVNlcnMiLCJjaGF0V2l0aElEIiwiY2hhdFdpdGgiLCJpZCIsImNoYW5nZUNoYXRDbGljayIsImUiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiVGlwaW4iLCJ0b2dnbGUiLCJjaGVja0hhc01lc3NhZ2VzIiwibWFwIiwiY2kiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbW92ZVJlY2VudFVzZXIiLCJ1c2VFZmZlY3QiLCJTb3RlZFVzZXJzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImxhc3RNZXNzYWdlQXQiLCJjaGF0bGlzdCIsImkiLCJzZXRDaGF0V2l0aCIsIm5hbWUiLCJmaXJzdF9uYW1lIiwic3RhdHVzIiwib25saW5lU3RhdHVzIiwiYmFja2dyb3VuZEltYWdlIiwiTG9nbyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsIm1lc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsZ0JBQXRCO0FBQUEsR0FBRCxDQUEzQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0osK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0Es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O0FBVDNDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsR0FhQyxFQWhCSixFQWtCR0wsUUFBUSxDQUFDSyxNQUFULEtBQW9CLEdBQXBCLGdCQUNDO0FBQUssMkJBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNHTCxRQUFRLENBQUNLO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxHQUtDLEVBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkYsYUFFT0osQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBa0VELFNBbkVBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZFRDs7R0FqSFFsQyxXO1VBQ1VFLHVELEVBQ0RFLHVELEVBQ0lBLHVELEVBQ0RBLHVEOzs7QUErR05KLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5ZTYxM2RlMzkxOTVkNzBjYTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdiwgVGFiQ29udGVudCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IHNldENoYXRXaXRoLCByZW1vdmVSZWNlbnRVc2VyIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLzEuanBnXCI7XHJcbmZ1bmN0aW9uIGNoYXRlZFVzZXJzKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1bm1vdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNvbXBvbmVudFVubW91bnQpO1xyXG4gIGNvbnN0IHJlY2VudFVTZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRlZFVzZXJzKTtcclxuICBjb25zdCBjaGF0V2l0aElEID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRXaXRoLmlkKTtcclxuICBjb25zdCBjaGFuZ2VDaGF0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0LW1haW4gbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgLy8gICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAvLyB9KTtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgVGlwaW4gPSAoZSkgPT4ge1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJwaW5lZFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoZWNrSGFzTWVzc2FnZXMgPSAoKSA9PiB7XHJcbiAgICByZWNlbnRVU2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgIGlmICghY2kuaGFzT3duUHJvcGVydHkoXCJtZXNnXCIpKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlUmVjZW50VXNlcihjaS5pZCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodW5tb3VudCkge1xyXG4gICAgICBjaGVja0hhc01lc3NhZ2VzKCk7XHJcbiAgICB9XHJcbiAgfSwgW3VubW91bnRdKTtcclxuXHJcbiAgbGV0IFNvdGVkVXNlcnMgPSByZWNlbnRVU2Vycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoYi5sYXN0TWVzc2FnZUF0KSAtIG5ldyBEYXRlKGEubGFzdE1lc3NhZ2VBdCk7XHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoYW5nZUNoYXRDbGljaygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgIDxOYXYgdGFicyBpZD1cIm15VGFiMVwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9OYXY+XHJcbiAgICAgIDxUYWJDb250ZW50PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGF0LW1haW5cIj5cclxuICAgICAgICAgIHtTb3RlZFVzZXJzLm1hcCgoY2hhdGxpc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2hhdFdpdGhJRCA9PT0gY2hhdGxpc3QuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hhdFdpdGgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2hhdGxpc3QuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogY2hhdGxpc3Qub25saW5lU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXRsaXN0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGkgPiAwID8gY2hlY2tIYXNNZXNzYWdlcygpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZmlsZSAgJHtjaGF0bGlzdC5vbmxpbmVTdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7TG9nb30pYCxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PntjaGF0bGlzdC5maXJzdF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntjaGF0bGlzdC5tZXNnfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktcGluMlwiIG9uQ2xpY2s9eyhlKSA9PiBUaXBpbihlKX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57Y2hhdGxpc3QubGFzdE1lc3NhZ2VBdH08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiU2VuZGluZ1wiIHx8IFwiRmFpbGVkXCIgfHwgXCJTZWVuXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdC5zdGF0dXMgPT09IFwiU2VuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhdGxpc3Quc3RhdHVzID09PSBcIkZhaWxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZvbnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIHN0YXR1c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gXCJcIiA6IGNoYXRsaXN0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXMgPT09IFwiOFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IHNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvVGFiQ29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRlZFVzZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9