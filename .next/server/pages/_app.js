module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: fetchChatMemberApi, fetchChatApi, instance, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchChatMemberApi", function() { return fetchChatMemberApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchChatApi", function() { return fetchChatApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const fetchChatMemberApi = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/chatMember.json`);
};
const fetchChatApi = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/chat.chats.json`);
};
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://karthik.mysmartpbx.org:8443/v2/"
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./helpers/chatContext/chatCtx.js":
/*!****************************************!*\
  !*** ./helpers/chatContext/chatCtx.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./helpers/chatContext/index.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/index */ "./api/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\chat\\helpers\\chatContext\\chatCtx.js";





const ChatProvider = props => {
  const {
    0: chatMembers,
    1: setChatMembers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: chats,
    1: setChats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const currentUserId = 0;
  const {
    0: selectedUser,
    1: setSelectedUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    id: 0,
    name: "Jony Lynetin",
    thumb: "contact/2.jpg",
    status: "8",
    mesg: "Typing................",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    typing: true
  });
  const {
    0: isTyeping,
    1: setIsTypeing
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // get all initial chat users
    Object(_api_index__WEBPACK_IMPORTED_MODULE_2__["fetchChatMemberApi"])().then(res => {
      setChatMembers(res.data);

      if (res) {
        Object(_api_index__WEBPACK_IMPORTED_MODULE_2__["fetchChatApi"])().then(chatres => {
          const selectedUserId = chatres.data[0].users.find(x => x !== currentUserId);
          const IsselectedUser = res.data.find(x => x.id === selectedUserId);
          setSelectedUser(IsselectedUser);
        });
      }
    }); // get initial chat between two chat users

    Object(_api_index__WEBPACK_IMPORTED_MODULE_2__["fetchChatApi"])().then(res => {
      setChats(res.data);

      if (res) {
        Object(_api_index__WEBPACK_IMPORTED_MODULE_2__["fetchChatMemberApi"])().then(memberres => {
          const selectedUserId = res.data[0].users.find(x => x !== currentUserId);
          const IsselectedUser = memberres.data.find(x => x.id === selectedUserId);
          setSelectedUser(IsselectedUser);
        });
      }
    });
  }, []); // chat with user first time

  const createChat = (currentUserId, selectedUserId, chats, onlineStatus) => {
    let conversation = {
      id: chats.length + 1,
      users: [currentUserId, selectedUserId],
      lastMessageTime: "-",
      messages: [],
      stickers: [],
      onlineStatus: onlineStatus
    };
    chats.splice(0, 0, conversation); //we are adding conversion at 0th index

    const selectedUser = chatMembers.find(x => x.id === selectedUserId);
    setChats([...chats]);
    setSelectedUser(selectedUser);
  }; // change existing chat between two chat users


  const changeChat = userId => {
    const selectedUser = chatMembers.find(x => x.id === userId);
    setSelectedUser(selectedUser);
  }; // send message to selected chat users


  const sendMessage = (currentUserId, selectedUserId, messageInput, chats) => {
    let chat = chats.find(x => x.users.includes(currentUserId) && x.users.includes(selectedUserId)); // find selected chat User Id

    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();

    if (chat) {
      chat.messages.push({
        sender: currentUserId,
        time: time,
        text: messageInput,
        status: true
      });
      chat.lastMessageTime = time;
      let chats_data = chats.filter(x => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
      const selectedUser = chatMembers.find(x => x.id === selectedUserId);
      setChats([...chats]); // update chats messages

      setSelectedUser(selectedUser);
    }
  }; // reply message to selected chat users


  const replyMessage = (currentUserId, selectedUserId, replyMessage, chats) => {
    let chat = chats.find(x => x.users.includes(currentUserId) && x.users.includes(selectedUserId)); // find selected chat User Id

    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();

    if (chat) {
      chat.messages.push({
        sender: selectedUserId,
        time: time,
        text: replyMessage,
        read: true
      });
      chat.lastMessageTime = time;
      chat.online = "";
      let chats_data = chats.filter(x => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
      const selectedUser = chatMembers.find(x => x.id === selectedUserId);
      selectedUser.onlineStatus = "online"; // chat user reply the message then set selected chat user  status to "online"

      setChats([...chats]); // update chats messages

      setSelectedUser(selectedUser);
    }
  }; // send stickers or images


  const sendImages = (currentUserId, selectedUserId, image, chats) => {
    let chat = chats.find(x => x.users.includes(currentUserId) && x.users.includes(selectedUserId)); // find selected chat User Id

    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();

    if (chat) {
      chat.stickers.push({
        sender: currentUserId,
        time: time,
        stickers: image,
        status: true
      });
      chat.lastMessageTime = time;
      chat.online = "";
      let chats_data = chats.filter(x => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
      const selectedUser = chatMembers.find(x => x.id === selectedUserId);
      setChats([...chats]); // update chats messages

      setSelectedUser(selectedUser);
    }
  }; // when chat user replied to our message existing tyeping loader


  const typingMessage = typeing => {
    setIsTypeing(typeing);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_index__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      chatMembers: chatMembers,
      chats: chats,
      currentUser: chatMembers[0],
      selectedUser: selectedUser,
      isTyeping: isTyeping,
      changeChat: changeChat,
      createChat: createChat,
      sendMessage: sendMessage,
      replyMessage: replyMessage,
      sendImages: sendImages,
      typingMessage: typingMessage
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ChatProvider);

/***/ }),

/***/ "./helpers/chatContext/index.js":
/*!**************************************!*\
  !*** ./helpers/chatContext/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ChatContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(); // create context for chat app

/* harmony default export */ __webpack_exports__["default"] = (ChatContext);

/***/ }),

