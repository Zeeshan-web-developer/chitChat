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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\chat\\containers\\chatBoard\\messageInput.js",
    _this = undefined,
    _s = $RefreshSig$();










var MessageInput = function MessageInput() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
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
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/emoji.json").then(function (res) {
      return setEmojis(res.data);
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/sticker.json").then(function (res) {
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
      var currentUserId = currentUser.id;
      var selectedUserId = selectedUser.id;

      if (messageInput.length > 0) {
        sendMessage(currentUserId, selectedUserId, messageInput, chats);
        setMessageInput(""); // typingMessage(true);

        console.log("message", messageInput); // Here we need to send meesage to the user

        var newMessage = {
          from: 2,
          to: 1,
          messageTime: "2021-08-07 09:03:10",
          messageBody: messageInput,
          chatType: "chat",
          direction: "received"
        };
        dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["setNewMessage"])(newMessage));
      }
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "message-input",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "wrap emojis-main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        className: "icon-btn btn-outline-primary button-effect mr-3 toggle-sticker outside ".concat(sticker ? "active" : ""),
        href: "#",
        onClick: function onClick() {
          return hideAndShowSticker(sticker);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("svg", {
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "60",
            strokeMiterlimit: "10",
            d: "M699,693                        c0,175.649,0,351.351,0,527c36.996,0,74.004,0,111,0c18.058,0,40.812-2.485,57,1c11.332,0.333,22.668,0.667,34,1                        c7.664,2.148,20.769,14.091,25,20c8.857,12.368,6,41.794,6,62c0,49.329,0,98.672,0,148c175.649,0,351.351,0,527,0                        c0-252.975,0-506.025,0-759C1205.692,693,952.308,693,699,693z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M886,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C877.255,799.833,882.716,801.036,886,799z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1258,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C1249.255,799.833,1254.716,801.036,1258,799z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1345,1184c-0.723,18.71-11.658,29.82-20,41c-18.271,24.489-50.129,37.183-83,47                        c-7.333,1-14.667,2-22,3c-12.013,2.798-33.636,5.15-44,3c-11.332-0.333-22.668-0.667-34-1c-15.332-3-30.668-6-46-9                        c-44.066-14.426-80.944-31.937-110-61c-22.348-22.353-38.992-45.628-37-90c0.667,0,1.333,0,2,0c9.163,5.585,24.723,3.168,36,6                        c26.211,6.583,54.736,7.174,82,14c34.068,8.53,71.961,10.531,106,19c9.999,1.333,20.001,2.667,30,4c26.193,6.703,54.673,7.211,82,14                        C1304.894,1178.445,1325.573,1182.959,1345,1184z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("polygon", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            points: "668.333,1248.667 901.667,1482 941.667,1432 922.498,1237.846                         687,1210.667 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "dot-btn dot-primary mr-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
          className: "icon-btn btn-outline-primary button-effect toggle-emoji ".concat(emoji ? "active" : ""),
          href: "#",
          onClick: function onClick() {
            return hideAndShowEmoji(emoji);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Smile"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "contact-poll",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
          className: "icon-btn btn-outline-primary mr-4 outside",
          href: "#",
          onClick: function onClick() {
            return hideAndShowContactPoll(contactpoll);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
            className: "fa fa-plus"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "contact-poll-content",
          style: contactpoll ? {
            display: "block"
          } : {
            display: "none"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Image"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 19
                }, _this), "gallery"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Camera"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 19
                }, _this), "camera"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                "data-toggle": "modal",
                "data-target": "#snippetModal",
                onClick: function onClick() {
                  return toggleSnippetModal();
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Code"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 19
                }, _this), "Code Snippest"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["User"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 19
                }, _this), "contact"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["MapPin"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, _this), "location"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Clipboard"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 19
                }, _this), "document"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                "data-toggle": "modal",
                "data-target": "#pollModal",
                onClick: function onClick() {
                  return togglePollModal();
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["BarChart2"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 19
                }, _this), "poll"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Paperclip"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 19
                }, _this), "attach"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
            isOpen: snippetModal,
            toggle: toggleSnippetModal,
            className: "snippet-modal-main add-popup",
            centered: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
              toggle: toggleSnippetModal,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
                className: "modal-title",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                  className: "fa fa-code"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 19
                }, _this), "code snippets"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
                className: "default-form",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
                  children: "creat snippets"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                    className: "form-control",
                    type: "text",
                    placeholder: "title(optional)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
                    className: "mb-0",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                      children: "ebnf"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                      children: "c++"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 276,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                      children: "diff"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                      children: "dart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 278,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("textarea", {
                    className: "form-control",
                    rows: "5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                    className: "form-control mb-0",
                    type: "text",
                    placeholder: "add commant (optional)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "form-group mb-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "btn-snipate",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      className: "btn btn-danger button-effect btn-sm mr-3",
                      href: "#",
                      onClick: toggleSnippetModal,
                      children: "Cancel"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 293,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      className: "btn btn-primary button-effect btn-sm",
                      href: "#",
                      onClick: toggleSnippetModal,
                      children: "Create & post"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 19
                }, _this)]
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
            lineNumber: 252,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
            isOpen: pollModal,
            toggle: togglePollModal,
            className: "pol-modal-main add-popup",
            centered: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "modal-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
                toggle: togglePollModal,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
                  className: "modal-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                    "data-feather": "bar-chart-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 21
                  }, _this), "poll"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
                  className: "default-form",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
                    children: "create poll"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "ask que"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 329,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "add commatn"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 334,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "option 1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 341,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "option 2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 346,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      className: "add-option",
                      href: "#",
                      children: "add an option"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 351,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 340,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "form-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                      className: "post-poll",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
                          children: ["post poll in", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                            className: "pt-0",
                            children: "test name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 360,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 358,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
                          children: ["poll expier in 7 days", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                            className: "pt-0",
                            children: "test name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 364,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 362,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 357,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 356,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 355,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "form-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                      className: "allow-group",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                        className: "allow-check",
                        type: "checkbox"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 371,
                        columnNumber: 25
                      }, _this), "Allow users to vote anonymously"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 370,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 369,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "creat-poll-btn",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      className: "btn btn-primary button-effect btn-sm",
                      href: "#",
                      onClick: togglePollModal,
                      children: "Create poll"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 376,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 375,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 326,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 325,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
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
        lineNumber: 390,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        className: "icon-btn btn-outline-primary button-effect mr-3 ml-3",
        href: "#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Mic"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
        className: "submit icon-btn btn-primary ".concat(messageInput.trim() ? "" : "disabled"),
        onClick: function onClick() {
          return handleMessagePress("send");
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_1__["Send"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "emojis-contain ".concat(emoji ? "open" : ""),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "emojis-sub-contain custom-scroll",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
            children: emojis.map(function (item, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
                onClick: function onClick() {
                  return getEmoji(item);
                },
                children: item.emoji
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 417,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "sticker-contain ".concat(sticker ? "open" : ""),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "sticker-sub-contain custom-scroll",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
            children: stickers.map(function (item, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
                onClick: function onClick() {
                  return selcectedStickers(item.stic);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                  className: "img-fluid",
                  src: item.stic,
                  alt: "sticker"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 431,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 430,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
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

_s(MessageInput, "/4EBGlmJ8r00A+527NY5RT9YN0w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
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

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: setUser, setUSerStatus, setClient, setLoginError, loginLoding, logout, setActiveTab, setChatWith, chatededUsers, unmountComponent, addNewUSer, removeRecentUser, updateLastMessageTime, setRoster, updateUserStatus, setAllUsers, setNewMessage, fetchUsers */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewMessage", function() { return setNewMessage; });
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
var setNewMessage = function setNewMessage(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_NEW_MESSAGE"],
    payload: payload
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9jaGF0Qm9hcmQvbWVzc2FnZUlucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VJbnB1dCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjaGF0Q3R4IiwidXNlQ29udGV4dCIsIkNoYXRDb250ZXh0IiwiY2hhdHMiLCJjdXJyZW50VXNlciIsInNlbGVjdGVkVXNlciIsInNlbmRNZXNzYWdlIiwicmVwbHlNZXNzYWdlIiwic2VuZEltYWdlcyIsInR5cGluZ01lc3NhZ2UiLCJ1c2VTdGF0ZSIsImVtb2ppcyIsInNldEVtb2ppcyIsInN0aWNrZXJzIiwic2V0U3RpY2tlcnMiLCJzdGlja2VyIiwic2V0U3RpY2tlciIsImVtb2ppIiwic2V0RW1vamkiLCJjb250YWN0cG9sbCIsInNldENvbnRhY3Rwb2xsIiwibWVzc2FnZUlucHV0Iiwic2V0TWVzc2FnZUlucHV0Iiwic25pcHBldE1vZGFsIiwic2V0U25pcHBldE1vZGFsIiwicG9sbE1vZGFsIiwic2V0UG9sbE1vZGFsIiwidG9nZ2xlU25pcHBldE1vZGFsIiwidG9nZ2xlUG9sbE1vZGFsIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInNlbGNlY3RlZFN0aWNrZXJzIiwic3RpYyIsImN1cnJlbnRVc2VySWQiLCJpZCIsInNlbGVjdGVkVXNlcklkIiwiaGlkZUFuZFNob3dTdGlja2VyIiwiaGlkZUFuZFNob3dFbW9qaSIsImVtb2oiLCJoaWRlQW5kU2hvd0NvbnRhY3RQb2xsIiwiY29udHBvbGwiLCJnZXRFbW9qaSIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJtZXNzYWdlIiwiaGFuZGxlTWVzc2FnZVByZXNzIiwiZSIsImtleSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldFRpbWVvdXQiLCJzY3JvbGxCeSIsInRvcCIsImJlaGF2aW9yIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5ld01lc3NhZ2UiLCJmcm9tIiwidG8iLCJtZXNzYWdlVGltZSIsIm1lc3NhZ2VCb2R5IiwiY2hhdFR5cGUiLCJkaXJlY3Rpb24iLCJzZXROZXdNZXNzYWdlIiwiZGlzcGxheSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsIm1hcCIsIml0ZW0iLCJpIiwiY29va2llcyIsIkNvb2tpZXMiLCJjb2tpZSIsInNldFVzZXIiLCJ1c2VyIiwidHlwZSIsImFjdGlvblR5cGVzIiwicGF5bG9hZCIsInNldFVTZXJTdGF0dXMiLCJ1c2VyU3RhdHVzIiwic2V0Q2xpZW50IiwiY2xpZW50Iiwic2V0TG9naW5FcnJvciIsImVycm9yIiwibG9naW5Mb2RpbmciLCJzdGF0dXMiLCJsb2dvdXQiLCJzZXRBY3RpdmVUYWIiLCJ0YWIiLCJzZXRDaGF0V2l0aCIsInVzZXJuYW1lIiwiY2hhdGVkZWRVc2VycyIsIm5hdiIsInVubW91bnRDb21wb25lbnQiLCJhbnkiLCJhZGROZXdVU2VyIiwicmVtb3ZlUmVjZW50VXNlciIsInVwZGF0ZUxhc3RNZXNzYWdlVGltZSIsInRpbWUiLCJzZXRSb3N0ZXIiLCJjb250YWN0cyIsInVwZGF0ZVVzZXJTdGF0dXMiLCJvbmxpbmVTdGF0dXMiLCJzZXRBbGxVc2VycyIsImZldGNoVXNlcnMiLCJoZWFkZXJzIiwiQXV0aFRva2VuIiwicmVzcG9uc2UiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDekIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQ0MsNERBQUQsQ0FBMUI7QUFDQSxNQUFNQyxLQUFLLEdBQUdILE9BQU8sQ0FBQ0csS0FBdEI7QUFDQSxNQUFNQyxXQUFXLEdB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RDtBQUFBLFNBQWM7QUFDekNGLFFBQUksRUFBRUMsc0RBRG1DO0FBRXpDQyxXQUFPLEVBQVBBO0FBRnlDLEdBQWQ7QUFBQSxDQUF0QjtBQUtBLElBQU0yQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQzlCLE1BQUk7QUFDRjtBQUFBLGtNQUFPLGlCQUFPaEgsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNrQmdDLGtEQUFLLENBQUNDLEdBQU4sb0JBQXNCTyxFQUF0QixhQUFrQztBQUN2RHlFLHlCQUFPLEVBQUU7QUFDUCxvQ0FBZ0JqQyxLQUFLLENBQUNrQztBQURmO0FBRDhDLGlCQUFsQyxDQURsQjs7QUFBQTtBQUNDQyx3QkFERDtBQU1Mbkgsd0JBQVEsQ0FBQztBQUFFbUYsc0JBQUksRUFBRUMsZ0RBQVI7QUFBK0JDLHlCQUFPLEVBQUU4QixRQUFRLENBQUMvRSxJQUFULENBQWNBO0FBQXRELGlCQUFELENBQVI7O0FBTks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFELEdBVEQsQ0FTRSxPQUFPZ0YsR0FBUCxFQUFZO0FBQ1pwSCxZQUFRLENBQUM7QUFDUG1GLFVBQUksRUFBRUMsa0RBREM7QUFFUEMsYUFBTyxFQUFFO0FBRkYsS0FBRCxDQUFSO0FBSUQ7QUFDRixDQWhCTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MTZiZjRiNGYwYjc5MWFmY2FmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU21pbGUsXG4gIEltYWdlLFxuICBDYW1lcmEsXG4gIENvZGUsXG4gIFVzZXIsXG4gIE1hcFBpbixcbiAgQ2xpcGJvYXJkLFxuICBCYXJDaGFydDIsXG4gIFBhcGVyY2xpcCxcbiAgTWljLFxuICBTZW5kLFxufSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IENoYXRDb250ZXh0IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NoYXRDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0TmV3TWVzc2FnZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IE1lc3NhZ2VJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBjaGF0Q3R4ID0gdXNlQ29udGV4dChDaGF0Q29udGV4dCk7XG4gIGNvbnN0IGNoYXRzID0gY2hhdEN0eC5jaGF0cztcbiAgY29uc3QgY3VycmVudFVzZXIgPSBjaGF0Q3R4LmN1cnJlbnRVc2VyO1xuICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjaGF0Q3R4LnNlbGVjdGVkVXNlcjtcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBjaGF0Q3R4LnNlbmRNZXNzYWdlO1xuICBjb25zdCByZXBseU1lc3NhZ2UgPSBjaGF0Q3R4LnJlcGx5TWVzc2FnZTtcbiAgY29uc3Qgc2VuZEltYWdlcyA9IGNoYXRDdHguc2VuZEltYWdlcztcbiAgY29uc3QgdHlwaW5nTWVzc2FnZSA9IGNoYXRDdHgudHlwaW5nTWVzc2FnZTtcbiAgY29uc3QgW2Vtb2ppcywgc2V0RW1vamlzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3N0aWNrZXJzLCBzZXRTdGlja2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdGlja2VyLCBzZXRTdGlja2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vtb2ppLCBzZXRFbW9qaV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb250YWN0cG9sbCwgc2V0Q29udGFjdHBvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZUlucHV0LCBzZXRNZXNzYWdlSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzbmlwcGV0TW9kYWwsIHNldFNuaXBwZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwb2xsTW9kYWwsIHNldFBvbGxNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlU25pcHBldE1vZGFsID0gKCkgPT4ge1xuICAgIHNldFNuaXBwZXRNb2RhbCghc25pcHBldE1vZGFsKTtcbiAgICBzZXRDb250YWN0cG9sbChmYWxzZSk7XG4gIH07XG4gIGNvbnN0IHRvZ2dsZVBvbGxNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRQb2xsTW9kYWwoIXBvbGxNb2RhbCk7XG4gICAgc2V0Q29udGFjdHBvbGwoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KFwiL2FwaS9lbW9qaS5qc29uXCIpLnRoZW4oKHJlcykgPT4gc2V0RW1vamlzKHJlcy5kYXRhKSk7XG4gICAgYXhpb3MuZ2V0KFwiL2FwaS9zdGlja2VyLmpzb25cIikudGhlbigocmVzKSA9PiBzZXRTdGlja2VycyhyZXMuZGF0YSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2VsY2VjdGVkU3RpY2tlcnMgPSAoc3RpYykgPT4ge1xuICAgIGxldCBjdXJyZW50VXNlcklkID0gY3VycmVudFVzZXIuaWQ7XG4gICAgbGV0IHNlbGVjdGVkVXNlcklkID0gc2VsZWN0ZWRVc2VyLmlkO1xuICAgIHNlbmRJbWFnZXMoY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWQsIHN0aWMsIGNoYXRzKTtcbiAgICBzZXRTdGlja2VyKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoaWRlQW5kU2hvd1N0aWNrZXIgPSAoc3RpYykgPT4ge1xuICAgIHNldEVtb2ppKGZhbHNlKTtcbiAgICBzZXRDb250YWN0cG9sbChmYWxzZSk7XG4gICAgc2V0U3RpY2tlcighc3RpYyk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUFuZFNob3dFbW9qaSA9IChlbW9qKSA9PiB7XG4gICAgc2V0U3RpY2tlcihmYWxzZSk7XG4gICAgc2V0Q29udGFjdHBvbGwoZmFsc2UpO1xuICAgIHNldEVtb2ppKCFlbW9qKTtcbiAgfTtcblxuICBjb25zdCBoaWRlQW5kU2hvd0NvbnRhY3RQb2xsID0gKGNvbnRwb2xsKSA9PiB7XG4gICAgc2V0RW1vamkoZmFsc2UpO1xuICAgIHNldFN0aWNrZXIoZmFsc2UpO1xuICAgIHNldENvbnRhY3Rwb2xsKCFjb250cG9sbCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0RW1vamkgPSAoZW1vaikgPT4ge1xuICAgIHNldE1lc3NhZ2VJbnB1dChtZXNzYWdlSW5wdXQgKyBlbW9qLmVtb2ppKTtcbiAgICBzZXRFbW9qaShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVzc2FnZUNoYW5nZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgc2V0TWVzc2FnZUlucHV0KG1lc3NhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VQcmVzcyA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZSA9PT0gXCJzZW5kXCIpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VzXCIpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxCeSh7IHRvcDogMjAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIH0sIDMxMCk7XG4gICAgICBsZXQgY3VycmVudFVzZXJJZCA9IGN1cnJlbnRVc2VyLmlkO1xuICAgICAgbGV0IHNlbGVjdGVkVXNlcklkID0gc2VsZWN0ZWRVc2VyLmlkO1xuXG4gICAgICBpZiAobWVzc2FnZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VuZE1lc3NhZ2UoY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWQsIG1lc3NhZ2VJbnB1dCwgY2hhdHMpO1xuICAgICAgICBzZXRNZXNzYWdlSW5wdXQoXCJcIik7XG4gICAgICAgIC8vIHR5cGluZ01lc3NhZ2UodHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBtZXNzYWdlSW5wdXQpO1xuICAgICAgICAvLyBIZXJlIHdlIG5lZWQgdG8gc2VuZCBtZWVzYWdlIHRvIHRoZSB1c2VyXG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgZnJvbTogMixcbiAgICAgICAgICB0bzogMSxcbiAgICAgICAgICBtZXNzYWdlVGltZTogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXG4gICAgICAgICAgbWVzc2FnZUJvZHk6IG1lc3NhZ2VJbnB1dCxcbiAgICAgICAgICBjaGF0VHlwZTogXCJjaGF0XCIsXG4gICAgICAgICAgZGlyZWN0aW9uOiBcInJlY2VpdmVkXCIsXG4gICAgICAgIH07XG4gICAgICAgIGRpc3BhdGNoKHNldE5ld01lc3NhZ2UobmV3TWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1pbnB1dFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIGVtb2ppcy1tYWluXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaWNvbi1idG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidXR0b24tZWZmZWN0IG1yLTMgdG9nZ2xlLXN0aWNrZXIgb3V0c2lkZSAke1xuICAgICAgICAgICAgc3RpY2tlciA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpZGVBbmRTaG93U3RpY2tlcihzdGlja2VyKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGlkPVwiTGF5ZXJfMVwiXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgeGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgICB3aWR0aD1cIjIxNThweFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMTQ4cHhcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMTU4IDIxNDhcIlxuICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMjE1OCAyMTQ4XCJcbiAgICAgICAgICAgIHNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNjBcIlxuICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxuICAgICAgICAgICAgICBkPVwiTTY5OSw2OTMgICAgICAgICAgICAgICAgICAgICAgICBjMCwxNzUuNjQ5LDAsMzUxLjM1MSwwLDUyN2MzNi45OTYsMCw3NC4wMDQsMCwxMTEsMGMxOC4wNTgsMCw0MC44MTItMi40ODUsNTcsMWMxMS4zMzIsMC4zMzMsMjIuNjY4LDAuNjY3LDM0LDEgICAgICAgICAgICAgICAgICAgICAgICBjNy42NjQsMi4xNDgsMjAuNzY5LDE0LjA5MSwyNSwyMGM4Ljg1NywxMi4zNjgsNiw0MS43OTQsNiw2MmMwLDQ5LjMyOSwwLDk4LjY3MiwwLDE0OGMxNzUuNjQ5LDAsMzUxLjM1MSwwLDUyNywwICAgICAgICAgICAgICAgICAgICAgICAgYzAtMjUyLjk3NSwwLTUwNi4wMjUsMC03NTlDMTIwNS42OTIsNjkzLDk1Mi4zMDgsNjkzLDY5OSw2OTN6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTg4Niw3OTljNTkuMTcyLTAuNzY1LDkzLjQzMSwyNS4yODksMTExLDY2YzYuNDE2LDE0Ljg2NywxNC42MTIsMzkuODU4LDksNjMgICAgICAgICAgICAgICAgICAgICAgICBjLTIuMzkxLDkuODU3LTUuMDc2LDIwLjEzOC05LDI5Yy0xNS43OTQsMzUuNjcxLTQ3LjEyOSw1My42NzQtOTAsNjNjLTIwLjk3OSw0LjU2My00Mi40NjMtNC41NDMtNTUtMTAgICAgICAgICAgICAgICAgICAgICAgICBjLTQyLjc3My0xOC42MTctODUuNjUyLTc3LjI0Ni01OS0xNDFjMTAuNjM3LTI1LjQ0NSwzMS4wMjQtNDksNTYtNjBjNy45OTktMi42NjcsMTYuMDAxLTUuMzMzLDI0LTggICAgICAgICAgICAgICAgICAgICAgICBDODc3LjI1NSw3OTkuODMzLDg4Mi43MTYsODAxLjAzNiw4ODYsNzk5elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xMjU4LDc5OWM1OS4xNzItMC43NjUsOTMuNDMxLDI1LjI4OSwxMTEsNjZjNi40MTYsMTQuODY3LDE0LjYxMiwzOS44NTgsOSw2MyAgICAgICAgICAgICAgICAgICAgICAgIGMtMi4zOTEsOS44NTctNS4wNzYsMjAuMTM4LTksMjljLTE1Ljc5NCwzNS42NzEtNDcuMTI5LDUzLjY3NC05MCw2M2MtMjAuOTc5LDQuNTYzLTQyLjQ2My00LjU0My01NS0xMCAgICAgICAgICAgICAgICAgICAgICAgIGMtNDIuNzczLTE4LjYxNy04NS42NTItNzcuMjQ2LTU5LTE0MWMxMC42MzctMjUuNDQ1LDMxLjAyNC00OSw1Ni02MGM3Ljk5OS0yLjY2NywxNi4wMDEtNS4zMzMsMjQtOCAgICAgICAgICAgICAgICAgICAgICAgIEMxMjQ5LjI1NSw3OTkuODMzLDEyNTQuNzE2LDgwMS4wMzYsMTI1OCw3OTl6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTEzNDUsMTE4NGMtMC43MjMsMTguNzEtMTEuNjU4LDI5LjgyLTIwLDQxYy0xOC4yNzEsMjQuNDg5LTUwLjEyOSwzNy4xODMtODMsNDcgICAgICAgICAgICAgICAgICAgICAgICBjLTcuMzMzLDEtMTQuNjY3LDItMjIsM2MtMTIuMDEzLDIuNzk4LTMzLjYzNiw1LjE1LTQ0LDNjLTExLjMzMi0wLjMzMy0yMi42NjgtMC42NjctMzQtMWMtMTUuMzMyLTMtMzAuNjY4LTYtNDYtOSAgICAgICAgICAgICAgICAgICAgICAgIGMtNDQuMDY2LTE0LjQyNi04MC45NDQtMzEuOTM3LTExMC02MWMtMjIuMzQ4LTIyLjM1My0zOC45OTItNDUuNjI4LTM3LTkwYzAuNjY3LDAsMS4zMzMsMCwyLDBjOS4xNjMsNS41ODUsMjQuNzIzLDMuMTY4LDM2LDYgICAgICAgICAgICAgICAgICAgICAgICBjMjYuMjExLDYuNTgzLDU0LjczNiw3LjE3NCw4MiwxNGMzNC4wNjgsOC41Myw3MS45NjEsMTAuNTMxLDEwNiwxOWM5Ljk5OSwxLjMzMywyMC4wMDEsMi42NjcsMzAsNGMyNi4xOTMsNi43MDMsNTQuNjczLDcuMjExLDgyLDE0ICAgICAgICAgICAgICAgICAgICAgICAgQzEzMDQuODk0LDExNzguNDQ1LDEzMjUuNTczLDExODIuOTU5LDEzNDUsMTE4NHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIHBvaW50cz1cIjY2OC4zMzMsMTI0OC42NjcgOTAxLjY2NywxNDgyIDk0MS42NjcsMTQzMiA5MjIuNDk4LDEyMzcuODQ2ICAgICAgICAgICAgICAgICAgICAgICAgIDY4NywxMjEwLjY2NyBcIlxuICAgICAgICAgICAgPjwvcG9seWdvbj5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdC1idG4gZG90LXByaW1hcnkgbXItM1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uLWJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ1dHRvbi1lZmZlY3QgdG9nZ2xlLWVtb2ppICR7XG4gICAgICAgICAgICAgIGVtb2ppID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGlkZUFuZFNob3dFbW9qaShlbW9qaSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNtaWxlIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXBvbGxcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci00IG91dHNpZGVcIlxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGlkZUFuZFNob3dDb250YWN0UG9sbChjb250YWN0cG9sbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC1wb2xsLWNvbnRlbnRcIlxuICAgICAgICAgICAgc3R5bGU9e2NvbnRhY3Rwb2xsID8geyBkaXNwbGF5OiBcImJsb2NrXCIgfSA6IHsgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIC8+XG4gICAgICAgICAgICAgICAgICBnYWxsZXJ5XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxDYW1lcmEgLz5cbiAgICAgICAgICAgICAgICAgIGNhbWVyYVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3NuaXBwZXRNb2RhbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTbmlwcGV0TW9kYWwoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q29kZSAvPlxuICAgICAgICAgICAgICAgICAgQ29kZSBTbmlwcGVzdFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8VXNlciAvPlxuICAgICAgICAgICAgICAgICAgY29udGFjdFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8TWFwUGluIC8+XG4gICAgICAgICAgICAgICAgICBsb2NhdGlvblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8Q2xpcGJvYXJkIC8+XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3BvbGxNb2RhbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVQb2xsTW9kYWwoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQyIC8+XG4gICAgICAgICAgICAgICAgICBwb2xsXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxQYXBlcmNsaXAgLz5cbiAgICAgICAgICAgICAgICAgIGF0dGFjaFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICBpc09wZW49e3NuaXBwZXRNb2RhbH1cbiAgICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGVTbmlwcGV0TW9kYWx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNuaXBwZXQtbW9kYWwtbWFpbiBhZGQtcG9wdXBcIlxuICAgICAgICAgICAgICBjZW50ZXJlZD17dHJ1ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlU25pcHBldE1vZGFsfT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZGVcIj48L2k+Y29kZSBzbmlwcGV0c1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZGVmYXVsdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+Y3JlYXQgc25pcHBldHM8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGl0bGUob3B0aW9uYWwpXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+ZWJuZjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+YysrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5kaWZmPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5kYXJ0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGQgY29tbWFudCAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tc25pcGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidXR0b24tZWZmZWN0IGJ0bi1zbSBtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNuaXBwZXRNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidXR0b24tZWZmZWN0IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTbmlwcGV0TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlICYgcG9zdFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgIGlzT3Blbj17cG9sbE1vZGFsfVxuICAgICAgICAgICAgICB0b2dnbGU9e3RvZ2dsZVBvbGxNb2RhbH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9sLW1vZGFsLW1haW4gYWRkLXBvcHVwXCJcbiAgICAgICAgICAgICAgY2VudGVyZWQ9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RvZ2dsZVBvbGxNb2RhbH0+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgZGF0YS1mZWF0aGVyPVwiYmFyLWNoYXJ0LTJcIj48L2k+cG9sbFxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJkZWZhdWx0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPmNyZWF0ZSBwb2xsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhc2sgcXVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWRkIGNvbW1hdG5cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm9wdGlvbiAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwib3B0aW9uIDJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkLW9wdGlvblwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQgYW4gb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXBvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QgcG9sbCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTBcIj50ZXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2xsIGV4cGllciBpbiA3IGRheXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0wXCI+dGVzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsb3ctZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhbGxvdy1jaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbGxvdyB1c2VycyB0byB2b3RlIGFub255bW91c2x5XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0LXBvbGwtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidXR0b24tZWZmZWN0IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQb2xsTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIHBvbGxcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZXRlbW9qXCJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZUlucHV0fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZU1lc3NhZ2VQcmVzcyhlKX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU1lc3NhZ2VDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnV0dG9uLWVmZmVjdCBtci0zIG1sLTNcIlxuICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxNaWMgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgc3VibWl0IGljb24tYnRuIGJ0bi1wcmltYXJ5ICR7XG4gICAgICAgICAgICBtZXNzYWdlSW5wdXQudHJpbSgpID8gXCJcIiA6IFwiZGlzYWJsZWRcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lc3NhZ2VQcmVzcyhcInNlbmRcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8U2VuZCAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BlbW9qaXMtY29udGFpbiAke2Vtb2ppID8gXCJvcGVuXCIgOiBcIlwifWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1vamlzLXN1Yi1jb250YWluIGN1c3RvbS1zY3JvbGxcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2Vtb2ppcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gb25DbGljaz17KCkgPT4gZ2V0RW1vamkoaXRlbSl9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5lbW9qaX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGlja2VyLWNvbnRhaW4gJHtzdGlja2VyID8gXCJvcGVuXCIgOiBcIlwifWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2tlci1zdWItY29udGFpbiBjdXN0b20tc2Nyb2xsXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtzdGlja2Vycy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gb25DbGljaz17KCkgPT4gc2VsY2VjdGVkU3RpY2tlcnMoaXRlbS5zdGljKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtpdGVtLnN0aWN9IGFsdD1cInN0aWNrZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSW5wdXQ7XG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xyXG5jb25zdCBpZCA9IFwiZmJkY2QzYzk0YWY5ZmZhYTEyZjBmZjQzMDhkM2I5YmRcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbmNvbnN0IGNva2llID0gY29va2llcy5nZXQoXCJjcmVkZW50aWFsc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyID0gKHVzZXIpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVIsXHJcbiAgcGF5bG9hZDogdXNlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VVNlclN0YXR1cyA9ICh1c2VyU3RhdHVzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9VU0VSX1NUQVRVUyxcclxuICBwYXlsb2FkOiB1c2VyU3RhdHVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDbGllbnQgPSAoY2xpZW50KSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9DTElFTlQsXHJcbiAgcGF5bG9hZDogY2xpZW50LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2dpbkVycm9yID0gKGVycm9yKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX0VSUk9SLFxyXG4gIHBheWxvYWQ6IGVycm9yLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luTG9kaW5nID0gKHN0YXR1cykgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9MT0RJTkcsXHJcbiAgcGF5bG9hZDogc3RhdHVzLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IChzdGF0dXMpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuT05fTE9HT1VULFxyXG4gIHBheWxvYWQ6IHN0YXR1cyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVUYWIgPSAodGFiKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfVEFCLFxyXG4gIHBheWxvYWQ6IHRhYixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2hhdFdpdGggPSAodXNlcm5hbWUpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NIQVRfV0lUSCxcclxuICBwYXlsb2FkOiB1c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhdGVkZWRVc2VycyA9IChuYXYpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NIQVRFRF9VU0VSUyxcclxuICBwYXlsb2FkOiBuYXYsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVubW91bnRDb21wb25lbnQgPSAoYW55KSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQsXHJcbiAgcGF5bG9hZDogYW55LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGROZXdVU2VyID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuQUREX05FV19VU0VSLFxyXG4gIHBheWxvYWQ6IHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVJlY2VudFVzZXIgPSAoaWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuUkVNT1ZFX1VTRVIsXHJcbiAgcGF5bG9hZDogaWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxhc3RNZXNzYWdlVGltZSA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkxBU1RfTUVTU0FHRV9USU1FLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkOiBwYXlsb2FkLmlkLFxyXG4gICAgdGltZTogcGF5bG9hZC50aW1lLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFJvc3RlciA9IChjb250YWN0cykgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfUk9TVEVSLFxyXG4gIHBheWxvYWQ6IGNvbnRhY3RzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyU3RhdHVzID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuVVBEQVRFX1VTRVJfU1RBVFVTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkOiBwYXlsb2FkLmlkLFxyXG4gICAgb25saW5lU3RhdHVzOiBwYXlsb2FkLm9ubGluZVN0YXR1cyxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBbGxVc2VycyA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9BTExfVVNFUlMsXHJcbiAgcGF5bG9hZDogcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TmV3TWVzc2FnZSA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9ORVdfTUVTU0FHRSxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBhY2NvdW50cy8ke2lkfS91c2Vyc2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBjb2tpZS5BdXRoVG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1VTRVJTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLmRhdGEgfSk7XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUixcclxuICAgICAgcGF5bG9hZDogXCJlcnJvciBpbiBmZXRjaGluZyB1c2Vyc1wiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9