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
      var encriptedCredentials, res, jid;
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
                AuthToken = res.data.auth_token;
                doConnection(jid);
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

  var doConnection = function doConnection(jid) {
    console.log("do connection", jid);
    var client = Object(_stanza_chatClient__WEBPACK_IMPORTED_MODULE_10__["default"])(jid, credential.password);
    client.on("auth:success", function (msg) {
      console.log("auth success", msg);
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["setClient"])(client));
      dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_11__["setUser"])({
        username: credential.username,
        accountId: null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWduSW4vaW5kZXguanMiXSwibmFtZXMiOlsiRE9NQUlOIiwicHJvY2VzcyIsIm1kNSIsInJlcXVpcmUiLCJBdXRoX1NpZ25JbiIsInByb3BzIiwibG9naW5FcnJvcnMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiQXV0aFRva2VuIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWNjb3VudE5hbWUiLCJjcmVkZW50aWFsIiwic2V0Q3JlZGVudGlhbCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ1c2VyTG9naW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNGb3JtVmFsaWQiLCJsb2dpbkxvZGluZyIsInZlcmlmeUthem9vQ3JlZGVudGlhbHMiLCJzZXRMb2dpbkVycm9yIiwiZW5jcmlwdGVkQ3JlZGVudGlhbHMiLCJheGlvcyIsInB1dCIsImRhdGEiLCJjcmVkZW50aWFscyIsImFjY291bnRfbmFtZSIsInJlcyIsInN0YXR1cyIsImppZCIsIm93bmVyX2lkIiwiYXV0aF90b2tlbiIsImRvQ29ubmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnQiLCJjaGF0Q2xpZW50Iiwib24iLCJtc2ciLCJzZXRDbGllbnQiLCJzZXRVc2VyIiwiYWNjb3VudElkIiwiY29va2llcyIsIkNvb2tpZXMiLCJkIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhdGgiLCJleHBpcmVzIiwicHVzaCIsInByZXNlbmNlIiwic2V0VVNlclN0YXR1cyIsImNvbm5lY3QiLCJkaXNwbGF5RXJyb3JzIiwibWFwIiwiZXJyb3IiLCJpIiwicmVkaXJlY3RUb1NpZ25VcFBhZ2UiLCJsZW5ndGgiXSwibWFwcGlu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MjZjNGVkN2QxZjQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vLi4vYXBpL2luZGV4XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xuaW1wb3J0IHsgaXNGb3JtVmFsaWQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBjaGF0Q2xpZW50IGZyb20gXCIuLi8uLi8uLi9zdGFuemEvY2hhdENsaWVudFwiO1xuaW1wb3J0IHtcbiAgc2V0VXNlcixcbiAgc2V0VVNlclN0YXR1cyxcbiAgc2V0Q2xpZW50LFxuICBzZXRMb2dpbkVycm9yLFxuICBsb2dpbkxvZGluZyxcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcbmNvbnN0IERPTUFJTiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JFQUNUX0FQUF9ERUZBVUxUX0RPTUFJTjtcbnZhciBtZDUgPSByZXF1aXJlKFwibWQ1XCIpO1xuY29uc3QgQXV0aF9TaWduSW4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbG9naW5FcnJvcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubG9naW5FcnJvcnMpO1xuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRpbmcpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBsZXQgQXV0aFRva2VuO1xuICBjb25zdCBbY3JlZGVudGlhbCwgc2V0Q3JlZGVudGlhbF0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgYWNjb3VudE5hbWU6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Q3JlZGVudGlhbCh7IC4uLmNyZWRlbnRpYWwsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgLy8gc2ltcGxlICBsb2dpblxuICBjb25zdCB1c2VyTG9naW4gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgYWNjb3VudE5hbWUgfSA9IGNyZWRlbnRpYWw7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaXNGb3JtVmFsaWQodXNlcm5hbWUsIHBhc3N3b3JkLCBhY2NvdW50TmFtZSkpIHtcbiAgICAgIGRpc3BhdGNoKGxvZ2luTG9kaW5nKHRydWUpKTtcbiAgICAgIHZlcmlmeUthem9vQ3JlZGVudGlhbHModXNlcm5hbWUsIHBhc3N3b3JkLCBhY2NvdW50TmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHNldExvZ2luRXJyb3IoXCJQbGVhc2UgRmlsbCBhbGwgdGhlIEZpZWxkc1wiKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZlcmlmeUthem9vQ3JlZGVudGlhbHMgPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkLCBhY2NvdW50TmFtZSkgPT4ge1xuICAgIGxldCBlbmNyaXB0ZWRDcmVkZW50aWFscyA9IG1kNSh1c2VybmFtZSArIFwiOlwiICsgcGFzc3dvcmQpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucHV0KFwidXNlcl9hdXRoXCIsIHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiBlbmNyaXB0ZWRDcmVkZW50aWFscyxcbiAgICAgICAgICBhY2NvdW50X25hbWU6IGFjY291bnROYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgY29uc3QgamlkID0gcmVzLmRhdGEuZGF0YS5vd25lcl9pZCArIFwiQFwiICsgRE9NQUlOO1xuICAgICAgICBBdXRoVG9rZW4gPSByZXMuZGF0YS5hdXRoX3Rva2VuO1xuICAgICAgICBkb0Nvbm5lY3Rpb24oamlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWUgb3IgcGFzc3dvcmQgb3IgYWNjb3VudE5hbWUgd3JvbmdcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiArIGVycik7XG4gICAgICBkaXNwYXRjaChzZXRMb2dpbkVycm9yKFwiSW52YWxpZCBVc2VybmFtZSBvciBQYXNzd29yZFwiKSk7XG4gICAgICBkaXNwYXRjaChsb2dpbkxvZGluZyhmYWxzZSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZG9Db25uZWN0aW9uID0gKGppZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZG8gY29ubmVjdGlvblwiLCBqaWQpO1xuICAgIGxldCBjbGllbnQgPSBjaGF0Q2xpZW50KGppZCwgY3JlZGVudGlhbC5wYXNzd29yZCk7XG4gICAgY2xpZW50Lm9uKFwiYXV0aDpzdWNjZXNzXCIsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXV0aCBzdWNjZXNzXCIsIG1zZyk7XG4gICAgICBkaXNwYXRjaChzZXRDbGllbnQoY2xpZW50KSk7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgc2V0VXNlcih7IHVzZXJuYW1lOiBjcmVkZW50aWFsLnVzZXJuYW1lLCBhY2NvdW50SWQ6IG51bGwsIGppZDogamlkIH0pXG4gICAgICApO1xuICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWw7XG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcbiAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIDEwMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgY29va2llcy5zZXQoXG4gICAgICAgIFwiY3JlZGVudGlhbHNcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgIEF1dGhUb2tlbixcbiAgICAgICAgfSksXG4gICAgICAgIHsgcGF0aDogXCIvXCIsIGV4cGlyZXM6IGQgfVxuICAgICAgKTtcblxuICAgICAgcm91dGVyLnB1c2goXCIvbWVzc2VuZ2VyXCIpO1xuICAgIH0pO1xuICAgIGNsaWVudC5vbihcImF2YWlsYWJsZVwiLCAocHJlc2VuY2UpID0+IGRpc3BhdGNoKHNldFVTZXJTdGF0dXMoXCJhdmFpbGFibGVcIikpKTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvcnMgPSAoKSA9PlxuICAgIGxvZ2luRXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcbiAgICAgIDxBbGVydCBrZXk9e2l9IGNvbG9yPVwiZGFuZ2VyXCI+XG4gICAgICAgIHtlcnJvcn1cbiAgICAgIDwvQWxlcnQ+XG4gICAgKSk7XG5cbiAgY29uc3QgcmVkaXJlY3RUb1NpZ25VcFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzaWdudXBcIik7XG4gICAgcm91dGVyLnB1c2goXCIvYXV0aC9zaWduVXBcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXBhZ2UxXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW4tbWFpblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtcGFnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28vbGFuZGluZy1sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzPkhlbGxvIEV2ZXJ5b25lICwgV2UgYXJlIENoaXRjaGF0PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoND5XZWxjb21lIHRvIGNoaXRjaGF0IHBsZWFzZSBsb2dpbiB0byB5b3VyIGFjY291bnQuPC9oND5cbiAgICAgICAgICAgICAgICAgIHtsb2dpbkVycm9ycy5sZW5ndGggPiAwICYmIGRpc3BsYXlFcnJvcnMoKX1cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlucHV0dXNlcm5hbWUzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VybmFtZVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dHVzZXJuYW1lM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbC51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5wdXRQYXNzd29yZDNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRQYXNzd29yZDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjcmVkZW50aWFsLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC1mb3JtLWxhYmVsXCIgaHRtbEZvcj1cImFjY291bnROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50IE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY2NvdW50TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbC5hY2NvdW50TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWNjb3VudCBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW1lbWJlcmNoa1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC10ZXh0IGZvcm0tY2hlY2sgcGwtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZ3JpZENoZWNrMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNoZWNrYm94IGZvciBmb2xsb3dpbmcgdGV4dCBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbWwtMiBtci1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZ3JpZENoZWNrMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciBNZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkZvcmdvdCBQYXNzd29yZD88L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidXR0b24tZWZmZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dXNlckxvZ2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPFNwaW5uZXIgY29sb3I9XCJkYXJrXCIgc2l6ZT1cInNtXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbi1lZmZlY3QgYnRuLXNpZ251cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0VG9TaWduVXBQYWdlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ25VcFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5PUiBDb25uZWN0IHdpdGg8L2g2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLWRhbmdlciBidXR0b24tZWZmZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1nb29nbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tcHJpbWFyeSBidXR0b24tZWZmZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLWZhY2Vib29rIGJ1dHRvbi1lZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rLWZcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXJtc2NvbmRpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPio8L3NwYW4+VGVybXMgYW5kIGNvbmRpdGlvbjxiPiZhbXA7PC9iPlByaXZhY3lcbiAgICAgICAgICAgICAgICAgICAgICBwb2xpY3lcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1wYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1sb2dpbiBhbmltYXQtcmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRpb24tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ19jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90MVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNpcmNsZTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYXJ0LWxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC81LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveS1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvNi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGJveSBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdpcmwtbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzcucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJnaXJsbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG91ZC1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvdWQtbG9nbzFcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC8yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG91ZC1sb2dvMlwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9naW5fc2lnbnVwLzIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpbiBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3VkLWxvZ28zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dpbl9zaWdudXAvMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ2luIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvdWQtbG9nbzRcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC8yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtbG9nbzFcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ2luX3NpZ251cC80LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9naW4gbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhfU2lnbkluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==