/***/ "./helpers/customizerContext/customizerCtx.js":
/*!****************************************************!*\
  !*** ./helpers/customizerContext/customizerCtx.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./helpers/customizerContext/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\chat\\helpers\\customizerContext\\customizerCtx.js";




const CustomizerProvider = props => {
  const {
    0: mobileMenu,
    1: setMobileMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // set sidebar background layout

  const addSidebarBackgroundLayout = (e, layout) => {
    e.preventDefault();
    document.querySelectorAll(".theme-layout-type li").forEach(item => {
      item.classList.remove("active");
    });
    document.body.className = `sidebar-active main-page ${layout}`;
    e.currentTarget.classList.add("active");
  }; // set layout theme to LTR or RTL


  const addLayoutType = layoutType => {
    if (layoutType) {
      document.body.className = `sidebar-active main-page rtl ${localStorage.getItem("layout_mode")}`;
      document.querySelector(".rtl-setting").className = "rtl-setting icon-btn btn-primary rtl";
    } else {
      document.body.className = `sidebar-active main-page ${localStorage.getItem("layout_mode")}`;
      document.querySelector(".rtl-setting").className = "rtl-setting icon-btn btn-primary";
    }
  }; // set left sidebar to open/close


  const addSidebarTypes = (e, sidebarType) => {
    e.preventDefault();
    document.querySelectorAll(".sidebar-type li").forEach(item => {
      item.classList.remove("active");
    });
    document.querySelector(".main-nav").className = "main-nav " + sidebarType;
    e.currentTarget.classList.add("active");
  }; // set themes primary colors


  const addThemeColors = (e, color) => {
    document.querySelectorAll(".colors li").forEach(item => {
      item.classList.remove("active");
    }); // document.getElementById("color").setAttribute("href", `/assets/css/${color}.css`);

    document.documentElement.className = color || localStorage.getItem("color");
    e.currentTarget.classList.add("active");
    localStorage.setItem("color", color);
  }; // set wallpapers for chats content


  const addBackgroundWallpaper = (e, wallpaper) => {
    document.querySelectorAll(".wallpaper li").forEach(item => {
      item.classList.remove("active");
    });

    if (wallpaper === 0) {
      document.querySelector(".wallpapers").style = `background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(239, 247, 254))); background-color: transparent; background-blend-mode: unset;`;
    } else {
      document.querySelector(".wallpapers").style = `background-image: url(${`/assets/images/wallpaper/${wallpaper}.jpg`}) ; background-color: transparent; background-blend-mode: unset`;
    }

    e.currentTarget.classList.add("active");
  }; // set wallpapers as gradients for chats content


  const addBackgroundWallpaperGradients = gradient => {//setBackgroundWallpaperGradients(gradient)
  }; //set responsive in messenger page


  const handleClickRight = response => {
    if (response) {
      setMobileMenu(!response);
      document.querySelector(".sidebar-toggle").classList.add("mobile-menu");
    } else {
      setMobileMenu(!response);
      document.querySelector(".sidebar-toggle").classList.remove("mobile-menu");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_index__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      mobileMenu: mobileMenu,
      handleClickRight: handleClickRight,
      addSidebarBackgroundLayout: addSidebarBackgroundLayout,
      addLayoutType: addLayoutType,
      addSidebarTypes: addSidebarTypes,
      addThemeColors: addThemeColors,
      addBackgroundWallpaper: addBackgroundWallpaper,
      addBackgroundWallpaperGradients: addBackgroundWallpaperGradients
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomizerProvider);

/***/ }),

/***/ "./helpers/customizerContext/index.js":
/*!********************************************!*\
  !*** ./helpers/customizerContext/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CustomizerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(); // create a context for theme customizer

/* harmony default export */ __webpack_exports__["default"] = (CustomizerContext);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyAppComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_scss_color_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/scss/color.scss */ "./public/assets/scss/color.scss");
/* harmony import */ var _public_assets_scss_color_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_color_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_chatContext_chatCtx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/chatContext/chatCtx */ "./helpers/chatContext/chatCtx.js");
/* harmony import */ var _helpers_customizerContext_customizerCtx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/customizerContext/customizerCtx */ "./helpers/customizerContext/customizerCtx.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/store/store */ "./redux/store/store.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\chat\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyAppComponent({
  Component,
  pageProps
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.classList.add("sidebar-active"); // Page Loader

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: "Chitchat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        httpEquiv: "Content-Type",
        content: "text/html; charset=UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        name: "description",
        content: "Chitchat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        name: "keywords",
        content: "Chitchat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        name: "author",
        content: "Chitchat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        rel: "stylesheet",
        type: "text/scss",
        href: "",
        media: "screen",
        id: "color"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:400,500,600&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), loader && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "chitchat-loader",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
          src: "/assets/images/logo/logo_big.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h3", {
          children: "Simple, secure messaging for fast connect to world..!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: _redux_store_store__WEBPACK_IMPORTED_MODULE_9__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_helpers_customizerContext_customizerCtx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_helpers_chatContext_chatCtx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./public/assets/scss/color.scss":
/*!***************************************!*\
  !*** ./public/assets/scss/color.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: SET_USER, SET_USER_STATUS, SET_CLIENT, LOGIN_ERROR, LOGIN_LODING, ON_LOGOUT, SET_ACTIVE_TAB, SET_USERS, SET_CHAT_WITH, SET_CHATED_USERS, CHAT_COMPONENT_UNMOUNT, ADD_NEW_USER, REMOVE_USER, LAST_MESSAGE_TIME, SET_ROSTER, UPDATE_USER_STATUS, SET_ALL_USERS, SET_NEW_MESSAGE, SET_LAST_MESSAGE, UPDATE_RECENT_USER_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_STATUS", function() { return SET_USER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CLIENT", function() { return SET_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_LODING", function() { return LOGIN_LODING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOGOUT", function() { return ON_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_TAB", function() { return SET_ACTIVE_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERS", function() { return SET_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHAT_WITH", function() { return SET_CHAT_WITH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHATED_USERS", function() { return SET_CHATED_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_COMPONENT_UNMOUNT", function() { return CHAT_COMPONENT_UNMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_USER", function() { return ADD_NEW_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_USER", function() { return REMOVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MESSAGE_TIME", function() { return LAST_MESSAGE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ROSTER", function() { return SET_ROSTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_STATUS", function() { return UPDATE_USER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALL_USERS", function() { return SET_ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NEW_MESSAGE", function() { return SET_NEW_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LAST_MESSAGE", function() { return SET_LAST_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_RECENT_USER_STATUS", function() { return UPDATE_RECENT_USER_STATUS; });
const SET_USER = "SET_USER";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_CLIENT = "SET_CLIENT";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGIN_LODING = "LOGIN_LODING";
const ON_LOGOUT = "ON_LOGOUT";
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
const SET_USERS = "SET_USERS";
const SET_CHAT_WITH = "SET_CHAT_WITH";
const SET_CHATED_USERS = "SET_CHATED_USERS";
const CHAT_COMPONENT_UNMOUNT = "CHAT_COMPONENT_UNMOUNT";
const ADD_NEW_USER = "ADD_NEW_USER";
const REMOVE_USER = "REMOVE_USER";
const LAST_MESSAGE_TIME = "LAST_MESSAGE_TIME";
const SET_ROSTER = "SET_ROSTER";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const SET_ALL_USERS = "SET_ALL_USERS";
const SET_NEW_MESSAGE = "SET_NEW_MESSAGE";
const SET_LAST_MESSAGE = "SET_LAST_MESSAGE";
const UPDATE_RECENT_USER_STATUS = "UPDATE_RECENT_USER_STATUS";

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-addons-update */ "react-addons-update");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
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
    status: "online",
    id: 2
  },
  newContact: "contact",
  componentUnmount: null,
  roster: "",
  alluserStatus: [],
  allusers: [],
  allMessage: [{
    from: 2,
    to: 1,
    messageTime: "2021-08-07 09:03:10",
    body: "i have received this message from user with id 2",
    chatType: "chat",
    direction: "received",
    fromto: 2
  }, {
    from: 1,
    to: 2,
    messageTime: "2021-08-07 09:03:10",
    body: "assume i amm a logged in user . i am sending this message",
    chatType: "chat",
    direction: "send",
    fromto: 2
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
    first_name: "Jon",
    status: "offline",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "offline",
    lastMessageAt: "2021-08-07 09:03:56"
  }]
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_USER_STATUS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        userStatus: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_CLIENT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        client: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginErrors: [action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_LODING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_ACTIVE_TAB"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        activeTab: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: [action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_CHAT_WITH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatWith: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_CHATED_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        newContact: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CHAT_COMPONENT_UNMOUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        componentUnmount: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_NEW_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatedUsers: [action.payload, ...state.chatedUsers]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_NEW_MESSAGE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        allMessage: [...state.allMessage, action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatedUsers: state.chatedUsers.filter(user => user.id !== action.payload)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LAST_MESSAGE_TIME"]:
      return react_addons_update__WEBPACK_IMPORTED_MODULE_2___default()(state, {
        chatedUsers: {
          [action.payload.id]: {
            lastMessageAt: {
              $set: action.payload.time
            }
          }
        }
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_LAST_MESSAGE"]:
      let foun = state.chatedUsers && state.chatedUsers.length ? !!state.chatedUsers.find(u => u.id === action.payload.id) : false;
      console.log("function", foun, action.payload.id);

      if (foun) {
        return _objectSpread(_objectSpread({}, state), {}, {
          chatedUsers: state.chatedUsers.map((user, i) => user.id === action.payload.id ? _objectSpread(_objectSpread({}, user), {}, {
            mesg: action.payload.lastMessage,
            lastMessageAt: action.payload.time
          }) : user)
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_ROSTER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        roster: [...state.roster, action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_ALL_USERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        allusers: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER_STATUS"]:
      let found = state.alluserStatus && state.alluserStatus.length ? !!state.alluserStatus.find(u => u.id === action.payload.id) : false; //if the user is already

      if (found) {
        console.log("user alredy already exists");
        return _objectSpread(_objectSpread({}, state), {}, {
          alluserStatus: state.alluserStatus.map((userStatus, i) => userStatus.id === action.payload.id ? _objectSpread(_objectSpread({}, userStatus), {}, {
            onlineStatus: action.payload.onlineStatus
          }) : userStatus)
        }); //update the user status for fist time
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          alluserStatus: [...state.alluserStatus, action.payload]
        });
      }

    //Update recent user status:

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_RECENT_USER_STATUS"]:
      let found1 = state.chatedUsers && state.chatedUsers.length ? !!state.chatedUsers.find(u => u.id === action.payload.id) : false; //if the user is already

      if (found1) {
        console.log("update recent user status");
        return _objectSpread(_objectSpread({}, state), {}, {
          chatedUsers: state.chatedUsers.map((userStatus, i) => userStatus.id === action.payload.id ? _objectSpread(_objectSpread({}, userStatus), {}, {
            onlineStatus: action.payload.onlineStatus
          }) : userStatus)
        });
      }

    default:
      {
        return state;
      }
  }
};

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  user: user_reducer
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/store/store.js":
/*!******************************!*\
  !*** ./redux/store/store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./redux/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-reset */ "redux-reset");
/* harmony import */ var redux_reset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_reset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_5__);





 // import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";
