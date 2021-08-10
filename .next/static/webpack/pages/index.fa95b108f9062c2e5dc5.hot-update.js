webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/leftSidebar/contactSearch.js":
/*!*************************************************!*\
  !*** ./containers/leftSidebar/contactSearch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datetime */ "./containers/leftSidebar/datetime.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\chat\\containers\\leftSidebar\\contactSearch.js",
    _s = $RefreshSig$();










function form() {
  _s();

  var _jsxDEV2,
      _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var accountId = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.accountId;
  });
  var usersP = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.users;
  });
  var recentUsers = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.chatedUsers;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      searchTerm = _useState[0],
      setSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("contacts"),
      chatSubTab = _useState2[0],
      setChatSubTab = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["fetchUsers"])());
  }, []);

  var addNew = function addNew(item, e) {
    var found = false;

    for (var i = 0; i < recentUsers.length; i++) {
      if (recentUsers[i].id === item.id) {
        found = true;
        break;
      }
    }

    if (!found) {
      recentUsers.map(function (ci) {
        if (!ci.hasOwnProperty("mesg")) {
          dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["removeRecentUser"])(ci.id));
        }
      });
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["addNewUSer"])({
        id: item.id,
        first_name: item.first_name,
        lastMessageAt: "2021-08-07 10:18:32",
        mesg: "last messsage"
      }));
    }
  };

  var changeChatClick = function changeChatClick(e) {
    document.querySelectorAll(".chat-main li").forEach(function (item) {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    document.querySelector(".sidebar-toggle").classList.add("mobile-menu");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], (_jsxDEV2 = {
        type: "email",
        name: "email"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "type", "search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "placeholder", "Search"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "onChange", function onChange(e) {
        return setSearch(e.target.value);
      }), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "theme-tab",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
        tabs: true,
        id: "myTab1",
        role: "tablist"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["TabContent"], {
        activeTab: chatSubTab,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
          className: "chat-main",
          children: usersP.length > 0 && usersP[0].filter(function (data) {
            if (searchTerm == null) {
              return data;
            } else if (data.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return data;
            }
          }).map(function (chatlist, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "".concat(1 === chatlist.id ? "active" : ""),
              onClick: function onClick(e) {
                changeChatClick(e, chatlist);
                dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["setChatWith"])(chatlist.first_name));
                dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["setActiveTab"])("chat"));
                dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["chatededUsers"])("new"));
                addNew(chatlist, e);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "chat-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  className: "profile  ".concat(chatlist.last_name),
                  style: {
                    backgroundImage: "url('assets/images/".concat(chatlist.thumb, "')"),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
                    className: "bg-img",
                    src: "assets/images/".concat(chatlist.thumb),
                    alt: "Avatar",
                    style: {
                      display: "none"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  className: "details",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h5", {
                    children: chatlist.first_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h6", {
                    children: "Team Leader"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  className: "date-status",
                  children: chatlist.last_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 23
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

_s(form, "jo0EWhm3+qExB+YeHatItL6Ed1g=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (form);

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

/***/ }),

/***/ "./containers/leftSidebar/datetime.js":
/*!********************************************!*\
  !*** ./containers/leftSidebar/datetime.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dateTime; });
function timeZone() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var offset = date.getTimezoneOffset();
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  var minutesOut = minutes > 0 ? ":" + ("0" + minutes).slice(-2) : "";
  return (offset < 0 ? "+" : "-") + hours + minutesOut;
}

function dateTime() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$date = options.date,
      date = _options$date === void 0 ? new Date() : _options$date,
      _options$local = options.local,
      local = _options$local === void 0 ? true : _options$local,
      _options$showTimeZone = options.showTimeZone,
      showTimeZone = _options$showTimeZone === void 0 ? false : _options$showTimeZone,
      _options$showMillisec = options.showMilliseconds,
      showMilliseconds = _options$showMillisec === void 0 ? false : _options$showMillisec;

  if (local) {
    // Offset the date so it will return the correct value when getting the ISO string.
    date = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  }

  var end = "";

  if (showTimeZone) {
    end = " UTC" + (local ? timeZone(date) : "");
  }

  if (showMilliseconds && date.getUTCMilliseconds() > 0) {
    end = " ".concat(date.getUTCMilliseconds(), "ms").concat(end);
  }

  return date.toISOString().replace(/T/, " ").replace(/\..+/, end);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL2xlZnRTaWRlYmFyL2RhdGV0aW1lLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWNjb3VudElkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2Vyc1AiLCJ1c2VycyIsInJlY2VudFVzZXJzIiwiY2hhdGVkVXNlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2giLCJjaGF0U3ViVGFiIiwic2V0Q2hhdFN1YlRhYiIsInVzZUVmZmVjdCIsImZldGNoVXNlcnMiLCJhZGROZXciLCJpdGVtIiwiZSIsImZvdW5kIiwiaSIsImxlbmd0aCIsImlkIiwibWFwIiwiY2kiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbW92ZVJlY2VudFVzZXIiLCJhZGROZXdVU2VyIiwiZmlyc3RfbmFtZSIsImxhc3RNZXNzYWdlQXQiLCJtZXNnIiwiY2hhbmdlQ2hhdENsaWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJkYXRhIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNoYXRsaXN0Iiwic2V0Q2hhdFdpdGgiLCJzZXRBY3RpdmVUYWIiLCJjaGF0ZWRlZFVzZXJzIiwibGFzdF9uYW1lIiwiYmFja2dyb3VuZEltYWdlIiwidGh1bWIiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJ0aW1lWm9uZSIsImRhdGUiLCJEYXRlIiwib2Zmc2V0IiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJhYnNPZmZzZXQiLCJNYXRoIiwiYWJzIiwiaG91cnMiLCJmbG9vciIsIm1pbnV0ZXMiLCJtaW51dGVzT3V0Iiwic2xpY2UiLCJkYXRlVGltZSIsIm9wdGlvbnMiLCJsb2NhbCIsInNob3dUaW1lWm9uZSIsInNob3dNaWxsaXNlY29uZHMiLCJnZXRUaW1lIiwiZW5kIiwiZ2V0VVRDTWlsbGlzZWNvbmRzIiwidG9JU09TdHJpbmciLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQVNBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTtBQUFBOztBQUNkLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxTQUF0QjtBQUFBLEdBQUQsQ0FBN0I7QUFDQSxNQUFNSSxNQUFNLEdBQUdILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxLQUF0QjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNQyxXQUFXLEdBQUdMLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSSxXQUF0QjtBQUFBLEdBQUQsQ0FBL0I7O0FBQ0Esa0JBQWdDQyxzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLFNBQW5COztBQUVBLG1CQUFvQ0Ysc0RBQVEsQ0FBQyxVQUFELENBQTVDO0FBQUEsTUFBT0csVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RmLFlBQVEsQ0FBQ2dCLHVFQUFVLEVBQVgsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDMUIsUUFB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RWIsSUFERjtBQUFBLE1BQ0VBLElBREYsOEJBQ1MsSUFBSUMsSUFBSixFQURUO0FBQUEsdUJBS0lZLE9BTEosQ0FFRUMsS0FGRjtBQUFBLE1BRUVBLEtBRkYsK0JBRVUsSUFGVjtBQUFBLDhCQUtJRCxPQUxKLENBR0VFLFlBSEY7QUFBQSxNQUdFQSxZQUhGLHNDQUdpQixLQUhqQjtBQUFBLDhCQUtJRixPQUxKLENBSUVHLGdCQUpGO0FBQUEsTUFJRUEsZ0JBSkYsc0NBSXFCLEtBSnJCOztBQU9BLE1BQUlGLEtBQUosRUFBVztBQUNUO0FBQ0FkLFFBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNELElBQUksQ0FBQ2lCLE9BQUwsS0FBaUJqQixJQUFJLENBQUNHLGlCQUFMLEtBQTJCLEtBQXJELENBQVA7QUFDRDs7QUFFRCxNQUFJZSxHQUFHLEdBQUcsRUFBVjs7QUFFQSxNQUFJSCxZQUFKLEVBQWtCO0FBQ2hCRyxPQUFHLEdBQUcsVUFBVUosS0FBSyxHQUFHZixRQUFRLENBQUNDLElBQUQsQ0FBWCxHQUFvQixFQUFuQyxDQUFOO0FBQ0Q7O0FBRUQsTUFBSWdCLGdCQUFnQixJQUFJaEIsSUFBSSxDQUFDbUIsa0JBQUwsS0FBNEIsQ0FBcEQsRUFBdUQ7QUFDckRELE9BQUcsY0FBT2xCLElBQUksQ0FBQ21CLGtCQUFMLEVBQVAsZUFBcUNELEdBQXJDLENBQUg7QUFDRDs7QUFFRCxTQUFPbEIsSUFBSSxDQUFDb0IsV0FBTCxHQUFtQkMsT0FBbkIsQ0FBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUNBLE9BQXJDLENBQTZDLE1BQTdDLEVBQXFESCxHQUFyRCxDQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmE5NWIxMDhmOTA2MmMyZTVkYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hVc2VycyxcclxuICBzZXRDaGF0V2l0aCxcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgY2hhdGVkZWRVc2VycyxcclxuICBhZGROZXdVU2VyLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIGZvcm0oKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGFjY291bnRJZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hY2NvdW50SWQpO1xyXG4gIGNvbnN0IHVzZXJzUCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2Vycyk7XHJcbiAgY29uc3QgcmVjZW50VXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdGVkVXNlcnMpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtjaGF0U3ViVGFiLCBzZXRDaGF0U3ViVGFiXSA9IHVzZVN0YXRlKFwiY29udGFjdHNcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYWRkTmV3ID0gKGl0ZW0sIGUpID0+IHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjZW50VXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlUmVjZW50VXNlcihjaS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGFkZE5ld1VTZXIoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiBpdGVtLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICBsYXN0TWVzc2FnZUF0OiBcIjIwMjEtMDgtMDcgMTA6MTg6MzJcIixcclxuICAgICAgICAgIG1lc2c6IFwibGFzdCBtZXNzc2FnZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ2hhdENsaWNrID0gKGUpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdC1tYWluIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2NoYXRTdWJUYWJ9PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAgICB7dXNlcnNQLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICB1c2Vyc1BbMF1cclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoY2hhdGxpc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7MSA9PT0gY2hhdGxpc3QuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q2hhdFdpdGgoY2hhdGxpc3QuZmlyc3RfbmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRBY3RpdmVUYWIoXCJjaGF0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhdGVkZWRVc2VycyhcIm5ld1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ldyhjaGF0bGlzdCwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgICR7Y2hhdGxpc3QubGFzdF9uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnYXNzZXRzL2ltYWdlcy8ke2NoYXRsaXN0LnRodW1ifScpYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Bhc3NldHMvaW1hZ2VzLyR7Y2hhdGxpc3QudGh1bWJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXRsaXN0LmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VGVhbSBMZWFkZXI8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXN0YXR1c1wiPntjaGF0bGlzdC5sYXN0X25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTtcclxuIiwiZnVuY3Rpb24gdGltZVpvbmUoZGF0ZSA9IG5ldyBEYXRlKCkpIHtcclxuICBjb25zdCBvZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcclxuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcclxuICBjb25zdCBtaW51dGVzT3V0ID0gbWludXRlcyA+IDAgPyBcIjpcIiArIChcIjBcIiArIG1pbnV0ZXMpLnNsaWNlKC0yKSA6IFwiXCI7XHJcbiAgcmV0dXJuIChvZmZzZXQgPCAwID8gXCIrXCIgOiBcIi1cIikgKyBob3VycyArIG1pbnV0ZXNPdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVUaW1lKG9wdGlvbnMgPSB7fSkge1xyXG4gIGxldCB7XHJcbiAgICBkYXRlID0gbmV3IERhdGUoKSxcclxuICAgIGxvY2FsID0gdHJ1ZSxcclxuICAgIHNob3dUaW1lWm9uZSA9IGZhbHNlLFxyXG4gICAgc2hvd01pbGxpc2Vjb25kcyA9IGZhbHNlLFxyXG4gIH0gPSBvcHRpb25zO1xyXG5cclxuICBpZiAobG9jYWwpIHtcclxuICAgIC8vIE9mZnNldCB0aGUgZGF0ZSBzbyBpdCB3aWxsIHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZSB3aGVuIGdldHRpbmcgdGhlIElTTyBzdHJpbmcuXHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCk7XHJcbiAgfVxyXG5cclxuICBsZXQgZW5kID0gXCJcIjtcclxuXHJcbiAgaWYgKHNob3dUaW1lWm9uZSkge1xyXG4gICAgZW5kID0gXCIgVVRDXCIgKyAobG9jYWwgPyB0aW1lWm9uZShkYXRlKSA6IFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNob3dNaWxsaXNlY29uZHMgJiYgZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSA+IDApIHtcclxuICAgIGVuZCA9IGAgJHtkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpfW1zJHtlbmR9YDtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVC8sIFwiIFwiKS5yZXBsYWNlKC9cXC4uKy8sIGVuZCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==