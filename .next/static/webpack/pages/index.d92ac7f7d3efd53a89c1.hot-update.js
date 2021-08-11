webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/auth/signIn/index.js":
/*!************************************!*\
  !*** ./pages/auth/signIn/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api/index */ "./api/index.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions */ "./pages/auth/signIn/functions.js");
/* harmony import */ var _stanza_chatClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../stanza/chatClient */ "./stanza/chatClient.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "D:\\chat\\pages\\auth\\signIn\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var DOMAIN = "mongoose.mysmartpbx.org";

var md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");

var Auth_SignIn = function Auth_SignIn(props) {
  _s();

  var loginErrors = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user.loginErrors;
  });
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user.loading;
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var AuthToken;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    username: "",
    password: "",
    accountName: ""
  }),
      credential = _useState[0],
      setCredential = _useState[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setCredential(_objectSpread(_objectSpread({}, credential), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value)));
  }; // simple  login


  var userLogin = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var username, password, accountName;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = credential.username, password = credential.password, accountName = credential.accountName;
              event.preventDefault();

              if (Object(_functions__WEBPACK_IMPORTED_MODULE_9__["isFormValid"])(username, password, accountName)) {
                dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["loginLoding"])(true));
                verifyKazooCredentials(username, password, accountName);
              } else {
                dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["setLoginError"])("Please Fill all the Fields"));
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function userLogin(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var verifyKazooCredentials = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(username, password, accountName) {
      var encriptedCredentials, res, jid, account_id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              encriptedCredentials = md5(username + ":" + password);
              _context2.prev = 1;
              _context2.next = 4;
              return _api_index__WEBPACK_IMPORTED_MODULE_7__["default"].put("user_auth", {
                data: {
                  credentials: encriptedCredentials,
                  account_name: accountName
                }
              });

            case 4:
              res = _context2.sent;

              if (res.status === 201) {
                jid = res.data.data.owner_id + "@" + DOMAIN;
                account_id = res.data.data.account_id;
                AuthToken = res.data.auth_token;
                doConnection(account_id, jid);
              } else {
                console.log("username or password or accountName wrong");
              }

              _context2.next = 13;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.log("error: " + _context2.t0);
              dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["setLoginError"])("Invalid Username or Password"));
              dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["loginLoding"])(false));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function verifyKazooCredentials(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var doConnection = function doConnection(account_id, jid) {
    var client = Object(_stanza_chatClient__WEBPACK_IMPORTED_MODULE_10__["default"])(jid, credential.password);
    client.on("auth:success", function (msg) {
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["setClient"])(client));
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["setUser"])({
        username: credential.username,
        accountId: account_id,
        jid: jid
      }));
      var username = credential.username,
          password = credential.password;
      var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8__["default"]();
      var d = new Date();
      d.setTime(d.getTime() + 100 * 24 * 60 * 60 * 1000);
      cookies.set("credentials", JSON.stringify({
        username: username,
        password: password,
        AuthToken: AuthToken
      }), {
        path: "/",
        expires: d
      });
      router.push("/messenger");
    });
    client.on("available", function (presence) {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["setUSerStatus"])("available"));
    });
    client.connect();
  };

  var displayErrors = function displayErrors() {
    return loginErrors.map(function (error, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        color: "danger",
        children: error
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, _this);
    });
  };

  var redirectToSignUpPage = function redirectToSignUpPage() {
    console.log("signup");
    router.push("/auth/signUp");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
    className: "login-page1",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "container-fluid p-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "row m-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "col-12 p-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "login-contain-main",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "left-page",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "login-content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "login-content-header",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                    href: "#",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                      className: "image-fluid",
                      src: "/assets/images/logo/landing-logo.png",
                      alt: "images"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                  children: "Hello Everyone , We are Chitchat"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                  children: "Welcome to chitchat please login to your account."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, _this), loginErrors.length > 0 && displayErrors(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("form", {
                  className: "form1",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                      className: "col-form-label",
                      htmlFor: "inputusername3",
                      children: "Username"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("input", {
                      className: "form-control",
                      id: "inputusername3",
                      onChange: function onChange(e) {
                        return handleChange(e);
                      },
                      name: "username",
                      value: credential.username,
                      type: "username",
                      placeholder: "Username"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                      className: "col-form-label",
                      htmlFor: "inputPassword3",
                      children: "Password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                      children: " "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("input", {
                      className: "form-control",
                      id: "inputPassword3",
                      onChange: function onChange(e) {
                        return handleChange(e);
                      },
                      name: "password",
                      type: "password",
                      value: credential.password,
                      placeholder: "*******"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                      className: "col-form-label",
                      htmlFor: "accountName",
                      children: "Account Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                      children: " "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("input", {
                      className: "form-control",
                      id: "accountName",
                      onChange: function onChange(e) {
                        return handleChange(e);
                      },
                      name: "accountName",
                      type: "text",
                      value: credential.accountName,
                      placeholder: "account name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "form-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "rememberchk",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                        className: "input-text form-check pl-0",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("input", {
                          type: "checkbox",
                          id: "gridCheck1",
                          "aria-label": "Checkbox for following text input"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                          className: "form-check-label ml-2 mr-auto",
                          htmlFor: "gridCheck1",
                          children: "Remember Me."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 195,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h6", {
                          children: "Forgot Password?"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 201,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "form-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "buttons",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                        disabled: loading,
                        className: "btn btn-primary button-effect",
                        onClick: userLogin,
                        type: "submit",
                        children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
                          color: "dark",
                          size: "sm"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 213,
                          columnNumber: 39
                        }, _this), "Login"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 207,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                        className: "btn button-effect btn-signup",
                        onClick: function onClick() {
                          return redirectToSignUpPage();
                        },
                        children: "SignUp"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 216,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "line",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h6", {
                    children: "OR Connect with"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "medialogo",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                        className: "icon-btn btn-danger button-effect",
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                          className: "fa fa-google"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 235,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 231,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 230,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                        className: "icon-btn btn-primary button-effect",
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                          className: "fa fa-twitter"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 243,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 239,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                        className: "icon-btn btn-facebook button-effect",
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                          className: "fa fa-facebook-f"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 251,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 247,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "termscondition",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                    className: "mb-0",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 23
                    }, _this), "Terms and condition", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("b", {
                      children: "&"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 56
                    }, _this), "Privacy policy"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "right-page",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "right-login animat-rate",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "animation-block",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "bg_circle",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 268,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 270,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 272,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 273,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 276,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 278,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "cross"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "cross1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "cross2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "dot"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "dot1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "maincircle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "top-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "center-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "bottom-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "bottom-circle1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "right-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 290,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "right-circle1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "heart-logo",
                    src: "/assets/images/login_signup/5.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "has-logo",
                    src: "/assets/images/login_signup/4.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "login-img",
                    src: "/assets/images/login_signup/1.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 302,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "boy-logo",
                    src: "/assets/images/login_signup/6.png",
                    alt: "login boy logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "girl-logo",
                    src: "/assets/images/login_signup/7.png",
                    alt: "girllogo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 312,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 317,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo1",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo2",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo3",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo4",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 337,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "has-logo1",
                    src: "/assets/images/login_signup/4.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, _this);
};

_s(Auth_SignIn, "F6bhPWZ/PGT2vazV8KvaKZOofKg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
});

_c = Auth_SignIn;
/* harmony default export */ __webpack_exports__["default"] = (Auth_SignIn);

var _c;

$RefreshReg$(_c, "Auth_SignIn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./stanza/chatClient.js":
/*!******************************!*\
  !*** ./stanza/chatClient.js ***!
  \******************************/
/*! exports provided: default, getContacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chatClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContacts", function() { return getContacts; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWduSW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0YW56YS9jaGF0Q2xpZW50LmpzIl0sIm5hbWVzIjpbIkRPTUFJTiIsInByb2Nlc3MiLCJtZDUiLCJyZXF1aXJlIiwiQXV0aF9TaWduSW4iLCJwcm9wcyIsImxvZ2luRXJyb3JzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkF1dGhUb2tlbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImFjY291bnROYW1lIiwiY3JlZGVudGlhbCIsInNldENyZWRlbnRpYWwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidXNlckxvZ2luIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlzRm9ybVZhbGlkIiwibG9naW5Mb2RpbmciLCJ2ZXJpZnlLYXpvb0NyZWRlbnRpYWxzIiwic2V0TG9naW5FcnJvciIsImVuY3JpcHRlZENyZWRlbnRpYWxzIiwiYXhpb3MiLCJwdXQiLCJkYXRhIiwiY3JlZGVudGlhbHMiLCJhY2NvdW50X25hbWUiLCJyZXMiLCJzdGF0dXMiLCJqaWQiLCJvd25lcl9pZCIsImFjY291bnRfaWQiLCJhdXRoX3Rva2VuIiwiZG9Db25uZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImNoYXRDbGllbnQiLCJvbiIsIm1zZyIsInNldENsaWVudCIsInNldFVzZXIiLCJhY2NvdW50SWQiLCJjb29raWVzIiwiQ29va2llcyIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJzZXQiLCJKU09OIiwic3RyaW5naWZ5IiwicGF0aCIsImV4cGlyZXMiLCJwdXNoIiwicHJlc2VuY2UiLCJzZXRVU2VyU3RhdHVzIiwiY29ubmVjdCIsImRpc3BsYXlFcnJvcnMiLCJtYXAiLCJlcnJvciIsImkiLCJyZWRpcmVjdFRvU2lnblVwUGFnZSIsImxlbmd0aCIsIlhNUFAiLCJ0cmFuc3BvcnRzIiwid2Vic29ja2V0IiwiYm9zaCIsInJvc3RlclZlciIsInNlbmRQcmVzZW5jZSIsImdldENvbnRhY3RzIiwiZ2V0Um9zdGVyIiwiY29udGFjdHMiLCJpdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLE1BQU0sR0FBR0MseUJBQWY7O0FBQ0EsSUFBSUMsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLHNDQUFELENBQWpCOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM3QixNQUFNQyxXQUFXLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxXQUF0QjtBQUFBLEdBQUQsQ0FBL0I7QUFDQSxNQUFNSSxPQUFPLEdBQUdILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxPQUF0QjtBQUFBLEdBQUQsQ0FBM0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQUlDLFNBQUo7O0FBQ0Esa0JBQW9DQyxzREFBUSxDQUFDO0FBQzNDQyxZQUFRLEVBQUUsRUFEaUM7QUFFM0NDLFlBQVEsRUFBRSxFQUZpQztBQUczQ0MsZUFBVyxFQUFFO0FBSDhCLEdBQUQsQ0FBNUM7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQU1BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQixvQkFBd0JBLENBQUMsQ0FBQ0MsTUFBMUI7QUFBQSxRQUFR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QUFBQSxHQUFIOztBQUFBLGtCQUFYSCxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ5MmFjN2Y3ZDNlZmQ1M2E4OWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vLi4vYXBpL2luZGV4XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xuaW1wb3J0IHsgaXNGb3JtVmFsaWQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBjaGF0Q2xpZW50IGZyb20gXCIuLi8uLi8uLi9zdGFuemEvY2hhdENsaWVudFwiO1xuaW1wb3J0IHtcbiAgc2V0VXNlcixcbiAgc2V0VVNlclN0YXR1cyxcbiAgc2V0Q2xpZW50LFxuICBzZXRMb2dpbkVycm9yLFxuICBsb2dpbkxvZGluZyxcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcbmNvbnN0IERPTUFJTiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JFQUNUX0FQUF9ERUZBVUxUX0RPTUFJTjtcbnZhciBtZDUgPSByZXF1aXJlKFwibWQ1XCIpO1xuY29uc3QgQXV0aF9TaWduSW4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbG9naW5FcnJvcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubG9naW5FcnJvcnMpO1xuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRpbmcpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBsZXQgQXV0aFRva2VuO1xuICBjb25zdCBbY3JlZGVudGlhbCwgc2V0Q3JlZGVudGlhbF0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgYWNjb3VudE5hbWU6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Q3JlZGVudGlhbCh7IC4uLmNyZWRlbnRpYWwsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgLy8gc2ltcGxlICBsb2dpblxuICBjb25zdCB1c2VyTG9naW4gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgYWNjb3VudE5hbWUgfSA9IGNyZWRlbnRpYWw7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaXNGb3JtVmFsaWQodXNlcm5hbWUsIHBhc3N3b3JkLCBhY2NvdW50TmFtZSkpIHtcbiAgICAgIGRpc3BhdGNoKGxvZ2luTG9kaW5nKHRydWUpKTtcbiAgICAgIHZlcmlmeUthem9vQ3JlZGVudGlhbHModXNlcm5hbWUsIHBhc3N3b3JkLCBhY2NvdW50TmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHNldExvZ2luRXJyb3IoXCJQbGVhc2UgRmlsbCBhbGwgdGhlIEZpZWxkc1wiKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZlcmlmeUthem9vQ3JlZGVudGlhbHMgPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkLCBhY2NvdW50TmFtZSkgPT4ge1xuICAgIGxldCBlbmNyaXB0ZWRDcmVkZW50aWFscyA9IG1kNSh1c2VybmFtZSArIFwiOlwiICsgcGFzc3dvcmQpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucHV0KFwidXNlcl9hdXRoXCIsIHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiBlbmNyaXB0ZWRDcmVkZW50aWFscyxcbiAgICAgICAgICBhY2NvdW50X25hbWU6IGFjY291bnROYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgY29uc3QgamlkID0gcmVzLmRhdGEuZGF0YS5vd25lcl9pZCArIFwiQFwiICsgRE9NQUlOO1xuICAgICAgICBjb25zdCBhY2NvdW50X2lkID0gcmVzLmRhdGEuZGF0YS5hY2NvdW50X2lkO1xuICAgICAgICBBdXRoVG9rZW4gPSByZXMuZGF0YS5hdXRoX3Rva2VuO1xuICAgICAgICBkb0Nvbm5lY3Rpb24oYWNjb3VudF9pZCwgamlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWUgb3IgcGFzc3dvcmQgb3IgYWNjb3VudE5hbWUgd3JvbmdcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiArIGVycik7XG4gICAgICBkaXNwYXRjaChzZXRMb2dpbkVycm9yKFwiSW52YWxpZCBVc2VybmFtZSBvciBQYXNzd29yZFwiKSk7XG4gICAgICBkaXNwYXRjaChsb2dpbkxvZGluZyhmYWxzZSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZG9Db25uZWN0aW9uID0gKGFjY291bnRfaWQsIGppZCkgPT4ge1xuICAgIGxldCBjbGllbnQgPSBjaGF0Q2xpZW50KGppZCwgY3JlZGVudGlhbC5wYXNzd29yZCk7XG4gICAgY2xpZW50Lm9uKFwiYXV0aDpzdWNjZXNzXCIsIChtc2cpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldENsaWVudChjbGllbnQpKTtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICB1c2VybmFtZTogY3JlZGVudGlhbC51c2VybmFtZSxcbiAgICAgICAgICBhY2NvdW50SWQ6IGFjY291bnRfaWQsXG4gICAgICAgICAgamlkOiBqaWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbDtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgMTAwICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICBjb29raWVzLnNldChcbiAgICAgICAgXCJjcmVkZW50aWFsc1wiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgQXV0aFRva2VuLFxuICAgICAgICB9KSxcbiAgICAgICAgeyBwYXRoOiBcIi9cIiwgZXhwaXJlczogZCB9XG4gICAgICApO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9tZXNzZW5nZXJcIik7XG4gICAgfSk7XG4gICAgY2xpZW50Lm9uKFwiYXZhaWxhYmxlXCIsIChwcmVzZW5jZSkgPT4gZGlzcGF0Y2goc2V0VVNlclN0YXR1cyhcImF2YWlsYWJsZVwiKSkpO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+XG4gICAgbG9naW5FcnJvcnMubWFwKChlcnJvciwgaSkgPT4gKFxuICAgICAgPEFsZXJ0IGtleT17aX0gY29sb3I9XCJkYW5nZXJcIj5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9BbGVydD5cbiAgICApKTtcblxuICBjb25zdCByZWRpcmVjdFRvU2lnblVwUGFnZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNpZ251cFwiKTtcbiAgICByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ25VcFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tcGFnZTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbi1tYWluXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1wYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nby9sYW5kaW5nLWxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+SGVsbG8gRXZlcnlvbmUgLCBXZSBhcmUgQ2hpdGNoYXQ8L2gzPlxuICAgICAgICAgICAgICAgICAgPGg0PldlbGNvbWUgdG8gY2hpdGNoYXQgcGxlYXNlIGxvZ2luIHRvIHlvdXIgYWNjb3VudC48L2g0PlxuICAgICAgICAgICAgICAgICAge2xvZ2luRXJyb3JzLmxlbmd0aCA+IDAgJiYgZGlzcGxheUVycm9ycygpfVxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5wdXR1c2VybmFtZTNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0dXNlcm5hbWUzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjcmVkZW50aWFsLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkM1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFBhc3N3b3JkM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWwucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKipcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIiBodG1sRm9yPVwiYWNjb3VudE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnQgTmFtZVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjY291bnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjcmVkZW50aWFsLmFjY291bnROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhY2NvdW50IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWVtYmVyY2hrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXRleHQgZm9ybS1jaGVjayBwbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJncmlkQ2hlY2sxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2hlY2tib3ggZm9yIGZvbGxvd2luZyB0ZXh0IGlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBtbC0yIG1yLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJncmlkQ2hlY2sxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbWVtYmVyIE1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Rm9yZ290IFBhc3N3b3JkPzwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbi1lZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1c2VyTG9naW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciBjb2xvcj1cImRhcmtcIiBzaXplPVwic21cIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnV0dG9uLWVmZmVjdCBidG4tc2lnbnVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVkaXJlY3RUb1NpZ25VcFBhZ2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnblVwXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk9SIENvbm5lY3Qgd2l0aDwvaDY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tZGFuZ2VyIGJ1dHRvbi1lZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbi1lZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tZmFjZWJvb2sgYnV0dG9uLWVmZmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2stZlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1zY29uZGl0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Kjwvc3Bhbj5UZXJtcyBhbmQgY29uZGl0aW9uPGI+JmFtcDs8L2I+UHJpdmFjeVxuICAgICAgICAgICAgICAgICAgICAgIHBvbGljeVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWxvZ2luIGFuaW1hdC1yYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGlvbi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnX2NpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3NcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zczFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zczJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3QxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbmNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1jaXJjbGUxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvNC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4taW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm95LWxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC82LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gYm95IGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2lybC1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvNy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImdpcmxsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3VkLWxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC8yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG91ZC1sb2dvMVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3VkLWxvZ28yXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvdWQtbG9nbzNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC8yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG91ZC1sb2dvNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1sb2dvMVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aF9TaWduSW47XG4iLCJpbXBvcnQgKiBhcyBYTVBQIGZyb20gXCJzdGFuemFcIjtcclxubGV0IGNsaWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXRDbGllbnQodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY2xpZW50ID0gWE1QUC5jcmVhdGVDbGllbnQoe1xyXG4gICAgamlkOiB1c2VybmFtZSxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgdHJhbnNwb3J0czoge1xyXG4gICAgICB3ZWJzb2NrZXQ6IFwid3M6Ly9tb25nb29zZS5teXNtYXJ0cGJ4Lm9yZzo1MjgwL3dzLXhtcHBcIixcclxuICAgICAgYm9zaDogXCJmYWxzZVwiLFxyXG4gICAgfSxcclxuICAgIHJvc3RlclZlcjogXCJ2ZXIxNFwiLFxyXG4gIH0pO1xyXG4gIC8vIGNsaWVudC5vbihcIipcIiwgY29uc29sZS5sb2cpO1xyXG4gIGNsaWVudC5vbihcInNlc3Npb246c3RhcnRlZFwiLCAoKSA9PiB7XHJcbiAgICAvLyBjbGllbnQuc3Vic2NyaWJlKFwic3VtYW50aEBtb25nb29zZS5teXNtYXJ0cGJ4Lm9yZ1wiKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvbiBzdGFydGVkXCIpO1xyXG4gICAgLy8gZ2V0Q29udGFjdHMoKTtcclxuICAgIGNsaWVudC5zZW5kUHJlc2VuY2UoKTtcclxuICB9KTtcclxuXHJcbiAgY2xpZW50Lm9uKFwiYXV0aDpmYWlsZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ4bXBwIGF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiKTtcclxuICB9KTtcclxuICByZXR1cm4gY2xpZW50O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29udGFjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBjbGllbnQuZ2V0Um9zdGVyKCk7XHJcbiAgY29uc29sZS5sb2coXCJhbGwgY29udGFjdHMgXCIsIGNvbnRhY3RzLml0ZW1zKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==