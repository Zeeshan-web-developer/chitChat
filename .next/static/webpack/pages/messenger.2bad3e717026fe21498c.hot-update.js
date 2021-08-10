webpackHotUpdate_N_E("pages/messenger",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWNjb3VudElkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2Vyc1AiLCJ1c2VycyIsInJlY2VudFVzZXJzIiwiY2hhdGVkVXNlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2giLCJjaGF0U3ViVGFiIiwic2V0Q2hhdFN1YlRhYiIsInVzZUVmZmVjdCIsImZldGNoVXNlcnMiLCJhZGROZXciLCJpdGVtIiwiZSIsImZvdW5kIiwiaSIsImxlbmd0aCIsImlkIiwibWFwIiwiY2kiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbW92ZVJlY2VudFVzZXIiLCJhZGROZXdVU2VyIiwiZmlyc3RfbmFtZSIsImxhc3RNZXNzYWdlQXQiLCJkYXRlVGltZSIsIm1lc2ciLCJjaGFuZ2VDaGF0Q2xpY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3VycmVudFRhcmdldCIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsImRhdGEiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY2hhdGxpc3QiLCJzZXRDaGF0V2l0aCIsInNldEFjdGl2ZVRhYiIsImNoYXRlZGVkVXNlcnMiLCJsYXN0X25hbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aHVtYiIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFTQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7QUFBQTs7QUFDZCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsU0FBdEI7QUFBQSxHQUFELENBQTdCO0FBQ0EsTUFBTUksTUFBTSxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0UsS0FBdEI7QUFBQSxHQUFELENBQTFCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0ksV0FBdEI7QUFBQSxHQUFELENBQS9COztBQUNBLGtCQUFnQ0Msc0RBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxTQUFuQjs7QUFFQSxtQkFBb0NGLHNEQUFRLENBQUMsVUFBRCxDQUE1QztBQUFBLE1BQU9HLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkZixZQUFRLENBQUNnQix1RUFBVSxFQUFYLENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzFCLFFBQUlDLEtBQUssR0FBRyxLQUFaOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2IsV0FBVyxDQUFDYyxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxVQUFJYixXQUFXLENBQUNhLENBQUQsQ0FBWCxDQUFlRSxFQUFmLEtBQXNCTCxJQUFJLENBQUNLLEVBQS9CLEVBQW1DO0FBQ2pDSCxhQUFLLEdBQUcsSUFBUjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxRQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWWixpQkFBVyxDQUFDZ0IsR0FBWixDQUFnQixVQUFDQyxFQUFELEVBQVE7QUFDdEIsWUFBSSxDQUFDQSxFQUFFLENBQUNDLGNBQUgsQ0FBa0IsTUFBbEIsQ0FBTCxFQUFnQztBQUM5QjFCLGtCQUFRLENBQUMyQiw2RUFBZ0IsQ0FBQ0YsRUFBRSxDQUFDRixFQUFKLENBQWpCLENBQVI7QUFDRDtBQUNGLE9BSkQ7QUFLQXZCLGNBQVEsQ0FDTjRCLHVFQUFVLENBQUM7QUFDVEwsVUFBRSxFQUFFTCxJQUFJLENBQUNLLEVBREE7QUFFVE0sa0JBQVUsRUFBRVgsSUFBSSxDQUFDVyxVQUZSO0FBR1RDLHFCQUFhLEVBQUVDLHlEQUFRLEVBSGQ7QUFJVEMsWUFBSSxFQUFFO0FBSkcsT0FBRCxDQURKLENBQVI7QUFRRDtBQUNGLEdBeEJEOztBQTBCQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNkLENBQUQsRUFBTztBQUM3QmUsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixlQUExQixFQUEyQ0MsT0FBM0MsQ0FBbUQsVUFBQ2xCLElBQUQsRUFBVTtBQUMzREEsVUFBSSxDQUFDbUIsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0QsS0FGRDtBQUdBbkIsS0FBQyxDQUFDb0IsYUFBRixDQUFnQkYsU0FBaEIsQ0FBMEJHLEdBQTFCLENBQThCLFFBQTlCO0FBQ0FOLFlBQVEsQ0FBQ08sYUFBVCxDQUF1QixpQkFBdkIsRUFBMENKLFNBQTFDLENBQW9ERyxHQUFwRCxDQUF3RCxhQUF4RDtBQUNELEdBTkQ7O0FBUUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxZQUFJLEVBQUM7QUFGUCxxSEFHTyxRQUhQLHNIQUljLFFBSmQsbUhBS1ksa0JBQUNyQixDQUFEO0FBQUEsZUFBT1AsU0FBUyxDQUFDTyxDQUFDLENBQUN1QixNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQSxPQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0UscUVBQUMsOENBQUQ7QUFBSyxZQUFJLE1BQVQ7QUFBVSxVQUFFLEVBQUMsUUFBYjtBQUFzQixZQUFJLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMscURBQUQ7QUFBWSxpQkFBUyxFQUFFOUIsVUFBdkI7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsV0FBZDtBQUFBLG9CQUNHUCxNQUFNLENBQUNnQixNQUFQLEdBQWdCLENBQWhCLElBQ0NoQixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQ0dzQyxNQURILENBQ1UsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hCLGdCQUFJbEMsVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3RCLHFCQUFPa0MsSUFBUDtBQUNELGFBRkQsTUFFTyxJQUNMQSxJQUFJLENBQUNoQixVQUFMLENBQ0dpQixXQURILEdBRUdDLFFBRkgsQ0FFWXBDLFVBQVUsQ0FBQ21DLFdBQVgsRUFGWixDQURLLEVBSUw7QUFDQSxxQkFBT0QsSUFBUDtBQUNEO0FBQ0YsV0FYSCxFQVlHckIsR0FaSCxDQVlPLFVBQUN3QixRQUFELEVBQVczQixDQUFYLEVBQWlCO0FBQ3BCLGdDQUNFO0FBQ0UsdUJBQVMsWUFBSyxNQUFNMkIsUUFBUSxDQUFDekIsRUFBZixHQUFvQixRQUFwQixHQUErQixFQUFwQyxDQURYO0FBR0UscUJBQU8sRUFBRSxpQkFBQ0osQ0FBRCxFQUFPO0FBQ2RjLCtCQUFlLENBQUNkLENBQUQsRUFBSTZCLFFBQUosQ0FBZjtBQUNBaEQsd0JBQVEsQ0FBQ2lELHdFQUFXLENBQUNELFFBQVEsQ0FBQ25CLFVBQVYsQ0FBWixDQUFSO0FBQ0E3Qix3QkFBUSxDQUFDa0QseUVBQVksQ0FBQyxNQUFELENBQWIsQ0FBUjtBQUNBbEQsd0JBQVEsQ0FBQ21ELDBFQUFhLENBQUMsS0FBRCxDQUFkLENBQVI7QUFDQWxDLHNCQUFNLENBQUMrQixRQUFELEVBQVc3QixDQUFYLENBQU47QUFDRCxlQVRIO0FBQUEscUNBV0U7QUFBSyx5QkFBUyxFQUFDLFVBQWY7QUFBQSx3Q0FDRTtBQUNFLDJCQUFTLHFCQUFjNkIsUUFBUSxDQUFDSSxTQUF2QixDQURYO0FBRUUsdUJBQUssRUFBRTtBQUNMQyxtQ0FBZSwrQkFBd0JMLFFBQVEsQ0FBQ00sS0FBakMsT0FEVjtBQUVMQyxrQ0FBYyxFQUFFLE9BRlg7QUFHTEMsc0NBQWtCLEVBQUUsUUFIZjtBQUlMQywyQkFBTyxFQUFFO0FBSkosbUJBRlQ7QUFBQSx5Q0FTRTtBQUNFLDZCQUFTLEVBQUMsUUFEWjtBQUVFLHVCQUFHLDBCQUFtQlQsUUFBUSxDQUFDTSxLQUE1QixDQUZMO0FBR0UsdUJBQUcsRUFBQyxRQUhOO0FBSUUseUJBQUssRUFBRTtBQUFFRyw2QkFBTyxFQUFFO0FBQVg7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQWlCRTtBQUFLLDJCQUFTLEVBQUMsU0FBZjtBQUFBLDBDQUNFO0FBQUEsOEJBQUtULFFBQVEsQ0FBQ25CO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFqQkYsZUFxQkU7QUFBSywyQkFBUyxFQUFDLGFBQWY7QUFBQSw0QkFBOEJtQixRQUFRLENBQUNJO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGLGVBRU8vQixDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFxQ0QsV0FsREg7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0VEOztHQXZIUXRCLEk7VUFDVUUsdUQsRUFDQ0UsdUQsRUFDSEEsdUQsRUFDS0EsdUQ7OztBQXFIUEosbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLjJiYWQzZTcxNzAyNmZlMjE0OThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuL2RhdGV0aW1lXCI7XHJcbmltcG9ydCB7IE5hdiwgVGFiQ29udGVudCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGZldGNoVXNlcnMsXHJcbiAgc2V0Q2hhdFdpdGgsXHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGNoYXRlZGVkVXNlcnMsXHJcbiAgYWRkTmV3VVNlcixcclxuICByZW1vdmVSZWNlbnRVc2VyLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBmb3JtKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBhY2NvdW50SWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWNjb3VudElkKTtcclxuICBjb25zdCB1c2Vyc1AgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcnMpO1xyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRlZFVzZXJzKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbY2hhdFN1YlRhYiwgc2V0Q2hhdFN1YlRhYl0gPSB1c2VTdGF0ZShcImNvbnRhY3RzXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFkZE5ldyA9IChpdGVtLCBlKSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChyZWNlbnRVc2Vyc1tpXS5pZCA9PT0gaXRlbS5pZCkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgbGFzdE1lc3NhZ2VBdDogZGF0ZVRpbWUoKSxcclxuICAgICAgICAgIG1lc2c6IFwibGFzdCBtZXNzc2FnZVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ2hhdENsaWNrID0gKGUpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdC1tYWluIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgICAgPE5hdiB0YWJzIGlkPVwibXlUYWIxXCIgcm9sZT1cInRhYmxpc3RcIj48L05hdj5cclxuICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2NoYXRTdWJUYWJ9PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXQtbWFpblwiPlxyXG4gICAgICAgICAgICB7dXNlcnNQLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICB1c2Vyc1BbMF1cclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoY2hhdGxpc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7MSA9PT0gY2hhdGxpc3QuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2hhdENsaWNrKGUsIGNoYXRsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q2hhdFdpdGgoY2hhdGxpc3QuZmlyc3RfbmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRBY3RpdmVUYWIoXCJjaGF0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhdGVkZWRVc2VycyhcIm5ld1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ldyhjaGF0bGlzdCwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgICR7Y2hhdGxpc3QubGFzdF9uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnYXNzZXRzL2ltYWdlcy8ke2NoYXRsaXN0LnRodW1ifScpYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Bhc3NldHMvaW1hZ2VzLyR7Y2hhdGxpc3QudGh1bWJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXRsaXN0LmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VGVhbSBMZWFkZXI8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXN0YXR1c1wiPntjaGF0bGlzdC5sYXN0X25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==