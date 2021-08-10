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
    var foundID;
    /* SEARCH CONTACT IN CHAT TAB  RETURN:TRUE IF PRESENT,RETURN FALSE IF NOT PRESENT */

    for (var i = 0; i < recentUsers.length; i++) {
      if (recentUsers[i].id === item.id) {
        found = true;
        foundID = recentUsers[i].id;
        break;
      }
    }
    /* if contact is present append messages */


    if (found) {
      console.log("found", foundID);
      var objIndex = recentUsers.findIndex(function (obj) {
        return obj.id == foundID;
      });
      console.log("objIndex", objIndex);
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["updateLastMessageTime"])({
        id: objIndex,
        time: Object(_datetime__WEBPACK_IMPORTED_MODULE_4__["default"])()
      }));
    }
    /* If not present in chat section.if any other is present without mesg attribute remove first then add*/


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
        mesg: "msg at ".concat(Object(_datetime__WEBPACK_IMPORTED_MODULE_4__["default"])())
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
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "theme-tab",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
        tabs: true,
        id: "myTab1",
        role: "tablist"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
                    lineNumber: 127,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  className: "details",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h5", {
                    children: chatlist.first_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h6", {
                    children: "Team Leader"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  className: "date-status",
                  children: chatlist.last_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 23
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 21
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9sZWZ0U2lkZWJhci9jb250YWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWNjb3VudElkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2Vyc1AiLCJ1c2VycyIsInJlY2VudFVzZXJzIiwiY2hhdGVkVXNlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2giLCJjaGF0U3ViVGFiIiwic2V0Q2hhdFN1YlRhYiIsInVzZUVmZmVjdCIsImZldGNoVXNlcnMiLCJhZGROZXciLCJpdGVtIiwiZSIsImZvdW5kIiwiZm91bmRJRCIsImkiLCJsZW5ndGgiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJkYXRlVGltZSIsIm1hcCIsImNpIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVSZWNlbnRVc2VyIiwiYWRkTmV3VVNlciIsImZpcnN0X25hbWUiLCJsYXN0TWVzc2FnZUF0IiwibWVzZyIsImNoYW5nZUNoYXRDbGljayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjdXJyZW50VGFyZ2V0IiwiYWRkIiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaGF0bGlzdCIsInNldENoYXRXaXRoIiwic2V0QWN0aXZlVGFiIiwiY2hhdGVkZWRVc2VycyIsImxhc3RfbmFtZSIsImJhY2tncm91bmRJbWFnZSIsInRodW1iIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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QkFERixlQWlCRTtBQUFLLDJCQUFTLEVBQUMsU0FBZjtBQUFBLDBDQUNFO0FBQUEsOEJBQUtULFFBQVEsQ0FBQ2xCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFqQkYsZUFxQkU7QUFBSywyQkFBUyxFQUFDLGFBQWY7QUFBQSw0QkFBOEJrQixRQUFRLENBQUNJO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGLGVBRU90QyxDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFxQ0QsV0FsREg7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0VEOztHQWxJUXZCLEk7VUFDVUUsdUQsRUFDQ0UsdUQsRUFDSEEsdUQsRUFDS0EsdUQ7OztBQWdJUEosbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODMwNjEyZGFmNzBiNTAxMDZhYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcclxuaW1wb3J0IHsgTmF2LCBUYWJDb250ZW50IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hVc2VycyxcclxuICBzZXRDaGF0V2l0aCxcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgY2hhdGVkZWRVc2VycyxcclxuICBhZGROZXdVU2VyLFxyXG4gIHJlbW92ZVJlY2VudFVzZXIsXHJcbiAgdXBkYXRlTGFzdE1lc3NhZ2VUaW1lLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBmb3JtKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBhY2NvdW50SWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuYWNjb3VudElkKTtcclxuICBjb25zdCB1c2Vyc1AgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcnMpO1xyXG4gIGNvbnN0IHJlY2VudFVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNoYXRlZFVzZXJzKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbY2hhdFN1YlRhYiwgc2V0Q2hhdFN1YlRhYl0gPSB1c2VTdGF0ZShcImNvbnRhY3RzXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFkZE5ldyA9IChpdGVtLCBlKSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxldCBmb3VuZElEO1xyXG4gICAgLyogU0VBUkNIIENPTlRBQ1QgSU4gQ0hBVCBUQUIgIFJFVFVSTjpUUlVFIElGIFBSRVNFTlQsUkVUVVJOIEZBTFNFIElGIE5PVCBQUkVTRU5UICovXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY2VudFVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChyZWNlbnRVc2Vyc1tpXS5pZCA9PT0gaXRlbS5pZCkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICBmb3VuZElEID0gcmVjZW50VXNlcnNbaV0uaWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBpZiBjb250YWN0IGlzIHByZXNlbnQgYXBwZW5kIG1lc3NhZ2VzICovXHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJmb3VuZFwiLCBmb3VuZElEKTtcclxuICAgICAgbGV0IG9iakluZGV4ID0gcmVjZW50VXNlcnMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBmb3VuZElEKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvYmpJbmRleFwiLCBvYmpJbmRleCk7XHJcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUxhc3RNZXNzYWdlVGltZSh7IGlkOiBvYmpJbmRleCwgdGltZTogZGF0ZVRpbWUoKSB9KSk7XHJcbiAgICB9XHJcbiAgICAvKiBJZiBub3QgcHJlc2VudCBpbiBjaGF0IHNlY3Rpb24uaWYgYW55IG90aGVyIGlzIHByZXNlbnQgd2l0aG91dCBtZXNnIGF0dHJpYnV0ZSByZW1vdmUgZmlyc3QgdGhlbiBhZGQqL1xyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICByZWNlbnRVc2Vycy5tYXAoKGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaS5oYXNPd25Qcm9wZXJ0eShcIm1lc2dcIikpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVJlY2VudFVzZXIoY2kuaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICBhZGROZXdVU2VyKHtcclxuICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogaXRlbS5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgbGFzdE1lc3NhZ2VBdDogZGF0ZVRpbWUoKSxcclxuICAgICAgICAgIG1lc2c6IGBtc2cgYXQgJHtkYXRlVGltZSgpfWAsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDaGF0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0LW1haW4gbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtPlxyXG4gICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgICA8TmF2IHRhYnMgaWQ9XCJteVRhYjFcIiByb2xlPVwidGFibGlzdFwiPjwvTmF2PlxyXG4gICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17Y2hhdFN1YlRhYn0+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdC1tYWluXCI+XHJcbiAgICAgICAgICAgIHt1c2Vyc1AubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgIHVzZXJzUFswXVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKChjaGF0bGlzdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHsxID09PSBjaGF0bGlzdC5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDaGF0Q2xpY2soZSwgY2hhdGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDaGF0V2l0aChjaGF0bGlzdC5maXJzdF9uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRhYihcImNoYXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGF0ZWRlZFVzZXJzKFwibmV3XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3KGNoYXRsaXN0LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZmlsZSAgJHtjaGF0bGlzdC5sYXN0X25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdhc3NldHMvaW1hZ2VzLyR7Y2hhdGxpc3QudGh1bWJ9JylgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGFzc2V0cy9pbWFnZXMvJHtjaGF0bGlzdC50aHVtYn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57Y2hhdGxpc3QuZmlyc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5UZWFtIExlYWRlcjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc3RhdHVzXCI+e2NoYXRsaXN0Lmxhc3RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9