webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/chatBoard/customChat.js":
/*!********************************************!*\
  !*** ./containers/chatBoard/customChat.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _helpers_chatContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/chatContext */ "./helpers/chatContext/index.js");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-tippy */ "./node_modules/react-tippy/dist/react-tippy.js");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_customizerContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/customizerContext */ "./helpers/customizerContext/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "D:\\chat\\containers\\chatBoard\\customChat.js",
    _this = undefined,
    _s = $RefreshSig$();












var CustomChat = function CustomChat(props) {
  _s();

  var _selectedChat$sticker;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var chatWith = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.chatWith;
  });
  var allmessages = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.message;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      volum = _useState[0],
      setVolum = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      audiocall = _useState3[0],
      setAudiocall = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      audioreceivecall = _useState4[0],
      setAudioreceivecall = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      videocall = _useState5[0],
      setVideocall = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      videoscreen = _useState6[0],
      setVideoScreen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      profileToggle = _useState7[0],
      setProfileToggle = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mute = _useState8[0],
      setMute = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      speaker = _useState9[0],
      setSpeaker = _useState9[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_customizerContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      handleClickRight = _useContext.handleClickRight,
      mainMenu = _useContext.mainMenu;

  var chatCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_chatContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var chatMembers = chatCtx.chatMembers;
  var chats = chatCtx.chats;
  var currentUser = chatCtx.currentUser;
  var selectedUser = chatCtx.selectedUser;
  var isTyeping = chatCtx.isTyeping;
  var typingMessage = chatCtx.typingMessage;
  var selectedChat = chatMembers && chats && selectedUser ? chats.find(function (x) {
    return x.users.includes(currentUser.id) && x.users.includes(selectedUser.id);
  }) : null;

  var toggleAudiocall = function toggleAudiocall() {
    setAudiocall(!audiocall);
  };

  var toggleVideocall = function toggleVideocall() {
    setVideocall(!videocall);
  };

  var toggleAudioReceiveCall = function toggleAudioReceiveCall() {
    setAudioreceivecall(!audioreceivecall);
  };

  var AudioReceiveCall = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setAudioreceivecall(true);
              setAudiocall(false);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function AudioReceiveCall() {
      return _ref.apply(this, arguments);
    };
  }();

  var messagesEndRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var scrollToBottom = function scrollToBottom() {
    var _messagesEndRef$curre;

    (_messagesEndRef$curre = messagesEndRef.current) === null || _messagesEndRef$curre === void 0 ? void 0 : _messagesEndRef$curre.scrollIntoView({
      behavior: "smooth"
    });
  };

  var profileSideBarToggle = function profileSideBarToggle(toggle) {
    if (toggle) {
      document.body.className = "sidebar-active main-page menu-active ".concat(localStorage.getItem("layout_mode"));
      document.querySelector(".chitchat-main").classList.remove("small-sidebar");
      document.querySelector(".app-sidebar").classList.remove("active");
      setProfileToggle(!toggle);
    } else {
      document.body.className = "sidebar-active main-page ".concat(localStorage.getItem("layout_mode"));
      document.querySelector(".chitchat-main").classList.add("small-sidebar");
      document.querySelector(".app-sidebar").classList.add("active");
      setProfileToggle(!toggle);
    }
  };

  var refreshCw = function refreshCw(e) {
    e.currentTarget.classList.toggle("refreshed");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      typingMessage(false);
    }, 3000);
    dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_9__["setOldMessages"])());
  }, [isTyeping]);
  return chatWith ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    className: "messages custom-scroll active wallpapers",
    id: "chating",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "contact-details",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("form", {
          className: "form-inline search-form ".concat(search ? "open" : ""),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
              className: "form-control-plaintext",
              type: "search",
              placeholder: "Search..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "icon-close close-search",
              onClick: function onClick() {
                return setSearch(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "col-7",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "media left",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "media-left mr-3",
              onClick: function onClick() {
                return profileSideBarToggle(profileToggle);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "profile menu-trigger ".concat(chatWith.status),
                style: {
                  backgroundImage: "url('assets/images/".concat(selectedUser.thumb, "')"),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "block"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "media-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                children: chatWith.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "badge ".concat(chatWith.status === "online" ? "badge-success" : "badge-danger"),
                children: chatWith.status === "online" ? "Active" : "InActive"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "media-right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                    className: "icon-btn btn-light button-effect mute",
                    href: "#",
                    onClick: function onClick() {
                      return setVolum(!volum);
                    },
                    children: [volum ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
                      className: "effect-wave"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 32
                    }, _this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("i", {
                      className: "fa fa-volume-up ".concat(volum ? "" : "off")
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                    className: "icon-btn btn-light search search-right",
                    href: "#",
                    onClick: function onClick() {
                      return setSearch(!search);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Search"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                    className: "icon-btn btn-light button-effect mobile-sidebar",
                    href: "#",
                    onClick: function onClick() {
                      return handleClickRight(mainMenu);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["ChevronLeft"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "col",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
            className: "calls text-right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_tippy__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
                title: "Quick Audio Call",
                position: "bottom-end",
                trigger: "mouseenter",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                  className: "icon-btn btn-light button-effect",
                  href: "#",
                  onClick: function onClick() {
                    return setAudiocall(!audiocall);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Phone"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
                className: "show",
                isOpen: audiocall,
                toggle: toggleAudiocall,
                centered: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
                  className: "p-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                    className: "audiocall1 call-modal",
                    style: {
                      backgroundImage: "url('../assets/images/avtar/big/audiocall.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "block"
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                      className: "bg-img",
                      src: "../assets/images/avtar/big/audiocall.jpg",
                      alt: "Avatar",
                      style: {
                        display: "none"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "center-con text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        className: "title2",
                        children: "Josephin water"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 225,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h6", {
                        children: "log angelina california"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 226,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-success button-effect btn-xl is-animating",
                            href: "#",
                            onClick: AudioReceiveCall,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Phone"], {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 234,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 229,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 228,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-danger button-effect btn-xl is-animating cancelcall",
                            href: "#",
                            onClick: toggleAudiocall,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Phone"], {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 243,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 238,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 237,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
                className: "fade audiorcvcall show",
                id: "audiorcvcall",
                isOpen: audioreceivecall,
                toggle: toggleAudioReceiveCall,
                centered: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
                  className: "p-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                    className: "audiocall2 call-modal",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                      className: "bg-img",
                      src: "../assets/images/avtar/big/audiocall.jpg",
                      alt: "Avatar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 260,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "center-con text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        id: "basicUsage2",
                        children: props.timeValues
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        className: "title2",
                        children: "Josephin water"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 267,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h6", {
                        children: "log angelina california"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 268,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-light button-effect mute",
                            href: "#",
                            onClick: function onClick() {
                              return setMute(!mute);
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("i", {
                              className: "fa fa-microphone ".concat(mute ? "off" : "")
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 276,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 271,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 270,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-light button-effect mute",
                            href: "#",
                            onClick: function onClick() {
                              return setSpeaker(!speaker);
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("i", {
                              className: "fa fa-volume-up ".concat(speaker ? "off" : "")
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 289,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 284,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 283,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-danger button-effect btn-xl is-animating",
                            href: "#",
                            onClick: toggleAudioReceiveCall,
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Phone"], {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 303,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 297,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 296,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-light button-effect",
                            href: "#",
                            "data-tippy-content": "Add Call",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["UserPlus"], {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 312,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 307,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 306,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-light button-effect",
                            href: "#",
                            "data-tippy-content": "Pause",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Pause"], {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 321,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 316,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 315,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 269,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_tippy__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
                title: "Quick Video Call",
                position: "bottom-end",
                trigger: "mouseenter",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                  className: "icon-btn btn-light button-effect",
                  href: "#",
                  onClick: function onClick() {
                    return setVideocall(!videocall);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Video"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 336,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 331,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
                className: "viddiolog fade show ".concat(videoscreen ? "active" : ""),
                isOpen: videocall,
                toggle: toggleVideocall,
                centered: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                    className: "videocall call-modal ",
                    style: {
                      backgroundImage: "url('../assets/images/avtar/big/videocall_bg.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "block"
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                      className: "bg-img",
                      src: "/assets/images/avtar/big/videocall_bg.jpg",
                      alt: "Avatar",
                      style: {
                        display: "none"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 362,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "small-image",
                      style: {
                        backgroundImage: "url('../assets/images/avtar/big/videocall.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "block"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                        className: "bg-img",
                        src: "/assets/images/avtar/big/videocall.jpg",
                        alt: "Avatar",
                        style: {
                          display: "none"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 377,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 368,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "media videocall-details",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        className: "usersprof",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                          className: "profile",
                          style: {
                            backgroundImage: "url('../assets/images/avtar/2.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "block"
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                            className: "bg-img",
                            src: "/assets/images/avtar/2.jpg",
                            alt: "Avatar",
                            style: {
                              display: "none"
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 395,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 386,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                          className: "profile",
                          style: {
                            backgroundImage: "url('../assets/images/avtar/3.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "block"
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                            className: "bg-img",
                            src: "/assets/images/avtar/3.jpg",
                            alt: "Avatar",
                            style: {
                              display: "none"
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 411,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 402,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 385,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        className: "media-body",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                          children: "Josephin water"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 420,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h6", {
                          children: "America ,California"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 421,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 419,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        id: "basicUsage",
                        children: props.timeValues
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 423,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        className: "zoomcontent",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                          className: "text-dark",
                          href: "#",
                          onClick: function onClick() {
                            return setVideoScreen(!videoscreen);
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                            src: "../assets/images/logo/maximize.svg",
                            alt: "zoom screen"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 430,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 425,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 424,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 384,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      className: "center-con text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-light button-effect pause",
                            href: "#",
                            "data-tippy-content": "Hold",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("i", {
                              className: "ti-control-pause"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 445,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 440,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 439,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-danger button-effect btn-xl is-animating",
                            href: "#",
                            onClick: toggleVideocall,
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Phone"], {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 455,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 449,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 448,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                            className: "icon-btn btn-light button-effect mic",
                            href: "#",
                            "data-tippy-content": "Mute",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("i", {
                              className: "fa fa-microphone"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 464,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 459,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 458,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 438,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 437,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_tippy__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
                title: "All Apps",
                position: "bottom-end",
                trigger: "mouseenter",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                  className: "icon-btn btn-light button-effect apps-toggle",
                  href: "#",
                  onClick: function onClick() {
                    return props.OpenAppSidebar(props.toggleSmallSide);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("i", {
                    className: "ti-layout-grid2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 484,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 479,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 474,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
              className: "chat-friend-toggle",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_tippy__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
                title: "Quick action",
                trigger: "mouseenter",
                position: "bottom-end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                  className: "icon-btn btn-light bg-transparent button-effect outside",
                  href: "#",
                  onClick: function onClick() {
                    return props.setQuickAction(!props.quickAction);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["MoreVertical"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 499,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 494,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 489,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "chat-frind-content",
                style: props.quickAction ? {
                  display: "block"
                } : {
                  display: "none"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                      className: "icon-btn btn-outline-primary button-effect btn-sm",
                      href: "#",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["User"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 516,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 512,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                      children: "Profile"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 518,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 511,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                      className: "icon-btn btn-outline-success button-effect btn-sm",
                      href: "#",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["PlusCircle"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 525,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 521,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                      children: "Archive"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 527,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 520,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                      className: "icon-btn btn-outline-danger button-effect btn-sm",
                      href: "#",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Trash2"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 534,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 530,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                      children: "Delete"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 536,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 529,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                      className: "icon-btn btn-outline-light button-effect btn-sm",
                      href: "#",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Slash"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 543,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 539,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                      children: "Block"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 545,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 538,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 510,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 502,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 488,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "contact-chat",
      children: ["/** Displaying messages */", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
        className: "chatappend",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "MessagesArea",
          children: allmessages && allmessages.filter(function (item) {
            return item.from === chatWith.name;
          }).map(function (item, idx) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
              children: item.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 563,
              columnNumber: 37
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
          className: "sent last typing-m",
          style: isTyeping ? {
            display: "block"
          } : {
            display: "none"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "media",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "media-body",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "contact-name",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
                  className: "msg-box",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        className: "type",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                          className: "typing-loader"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1251,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1250,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1249,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1248,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1246,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1245,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1244,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1228,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1224,
          columnNumber: 11
        }, _this), selectedChat === null || selectedChat === void 0 ? void 0 : (_selectedChat$sticker = selectedChat.stickers) === null || _selectedChat$sticker === void 0 ? void 0 : _selectedChat$sticker.map(function (item, index) {
          var participators = chatMembers.find(function (x) {
            return x.id === item.sender;
          });
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
            className: "replies",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "media",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "media-body",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  className: "contact-name",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
                    className: "msg-box",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h5", {
                      children: participators.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1269,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h6", {
                      children: item.time
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1270,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
                      className: "msg-setting-main",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                        src: item.stickers,
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1272,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                        ref: messagesEndRef
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1273,
                        columnNumber: 27
                      }, _this), scrollToBottom()]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1271,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1268,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1267,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1266,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1265,
              columnNumber: 17
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 1264,
            columnNumber: 15
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, _this) : "";
};

_s(CustomChat, "PObj7rRMqZWvVWlKlpdXn0eolgA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = CustomChat;
/* harmony default export */ __webpack_exports__["default"] = (CustomChat);

var _c;

$RefreshReg$(_c, "CustomChat");

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

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: setUser, setUSerStatus, setClient, setLoginError, loginLoding, logout, setActiveTab, setChatWith, chatededUsers, unmountComponent, addNewUSer, removeRecentUser, updateLastMessageTime, setRoster, updateUserStatus, setAllUsers, setOldMessages, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUSerStatus", function() { return setUSerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClient", function() { return setClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoginError", function() { return setLoginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginLoding", function() { return loginLoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveTab", function() { return setActiveTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChatWith", function() { return setChatWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatededUsers", function() { return chatededUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponent", function() { return unmountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewUSer", function() { return addNewUSer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRecentUser", function() { return removeRecentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLastMessageTime", function() { return updateLastMessageTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRoster", function() { return setRoster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserStatus", function() { return updateUserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAllUsers", function() { return setAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOldMessages", function() { return setOldMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/index */ "./api/index.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");





var id = "fbdcd3c94af9ffaa12f0ff4308d3b9bd";
var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_4__["default"]();
var cokie = cookies.get("credentials");
var setUser = function setUser(user) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_USER"],
    payload: user
  };
};
var setUSerStatus = function setUSerStatus(userStatus) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_USER_STATUS"],
    payload: userStatus
  };
};
var setClient = function setClient(client) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_CLIENT"],
    payload: client
  };
};
var setLoginError = function setLoginError(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_ERROR"],
    payload: error
  };
};
var loginLoding = function loginLoding(status) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_LODING"],
    payload: status
  };
};
var logout = function logout(status) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["ON_LOGOUT"],
    payload: status
  };
};
var setActiveTab = function setActiveTab(tab) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_ACTIVE_TAB"],
    payload: tab
  };
};
var setChatWith = function setChatWith(username) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_CHAT_WITH"],
    payload: username
  };
};
var chatededUsers = function chatededUsers(nav) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_CHATED_USERS"],
    payload: nav
  };
};
var unmountComponent = function unmountComponent(any) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["CHAT_COMPONENT_UNMOUNT"],
    payload: any
  };
};
var addNewUSer = function addNewUSer(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["ADD_NEW_USER"],
    payload: payload
  };
};
var removeRecentUser = function removeRecentUser(id) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_USER"],
    payload: id
  };
};
var updateLastMessageTime = function updateLastMessageTime(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["LAST_MESSAGE_TIME"],
    payload: {
      id: payload.id,
      time: payload.time
    }
  };
};
var setRoster = function setRoster(contacts) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_ROSTER"],
    payload: contacts
  };
};
var updateUserStatus = function updateUserStatus(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_STATUS"],
    payload: {
      id: payload.id,
      onlineStatus: payload.onlineStatus
    }
  };
};
var setAllUsers = function setAllUsers(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_ALL_USERS"],
    payload: payload
  };
};
var setOldMessages = function setOldMessages() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_OLD_MESSAGES"]
  };
};
var fetchUsers = function fetchUsers() {
  try {
    return /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api_index__WEBPACK_IMPORTED_MODULE_3__["default"].get("accounts/".concat(id, "/users"), {
                  headers: {
                    "x-auth-token": cokie.AuthToken
                  }
                });

              case 2:
                response = _context.sent;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_USERS"],
                  payload: response.data.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_ERROR"],
      payload: "error in fetching users"
    });
  }
};

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

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var initialState = {
  currentUser: {
    username: null,
    accountId: null,
    jid: null
  },
  accountId: null,
  userStatus: "unavailable",
  client: null,
  loginErrors: [],
  loading: false,
  activeTab: "chat",
  users: [],
  chatWith: {
    name: "A",
    status: "online"
  },
  newContact: "contact",
  componentUnmount: null,
  roster: "",
  alluserStatus: [],
  allusers: [],
  messages: [{
    from: 2,
    to: 1,
    messageTime: "2021-08-07 09:03:10",
    messageBody: "hello dear",
    chatType: "chat",
    direction: "received"
  }, {
    from: 2,
    to: 1,
    messageTime: "2021-08-07 09:03:10",
    messageBody: "hello dear",
    chatType: "chat",
    direction: "send"
  }],
  chatedUsers: [{
    id: 1,
    first_name: "JACKILINE",
    status: "online",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    lastMessageAt: "2021-08-07 09:03:10"
  }, {
    id: 2,
    first_name: "BRONNNZE",
    status: "offline",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "offline",
    lastMessageAt: "2021-08-07 09:03:56"
  }]
};

var user_reducer = function user_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_USER_STATUS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        userStatus: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_CLIENT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        client: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginErrors: [action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_LODING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_ACTIVE_TAB"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        activeTab: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: [action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_CHAT_WITH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatWith: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_OLD_MESSAGES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        messages: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.messages)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_CHATED_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        newContact: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["CHAT_COMPONENT_UNMOUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        componentUnmount: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["ADD_NEW_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatedUsers: [action.payload].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.chatedUsers))
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatedUsers: state.chatedUsers.filter(function (user) {
          return user.id !== action.payload;
        })
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["LAST_MESSAGE_TIME"]:
      return react_addons_update__WEBPACK_IMPORTED_MODULE_4___default()(state, {
        chatedUsers: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.payload.id, {
          lastMessageAt: {
            $set: action.payload.time
          }
        })
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_ROSTER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        roster: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.roster), [action.payload])
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["SET_ALL_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        allusers: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_STATUS"]:
      console.log("inside reducer");
      var found = state.alluserStatus && state.alluserStatus.length ? !!state.alluserStatus.find(function (u) {
        return u.id === action.payload.id;
      }) : false; //if the user is already

      if (found) {
        console.log("user alredy already exists");
        return _objectSpread(_objectSpread({}, state), {}, {
          alluserStatus: state.alluserStatus.map(function (userStatus, i) {
            return userStatus.id === action.payload.id ? _objectSpread(_objectSpread({}, userStatus), {}, {
              onlineStatus: action.payload.onlineStatus
            }) : userStatus;
          })
        }); //update the user status for fist time
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          alluserStatus: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.alluserStatus), [action.payload])
        });
      }

    default:
      {
        return state;
      }
  }
};

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  user: user_reducer
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9jaGF0Qm9hcmQvY3VzdG9tQ2hhdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiQ3VzdG9tQ2hhdCIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNoYXRXaXRoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJhbGxtZXNzYWdlcyIsIm1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInZvbHVtIiwic2V0Vm9sdW0iLCJzZWFyY2giLCJzZXRTZWFyY2giLCJhdWRpb2NhbGwiLCJzZXRBdWRpb2NhbGwiLCJhdWRpb3JlY2VpdmVjYWxsIiwic2V0QXVkaW9yZWNlaXZlY2FsbCIsInZpZGVvY2FsbCIsInNldFZpZGVvY2FsbCIsInZpZGVvc2NyZWVuIiwic2V0VmlkZW9TY3JlZW4iLCJwcm9maWxlVG9nZ2xlIiwic2V0UHJvZmlsZVRvZ2dsZSIsIm11dGUiLCJzZXRNdXRlIiwic3BlYWtlciIsInNldFNwZWFrZXIiLCJ1c2VDb250ZXh0IiwiQ3VzdG9taXplckNvbnRleHQiLCJoYW5kbGVDbGlja1JpZ2h0IiwibWFpbk1lbnUiLCJjaGF0Q3R4IiwiQ2hhdENvbnRleHQiLCJjaGF0TWVtYmVycyIsImNoYXRzIiwiY3VycmVudFVzZXIiLCJzZWxlY3RlZFVzZXIiLCJpc1R5ZXBpbmciLCJ0eXBpbmdNZXNzYWdlIiwic2VsZWN0ZWRDaGF0IiwiZmluZCIsIngiLCJ1c2VycyIsImluY2x1ZGVzIiwiaWQiLCJ0b2dnbGVBdWRpb2NhbGwiLCJ0b2dnbGVWaWRlb2NhbGwiLCJ0b2dnbGVBdWRpb1JlY2VpdmVDYWxsIiwiQXVkaW9SZWNlaXZlQ2FsbCIsIm1lc3NhZ2VzRW5kUmVmIiwidXNlUmVmIiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInByb2ZpbGVTaWRlQmFyVG9nZ2xlIiwidG9nZ2xlIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NOYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZWZyZXNoQ3ciLCJlIiwiY3VycmVudFRhcmdldCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJzZXRPbGRNZXNzYWdlcyIsInN0YXR1cyIsImJhY2tncm91bmRJbWFnZSIsInRodW1iIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkaXNwbGF5IiwibmFtZSIsInRpbWVWYWx1ZXMiLCJPcGVuQXBwU2lkZWJhciIsInRvZ2dsZVNtYWxsU2lkZSIsInNldFF1aWNrQWN0aW9uIiwicXVpY2tBY3Rpb24iLCJmaWx0ZXIiLCJpdGVtIiwiZnJvbSIsIm1hcCIsImlkeCIsInN0aWNrZXJzIiwiaW5kZXgiLCJwYXJ0aWNpcGF0b3JzIiwic2VuZGVyIiwidGltZSIsImNvb2tpZXMiLCJDb29raWVzIiwiY29raWUiLCJnZXQiLCJzZXRVc2VyIiwidHlwZSIsImFjdGlvblR5cGVzIiwicGF5bG9hZCIsInNldFVTZXJTdGF0dXMiLCJ1c2VyU3RhdHVzIiwic2V0Q2xpZW50IiwiY2xpZW50Iiwic2V0TG9naW5FcnJvciIsImVycm9yIiwibG9naW5Mb2RpbmciLCJsb2dvdXQiLCJzZXRBY3RpdmVUYWIiLCJ0YWIiLCJzZXRDaGF0V2l0aCIsInVzZXJuYW1lIiwiY2hhdGVkZWRVc2VycyIsIm5hdiIsInVubW91bnRDb21wb25lbnQiLCJhbnkiLCJhZGROZXdVU2VyIiwicmVtb3ZlUmVjZW50VXNlciIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInNldFJvc3RlciIsImNvbnRhY3RzIiwidXBkYXRlVXNlclN0YXR1cyIsIm9ubGluZVN0YXR1cyIsInNldEFsbFVzZXJzIiwiU0VUX09MRF9NRVNTQUdFUyIsImZldGNoVXNlcnMiLCJheGlvcyIsImhlYWRlcnMiLCJBdXRoVG9rZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnIiLCJpbml0aWFsU3RhdGUiLCJhY2NvdW50SWQiLCJqaWQiLCJsb2dpbkVycm9ycyIsImxvYWRpbmciLCJhY3RpdmVUYWIiLCJuZXdDb250YWN0IiwiY29tcG9uZW50VW5tb3VudCIsInJvc3RlciIsImFsbHVzZXJTdGF0dXMiLCJhbGx1c2VycyIsIm1lc3NhZ2VzIiwidG8iLCJtZXNzYWdlVGltZSIsIm1lc3NhZ2VCb2R5IiwiY2hhdFR5cGUiLCJkaXJlY3Rpb24iLCJjaGF0ZWRVc2VycyIsImZpcnN0X25hbWUiLCJtZXNnIiwibGFzdFNlZW5EYXRlIiwibGFzdE1lc3NhZ2VBdCIsInVzZXJfcmVkdWNlciIsImFjdGlvbiIsInVwZGF0ZSIsIiRzZXQiLCJjb25zb2xlIiwibG9nIiwiZm91bmQiLCJsZW5ndGgiLCJ1IiwiaSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFDNUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdILFFBQXRCO0FBQUEsR0FBRCxDQUE1QjtBQUNBLE1BQU1JLFdBQVcsR0FBR0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdFLE9BQXRCO0FBQUEsR0FBRCxDQUEvQjs7QUFFQSxrQkFBMEJDLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE0QkYs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QUVIO0FBQVM7QUFDUCxlQUFPakcsS0FBUDtBQUNEO0FBMUhIO0FBNEhELENBN0hEOztBQStIQSxJQUFNa0ssV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDbEssTUFBSSxFQUFFdUo7QUFENEIsQ0FBRCxDQUFuQztBQUdlVSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNjBjZTVlYTNiNjYwOTgzNDQ3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxCb2R5IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgVXNlcixcbiAgU2VhcmNoLFxuICBDaGV2cm9uTGVmdCxcbiAgUGhvbmUsXG4gIFZpZGVvLFxuICBQbHVzQ2lyY2xlLFxuICBUcmFzaDIsXG4gIFNsYXNoLFxuICBNb3JlVmVydGljYWwsXG4gIFVzZXJQbHVzLFxuICBQYXVzZSxcbiAgVm9sdW1lMixcbiAgRG93bmxvYWQsXG4gIFJvdGF0ZUN3LFxufSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuaW1wb3J0IENoYXRDb250ZXh0IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NoYXRDb250ZXh0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcInJlYWN0LXRpcHB5XCI7XG5pbXBvcnQgQ3VzdG9taXplckNvbnRleHQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3VzdG9taXplckNvbnRleHRcIjtcbmltcG9ydCB7IHNldE9sZE1lc3NhZ2VzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcbmNvbnN0IEN1c3RvbUNoYXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBjaGF0V2l0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0V2l0aCk7XG4gIGNvbnN0IGFsbG1lc3NhZ2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lc3NhZ2UpO1xuXG4gIGNvbnN0IFt2b2x1bSwgc2V0Vm9sdW1dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthdWRpb2NhbGwsIHNldEF1ZGlvY2FsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthdWRpb3JlY2VpdmVjYWxsLCBzZXRBdWRpb3JlY2VpdmVjYWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZpZGVvY2FsbCwgc2V0VmlkZW9jYWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZpZGVvc2NyZWVuLCBzZXRWaWRlb1NjcmVlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm9maWxlVG9nZ2xlLCBzZXRQcm9maWxlVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW211dGUsIHNldE11dGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3BlYWtlciwgc2V0U3BlYWtlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgaGFuZGxlQ2xpY2tSaWdodCwgbWFpbk1lbnUgfSA9IHVzZUNvbnRleHQoQ3VzdG9taXplckNvbnRleHQpO1xuICBjb25zdCBjaGF0Q3R4ID0gdXNlQ29udGV4dChDaGF0Q29udGV4dCk7XG4gIGNvbnN0IGNoYXRNZW1iZXJzID0gY2hhdEN0eC5jaGF0TWVtYmVycztcbiAgY29uc3QgY2hhdHMgPSBjaGF0Q3R4LmNoYXRzO1xuICBjb25zdCBjdXJyZW50VXNlciA9IGNoYXRDdHguY3VycmVudFVzZXI7XG4gIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRDdHguc2VsZWN0ZWRVc2VyO1xuICBjb25zdCBpc1R5ZXBpbmcgPSBjaGF0Q3R4LmlzVHllcGluZztcbiAgY29uc3QgdHlwaW5nTWVzc2FnZSA9IGNoYXRDdHgudHlwaW5nTWVzc2FnZTtcbiAgY29uc3Qgc2VsZWN0ZWRDaGF0ID1cbiAgICBjaGF0TWVtYmVycyAmJiBjaGF0cyAmJiBzZWxlY3RlZFVzZXJcbiAgICAgID8gY2hhdHMuZmluZChcbiAgICAgICAgICAoeCkgPT5cbiAgICAgICAgICAgIHgudXNlcnMuaW5jbHVkZXMoY3VycmVudFVzZXIuaWQpICYmXG4gICAgICAgICAgICB4LnVzZXJzLmluY2x1ZGVzKHNlbGVjdGVkVXNlci5pZClcbiAgICAgICAgKVxuICAgICAgOiBudWxsO1xuICBjb25zdCB0b2dnbGVBdWRpb2NhbGwgPSAoKSA9PiB7XG4gICAgc2V0QXVkaW9jYWxsKCFhdWRpb2NhbGwpO1xuICB9O1xuICBjb25zdCB0b2dnbGVWaWRlb2NhbGwgPSAoKSA9PiB7XG4gICAgc2V0VmlkZW9jYWxsKCF2aWRlb2NhbGwpO1xuICB9O1xuICBjb25zdCB0b2dnbGVBdWRpb1JlY2VpdmVDYWxsID0gKCkgPT4ge1xuICAgIHNldEF1ZGlvcmVjZWl2ZWNhbGwoIWF1ZGlvcmVjZWl2ZWNhbGwpO1xuICB9O1xuXG4gIGNvbnN0IEF1ZGlvUmVjZWl2ZUNhbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0QXVkaW9yZWNlaXZlY2FsbCh0cnVlKTtcbiAgICBzZXRBdWRpb2NhbGwoZmFsc2UpO1xuICB9O1xuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9O1xuICBjb25zdCBwcm9maWxlU2lkZUJhclRvZ2dsZSA9ICh0b2dnbGUpID0+IHtcbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGBzaWRlYmFyLWFjdGl2ZSBtYWluLXBhZ2UgbWVudS1hY3RpdmUgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgXCJsYXlvdXRfbW9kZVwiXG4gICAgICApfWA7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5jaGl0Y2hhdC1tYWluXCIpXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwic21hbGwtc2lkZWJhclwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLXNpZGViYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIHNldFByb2ZpbGVUb2dnbGUoIXRvZ2dsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gYHNpZGViYXItYWN0aXZlIG1haW4tcGFnZSAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICBcImxheW91dF9tb2RlXCJcbiAgICAgICl9YDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hpdGNoYXQtbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwic21hbGwtc2lkZWJhclwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLXNpZGViYXJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIHNldFByb2ZpbGVUb2dnbGUoIXRvZ2dsZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlZnJlc2hDdyA9IChlKSA9PiB7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJyZWZyZXNoZWRcIik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHR5cGluZ01lc3NhZ2UoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICAgIGRpc3BhdGNoKHNldE9sZE1lc3NhZ2VzKCkpO1xuICB9LCBbaXNUeWVwaW5nXSk7XG5cbiAgcmV0dXJuIGNoYXRXaXRoID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXMgY3VzdG9tLXNjcm9sbCBhY3RpdmUgd2FsbHBhcGVyc1wiIGlkPVwiY2hhdGluZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWRldGFpbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2Bmb3JtLWlubGluZSBzZWFyY2gtZm9ybSAke3NlYXJjaCA/IFwib3BlblwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWNsb3NlIGNsb3NlLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoKGZhbHNlKX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEgbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtci0zXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9maWxlU2lkZUJhclRvZ2dsZShwcm9maWxlVG9nZ2xlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2ZpbGUgbWVudS10cmlnZ2VyICR7Y2hhdFdpdGguc3RhdHVzfWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJ2Fzc2V0cy9pbWFnZXMvJHtzZWxlY3RlZFVzZXIudGh1bWJ9JylgLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg1PntjaGF0V2l0aC5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmFkZ2UgJHtcbiAgICAgICAgICAgICAgICAgICAgY2hhdFdpdGguc3RhdHVzID09PSBcIm9ubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJhZGdlLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJiYWRnZS1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NoYXRXaXRoLnN0YXR1cyA9PT0gXCJvbmxpbmVcIiA/IFwiQWN0aXZlXCIgOiBcIkluQWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1saWdodCBidXR0b24tZWZmZWN0IG11dGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWb2x1bSghdm9sdW0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3ZvbHVtID8gPHNwYW4gY2xhc3NOYW1lPVwiZWZmZWN0LXdhdmVcIj48L3NwYW4+IDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmEgZmEtdm9sdW1lLXVwICR7dm9sdW0gPyBcIlwiIDogXCJvZmZcIn1gfVxuICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLWxpZ2h0IHNlYXJjaCBzZWFyY2gtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2goIXNlYXJjaCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLWxpZ2h0IGJ1dHRvbi1lZmZlY3QgbW9iaWxlLXNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja1JpZ2h0KG1haW5NZW51KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYWxscyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBBdWRpbyBDYWxsXCJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWVuZFwiXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwibW91c2VlbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLWxpZ2h0IGJ1dHRvbi1lZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEF1ZGlvY2FsbCghYXVkaW9jYWxsKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFBob25lIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvd1wiXG4gICAgICAgICAgICAgICAgICBpc09wZW49e2F1ZGlvY2FsbH1cbiAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlQXVkaW9jYWxsfVxuICAgICAgICAgICAgICAgICAgY2VudGVyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keSBjbGFzc05hbWU9XCJwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1ZGlvY2FsbDEgY2FsbC1tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnLi4vYXNzZXRzL2ltYWdlcy9hdnRhci9iaWcvYXVkaW9jYWxsLmpwZycpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1hZ2VzL2F2dGFyL2JpZy9hdWRpb2NhbGwuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY29uIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlMlwiPkpvc2VwaGluIHdhdGVyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+bG9nIGFuZ2VsaW5hIGNhbGlmb3JuaWE8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1zdWNjZXNzIGJ1dHRvbi1lZmZlY3QgYnRuLXhsIGlzLWFuaW1hdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtBdWRpb1JlY2VpdmVDYWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaG9uZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tZGFuZ2VyIGJ1dHRvbi1lZmZlY3QgYnRuLXhsIGlzLWFuaW1hdGluZyBjYW5jZWxjYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUF1ZGlvY2FsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGhvbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWRlIGF1ZGlvcmN2Y2FsbCBzaG93XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiYXVkaW9yY3ZjYWxsXCJcbiAgICAgICAgICAgICAgICAgIGlzT3Blbj17YXVkaW9yZWNlaXZlY2FsbH1cbiAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlQXVkaW9SZWNlaXZlQ2FsbH1cbiAgICAgICAgICAgICAgICAgIGNlbnRlcmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHkgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW9jYWxsMiBjYWxsLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvYXZ0YXIvYmlnL2F1ZGlvY2FsbC5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJhc2ljVXNhZ2UyXCI+e3Byb3BzLnRpbWVWYWx1ZXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlMlwiPkpvc2VwaGluIHdhdGVyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+bG9nIGFuZ2VsaW5hIGNhbGlmb3JuaWE8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1saWdodCBidXR0b24tZWZmZWN0IG11dGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TXV0ZSghbXV0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmEgZmEtbWljcm9waG9uZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGUgPyBcIm9mZlwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1saWdodCBidXR0b24tZWZmZWN0IG11dGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3BlYWtlcighc3BlYWtlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmEgZmEtdm9sdW1lLXVwICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlciA/IFwib2ZmXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLWRhbmdlciBidXR0b24tZWZmZWN0IGJ0bi14bCBpcy1hbmltYXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQXVkaW9SZWNlaXZlQ2FsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGhvbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLWxpZ2h0IGJ1dHRvbi1lZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXBweS1jb250ZW50PVwiQWRkIENhbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyUGx1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tbGlnaHQgYnV0dG9uLWVmZmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcHB5LWNvbnRlbnQ9XCJQYXVzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhdXNlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlkZW8gQ2FsbFwiXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1lbmRcIlxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cIm1vdXNlZW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1saWdodCBidXR0b24tZWZmZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWRlb2NhbGwoIXZpZGVvY2FsbCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxWaWRlbyAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZpZGRpb2xvZyBmYWRlIHNob3cgJHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9zY3JlZW4gPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICBpc09wZW49e3ZpZGVvY2FsbH1cbiAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlVmlkZW9jYWxsfVxuICAgICAgICAgICAgICAgICAgY2VudGVyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvY2FsbCBjYWxsLW1vZGFsIFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnLi4vYXNzZXRzL2ltYWdlcy9hdnRhci9iaWcvdmlkZW9jYWxsX2JnLmpwZycpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9hdnRhci9iaWcvdmlkZW9jYWxsX2JnLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnLi4vYXNzZXRzL2ltYWdlcy9hdnRhci9iaWcvdmlkZW9jYWxsLmpwZycpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvYXZ0YXIvYmlnL3ZpZGVvY2FsbC5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIHZpZGVvY2FsbC1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzcHJvZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnLi4vYXNzZXRzL2ltYWdlcy9hdnRhci8yLmpwZycpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9hdnRhci8yLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvYXZ0YXIvMy5qcGcnKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvYXZ0YXIvMy5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+Sm9zZXBoaW4gd2F0ZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+QW1lcmljYSAsQ2FsaWZvcm5pYTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJiYXNpY1VzYWdlXCI+e3Byb3BzLnRpbWVWYWx1ZXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInpvb21jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1kYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlkZW9TY3JlZW4oIXZpZGVvc2NyZWVuKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvbG9nby9tYXhpbWl6ZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiem9vbSBzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1saWdodCBidXR0b24tZWZmZWN0IHBhdXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwcHktY29udGVudD1cIkhvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLWNvbnRyb2wtcGF1c2VcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1kYW5nZXIgYnV0dG9uLWVmZmVjdCBidG4teGwgaXMtYW5pbWF0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVZpZGVvY2FsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGhvbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLWxpZ2h0IGJ1dHRvbi1lZmZlY3QgbWljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwcHktY29udGVudD1cIk11dGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1pY3JvcGhvbmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWxsIEFwcHNcIlxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20tZW5kXCJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJtb3VzZWVudGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tbGlnaHQgYnV0dG9uLWVmZmVjdCBhcHBzLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuT3BlbkFwcFNpZGViYXIocHJvcHMudG9nZ2xlU21hbGxTaWRlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktbGF5b3V0LWdyaWQyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXQtZnJpZW5kLXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIGFjdGlvblwiXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwibW91c2VlbnRlclwiXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1lbmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1saWdodCBiZy10cmFuc3BhcmVudCBidXR0b24tZWZmZWN0IG91dHNpZGVcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFF1aWNrQWN0aW9uKCFwcm9wcy5xdWlja0FjdGlvbil9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNb3JlVmVydGljYWwgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhdC1mcmluZC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucXVpY2tBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICA/IHsgZGlzcGxheTogXCJibG9ja1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICA6IHsgZGlzcGxheTogXCJub25lXCIgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ1dHRvbi1lZmZlY3QgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+UHJvZmlsZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidXR0b24tZWZmZWN0IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNDaXJjbGUgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1PkFyY2hpdmU8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidXR0b24tZWZmZWN0IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+RGVsZXRlPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tb3V0bGluZS1saWdodCBidXR0b24tZWZmZWN0IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsYXNoIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5CbG9jazwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jaGF0XCI+XG4gICAgICAgIC8qKiBEaXNwbGF5aW5nIG1lc3NhZ2VzICovXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGF0YXBwZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNZXNzYWdlc0FyZWFcIj5cbiAgICAgICAgICAgIHthbGxtZXNzYWdlcyAmJlxuICAgICAgICAgICAgICBhbGxtZXNzYWdlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZyb20gPT09IGNoYXRXaXRoLm5hbWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpZHgpID0+IDxsaT57aXRlbS5tZXNzYWdlfTwvbGk+KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiB7c2VsZWN0ZWRVc2VyLmlkID09PSAxID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlcGxpZXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGUgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdhc3NldHMvaW1hZ2VzL2NvbnRhY3QvMi5qcGcnKWAsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jb250YWN0LzIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5BbGFuIGpvc2hlcGg8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxoNj4wMTo0MCBBTTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1zZy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtc2ctc2V0dGluZy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWRyb3Bkb3duLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1zZXR0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1tb3JlLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtc2ctZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNoYXJlXCI+PC9pPmZvcndhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvbmVcIj48L2k+Y29weVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyLW9cIj48L2k+cmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXRyYXNoXCI+PC9pPmRlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SGkgSSBhbSBBbGFuLDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1zZy1zZXR0aW5nLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PnlvdXIgcGVyc29uYWwgYXNzaXN0YW50IHRvIGhlbHAgeW91ICYjMTI4NTEyOzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBzbSBtbC0yXCI+IFI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctZHJvcGRvd24tbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLXNldHRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLW1vcmUtYWx0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hhcmVcIj48L2k+Zm9yd2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9uZVwiPjwvaT5jb3B5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXItb1wiPjwvaT5yYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktdHJhc2hcIj48L2k+ZGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlIG1yLTRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnYXNzZXRzL2ltYWdlcy9jb250YWN0LzEuanBnJylgLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvY29udGFjdC8xLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+Sm9zZXBoaW4gd2F0ZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxoNj4wMTozNSBBTTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1zZy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtc2ctc2V0dGluZy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaSBJIGFtIEpvc2VwaGluLCBjYW4geW91IGhlbHAgbWUgdG8gZmluZCBiZXN0IGNoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHA/LntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctZHJvcGRvd24tbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLXNldHRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLW1vcmUtYWx0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hhcmVcIj48L2k+Zm9yd2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9uZVwiPjwvaT5jb3B5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXItb1wiPjwvaT5yYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktdHJhc2hcIj48L2k+ZGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1zZy1zZXR0aW5nLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PiBpdCBzaG91bGQgZnJvbSBlbGl0ZSBhdXRoZXIgJiMxMjg1MTk7PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIHNtIG1sLTJcIj4gUjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1kcm9wZG93bi1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctc2V0dGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktbW9yZS1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaGFyZVwiPjwvaT5mb3J3YXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb25lXCI+PC9pPmNvcHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3Rhci1vXCI+PC9pPnJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS10cmFzaFwiPjwvaT5kZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlcGxpZXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGUgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdhc3NldHMvaW1hZ2VzL2NvbnRhY3QvMi5qcGcnKWAsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jb250YWN0LzIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5BbGFuIGpvc2hlcGg8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxoNj4wMTo0MCBBTTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1zZy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtc2ctc2V0dGluZy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWRyb3Bkb3duLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1zZXR0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1tb3JlLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNoYXJlXCI+PC9pPmZvcndhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvbmVcIj48L2k+Y29weVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyLW9cIj48L2k+cmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXRyYXNoXCI+PC9pPmRlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VyZSwgY2hpdGNoYXQgaXMgYmVzdCB0aGVtZSBmb3IgY2hhdGluZyBwcm9qZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBjYW4gaXQgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvdXNlci9waXhlbHN0cmFwL3BvcnRmb2xpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtc2ctc2V0dGluZy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLWV4Y2VsLW8gZm9udC1wcmltYXJ5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkRvY3VtZW50Lnhsc3g8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PjI1bWIgU2VwcmF0ZSBmaWxlPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYnRuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLW91dGxpbmUtbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2Fzc2V0cy9kb2MvRG9jdW1lbnQueGxzeFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrIHNtIG1sLTJcIj4gRDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1kcm9wZG93bi1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctc2V0dGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktbW9yZS1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaGFyZVwiPjwvaT5mb3J3YXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb25lXCI+PC9pPmNvcHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3Rhci1vXCI+PC9pPnJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS10cmFzaFwiPjwvaT5kZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGUgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdhc3NldHMvaW1hZ2VzL2NvbnRhY3QvMS5qcGcnKWAsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jb250YWN0LzEuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5Kb3NlcGhpbiB3YXRlcjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2PjAxOjQyIEFNPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXNnLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1zZy1zZXR0aW5nLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkkgdGhpbmsgaXQncyBiZXN0IGZvciBteSBwcm9qZWN0LjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWRyb3Bkb3duLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1zZXR0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1tb3JlLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNoYXJlXCI+PC9pPmZvcndhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvbmVcIj48L2k+Y29weVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyLW9cIj48L2k+cmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXRyYXNoXCI+PC9pPmRlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtc2ctc2V0dGluZy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhdXRvLWdhbGxlcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnYXNzZXRzL2ltYWdlcy9tZWRpYS8xLmpwZycpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbWVkaWEvMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdhc3NldHMvaW1hZ2VzL21lZGlhLzIuanBnJylgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9tZWRpYS8yLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJ2Fzc2V0cy9pbWFnZXMvbWVkaWEvMy5qcGcnKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL21lZGlhLzMuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyZXNoLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utb3V0bGluZS1wcmltYXJ5IHJlZnJlc2ggc20gbWwtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcmVmcmVzaEN3KGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3RhdGVDdyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIHNtIG1sLTJcIj5GPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1kcm9wZG93bi1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctc2V0dGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktbW9yZS1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaGFyZVwiPjwvaT5mb3J3YXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb25lXCI+PC9pPmNvcHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3Rhci1vXCI+PC9pPnJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS10cmFzaFwiPjwvaT5kZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlcGxpZXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGUgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdhc3NldHMvaW1hZ2VzL2NvbnRhY3QvMi5qcGcnKWAsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jb250YWN0LzIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5BbGFuIGpvc2hlcGg8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxoNj4wMTo0NSBBTTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1zZy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtc2ctc2V0dGluZy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UgaGF2ZSBhbnkgb3RoZXIgcXVlcnkgdGhlbiBmZWVsIGZyZWUgdG8gYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWRyb3Bkb3duLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1zZXR0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1tb3JlLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNoYXJlXCI+PC9pPmZvcndhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvbmVcIj48L2k+Y29weVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyLW9cIj48L2k+cmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXRyYXNoXCI+PC9pPmRlbGV0ZXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgKX0gKi99XG4gICAgICAgICAgey8qIHtzZWxlY3RlZENoYXQ/Lm1lc3NhZ2VzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBzZWxlY3RlZENoYXQubWVzc2FnZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0aWNpcGF0b3JzID0gY2hhdE1lbWJlcnMuZmluZChcbiAgICAgICAgICAgICAgICAoeCkgPT4geC5pZCA9PT0gaXRlbS5zZW5kZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VuZGVyICE9PSBjdXJyZW50VXNlci5pZCA/IFwic2VudFwiIDogXCJyZXBsaWVzXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlIG1yLTRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJ2Fzc2V0cy9pbWFnZXMvJHtwYXJ0aWNpcGF0b3JzLnRodW1ifScpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdhc3NldHMvaW1hZ2VzLyR7cGFydGljaXBhdG9ycy50aHVtYn0nKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2Fzc2V0cy9pbWFnZXMvJHtwYXJ0aWNpcGF0b3JzLnRodW1ifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtc2ctYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cGFydGljaXBhdG9ycy5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57aXRlbS50aW1lfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtc2ctc2V0dGluZy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PiB7aXRlbS50ZXh0fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucmVhZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBzbSBtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWRyb3Bkb3duLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLXNldHRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktbW9yZS1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXNnLWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VuZGVyICE9PSBjdXJyZW50VXNlci5pZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRvcnMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBkaXNwbGF5OiBcIm5vbmVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHsgZGlzcGxheTogXCJibG9ja1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hhcmVcIj48L2k+Zm9yd2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvbmVcIj48L2k+Y29weVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3Rhci1vXCI+PC9pPnJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktdHJhc2hcIj48L2k+ZGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkgXG4gICAgICAgICAgKSA6IHNlbGVjdGVkVXNlci5pZCA9PT0gMSA/IChcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNoYXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0Y2hhdCBhbmltYXQtcmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ19jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zczFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3QxXCI+IDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxsLWxpc3QtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jaGF0LnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZC1iZ1wiPlxuICAgICAgICAgICAgICAgICAgPGk+PC9pPlxuICAgICAgICAgICAgICAgICAgPGk+PC9pPlxuICAgICAgICAgICAgICAgICAgPGk+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPlNlbGVjdCBhIGNoYXQgdG8gcmVhZCBtZXNzYWdlczwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfSovfVxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VudCBsYXN0IHR5cGluZy1tXCJcbiAgICAgICAgICAgIHN0eWxlPXtpc1R5ZXBpbmcgPyB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlIG1yLTRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJ2Fzc2V0cy9pbWFnZXMvJHtzZWxlY3RlZFVzZXIudGh1bWJ9JylgLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctaW1nIGltZy1mbHVpZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2AvYXNzZXRzL2ltYWdlcy8ke3NlbGVjdGVkVXNlci50aHVtYn1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiQXZhdGFyXCJcblx0XHRcdFx0XHRcdFx0XHQvPiBcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1zZy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxoNT57c2VsZWN0ZWRVc2VyLm5hbWV9PC9oNT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBpbmctbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAge3NlbGVjdGVkQ2hhdD8uc3RpY2tlcnM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2lwYXRvcnMgPSBjaGF0TWVtYmVycy5maW5kKCh4KSA9PiB4LmlkID09PSBpdGVtLnNlbmRlcik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVwbGllc1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtc2ctYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3BhcnRpY2lwYXRvcnMubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntpdGVtLnRpbWV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtc2ctc2V0dGluZy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnN0aWNrZXJzfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzY3JvbGxUb0JvdHRvbSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIFwiXCJcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUNoYXQ7XG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xyXG5jb25zdCBpZCA9IFwiZmJkY2QzYzk0YWY5ZmZhYTEyZjBmZjQzMDhkM2I5YmRcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbmNvbnN0IGNva2llID0gY29va2llcy5nZXQoXCJjcmVkZW50aWFsc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyID0gKHVzZXIpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVIsXHJcbiAgcGF5bG9hZDogdXNlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VVNlclN0YXR1cyA9ICh1c2VyU3RhdHVzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9VU0VSX1NUQVRVUyxcclxuICBwYXlsb2FkOiB1c2VyU3RhdHVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDbGllbnQgPSAoY2xpZW50KSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9DTElFTlQsXHJcbiAgcGF5bG9hZDogY2xpZW50LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2dpbkVycm9yID0gKGVycm9yKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX0VSUk9SLFxyXG4gIHBheWxvYWQ6IGVycm9yLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luTG9kaW5nID0gKHN0YXR1cykgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9MT0RJTkcsXHJcbiAgcGF5bG9hZDogc3RhdHVzLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IChzdGF0dXMpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuT05fTE9HT1VULFxyXG4gIHBheWxvYWQ6IHN0YXR1cyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVUYWIgPSAodGFiKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfVEFCLFxyXG4gIHBheWxvYWQ6IHRhYixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2hhdFdpdGggPSAodXNlcm5hbWUpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NIQVRfV0lUSCxcclxuICBwYXlsb2FkOiB1c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhdGVkZWRVc2VycyA9IChuYXYpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NIQVRFRF9VU0VSUyxcclxuICBwYXlsb2FkOiBuYXYsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVubW91bnRDb21wb25lbnQgPSAoYW55KSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQsXHJcbiAgcGF5bG9hZDogYW55LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGROZXdVU2VyID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuQUREX05FV19VU0VSLFxyXG4gIHBheWxvYWQ6IHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVJlY2VudFVzZXIgPSAoaWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuUkVNT1ZFX1VTRVIsXHJcbiAgcGF5bG9hZDogaWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxhc3RNZXNzYWdlVGltZSA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxBU1RfTUVTU0FHRV9USU1FLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkOiBwYXlsb2FkLmlkLFxyXG4gICAgdGltZTogcGF5bG9hZC50aW1lLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFJvc3RlciA9IChjb250YWN0cykgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfUk9TVEVSLFxyXG4gIHBheWxvYWQ6IGNvbnRhY3RzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyU3RhdHVzID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuVVBEQVRFX1VTRVJfU1RBVFVTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkOiBwYXlsb2FkLmlkLFxyXG4gICAgb25saW5lU3RhdHVzOiBwYXlsb2FkLm9ubGluZVN0YXR1cyxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBbGxVc2VycyA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9BTExfVVNFUlMsXHJcbiAgcGF5bG9hZDogcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0T2xkTWVzc2FnZXMgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9PTERfTUVTU0FHRVMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGFjY291bnRzLyR7aWR9L3VzZXJzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6IGNva2llLkF1dGhUb2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfVVNFUlMsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX0VSUk9SLFxyXG4gICAgICBwYXlsb2FkOiBcImVycm9yIGluIGZldGNoaW5nIHVzZXJzXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXBkYXRlIGZyb20gXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCI7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBjdXJyZW50VXNlcjogeyB1c2VybmFtZTogbnVsbCwgYWNjb3VudElkOiBudWxsLCBqaWQ6IG51bGwgfSxcclxuICBhY2NvdW50SWQ6IG51bGwsXHJcbiAgdXNlclN0YXR1czogXCJ1bmF2YWlsYWJsZVwiLFxyXG4gIGNsaWVudDogbnVsbCxcclxuICBsb2dpbkVycm9yczogW10sXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgYWN0aXZlVGFiOiBcImNoYXRcIixcclxuICB1c2VyczogW10sXHJcbiAgY2hhdFdpdGg6IHsgbmFtZTogXCJBXCIsIHN0YXR1czogXCJvbmxpbmVcIiB9LFxyXG4gIG5ld0NvbnRhY3Q6IFwiY29udGFjdFwiLFxyXG4gIGNvbXBvbmVudFVubW91bnQ6IG51bGwsXHJcbiAgcm9zdGVyOiBcIlwiLFxyXG4gIGFsbHVzZXJTdGF0dXM6IFtdLFxyXG4gIGFsbHVzZXJzOiBbXSxcclxuICBtZXNzYWdlczogW1xyXG4gICAge1xyXG4gICAgICBmcm9tOiAyLFxyXG4gICAgICB0bzogMSxcclxuICAgICAgbWVzc2FnZVRpbWU6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgICBtZXNzYWdlQm9keTogXCJoZWxsbyBkZWFyXCIsXHJcbiAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcclxuICAgICAgZGlyZWN0aW9uOiBcInJlY2VpdmVkXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmcm9tOiAyLFxyXG4gICAgICB0bzogMSxcclxuICAgICAgbWVzc2FnZVRpbWU6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgICBtZXNzYWdlQm9keTogXCJoZWxsbyBkZWFyXCIsXHJcbiAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcclxuICAgICAgZGlyZWN0aW9uOiBcInNlbmRcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGF0ZWRVc2VyczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZmlyc3RfbmFtZTogXCJKQUNLSUxJTkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBtZXNnOiBcImhvdyBhcmUgeW91XCIsXHJcbiAgICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxyXG4gICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiQlJPTk5OWkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgbWVzZzogXCJob3cgYXJlIHlvdVwiLFxyXG4gICAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcclxuICAgICAgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgbGFzdE1lc3NhZ2VBdDogXCIyMDIxLTA4LTA3IDA5OjAzOjU2XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbmNvbnN0IHVzZXJfcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50VXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSX1NUQVRVUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyU3RhdHVzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NMSUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnQ6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dpbkVycm9yczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fTE9ESU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0FDVElWRV9UQUI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWN0aXZlVGFiOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJzOiBbYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVF9XSVRIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYXRXaXRoOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX09MRF9NRVNTQUdFUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlczogWy4uLnN0YXRlLm1lc3NhZ2VzXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NIQVRFRF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBuZXdDb250YWN0OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcG9uZW50VW5tb3VudDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5BRERfTkVXX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcblxyXG4gICAgICAgIGNoYXRlZFVzZXJzOiBbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLmNoYXRlZFVzZXJzXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVNT1ZFX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcblxyXG4gICAgICAgIGNoYXRlZFVzZXJzOiBzdGF0ZS5jaGF0ZWRVc2Vycy5maWx0ZXIoXHJcbiAgICAgICAgICAodXNlcikgPT4gdXNlci5pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTEFTVF9NRVNTQUdFX1RJTUU6XHJcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcclxuICAgICAgICBjaGF0ZWRVc2Vyczoge1xyXG4gICAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmlkXToge1xyXG4gICAgICAgICAgICBsYXN0TWVzc2FnZUF0OiB7ICRzZXQ6IGFjdGlvbi5wYXlsb2FkLnRpbWUgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfUk9TVEVSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHJvc3RlcjogWy4uLnN0YXRlLnJvc3RlciwgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQUxMX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFsbHVzZXJzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVBEQVRFX1VTRVJfU1RBVFVTOlxyXG4gICAgICBjb25zb2xlLmxvZyhcImluc2lkZSByZWR1Y2VyXCIpO1xyXG4gICAgICBsZXQgZm91bmQgPVxyXG4gICAgICAgIHN0YXRlLmFsbHVzZXJTdGF0dXMgJiYgc3RhdGUuYWxsdXNlclN0YXR1cy5sZW5ndGhcclxuICAgICAgICAgID8gISFzdGF0ZS5hbGx1c2VyU3RhdHVzLmZpbmQoKHUpID0+IHUuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVxyXG4gICAgICAgICAgOiBmYWxzZTtcclxuXHJcbiAgICAgIC8vaWYgdGhlIHVzZXIgaXMgYWxyZWFkeVxyXG4gICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgYWxyZWR5IGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFsbHVzZXJTdGF0dXM6IHN0YXRlLmFsbHVzZXJTdGF0dXMubWFwKCh1c2VyU3RhdHVzLCBpKSA9PlxyXG4gICAgICAgICAgICB1c2VyU3RhdHVzLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICAgICAgID8geyAuLi51c2VyU3RhdHVzLCBvbmxpbmVTdGF0dXM6IGFjdGlvbi5wYXlsb2FkLm9ubGluZVN0YXR1cyB9XHJcbiAgICAgICAgICAgICAgOiB1c2VyU3RhdHVzXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIHRoZSB1c2VyIHN0YXR1cyBmb3IgZmlzdCB0aW1lXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWxsdXNlclN0YXR1czogWy4uLnN0YXRlLmFsbHVzZXJTdGF0dXMsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHVzZXI6IHVzZXJfcmVkdWNlcixcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9