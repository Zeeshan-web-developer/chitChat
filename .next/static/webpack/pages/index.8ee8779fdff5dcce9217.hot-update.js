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
  var chatWithName = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.chatWith.name;
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

        var messageBody = messageInput;
        console.log("message", messageInput);
        console.log("ids", loggedInUserID, chatWithID);
        var newMessage = {
          from: loggedInUserID,
          to: chatWithID,
          body: messageInput + "&name:" + chatWithName,
          type: "chat"
        };
        var _sendNewMessage = {
          from: loggedInUserID,
          to: chatWithID,
          body: messageInput,
          type: "chat"
        };

        _sendNewMessage(newMessage);

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
            lineNumber: 165,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M886,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C877.255,799.833,882.716,801.036,886,799z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1258,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C1249.255,799.833,1254.716,801.036,1258,799z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1345,1184c-0.723,18.71-11.658,29.82-20,41c-18.271,24.489-50.129,37.183-83,47                        c-7.333,1-14.667,2-22,3c-12.013,2.798-33.636,5.15-44,3c-11.332-0.333-22.668-0.667-34-1c-15.332-3-30.668-6-46-9                        c-44.066-14.426-80.944-31.937-110-61c-22.348-22.353-38.992-45.628-37-90c0.667,0,1.333,0,2,0c9.163,5.585,24.723,3.168,36,6                        c26.211,6.583,54.736,7.174,82,14c34.068,8.53,71.961,10.531,106,19c9.999,1.333,20.001,2.667,30,4c26.193,6.703,54.673,7.211,82,14                        C1304.894,1178.445,1325.573,1182.959,1345,1184z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("polygon", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            points: "668.333,1248.667 901.667,1482 941.667,1432 922.498,1237.846                         687,1210.667 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
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
            lineNumber: 204,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
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
            lineNumber: 213,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
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
                  lineNumber: 222,
                  columnNumber: 19
                }, _this), "gallery"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Camera"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 19
                }, _this), "camera"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
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
                  lineNumber: 238,
                  columnNumber: 19
                }, _this), "Code Snippest"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["User"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, _this), "contact"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["MapPin"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 19
                }, _this), "location"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Clipboard"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 19
                }, _this), "document"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
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
                  lineNumber: 266,
                  columnNumber: 19
                }, _this), "poll"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Paperclip"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 19
                }, _this), "attach"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
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
                  lineNumber: 286,
                  columnNumber: 19
                }, _this), "code snippets"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
                className: "default-form",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                  children: "creat snippets"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                    className: "form-control",
                    type: "text",
                    placeholder: "title(optional)"
                  }, void 0, false, {
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
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("select", {
                    className: "mb-0",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                      children: "ebnf"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 301,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                      children: "c++"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                      children: "diff"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 303,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                      children: "dart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 304,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 300,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("textarea", {
                    className: "form-control",
                    rows: "5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                    className: "form-control mb-0",
                    type: "text",
                    placeholder: "add commant (optional)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 311,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
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
                      lineNumber: 319,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                      className: "btn btn-primary button-effect btn-sm",
                      href: "#",
                      onClick: toggleSnippetModal,
                      children: "Create & post"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 326,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
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
                    lineNumber: 348,
                    columnNumber: 21
                  }, _this), "poll"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
                  className: "default-form",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                    children: "create poll"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "ask que"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 355,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "add commatn"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 360,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "option 1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 367,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "option 2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 372,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                      className: "add-option",
                      href: "#",
                      children: "add an option"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 377,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 366,
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
                            lineNumber: 386,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 384,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                          children: ["poll expier in 7 days", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
                            className: "pt-0",
                            children: "test name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 390,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 388,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 383,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 382,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
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
                        lineNumber: 397,
                        columnNumber: 25
                      }, _this), "Allow users to vote anonymously"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 396,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 395,
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
                      lineNumber: 402,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 401,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
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
        lineNumber: 416,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
        className: "icon-btn btn-outline-primary button-effect mr-3 ml-3",
        href: "#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Mic"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
        className: "submit icon-btn btn-primary ".concat(messageInput.trim() ? "" : "disabled"),
        onClick: function onClick() {
          return handleMessagePress("send");
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Send"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 430,
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
                lineNumber: 443,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 438,
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
                  lineNumber: 457,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 456,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 5
  }, _this);
};

