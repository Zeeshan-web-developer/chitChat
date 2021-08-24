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
    document.querySelectorAll(".chat-main li").forEach(function (item) {
      item.classList.remove("active");
    });
    console.log("current target", e.currentTarget);
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
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
        className: "chat-main custom-scroll",
        children: SotedUsers.map(function (chatlist, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "".concat(chatWithID === chatlist.id ? "active" : ""),
            "data-to": "blank",
            onClick: function onClick(e) {
              changeChatClick(e);
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
                  lineNumber: 73,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "details",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                  children: chatlist.first_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  children: chatlist.mesg
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
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
                  lineNumber: 85,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  children: chatlist.lastMessageAt
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 21
                }, _this), chatlist.onlineStatus === "online" || "offline" || "busy" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
                  className: "".concat(chatlist.onlineStatus === "offline" ? "font-dark" : chatlist.onlineStatus === "busy" ? "font-danger" : "font-success", "  status"),
                  children: chatlist.onlineStatus === "8" ? "" : chatlist.onlineStatus
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 23
                }, _this) : "", chatlist.onlineStatus === "offline" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "badge badge-primary sm",
                  children: "2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 23
                }, _this) : ""]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0ZWRVc2Vycy5qcyJdLCJuYW1lcyI6WyJjaGF0ZWRVc2VycyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1bm1vdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjb21wb25lbnRVbm1vdW50IiwicmVjZW50VVNlcnMiLCJjaGF0V2l0aElEIiwiY2hhdFdpdGgiLCJpZCIsImNoYW5nZUNoYXRDbGljayIsImUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiYWRkIiwicXVlcnlTZWxlY3RvciIsIlRpcGluIiwidG9nZ2xlIiwiY2hlY2tIYXNNZXNzYWdlcyIsIm1hcCIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwidXNlRWZmZWN0IiwiU290ZWRVc2VycyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJsYXN0TWVzc2FnZUF0IiwiY2hhdGxpc3QiLCJpIiwic2V0Q2hhdFdpdGgiLCJuYW1lIiwiZmlyc3RfbmFtZSIsInN0YXR1cyIsIm9ubGluZVN0YXR1cyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJtZXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLGdCQUF0QjtBQUFBLEdBQUQs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UyxZQUNQTixRQUFRLENBQUNNLFlBQVQsS0FBMEIsU0FBMUIsR0FDSSxXQURKLEdBRUlOLFFBQVEsQ0FBQ00sWUFBVCxLQUEwQixNQUExQixHQUNBLGFBREEsR0FFQSxjQUxHLGFBRFg7QUFBQSw0QkFTR04sUUFBUSxDQUFDTSxZQUFULEtBQTBCLEdBQTFCLEdBQ0csRUFESCxHQUVHTixRQUFRLENBQUNNO0FBWGY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRCxHQWlCQyxFQXBCSixFQXNCR04sUUFBUSxDQUFDTSxZQUFULEtBQTBCLFNBQTFCLGdCQUNDO0FBQUssMkJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxHQUdDLEVBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJGLGFBRU9MLENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQXFFRCxTQXRFQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnRkQ7O0dBbEhReEMsVztVQUNVRSx1RCxFQUNERSx1RCxFQUNJQSx1RCxFQUNEQSx1RDs7O0FBZ0hOSiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOWNhNmY0OGJjYTNmNzBkY2VmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXYsIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZXRDaGF0V2l0aCwgcmVtb3ZlUmVjZW50VXNlciB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi8xLmpwZ1wiO1xyXG5mdW5jdGlvbiBjaGF0ZWRVc2VycygpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdW5tb3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jb21wb25lbnRVbm1vdW50KTtcclxuICBjb25zdCByZWNlbnRVU2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0ZWRVc2Vycyk7XHJcbiAgY29uc3QgY2hhdFdpdGhJRCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0V2l0aC5pZCk7XHJcbiAgY29uc3QgY2hhbmdlQ2hhdENsaWNrID0gKGUpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdC1tYWluIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgdGFyZ2V0XCIsIGUuY3VycmVudFRhcmdldCk7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFRpcGluID0gKGUpID0+IHtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwicGluZWRcIik7XHJcbiAgfTtcclxuICBjb25zdCBjaGVja0hhc01lc3NhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmVjZW50VVNlcnMubWFwKChjaSkgPT4ge1xyXG4gICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVubW91bnQpIHtcclxuICAgICAgY2hlY2tIYXNNZXNzYWdlcygpO1xyXG4gICAgfVxyXG4gIH0sIFt1bm1vdW50XSk7XHJcblxyXG4gIGxldCBTb3RlZFVzZXJzID0gcmVjZW50VVNlcnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGIubGFzdE1lc3NhZ2VBdCkgLSBuZXcgRGF0ZShhLmxhc3RNZXNzYWdlQXQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgPFRhYkNvbnRlbnQ+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpbiBjdXN0b20tc2Nyb2xsXCI+XHJcbiAgICAgICAgICB7U290ZWRVc2Vycy5tYXAoKGNoYXRsaXN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NoYXRXaXRoSUQgPT09IGNoYXRsaXN0LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgIGRhdGEtdG89XCJibGFua1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSk7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENoYXRXaXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNoYXRsaXN0LmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGNoYXRsaXN0Lm9ubGluZVN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGF0bGlzdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBpID4gMCA/IGNoZWNrSGFzTWVzc2FnZXMoKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgICR7Y2hhdGxpc3Qub25saW5lU3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0xvZ299KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT57Y2hhdGxpc3QuZmlyc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57Y2hhdGxpc3QubWVzZ308L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXBpbjJcIiBvbkNsaWNrPXsoZSkgPT4gVGlwaW4oZSl9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2NoYXRsaXN0Lmxhc3RNZXNzYWdlQXR9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Qub25saW5lU3RhdHVzID09PSBcIm9ubGluZVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgXCJvZmZsaW5lXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICBcImJ1c3lcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRsaXN0Lm9ubGluZVN0YXR1cyA9PT0gXCJvZmZsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmb250LWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0bGlzdC5vbmxpbmVTdGF0dXMgPT09IFwiYnVzeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZvbnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIHN0YXR1c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGF0bGlzdC5vbmxpbmVTdGF0dXMgPT09IFwiOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0bGlzdC5vbmxpbmVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Qub25saW5lU3RhdHVzID09PSBcIm9mZmxpbmVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeSBzbVwiPjI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvVGFiQ29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRlZFVzZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9