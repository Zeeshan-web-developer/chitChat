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
        lastMessageAt: Object(_datetime__WEBPACK_IMPORTED_MODULE_4__["default"])(),
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWNjb3VudElkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2Vyc1AiLCJ1c2VycyIsInJlY2VudFVzZXJzIiwiY2hhdGVkVXNlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2giLCJjaGF0U3ViVGFiIiwic2V0Q2hhdFN1YlRhYiIsInVzZUVmZmVjdCIsImZldGNoVXNlcnMiLCJhZGROZXciLCJpdGVtIiwiZSIsImZvdW5kIiwiaSIsImxlbmd0aCIsImlkIiwibWFwIiwiY2kiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbW92ZVJlY2VudFVzZXIiLCJhZGROZXdVU2VyIiwiZmlyc3RfbmFtZSIsImxhc3RNZXNzYWdlQXQiLCJkYXRlVGltZSIsIm1lc2ciLCJjaGFuZ2VDaGF0Q2xpY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3VycmVudFRhcmdldCIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsImRhdGEiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY2hhdGxpc3QiLCJzZXRDaGF0V2l0aCIsInNldEFjdGl2ZVRhYiIsImNoYXRlZGVkVXNlcnMiLCJsYXN0X25hbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aHVtYiIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFTQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7QUFBQTs7QUFDZCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsU0FBdEI7QUFBQSxHQUFELENBQTdCO0FBQ0EsTUFBTUksTUFBTSxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0UsS0FBdEI7QUFBQSxHQUFELENBQTFCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0ksV0FBdEI7QUFBQSxHQUFELENBQS9COztBQUNBLGtCQUFnQ0Msc0RBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxTQUFuQjs7QUFFQSxtQkFBb0NGLHNEQUFRLENBQUMsVUFBRCxDQUE1QztBQUFBLE1BQU9HLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkZixZQUFRLENBQUNnQix1RUFBVSxFQUFYLENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzFCLFFBQUlDLEtBQUssR0FBRyxLQUFaOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2IsV0FBVyxDQUFDYyxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxVQUFJYixXQUFXLENBQUNhLENBQUQsQ0FBWCxDQUFlRSxFQUFmLEtBQXNCTCxJQUFJLENBQUNLLEVBQS9CLEVBQW1DO0FBQ2pDSCxhQUFLLEdBQUcsSUFBUjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxRQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWWixpQkFBVyxDQUFDZ0IsR0FBWixDQUFnQixVQUFDQyxFQUFELEVBQVE7QUFDdEIsWUFBSSxDQUFDQSxFQUFFLENBQUNDLGNBQUgsQ0FBa0IsTUFBbEIsQ0FBTCxFQUFnQztBQUM5QjFCLGtCQUFRLENBQUMyQiw2RUFBZ0IsQ0FBQ0YsRUFBRSxDQUFDRixFQUFKLENBQWpCLENBQVI7QUFDRDtBQUNGLE9BSkQ7QUFLQXZCLGNBQVEsQ0FDTjRCLHVFQUFVLENBQUM7QUFDVEwsVUFBRSxFQUFFTCxJQUFJLENBQUNLLEVBREE7QUFFVE0sa0JBQVUsRUFBRVgsSUFBSSxDQUFDVyxVQUZSO0FBR1RDLHFCQUFhLEVBQUVDLHlEQUFRLEVBSGQ7QUFJVEMsWUFBSSxFQUFFO0FBSkcsT0FBRCxDQURKLENBQVI7QUFRRDtBQUNGLEdBeEJEOztBQTBCQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNkLENBQUQsRUFBTztBQUM3QmUsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixlQUExQixFQUEyQ0MsT0FBM0MsQ0FBbUQsVUFBQ2xCLElBQUQsRUFBVTtBQUMzREEsVUFBSSxDQUFDbUIsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0QsS0FGRDtBQUdBbkIsS0FBQyxDQUFDb0IsYUFBRixDQUFnQkYsU0FBaEIsQ0FBMEJHLEdBQTFCLENBQThCLFFBQTlCO0FBQ0FOLFlBQVEsQ0FBQ08sYUFBVCxDQUF1QixpQkFBdkIsRUFBMENKLFNBQTFDLENBQW9ERyxHQUFwRCxDQUF3RCxhQUF4RDtBQUNELEdBTkQ7O0FBUUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxZQUFJLEVBQUM7QUFGUCxxSEFHTyxRQUhQLHNIQUljLFFBSmQsbUhBS1ksa0JBQUNyQixDQUFEO0FBQUEsZUFBT1AsU0FBUyxDQUFDTyxDQUFDLENBQUN1QixNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQSxPQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0UscUVBQUMsOENBQUQ7QUFBSyxZQUFJLE1BQVQ7QUFBVSxVQUFFLEVBQUMsUUFBYjtBQUFzQixZQUFJLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMscURBQUQ7QUFBWSxpQkFBUyxFQUFFOUIsVUFBdkI7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsV0FBZDtBQUFBLG9CQUNHUCxNQUFNLENBQUNnQixNQUFQLEdBQWdCLENBQWhCLElBQ0NoQixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQ0dzQyxNQURILENBQ1UsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hCLGdCQUFJbEMsVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3RCLHFCQUFPa0MsSUFBUDtBQUNELGFBRkQsTUFFTyxJQUNMQSxJQUFJLENBQUNoQixVQUFMLENBQ0dpQixXQURILEdBRUdDLFFBRkgsQ0FFWXBDLFVBQVUsQ0FBQ21DLFdBQVgsRUFGWixDQURLLEVBSUw7QUFDQSxxQkFBT0QsSUFBUDtBQUNEO0FBQ0YsV0FYSCxFQVlHckIsR0FaSCxDQVlPLFVBQUN3QixRQUFELEVBQVczQixDQUFYLEVBQWlCO0FBQ3BCLGdDQUNFO0FBQ0UsdUJBQVMsWUFBSyxNQUFNMkIsUUFBUSxDQUFDekIsRUFBZixHQUFvQixRQUFwQixHQUErQixFQUFwQyxDQURYO0FBR0UscUJBQU8sRUFBRSxpQkFBQ0osQ0FBRCxFQUFPO0FBQ2RjLCtCQUFlLENBQUNkLENBQUQsRUFBSTZCLFFBQUosQ0FBZjtBQUNBaEQsd0JBQVEsQ0FBQ2lELHdFQUFXLENBQUNELFFBQVEsQ0FBQ25CLFVBQVYsQ0FBWixDQUFSO0FBQ0E3Qix3QkFBUSxDQUFDa0QseUVBQVksQ0FBQyxNQUFELENBQWIsQ0FBUjtBQUNBbEQsd0JBQVEsQ0FBQ21ELDBFQUFhLENBQUMsS0FBRCxDQUFkLENBQVI7QUFDQWxDLHNCQUFNLENBQUMrQixRQUFELEVBQVc3QixDQUFYLENBQU47QUFDRCxlQVRIO0FBQUEscUNBV0U7QUFBSyx5QkFBUyxFQUFDLFVBQWY7QUFBQSx3Q0FDRTtBQUNFLDJCQUFTLHFCQUFjNkIsUUFBUSxDQUFDSSxTQUF2QixDQURYO0FBRUUsdUJBQUssRUFBRTtBQUNMQyxtQ0FBZSwrQkFBd0JMLFFBQVEsQ0FBQ00sS0FBakMsT0FEVjtBQUVMQyxrQ0FBYyxFQUFFLE9BRlg7QUFHTEMsc0NBQWtCLEVBQUUsUUFIZjtBQUlMQywyQkFBTyxFQUFFO0FBSkosbUJBRlQ7QUFBQSx5Q0FTRTtBQUNFLDZCQUFTLEVBQUMsUUFEWjtBQUVFLHVCQUFHLDBCQUFtQlQsUUFBUSxDQUFDTSxLQUE1QixDQUZMO0FBR0UsdUJBQUcsRUFBQyxRQUhOO0FBSUUseUJBQUssRUFBRTtBQUFFRyw2QkFBTyxFQUFFO0FBQVg7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQWlCRTtBQUFLLDJCQUFTLEVBQUMsU0FBZjtBQUFBLDBDQUNFO0FBQUEsOEJBQUtULFFBQVEsQ0FBQ25CO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFqQkYsZUFxQkU7QUFBSywyQkFBUyxFQUFDLGFBQWY7QUFBQSw0QkFBOEJtQixRQUFRLENBQUNJO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGLGVBRU8vQixDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFxQ0QsV0FsREg7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0VEOztHQXZIUXRCLEk7VUFDVUUsdUQsRUFDQ0UsdUQsRUFDSEEsdUQsRUFDS0EsdUQ7OztBQXFIUEosbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmJhZDNlNzE3MDI2ZmUyMTQ5OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hVc2VycyxcclxuICBzZXRDaGF0V2l0aCxcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgY2hhdGVkZWRVc2VycyxcclxuICBhZGROZXdVU2VyLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIGZvcm0oKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGFjY291bnRJZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5hY2NvdW50SWQpO1xyXG4gIGNvbnN0IHVzZXJzUCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2Vycyk7XHJcbiAgY29uc3QgcmVjZW50VXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdGVkVXNlcnMpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtjaGF0U3ViVGFiLCBzZXRDaGF0U3ViVGFiXSA9IHVzZVN0YXRlKFwiY29udGFjdHNcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYWRkTmV3ID0gKGl0ZW0sIGUpID0+IHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjZW50VXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHJlY2VudFVzZXJzW2ldLmlkID09PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIHJlY2VudFVzZXJzLm1hcCgoY2kpID0+IHtcclxuICAgICAgICBpZiAoIWNpLmhhc093blByb3BlcnR5KFwibWVzZ1wiKSkge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlUmVjZW50VXNlcihjaS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGFkZE5ld1VTZXIoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiBpdGVtLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICBsYXN0TWVzc2FnZUF0OiBkYXRlVGltZSgpLFxyXG4gICAgICAgICAgbWVzZzogXCJsYXN0IG1lc3NzYWdlXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDaGF0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0LW1haW4gbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtPlxyXG4gICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgICA8TmF2IHRhYnMgaWQ9XCJteVRhYjFcIiByb2xlPVwidGFibGlzdFwiPjwvTmF2PlxyXG4gICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17Y2hhdFN1YlRhYn0+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdC1tYWluXCI+XHJcbiAgICAgICAgICAgIHt1c2Vyc1AubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgIHVzZXJzUFswXVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKChjaGF0bGlzdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHsxID09PSBjaGF0bGlzdC5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDaGF0V2l0aChjaGF0bGlzdC5maXJzdF9uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNoYXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGF0ZWRlZFVzZXJzKFwibmV3XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3KGNoYXRsaXN0LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZmlsZSAgJHtjaGF0bGlzdC5sYXN0X25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdhc3NldHMvaW1hZ2VzLyR7Y2hhdGxpc3QudGh1bWJ9JylgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGFzc2V0cy9pbWFnZXMvJHtjaGF0bGlzdC50aHVtYn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57Y2hhdGxpc3QuZmlyc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5UZWFtIExlYWRlcjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc3RhdHVzXCI+e2NoYXRsaXN0Lmxhc3RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9