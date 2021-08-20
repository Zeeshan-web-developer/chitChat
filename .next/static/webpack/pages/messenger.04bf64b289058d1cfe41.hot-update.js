webpackHotUpdate_N_E("pages/messenger",{

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
/* harmony import */ var _stanza_chatClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stanza/chatClient */ "./stanza/chatClient.js");
/* harmony import */ var _leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../leftSidebar/datetime */ "./containers/leftSidebar/datetime.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\chat\\containers\\chatBoard\\messageInput.js",
    _this = undefined,
    _s = $RefreshSig$();











var DOMAIN = "mongoose.mysmartpbx.org";

var MessageInput = function MessageInput() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var client = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.client;
  });
  var loggedInUserID = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.currentUser.jid;
  });
  var chatWithID = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
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
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/emoji.json").then(function (res) {
      return setEmojis(res.data);
    });
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/sticker.json").then(function (res) {
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

        console.log("message", messageInput);
        console.log("ids", loggedInUserID, chatWithID);
        var newMessage = {
          from: loggedInUserID,
          to: chatWithID,
          body: messageInput,
          type: "chat",
          custom: true
        };
        console.log("newMessage", newMessage);
        Object(_stanza_chatClient__WEBPACK_IMPORTED_MODULE_6__["sendNewMessage"])(newMessage);
        newMessage["messageTime"] = Object(_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_7__["default"])();
        newMessage["direction"] = "send";
        newMessage["fromto"] = chatWithID;
        dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["setNewMessage"])(newMessage));
        dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["setLastMessage"])({
          id: chatWithID,
          message: messageInput,
          time: Object(_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_7__["default"])()
        }));
      }
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    className: "message-input",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "wrap emojis-main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
        className: "icon-btn btn-outline-primary button-effect mr-3 toggle-sticker outside ".concat(sticker ? "active" : ""),
        href: "#",
        onClick: function onClick() {
          return hideAndShowSticker(sticker);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("svg", {
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "60",
            strokeMiterlimit: "10",
            d: "M699,693                        c0,175.649,0,351.351,0,527c36.996,0,74.004,0,111,0c18.058,0,40.812-2.485,57,1c11.332,0.333,22.668,0.667,34,1                        c7.664,2.148,20.769,14.091,25,20c8.857,12.368,6,41.794,6,62c0,49.329,0,98.672,0,148c175.649,0,351.351,0,527,0                        c0-252.975,0-506.025,0-759C1205.692,693,952.308,693,699,693z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M886,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C877.255,799.833,882.716,801.036,886,799z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1258,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C1249.255,799.833,1254.716,801.036,1258,799z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1345,1184c-0.723,18.71-11.658,29.82-20,41c-18.271,24.489-50.129,37.183-83,47                        c-7.333,1-14.667,2-22,3c-12.013,2.798-33.636,5.15-44,3c-11.332-0.333-22.668-0.667-34-1c-15.332-3-30.668-6-46-9                        c-44.066-14.426-80.944-31.937-110-61c-22.348-22.353-38.992-45.628-37-90c0.667,0,1.333,0,2,0c9.163,5.585,24.723,3.168,36,6                        c26.211,6.583,54.736,7.174,82,14c34.068,8.53,71.961,10.531,106,19c9.999,1.333,20.001,2.667,30,4c26.193,6.703,54.673,7.211,82,14                        C1304.894,1178.445,1325.573,1182.959,1345,1184z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("polygon", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            points: "668.333,1248.667 901.667,1482 941.667,1432 922.498,1237.846                         687,1210.667 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "dot-btn dot-primary mr-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
          className: "icon-btn btn-outline-primary button-effect toggle-emoji ".concat(emoji ? "active" : ""),
          href: "#",
          onClick: function onClick() {
            return hideAndShowEmoji(emoji);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Smile"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "contact-poll",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
          className: "icon-btn btn-outline-primary mr-4 outside",
          href: "#",
          onClick: function onClick() {
            return hideAndShowContactPoll(contactpoll);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
            className: "fa fa-plus"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "contact-poll-content",
          style: contactpoll ? {
            display: "block"
          } : {
            display: "none"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Image"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 19
                }, _this), "gallery"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Camera"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, _this), "camera"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                "data-toggle": "modal",
                "data-target": "#snippetModal",
                onClick: function onClick() {
                  return toggleSnippetModal();
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Code"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 19
                }, _this), "Code Snippest"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["User"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 19
                }, _this), "contact"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["MapPin"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, _this), "location"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Clipboard"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 19
                }, _this), "document"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                "data-toggle": "modal",
                "data-target": "#pollModal",
                onClick: function onClick() {
                  return togglePollModal();
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["BarChart2"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 19
                }, _this), "poll"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Paperclip"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 19
                }, _this), "attach"]
              }, void 0, true, {
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
            lineNumber: 212,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
            isOpen: snippetModal,
            toggle: toggleSnippetModal,
            className: "snippet-modal-main add-popup",
            centered: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
              toggle: toggleSnippetModal,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                className: "modal-title",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                  className: "fa fa-code"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 19
                }, _this), "code snippets"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
                className: "default-form",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                  children: "creat snippets"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                    className: "form-control",
                    type: "text",
                    placeholder: "title(optional)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("select", {
                    className: "mb-0",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                      children: "ebnf"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 294,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                      children: "c++"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                      children: "diff"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 296,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                      children: "dart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 293,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 292,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("textarea", {
                    className: "form-control",
                    rows: "5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                    className: "form-control mb-0",
                    type: "text",
                    placeholder: "add commant (optional)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 304,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 303,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "form-group mb-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "btn-snipate",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                      className: "btn btn-danger button-effect btn-sm mr-3",
                      href: "#",
                      onClick: toggleSnippetModal,
                      children: "Cancel"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 312,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                      className: "btn btn-primary button-effect btn-sm",
                      href: "#",
                      onClick: toggleSnippetModal,
                      children: "Create & post"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 311,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
            isOpen: pollModal,
            toggle: togglePollModal,
            className: "pol-modal-main add-popup",
            centered: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "modal-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
                toggle: togglePollModal,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                  className: "modal-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                    "data-feather": "bar-chart-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 21
                  }, _this), "poll"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
                  className: "default-form",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                    children: "create poll"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 346,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "ask que"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 348,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "add commatn"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 353,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "option 1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 360,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "option 2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 365,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                      className: "add-option",
                      href: "#",
                      children: "add an option"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 370,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "form-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                      className: "post-poll",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("ul", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                          children: ["post poll in", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
                            className: "pt-0",
                            children: "test name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 379,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 377,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                          children: ["poll expier in 7 days", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
                            className: "pt-0",
                            children: "test name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 383,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 381,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 376,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 375,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 374,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "form-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                      className: "allow-group",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                        className: "allow-check",
                        type: "checkbox"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 390,
                        columnNumber: 25
                      }, _this), "Allow users to vote anonymously"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 389,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 388,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "creat-poll-btn",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                      className: "btn btn-primary button-effect btn-sm",
                      href: "#",
                      onClick: togglePollModal,
                      children: "Create poll"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 395,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 394,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
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
        lineNumber: 409,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
        className: "icon-btn btn-outline-primary button-effect mr-3 ml-3",
        href: "#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Mic"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
        className: "submit icon-btn btn-primary ".concat(messageInput.trim() ? "" : "disabled"),
        onClick: function onClick() {
          return handleMessagePress("send");
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Send"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "emojis-contain ".concat(emoji ? "open" : ""),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "emojis-sub-contain custom-scroll",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("ul", {
            children: emojis.map(function (item, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                onClick: function onClick() {
                  return getEmoji(item);
                },
                children: item.emoji
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 436,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "sticker-contain ".concat(sticker ? "open" : ""),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "sticker-sub-contain custom-scroll",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("ul", {
            children: stickers.map(function (item, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                onClick: function onClick() {
                  return selcectedStickers(item.stic);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                  className: "img-fluid",
                  src: item.stic,
                  alt: "sticker"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 450,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 449,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 5
  }, _this);
};

_s(MessageInput, "aKXhACmJCPN89AUkEtQS357uTXQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9jaGF0Qm9hcmQvbWVzc2FnZUlucHV0LmpzIl0sIm5hbWVzIjpbIkRPTUFJTiIsInByb2Nlc3MiLCJNZXNzYWdlSW5wdXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2xpZW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dnZWRJblVzZXJJRCIsImN1cnJlbnRVc2VyIiwiamlkIiwiY2hhdFdpdGhJRCIsImNoYXRXaXRoIiwiaWQiLCJjaGF0Q3R4IiwidXNlQ29udGV4dCIsIkNoYXRDb250ZXh0IiwiY2hhdHMiLCJzZWxlY3RlZFVzZXIiLCJzZW5kTWVzc2FnZSIsInJlcGx5TWVzc2FnZSIsInNlbmRJbWFnZXMiLCJ0eXBpbmdNZXNzYWdlIiwidXNlU3RhdGUiLCJlbW9qaXMiLCJzZXRFbW9qaXMiLCJzdGlja2VycyIsInNldFN0aWNrZXJzIiwic3RpY2tlciIsInNldFN0aWNrZXIiLCJlbW9qaSIsInNldEVtb2ppIiwiY29udGFjdHBvbGwiLCJzZXRDb250YWN0cG9sbCIsIm1lc3NhZ2VJbnB1dCIsInNldE1lc3NhZ2VJbnB1dCIsInNuaXBwZXRNb2RhbCIsInNldFNuaXBwZXRNb2RhbCIsInBvbGxNb2RhbCIsInNldFBvbGxNb2RhbCIsInRvZ2dsZVNuaXBwZXRNb2RhbCIsInRvZ2dsZVBvbGxNb2RhbCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzZWxjZWN0ZWRTdGlja2VycyIsInN0aWMiLCJjdXJyZW50VXNlcklkIiwic2VsZWN0ZWRVc2VySWQiLCJoaWRlQW5kU2hvd1N0aWNrZXIiLCJoaWRlQW5kU2hvd0Vtb2ppIiwiZW1vaiIsImhpZGVBbmRTaG93Q29udGFjdFBvbGwiLCJjb250cG9sbCIsImdldEVtb2ppIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsIm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlUHJlc3MiLCJlIiwia2V5IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0VGltZW91dCIsInNjcm9sbEJ5IiwidG9wIiwiYmVoYXZpb3IiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibmV3TWVzc2FnZSIsImZyb20iLCJ0byIsImJvZHkiLCJ0eXBlIiwiY3VzdG9tIiwic2VuZE5ld01lc3NhZ2UiLCJkYXRlVGltZSIsInNldE5ld01lc3NhZ2UiLCJzZXRMYXN0TWVzc2FnZSIsInRpbWUiLCJkaXNwbGF5IiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwibWFwIiwiaXRlbSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyx5QkFBZjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxNQUF0QjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNSSxjQUFjLEdBQUdILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxXQUFYLENBQXVCQyxHQUFsQztBQUFBLEdBQUQsQ0FBbEM7QUFDQSxNQUFNQyxVQUFVLEdBQUdOLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxRQUFYLENBQW9CQyxFQUEvQjtBQUFBLEdBQUQsQ0FBOUI7QUFFQSxNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLDREQUFELENBQTFCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSCxPQUFPLENBQUNHLEtBQXRCO0FBQ0EsTUFBTVIsV0FBVyxHQUFHSyxPQUFPLENBQUNM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LG1DQUFmO0FBQUEsaUNBQ0U7QUFBQSxzQkFDR0YsUUFBUSxDQUFDOEQsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3pCLGtDQUNFO0FBQVksdUJBQU8sRUFBRTtBQUFBLHlCQUFNMUMsaUJBQWlCLENBQUN5QyxJQUFJLENBQUN4QyxJQUFOLENBQXZCO0FBQUEsaUJBQXJCO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLFdBQWY7QUFBMkIscUJBQUcsRUFBRXdDLElBQUksQ0FBQ3hDLElBQXJDO0FBQTJDLHFCQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTeUMsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBS0QsYUFOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5URjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxVUQsQ0FoYkQ7O0dBQU16RixZO1VBQ2FFLHVELEVBQ0ZFLHVELEVBQ1FBLHVELEVBQ0pBLHVEOzs7S0FKZkosWTtBQWtiU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2VuZ2VyLjA0YmY2NGIyODkwNThkMWNmZTQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBTbWlsZSxcbiAgSW1hZ2UsXG4gIENhbWVyYSxcbiAgQ29kZSxcbiAgVXNlcixcbiAgTWFwUGluLFxuICBDbGlwYm9hcmQsXG4gIEJhckNoYXJ0MixcbiAgUGFwZXJjbGlwLFxuICBNaWMsXG4gIFNlbmQsXG59IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgQ2hhdENvbnRleHQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY2hhdENvbnRleHRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgc2V0TmV3TWVzc2FnZSxcbiAgdXBkYXRlTGFzdE1lc3NhZ2VUaW1lLFxuICBzZXRMYXN0TWVzc2FnZSxcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcbmltcG9ydCB7IHNlbmROZXdNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3N0YW56YS9jaGF0Q2xpZW50XCI7XG5pbXBvcnQgZGF0ZVRpbWUgZnJvbSBcIi4uL2xlZnRTaWRlYmFyL2RhdGV0aW1lXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCBET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRUFDVF9BUFBfREVGQVVMVF9ET01BSU47XG5cbmNvbnN0IE1lc3NhZ2VJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBjbGllbnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2xpZW50KTtcbiAgY29uc3QgbG9nZ2VkSW5Vc2VySUQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY3VycmVudFVzZXIuamlkKTtcbiAgY29uc3QgY2hhdFdpdGhJRCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5jaGF0V2l0aC5pZCk7XG5cbiAgY29uc3QgY2hhdEN0eCA9IHVzZUNvbnRleHQoQ2hhdENvbnRleHQpO1xuICBjb25zdCBjaGF0cyA9IGNoYXRDdHguY2hhdHM7XG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gY2hhdEN0eC5jdXJyZW50VXNlcjtcbiAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdEN0eC5zZWxlY3RlZFVzZXI7XG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gY2hhdEN0eC5zZW5kTWVzc2FnZTtcbiAgY29uc3QgcmVwbHlNZXNzYWdlID0gY2hhdEN0eC5yZXBseU1lc3NhZ2U7XG4gIGNvbnN0IHNlbmRJbWFnZXMgPSBjaGF0Q3R4LnNlbmRJbWFnZXM7XG4gIGNvbnN0IHR5cGluZ01lc3NhZ2UgPSBjaGF0Q3R4LnR5cGluZ01lc3NhZ2U7XG4gIGNvbnN0IFtlbW9qaXMsIHNldEVtb2ppc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdGlja2Vycywgc2V0U3RpY2tlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3RpY2tlciwgc2V0U3RpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbW9qaSwgc2V0RW1vamldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGFjdHBvbGwsIHNldENvbnRhY3Rwb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2VJbnB1dCwgc2V0TWVzc2FnZUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc25pcHBldE1vZGFsLCBzZXRTbmlwcGV0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcG9sbE1vZGFsLCBzZXRQb2xsTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZVNuaXBwZXRNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRTbmlwcGV0TW9kYWwoIXNuaXBwZXRNb2RhbCk7XG4gICAgc2V0Q29udGFjdHBvbGwoZmFsc2UpO1xuICB9O1xuICBjb25zdCB0b2dnbGVQb2xsTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0UG9sbE1vZGFsKCFwb2xsTW9kYWwpO1xuICAgIHNldENvbnRhY3Rwb2xsKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChcIi9hcGkvZW1vamkuanNvblwiKS50aGVuKChyZXMpID0+IHNldEVtb2ppcyhyZXMuZGF0YSkpO1xuICAgIGF4aW9zLmdldChcIi9hcGkvc3RpY2tlci5qc29uXCIpLnRoZW4oKHJlcykgPT4gc2V0U3RpY2tlcnMocmVzLmRhdGEpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNlbGNlY3RlZFN0aWNrZXJzID0gKHN0aWMpID0+IHtcbiAgICBsZXQgY3VycmVudFVzZXJJZCA9IGN1cnJlbnRVc2VyLmlkO1xuICAgIGxldCBzZWxlY3RlZFVzZXJJZCA9IHNlbGVjdGVkVXNlci5pZDtcbiAgICBzZW5kSW1hZ2VzKGN1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkLCBzdGljLCBjaGF0cyk7XG4gICAgc2V0U3RpY2tlcihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUFuZFNob3dTdGlja2VyID0gKHN0aWMpID0+IHtcbiAgICBzZXRFbW9qaShmYWxzZSk7XG4gICAgc2V0Q29udGFjdHBvbGwoZmFsc2UpO1xuICAgIHNldFN0aWNrZXIoIXN0aWMpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVBbmRTaG93RW1vamkgPSAoZW1vaikgPT4ge1xuICAgIHNldFN0aWNrZXIoZmFsc2UpO1xuICAgIHNldENvbnRhY3Rwb2xsKGZhbHNlKTtcbiAgICBzZXRFbW9qaSghZW1vaik7XG4gIH07XG5cbiAgY29uc3QgaGlkZUFuZFNob3dDb250YWN0UG9sbCA9IChjb250cG9sbCkgPT4ge1xuICAgIHNldEVtb2ppKGZhbHNlKTtcbiAgICBzZXRTdGlja2VyKGZhbHNlKTtcbiAgICBzZXRDb250YWN0cG9sbCghY29udHBvbGwpO1xuICB9O1xuXG4gIGNvbnN0IGdldEVtb2ppID0gKGVtb2opID0+IHtcbiAgICBzZXRNZXNzYWdlSW5wdXQobWVzc2FnZUlucHV0ICsgZW1vai5lbW9qaSk7XG4gICAgc2V0RW1vamkoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIHNldE1lc3NhZ2VJbnB1dChtZXNzYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNZXNzYWdlUHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUgPT09IFwic2VuZFwiKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlc1wiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250YWluZXIuc2Nyb2xsQnkoeyB0b3A6IDIwMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICB9LCAzMTApO1xuXG4gICAgICBpZiAobWVzc2FnZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0TWVzc2FnZUlucHV0KFwiXCIpO1xuICAgICAgICAvLyB0eXBpbmdNZXNzYWdlKHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgbWVzc2FnZUlucHV0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpZHNcIiwgbG9nZ2VkSW5Vc2VySUQsIGNoYXRXaXRoSUQpO1xuICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xuICAgICAgICAgIGZyb206IGxvZ2dlZEluVXNlcklELFxuICAgICAgICAgIHRvOiBjaGF0V2l0aElELFxuICAgICAgICAgIGJvZHk6IG1lc3NhZ2VJbnB1dCxcbiAgICAgICAgICB0eXBlOiBcImNoYXRcIixcbiAgICAgICAgICBjdXN0b206IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3TWVzc2FnZVwiLCBuZXdNZXNzYWdlKTtcbiAgICAgICAgc2VuZE5ld01lc3NhZ2UobmV3TWVzc2FnZSk7XG4gICAgICAgIG5ld01lc3NhZ2VbXCJtZXNzYWdlVGltZVwiXSA9IGRhdGVUaW1lKCk7XG4gICAgICAgIG5ld01lc3NhZ2VbXCJkaXJlY3Rpb25cIl0gPSBcInNlbmRcIjtcbiAgICAgICAgbmV3TWVzc2FnZVtcImZyb210b1wiXSA9IGNoYXRXaXRoSUQ7XG4gICAgICAgIGRpc3BhdGNoKHNldE5ld01lc3NhZ2UobmV3TWVzc2FnZSkpO1xuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICBzZXRMYXN0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogY2hhdFdpdGhJRCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VJbnB1dCxcbiAgICAgICAgICAgIHRpbWU6IGRhdGVUaW1lKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaW5wdXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcCBlbW9qaXMtbWFpblwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT17YGljb24tYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnV0dG9uLWVmZmVjdCBtci0zIHRvZ2dsZS1zdGlja2VyIG91dHNpZGUgJHtcbiAgICAgICAgICAgIHN0aWNrZXIgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaWRlQW5kU2hvd1N0aWNrZXIoc3RpY2tlcil9XG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBpZD1cIkxheWVyXzFcIlxuICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgICAgd2lkdGg9XCIyMTU4cHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjE0OHB4XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjE1OCAyMTQ4XCJcbiAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDIxNTggMjE0OFwiXG4gICAgICAgICAgICBzcGFjZT1cInByZXNlcnZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjYwXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgICAgICAgZD1cIk02OTksNjkzICAgICAgICAgICAgICAgICAgICAgICAgYzAsMTc1LjY0OSwwLDM1MS4zNTEsMCw1MjdjMzYuOTk2LDAsNzQuMDA0LDAsMTExLDBjMTguMDU4LDAsNDAuODEyLTIuNDg1LDU3LDFjMTEuMzMyLDAuMzMzLDIyLjY2OCwwLjY2NywzNCwxICAgICAgICAgICAgICAgICAgICAgICAgYzcuNjY0LDIuMTQ4LDIwLjc2OSwxNC4wOTEsMjUsMjBjOC44NTcsMTIuMzY4LDYsNDEuNzk0LDYsNjJjMCw0OS4zMjksMCw5OC42NzIsMCwxNDhjMTc1LjY0OSwwLDM1MS4zNTEsMCw1MjcsMCAgICAgICAgICAgICAgICAgICAgICAgIGMwLTI1Mi45NzUsMC01MDYuMDI1LDAtNzU5QzEyMDUuNjkyLDY5Myw5NTIuMzA4LDY5Myw2OTksNjkzelwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk04ODYsNzk5YzU5LjE3Mi0wLjc2NSw5My40MzEsMjUuMjg5LDExMSw2NmM2LjQxNiwxNC44NjcsMTQuNjEyLDM5Ljg1OCw5LDYzICAgICAgICAgICAgICAgICAgICAgICAgYy0yLjM5MSw5Ljg1Ny01LjA3NiwyMC4xMzgtOSwyOWMtMTUuNzk0LDM1LjY3MS00Ny4xMjksNTMuNjc0LTkwLDYzYy0yMC45NzksNC41NjMtNDIuNDYzLTQuNTQzLTU1LTEwICAgICAgICAgICAgICAgICAgICAgICAgYy00Mi43NzMtMTguNjE3LTg1LjY1Mi03Ny4yNDYtNTktMTQxYzEwLjYzNy0yNS40NDUsMzEuMDI0LTQ5LDU2LTYwYzcuOTk5LTIuNjY3LDE2LjAwMS01LjMzMywyNC04ICAgICAgICAgICAgICAgICAgICAgICAgQzg3Ny4yNTUsNzk5LjgzMyw4ODIuNzE2LDgwMS4wMzYsODg2LDc5OXpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMTI1OCw3OTljNTkuMTcyLTAuNzY1LDkzLjQzMSwyNS4yODksMTExLDY2YzYuNDE2LDE0Ljg2NywxNC42MTIsMzkuODU4LDksNjMgICAgICAgICAgICAgICAgICAgICAgICBjLTIuMzkxLDkuODU3LTUuMDc2LDIwLjEzOC05LDI5Yy0xNS43OTQsMzUuNjcxLTQ3LjEyOSw1My42NzQtOTAsNjNjLTIwLjk3OSw0LjU2My00Mi40NjMtNC41NDMtNTUtMTAgICAgICAgICAgICAgICAgICAgICAgICBjLTQyLjc3My0xOC42MTctODUuNjUyLTc3LjI0Ni01OS0xNDFjMTAuNjM3LTI1LjQ0NSwzMS4wMjQtNDksNTYtNjBjNy45OTktMi42NjcsMTYuMDAxLTUuMzMzLDI0LTggICAgICAgICAgICAgICAgICAgICAgICBDMTI0OS4yNTUsNzk5LjgzMywxMjU0LjcxNiw4MDEuMDM2LDEyNTgsNzk5elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xMzQ1LDExODRjLTAuNzIzLDE4LjcxLTExLjY1OCwyOS44Mi0yMCw0MWMtMTguMjcxLDI0LjQ4OS01MC4xMjksMzcuMTgzLTgzLDQ3ICAgICAgICAgICAgICAgICAgICAgICAgYy03LjMzMywxLTE0LjY2NywyLTIyLDNjLTEyLjAxMywyLjc5OC0zMy42MzYsNS4xNS00NCwzYy0xMS4zMzItMC4zMzMtMjIuNjY4LTAuNjY3LTM0LTFjLTE1LjMzMi0zLTMwLjY2OC02LTQ2LTkgICAgICAgICAgICAgICAgICAgICAgICBjLTQ0LjA2Ni0xNC40MjYtODAuOTQ0LTMxLjkzNy0xMTAtNjFjLTIyLjM0OC0yMi4zNTMtMzguOTkyLTQ1LjYyOC0zNy05MGMwLjY2NywwLDEuMzMzLDAsMiwwYzkuMTYzLDUuNTg1LDI0LjcyMywzLjE2OCwzNiw2ICAgICAgICAgICAgICAgICAgICAgICAgYzI2LjIxMSw2LjU4Myw1NC43MzYsNy4xNzQsODIsMTRjMzQuMDY4LDguNTMsNzEuOTYxLDEwLjUzMSwxMDYsMTljOS45OTksMS4zMzMsMjAuMDAxLDIuNjY3LDMwLDRjMjYuMTkzLDYuNzAzLDU0LjY3Myw3LjIxMSw4MiwxNCAgICAgICAgICAgICAgICAgICAgICAgIEMxMzA0Ljg5NCwxMTc4LjQ0NSwxMzI1LjU3MywxMTgyLjk1OSwxMzQ1LDExODR6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cG9seWdvblxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBwb2ludHM9XCI2NjguMzMzLDEyNDguNjY3IDkwMS42NjcsMTQ4MiA5NDEuNjY3LDE0MzIgOTIyLjQ5OCwxMjM3Ljg0NiAgICAgICAgICAgICAgICAgICAgICAgICA2ODcsMTIxMC42NjcgXCJcbiAgICAgICAgICAgID48L3BvbHlnb24+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3QtYnRuIGRvdC1wcmltYXJ5IG1yLTNcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaWNvbi1idG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidXR0b24tZWZmZWN0IHRvZ2dsZS1lbW9qaSAke1xuICAgICAgICAgICAgICBlbW9qaSA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpZGVBbmRTaG93RW1vamkoZW1vamkpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTbWlsZSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1wb2xsXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItNCBvdXRzaWRlXCJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpZGVBbmRTaG93Q29udGFjdFBvbGwoY29udGFjdHBvbGwpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIj48L2k+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3QtcG9sbC1jb250ZW50XCJcbiAgICAgICAgICAgIHN0eWxlPXtjb250YWN0cG9sbCA/IHsgZGlzcGxheTogXCJibG9ja1wiIH0gOiB7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSAvPlxuICAgICAgICAgICAgICAgICAgZ2FsbGVyeVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FtZXJhIC8+XG4gICAgICAgICAgICAgICAgICBjYW1lcmFcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNzbmlwcGV0TW9kYWxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU25pcHBldE1vZGFsKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENvZGUgLz5cbiAgICAgICAgICAgICAgICAgIENvZGUgU25pcHBlc3RcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPFVzZXIgLz5cbiAgICAgICAgICAgICAgICAgIGNvbnRhY3RcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPE1hcFBpbiAvPlxuICAgICAgICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPENsaXBib2FyZCAvPlxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNwb2xsTW9kYWxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlUG9sbE1vZGFsKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJhckNoYXJ0MiAvPlxuICAgICAgICAgICAgICAgICAgcG9sbFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8UGFwZXJjbGlwIC8+XG4gICAgICAgICAgICAgICAgICBhdHRhY2hcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgaXNPcGVuPXtzbmlwcGV0TW9kYWx9XG4gICAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlU25pcHBldE1vZGFsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbmlwcGV0LW1vZGFsLW1haW4gYWRkLXBvcHVwXCJcbiAgICAgICAgICAgICAgY2VudGVyZWQ9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RvZ2dsZVNuaXBwZXRNb2RhbH0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2RlXCI+PC9pPmNvZGUgc25pcHBldHNcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImRlZmF1bHQtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGgzPmNyZWF0IHNuaXBwZXRzPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRpdGxlKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPmVibmY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPmMrKzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+ZGlmZjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+ZGFydDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWRkIGNvbW1hbnQgKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXNuaXBhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnV0dG9uLWVmZmVjdCBidG4tc20gbXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTbmlwcGV0TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnV0dG9uLWVmZmVjdCBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU25pcHBldE1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSAmIHBvc3RcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICBpc09wZW49e3BvbGxNb2RhbH1cbiAgICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGVQb2xsTW9kYWx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvbC1tb2RhbC1tYWluIGFkZC1wb3B1cFwiXG4gICAgICAgICAgICAgIGNlbnRlcmVkPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0b2dnbGVQb2xsTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtZmVhdGhlcj1cImJhci1jaGFydC0yXCI+PC9pPnBvbGxcbiAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZGVmYXVsdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5jcmVhdGUgcG9sbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYXNrIHF1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFkZCBjb21tYXRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJvcHRpb24gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm9wdGlvbiAyXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZC1vcHRpb25cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkIGFuIG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0IHBvbGwgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0wXCI+dGVzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9sbCBleHBpZXIgaW4gNyBkYXlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMFwiPnRlc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbG93LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYWxsb3ctY2hlY2tcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWxsb3cgdXNlcnMgdG8gdm90ZSBhbm9ueW1vdXNseVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdC1wb2xsLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnV0dG9uLWVmZmVjdCBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUG9sbE1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBwb2xsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2V0ZW1valwiXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2VJbnB1dH1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVNZXNzYWdlUHJlc3MoZSl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVNZXNzYWdlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ1dHRvbi1lZmZlY3QgbXItMyBtbC0zXCJcbiAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgID5cbiAgICAgICAgICA8TWljIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YHN1Ym1pdCBpY29uLWJ0biBidG4tcHJpbWFyeSAke1xuICAgICAgICAgICAgbWVzc2FnZUlucHV0LnRyaW0oKSA/IFwiXCIgOiBcImRpc2FibGVkXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXNzYWdlUHJlc3MoXCJzZW5kXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPFNlbmQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZW1vamlzLWNvbnRhaW4gJHtlbW9qaSA/IFwib3BlblwiIDogXCJcIn1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtb2ppcy1zdWItY29udGFpbiBjdXN0b20tc2Nyb2xsXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtlbW9qaXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IGdldEVtb2ppKGl0ZW0pfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZW1vaml9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3RpY2tlci1jb250YWluICR7c3RpY2tlciA/IFwib3BlblwiIDogXCJcIn1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNrZXItc3ViLWNvbnRhaW4gY3VzdG9tLXNjcm9sbFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7c3RpY2tlcnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHNlbGNlY3RlZFN0aWNrZXJzKGl0ZW0uc3RpYyl9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17aXRlbS5zdGljfSBhbHQ9XCJzdGlja2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUlucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==