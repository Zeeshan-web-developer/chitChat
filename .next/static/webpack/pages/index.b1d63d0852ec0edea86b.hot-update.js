webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/chatBoard/messageInput.js":
/*!**********************************************!*\
  !*** ./containers/chatBoard/messageInput.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _helpers_chatContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/chatContext */ "./helpers/chatContext/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var _leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../leftSidebar/datetime */ "./containers/leftSidebar/datetime.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\chat\\containers\\chatBoard\\messageInput.js",
    _this = undefined,
    _s = $RefreshSig$();











var MessageInput = function MessageInput() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var client = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.client;
  });
  var currentUserId = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.jid;
  });
  var selectedUSerId = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.chatWith.id;
  });
  var chatCtx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_chatContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var chats = chatCtx.chats;
  var currentUser = chatCtx.currentUser;
  var selectedUser = chatCtx.selectedUser;
  var sendMessage = chatCtx.sendMessage;
  var replyMessage = chatCtx.replyMessage;
  var sendImages = chatCtx.sendImages;
  var typingMessage = chatCtx.typingMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      emojis = _useState[0],
      setEmojis = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      stickers = _useState2[0],
      setStickers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      sticker = _useState3[0],
      setSticker = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      emoji = _useState4[0],
      setEmoji = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      contactpoll = _useState5[0],
      setContactpoll = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      messageInput = _useState6[0],
      setMessageInput = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      snippetModal = _useState7[0],
      setSnippetModal = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      pollModal = _useState8[0],
      setPollModal = _useState8[1];

  var toggleSnippetModal = function toggleSnippetModal() {
    setSnippetModal(!snippetModal);
    setContactpoll(false);
  };

  var togglePollModal = function togglePollModal() {
    setPollModal(!pollModal);
    setContactpoll(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/api/emoji.json").then(function (res) {
      return setEmojis(res.data);
    });
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/api/sticker.json").then(function (res) {
      return setStickers(res.data);
    });
  }, []);

  var selcectedStickers = function selcectedStickers(stic) {
    var currentUserId = currentUser.id;
    var selectedUserId = selectedUser.id;
    sendImages(currentUserId, selectedUserId, stic, chats);
    setSticker(false);
  };

  var hideAndShowSticker = function hideAndShowSticker(stic) {
    setEmoji(false);
    setContactpoll(false);
    setSticker(!stic);
  };

  var hideAndShowEmoji = function hideAndShowEmoji(emoj) {
    setSticker(false);
    setContactpoll(false);
    setEmoji(!emoj);
  };

  var hideAndShowContactPoll = function hideAndShowContactPoll(contpoll) {
    setEmoji(false);
    setSticker(false);
    setContactpoll(!contpoll);
  };

  var getEmoji = function getEmoji(emoj) {
    setMessageInput(messageInput + emoj.emoji);
    setEmoji(false);
  };

  var handleMessageChange = function handleMessageChange(message) {
    setMessageInput(message);
  };

  var handleMessagePress = function handleMessagePress(e) {
    if (e.key === "Enter" || e === "send") {
      var container = document.querySelector(".messages");
      setTimeout(function () {
        container.scrollBy({
          top: 200,
          behavior: "smooth"
        });
      }, 310);

      if (messageInput.length > 0) {
        setMessageInput(""); // typingMessage(true);

        console.log("message", messageInput); // Here we need to send meesage to the user

        var newMessage = {
          from: currentUserId,
          to: selectedUserId,
          messageTime: Object(_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_6__["default"])(),
          messageBody: messageInput,
          chatType: "chat",
          direction: "send"
        };
        dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["setNewMessage"])(newMessage));
        client && client.sendMessage(newMessage);
      }
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "message-input",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "wrap emojis-main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
        className: "icon-btn btn-outline-primary button-effect mr-3 toggle-sticker outside ".concat(sticker ? "active" : ""),
        href: "#",
        onClick: function onClick() {
          return hideAndShowSticker(sticker);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("svg", {
          id: "Layer_1",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          xlink: "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          width: "2158px",
          height: "2148px",
          viewBox: "0 0 2158 2148",
          enableBackground: "new 0 0 2158 2148",
          space: "preserve",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "60",
            strokeMiterlimit: "10",
            d: "M699,693                        c0,175.649,0,351.351,0,527c36.996,0,74.004,0,111,0c18.058,0,40.812-2.485,57,1c11.332,0.333,22.668,0.667,34,1                        c7.664,2.148,20.769,14.091,25,20c8.857,12.368,6,41.794,6,62c0,49.329,0,98.672,0,148c175.649,0,351.351,0,527,0                        c0-252.975,0-506.025,0-759C1205.692,693,952.308,693,699,693z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M886,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C877.255,799.833,882.716,801.036,886,799z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1258,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C1249.255,799.833,1254.716,801.036,1258,799z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1345,1184c-0.723,18.71-11.658,29.82-20,41c-18.271,24.489-50.129,37.183-83,47                        c-7.333,1-14.667,2-22,3c-12.013,2.798-33.636,5.15-44,3c-11.332-0.333-22.668-0.667-34-1c-15.332-3-30.668-6-46-9                        c-44.066-14.426-80.944-31.937-110-61c-22.348-22.353-38.992-45.628-37-90c0.667,0,1.333,0,2,0c9.163,5.585,24.723,3.168,36,6                        c26.211,6.583,54.736,7.174,82,14c34.068,8.53,71.961,10.531,106,19c9.999,1.333,20.001,2.667,30,4c26.193,6.703,54.673,7.211,82,14                        C1304.894,1178.445,1325.573,1182.959,1345,1184z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("polygon", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            points: "668.333,1248.667 901.667,1482 941.667,1432 922.498,1237.846                         687,1210.667 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "dot-btn dot-primary mr-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
          className: "icon-btn btn-outline-primary button-effect toggle-emoji ".concat(emoji ? "active" : ""),
          href: "#",
          onClick: function onClick() {
            return hideAndShowEmoji(emoji);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Smile"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "contact-poll",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
          className: "icon-btn btn-outline-primary mr-4 outside",
          href: "#",
          onClick: function onClick() {
            return hideAndShowContactPoll(contactpoll);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
            className: "fa fa-plus"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "contact-poll-content",
          style: contactpoll ? {
            display: "block"
          } : {
            display: "none"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Image"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 19
                }, _this), "gallery"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Camera"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 19
                }, _this), "camera"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                "data-toggle": "modal",
                "data-target": "#snippetModal",
                onClick: function onClick() {
                  return toggleSnippetModal();
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Code"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 19
                }, _this), "Code Snippest"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["User"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, _this), "contact"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["MapPin"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 19
                }, _this), "location"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Clipboard"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 19
                }, _this), "document"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                "data-toggle": "modal",
                "data-target": "#pollModal",
                onClick: function onClick() {
                  return togglePollModal();
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["BarChart2"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, _this), "poll"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Paperclip"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 19
                }, _this), "attach"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
            isOpen: snippetModal,
            toggle: toggleSnippetModal,
            className: "snippet-modal-main add-popup",
            centered: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
              toggle: toggleSnippetModal,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
                className: "modal-title",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
                  className: "fa fa-code"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 19
                }, _this), "code snippets"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
                className: "default-form",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
                  children: "creat snippets"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                    className: "form-control",
                    type: "text",
                    placeholder: "title(optional)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("select", {
                    className: "mb-0",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                      children: "ebnf"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 278,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                      children: "c++"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                      children: "diff"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                      children: "dart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 281,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("textarea", {
                    className: "form-control",
                    rows: "5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                    className: "form-control mb-0",
                    type: "text",
                    placeholder: "add commant (optional)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "form-group mb-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "btn-snipate",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                      className: "btn btn-danger button-effect btn-sm mr-3",
                      href: "#",
                      onClick: toggleSnippetModal,
                      children: "Cancel"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 296,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                      className: "btn btn-primary button-effect btn-sm",
                      href: "#",
                      onClick: toggleSnippetModal,
                      children: "Create & post"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 303,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 295,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
            isOpen: pollModal,
            toggle: togglePollModal,
            className: "pol-modal-main add-popup",
            centered: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "modal-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
                toggle: togglePollModal,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
                  className: "modal-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
                    "data-feather": "bar-chart-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 21
                  }, _this), "poll"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
                  className: "default-form",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
                    children: "create poll"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "ask que"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 332,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "add commatn"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 337,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "option 1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 344,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "option 2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 349,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                      className: "add-option",
                      href: "#",
                      children: "add an option"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 354,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "form-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "post-poll",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("ul", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
                          children: ["post poll in", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                            className: "pt-0",
                            children: "test name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 363,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 361,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
                          children: ["poll expier in 7 days", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                            className: "pt-0",
                            children: "test name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 367,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 365,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 360,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 359,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 358,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "form-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "allow-group",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                        className: "allow-check",
                        type: "checkbox"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 374,
                        columnNumber: 25
                      }, _this), "Allow users to vote anonymously"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 373,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 372,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "creat-poll-btn",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                      className: "btn btn-primary button-effect btn-sm",
                      href: "#",
                      onClick: togglePollModal,
                      children: "Create poll"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 379,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 378,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
        className: "setemoj",
        value: messageInput,
        type: "text",
        placeholder: "Write your message...",
        onKeyPress: function onKeyPress(e) {
          return handleMessagePress(e);
        },
        onChange: function onChange(e) {
          return handleMessageChange(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
        className: "icon-btn btn-outline-primary button-effect mr-3 ml-3",
        href: "#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Mic"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
        className: "submit icon-btn btn-primary ".concat(messageInput.trim() ? "" : "disabled"),
        onClick: function onClick() {
          return handleMessagePress("send");
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Send"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "emojis-contain ".concat(emoji ? "open" : ""),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "emojis-sub-contain custom-scroll",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("ul", {
            children: emojis.map(function (item, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
                onClick: function onClick() {
                  return getEmoji(item);
                },
                children: item.emoji
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 420,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "sticker-contain ".concat(sticker ? "open" : ""),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "sticker-sub-contain custom-scroll",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("ul", {
            children: stickers.map(function (item, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
                onClick: function onClick() {
                  return selcectedStickers(item.stic);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  className: "img-fluid",
                  src: item.stic,
                  alt: "sticker"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 434,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 433,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};

_s(MessageInput, "5xDhLIDV1GocvEnZAyUna0Ek3gE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = MessageInput;
/* harmony default export */ __webpack_exports__["default"] = (MessageInput);

var _c;

$RefreshReg$(_c, "MessageInput");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9jaGF0Qm9hcmQvbWVzc2FnZUlucHV0LmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VJbnB1dCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjbGllbnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImN1cnJlbnRVc2VySWQiLCJqaWQiLCJzZWxlY3RlZFVTZXJJZCIsImNoYXRXaXRoIiwiaWQiLCJjaGF0Q3R4IiwidXNlQ29udGV4dCIsIkNoYXRDb250ZXh0IiwiY2hhdHMiLCJjdXJyZW50VXNlciIsInNlbGVjdGVkVXNlciIsInNlbmRNZXNzYWdlIiwicmVwbHlNZXNzYWdlIiwic2VuZEltYWdlcyIsInR5cGluZ01lc3NhZ2UiLCJ1c2VTdGF0ZSIsImVtb2ppcyIsInNldEVtb2ppcyIsInN0aWNrZXJzIiwic2V0U3RpY2tlcnMiLCJzdGlja2VyIiwic2V0U3RpY2tlciIsImVtb2ppIiwic2V0RW1vamkiLCJjb250YWN0cG9sbCIsInNldENvbnRhY3Rwb2xsIiwibWVzc2FnZUlucHV0Iiwic2V0TWVzc2FnZUlucHV0Iiwic25pcHBldE1vZGFsIiwic2V0U25pcHBldE1vZGFsIiwicG9sbE1vZGFsIiwic2V0UG9sbE1vZGFsIiwidG9nZ2xlU25pcHBldE1vZGFsIiwidG9nZ2xlUG9sbE1vZGFsIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInNlbGNlY3RlZFN0aWNrZXJzIiwic3RpYyIsInNlbGVjdGVkVXNlcklkIiwiaGlkZUFuZFNob3dTdGlja2VyIiwiaGlkZUFuZFNob3dFbW9qaSIsImVtb2oiLCJoaWRlQW5kU2hvd0NvbnRhY3RQb2xsIiwiY29udHBvbGwiLCJnZXRFbW9qaSIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJtZXNzYWdlIiwiaGFuZGxlTWVzc2FnZVByZXNzIiwiZSIsImtleSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldFRpbWVvdXQiLCJzY3JvbGxCeSIsInRvcCIsImJlaGF2aW9yIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5ld01lc3NhZ2UiLCJmcm9tIiwidG8iLCJtZXNzYWdlVGltZSIsImRhdGVUaW1lIiwibWVzc2FnZUJvZHkiLCJjaGF0VHlwZSIsImRpcmVjdGlvbiIsInNldE5ld01lc3NhZ2UiLCJkaXNwbGF5IiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwibWFwIiwiaXRlbSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDekIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdILE1BQXRCO0FBQUEsR0FBRCxDQUExQjtBQUNBLE1BQU1JLGFBQWEsR0FBR0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdFLEdBQXRCO0FBQUEsR0FBRCxDQUFqQztBQUNBLE1BQU1DLGNBQWMsR0FBR0wsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdJLFFBQVgsQ0FBb0JDLEVBQS9CO0FBQUEsR0FBRCxDQUFsQztBQUVBLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQ0MsNERBQUQsQ0FBMUI7QUFDQSxNQUFNQyxLQUFLLEdBQUdILE9BQU8sQ0FBQ0csS0FBdEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQ0ksV0FBNUI7QUFDQSxNQUFNQyxZQUFZLEdBQUdMLE9BQU8sQ0FBQ0ssWUFBN0I7QUFDQSxNQUFNQyxXQUFXLEdBQUdOLE9BQU8sQ0FBQ00sV0FBNUI7QUFDQSxN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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcVVELENBdGFEOztHQUFNdEYsWTtVQUNhRSx1RCxFQUNGRSx1RCxFQUNPQSx1RCxFQUNDQSx1RDs7O0tBSm5CSixZO0FBd2FTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMWQ2M2QwODUyZWMwZWRlYTg2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU21pbGUsXG4gIEltYWdlLFxuICBDYW1lcmEsXG4gIENvZGUsXG4gIFVzZXIsXG4gIE1hcFBpbixcbiAgQ2xpcGJvYXJkLFxuICBCYXJDaGFydDIsXG4gIFBhcGVyY2xpcCxcbiAgTWljLFxuICBTZW5kLFxufSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IENoYXRDb250ZXh0IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NoYXRDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldE5ld01lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuLi9sZWZ0U2lkZWJhci9kYXRldGltZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBNZXNzYWdlSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgY2xpZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNsaWVudCk7XG4gIGNvbnN0IGN1cnJlbnRVc2VySWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuamlkKTtcbiAgY29uc3Qgc2VsZWN0ZWRVU2VySWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGguaWQpO1xuXG4gIGNvbnN0IGNoYXRDdHggPSB1c2VDb250ZXh0KENoYXRDb250ZXh0KTtcbiAgY29uc3QgY2hhdHMgPSBjaGF0Q3R4LmNoYXRzO1xuICBjb25zdCBjdXJyZW50VXNlciA9IGNoYXRDdHguY3VycmVudFVzZXI7XG4gIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRDdHguc2VsZWN0ZWRVc2VyO1xuICBjb25zdCBzZW5kTWVzc2FnZSA9IGNoYXRDdHguc2VuZE1lc3NhZ2U7XG4gIGNvbnN0IHJlcGx5TWVzc2FnZSA9IGNoYXRDdHgucmVwbHlNZXNzYWdlO1xuICBjb25zdCBzZW5kSW1hZ2VzID0gY2hhdEN0eC5zZW5kSW1hZ2VzO1xuICBjb25zdCB0eXBpbmdNZXNzYWdlID0gY2hhdEN0eC50eXBpbmdNZXNzYWdlO1xuICBjb25zdCBbZW1vamlzLCBzZXRFbW9qaXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3RpY2tlcnMsIHNldFN0aWNrZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3N0aWNrZXIsIHNldFN0aWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZW1vamksIHNldEVtb2ppXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRhY3Rwb2xsLCBzZXRDb250YWN0cG9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlSW5wdXQsIHNldE1lc3NhZ2VJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NuaXBwZXRNb2RhbCwgc2V0U25pcHBldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BvbGxNb2RhbCwgc2V0UG9sbE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVTbmlwcGV0TW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0U25pcHBldE1vZGFsKCFzbmlwcGV0TW9kYWwpO1xuICAgIHNldENvbnRhY3Rwb2xsKGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlUG9sbE1vZGFsID0gKCkgPT4ge1xuICAgIHNldFBvbGxNb2RhbCghcG9sbE1vZGFsKTtcbiAgICBzZXRDb250YWN0cG9sbChmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoXCIvYXBpL2Vtb2ppLmpzb25cIikudGhlbigocmVzKSA9PiBzZXRFbW9qaXMocmVzLmRhdGEpKTtcbiAgICBheGlvcy5nZXQoXCIvYXBpL3N0aWNrZXIuanNvblwiKS50aGVuKChyZXMpID0+IHNldFN0aWNrZXJzKHJlcy5kYXRhKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZWxjZWN0ZWRTdGlja2VycyA9IChzdGljKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRVc2VySWQgPSBjdXJyZW50VXNlci5pZDtcbiAgICBsZXQgc2VsZWN0ZWRVc2VySWQgPSBzZWxlY3RlZFVzZXIuaWQ7XG4gICAgc2VuZEltYWdlcyhjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZCwgc3RpYywgY2hhdHMpO1xuICAgIHNldFN0aWNrZXIoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVBbmRTaG93U3RpY2tlciA9IChzdGljKSA9PiB7XG4gICAgc2V0RW1vamkoZmFsc2UpO1xuICAgIHNldENvbnRhY3Rwb2xsKGZhbHNlKTtcbiAgICBzZXRTdGlja2VyKCFzdGljKTtcbiAgfTtcblxuICBjb25zdCBoaWRlQW5kU2hvd0Vtb2ppID0gKGVtb2opID0+IHtcbiAgICBzZXRTdGlja2VyKGZhbHNlKTtcbiAgICBzZXRDb250YWN0cG9sbChmYWxzZSk7XG4gICAgc2V0RW1vamkoIWVtb2opO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVBbmRTaG93Q29udGFjdFBvbGwgPSAoY29udHBvbGwpID0+IHtcbiAgICBzZXRFbW9qaShmYWxzZSk7XG4gICAgc2V0U3RpY2tlcihmYWxzZSk7XG4gICAgc2V0Q29udGFjdHBvbGwoIWNvbnRwb2xsKTtcbiAgfTtcblxuICBjb25zdCBnZXRFbW9qaSA9IChlbW9qKSA9PiB7XG4gICAgc2V0TWVzc2FnZUlucHV0KG1lc3NhZ2VJbnB1dCArIGVtb2ouZW1vamkpO1xuICAgIHNldEVtb2ppKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNZXNzYWdlQ2hhbmdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICBzZXRNZXNzYWdlSW5wdXQobWVzc2FnZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVzc2FnZVByZXNzID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlID09PSBcInNlbmRcIikge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZXNcIik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbEJ5KHsgdG9wOiAyMDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgfSwgMzEwKTtcblxuICAgICAgaWYgKG1lc3NhZ2VJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldE1lc3NhZ2VJbnB1dChcIlwiKTtcbiAgICAgICAgLy8gdHlwaW5nTWVzc2FnZSh0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIsIG1lc3NhZ2VJbnB1dCk7XG4gICAgICAgIC8vIEhlcmUgd2UgbmVlZCB0byBzZW5kIG1lZXNhZ2UgdG8gdGhlIHVzZXJcbiAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlcklkLFxuICAgICAgICAgIHRvOiBzZWxlY3RlZFVzZXJJZCxcbiAgICAgICAgICBtZXNzYWdlVGltZTogZGF0ZVRpbWUoKSxcbiAgICAgICAgICBtZXNzYWdlQm9keTogbWVzc2FnZUlucHV0LFxuICAgICAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcbiAgICAgICAgICBkaXJlY3Rpb246IFwic2VuZFwiLFxuICAgICAgICB9O1xuICAgICAgICBkaXNwYXRjaChzZXROZXdNZXNzYWdlKG5ld01lc3NhZ2UpKTtcbiAgICAgICAgY2xpZW50ICYmIGNsaWVudC5zZW5kTWVzc2FnZShuZXdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaW5wdXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcCBlbW9qaXMtbWFpblwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT17YGljb24tYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnV0dG9uLWVmZmVjdCBtci0zIHRvZ2dsZS1zdGlja2VyIG91dHNpZGUgJHtcbiAgICAgICAgICAgIHN0aWNrZXIgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaWRlQW5kU2hvd1N0aWNrZXIoc3RpY2tlcil9XG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBpZD1cIkxheWVyXzFcIlxuICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgICAgd2lkdGg9XCIyMTU4cHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjE0OHB4XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjE1OCAyMTQ4XCJcbiAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDIxNTggMjE0OFwiXG4gICAgICAgICAgICBzcGFjZT1cInByZXNlcnZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjYwXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgICAgICAgZD1cIk02OTksNjkzICAgICAgICAgICAgICAgICAgICAgICAgYzAsMTc1LjY0OSwwLDM1MS4zNTEsMCw1MjdjMzYuOTk2LDAsNzQuMDA0LDAsMTExLDBjMTguMDU4LDAsNDAuODEyLTIuNDg1LDU3LDFjMTEuMzMyLDAuMzMzLDIyLjY2OCwwLjY2NywzNCwxICAgICAgICAgICAgICAgICAgICAgICAgYzcuNjY0LDIuMTQ4LDIwLjc2OSwxNC4wOTEsMjUsMjBjOC44NTcsMTIuMzY4LDYsNDEuNzk0LDYsNjJjMCw0OS4zMjksMCw5OC42NzIsMCwxNDhjMTc1LjY0OSwwLDM1MS4zNTEsMCw1MjcsMCAgICAgICAgICAgICAgICAgICAgICAgIGMwLTI1Mi45NzUsMC01MDYuMDI1LDAtNzU5QzEyMDUuNjkyLDY5Myw5NTIuMzA4LDY5Myw2OTksNjkzelwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk04ODYsNzk5YzU5LjE3Mi0wLjc2NSw5My40MzEsMjUuMjg5LDExMSw2NmM2LjQxNiwxNC44NjcsMTQuNjEyLDM5Ljg1OCw5LDYzICAgICAgICAgICAgICAgICAgICAgICAgYy0yLjM5MSw5Ljg1Ny01LjA3NiwyMC4xMzgtOSwyOWMtMTUuNzk0LDM1LjY3MS00Ny4xMjksNTMuNjc0LTkwLDYzYy0yMC45NzksNC41NjMtNDIuNDYzLTQuNTQzLTU1LTEwICAgICAgICAgICAgICAgICAgICAgICAgYy00Mi43NzMtMTguNjE3LTg1LjY1Mi03Ny4yNDYtNTktMTQxYzEwLjYzNy0yNS40NDUsMzEuMDI0LTQ5LDU2LTYwYzcuOTk5LTIuNjY3LDE2LjAwMS01LjMzMywyNC04ICAgICAgICAgICAgICAgICAgICAgICAgQzg3Ny4yNTUsNzk5LjgzMyw4ODIuNzE2LDgwMS4wMzYsODg2LDc5OXpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMTI1OCw3OTljNTkuMTcyLTAuNzY1LDkzLjQzMSwyNS4yODksMTExLDY2YzYuNDE2LDE0Ljg2NywxNC42MTIsMzkuODU4LDksNjMgICAgICAgICAgICAgICAgICAgICAgICBjLTIuMzkxLDkuODU3LTUuMDc2LDIwLjEzOC05LDI5Yy0xNS43OTQsMzUuNjcxLTQ3LjEyOSw1My42NzQtOTAsNjNjLTIwLjk3OSw0LjU2My00Mi40NjMtNC41NDMtNTUtMTAgICAgICAgICAgICAgICAgICAgICAgICBjLTQyLjc3My0xOC42MTctODUuNjUyLTc3LjI0Ni01OS0xNDFjMTAuNjM3LTI1LjQ0NSwzMS4wMjQtNDksNTYtNjBjNy45OTktMi42NjcsMTYuMDAxLTUuMzMzLDI0LTggICAgICAgICAgICAgICAgICAgICAgICBDMTI0OS4yNTUsNzk5LjgzMywxMjU0LjcxNiw4MDEuMDM2LDEyNTgsNzk5elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xMzQ1LDExODRjLTAuNzIzLDE4LjcxLTExLjY1OCwyOS44Mi0yMCw0MWMtMTguMjcxLDI0LjQ4OS01MC4xMjksMzcuMTgzLTgzLDQ3ICAgICAgICAgICAgICAgICAgICAgICAgYy03LjMzMywxLTE0LjY2NywyLTIyLDNjLTEyLjAxMywyLjc5OC0zMy42MzYsNS4xNS00NCwzYy0xMS4zMzItMC4zMzMtMjIuNjY4LTAuNjY3LTM0LTFjLTE1LjMzMi0zLTMwLjY2OC02LTQ2LTkgICAgICAgICAgICAgICAgICAgICAgICBjLTQ0LjA2Ni0xNC40MjYtODAuOTQ0LTMxLjkzNy0xMTAtNjFjLTIyLjM0OC0yMi4zNTMtMzguOTkyLTQ1LjYyOC0zNy05MGMwLjY2NywwLDEuMzMzLDAsMiwwYzkuMTYzLDUuNTg1LDI0LjcyMywzLjE2OCwzNiw2ICAgICAgICAgICAgICAgICAgICAgICAgYzI2LjIxMSw2LjU4Myw1NC43MzYsNy4xNzQsODIsMTRjMzQuMDY4LDguNTMsNzEuOTYxLDEwLjUzMSwxMDYsMTljOS45OTksMS4zMzMsMjAuMDAxLDIuNjY3LDMwLDRjMjYuMTkzLDYuNzAzLDU0LjY3Myw3LjIxMSw4MiwxNCAgICAgICAgICAgICAgICAgICAgICAgIEMxMzA0Ljg5NCwxMTc4LjQ0NSwxMzI1LjU3MywxMTgyLjk1OSwxMzQ1LDExODR6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cG9seWdvblxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBwb2ludHM9XCI2NjguMzMzLDEyNDguNjY3IDkwMS42NjcsMTQ4MiA5NDEuNjY3LDE0MzIgOTIyLjQ5OCwxMjM3Ljg0NiAgICAgICAgICAgICAgICAgICAgICAgICA2ODcsMTIxMC42NjcgXCJcbiAgICAgICAgICAgID48L3BvbHlnb24+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3QtYnRuIGRvdC1wcmltYXJ5IG1yLTNcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaWNvbi1idG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidXR0b24tZWZmZWN0IHRvZ2dsZS1lbW9qaSAke1xuICAgICAgICAgICAgICBlbW9qaSA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpZGVBbmRTaG93RW1vamkoZW1vamkpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTbWlsZSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1wb2xsXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItNCBvdXRzaWRlXCJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpZGVBbmRTaG93Q29udGFjdFBvbGwoY29udGFjdHBvbGwpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIj48L2k+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3QtcG9sbC1jb250ZW50XCJcbiAgICAgICAgICAgIHN0eWxlPXtjb250YWN0cG9sbCA/IHsgZGlzcGxheTogXCJibG9ja1wiIH0gOiB7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSAvPlxuICAgICAgICAgICAgICAgICAgZ2FsbGVyeVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FtZXJhIC8+XG4gICAgICAgICAgICAgICAgICBjYW1lcmFcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNzbmlwcGV0TW9kYWxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU25pcHBldE1vZGFsKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENvZGUgLz5cbiAgICAgICAgICAgICAgICAgIENvZGUgU25pcHBlc3RcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPFVzZXIgLz5cbiAgICAgICAgICAgICAgICAgIGNvbnRhY3RcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPE1hcFBpbiAvPlxuICAgICAgICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPENsaXBib2FyZCAvPlxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNwb2xsTW9kYWxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlUG9sbE1vZGFsKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJhckNoYXJ0MiAvPlxuICAgICAgICAgICAgICAgICAgcG9sbFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8UGFwZXJjbGlwIC8+XG4gICAgICAgICAgICAgICAgICBhdHRhY2hcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgaXNPcGVuPXtzbmlwcGV0TW9kYWx9XG4gICAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlU25pcHBldE1vZGFsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbmlwcGV0LW1vZGFsLW1haW4gYWRkLXBvcHVwXCJcbiAgICAgICAgICAgICAgY2VudGVyZWQ9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RvZ2dsZVNuaXBwZXRNb2RhbH0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2RlXCI+PC9pPmNvZGUgc25pcHBldHNcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImRlZmF1bHQtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGgzPmNyZWF0IHNuaXBwZXRzPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRpdGxlKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPmVibmY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPmMrKzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+ZGlmZjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+ZGFydDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWRkIGNvbW1hbnQgKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXNuaXBhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnV0dG9uLWVmZmVjdCBidG4tc20gbXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTbmlwcGV0TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnV0dG9uLWVmZmVjdCBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU25pcHBldE1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSAmIHBvc3RcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICBpc09wZW49e3BvbGxNb2RhbH1cbiAgICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGVQb2xsTW9kYWx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvbC1tb2RhbC1tYWluIGFkZC1wb3B1cFwiXG4gICAgICAgICAgICAgIGNlbnRlcmVkPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0b2dnbGVQb2xsTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtZmVhdGhlcj1cImJhci1jaGFydC0yXCI+PC9pPnBvbGxcbiAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZGVmYXVsdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5jcmVhdGUgcG9sbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYXNrIHF1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFkZCBjb21tYXRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJvcHRpb24gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm9wdGlvbiAyXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZC1vcHRpb25cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkIGFuIG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0IHBvbGwgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0wXCI+dGVzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9sbCBleHBpZXIgaW4gNyBkYXlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMFwiPnRlc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbG93LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYWxsb3ctY2hlY2tcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWxsb3cgdXNlcnMgdG8gdm90ZSBhbm9ueW1vdXNseVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdC1wb2xsLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnV0dG9uLWVmZmVjdCBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUG9sbE1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBwb2xsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2V0ZW1valwiXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2VJbnB1dH1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVNZXNzYWdlUHJlc3MoZSl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVNZXNzYWdlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ1dHRvbi1lZmZlY3QgbXItMyBtbC0zXCJcbiAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgID5cbiAgICAgICAgICA8TWljIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YHN1Ym1pdCBpY29uLWJ0biBidG4tcHJpbWFyeSAke1xuICAgICAgICAgICAgbWVzc2FnZUlucHV0LnRyaW0oKSA/IFwiXCIgOiBcImRpc2FibGVkXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXNzYWdlUHJlc3MoXCJzZW5kXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPFNlbmQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZW1vamlzLWNvbnRhaW4gJHtlbW9qaSA/IFwib3BlblwiIDogXCJcIn1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtb2ppcy1zdWItY29udGFpbiBjdXN0b20tc2Nyb2xsXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtlbW9qaXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IGdldEVtb2ppKGl0ZW0pfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZW1vaml9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3RpY2tlci1jb250YWluICR7c3RpY2tlciA/IFwib3BlblwiIDogXCJcIn1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNrZXItc3ViLWNvbnRhaW4gY3VzdG9tLXNjcm9sbFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7c3RpY2tlcnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHNlbGNlY3RlZFN0aWNrZXJzKGl0ZW0uc3RpYyl9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17aXRlbS5zdGljfSBhbHQ9XCJzdGlja2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUlucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==