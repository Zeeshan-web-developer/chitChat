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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jaGF0ZWRVc2Vycy5qcyJdLCJuYW1lcyI6WyJjaGF0ZWRVc2VycyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1bm1vdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjb21wb25lbnRVbm1vdW50IiwicmVjZW50VVNlcnMiLCJjaGF0V2l0aElEIiwiY2hhdFdpdGgiLCJpZCIsImNoYW5nZUNoYXRDbGljayIsImUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiYWRkIiwicXVlcnlTZWxlY3RvciIsIlRpcGluIiwidG9nZ2xlIiwiY2hlY2tIYXNNZXNzYWdlcyIsIm1hcCIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwidXNlRWZmZWN0IiwiU290ZWRVc2VycyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJsYXN0TWVzc2FnZUF0IiwiY2hhdGxpc3QiLCJpIiwic2V0Q2hhdFdpdGgiLCJuYW1lIiwiZmlyc3RfbmFtZSIsInN0YXR1cyIsIm9ubGluZVN0YXR1cyIsImJhY2tncm91bmRJbWFnZSIsIkxvZ28iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJtZXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLGdCQUF0QjtBQUFBLEdBQUQs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UyxZQUNQTixRQUFRLENBQUNNLFlBQVQsS0FBMEIsU0FBMUIsR0FDSSxXQURKLEdBRUlOLFFBQVEsQ0FBQ00sWUFBVCxLQUEwQixNQUExQixHQUNBLGFBREEsR0FFQSxjQUxHLGFBRFg7QUFBQSw0QkFTR04sUUFBUSxDQUFDTSxZQUFULEtBQTBCLEdBQTFCLEdBQ0csRUFESCxHQUVHTixRQUFRLENBQUNNO0FBWGY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRCxHQWlCQyxFQXBCSixFQXNCR04sUUFBUSxDQUFDTSxZQUFULEtBQTBCLFNBQTFCLGdCQUNDO0FBQUssMkJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxHQUdDLEVBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJGLGFBRU9MLENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQXFFRCxTQXRFQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnRkQ7O0dBbEhReEMsVztVQUNVRSx1RCxFQUNERSx1RCxFQUNJQSx1RCxFQUNEQSx1RDs7O0FBZ0hOSiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzZW5nZXIuMDljYTZmNDhiY2EzZjcwZGNlZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgc2V0Q2hhdFdpdGgsIHJlbW92ZVJlY2VudFVzZXIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vMS5qcGdcIjtcclxuZnVuY3Rpb24gY2hhdGVkVXNlcnMoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVubW91bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY29tcG9uZW50VW5tb3VudCk7XHJcbiAgY29uc3QgcmVjZW50VVNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdGVkVXNlcnMpO1xyXG4gIGNvbnN0IGNoYXRXaXRoSUQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGguaWQpO1xyXG4gIGNvbnN0IGNoYW5nZUNoYXRDbGljayA9IChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYXQtbWFpbiBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJjdXJyZW50IHRhcmdldFwiLCBlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBUaXBpbiA9IChlKSA9PiB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcInBpbmVkXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgY2hlY2tIYXNNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgIHJlY2VudFVTZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICBkaXNwYXRjaChyZW1vdmVSZWNlbnRVc2VyKGNpLmlkKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1bm1vdW50KSB7XHJcbiAgICAgIGNoZWNrSGFzTWVzc2FnZXMoKTtcclxuICAgIH1cclxuICB9LCBbdW5tb3VudF0pO1xyXG5cclxuICBsZXQgU290ZWRVc2VycyA9IHJlY2VudFVTZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShiLmxhc3RNZXNzYWdlQXQpIC0gbmV3IERhdGUoYS5sYXN0TWVzc2FnZUF0KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgIDxOYXYgdGFicyBpZD1cIm15VGFiMVwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9OYXY+XHJcbiAgICAgIDxUYWJDb250ZW50PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGF0LW1haW4gY3VzdG9tLXNjcm9sbFwiPlxyXG4gICAgICAgICAge1NvdGVkVXNlcnMubWFwKChjaGF0bGlzdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjaGF0V2l0aElEID09PSBjaGF0bGlzdC5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvPVwiYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUpO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICBzZXRDaGF0V2l0aCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaGF0bGlzdC5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjaGF0bGlzdC5vbmxpbmVTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhdGxpc3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgaSA+IDAgPyBjaGVja0hhc01lc3NhZ2VzKCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICAke2NoYXRsaXN0Lm9ubGluZVN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtMb2dvfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXRsaXN0LmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2NoYXRsaXN0Lm1lc2d9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1waW4yXCIgb25DbGljaz17KGUpID0+IFRpcGluKGUpfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntjaGF0bGlzdC5sYXN0TWVzc2FnZUF0fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0Lm9ubGluZVN0YXR1cyA9PT0gXCJvbmxpbmVcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgIFwib2ZmbGluZVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgXCJidXN5XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0bGlzdC5vbmxpbmVTdGF0dXMgPT09IFwib2ZmbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZm9udC1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhdGxpc3Qub25saW5lU3RhdHVzID09PSBcImJ1c3lcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJmb250LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBzdGF0dXNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hhdGxpc3Qub25saW5lU3RhdHVzID09PSBcIjhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhdGxpc3Qub25saW5lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXRsaXN0Lm9ubGluZVN0YXR1cyA9PT0gXCJvZmZsaW5lXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnkgc21cIj4yPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0ZWRVc2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==