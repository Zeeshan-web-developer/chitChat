webpackHotUpdate_N_E("pages/messenger",{

/***/ "./stanza/chatClient.js":
/*!******************************!*\
  !*** ./stanza/chatClient.js ***!
  \******************************/
/*! exports provided: default, getContacts, getRosterItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chatClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContacts", function() { return getContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRosterItems", function() { return getRosterItems; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var stanza__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stanza */ "./node_modules/stanza/module.js");



var client;
function chatClient(username, password) {
  client = stanza__WEBPACK_IMPORTED_MODULE_2__["createClient"]({
    jid: username,
    password: password,
    transports: {
      websocket: "ws://mongoose.mysmartpbx.org:5280/ws-xmpp",
      bosh: "false"
    },
    rosterVer: "ver14"
  }); // client.on("*", console.log);

  client.on("session:started", function () {
    // client.subscribe("sumanth@mongoose.mysmartpbx.org");
    console.log("session started"); // getContacts();

    client.sendPresence();
  });
  client.on("auth:failed", function () {
    console.log("xmpp authentication failed");
  });
  return client;
}
var getContacts = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var contacts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.getRoster();

          case 2:
            contacts = _context.sent;
            console.log("all contacts ", contacts.items);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getContacts() {
    return _ref.apply(this, arguments);
  };
}();
var getRosterItems = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var contacts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return client.getRoster();

          case 2:
            contacts = _context2.sent;
            return _context2.abrupt("return", contacts.items);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getRosterItems() {
    return _ref2.apply(this, arguments);
  };
}();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhbnphL2NoYXRDbGllbnQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJYTVBQIiwiamlkIiwidHJhbnNwb3J0cyIsIndlYnNvY2tldCIsImJvc2giLCJyb3N0ZXJWZXIiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kUHJlc2VuY2UiLCJnZXRDb250YWN0cyIsImdldFJvc3RlciIsImNvbnRhY3RzIiwiaXRlbXMiLCJnZXRSb3N0ZXJJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQUlBLE1BQUo7QUFFZSxTQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE4QkMsUUFBOUIsRUFBd0M7QUFDckRILFFBQU0sR0FBR0ksbURBQUEsQ0FBa0I7QUFDekJDLE9BQUcsRUFBRUgsUUFEb0I7QUFFekJDLFlBQVEsRUFBUkEsUUFGeUI7QUFHekJHLGNBQVUsRUFBRTtBQUNWQyxlQUFTLEVBQUUsMkNBREQ7QUFFVkMsVUFBSSxFQUFFO0FBRkksS0FIYTtBQU96QkMsYUFBUyxFQUFFO0FBUGMsR0FBbEIsQ0FBVCxDQURxRCxDQVVyRDs7QUFDQVQsUUFBTSxDQUFDVSxFQUFQLENBQVUsaUJBQVYsRUFBNkIsWUFBTTtBQUNqQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUZpQyxDQUdqQzs7QUFDQVosVUFBTSxDQUFDYSxZQUFQO0FBQ0QsR0FMRDtBQU9BYixRQUFNLENBQUNVLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLFlBQU07QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0QsR0FGRDtBQUdBLFNBQU9aLE1BQVA7QUFDRDtBQUVNLElBQU1jLFdBQVc7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNKZCxNQUFNLENBQUNlLFNBQVAsRUFESTs7QUFBQTtBQUNyQkMsb0JBRHFCO0FBRXpCTCxtQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkksUUFBUSxDQUFDQyxLQUF0Qzs7QUFGeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWEgsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjtBQUtBLElBQU1JLGNBQWM7QUFBQSwrTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNQbEIsTUFBTSxDQUFDZSxTQUFQLEVBRE87O0FBQUE7QUFDeEJDLG9CQUR3QjtBQUFBLDhDQUdyQkEsUUFBUSxDQUFDQyxLQUhZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRDLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLjc2YTI1OTAyODNhMjM5M2RmYmM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYTVBQIGZyb20gXCJzdGFuemFcIjtcclxubGV0IGNsaWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXRDbGllbnQodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY2xpZW50ID0gWE1QUC5jcmVhdGVDbGllbnQoe1xyXG4gICAgamlkOiB1c2VybmFtZSxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgdHJhbnNwb3J0czoge1xyXG4gICAgICB3ZWJzb2NrZXQ6IFwid3M6Ly9tb25nb29zZS5teXNtYXJ0cGJ4Lm9yZzo1MjgwL3dzLXhtcHBcIixcclxuICAgICAgYm9zaDogXCJmYWxzZVwiLFxyXG4gICAgfSxcclxuICAgIHJvc3RlclZlcjogXCJ2ZXIxNFwiLFxyXG4gIH0pO1xyXG4gIC8vIGNsaWVudC5vbihcIipcIiwgY29uc29sZS5sb2cpO1xyXG4gIGNsaWVudC5vbihcInNlc3Npb246c3RhcnRlZFwiLCAoKSA9PiB7XHJcbiAgICAvLyBjbGllbnQuc3Vic2NyaWJlKFwic3VtYW50aEBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvbiBzdGFydGVkXCIpO1xyXG4gICAgLy8gZ2V0Q29udGFjdHMoKTtcclxuICAgIGNsaWVudC5zZW5kUHJlc2VuY2UoKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwiYXV0aDpmYWlsZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ4bXBwIGF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiKTtcclxuICB9KTtcclxuICByZXR1cm4gY2xpZW50O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29udGFjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhY3RzID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG4gIGNvbnNvbGUubG9nKFwiYWxsIGNvbnRhY3RzIFwiLCBjb250YWN0cy5pdGVtcyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Um9zdGVySXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhY3RzID0gYXdhaXQgY2xpZW50LmdldFJvc3RlcigpO1xyXG5cclxuICByZXR1cm4gY29udGFjdHMuaXRlbXM7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=