_s(MessageInput, "Hu2lFxBOS+sTRav3xNSsyN9JUBU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9jaGF0Qm9hcmQvbWVzc2FnZUlucHV0LmpzIl0sIm5hbWVzIjpbIkRPTUFJTiIsInByb2Nlc3MiLCJNZXNzYWdlSW5wdXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2xpZW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dnZWRJblVzZXJJRCIsImN1cnJlbnRVc2VyIiwiamlkIiwiY2hhdFdpdGhJRCIsImNoYXRXaXRoIiwiaWQiLCJjaGF0V2l0aE5hbWUiLCJuYW1lIiwiY2hhdEN0eCIsInVzZUNvbnRleHQiLCJDaGF0Q29udGV4dCIsImNoYXRzIiwic2VsZWN0ZWRVc2VyIiwic2VuZE1lc3NhZ2UiLCJyZXBseU1lc3NhZ2UiLCJzZW5kSW1hZ2VzIiwidHlwaW5nTWVzc2FnZSIsInVzZVN0YXRlIiwiZW1vamlzIiwic2V0RW1vamlzIiwic3RpY2tlcnMiLCJzZXRTdGlja2VycyIsInN0aWNrZXIiLCJzZXRTdGlja2VyIiwiZW1vamkiLCJzZXRFbW9qaSIsImNvbnRhY3Rwb2xsIiwic2V0Q29udGFjdHBvbGwiLCJtZXNzYWdlSW5wdXQiLCJzZXRNZXNzYWdlSW5wdXQiLCJzbmlwcGV0TW9kYWwiLCJzZXRTbmlwcGV0TW9kYWwiLCJwb2xsTW9kYWwiLCJzZXRQb2xsTW9kYWwiLCJ0b2dnbGVTbmlwcGV0TW9kYWwiLCJ0b2dnbGVQb2xsTW9kYWwiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic2VsY2VjdGVkU3RpY2tlcnMiLCJzdGljIiwiY3VycmVudFVzZXJJZCIsInNlbGVjdGVkVXNlcklkIiwiaGlkZUFuZFNob3dTdGlja2VyIiwiaGlkZUFuZFNob3dFbW9qaSIsImVtb2oiLCJoaWRlQW5kU2hvd0NvbnRhY3RQb2xsIiwiY29udHBvbGwiLCJnZXRFbW9qaSIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJtZXNzYWdlIiwiaGFuZGxlTWVzc2FnZVByZXNzIiwiZSIsImtleSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldFRpbWVvdXQiLCJzY3JvbGxCeSIsInRvcCIsImJlaGF2aW9yIiwibGVuZ3RoIiwibWVzc2FnZUJvZHkiLCJjb25zb2xlIiwibG9nIiwibmV3TWVzc2FnZSIsImZyb20iLCJ0byIsImJvZHkiLCJ0eXBlIiwic2VuZE5ld01lc3NhZ2UiLCJkYXRlVGltZSIsInNldE5ld01lc3NhZ2UiLCJzZXRMYXN0TWVzc2FnZSIsInRpbWUiLCJkaXNwbGF5IiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwibWFwIiwiaXRlbSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyx5QkFBZjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxNQUF0QjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNSSxjQUFjLEdBQUdILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxXQUFYLENBQXVCQyxHQUFsQztBQUFBLEdBQUQsQ0FBbEM7QUFDQSxNQUFNQyxVQUFVLEdBQUdOLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxRQUFYLENBQW9CQyxFQUEvQjtBQUFBLEdBQUQsQ0FBOUI7QUFDQSxNQUFNQyxZQUFZLEdBQUdULCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxRQUFYLENBQW9CRyxJ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LGlCQUFyQjtBQUFBLDBCQUNHQSxJQUFJLENBQUMzRDtBQURSLGlCQUFTNEQsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBS0QsYUFOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRTRixlQW1URTtBQUFLLGlCQUFTLDRCQUFxQjlELE9BQU8sR0FBRyxNQUFILEdBQVksRUFBeEMsQ0FBZDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGlDQUNFO0FBQUEsc0JBQ0dGLFFBQVEsQ0FBQzhELEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUN6QixrQ0FDRTtBQUFZLHVCQUFPLEVBQUU7QUFBQSx5QkFBTTFDLGlCQUFpQixDQUFDeUMsSUFBSSxDQUFDeEMsSUFBTixDQUF2QjtBQUFBLGlCQUFyQjtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQTJCLHFCQUFHLEVBQUV3QyxJQUFJLENBQUN4QyxJQUFyQztBQUEyQyxxQkFBRyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU3lDLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUtELGFBTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcVVELENBdmJEOztHQUFNM0YsWTtVQUNhRSx1RCxFQUNGRSx1RCxFQUNRQSx1RCxFQUNKQSx1RCxFQUNFQSx1RDs7O0tBTGpCSixZO0FBeWJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZWU4Nzc5ZmRmZjVkY2NlOTIxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU21pbGUsXG4gIEltYWdlLFxuICBDYW1lcmEsXG4gIENvZGUsXG4gIFVzZXIsXG4gIE1hcFBpbixcbiAgQ2xpcGJvYXJkLFxuICBCYXJDaGFydDIsXG4gIFBhcGVyY2xpcCxcbiAgTWljLFxuICBTZW5kLFxufSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IENoYXRDb250ZXh0IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NoYXRDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIHNldE5ld01lc3NhZ2UsXG4gIHVwZGF0ZUxhc3RNZXNzYWdlVGltZSxcbiAgc2V0TGFzdE1lc3NhZ2UsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBzZW5kTmV3TWVzc2FnZSB9IGZyb20gXCIuLi8uLi9zdGFuemEvY2hhdENsaWVudFwiO1xuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuLi9sZWZ0U2lkZWJhci9kYXRldGltZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuY29uc3QgRE9NQUlOID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVBQ1RfQVBQX0RFRkFVTFRfRE9NQUlOO1xuXG5jb25zdCBNZXNzYWdlSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgY2xpZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNsaWVudCk7XG4gIGNvbnN0IGxvZ2dlZEluVXNlcklEID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLmppZCk7XG4gIGNvbnN0IGNoYXRXaXRoSUQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGguaWQpO1xuICBjb25zdCBjaGF0V2l0aE5hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGgubmFtZSk7XG5cbiAgY29uc3QgY2hhdEN0eCA9IHVzZUNvbnRleHQoQ2hhdENvbnRleHQpO1xuICBjb25zdCBjaGF0cyA9IGNoYXRDdHguY2hhdHM7XG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gY2hhdEN0eC5jdXJyZW50VXNlcjtcbiAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdEN0eC5zZWxlY3RlZFVzZXI7XG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gY2hhdEN0eC5zZW5kTWVzc2FnZTtcbiAgY29uc3QgcmVwbHlNZXNzYWdlID0gY2hhdEN0eC5yZXBseU1lc3NhZ2U7XG4gIGNvbnN0IHNlbmRJbWFnZXMgPSBjaGF0Q3R4LnNlbmRJbWFnZXM7XG4gIGNvbnN0IHR5cGluZ01lc3NhZ2UgPSBjaGF0Q3R4LnR5cGluZ01lc3NhZ2U7XG4gIGNvbnN0IFtlbW9qaXMsIHNldEVtb2ppc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdGlja2Vycywgc2V0U3RpY2tlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3RpY2tlciwgc2V0U3RpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbW9qaSwgc2V0RW1vamldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGFjdHBvbGwsIHNldENvbnRhY3Rwb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2VJbnB1dCwgc2V0TWVzc2FnZUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc25pcHBldE1vZGFsLCBzZXRTbmlwcGV0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcG9sbE1vZGFsLCBzZXRQb2xsTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZVNuaXBwZXRNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRTbmlwcGV0TW9kYWwoIXNuaXBwZXRNb2RhbCk7XG4gICAgc2V0Q29udGFjdHBvbGwoZmFsc2UpO1xuICB9O1xuICBjb25zdCB0b2dnbGVQb2xsTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0UG9sbE1vZGFsKCFwb2xsTW9kYWwpO1xuICAgIHNldENvbnRhY3Rwb2xsKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChcIi9hcGkvZW1vamkuanNvblwiKS50aGVuKChyZXMpID0+IHNldEVtb2ppcyhyZXMuZGF0YSkpO1xuICAgIGF4aW9zLmdldChcIi9hcGkvc3RpY2tlci5qc29uXCIpLnRoZW4oKHJlcykgPT4gc2V0U3RpY2tlcnMocmVzLmRhdGEpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNlbGNlY3RlZFN0aWNrZXJzID0gKHN0aWMpID0+IHtcbiAgICBsZXQgY3VycmVudFVzZXJJZCA9IGN1cnJlbnRVc2VyLmlkO1xuICAgIGxldCBzZWxlY3RlZFVzZXJJZCA9IHNlbGVjdGVkVXNlci5pZDtcbiAgICBzZW5kSW1hZ2VzKGN1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkLCBzdGljLCBjaGF0cyk7XG4gICAgc2V0U3RpY2tlcihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUFuZFNob3dTdGlja2VyID0gKHN0aWMpID0+IHtcbiAgICBzZXRFbW9qaShmYWxzZSk7XG4gICAgc2V0Q29udGFjdHBvbGwoZmFsc2UpO1xuICAgIHNldFN0aWNrZXIoIXN0aWMpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVBbmRTaG93RW1vamkgPSAoZW1vaikgPT4ge1xuICAgIHNldFN0aWNrZXIoZmFsc2UpO1xuICAgIHNldENvbnRhY3Rwb2xsKGZhbHNlKTtcbiAgICBzZXRFbW9qaSghZW1vaik7XG4gIH07XG5cbiAgY29uc3QgaGlkZUFuZFNob3dDb250YWN0UG9sbCA9IChjb250cG9sbCkgPT4ge1xuICAgIHNldEVtb2ppKGZhbHNlKTtcbiAgICBzZXRTdGlja2VyKGZhbHNlKTtcbiAgICBzZXRDb250YWN0cG9sbCghY29udHBvbGwpO1xuICB9O1xuXG4gIGNvbnN0IGdldEVtb2ppID0gKGVtb2opID0+IHtcbiAgICBzZXRNZXNzYWdlSW5wdXQobWVzc2FnZUlucHV0ICsgZW1vai5lbW9qaSk7XG4gICAgc2V0RW1vamkoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIHNldE1lc3NhZ2VJbnB1dChtZXNzYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNZXNzYWdlUHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUgPT09IFwic2VuZFwiKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlc1wiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250YWluZXIuc2Nyb2xsQnkoeyB0b3A6IDIwMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICB9LCAzMTApO1xuXG4gICAgICBpZiAobWVzc2FnZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0TWVzc2FnZUlucHV0KFwiXCIpO1xuICAgICAgICAvLyB0eXBpbmdNZXNzYWdlKHRydWUpO1xuICAgICAgICBsZXQgbWVzc2FnZUJvZHkgPSBtZXNzYWdlSW5wdXQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBtZXNzYWdlSW5wdXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImlkc1wiLCBsb2dnZWRJblVzZXJJRCwgY2hhdFdpdGhJRCk7XG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgZnJvbTogbG9nZ2VkSW5Vc2VySUQsXG4gICAgICAgICAgdG86IGNoYXRXaXRoSUQsXG4gICAgICAgICAgYm9keTogbWVzc2FnZUlucHV0ICsgXCImbmFtZTpcIiArIGNoYXRXaXRoTmFtZSxcbiAgICAgICAgICB0eXBlOiBcImNoYXRcIixcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2VuZE5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgZnJvbTogbG9nZ2VkSW5Vc2VySUQsXG4gICAgICAgICAgdG86IGNoYXRXaXRoSUQsXG4gICAgICAgICAgYm9keTogbWVzc2FnZUlucHV0LFxuICAgICAgICAgIHR5cGU6IFwiY2hhdFwiLFxuICAgICAgICB9O1xuICAgICAgICBzZW5kTmV3TWVzc2FnZShuZXdNZXNzYWdlKTtcbiAgICAgICAgbmV3TWVzc2FnZVtcIm1lc3NhZ2VUaW1lXCJdID0gZGF0ZVRpbWUoKTtcbiAgICAgICAgbmV3TWVzc2FnZVtcImRpcmVjdGlvblwiXSA9IFwic2VuZFwiO1xuICAgICAgICBuZXdNZXNzYWdlW1wiZnJvbXRvXCJdID0gY2hhdFdpdGhJRDtcblxuICAgICAgICBkaXNwYXRjaChzZXROZXdNZXNzYWdlKG5ld01lc3NhZ2UpKTtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgc2V0TGFzdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaWQ6IGNoYXRXaXRoSUQsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlSW5wdXQsXG4gICAgICAgICAgICB0aW1lOiBkYXRlVGltZSgpLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWlucHV0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAgZW1vamlzLW1haW5cIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9e2BpY29uLWJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ1dHRvbi1lZmZlY3QgbXItMyB0b2dnbGUtc3RpY2tlciBvdXRzaWRlICR7XG4gICAgICAgICAgICBzdGlja2VyID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGlkZUFuZFNob3dTdGlja2VyKHN0aWNrZXIpfVxuICAgICAgICA+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgaWQ9XCJMYXllcl8xXCJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICAgIHdpZHRoPVwiMjE1OHB4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIxNDhweFwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIxNTggMjE0OFwiXG4gICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAyMTU4IDIxNDhcIlxuICAgICAgICAgICAgc3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBzdHJva2U9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2MFwiXG4gICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXG4gICAgICAgICAgICAgIGQ9XCJNNjk5LDY5MyAgICAgICAgICAgICAgICAgICAgICAgIGMwLDE3NS42NDksMCwzNTEuMzUxLDAsNTI3YzM2Ljk5NiwwLDc0LjAwNCwwLDExMSwwYzE4LjA1OCwwLDQwLjgxMi0yLjQ4NSw1NywxYzExLjMzMiwwLjMzMywyMi42NjgsMC42NjcsMzQsMSAgICAgICAgICAgICAgICAgICAgICAgIGM3LjY2NCwyLjE0OCwyMC43NjksMTQuMDkxLDI1LDIwYzguODU3LDEyLjM2OCw2LDQxLjc5NCw2LDYyYzAsNDkuMzI5LDAsOTguNjcyLDAsMTQ4YzE3NS42NDksMCwzNTEuMzUxLDAsNTI3LDAgICAgICAgICAgICAgICAgICAgICAgICBjMC0yNTIuOTc1LDAtNTA2LjAyNSwwLTc1OUMxMjA1LjY5Miw2OTMsOTUyLjMwOCw2OTMsNjk5LDY5M3pcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNODg2LDc5OWM1OS4xNzItMC43NjUsOTMuNDMxLDI1LjI4OSwxMTEsNjZjNi40MTYsMTQuODY3LDE0LjYxMiwzOS44NTgsOSw2MyAgICAgICAgICAgICAgICAgICAgICAgIGMtMi4zOTEsOS44NTctNS4wNzYsMjAuMTM4LTksMjljLTE1Ljc5NCwzNS42NzEtNDcuMTI5LDUzLjY3NC05MCw2M2MtMjAuOTc5LDQuNTYzLTQyLjQ2My00LjU0My01NS0xMCAgICAgICAgICAgICAgICAgICAgICAgIGMtNDIuNzczLTE4LjYxNy04NS42NTItNzcuMjQ2LTU5LTE0MWMxMC42MzctMjUuNDQ1LDMxLjAyNC00OSw1Ni02MGM3Ljk5OS0yLjY2NywxNi4wMDEtNS4zMzMsMjQtOCAgICAgICAgICAgICAgICAgICAgICAgIEM4NzcuMjU1LDc5OS44MzMsODgyLjcxNiw4MDEuMDM2LDg4Niw3OTl6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTEyNTgsNzk5YzU5LjE3Mi0wLjc2NSw5My40MzEsMjUuMjg5LDExMSw2NmM2LjQxNiwxNC44NjcsMTQuNjEyLDM5Ljg1OCw5LDYzICAgICAgICAgICAgICAgICAgICAgICAgYy0yLjM5MSw5Ljg1Ny01LjA3NiwyMC4xMzgtOSwyOWMtMTUuNzk0LDM1LjY3MS00Ny4xMjksNTMuNjc0LTkwLDYzYy0yMC45NzksNC41NjMtNDIuNDYzLTQuNTQzLTU1LTEwICAgICAgICAgICAgICAgICAgICAgICAgYy00Mi43NzMtMTguNjE3LTg1LjY1Mi03Ny4yNDYtNTktMTQxYzEwLjYzNy0yNS40NDUsMzEuMDI0LTQ5LDU2LTYwYzcuOTk5LTIuNjY3LDE2LjAwMS01LjMzMywyNC04ICAgICAgICAgICAgICAgICAgICAgICAgQzEyNDkuMjU1LDc5OS44MzMsMTI1NC43MTYsODAxLjAzNiwxMjU4LDc5OXpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMTM0NSwxMTg0Yy0wLjcyMywxOC43MS0xMS42NTgsMjkuODItMjAsNDFjLTE4LjI3MSwyNC40ODktNTAuMTI5LDM3LjE4My04Myw0NyAgICAgICAgICAgICAgICAgICAgICAgIGMtNy4zMzMsMS0xNC42NjcsMi0yMiwzYy0xMi4wMTMsMi43OTgtMzMuNjM2LDUuMTUtNDQsM2MtMTEuMzMyLTAuMzMzLTIyLjY2OC0wLjY2Ny0zNC0xYy0xNS4zMzItMy0zMC42NjgtNi00Ni05ICAgICAgICAgICAgICAgICAgICAgICAgYy00NC4wNjYtMTQuNDI2LTgwLjk0NC0zMS45MzctMTEwLTYxYy0yMi4zNDgtMjIuMzUzLTM4Ljk5Mi00NS42MjgtMzctOTBjMC42NjcsMCwxLjMzMywwLDIsMGM5LjE2Myw1LjU4NSwyNC43MjMsMy4xNjgsMzYsNiAgICAgICAgICAgICAgICAgICAgICAgIGMyNi4yMTEsNi41ODMsNTQuNzM2LDcuMTc0LDgyLDE0YzM0LjA2OCw4LjUzLDcxLjk2MSwxMC41MzEsMTA2LDE5YzkuOTk5LDEuMzMzLDIwLjAwMSwyLjY2NywzMCw0YzI2LjE5Myw2LjcwMyw1NC42NzMsNy4yMTEsODIsMTQgICAgICAgICAgICAgICAgICAgICAgICBDMTMwNC44OTQsMTE3OC40NDUsMTMyNS41NzMsMTE4Mi45NTksMTM0NSwxMTg0elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgcG9pbnRzPVwiNjY4LjMzMywxMjQ4LjY2NyA5MDEuNjY3LDE0ODIgOTQxLjY2NywxNDMyIDkyMi40OTgsMTIzNy44NDYgICAgICAgICAgICAgICAgICAgICAgICAgNjg3LDEyMTAuNjY3IFwiXG4gICAgICAgICAgICA+PC9wb2x5Z29uPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90LWJ0biBkb3QtcHJpbWFyeSBtci0zXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGljb24tYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnV0dG9uLWVmZmVjdCB0b2dnbGUtZW1vamkgJHtcbiAgICAgICAgICAgICAgZW1vamkgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaWRlQW5kU2hvd0Vtb2ppKGVtb2ppKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U21pbGUgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtcG9sbFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTQgb3V0c2lkZVwiXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaWRlQW5kU2hvd0NvbnRhY3RQb2xsKGNvbnRhY3Rwb2xsKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzXCI+PC9pPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0LXBvbGwtY29udGVudFwiXG4gICAgICAgICAgICBzdHlsZT17Y29udGFjdHBvbGwgPyB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgLz5cbiAgICAgICAgICAgICAgICAgIGdhbGxlcnlcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPENhbWVyYSAvPlxuICAgICAgICAgICAgICAgICAgY2FtZXJhXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjc25pcHBldE1vZGFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVNuaXBwZXRNb2RhbCgpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDb2RlIC8+XG4gICAgICAgICAgICAgICAgICBDb2RlIFNuaXBwZXN0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxVc2VyIC8+XG4gICAgICAgICAgICAgICAgICBjb250YWN0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxNYXBQaW4gLz5cbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxDbGlwYm9hcmQgLz5cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjcG9sbE1vZGFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBvbGxNb2RhbCgpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCYXJDaGFydDIgLz5cbiAgICAgICAgICAgICAgICAgIHBvbGxcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyY2xpcCAvPlxuICAgICAgICAgICAgICAgICAgYXR0YWNoXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgIGlzT3Blbj17c25pcHBldE1vZGFsfVxuICAgICAgICAgICAgICB0b2dnbGU9e3RvZ2dsZVNuaXBwZXRNb2RhbH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic25pcHBldC1tb2RhbC1tYWluIGFkZC1wb3B1cFwiXG4gICAgICAgICAgICAgIGNlbnRlcmVkPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0b2dnbGVTbmlwcGV0TW9kYWx9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29kZVwiPjwvaT5jb2RlIHNuaXBwZXRzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJkZWZhdWx0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5jcmVhdCBzbmlwcGV0czwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0aXRsZShvcHRpb25hbClcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5lYm5mPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5jKys8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPmRpZmY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPmRhcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcm93cz1cIjVcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFkZCBjb21tYW50IChvcHRpb25hbClcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1zbmlwYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ1dHRvbi1lZmZlY3QgYnRuLXNtIG1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU25pcHBldE1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbi1lZmZlY3QgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNuaXBwZXRNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgJiBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgaXNPcGVuPXtwb2xsTW9kYWx9XG4gICAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlUG9sbE1vZGFsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2wtbW9kYWwtbWFpbiBhZGQtcG9wdXBcIlxuICAgICAgICAgICAgICBjZW50ZXJlZD17dHJ1ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlUG9sbE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBkYXRhLWZlYXRoZXI9XCJiYXItY2hhcnQtMlwiPjwvaT5wb2xsXG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImRlZmF1bHQtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+Y3JlYXRlIHBvbGw8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFzayBxdWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGQgY29tbWF0blwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwib3B0aW9uIDFcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJvcHRpb24gMlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGQtb3B0aW9uXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZCBhbiBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtcG9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdCBwb2xsIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMFwiPnRlc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGwgZXhwaWVyIGluIDcgZGF5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTBcIj50ZXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxvdy1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFsbG93LWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFsbG93IHVzZXJzIHRvIHZvdGUgYW5vbnltb3VzbHlcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXQtcG9sbC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbi1lZmZlY3QgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBvbGxNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgcG9sbFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cInNldGVtb2pcIlxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlSW5wdXR9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gaGFuZGxlTWVzc2FnZVByZXNzKGUpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlTWVzc2FnZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidXR0b24tZWZmZWN0IG1yLTMgbWwtM1wiXG4gICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICA+XG4gICAgICAgICAgPE1pYyAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2BzdWJtaXQgaWNvbi1idG4gYnRuLXByaW1hcnkgJHtcbiAgICAgICAgICAgIG1lc3NhZ2VJbnB1dC50cmltKCkgPyBcIlwiIDogXCJkaXNhYmxlZFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTWVzc2FnZVByZXNzKFwic2VuZFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTZW5kIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGVtb2ppcy1jb250YWluICR7ZW1vamkgPyBcIm9wZW5cIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbW9qaXMtc3ViLWNvbnRhaW4gY3VzdG9tLXNjcm9sbFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZW1vamlzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBnZXRFbW9qaShpdGVtKX0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmVtb2ppfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN0aWNrZXItY29udGFpbiAke3N0aWNrZXIgPyBcIm9wZW5cIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja2VyLXN1Yi1jb250YWluIGN1c3RvbS1zY3JvbGxcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3N0aWNrZXJzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBzZWxjZWN0ZWRTdGlja2VycyhpdGVtLnN0aWMpfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e2l0ZW0uc3RpY30gYWx0PVwic3RpY2tlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=