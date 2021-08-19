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
    document.getElementById("list-active").classList.add("active");
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "theme-tab",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      tabs: true,
      id: "myTab1",
      role: "tablist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
        className: "chat-main",
        children: SotedUsers.map(function (chatlist, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            id: "list-active",
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
            lineNumber: 48,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0ZWRVc2Vycy5qcyJdLCJuYW1lcyI6WyJjaGF0ZWRVc2VycyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1bm1vdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjb21wb25lbnRVbm1vdW50IiwicmVjZW50VVNlcnMiLCJjaGF0V2l0aElEIiwiY2hhdFdpdGgiLCJpZCIsImNoYW5nZUNoYXRDbGljayIsImUiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiVGlwaW4iLCJ0b2dnbGUiLCJjaGVja0hhc01lc3NhZ2VzIiwibWFwIiwiY2kiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbW92ZVJlY2VudFVzZXIiLCJ1c2VFZmZlY3QiLCJTb3RlZFVzZXJzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImxhc3RNZXNzYWdlQXQiLCJnZXRFbGVtZW50QnlJZCIsImNoYXRsaXN0IiwiaSIsInNldENoYXRXaXRoIiwibmFtZSIsImZpcnN0X25hbWUiLCJzdGF0dXMiLCJvbmxpbmVTdGF0dXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJMb2dvIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkaXNwbGF5IiwibWVzZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQ3JCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxnQkFBdEI7QUFBQSxHQUFELENBQTNCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSiwrREFBVyxDQUFDLFVBQUND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QUFwQixHQUNBLGFBREEsR0FFQSxjQUxHLGFBRFg7QUFBQSw0QkFTR0wsUUFBUSxDQUFDSyxNQUFULEtBQW9CLEdBQXBCLEdBQTBCLEVBQTFCLEdBQStCTCxRQUFRLENBQUNLO0FBVDNDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsR0FhQyxFQWhCSixFQWtCR0wsUUFBUSxDQUFDSyxNQUFULEtBQW9CLEdBQXBCLGdCQUNDO0FBQUssMkJBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNHTCxRQUFRLENBQUNLO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxHQUtDLEVBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJGLGFBR09KLENBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQW1FRCxTQXBFQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4RUQ7O0dBakhRbkMsVztVQUNVRSx1RCxFQUNERSx1RCxFQUNJQSx1RCxFQUNEQSx1RDs7O0FBK0dOSiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzZW5nZXIuNDQzZGQxYWZhMzcyNGZkZWU3M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgc2V0Q2hhdFdpdGgsIHJlbW92ZVJlY2VudFVzZXIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vMS5qcGdcIjtcclxuZnVuY3Rpb24gY2hhdGVkVXNlcnMoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVubW91bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY29tcG9uZW50VW5tb3VudCk7XHJcbiAgY29uc3QgcmVjZW50VVNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdGVkVXNlcnMpO1xyXG4gIGNvbnN0IGNoYXRXaXRoSUQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGguaWQpO1xyXG4gIGNvbnN0IGNoYW5nZUNoYXRDbGljayA9IChlKSA9PiB7XHJcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYXQtbWFpbiBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvLyAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIC8vIH0pO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBUaXBpbiA9IChlKSA9PiB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcInBpbmVkXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgY2hlY2tIYXNNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgIHJlY2VudFVTZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICBkaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1bm1vdW50KSB7XHJcbiAgICAgIGNoZWNrSGFzTWVzc2FnZXMoKTtcclxuICAgIH1cclxuICB9LCBbdW5tb3VudF0pO1xyXG5cclxuICBsZXQgU290ZWRVc2VycyA9IHJlY2VudFVTZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShiLmxhc3RNZXNzYWdlQXQpIC0gbmV3IERhdGUoYS5sYXN0TWVzc2FnZUF0KTtcclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LWFjdGl2ZVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgPFRhYkNvbnRlbnQ+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAge1NvdGVkVXNlcnMubWFwKChjaGF0bGlzdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJsaXN0LWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NoYXRXaXRoSUQgPT09IGNoYXRsaXN0LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZUNoYXRDbGljayhlLCBjaGF0bGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENoYXRXaXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNoYXRsaXN0LmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGNoYXRsaXN0Lm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGF0bGlzdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBpID4gMCA/IGNoZWNrSGFzTWVzc2FnZXMoKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0xvZ299KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT57Y2hhdGxpc3QuZmlyc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57Y2hhdGxpc3QubWVzZ308L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXBpbjJcIiBvbkNsaWNrPXsoZSkgPT4gVGlwaW4oZSl9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2NoYXRsaXN0Lmxhc3RNZXNzYWdlQXR9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIlNlbmRpbmdcIiB8fCBcIkZhaWxlZFwiIHx8IFwiU2VlblwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdGxpc3Quc3RhdHVzID09PSBcIlNlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXRsaXN0LnN0YXR1cyA9PT0gXCJGYWlsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJmb250LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBzdGF0dXNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIjhcIiA/IFwiXCIgOiBjaGF0bGlzdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzID09PSBcIjhcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeSBzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0ZWRVc2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==