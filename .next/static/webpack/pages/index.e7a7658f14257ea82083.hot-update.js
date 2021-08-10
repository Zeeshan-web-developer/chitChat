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












var DOMAIN = "";

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
      var encriptedCredentials, res, _username;

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
                _username = res.data.data.owner_id + "@" + DOMAIN;
                AuthToken = res.data.auth_token;
                console.log("auth", AuthToken);
                doConnection(_username);
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

  var doConnection = function doConnection(_username) {
    console.log("do connection");
    var client = Object(_stanza_chatClient__WEBPACK_IMPORTED_MODULE_10__["default"])(_username, credential.password);
    console.log("do connection", client);
    client.on("auth:success", function (msg) {
      console.log("auth success", msg);
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["setClient"])(client));
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["setUser"])(credential.username));
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
        lineNumber: 102,
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
                      lineNumber: 122,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                  children: "Hello Everyone , We are Chitchat"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                  children: "Welcome to chitchat please login to your account."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
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
                      lineNumber: 134,
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
                      lineNumber: 140,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                      className: "col-form-label",
                      htmlFor: "inputPassword3",
                      children: "Password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                      children: " "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
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
                      lineNumber: 158,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                      className: "col-form-label",
                      htmlFor: "accountName",
                      children: "Account Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                      children: " "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
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
                      lineNumber: 173,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
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
                          lineNumber: 186,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                          className: "form-check-label ml-2 mr-auto",
                          htmlFor: "gridCheck1",
                          children: "Remember Me."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 191,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h6", {
                          children: "Forgot Password?"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 197,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
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
                          lineNumber: 209,
                          columnNumber: 39
                        }, _this), "Login"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                        className: "btn button-effect btn-signup",
                        onClick: function onClick() {
                          return redirectToSignUpPage();
                        },
                        children: "SignUp"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "line",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h6", {
                    children: "OR Connect with"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
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
                          lineNumber: 231,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                        className: "icon-btn btn-primary button-effect",
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                          className: "fa fa-twitter"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 239,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 235,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                        className: "icon-btn btn-facebook button-effect",
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                          className: "fa fa-facebook-f"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 247,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 243,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "termscondition",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                    className: "mb-0",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 23
                    }, _this), "Terms and condition", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("b", {
                      children: "&"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 56
                    }, _this), "Privacy policy"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
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
                      lineNumber: 264,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {}, void 0, false, {
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
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "cross"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "cross1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "cross2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "dot"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "dot1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "maincircle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "top-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "center-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "bottom-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "bottom-circle1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "right-circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "right-circle1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "heart-logo",
                    src: "/assets/images/login_signup/5.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "has-logo",
                    src: "/assets/images/login_signup/4.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 293,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "login-img",
                    src: "/assets/images/login_signup/1.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "boy-logo",
                    src: "/assets/images/login_signup/6.png",
                    alt: "login boy logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "girl-logo",
                    src: "/assets/images/login_signup/7.png",
                    alt: "girllogo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo1",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo2",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo3",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "cloud-logo4",
                    src: "/assets/images/login_signup/2.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 333,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                    className: "has-logo1",
                    src: "/assets/images/login_signup/4.png",
                    alt: "login logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWduSW4vaW5kZXguanMiXSwibmFtZXMiOlsiRE9NQUlOIiwicHJvY2VzcyIsIm1kNSIsInJlcXVpcmUiLCJBdXRoX1NpZ25JbiIsInByb3BzIiwibG9naW5FcnJvcnMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiQXV0aFRva2VuIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWNjb3VudE5hbWUiLCJjcmVkZW50aWFsIiwic2V0Q3JlZGVudGlhbCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ1c2VyTG9naW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNGb3JtVmFsaWQiLCJsb2dpbkxvZGluZyIsInZlcmlmeUthem9vQ3JlZGVudGlhbHMiLCJzZXRMb2dpbkVycm9yIiwiZW5jcmlwdGVkQ3JlZGVudGlhbHMiLCJheGlvcyIsInB1dCIsImRhdGEiLCJjcmVkZW50aWFscyIsImFjY291bnRfbmFtZSIsInJlcyIsInN0YXR1cyIsIl91c2VybmFtZSIsIm93bmVyX2lkIiwiYXV0aF90b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJkb0Nvbm5lY3Rpb24iLCJjbGllbnQiLCJjaGF0Q2xpZW50Iiwib24iLCJtc2ciLCJzZXRDbGllbnQiLCJzZXRVc2VyIiwiY29va2llcyIsIkNvb2tpZXMiLCJkIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhdGgiLCJleHBpcmVzIiwicHVzaCIsInByZXNlbmNlIiwic2V0VVNlclN0YXR1cyIsImNvbm5lY3QiLCJkaXNwbGF5RXJyb3JzIiwibWFwIiwiZXJyb3IiLCJpIiwicmVkaXJlY3RUb1NpZ25VcFBhZ2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7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ZjE0MjU3ZWE4MjA4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uLy4uL2FwaS9pbmRleFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcbmltcG9ydCB7IGlzRm9ybVZhbGlkIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgY2hhdENsaWVudCBmcm9tIFwiLi4vLi4vLi4vc3RhbnphL2NoYXRDbGllbnRcIjtcbmltcG9ydCB7XG4gIHNldFVzZXIsXG4gIHNldFVTZXJTdGF0dXMsXG4gIHNldENsaWVudCxcbiAgc2V0TG9naW5FcnJvcixcbiAgbG9naW5Mb2RpbmcsXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XG5jb25zdCBET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRUFDVF9BUFBfREVGQVVMVF9ET01BSU47XG52YXIgbWQ1ID0gcmVxdWlyZShcIm1kNVwiKTtcbmNvbnN0IEF1dGhfU2lnbkluID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGxvZ2luRXJyb3JzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvZ2luRXJyb3JzKTtcbiAgY29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5sb2FkaW5nKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgbGV0IEF1dGhUb2tlbjtcbiAgY29uc3QgW2NyZWRlbnRpYWwsIHNldENyZWRlbnRpYWxdID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGFjY291bnROYW1lOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldENyZWRlbnRpYWwoeyAuLi5jcmVkZW50aWFsLCBbbmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIC8vIHNpbXBsZSAgbG9naW5cbiAgY29uc3QgdXNlckxvZ2luID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIGFjY291bnROYW1lIH0gPSBjcmVkZW50aWFsO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGlzRm9ybVZhbGlkKHVzZXJuYW1lLCBwYXNzd29yZCwgYWNjb3VudE5hbWUpKSB7XG4gICAgICBkaXNwYXRjaChsb2dpbkxvZGluZyh0cnVlKSk7XG4gICAgICB2ZXJpZnlLYXpvb0NyZWRlbnRpYWxzKHVzZXJuYW1lLCBwYXNzd29yZCwgYWNjb3VudE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChzZXRMb2dpbkVycm9yKFwiUGxlYXNlIEZpbGwgYWxsIHRoZSBGaWVsZHNcIikpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2ZXJpZnlLYXpvb0NyZWRlbnRpYWxzID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCwgYWNjb3VudE5hbWUpID0+IHtcbiAgICBsZXQgZW5jcmlwdGVkQ3JlZGVudGlhbHMgPSBtZDUodXNlcm5hbWUgKyBcIjpcIiArIHBhc3N3b3JkKTtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChcInVzZXJfYXV0aFwiLCB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjcmVkZW50aWFsczogZW5jcmlwdGVkQ3JlZGVudGlhbHMsXG4gICAgICAgICAgYWNjb3VudF9uYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIGNvbnN0IF91c2VybmFtZSA9IHJlcy5kYXRhLmRhdGEub3duZXJfaWQgKyBcIkBcIiArIERPTUFJTjtcbiAgICAgICAgQXV0aFRva2VuID0gcmVzLmRhdGEuYXV0aF90b2tlbjtcbiAgICAgICAgY29uc29sZS5sb2coXCJhdXRoXCIsIEF1dGhUb2tlbik7XG4gICAgICAgIGRvQ29ubmVjdGlvbihfdXNlcm5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VybmFtZSBvciBwYXNzd29yZCBvciBhY2NvdW50TmFtZSB3cm9uZ1wiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiICsgZXJyKTtcbiAgICAgIGRpc3BhdGNoKHNldExvZ2luRXJyb3IoXCJJbnZhbGlkIFVzZXJuYW1lIG9yIFBhc3N3b3JkXCIpKTtcbiAgICAgIGRpc3BhdGNoKGxvZ2luTG9kaW5nKGZhbHNlKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkb0Nvbm5lY3Rpb24gPSAoX3VzZXJuYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkbyBjb25uZWN0aW9uXCIpO1xuICAgIGxldCBjbGllbnQgPSBjaGF0Q2xpZW50KF91c2VybmFtZSwgY3JlZGVudGlhbC5wYXNzd29yZCk7XG4gICAgY29uc29sZS5sb2coXCJkbyBjb25uZWN0aW9uXCIsIGNsaWVudCk7XG4gICAgY2xpZW50Lm9uKFwiYXV0aDpzdWNjZXNzXCIsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXV0aCBzdWNjZXNzXCIsIG1zZyk7XG4gICAgICBkaXNwYXRjaChzZXRDbGllbnQoY2xpZW50KSk7XG4gICAgICBkaXNwYXRjaChzZXRVc2VyKGNyZWRlbnRpYWwudXNlcm5hbWUpKTtcbiAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFsO1xuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XG4gICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAxMDAgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgIGNvb2tpZXMuc2V0KFxuICAgICAgICBcImNyZWRlbnRpYWxzXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICBBdXRoVG9rZW4sXG4gICAgICAgIH0pLFxuICAgICAgICB7IHBhdGg6IFwiL1wiLCBleHBpcmVzOiBkIH1cbiAgICAgICk7XG5cbiAgICAgIHJvdXRlci5wdXNoKFwiL21lc3NlbmdlclwiKTtcbiAgICB9KTtcbiAgICBjbGllbnQub24oXCJhdmFpbGFibGVcIiwgKHByZXNlbmNlKSA9PiBkaXNwYXRjaChzZXRVU2VyU3RhdHVzKFwiYXZhaWxhYmxlXCIpKSk7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5RXJyb3JzID0gKCkgPT5cbiAgICBsb2dpbkVycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXG4gICAgICA8QWxlcnQga2V5PXtpfSBjb2xvcj1cImRhbmdlclwiPlxuICAgICAgICB7ZXJyb3J9XG4gICAgICA8L0FsZXJ0PlxuICAgICkpO1xuXG4gIGNvbnN0IHJlZGlyZWN0VG9TaWduVXBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2lnbnVwXCIpO1xuICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnblVwXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1wYWdlMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluLW1haW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1mbHVpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvL2xhbmRpbmctbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5IZWxsbyBFdmVyeW9uZSAsIFdlIGFyZSBDaGl0Y2hhdDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDQ+V2VsY29tZSB0byBjaGl0Y2hhdCBwbGVhc2UgbG9naW4gdG8geW91ciBhY2NvdW50LjwvaDQ+XG4gICAgICAgICAgICAgICAgICB7bG9naW5FcnJvcnMubGVuZ3RoID4gMCAmJiBkaXNwbGF5RXJyb3JzKCl9XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJpbnB1dHVzZXJuYW1lM1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXR1c2VybmFtZTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWwudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlucHV0UGFzc3dvcmQzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0UGFzc3dvcmQzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbC5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiIGh0bWxGb3I9XCJhY2NvdW50TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudCBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWwuYWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFjY291bnQgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtZW1iZXJjaGtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtdGV4dCBmb3JtLWNoZWNrIHBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImdyaWRDaGVjazFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDaGVja2JveCBmb3IgZm9sbG93aW5nIHRleHQgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG1sLTIgbXItYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImdyaWRDaGVjazFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgTWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Gb3Jnb3QgUGFzc3dvcmQ/PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnV0dG9uLWVmZmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VzZXJMb2dpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxTcGlubmVyIGNvbG9yPVwiZGFya1wiIHNpemU9XCJzbVwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidXR0b24tZWZmZWN0IGJ0bi1zaWdudXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdFRvU2lnblVwUGFnZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduVXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDY+T1IgQ29ubmVjdCB3aXRoPC9oNj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1kYW5nZXIgYnV0dG9uLWVmZmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ29vZ2xlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLXByaW1hcnkgYnV0dG9uLWVmZmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1mYWNlYm9vayBidXR0b24tZWZmZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vay1mXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXNjb25kaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4qPC9zcGFuPlRlcm1zIGFuZCBjb25kaXRpb248Yj4mYW1wOzwvYj5Qcml2YWN5XG4gICAgICAgICAgICAgICAgICAgICAgcG9saWN5XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtcGFnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtbG9naW4gYW5pbWF0LXJhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdfY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdDFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWNpcmNsZTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jaXJjbGUxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydC1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvNS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC80LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC8xLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ktbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzYucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBib3kgbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnaXJsLWxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC83LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZ2lybGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvdWQtbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3VkLWxvZ28xXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvdWQtbG9nbzJcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC8yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG91ZC1sb2dvM1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3VkLWxvZ280XCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWxvZ28xXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvNC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoX1NpZ25JbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=