// import storage from "./storage";
// const perssistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(perssistConfig, rootReducer);

const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(redux_reset__WEBPACK_IMPORTED_MODULE_4___default()(), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a))); // export const persistor = persistStore(store);

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-addons-update":
/*!**************************************!*\
  !*** external "react-addons-update" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-addons-update");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-reset":
/*!******************************!*\
  !*** external "redux-reset" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-reset");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2hhdENvbnRleHQvY2hhdEN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2NoYXRDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY3VzdG9taXplckNvbnRleHQvY3VzdG9taXplckN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2N1c3RvbWl6ZXJDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXJlc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJmZXRjaENoYXRNZW1iZXJBcGkiLCJheGlvcyIsImdldCIsImZldGNoQ2hhdEFwaSIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsIkNoYXRQcm92aWRlciIsInByb3BzIiwiY2hhdE1lbWJlcnMiLCJzZXRDaGF0TWVtYmVycyIsInVzZVN0YXRlIiwiY2hhdHMiLCJzZXRDaGF0cyIsImN1cnJlbnRVc2VySWQiLCJzZWxlY3RlZFVzZXIiLCJzZXRTZWxlY3RlZFVzZXIiLCJpZCIsIm5hbWUiLCJ0aHVtYiIsInN0YXR1cyIsIm1lc2ciLCJsYXN0U2VlbkRhdGUiLCJvbmxpbmVTdGF0dXMiLCJ0eXBpbmciLCJpc1R5ZXBpbmciLCJzZXRJc1R5cGVpbmciLCJ1c2VFZmZlY3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNoYXRyZXMiLCJzZWxlY3RlZFVzZXJJZCIsInVzZXJzIiwiZmluZCIsIngiLCJJc3NlbGVjdGVkVXNlciIsIm1lbWJlcnJlcyIsImNyZWF0ZUNoYXQiLCJjb252ZXJzYXRpb24iLCJsZW5ndGgiLCJsYXN0TWVzc2FnZVRpbWUiLCJtZXNzYWdlcyIsInN0aWNrZXJzIiwic3BsaWNlIiwiY2hhbmdlQ2hhdCIsInVzZXJJZCIsInNlbmRNZXNzYWdlIiwibWVzc2FnZUlucHV0IiwiY2hhdCIsImluY2x1ZGVzIiwibm93IiwiRGF0ZSIsInRpbWUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJwdXNoIiwic2VuZGVyIiwidGV4dCIsImNoYXRzX2RhdGEiLCJmaWx0ZXIiLCJyZXBseU1lc3NhZ2UiLCJyZWFkIiwib25saW5lIiwic2VuZEltYWdlcyIsImltYWdlIiwidHlwaW5nTWVzc2FnZSIsInR5cGVpbmciLCJjdXJyZW50VXNlciIsImNoaWxkcmVuIiwiQ2hhdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ3VzdG9taXplclByb3ZpZGVyIiwibW9iaWxlTWVudSIsInNldE1vYmlsZU1lbnUiLCJhZGRTaWRlYmFyQmFja2dyb3VuZExheW91dCIsImUiLCJsYXlvdXQiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYm9keSIsImNsYXNzTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJhZGRMYXlvdXRUeXBlIiwibGF5b3V0VHlwZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJxdWVyeVNlbGVjdG9yIiwiYWRkU2lkZWJhclR5cGVzIiwic2lkZWJhclR5cGUiLCJhZGRUaGVtZUNvbG9ycyIsImNvbG9yIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0SXRlbSIsImFkZEJhY2tncm91bmRXYWxscGFwZXIiLCJ3YWxscGFwZXIiLCJzdHlsZSIsImFkZEJhY2tncm91bmRXYWxscGFwZXJHcmFkaWVudHMiLCJncmFkaWVudCIsImhhbmRsZUNsaWNrUmlnaHQiLCJyZXNwb25zZSIsIkN1c3RvbWl6ZXJDb250ZXh0IiwiTXlBcHBDb21wb25lbnQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJzZXRUaW1lb3V0Iiwic3RvcmUiLCJTRVRfVVNFUiIsIlNFVF9VU0VSX1NUQVRVUyIsIlNFVF9DTElFTlQiLCJMT0dJTl9FUlJPUiIsIkxPR0lOX0xPRElORyIsIk9OX0xPR09VVCIsIlNFVF9BQ1RJVkVfVEFCIiwiU0VUX1VTRVJTIiwiU0VUX0NIQVRfV0lUSCIsIlNFVF9DSEFURURfVVNFUlMiLCJDSEFUX0NPTVBPTkVOVF9VTk1PVU5UIiwiQUREX05FV19VU0VSIiwiUkVNT1ZFX1VTRVIiLCJMQVNUX01FU1NBR0VfVElNRSIsIlNFVF9ST1NURVIiLCJVUERBVEVfVVNFUl9TVEFUVVMiLCJTRVRfQUxMX1VTRVJTIiwiU0VUX05FV19NRVNTQUdFIiwiU0VUX0xBU1RfTUVTU0FHRSIsIlVQREFURV9SRUNFTlRfVVNFUl9TVEFUVVMiLCJpbml0aWFsU3RhdGUiLCJ1c2VybmFtZSIsImFjY291bnRJZCIsImppZCIsInVzZXJTdGF0dXMiLCJjbGllbnQiLCJsb2dpbkVycm9ycyIsImxvYWRpbmciLCJhY3RpdmVUYWIiLCJjaGF0V2l0aCIsIm5ld0NvbnRhY3QiLCJjb21wb25lbnRVbm1vdW50Iiwicm9zdGVyIiwiYWxsdXNlclN0YXR1cyIsImFsbHVzZXJzIiwiYWxsTWVzc2FnZSIsImZyb20iLCJ0byIsIm1lc3NhZ2VUaW1lIiwiY2hhdFR5cGUiLCJkaXJlY3Rpb24iLCJmcm9tdG8iLCJjaGF0ZWRVc2VycyIsImZpcnN0X25hbWUiLCJsYXN0TWVzc2FnZUF0IiwidXNlcl9yZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwidXNlciIsInVwZGF0ZSIsIiRzZXQiLCJmb3VuIiwidSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpIiwibGFzdE1lc3NhZ2UiLCJmb3VuZCIsImZvdW5kMSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVkdXhSZXNldCIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDaGF0TWVtYmVyQXBpID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL2NoYXRNZW1iZXIuanNvbmApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2hhdEFwaSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9jaGF0LmNoYXRzLmpzb25gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiaHR0cHM6Ly9rYXJ0aGlrLm15c21hcnRwYngub3JnOjg0NDMvdjIvXCIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZmV0Y2hDaGF0TWVtYmVyQXBpLCBmZXRjaENoYXRBcGkgfSBmcm9tIFwiLi4vLi4vYXBpL2luZGV4XCI7XG5cbmNvbnN0IENoYXRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY2hhdE1lbWJlcnMsIHNldENoYXRNZW1iZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGN1cnJlbnRVc2VySWQgPSAwO1xuICBjb25zdCBbc2VsZWN0ZWRVc2VyLCBzZXRTZWxlY3RlZFVzZXJdID0gdXNlU3RhdGUoe1xuICAgIGlkOiAwLFxuICAgIG5hbWU6IFwiSm9ueSBMeW5ldGluXCIsXG4gICAgdGh1bWI6IFwiY29udGFjdC8yLmpwZ1wiLFxuICAgIHN0YXR1czogXCI4XCIsXG4gICAgbWVzZzogXCJUeXBpbmcuLi4uLi4uLi4uLi4uLi4uXCIsXG4gICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXG4gICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxuICAgIHR5cGluZzogdHJ1ZSxcbiAgfSk7XG4gIGNvbnN0IFtpc1R5ZXBpbmcsIHNldElzVHlwZWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBnZXQgYWxsIGluaXRpYWwgY2hhdCB1c2Vyc1xuXG4gICAgZmV0Y2hDaGF0TWVtYmVyQXBpKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRDaGF0TWVtYmVycyhyZXMuZGF0YSk7XG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIGZldGNoQ2hhdEFwaSgpLnRoZW4oKGNoYXRyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFVzZXJJZCA9IGNoYXRyZXMuZGF0YVswXS51c2Vycy5maW5kKFxuICAgICAgICAgICAgKHgpID0+IHggIT09IGN1cnJlbnRVc2VySWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IElzc2VsZWN0ZWRVc2VyID0gcmVzLmRhdGEuZmluZCgoeCkgPT4geC5pZCA9PT0gc2VsZWN0ZWRVc2VySWQpO1xuICAgICAgICAgIHNldFNlbGVjdGVkVXNlcihJc3NlbGVjdGVkVXNlcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGdldCBpbml0aWFsIGNoYXQgYmV0d2VlbiB0d28gY2hhdCB1c2Vyc1xuICAgIGZldGNoQ2hhdEFwaSgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0Q2hhdHMocmVzLmRhdGEpO1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBmZXRjaENoYXRNZW1iZXJBcGkoKS50aGVuKChtZW1iZXJyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFVzZXJJZCA9IHJlcy5kYXRhWzBdLnVzZXJzLmZpbmQoXG4gICAgICAgICAgICAoeCkgPT4geCAhPT0gY3VycmVudFVzZXJJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgSXNzZWxlY3RlZFVzZXIgPSBtZW1iZXJyZXMuZGF0YS5maW5kKFxuICAgICAgICAgICAgKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRTZWxlY3RlZFVzZXIoSXNzZWxlY3RlZFVzZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIGNoYXQgd2l0aCB1c2VyIGZpcnN0IHRpbWVcbiAgY29uc3QgY3JlYXRlQ2hhdCA9IChjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZCwgY2hhdHMsIG9ubGluZVN0YXR1cykgPT4ge1xuICAgIGxldCBjb252ZXJzYXRpb24gPSB7XG4gICAgICBpZDogY2hhdHMubGVuZ3RoICsgMSxcbiAgICAgIHVzZXJzOiBbY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWRdLFxuICAgICAgbGFzdE1lc3NhZ2VUaW1lOiBcIi1cIixcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIHN0aWNrZXJzOiBbXSxcbiAgICAgIG9ubGluZVN0YXR1czogb25saW5lU3RhdHVzLFxuICAgIH07XG5cbiAgICBjaGF0cy5zcGxpY2UoMCwgMCwgY29udmVyc2F0aW9uKTsgLy93ZSBhcmUgYWRkaW5nIGNvbnZlcnNpb24gYXQgMHRoIGluZGV4XG4gICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdE1lbWJlcnMuZmluZCgoeCkgPT4geC5pZCA9PT0gc2VsZWN0ZWRVc2VySWQpO1xuICAgIHNldENoYXRzKFsuLi5jaGF0c10pO1xuICAgIHNldFNlbGVjdGVkVXNlcihzZWxlY3RlZFVzZXIpO1xuICB9O1xuXG4gIC8vIGNoYW5nZSBleGlzdGluZyBjaGF0IGJldHdlZW4gdHdvIGNoYXQgdXNlcnNcbiAgY29uc3QgY2hhbmdlQ2hhdCA9ICh1c2VySWQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjaGF0TWVtYmVycy5maW5kKCh4KSA9PiB4LmlkID09PSB1c2VySWQpO1xuICAgIHNldFNlbGVjdGVkVXNlcihzZWxlY3RlZFVzZXIpO1xuICB9O1xuXG4gIC8vIHNlbmQgbWVzc2FnZSB0byBzZWxlY3RlZCBjaGF0IHVzZXJzXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGN1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkLCBtZXNzYWdlSW5wdXQsIGNoYXRzKSA9PiB7XG4gICAgbGV0IGNoYXQgPSBjaGF0cy5maW5kKFxuICAgICAgKHgpID0+IHgudXNlcnMuaW5jbHVkZXMoY3VycmVudFVzZXJJZCkgJiYgeC51c2Vycy5pbmNsdWRlcyhzZWxlY3RlZFVzZXJJZClcbiAgICApOyAvLyBmaW5kIHNlbGVjdGVkIGNoYXQgVXNlciBJZFxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGltZSA9IG5vdy5nZXRIb3VycygpICsgXCI6XCIgKyBub3cuZ2V0TWludXRlcygpO1xuICAgIGlmIChjaGF0KSB7XG4gICAgICBjaGF0Lm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBzZW5kZXI6IGN1cnJlbnRVc2VySWQsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIHRleHQ6IG1lc3NhZ2VJbnB1dCxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjaGF0Lmxhc3RNZXNzYWdlVGltZSA9IHRpbWU7XG4gICAgICBsZXQgY2hhdHNfZGF0YSA9IGNoYXRzLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gY2hhdC5pZCk7XG4gICAgICBjaGF0c19kYXRhLnNwbGljZSgwLCAwLCBjaGF0KTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRNZW1iZXJzLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICAgIHNldENoYXRzKFsuLi5jaGF0c10pOyAvLyB1cGRhdGUgY2hhdHMgbWVzc2FnZXNcbiAgICAgIHNldFNlbGVjdGVkVXNlcihzZWxlY3RlZFVzZXIpO1xuICAgIH1cbiAgfTtcblxuICAvLyByZXBseSBtZXNzYWdlIHRvIHNlbGVjdGVkIGNoYXQgdXNlcnNcbiAgY29uc3QgcmVwbHlNZXNzYWdlID0gKGN1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkLCByZXBseU1lc3NhZ2UsIGNoYXRzKSA9PiB7XG4gICAgbGV0IGNoYXQgPSBjaGF0cy5maW5kKFxuICAgICAgKHgpID0+IHgudXNlcnMuaW5jbHVkZXMoY3VycmVudFVzZXJJZCkgJiYgeC51c2Vycy5pbmNsdWRlcyhzZWxlY3RlZFVzZXJJZClcbiAgICApOyAvLyBmaW5kIHNlbGVjdGVkIGNoYXQgVXNlciBJZFxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGltZSA9IG5vdy5nZXRIb3VycygpICsgXCI6XCIgKyBub3cuZ2V0TWludXRlcygpO1xuICAgIGlmIChjaGF0KSB7XG4gICAgICBjaGF0Lm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBzZW5kZXI6IHNlbGVjdGVkVXNlcklkLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICB0ZXh0OiByZXBseU1lc3NhZ2UsXG4gICAgICAgIHJlYWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNoYXQubGFzdE1lc3NhZ2VUaW1lID0gdGltZTtcbiAgICAgIGNoYXQub25saW5lID0gXCJcIjtcbiAgICAgIGxldCBjaGF0c19kYXRhID0gY2hhdHMuZmlsdGVyKCh4KSA9PiB4LmlkICE9PSBjaGF0LmlkKTtcbiAgICAgIGNoYXRzX2RhdGEuc3BsaWNlKDAsIDAsIGNoYXQpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdE1lbWJlcnMuZmluZCgoeCkgPT4geC5pZCA9PT0gc2VsZWN0ZWRVc2VySWQpO1xuICAgICAgc2VsZWN0ZWRVc2VyLm9ubGluZVN0YXR1cyA9IFwib25saW5lXCI7IC8vIGNoYXQgdXNlciByZXBseSB0aGUgbWVzc2FnZSB0aGVuIHNldCBzZWxlY3RlZCBjaGF0IHVzZXIgIHN0YXR1cyB0byBcIm9ubGluZVwiXG4gICAgICBzZXRDaGF0cyhbLi4uY2hhdHNdKTsgLy8gdXBkYXRlIGNoYXRzIG1lc3NhZ2VzXG4gICAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gc2VuZCBzdGlja2VycyBvciBpbWFnZXNcbiAgY29uc3Qgc2VuZEltYWdlcyA9IChjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZCwgaW1hZ2UsIGNoYXRzKSA9PiB7XG4gICAgbGV0IGNoYXQgPSBjaGF0cy5maW5kKFxuICAgICAgKHgpID0+IHgudXNlcnMuaW5jbHVkZXMoY3VycmVudFVzZXJJZCkgJiYgeC51c2Vycy5pbmNsdWRlcyhzZWxlY3RlZFVzZXJJZClcbiAgICApOyAvLyBmaW5kIHNlbGVjdGVkIGNoYXQgVXNlciBJZFxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGltZSA9IG5vdy5nZXRIb3VycygpICsgXCI6XCIgKyBub3cuZ2V0TWludXRlcygpO1xuICAgIGlmIChjaGF0KSB7XG4gICAgICBjaGF0LnN0aWNrZXJzLnB1c2goe1xuICAgICAgICBzZW5kZXI6IGN1cnJlbnRVc2VySWQsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIHN0aWNrZXJzOiBpbWFnZSxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjaGF0Lmxhc3RNZXNzYWdlVGltZSA9IHRpbWU7XG4gICAgICBjaGF0Lm9ubGluZSA9IFwiXCI7XG4gICAgICBsZXQgY2hhdHNfZGF0YSA9IGNoYXRzLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gY2hhdC5pZCk7XG4gICAgICBjaGF0c19kYXRhLnNwbGljZSgwLCAwLCBjaGF0KTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRNZW1iZXJzLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICAgIHNldENoYXRzKFsuLi5jaGF0c10pOyAvLyB1cGRhdGUgY2hhdHMgbWVzc2FnZXNcbiAgICAgIHNldFNlbGVjdGVkVXNlcihzZWxlY3RlZFVzZXIpO1xuICAgIH1cbiAgfTtcblxuICAvLyB3aGVuIGNoYXQgdXNlciByZXBsaWVkIHRvIG91ciBtZXNzYWdlIGV4aXN0aW5nIHR5ZXBpbmcgbG9hZGVyXG4gIGNvbnN0IHR5cGluZ01lc3NhZ2UgPSAodHlwZWluZykgPT4ge1xuICAgIHNldElzVHlwZWluZyh0eXBlaW5nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjaGF0TWVtYmVyczogY2hhdE1lbWJlcnMsXG4gICAgICAgIGNoYXRzOiBjaGF0cyxcbiAgICAgICAgY3VycmVudFVzZXI6IGNoYXRNZW1iZXJzWzBdLFxuICAgICAgICBzZWxlY3RlZFVzZXI6IHNlbGVjdGVkVXNlcixcbiAgICAgICAgaXNUeWVwaW5nOiBpc1R5ZXBpbmcsXG4gICAgICAgIGNoYW5nZUNoYXQ6IGNoYW5nZUNoYXQsXG4gICAgICAgIGNyZWF0ZUNoYXQ6IGNyZWF0ZUNoYXQsXG4gICAgICAgIHNlbmRNZXNzYWdlOiBzZW5kTWVzc2FnZSxcbiAgICAgICAgcmVwbHlNZXNzYWdlOiByZXBseU1lc3NhZ2UsXG4gICAgICAgIHNlbmRJbWFnZXM6IHNlbmRJbWFnZXMsXG4gICAgICAgIHR5cGluZ01lc3NhZ2U6IHR5cGluZ01lc3NhZ2UsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0UHJvdmlkZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDaGF0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy8gY3JlYXRlIGNvbnRleHQgZm9yIGNoYXQgYXBwXG5cbmV4cG9ydCBkZWZhdWx0IENoYXRDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3QgQ3VzdG9taXplclByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Ly8gc2V0IHNpZGViYXIgYmFja2dyb3VuZCBsYXlvdXRcblx0Y29uc3QgYWRkU2lkZWJhckJhY2tncm91bmRMYXlvdXQgPSAoZSwgbGF5b3V0KSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGhlbWUtbGF5b3V0LXR5cGUgbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gYHNpZGViYXItYWN0aXZlIG1haW4tcGFnZSAke2xheW91dH1gO1xuXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHR9O1xuXG5cdC8vIHNldCBsYXlvdXQgdGhlbWUgdG8gTFRSIG9yIFJUTFxuXHRjb25zdCBhZGRMYXlvdXRUeXBlID0gKGxheW91dFR5cGUpID0+IHtcblx0XHRpZiAobGF5b3V0VHlwZSkge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBgc2lkZWJhci1hY3RpdmUgbWFpbi1wYWdlIHJ0bCAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFxuXHRcdFx0XHRcImxheW91dF9tb2RlXCJcblx0XHRcdCl9YDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucnRsLXNldHRpbmdcIikuY2xhc3NOYW1lID1cblx0XHRcdFx0XCJydGwtc2V0dGluZyBpY29uLWJ0biBidG4tcHJpbWFyeSBydGxcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBgc2lkZWJhci1hY3RpdmUgbWFpbi1wYWdlICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXG5cdFx0XHRcdFwibGF5b3V0X21vZGVcIlxuXHRcdFx0KX1gO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ydGwtc2V0dGluZ1wiKS5jbGFzc05hbWUgPVxuXHRcdFx0XHRcInJ0bC1zZXR0aW5nIGljb24tYnRuIGJ0bi1wcmltYXJ5XCI7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIHNldCBsZWZ0IHNpZGViYXIgdG8gb3Blbi9jbG9zZVxuXHRjb25zdCBhZGRTaWRlYmFyVHlwZXMgPSAoZSwgc2lkZWJhclR5cGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLXR5cGUgbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1uYXZcIikuY2xhc3NOYW1lID0gXCJtYWluLW5hdiBcIiArIHNpZGViYXJUeXBlO1xuXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHR9O1xuXG5cdC8vIHNldCB0aGVtZXMgcHJpbWFyeSBjb2xvcnNcblx0Y29uc3QgYWRkVGhlbWVDb2xvcnMgPSAoZSwgY29sb3IpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9ycyBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvclwiKS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAvYXNzZXRzL2Nzcy8ke2NvbG9yfS5jc3NgKTtcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gY29sb3IgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvclwiKTtcblx0XHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yXCIsIGNvbG9yKTtcblx0fTtcblxuXHQvLyBzZXQgd2FsbHBhcGVycyBmb3IgY2hhdHMgY29udGVudFxuXHRjb25zdCBhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyID0gKGUsIHdhbGxwYXBlcikgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2FsbHBhcGVyIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9KTtcblxuXHRcdGlmICh3YWxscGFwZXIgPT09IDApIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFwiLndhbGxwYXBlcnNcIlxuXHRcdFx0KS5zdHlsZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCUgMCUsIDAlIDEwMCUsIGZyb20ocmdiKDIzOSwgMjQ3LCAyNTQpKSk7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHVuc2V0O2A7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFwiLndhbGxwYXBlcnNcIlxuXHRcdFx0KS5zdHlsZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtgL2Fzc2V0cy9pbWFnZXMvd2FsbHBhcGVyLyR7d2FsbHBhcGVyfS5qcGdgfSkgOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiB1bnNldGA7XG5cdFx0fVxuXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHR9O1xuXG5cdC8vIHNldCB3YWxscGFwZXJzIGFzIGdyYWRpZW50cyBmb3IgY2hhdHMgY29udGVudFxuXHRjb25zdCBhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyR3JhZGllbnRzID0gKGdyYWRpZW50KSA9PiB7XG5cdFx0Ly9zZXRCYWNrZ3JvdW5kV2FsbHBhcGVyR3JhZGllbnRzKGdyYWRpZW50KVxuXHR9O1xuXG5cdC8vc2V0IHJlc3BvbnNpdmUgaW4gbWVzc2VuZ2VyIHBhZ2Vcblx0Y29uc3QgaGFuZGxlQ2xpY2tSaWdodCA9IChyZXNwb25zZSkgPT4ge1xuXHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0c2V0TW9iaWxlTWVudSghcmVzcG9uc2UpO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldE1vYmlsZU1lbnUoIXJlc3BvbnNlKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1tZW51XCIpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxDb250ZXh0LlByb3ZpZGVyXG5cdFx0XHR2YWx1ZT17e1xuXHRcdFx0XHRtb2JpbGVNZW51OiBtb2JpbGVNZW51LFxuXHRcdFx0XHRoYW5kbGVDbGlja1JpZ2h0OiBoYW5kbGVDbGlja1JpZ2h0LFxuXHRcdFx0XHRhZGRTaWRlYmFyQmFja2dyb3VuZExheW91dDogYWRkU2lkZWJhckJhY2tncm91bmRMYXlvdXQsXG5cdFx0XHRcdGFkZExheW91dFR5cGU6IGFkZExheW91dFR5cGUsXG5cdFx0XHRcdGFkZFNpZGViYXJUeXBlczogYWRkU2lkZWJhclR5cGVzLFxuXHRcdFx0XHRhZGRUaGVtZUNvbG9yczogYWRkVGhlbWVDb2xvcnMsXG5cdFx0XHRcdGFkZEJhY2tncm91bmRXYWxscGFwZXI6IGFkZEJhY2tncm91bmRXYWxscGFwZXIsXG5cdFx0XHRcdGFkZEJhY2tncm91bmRXYWxscGFwZXJHcmFkaWVudHM6IGFkZEJhY2tncm91bmRXYWxscGFwZXJHcmFkaWVudHMsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8L0NvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemVyUHJvdmlkZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDdXN0b21pemVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy8gY3JlYXRlIGEgY29udGV4dCBmb3IgdGhlbWUgY3VzdG9taXplclxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemVyQ29udGV4dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL3Njc3MvY29sb3Iuc2Nzc1wiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBDaGF0Q29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9oZWxwZXJzL2NoYXRDb250ZXh0L2NoYXRDdHhcIjtcbmltcG9ydCBDdXN0b21pemVyQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9oZWxwZXJzL2N1c3RvbWl6ZXJDb250ZXh0L2N1c3RvbWl6ZXJDdHhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgcGVyc2lzdG9yIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlL3N0b3JlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcENvbXBvbmVudCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1hY3RpdmVcIik7XG5cbiAgICAvLyBQYWdlIExvYWRlclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICB9LCAxMDAwKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DaGl0Y2hhdDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNoaXRjaGF0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkNoaXRjaGF0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJDaGl0Y2hhdFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L3Njc3NcIlxuICAgICAgICAgIGhyZWY9XCJcIlxuICAgICAgICAgIG1lZGlhPVwic2NyZWVuXCJcbiAgICAgICAgICBpZD1cImNvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwLDgwMCZhbXA7ZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDYwMCZhbXA7ZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrOjMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDcwMCw3MDBpLDkwMCw5MDBpJmFtcDtkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAge2xvYWRlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpdGNoYXQtbG9hZGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nby9sb2dvX2JpZy5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGgzPlNpbXBsZSwgc2VjdXJlIG1lc3NhZ2luZyBmb3IgZmFzdCBjb25uZWN0IHRvIHdvcmxkLi4hPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgey8qIDxQZXJzaXN0R2F0ZSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+ICovfVxuICAgICAgICAgIDxDdXN0b21pemVyQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgPENoYXRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ2hhdENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICA8L0N1c3RvbWl6ZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgICAgey8qIDwvUGVyc2lzdEdhdGU+ICovfVxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cbiIsImV4cG9ydCBjb25zdCBTRVRfVVNFUiA9IFwiU0VUX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9VU0VSX1NUQVRVUyA9IFwiU0VUX1VTRVJfU1RBVFVTXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQ0xJRU5UID0gXCJTRVRfQ0xJRU5UXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9FUlJPUiA9IFwiTE9HSU5fRVJST1JcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOX0xPRElORyA9IFwiTE9HSU5fTE9ESU5HXCI7XHJcbmV4cG9ydCBjb25zdCBPTl9MT0dPVVQgPSBcIk9OX0xPR09VVFwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0FDVElWRV9UQUIgPSBcIlNFVF9BQ1RJVkVfVEFCXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfVVNFUlMgPSBcIlNFVF9VU0VSU1wiO1xyXG5leHBvcnQgY29uc3QgU0VUX0NIQVRfV0lUSCA9IFwiU0VUX0NIQVRfV0lUSFwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0NIQVRFRF9VU0VSUyA9IFwiU0VUX0NIQVRFRF9VU0VSU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBVF9DT01QT05FTlRfVU5NT1VOVCA9IFwiQ0hBVF9DT01QT05FTlRfVU5NT1VOVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX05FV19VU0VSID0gXCJBRERfTkVXX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSID0gXCJSRU1PVkVfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgTEFTVF9NRVNTQUdFX1RJTUUgPSBcIkxBU1RfTUVTU0FHRV9USU1FXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfUk9TVEVSID0gXCJTRVRfUk9TVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9TVEFUVVMgPSBcIlVQREFURV9VU0VSX1NUQVRVU1wiO1xyXG5leHBvcnQgY29uc3QgU0VUX0FMTF9VU0VSUyA9IFwiU0VUX0FMTF9VU0VSU1wiO1xyXG5leHBvcnQgY29uc3QgU0VUX05FV19NRVNTQUdFID0gXCJTRVRfTkVXX01FU1NBR0VcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9MQVNUX01FU1NBR0UgPSBcIlNFVF9MQVNUX01FU1NBR0VcIjtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9SRUNFTlRfVVNFUl9TVEFUVVMgPSBcIlVQREFURV9SRUNFTlRfVVNFUl9TVEFUVVNcIjtcclxuIiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1cGRhdGUgZnJvbSBcInJlYWN0LWFkZG9ucy11cGRhdGVcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGN1cnJlbnRVc2VyOiB7IHVzZXJuYW1lOiBudWxsLCBhY2NvdW50SWQ6IG51bGwsIGppZDogbnVsbCB9LFxyXG4gIGFjY291bnRJZDogbnVsbCxcclxuICB1c2VyU3RhdHVzOiBcInVuYXZhaWxhYmxlXCIsXHJcbiAgY2xpZW50OiBudWxsLFxyXG4gIGxvZ2luRXJyb3JzOiBbXSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBhY3RpdmVUYWI6IFwiY2hhdFwiLFxyXG4gIHVzZXJzOiBbXSxcclxuICBjaGF0V2l0aDogeyBuYW1lOiBcIkFcIiwgc3RhdHVzOiBcIm9ubGluZVwiLCBpZDogMiB9LFxyXG4gIG5ld0NvbnRhY3Q6IFwiY29udGFjdFwiLFxyXG4gIGNvbXBvbmVudFVubW91bnQ6IG51bGwsXHJcbiAgcm9zdGVyOiBcIlwiLFxyXG4gIGFsbHVzZXJTdGF0dXM6IFtdLFxyXG4gIGFsbHVzZXJzOiBbXSxcclxuICBhbGxNZXNzYWdlOiBbXHJcbiAgICB7XHJcbiAgICAgIGZyb206IDIsXHJcbiAgICAgIHRvOiAxLFxyXG4gICAgICBtZXNzYWdlVGltZTogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXHJcbiAgICAgIGJvZHk6IFwiaSBoYXZlIHJlY2VpdmVkIHRoaXMgbWVzc2FnZSBmcm9tIHVzZXIgd2l0aCBpZCAyXCIsXHJcbiAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcclxuICAgICAgZGlyZWN0aW9uOiBcInJlY2VpdmVkXCIsXHJcbiAgICAgIGZyb210bzogMixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBmcm9tOiAxLFxyXG4gICAgICB0bzogMixcclxuICAgICAgbWVzc2FnZVRpbWU6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgICBib2R5OiBcImFzc3VtZSBpIGFtbSBhIGxvZ2dlZCBpbiB1c2VyIC4gaSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZVwiLFxyXG4gICAgICBjaGF0VHlwZTogXCJjaGF0XCIsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJzZW5kXCIsXHJcbiAgICAgIGZyb210bzogMixcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGF0ZWRVc2VyczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZmlyc3RfbmFtZTogXCJKQUNLSUxJTkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBtZXNnOiBcImhvdyBhcmUgeW91XCIsXHJcbiAgICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxyXG4gICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiSm9uXCIsXHJcbiAgICAgIHN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIG1lc2c6IFwiaG93IGFyZSB5b3VcIixcclxuICAgICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXHJcbiAgICAgIG9ubGluZVN0YXR1czogXCJvZmZsaW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzo1NlwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5jb25zdCB1c2VyX3JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudFVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUl9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlclN0YXR1czogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DTElFTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9naW5FcnJvcnM6IFthY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX0xPRElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfVEFCOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFjdGl2ZVRhYjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NIQVRfV0lUSDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGF0V2l0aDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVEVEX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5ld0NvbnRhY3Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0hBVF9DT01QT05FTlRfVU5NT1VOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wb25lbnRVbm1vdW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkFERF9ORVdfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuY2hhdGVkVXNlcnNdLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX05FV19NRVNTQUdFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBhbGxNZXNzYWdlOiBbLi4uc3RhdGUuYWxsTWVzc2FnZSwgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRU1PVkVfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IHN0YXRlLmNoYXRlZFVzZXJzLmZpbHRlcihcclxuICAgICAgICAgICh1c2VyKSA9PiB1c2VyLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MQVNUX01FU1NBR0VfVElNRTpcclxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGNoYXRlZFVzZXJzOiB7XHJcbiAgICAgICAgICBbYWN0aW9uLnBheWxvYWQuaWRdOiB7XHJcbiAgICAgICAgICAgIGxhc3RNZXNzYWdlQXQ6IHsgJHNldDogYWN0aW9uLnBheWxvYWQudGltZSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9MQVNUX01FU1NBR0U6XHJcbiAgICAgIGxldCBmb3VuID1cclxuICAgICAgICBzdGF0ZS5jaGF0ZWRVc2VycyAmJiBzdGF0ZS5jaGF0ZWRVc2Vycy5sZW5ndGhcclxuICAgICAgICAgID8gISFzdGF0ZS5jaGF0ZWRVc2Vycy5maW5kKCh1KSA9PiB1LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICAgIDogZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZnVuY3Rpb25cIiwgZm91biwgYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgICBpZiAoZm91bikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNoYXRlZFVzZXJzOiBzdGF0ZS5jaGF0ZWRVc2Vycy5tYXAoKHVzZXIsIGkpID0+XHJcbiAgICAgICAgICAgIHVzZXIuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgIG1lc2c6IGFjdGlvbi5wYXlsb2FkLmxhc3RNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICBsYXN0TWVzc2FnZUF0OiBhY3Rpb24ucGF5bG9hZC50aW1lLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDogdXNlclxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9ST1NURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcm9zdGVyOiBbLi4uc3RhdGUucm9zdGVyLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9BTExfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWxsdXNlcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfVVNFUl9TVEFUVVM6XHJcbiAgICAgIGxldCBmb3VuZCA9XHJcbiAgICAgICAgc3RhdGUuYWxsdXNlclN0YXR1cyAmJiBzdGF0ZS5hbGx1c2VyU3RhdHVzLmxlbmd0aFxyXG4gICAgICAgICAgPyAhIXN0YXRlLmFsbHVzZXJTdGF0dXMuZmluZCgodSkgPT4gdS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpXHJcbiAgICAgICAgICA6IGZhbHNlO1xyXG5cclxuICAgICAgLy9pZiB0aGUgdXNlciBpcyBhbHJlYWR5XHJcbiAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBhbHJlZHkgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWxsdXNlclN0YXR1czogc3RhdGUuYWxsdXNlclN0YXR1cy5tYXAoKHVzZXJTdGF0dXMsIGkpID0+XHJcbiAgICAgICAgICAgIHVzZXJTdGF0dXMuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgPyB7IC4uLnVzZXJTdGF0dXMsIG9ubGluZVN0YXR1czogYWN0aW9uLnBheWxvYWQub25saW5lU3RhdHVzIH1cclxuICAgICAgICAgICAgICA6IHVzZXJTdGF0dXNcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgdGhlIHVzZXIgc3RhdHVzIGZvciBmaXN0IHRpbWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhbGx1c2VyU3RhdHVzOiBbLi4uc3RhdGUuYWxsdXNlclN0YXR1cywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAvL1VwZGF0ZSByZWNlbnQgdXNlciBzdGF0dXM6XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9SRUNFTlRfVVNFUl9TVEFUVVM6XHJcbiAgICAgIGxldCBmb3VuZDEgPVxyXG4gICAgICAgIHN0YXRlLmNoYXRlZFVzZXJzICYmIHN0YXRlLmNoYXRlZFVzZXJzLmxlbmd0aFxyXG4gICAgICAgICAgPyAhIXN0YXRlLmNoYXRlZFVzZXJzLmZpbmQoKHUpID0+IHUuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVxyXG4gICAgICAgICAgOiBmYWxzZTtcclxuXHJcbiAgICAgIC8vaWYgdGhlIHVzZXIgaXMgYWxyZWFkeVxyXG4gICAgICBpZiAoZm91bmQxKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgcmVjZW50IHVzZXIgc3RhdHVzXCIpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNoYXRlZFVzZXJzOiBzdGF0ZS5jaGF0ZWRVc2Vycy5tYXAoKHVzZXJTdGF0dXMsIGkpID0+XHJcbiAgICAgICAgICAgIHVzZXJTdGF0dXMuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgPyB7IC4uLnVzZXJTdGF0dXMsIG9ubGluZVN0YXR1czogYWN0aW9uLnBheWxvYWQub25saW5lU3RhdHVzIH1cclxuICAgICAgICAgICAgICA6IHVzZXJTdGF0dXNcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyOiB1c2VyX3JlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHJlZHV4UmVzZXQgZnJvbSBcInJlZHV4LXJlc2V0XCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xyXG4vLyBpbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuLy9pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xyXG4vLyBpbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbi8vIGNvbnN0IHBlcnNzaXN0Q29uZmlnID0ge1xyXG4vLyAgIGtleTogXCJyb290XCIsXHJcbi8vICAgc3RvcmFnZSxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpO1xyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMocmVkdXhSZXNldCgpLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKVxyXG4pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXVwZGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXJlc2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=