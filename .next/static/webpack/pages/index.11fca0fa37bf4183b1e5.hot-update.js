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

        console.log("message", messageInput);
        console.log("ids", loggedInUserID, chatWithID);
        var newMessage = {
          from: loggedInUserID,
          to: chatWithID,
          body: messageInput + "&name:" + chatWithName,
          type: "chat"
        };
        Object(_stanza_chatClient__WEBPACK_IMPORTED_MODULE_6__["sendNewMessage"])(newMessage);
        newMessage["messageTime"] = Object(_leftSidebar_datetime__WEBPACK_IMPORTED_MODULE_7__["default"])();
        newMessage["direction"] = "send";
        newMessage["fromto"] = chatWithID;
        console.log("message", messageInput);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9jaGF0Qm9hcmQvbWVzc2FnZUlucHV0LmpzIl0sIm5hbWVzIjpbIkRPTUFJTiIsInByb2Nlc3MiLCJNZXNzYWdlSW5wdXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2xpZW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dnZWRJblVzZXJJRCIsImN1cnJlbnRVc2VyIiwiamlkIiwiY2hhdFdpdGhJRCIsImNoYXRXaXRoIiwiaWQiLCJjaGF0V2l0aE5hbWUiLCJuYW1lIiwiY2hhdEN0eCIsInVzZUNvbnRleHQiLCJDaGF0Q29udGV4dCIsImNoYXRzIiwic2VsZWN0ZWRVc2VyIiwic2VuZE1lc3NhZ2UiLCJyZXBseU1lc3NhZ2UiLCJzZW5kSW1hZ2VzIiwidHlwaW5nTWVzc2FnZSIsInVzZVN0YXRlIiwiZW1vamlzIiwic2V0RW1vamlzIiwic3RpY2tlcnMiLCJzZXRTdGlja2VycyIsInN0aWNrZXIiLCJzZXRTdGlja2VyIiwiZW1vamkiLCJzZXRFbW9qaSIsImNvbnRhY3Rwb2xsIiwic2V0Q29udGFjdHBvbGwiLCJtZXNzYWdlSW5wdXQiLCJzZXRNZXNzYWdlSW5wdXQiLCJzbmlwcGV0TW9kYWwiLCJzZXRTbmlwcGV0TW9kYWwiLCJwb2xsTW9kYWwiLCJzZXRQb2xsTW9kYWwiLCJ0b2dnbGVTbmlwcGV0TW9kYWwiLCJ0b2dnbGVQb2xsTW9kYWwiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic2VsY2VjdGVkU3RpY2tlcnMiLCJzdGljIiwiY3VycmVudFVzZXJJZCIsInNlbGVjdGVkVXNlcklkIiwiaGlkZUFuZFNob3dTdGlja2VyIiwiaGlkZUFuZFNob3dFbW9qaSIsImVtb2oiLCJoaWRlQW5kU2hvd0NvbnRhY3RQb2xsIiwiY29udHBvbGwiLCJnZXRFbW9qaSIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJtZXNzYWdlIiwiaGFuZGxlTWVzc2FnZVByZXNzIiwiZSIsImtleSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldFRpbWVvdXQiLCJzY3JvbGxCeSIsInRvcCIsImJlaGF2aW9yIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5ld01lc3NhZ2UiLCJmcm9tIiwidG8iLCJib2R5IiwidHlwZSIsInNlbmROZXdNZXNzYWdlIiwiZGF0ZVRpbWUiLCJzZXROZXdNZXNzYWdlIiwic2V0TGFzdE1lc3NhZ2UiLCJ0aW1lIiwiZGlzcGxheSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsIm1hcCIsIml0ZW0iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBR0MseUJBQWY7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsTUFBdEI7QUFBQSxHQUFELENBQTFCO0FBQ0EsTUFBTUksY0FBYyxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0UsV0FBWCxDQUF1QkMsR0FBbEM7QUFBQSxHQUFELENBQWxDO0FBQ0EsTUFBTUMsVUFBVSxHQUFHTiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0ssUUFBWCxDQUFvQkMsRUFBL0I7QUFBQSxHQUFELENBQTlCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHVCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0ssUUFBWCxDQUFvQkcsSUFBL0I7QUFBQSxHQUFE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QUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRTRixlQW1URTtBQUFLLGlCQUFTLDRCQUFxQjdELE9BQU8sR0FBRyxNQUFILEdBQVksRUFBeEMsQ0FBZDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGlDQUNFO0FBQUEsc0JBQ0dGLFFBQVEsQ0FBQzZELEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUN6QixrQ0FDRTtBQUFZLHVCQUFPLEVBQUU7QUFBQSx5QkFBTXpDLGlCQUFpQixDQUFDd0MsSUFBSSxDQUFDdkMsSUFBTixDQUF2QjtBQUFBLGlCQUFyQjtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQTJCLHFCQUFHLEVBQUV1QyxJQUFJLENBQUN2QyxJQUFyQztBQUEyQyxxQkFBRyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU3dDLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUtELGFBTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcVVELENBaGJEOztHQUFNMUYsWTtVQUNhRSx1RCxFQUNGRSx1RCxFQUNRQSx1RCxFQUNKQSx1RCxFQUNFQSx1RDs7O0tBTGpCSixZO0FBa2JTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMWZjYTBmYTM3YmY0MTgzYjFlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU21pbGUsXG4gIEltYWdlLFxuICBDYW1lcmEsXG4gIENvZGUsXG4gIFVzZXIsXG4gIE1hcFBpbixcbiAgQ2xpcGJvYXJkLFxuICBCYXJDaGFydDIsXG4gIFBhcGVyY2xpcCxcbiAgTWljLFxuICBTZW5kLFxufSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IENoYXRDb250ZXh0IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NoYXRDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIHNldE5ld01lc3NhZ2UsXG4gIHVwZGF0ZUxhc3RNZXNzYWdlVGltZSxcbiAgc2V0TGFzdE1lc3NhZ2UsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBzZW5kTmV3TWVzc2FnZSB9IGZyb20gXCIuLi8uLi9zdGFuemEvY2hhdENsaWVudFwiO1xuaW1wb3J0IGRhdGVUaW1lIGZyb20gXCIuLi9sZWZ0U2lkZWJhci9kYXRldGltZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuY29uc3QgRE9NQUlOID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVBQ1RfQVBQX0RFRkFVTFRfRE9NQUlOO1xuXG5jb25zdCBNZXNzYWdlSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgY2xpZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmNsaWVudCk7XG4gIGNvbnN0IGxvZ2dlZEluVXNlcklEID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLmppZCk7XG4gIGNvbnN0IGNoYXRXaXRoSUQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGguaWQpO1xuICBjb25zdCBjaGF0V2l0aE5hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY2hhdFdpdGgubmFtZSk7XG5cbiAgY29uc3QgY2hhdEN0eCA9IHVzZUNvbnRleHQoQ2hhdENvbnRleHQpO1xuICBjb25zdCBjaGF0cyA9IGNoYXRDdHguY2hhdHM7XG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gY2hhdEN0eC5jdXJyZW50VXNlcjtcbiAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdEN0eC5zZWxlY3RlZFVzZXI7XG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gY2hhdEN0eC5zZW5kTWVzc2FnZTtcbiAgY29uc3QgcmVwbHlNZXNzYWdlID0gY2hhdEN0eC5yZXBseU1lc3NhZ2U7XG4gIGNvbnN0IHNlbmRJbWFnZXMgPSBjaGF0Q3R4LnNlbmRJbWFnZXM7XG4gIGNvbnN0IHR5cGluZ01lc3NhZ2UgPSBjaGF0Q3R4LnR5cGluZ01lc3NhZ2U7XG4gIGNvbnN0IFtlbW9qaXMsIHNldEVtb2ppc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdGlja2Vycywgc2V0U3RpY2tlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3RpY2tlciwgc2V0U3RpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbW9qaSwgc2V0RW1vamldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGFjdHBvbGwsIHNldENvbnRhY3Rwb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2VJbnB1dCwgc2V0TWVzc2FnZUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc25pcHBldE1vZGFsLCBzZXRTbmlwcGV0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcG9sbE1vZGFsLCBzZXRQb2xsTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZVNuaXBwZXRNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRTbmlwcGV0TW9kYWwoIXNuaXBwZXRNb2RhbCk7XG4gICAgc2V0Q29udGFjdHBvbGwoZmFsc2UpO1xuICB9O1xuICBjb25zdCB0b2dnbGVQb2xsTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0UG9sbE1vZGFsKCFwb2xsTW9kYWwpO1xuICAgIHNldENvbnRhY3Rwb2xsKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChcIi9hcGkvZW1vamkuanNvblwiKS50aGVuKChyZXMpID0+IHNldEVtb2ppcyhyZXMuZGF0YSkpO1xuICAgIGF4aW9zLmdldChcIi9hcGkvc3RpY2tlci5qc29uXCIpLnRoZW4oKHJlcykgPT4gc2V0U3RpY2tlcnMocmVzLmRhdGEpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNlbGNlY3RlZFN0aWNrZXJzID0gKHN0aWMpID0+IHtcbiAgICBsZXQgY3VycmVudFVzZXJJZCA9IGN1cnJlbnRVc2VyLmlkO1xuICAgIGxldCBzZWxlY3RlZFVzZXJJZCA9IHNlbGVjdGVkVXNlci5pZDtcbiAgICBzZW5kSW1hZ2VzKGN1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkLCBzdGljLCBjaGF0cyk7XG4gICAgc2V0U3RpY2tlcihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUFuZFNob3dTdGlja2VyID0gKHN0aWMpID0+IHtcbiAgICBzZXRFbW9qaShmYWxzZSk7XG4gICAgc2V0Q29udGFjdHBvbGwoZmFsc2UpO1xuICAgIHNldFN0aWNrZXIoIXN0aWMpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVBbmRTaG93RW1vamkgPSAoZW1vaikgPT4ge1xuICAgIHNldFN0aWNrZXIoZmFsc2UpO1xuICAgIHNldENvbnRhY3Rwb2xsKGZhbHNlKTtcbiAgICBzZXRFbW9qaSghZW1vaik7XG4gIH07XG5cbiAgY29uc3QgaGlkZUFuZFNob3dDb250YWN0UG9sbCA9IChjb250cG9sbCkgPT4ge1xuICAgIHNldEVtb2ppKGZhbHNlKTtcbiAgICBzZXRTdGlja2VyKGZhbHNlKTtcbiAgICBzZXRDb250YWN0cG9sbCghY29udHBvbGwpO1xuICB9O1xuXG4gIGNvbnN0IGdldEVtb2ppID0gKGVtb2opID0+IHtcbiAgICBzZXRNZXNzYWdlSW5wdXQobWVzc2FnZUlucHV0ICsgZW1vai5lbW9qaSk7XG4gICAgc2V0RW1vamkoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIHNldE1lc3NhZ2VJbnB1dChtZXNzYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNZXNzYWdlUHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUgPT09IFwic2VuZFwiKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlc1wiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250YWluZXIuc2Nyb2xsQnkoeyB0b3A6IDIwMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICB9LCAzMTApO1xuXG4gICAgICBpZiAobWVzc2FnZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0TWVzc2FnZUlucHV0KFwiXCIpO1xuICAgICAgICAvLyB0eXBpbmdNZXNzYWdlKHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgbWVzc2FnZUlucHV0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpZHNcIiwgbG9nZ2VkSW5Vc2VySUQsIGNoYXRXaXRoSUQpO1xuICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xuICAgICAgICAgIGZyb206IGxvZ2dlZEluVXNlcklELFxuICAgICAgICAgIHRvOiBjaGF0V2l0aElELFxuICAgICAgICAgIGJvZHk6IG1lc3NhZ2VJbnB1dCArIFwiJm5hbWU6XCIgKyBjaGF0V2l0aE5hbWUsXG4gICAgICAgICAgdHlwZTogXCJjaGF0XCIsXG4gICAgICAgIH07XG4gICAgICAgIHNlbmROZXdNZXNzYWdlKG5ld01lc3NhZ2UpO1xuICAgICAgICBuZXdNZXNzYWdlW1wibWVzc2FnZVRpbWVcIl0gPSBkYXRlVGltZSgpO1xuICAgICAgICBuZXdNZXNzYWdlW1wiZGlyZWN0aW9uXCJdID0gXCJzZW5kXCI7XG4gICAgICAgIG5ld01lc3NhZ2VbXCJmcm9tdG9cIl0gPSBjaGF0V2l0aElEO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgbWVzc2FnZUlucHV0KTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TmV3TWVzc2FnZShuZXdNZXNzYWdlKSk7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldExhc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGlkOiBjaGF0V2l0aElELFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZUlucHV0LFxuICAgICAgICAgICAgdGltZTogZGF0ZVRpbWUoKSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1pbnB1dFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIGVtb2ppcy1tYWluXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaWNvbi1idG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidXR0b24tZWZmZWN0IG1yLTMgdG9nZ2xlLXN0aWNrZXIgb3V0c2lkZSAke1xuICAgICAgICAgICAgc3RpY2tlciA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpZGVBbmRTaG93U3RpY2tlcihzdGlja2VyKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGlkPVwiTGF5ZXJfMVwiXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgeGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgICB3aWR0aD1cIjIxNThweFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMTQ4cHhcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMTU4IDIxNDhcIlxuICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMjE1OCAyMTQ4XCJcbiAgICAgICAgICAgIHNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNjBcIlxuICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxuICAgICAgICAgICAgICBkPVwiTTY5OSw2OTMgICAgICAgICAgICAgICAgICAgICAgICBjMCwxNzUuNjQ5LDAsMzUxLjM1MSwwLDUyN2MzNi45OTYsMCw3NC4wMDQsMCwxMTEsMGMxOC4wNTgsMCw0MC44MTItMi40ODUsNTcsMWMxMS4zMzIsMC4zMzMsMjIuNjY4LDAuNjY3LDM0LDEgICAgICAgICAgICAgICAgICAgICAgICBjNy42NjQsMi4xNDgsMjAuNzY5LDE0LjA5MSwyNSwyMGM4Ljg1NywxMi4zNjgsNiw0MS43OTQsNiw2MmMwLDQ5LjMyOSwwLDk4LjY3MiwwLDE0OGMxNzUuNjQ5LDAsMzUxLjM1MSwwLDUyNywwICAgICAgICAgICAgICAgICAgICAgICAgYzAtMjUyLjk3NSwwLTUwNi4wMjUsMC03NTlDMTIwNS42OTIsNjkzLDk1Mi4zMDgsNjkzLDY5OSw2OTN6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTg4Niw3OTljNTkuMTcyLTAuNzY1LDkzLjQzMSwyNS4yODksMTExLDY2YzYuNDE2LDE0Ljg2NywxNC42MTIsMzkuODU4LDksNjMgICAgICAgICAgICAgICAgICAgICAgICBjLTIuMzkxLDkuODU3LTUuMDc2LDIwLjEzOC05LDI5Yy0xNS43OTQsMzUuNjcxLTQ3LjEyOSw1My42NzQtOTAsNjNjLTIwLjk3OSw0LjU2My00Mi40NjMtNC41NDMtNTUtMTAgICAgICAgICAgICAgICAgICAgICAgICBjLTQyLjc3My0xOC42MTctODUuNjUyLTc3LjI0Ni01OS0xNDFjMTAuNjM3LTI1LjQ0NSwzMS4wMjQtNDksNTYtNjBjNy45OTktMi42NjcsMTYuMDAxLTUuMzMzLDI0LTggICAgICAgICAgICAgICAgICAgICAgICBDODc3LjI1NSw3OTkuODMzLDg4Mi43MTYsODAxLjAzNiw4ODYsNzk5elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xMjU4LDc5OWM1OS4xNzItMC43NjUsOTMuNDMxLDI1LjI4OSwxMTEsNjZjNi40MTYsMTQuODY3LDE0LjYxMiwzOS44NTgsOSw2MyAgICAgICAgICAgICAgICAgICAgICAgIGMtMi4zOTEsOS44NTctNS4wNzYsMjAuMTM4LTksMjljLTE1Ljc5NCwzNS42NzEtNDcuMTI5LDUzLjY3NC05MCw2M2MtMjAuOTc5LDQuNTYzLTQyLjQ2My00LjU0My01NS0xMCAgICAgICAgICAgICAgICAgICAgICAgIGMtNDIuNzczLTE4LjYxNy04NS42NTItNzcuMjQ2LTU5LTE0MWMxMC42MzctMjUuNDQ1LDMxLjAyNC00OSw1Ni02MGM3Ljk5OS0yLjY2NywxNi4wMDEtNS4zMzMsMjQtOCAgICAgICAgICAgICAgICAgICAgICAgIEMxMjQ5LjI1NSw3OTkuODMzLDEyNTQuNzE2LDgwMS4wMzYsMTI1OCw3OTl6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTEzNDUsMTE4NGMtMC43MjMsMTguNzEtMTEuNjU4LDI5LjgyLTIwLDQxYy0xOC4yNzEsMjQuNDg5LTUwLjEyOSwzNy4xODMtODMsNDcgICAgICAgICAgICAgICAgICAgICAgICBjLTcuMzMzLDEtMTQuNjY3LDItMjIsM2MtMTIuMDEzLDIuNzk4LTMzLjYzNiw1LjE1LTQ0LDNjLTExLjMzMi0wLjMzMy0yMi42NjgtMC42NjctMzQtMWMtMTUuMzMyLTMtMzAuNjY4LTYtNDYtOSAgICAgICAgICAgICAgICAgICAgICAgIGMtNDQuMDY2LTE0LjQyNi04MC45NDQtMzEuOTM3LTExMC02MWMtMjIuMzQ4LTIyLjM1My0zOC45OTItNDUuNjI4LTM3LTkwYzAuNjY3LDAsMS4zMzMsMCwyLDBjOS4xNjMsNS41ODUsMjQuNzIzLDMuMTY4LDM2LDYgICAgICAgICAgICAgICAgICAgICAgICBjMjYuMjExLDYuNTgzLDU0LjczNiw3LjE3NCw4MiwxNGMzNC4wNjgsOC41Myw3MS45NjEsMTAuNTMxLDEwNiwxOWM5Ljk5OSwxLjMzMywyMC4wMDEsMi42NjcsMzAsNGMyNi4xOTMsNi43MDMsNTQuNjczLDcuMjExLDgyLDE0ICAgICAgICAgICAgICAgICAgICAgICAgQzEzMDQuODk0LDExNzguNDQ1LDEzMjUuNTczLDExODIuOTU5LDEzNDUsMTE4NHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIHBvaW50cz1cIjY2OC4zMzMsMTI0OC42NjcgOTAxLjY2NywxNDgyIDk0MS42NjcsMTQzMiA5MjIuNDk4LDEyMzcuODQ2ICAgICAgICAgICAgICAgICAgICAgICAgIDY4NywxMjEwLjY2NyBcIlxuICAgICAgICAgICAgPjwvcG9seWdvbj5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdC1idG4gZG90LXByaW1hcnkgbXItM1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uLWJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ1dHRvbi1lZmZlY3QgdG9nZ2xlLWVtb2ppICR7XG4gICAgICAgICAgICAgIGVtb2ppID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGlkZUFuZFNob3dFbW9qaShlbW9qaSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNtaWxlIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXBvbGxcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci00IG91dHNpZGVcIlxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGlkZUFuZFNob3dDb250YWN0UG9sbChjb250YWN0cG9sbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC1wb2xsLWNvbnRlbnRcIlxuICAgICAgICAgICAgc3R5bGU9e2NvbnRhY3Rwb2xsID8geyBkaXNwbGF5OiBcImJsb2NrXCIgfSA6IHsgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIC8+XG4gICAgICAgICAgICAgICAgICBnYWxsZXJ5XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxDYW1lcmEgLz5cbiAgICAgICAgICAgICAgICAgIGNhbWVyYVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3NuaXBwZXRNb2RhbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTbmlwcGV0TW9kYWwoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q29kZSAvPlxuICAgICAgICAgICAgICAgICAgQ29kZSBTbmlwcGVzdFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8VXNlciAvPlxuICAgICAgICAgICAgICAgICAgY29udGFjdFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8TWFwUGluIC8+XG4gICAgICAgICAgICAgICAgICBsb2NhdGlvblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8Q2xpcGJvYXJkIC8+XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3BvbGxNb2RhbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVQb2xsTW9kYWwoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQyIC8+XG4gICAgICAgICAgICAgICAgICBwb2xsXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxQYXBlcmNsaXAgLz5cbiAgICAgICAgICAgICAgICAgIGF0dGFjaFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICBpc09wZW49e3NuaXBwZXRNb2RhbH1cbiAgICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGVTbmlwcGV0TW9kYWx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNuaXBwZXQtbW9kYWwtbWFpbiBhZGQtcG9wdXBcIlxuICAgICAgICAgICAgICBjZW50ZXJlZD17dHJ1ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlU25pcHBldE1vZGFsfT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZGVcIj48L2k+Y29kZSBzbmlwcGV0c1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZGVmYXVsdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+Y3JlYXQgc25pcHBldHM8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGl0bGUob3B0aW9uYWwpXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+ZWJuZjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+YysrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5kaWZmPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5kYXJ0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGQgY29tbWFudCAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tc25pcGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidXR0b24tZWZmZWN0IGJ0bi1zbSBtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNuaXBwZXRNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidXR0b24tZWZmZWN0IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTbmlwcGV0TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlICYgcG9zdFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgIGlzT3Blbj17cG9sbE1vZGFsfVxuICAgICAgICAgICAgICB0b2dnbGU9e3RvZ2dsZVBvbGxNb2RhbH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9sLW1vZGFsLW1haW4gYWRkLXBvcHVwXCJcbiAgICAgICAgICAgICAgY2VudGVyZWQ9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RvZ2dsZVBvbGxNb2RhbH0+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgZGF0YS1mZWF0aGVyPVwiYmFyLWNoYXJ0LTJcIj48L2k+cG9sbFxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJkZWZhdWx0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPmNyZWF0ZSBwb2xsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhc2sgcXVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWRkIGNvbW1hdG5cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm9wdGlvbiAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwib3B0aW9uIDJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkLW9wdGlvblwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQgYW4gb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXBvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QgcG9sbCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTBcIj50ZXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2xsIGV4cGllciBpbiA3IGRheXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0wXCI+dGVzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsb3ctZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhbGxvdy1jaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbGxvdyB1c2VycyB0byB2b3RlIGFub255bW91c2x5XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0LXBvbGwtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidXR0b24tZWZmZWN0IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQb2xsTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIHBvbGxcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZXRlbW9qXCJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZUlucHV0fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZU1lc3NhZ2VQcmVzcyhlKX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU1lc3NhZ2VDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnV0dG9uLWVmZmVjdCBtci0zIG1sLTNcIlxuICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxNaWMgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgc3VibWl0IGljb24tYnRuIGJ0bi1wcmltYXJ5ICR7XG4gICAgICAgICAgICBtZXNzYWdlSW5wdXQudHJpbSgpID8gXCJcIiA6IFwiZGlzYWJsZWRcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lc3NhZ2VQcmVzcyhcInNlbmRcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8U2VuZCAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BlbW9qaXMtY29udGFpbiAke2Vtb2ppID8gXCJvcGVuXCIgOiBcIlwifWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1vamlzLXN1Yi1jb250YWluIGN1c3RvbS1zY3JvbGxcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2Vtb2ppcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gb25DbGljaz17KCkgPT4gZ2V0RW1vamkoaXRlbSl9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5lbW9qaX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGlja2VyLWNvbnRhaW4gJHtzdGlja2VyID8gXCJvcGVuXCIgOiBcIlwifWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2tlci1zdWItY29udGFpbiBjdXN0b20tc2Nyb2xsXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtzdGlja2Vycy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gb25DbGljaz17KCkgPT4gc2VsY2VjdGVkU3RpY2tlcnMoaXRlbS5zdGljKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtpdGVtLnN0aWN9IGFsdD1cInN0aWNrZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9