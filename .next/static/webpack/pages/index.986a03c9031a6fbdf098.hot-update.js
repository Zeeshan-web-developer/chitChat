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
      setTimeValues = _useState2[1]; // useEffect(() => {
  //   timer.start();
  //   timer.addEventListener("secondsUpdated", tick);
  //   return () => {
  //     timer.removeEventListener("secondsUpdated", tick);
  //   };
  // }, []);


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

_s(ChitChat, "IUIyPyuEzkJYPbE8FXV5H8j3Zq4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9jaGF0Qm9hcmQvaW5kZXguanMiXSwibmFtZXMiOlsiQ2hpdENoYXQiLCJjdXJyZW50VGFiIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjaGF0Ym9hcmQiLCJ1c2VTdGF0ZSIsIkVhc3lUaW1lciIsInRpbWVyIiwic2V0VGltZXIiLCJ0aW1lVmFsdWVzIiwic2V0VGltZVZhbHVlcyIsInRpY2siLCJlIiwidGltZVZhbHVlIiwiZ2V0VGltZVZhbHVlcyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFNBQXRCO0FBQUEsR0FBRCxDQUE5Qjs7QUFDQSxrQkFBMEJDLHNEQUFRLENBQUMsSUFBSUMsZ0RBQUosRUFBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFvQ0gsc0RBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT0ksVUFBUDtBQUFBLE1BQW1CQyxhQUFuQixpQkFIcUIsQ0FLckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLENBQUQsRUFBTztBQUNsQixRQUFNQyxTQUFTLEdBQUdOLEtBQUssQ0FBQ08sYUFBTixHQUFzQkMsUUFBdEIsRUFBbEI7QUFDQUwsaUJBQWEsQ0FBQ0csU0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUE2QyxNQUFFLEVBQUMsU0FBaEQ7QUFBQSxjQUNHYixVQUFVLEtBQUssTUFBZixnQkFBd0IscUVBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF4QixnQkFBbUMscUVBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQXZCRDs7R0FBTUQsUTtVQUNlRSx1RDs7O0tBRGZGLFE7QUF5QlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4NmEwM2M5MDMxYTZmYmRmMDk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENhbGwgZnJvbSBcIi4vY2FsbFwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IEVhc3lUaW1lciBmcm9tIFwiZWFzeXRpbWVyXCI7XG5cbmNvbnN0IENoaXRDaGF0ID0gKCkgPT4ge1xuICBjb25zdCBjdXJyZW50VGFiID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRib2FyZCk7XG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUobmV3IEVhc3lUaW1lcigpKTtcbiAgY29uc3QgW3RpbWVWYWx1ZXMsIHNldFRpbWVWYWx1ZXNdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICB0aW1lci5zdGFydCgpO1xuICAvLyAgIHRpbWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzZWNvbmRzVXBkYXRlZFwiLCB0aWNrKTtcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgdGltZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNlY29uZHNVcGRhdGVkXCIsIHRpY2spO1xuICAvLyAgIH07XG4gIC8vIH0sIFtdKTtcblxuICBjb25zdCB0aWNrID0gKGUpID0+IHtcbiAgICBjb25zdCB0aW1lVmFsdWUgPSB0aW1lci5nZXRUaW1lVmFsdWVzKCkudG9TdHJpbmcoKTtcbiAgICBzZXRUaW1lVmFsdWVzKHRpbWVWYWx1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGl0Y2hhdC1tYWluIHNtYWxsLXNpZGViYXJcIiBpZD1cImNvbnRlbnRcIj5cbiAgICAgIHtjdXJyZW50VGFiID09PSBcImNoYXRcIiA/IDxDaGF0IC8+IDogPENoYXQgLz59XG4gICAgICB7LyogPENvbnRhY3QgLz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGl0Q2hhdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=