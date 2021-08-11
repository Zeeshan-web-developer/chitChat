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
        lineNumber: 105,
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
                      lineNumber: 125,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                  children: "Hello Everyone , We are Chitchat"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                  children: "Welcome to chitchat please login to your account."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
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
                      lineNumber: 137,
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
                      lineNumber: 143,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                      className: "col-form-label",
                      htmlFor: "inputPassword3",
                      children: "Password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                      children: " "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
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
                      lineNumber: 161,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                      className: "col-form-label",
                      htmlFor: "accountName",
                      children: "Account Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                      children: " "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
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
                      lineNumber: 176,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
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
                          lineNumber: 189,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                          className: "form-check-label ml-2 mr-auto",
                          htmlFor: "gridCheck1",
                          children: "Remember Me."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 194,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h6", {
                          children: "Forgot Password?"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 200,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 188,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
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
                          lineNumber: 212,
                          columnNumber: 39
                        }, _this), "Login"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                        className: "btn button-effect btn-signup",
                        onClick: function onClick() {
                          return redirectToSignUpPage();
                        },
                        children: "SignUp"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "line",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h6", {
                    children: "OR Connect with"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
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
                          lineNumber: 234,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 230,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                        className: "icon-btn btn-primary button-effect",
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                          className: "fa fa-twitter"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 242,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 238,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                        className: "icon-btn btn-facebook button-effect",
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                          className: "fa fa-facebook-f"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 250,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 246,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "termscondition",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                    className: "mb-0",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 23
                    }, _this), "Terms and condition", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("b", {
                      children: "&"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 56
                    }, _this), "Privacy policy"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
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
                      lineNumber: 267,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
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
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "cross"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "cross1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "cross2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "dot"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "dot1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "maincircle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "top-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "center-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "bottom-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "bottom-circle1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "right-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "right-circle1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 290,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "heart-logo",
                    src: "/assets/images/login_signup/5.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "has-logo",
                    src: "/assets/images/login_signup/4.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "login-img",
                    src: "/assets/images/login_signup/1.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "boy-logo",
                    src: "/assets/images/login_signup/6.png",
                    alt: "login boy logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 306,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "girl-logo",
                    src: "/assets/images/login_signup/7.png",
                    alt: "girllogo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 311,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 316,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo1",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 321,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo2",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 326,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo3",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo4",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 336,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "has-logo1",
                    src: "/assets/images/login_signup/4.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWduSW4vaW5kZXguanMiXSwibmFtZXMiOlsiRE9NQUlOIiwicHJvY2VzcyIsIm1kNSIsInJlcXVpcmUiLCJBdXRoX1NpZ25JbiIsInByb3BzIiwibG9naW5FcnJvcnMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiQXV0aFRva2VuIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWNjb3VudE5hbWUiLCJjcmVkZW50aWFsIiwic2V0Q3JlZGVudGlhbCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ1c2VyTG9naW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNGb3JtVmFsaWQiLCJsb2dpbkxvZGluZyIsInZlcmlmeUthem9vQ3JlZGVudGlhbHMiLCJzZXRMb2dpbkVycm9yIiwiZW5jcmlwdGVkQ3JlZGVudGlhbHMiLCJheGlvcyIsInB1dCIsImRhdGEiLCJjcmVkZW50aWFscyIsImFjY291bnRfbmFtZSIsInJlcyIsInN0YXR1cyIsImppZCIsIm93bmVyX2lkIiwiYWNjb3VudF9pZCIsImF1dGhfdG9rZW4iLCJkb0Nvbm5lY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiY2hhdENsaWVudCIsIm9uIiwibXNnIiwic2V0Q2xpZW50Iiwic2V0VXNlciIsImFjY291bnRJZCIsImNvb2tpZXMiLCJDb29raWVzIiwiZCIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwiZXhwaXJlcyIsInB1c2giLCJwcmVzZW5jZSIsInNldFVTZXJTdGF0dXMiLCJjb25uZWN0IiwiZGlzcGxheUVycm9ycyIsIm1hcCIsImVycm9yIiwiaSIsInJlZGlyZWN0VG9TaWduVXBQYWdlIiwibGVu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ZGY0NjlkNmEwODEyNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi8uLi9hcGkvaW5kZXhcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5pbXBvcnQgeyBpc0Zvcm1WYWxpZCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGNoYXRDbGllbnQgZnJvbSBcIi4uLy4uLy4uL3N0YW56YS9jaGF0Q2xpZW50XCI7XG5pbXBvcnQge1xuICBzZXRVc2VyLFxuICBzZXRVU2VyU3RhdHVzLFxuICBzZXRDbGllbnQsXG4gIHNldExvZ2luRXJyb3IsXG4gIGxvZ2luTG9kaW5nLFxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xuY29uc3QgRE9NQUlOID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVBQ1RfQVBQX0RFRkFVTFRfRE9NQUlOO1xudmFyIG1kNSA9IHJlcXVpcmUoXCJtZDVcIik7XG5jb25zdCBBdXRoX1NpZ25JbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBsb2dpbkVycm9ycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5sb2dpbkVycm9ycyk7XG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubG9hZGluZyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGxldCBBdXRoVG9rZW47XG4gIGNvbnN0IFtjcmVkZW50aWFsLCBzZXRDcmVkZW50aWFsXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICBhY2NvdW50TmFtZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRDcmVkZW50aWFsKHsgLi4uY3JlZGVudGlhbCwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICAvLyBzaW1wbGUgIGxvZ2luXG4gIGNvbnN0IHVzZXJMb2dpbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBhY2NvdW50TmFtZSB9ID0gY3JlZGVudGlhbDtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChpc0Zvcm1WYWxpZCh1c2VybmFtZSwgcGFzc3dvcmQsIGFjY291bnROYW1lKSkge1xuICAgICAgZGlzcGF0Y2gobG9naW5Mb2RpbmcodHJ1ZSkpO1xuICAgICAgdmVyaWZ5S2F6b29DcmVkZW50aWFscyh1c2VybmFtZSwgcGFzc3dvcmQsIGFjY291bnROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goc2V0TG9naW5FcnJvcihcIlBsZWFzZSBGaWxsIGFsbCB0aGUgRmllbGRzXCIpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdmVyaWZ5S2F6b29DcmVkZW50aWFscyA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQsIGFjY291bnROYW1lKSA9PiB7XG4gICAgbGV0IGVuY3JpcHRlZENyZWRlbnRpYWxzID0gbWQ1KHVzZXJuYW1lICsgXCI6XCIgKyBwYXNzd29yZCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wdXQoXCJ1c2VyX2F1dGhcIiwge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6IGVuY3JpcHRlZENyZWRlbnRpYWxzLFxuICAgICAgICAgIGFjY291bnRfbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICBjb25zdCBqaWQgPSByZXMuZGF0YS5kYXRhLm93bmVyX2lkICsgXCJAXCIgKyBET01BSU47XG4gICAgICAgIGNvbnN0IGFjY291bnRfaWQgPSByZXMuZGF0YS5kYXRhLmFjY291bnRfaWQ7XG4gICAgICAgIEF1dGhUb2tlbiA9IHJlcy5kYXRhLmF1dGhfdG9rZW47XG4gICAgICAgIGRvQ29ubmVjdGlvbihhY2NvdW50X2lkLCBqaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VybmFtZSBvciBwYXNzd29yZCBvciBhY2NvdW50TmFtZSB3cm9uZ1wiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiICsgZXJyKTtcbiAgICAgIGRpc3BhdGNoKHNldExvZ2luRXJyb3IoXCJJbnZhbGlkIFVzZXJuYW1lIG9yIFBhc3N3b3JkXCIpKTtcbiAgICAgIGRpc3BhdGNoKGxvZ2luTG9kaW5nKGZhbHNlKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkb0Nvbm5lY3Rpb24gPSAoYWNjb3VudF9pZCwgamlkKSA9PiB7XG4gICAgbGV0IGNsaWVudCA9IGNoYXRDbGllbnQoamlkLCBjcmVkZW50aWFsLnBhc3N3b3JkKTtcbiAgICBjbGllbnQub24oXCJhdXRoOnN1Y2Nlc3NcIiwgKG1zZykgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0Q2xpZW50KGNsaWVudCkpO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgIHVzZXJuYW1lOiBjcmVkZW50aWFsLnVzZXJuYW1lLFxuICAgICAgICAgIGFjY291bnRJZDogYWNjb3VudF9pZCxcbiAgICAgICAgICBqaWQ6IGppZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbDtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgMTAwICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICBjb29raWVzLnNldChcbiAgICAgICAgXCJjcmVkZW50aWFsc1wiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgQXV0aFRva2VuLFxuICAgICAgICB9KSxcbiAgICAgICAgeyBwYXRoOiBcIi9cIiwgZXhwaXJlczogZCB9XG4gICAgICApO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9tZXNzZW5nZXJcIik7XG4gICAgfSk7XG4gICAgY2xpZW50Lm9uKFwiYXZhaWxhYmxlXCIsIChwcmVzZW5jZSkgPT4gZGlzcGF0Y2goc2V0VVNlclN0YXR1cyhcImF2YWlsYWJsZVwiKSkpO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+XG4gICAgbG9naW5FcnJvcnMubWFwKChlcnJvciwgaSkgPT4gKFxuICAgICAgPEFsZXJ0IGtleT17aX0gY29sb3I9XCJkYW5nZXJcIj5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9BbGVydD5cbiAgICApKTtcblxuICBjb25zdCByZWRpcmVjdFRvU2lnblVwUGFnZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNpZ251cFwiKTtcbiAgICByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ25VcFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tcGFnZTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbi1tYWluXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1wYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nby9sYW5kaW5nLWxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+SGVsbG8gRXZlcnlvbmUgLCBXZSBhcmUgQ2hpdGNoYXQ8L2gzPlxuICAgICAgICAgICAgICAgICAgPGg0PldlbGNvbWUgdG8gY2hpdGNoYXQgcGxlYXNlIGxvZ2luIHRvIHlvdXIgYWNjb3VudC48L2g0PlxuICAgICAgICAgICAgICAgICAge2xvZ2luRXJyb3JzLmxlbmd0aCA+IDAgJiYgZGlzcGxheUVycm9ycygpfVxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5wdXR1c2VybmFtZTNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0dXNlcm5hbWUzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjcmVkZW50aWFsLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkM1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFBhc3N3b3JkM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWwucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKipcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIiBodG1sRm9yPVwiYWNjb3VudE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnQgTmFtZVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjY291bnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjcmVkZW50aWFsLmFjY291bnROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhY2NvdW50IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWVtYmVyY2hrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXRleHQgZm9ybS1jaGVjayBwbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJncmlkQ2hlY2sxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2hlY2tib3ggZm9yIGZvbGxvd2luZyB0ZXh0IGlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBtbC0yIG1yLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJncmlkQ2hlY2sxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbWVtYmVyIE1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Rm9yZ290IFBhc3N3b3JkPzwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbi1lZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1c2VyTG9naW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciBjb2xvcj1cImRhcmtcIiBzaXplPVwic21cIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnV0dG9uLWVmZmVjdCBidG4tc2lnbnVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVkaXJlY3RUb1NpZ25VcFBhZ2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnblVwXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk9SIENvbm5lY3Qgd2l0aDwvaDY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tZGFuZ2VyIGJ1dHRvbi1lZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbi1lZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tZmFjZWJvb2sgYnV0dG9uLWVmZmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2stZlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1zY29uZGl0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Kjwvc3Bhbj5UZXJtcyBhbmQgY29uZGl0aW9uPGI+JmFtcDs8L2I+UHJpdmFjeVxuICAgICAgICAgICAgICAgICAgICAgIHBvbGljeVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWxvZ2luIGFuaW1hdC1yYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGlvbi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnX2NpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3NcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zczFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zczJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3QxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbmNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1jaXJjbGUxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvNC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4taW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm95LWxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC82LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gYm95IGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2lybC1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvNy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImdpcmxsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3VkLWxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC8yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG91ZC1sb2dvMVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3VkLWxvZ28yXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvdWQtbG9nbzNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC8yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG91ZC1sb2dvNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1sb2dvMVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aF9TaWduSW47XG4iXSwic291cmNlUm9vdCI6IiJ9