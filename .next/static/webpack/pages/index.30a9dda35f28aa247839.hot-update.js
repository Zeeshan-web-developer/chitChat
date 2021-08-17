webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/chatBoard/index.js":
/*!***************************************!*\
  !*** ./containers/chatBoard/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat */ "./containers/chatBoard/chat.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call */ "./containers/chatBoard/call.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./containers/chatBoard/contact.js");
/* harmony import */ var easytimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! easytimer */ "./node_modules/easytimer/src/easytimer.js");
/* harmony import */ var easytimer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(easytimer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\chat\\containers\\chatBoard\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var ChitChat = function ChitChat() {
  _s();

  var currentTab = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.chatboard;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new easytimer__WEBPACK_IMPORTED_MODULE_5___default.a()),
      timer = _useState[0],
      setTimer = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      timeValues = _useState2[0],
      setTimeValues = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    timer.start();
    timer.addEventListener("secondsUpdated", tick);
    return function () {
      timer.removeEventListener("secondsUpdated", tick);
    };
  }, []);

  var tick = function tick(e) {
    var timeValue = timer.getTimeValues().toString();
    setTimeValues(timeValue);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "chitchat-main small-sidebar",
    id: "content",
    children: currentTab === "chat" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chat__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 32
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chat__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 43
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(ChitChat, "KuD0Oo70saenqOV556J7GlMEnqc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = ChitChat;
/* harmony default export */ __webpack_exports__["default"] = (ChitChat);

var _c;

$RefreshReg$(_c, "ChitChat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9jaGF0Qm9hcmQvaW5kZXguanMiXSwibmFtZXMiOlsiQ2hpdENoYXQiLCJjdXJyZW50VGFiIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjaGF0Ym9hcmQiLCJ1c2VTdGF0ZSIsIkVhc3lUaW1lciIsInRpbWVyIiwic2V0VGltZXIiLCJ0aW1lVmFsdWVzIiwic2V0VGltZVZhbHVlcyIsInVzZUVmZmVjdCIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRpY2siLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsInRpbWVWYWx1ZSIsImdldFRpbWVWYWx1ZXMiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxVQUFVLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxTQUF0QjtBQUFBLEdBQUQsQ0FBOUI7O0FBQ0Esa0JBQTBCQyxzREFBUSxDQUFDLElBQUlDLGdEQUFKLEVBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBb0NILHNEQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9JLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkSixTQUFLLENBQUNLLEtBQU47QUFDQUwsU0FBSyxDQUFDTSxnQkFBTixDQUF1QixnQkFBdkIsRUFBeUNDLElBQXpDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hQLFdBQUssQ0FBQ1EsbUJBQU4sQ0FBMEIsZ0JBQTFCLEVBQTRDRCxJQUE1QztBQUNELEtBRkQ7QUFHRCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNFLENBQUQsRUFBTztBQUNsQixRQUFNQyxTQUFTLEdBQUdWLEtBQUssQ0FBQ1csYUFBTixHQUFzQkMsUUFBdEIsRUFBbEI7QUFDQVQsaUJBQWEsQ0FBQ08sU0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUE2QyxNQUFFLEVBQUMsU0FBaEQ7QUFBQSxjQUNHakIsVUFBVSxLQUFLLE1BQWYsZ0JBQXdCLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBeEIsZ0JBQW1DLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0F2QkQ7O0dBQU1ELFE7VUFDZUUsdUQ7OztLQURmRixRO0FBeUJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMGE5ZGRhMzVmMjhhYTI0NzgzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDYWxsIGZyb20gXCIuL2NhbGxcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBFYXN5VGltZXIgZnJvbSBcImVhc3l0aW1lclwiO1xuXG5jb25zdCBDaGl0Q2hhdCA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFRhYiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0Ym9hcmQpO1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKG5ldyBFYXN5VGltZXIoKSk7XG4gIGNvbnN0IFt0aW1lVmFsdWVzLCBzZXRUaW1lVmFsdWVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGltZXIuc3RhcnQoKTtcbiAgICB0aW1lci5hZGRFdmVudExpc3RlbmVyKFwic2Vjb25kc1VwZGF0ZWRcIiwgdGljayk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRpbWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWNvbmRzVXBkYXRlZFwiLCB0aWNrKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgdGltZVZhbHVlID0gdGltZXIuZ2V0VGltZVZhbHVlcygpLnRvU3RyaW5nKCk7XG4gICAgc2V0VGltZVZhbHVlcyh0aW1lVmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpdGNoYXQtbWFpbiBzbWFsbC1zaWRlYmFyXCIgaWQ9XCJjb250ZW50XCI+XG4gICAgICB7Y3VycmVudFRhYiA9PT0gXCJjaGF0XCIgPyA8Q2hhdCAvPiA6IDxDaGF0IC8+fVxuICAgICAgey8qIDxDb250YWN0IC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hpdENoYXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9