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
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/store/store */ "./redux/store/store.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
    }, 1500);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("title", {
        children: "Chitchat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        httpEquiv: "Content-Type",
        content: "text/html; charset=UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        name: "description",
        content: "Chitchat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        name: "keywords",
        content: "Chitchat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        name: "author",
        content: "Chitchat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("link", {
        rel: "stylesheet",
        type: "text/scss",
        href: "",
        media: "screen",
        id: "color"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:400,500,600&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), loader && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "chitchat-loader",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "/assets/images/logo/logo_big.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
          children: "Simple, secure messaging for fast connect to world..!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: _redux_store_store__WEBPACK_IMPORTED_MODULE_8__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_helpers_customizerContext_customizerCtx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_helpers_chatContext_chatCtx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
/*! exports provided: SET_USER, SET_USER_STATUS, SET_CLIENT, LOGIN_ERROR, LOGIN_LODING, ON_LOGOUT, SET_ACTIVE_TAB, SET_USERS, SET_CHAT_WITH, SET_CHATED_USERS, CHAT_COMPONENT_UNMOUNT, ADD_NEW_USER, REMOVE_USER, LAST_MESSAGE_TIME */
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
  chatWith: "A",
  newContact: "contact",
  componentUnmount: null,
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
    status: "online",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
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






const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(redux_reset__WEBPACK_IMPORTED_MODULE_4___default()(), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2hhdENvbnRleHQvY2hhdEN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2NoYXRDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY3VzdG9taXplckNvbnRleHQvY3VzdG9taXplckN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2N1c3RvbWl6ZXJDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcmVzZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbImZldGNoQ2hhdE1lbWJlckFwaSIsImF4aW9zIiwiZ2V0IiwiZmV0Y2hDaGF0QXBpIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiQ2hhdFByb3ZpZGVyIiwicHJvcHMiLCJjaGF0TWVtYmVycyIsInNldENoYXRNZW1iZXJzIiwidXNlU3RhdGUiLCJjaGF0cyIsInNldENoYXRzIiwiY3VycmVudFVzZXJJZCIsInNlbGVjdGVkVXNlciIsInNldFNlbGVjdGVkVXNlciIsImlkIiwibmFtZSIsInRodW1iIiwic3RhdHVzIiwibWVzZyIsImxhc3RTZWVuRGF0ZSIsIm9ubGluZVN0YXR1cyIsInR5cGluZyIsImlzVHllcGluZyIsInNldElzVHlwZWluZyIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2hhdHJlcyIsInNlbGVjdGVkVXNlcklkIiwidXNlcnMiLCJmaW5kIiwieCIsIklzc2VsZWN0ZWRVc2VyIiwibWVtYmVycmVzIiwiY3JlYXRlQ2hhdCIsImNvbnZlcnNhdGlvbiIsImxlbmd0aCIsImxhc3RNZXNzYWdlVGltZSIsIm1lc3NhZ2VzIiwic3RpY2tlcnMiLCJzcGxpY2UiLCJjaGFuZ2VDaGF0IiwidXNlcklkIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlSW5wdXQiLCJjaGF0IiwiaW5jbHVkZXMiLCJub3ciLCJEYXRlIiwidGltZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsInB1c2giLCJzZW5kZXIiLCJ0ZXh0IiwiY2hhdHNfZGF0YSIsImZpbHRlciIsInJlcGx5TWVzc2FnZSIsInJlYWQiLCJvbmxpbmUiLCJzZW5kSW1hZ2VzIiwiaW1hZ2UiLCJ0eXBpbmdNZXNzYWdlIiwidHlwZWluZyIsImN1cnJlbnRVc2VyIiwiY2hpbGRyZW4iLCJDaGF0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDdXN0b21pemVyUHJvdmlkZXIiLCJtb2JpbGVNZW51Iiwic2V0TW9iaWxlTWVudSIsImFkZFNpZGViYXJCYWNrZ3JvdW5kTGF5b3V0IiwiZSIsImxheW91dCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJib2R5IiwiY2xhc3NOYW1lIiwiY3VycmVudFRhcmdldCIsImFkZCIsImFkZExheW91dFR5cGUiLCJsYXlvdXRUeXBlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRTaWRlYmFyVHlwZXMiLCJzaWRlYmFyVHlwZSIsImFkZFRoZW1lQ29sb3JzIiwiY29sb3IiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRJdGVtIiwiYWRkQmFja2dyb3VuZFdhbGxwYXBlciIsIndhbGxwYXBlciIsInN0eWxlIiwiYWRkQmFja2dyb3VuZFdhbGxwYXBlckdyYWRpZW50cyIsImdyYWRpZW50IiwiaGFuZGxlQ2xpY2tSaWdodCIsInJlc3BvbnNlIiwiQ3VzdG9taXplckNvbnRleHQiLCJNeUFwcENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWRlciIsInNldExvYWRlciIsInNldFRpbWVvdXQiLCJzdG9yZSIsIlNFVF9VU0VSIiwiU0VUX1VTRVJfU1RBVFVTIiwiU0VUX0NMSUVOVCIsIkxPR0lOX0VSUk9SIiwiTE9HSU5fTE9ESU5HIiwiT05fTE9HT1VUIiwiU0VUX0FDVElWRV9UQUIiLCJTRVRfVVNFUlMiLCJTRVRfQ0hBVF9XSVRIIiwiU0VUX0NIQVRFRF9VU0VSUyIsIkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQiLCJBRERfTkVXX1VTRVIiLCJSRU1PVkVfVVNFUiIsIkxBU1RfTUVTU0FHRV9USU1FIiwiaW5pdGlhbFN0YXRlIiwidXNlcm5hbWUiLCJhY2NvdW50SWQiLCJqaWQiLCJ1c2VyU3RhdHVzIiwiY2xpZW50IiwibG9naW5FcnJvcnMiLCJsb2FkaW5nIiwiYWN0aXZlVGFiIiwiY2hhdFdpdGgiLCJuZXdDb250YWN0IiwiY29tcG9uZW50VW5tb3VudCIsImNoYXRlZFVzZXJzIiwiZmlyc3RfbmFtZSIsImxhc3RNZXNzYWdlQXQiLCJ1c2VyX3JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiLCJ1c2VyIiwidXBkYXRlIiwiJHNldCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVkdXhSZXNldCIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsa0JBQWtCLEdBQUcsTUFBTTtBQUN0QyxTQUFPQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsc0JB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LEVBQUVOO0FBRDRCLENBQUQsQ0FBbkM7QUFHZVMsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU12QyxLQUFLLEdBQUd5Qyx5REFBVyxDQUN2QkYsdURBRHVCLEVBRXZCRyxvRkFBbUIsQ0FBQ0Msa0RBQVUsRUFBWCxFQUFlQyw2REFBZSxDQUFDQyxrREFBRCxDQUE5QixDQUZJLENBQXpCO0FBSWU3QyxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENoYXRNZW1iZXJBcGkgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvY2hhdE1lbWJlci5qc29uYCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDaGF0QXBpID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL2NoYXQuY2hhdHMuanNvbmApO1xufTtcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJodHRwczovL2thcnRoaWsubXlzbWFydHBieC5vcmc6ODQ0My92Mi9cIixcbn0pO1xuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBmZXRjaENoYXRNZW1iZXJBcGksIGZldGNoQ2hhdEFwaSB9IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcblxuY29uc3QgQ2hhdFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjaGF0TWVtYmVycywgc2V0Q2hhdE1lbWJlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2hhdHMsIHNldENoYXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgY3VycmVudFVzZXJJZCA9IDA7XG4gIGNvbnN0IFtzZWxlY3RlZFVzZXIsIHNldFNlbGVjdGVkVXNlcl0gPSB1c2VTdGF0ZSh7XG4gICAgaWQ6IDAsXG4gICAgbmFtZTogXCJKb255IEx5bmV0aW5cIixcbiAgICB0aHVtYjogXCJjb250YWN0LzIuanBnXCIsXG4gICAgc3RhdHVzOiBcIjhcIixcbiAgICBtZXNnOiBcIlR5cGluZy4uLi4uLi4uLi4uLi4uLi5cIixcbiAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcbiAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXG4gICAgdHlwaW5nOiB0cnVlLFxuICB9KTtcbiAgY29uc3QgW2lzVHllcGluZywgc2V0SXNUeXBlaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGdldCBhbGwgaW5pdGlhbCBjaGF0IHVzZXJzXG5cbiAgICBmZXRjaENoYXRNZW1iZXJBcGkoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldENoYXRNZW1iZXJzKHJlcy5kYXRhKTtcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgZmV0Y2hDaGF0QXBpKCkudGhlbigoY2hhdHJlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVXNlcklkID0gY2hhdHJlcy5kYXRhWzBdLnVzZXJzLmZpbmQoXG4gICAgICAgICAgICAoeCkgPT4geCAhPT0gY3VycmVudFVzZXJJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgSXNzZWxlY3RlZFVzZXIgPSByZXMuZGF0YS5maW5kKCh4KSA9PiB4LmlkID09PSBzZWxlY3RlZFVzZXJJZCk7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRVc2VyKElzc2VsZWN0ZWRVc2VyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZ2V0IGluaXRpYWwgY2hhdCBiZXR3ZWVuIHR3byBjaGF0IHVzZXJzXG4gICAgZmV0Y2hDaGF0QXBpKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRDaGF0cyhyZXMuZGF0YSk7XG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIGZldGNoQ2hhdE1lbWJlckFwaSgpLnRoZW4oKG1lbWJlcnJlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVXNlcklkID0gcmVzLmRhdGFbMF0udXNlcnMuZmluZChcbiAgICAgICAgICAgICh4KSA9PiB4ICE9PSBjdXJyZW50VXNlcklkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBJc3NlbGVjdGVkVXNlciA9IG1lbWJlcnJlcy5kYXRhLmZpbmQoXG4gICAgICAgICAgICAoeCkgPT4geC5pZCA9PT0gc2VsZWN0ZWRVc2VySWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldFNlbGVjdGVkVXNlcihJc3NlbGVjdGVkVXNlcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gY2hhdCB3aXRoIHVzZXIgZmlyc3QgdGltZVxuICBjb25zdCBjcmVhdGVDaGF0ID0gKGN1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkLCBjaGF0cywgb25saW5lU3RhdHVzKSA9PiB7XG4gICAgbGV0IGNvbnZlcnNhdGlvbiA9IHtcbiAgICAgIGlkOiBjaGF0cy5sZW5ndGggKyAxLFxuICAgICAgdXNlcnM6IFtjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZF0sXG4gICAgICBsYXN0TWVzc2FnZVRpbWU6IFwiLVwiLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgc3RpY2tlcnM6IFtdLFxuICAgICAgb25saW5lU3RhdHVzOiBvbmxpbmVTdGF0dXMsXG4gICAgfTtcblxuICAgIGNoYXRzLnNwbGljZSgwLCAwLCBjb252ZXJzYXRpb24pOyAvL3dlIGFyZSBhZGRpbmcgY29udmVyc2lvbiBhdCAwdGggaW5kZXhcbiAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjaGF0TWVtYmVycy5maW5kKCh4KSA9PiB4LmlkID09PSBzZWxlY3RlZFVzZXJJZCk7XG4gICAgc2V0Q2hhdHMoWy4uLmNoYXRzXSk7XG4gICAgc2V0U2VsZWN0ZWRVc2VyKHNlbGVjdGVkVXNlcik7XG4gIH07XG5cbiAgLy8gY2hhbmdlIGV4aXN0aW5nIGNoYXQgYmV0d2VlbiB0d28gY2hhdCB1c2Vyc1xuICBjb25zdCBjaGFuZ2VDaGF0ID0gKHVzZXJJZCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRNZW1iZXJzLmZpbmQoKHgpID0+IHguaWQgPT09IHVzZXJJZCk7XG4gICAgc2V0U2VsZWN0ZWRVc2VyKHNlbGVjdGVkVXNlcik7XG4gIH07XG5cbiAgLy8gc2VuZCBtZXNzYWdlIHRvIHNlbGVjdGVkIGNoYXQgdXNlcnNcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWQsIG1lc3NhZ2VJbnB1dCwgY2hhdHMpID0+IHtcbiAgICBsZXQgY2hhdCA9IGNoYXRzLmZpbmQoXG4gICAgICAoeCkgPT4geC51c2Vycy5pbmNsdWRlcyhjdXJyZW50VXNlcklkKSAmJiB4LnVzZXJzLmluY2x1ZGVzKHNlbGVjdGVkVXNlcklkKVxuICAgICk7IC8vIGZpbmQgc2VsZWN0ZWQgY2hhdCBVc2VyIElkXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0aW1lID0gbm93LmdldEhvdXJzKCkgKyBcIjpcIiArIG5vdy5nZXRNaW51dGVzKCk7XG4gICAgaWYgKGNoYXQpIHtcbiAgICAgIGNoYXQubWVzc2FnZXMucHVzaCh7XG4gICAgICAgIHNlbmRlcjogY3VycmVudFVzZXJJZCxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgdGV4dDogbWVzc2FnZUlucHV0LFxuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNoYXQubGFzdE1lc3NhZ2VUaW1lID0gdGltZTtcbiAgICAgIGxldCBjaGF0c19kYXRhID0gY2hhdHMuZmlsdGVyKCh4KSA9PiB4LmlkICE9PSBjaGF0LmlkKTtcbiAgICAgIGNoYXRzX2RhdGEuc3BsaWNlKDAsIDAsIGNoYXQpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdE1lbWJlcnMuZmluZCgoeCkgPT4geC5pZCA9PT0gc2VsZWN0ZWRVc2VySWQpO1xuICAgICAgc2V0Q2hhdHMoWy4uLmNoYXRzXSk7IC8vIHVwZGF0ZSBjaGF0cyBtZXNzYWdlc1xuICAgICAgc2V0U2VsZWN0ZWRVc2VyKHNlbGVjdGVkVXNlcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIHJlcGx5IG1lc3NhZ2UgdG8gc2VsZWN0ZWQgY2hhdCB1c2Vyc1xuICBjb25zdCByZXBseU1lc3NhZ2UgPSAoY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWQsIHJlcGx5TWVzc2FnZSwgY2hhdHMpID0+IHtcbiAgICBsZXQgY2hhdCA9IGNoYXRzLmZpbmQoXG4gICAgICAoeCkgPT4geC51c2Vycy5pbmNsdWRlcyhjdXJyZW50VXNlcklkKSAmJiB4LnVzZXJzLmluY2x1ZGVzKHNlbGVjdGVkVXNlcklkKVxuICAgICk7IC8vIGZpbmQgc2VsZWN0ZWQgY2hhdCBVc2VyIElkXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0aW1lID0gbm93LmdldEhvdXJzKCkgKyBcIjpcIiArIG5vdy5nZXRNaW51dGVzKCk7XG4gICAgaWYgKGNoYXQpIHtcbiAgICAgIGNoYXQubWVzc2FnZXMucHVzaCh7XG4gICAgICAgIHNlbmRlcjogc2VsZWN0ZWRVc2VySWQsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIHRleHQ6IHJlcGx5TWVzc2FnZSxcbiAgICAgICAgcmVhZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY2hhdC5sYXN0TWVzc2FnZVRpbWUgPSB0aW1lO1xuICAgICAgY2hhdC5vbmxpbmUgPSBcIlwiO1xuICAgICAgbGV0IGNoYXRzX2RhdGEgPSBjaGF0cy5maWx0ZXIoKHgpID0+IHguaWQgIT09IGNoYXQuaWQpO1xuICAgICAgY2hhdHNfZGF0YS5zcGxpY2UoMCwgMCwgY2hhdCk7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjaGF0TWVtYmVycy5maW5kKCh4KSA9PiB4LmlkID09PSBzZWxlY3RlZFVzZXJJZCk7XG4gICAgICBzZWxlY3RlZFVzZXIub25saW5lU3RhdHVzID0gXCJvbmxpbmVcIjsgLy8gY2hhdCB1c2VyIHJlcGx5IHRoZSBtZXNzYWdlIHRoZW4gc2V0IHNlbGVjdGVkIGNoYXQgdXNlciAgc3RhdHVzIHRvIFwib25saW5lXCJcbiAgICAgIHNldENoYXRzKFsuLi5jaGF0c10pOyAvLyB1cGRhdGUgY2hhdHMgbWVzc2FnZXNcbiAgICAgIHNldFNlbGVjdGVkVXNlcihzZWxlY3RlZFVzZXIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBzZW5kIHN0aWNrZXJzIG9yIGltYWdlc1xuICBjb25zdCBzZW5kSW1hZ2VzID0gKGN1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkLCBpbWFnZSwgY2hhdHMpID0+IHtcbiAgICBsZXQgY2hhdCA9IGNoYXRzLmZpbmQoXG4gICAgICAoeCkgPT4geC51c2Vycy5pbmNsdWRlcyhjdXJyZW50VXNlcklkKSAmJiB4LnVzZXJzLmluY2x1ZGVzKHNlbGVjdGVkVXNlcklkKVxuICAgICk7IC8vIGZpbmQgc2VsZWN0ZWQgY2hhdCBVc2VyIElkXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0aW1lID0gbm93LmdldEhvdXJzKCkgKyBcIjpcIiArIG5vdy5nZXRNaW51dGVzKCk7XG4gICAgaWYgKGNoYXQpIHtcbiAgICAgIGNoYXQuc3RpY2tlcnMucHVzaCh7XG4gICAgICAgIHNlbmRlcjogY3VycmVudFVzZXJJZCxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgc3RpY2tlcnM6IGltYWdlLFxuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNoYXQubGFzdE1lc3NhZ2VUaW1lID0gdGltZTtcbiAgICAgIGNoYXQub25saW5lID0gXCJcIjtcbiAgICAgIGxldCBjaGF0c19kYXRhID0gY2hhdHMuZmlsdGVyKCh4KSA9PiB4LmlkICE9PSBjaGF0LmlkKTtcbiAgICAgIGNoYXRzX2RhdGEuc3BsaWNlKDAsIDAsIGNoYXQpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdE1lbWJlcnMuZmluZCgoeCkgPT4geC5pZCA9PT0gc2VsZWN0ZWRVc2VySWQpO1xuICAgICAgc2V0Q2hhdHMoWy4uLmNoYXRzXSk7IC8vIHVwZGF0ZSBjaGF0cyBtZXNzYWdlc1xuICAgICAgc2V0U2VsZWN0ZWRVc2VyKHNlbGVjdGVkVXNlcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIHdoZW4gY2hhdCB1c2VyIHJlcGxpZWQgdG8gb3VyIG1lc3NhZ2UgZXhpc3RpbmcgdHllcGluZyBsb2FkZXJcbiAgY29uc3QgdHlwaW5nTWVzc2FnZSA9ICh0eXBlaW5nKSA9PiB7XG4gICAgc2V0SXNUeXBlaW5nKHR5cGVpbmcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNoYXRNZW1iZXJzOiBjaGF0TWVtYmVycyxcbiAgICAgICAgY2hhdHM6IGNoYXRzLFxuICAgICAgICBjdXJyZW50VXNlcjogY2hhdE1lbWJlcnNbMF0sXG4gICAgICAgIHNlbGVjdGVkVXNlcjogc2VsZWN0ZWRVc2VyLFxuICAgICAgICBpc1R5ZXBpbmc6IGlzVHllcGluZyxcbiAgICAgICAgY2hhbmdlQ2hhdDogY2hhbmdlQ2hhdCxcbiAgICAgICAgY3JlYXRlQ2hhdDogY3JlYXRlQ2hhdCxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHNlbmRNZXNzYWdlLFxuICAgICAgICByZXBseU1lc3NhZ2U6IHJlcGx5TWVzc2FnZSxcbiAgICAgICAgc2VuZEltYWdlczogc2VuZEltYWdlcyxcbiAgICAgICAgdHlwaW5nTWVzc2FnZTogdHlwaW5nTWVzc2FnZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRQcm92aWRlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENoYXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpOyAvLyBjcmVhdGUgY29udGV4dCBmb3IgY2hhdCBhcHBcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbnRleHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBDdXN0b21pemVyUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgW21vYmlsZU1lbnUsIHNldE1vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHQvLyBzZXQgc2lkZWJhciBiYWNrZ3JvdW5kIGxheW91dFxuXHRjb25zdCBhZGRTaWRlYmFyQmFja2dyb3VuZExheW91dCA9IChlLCBsYXlvdXQpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aGVtZS1sYXlvdXQtdHlwZSBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBgc2lkZWJhci1hY3RpdmUgbWFpbi1wYWdlICR7bGF5b3V0fWA7XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdH07XG5cblx0Ly8gc2V0IGxheW91dCB0aGVtZSB0byBMVFIgb3IgUlRMXG5cdGNvbnN0IGFkZExheW91dFR5cGUgPSAobGF5b3V0VHlwZSkgPT4ge1xuXHRcdGlmIChsYXlvdXRUeXBlKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGBzaWRlYmFyLWFjdGl2ZSBtYWluLXBhZ2UgcnRsICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXG5cdFx0XHRcdFwibGF5b3V0X21vZGVcIlxuXHRcdFx0KX1gO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ydGwtc2V0dGluZ1wiKS5jbGFzc05hbWUgPVxuXHRcdFx0XHRcInJ0bC1zZXR0aW5nIGljb24tYnRuIGJ0bi1wcmltYXJ5IHJ0bFwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGBzaWRlYmFyLWFjdGl2ZSBtYWluLXBhZ2UgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcblx0XHRcdFx0XCJsYXlvdXRfbW9kZVwiXG5cdFx0XHQpfWA7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJ0bC1zZXR0aW5nXCIpLmNsYXNzTmFtZSA9XG5cdFx0XHRcdFwicnRsLXNldHRpbmcgaWNvbi1idG4gYnRuLXByaW1hcnlcIjtcblx0XHR9XG5cdH07XG5cblx0Ly8gc2V0IGxlZnQgc2lkZWJhciB0byBvcGVuL2Nsb3NlXG5cdGNvbnN0IGFkZFNpZGViYXJUeXBlcyA9IChlLCBzaWRlYmFyVHlwZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItdHlwZSBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW5hdlwiKS5jbGFzc05hbWUgPSBcIm1haW4tbmF2IFwiICsgc2lkZWJhclR5cGU7XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdH07XG5cblx0Ly8gc2V0IHRoZW1lcyBwcmltYXJ5IGNvbG9yc1xuXHRjb25zdCBhZGRUaGVtZUNvbG9ycyA9IChlLCBjb2xvcikgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3JzIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9KTtcblx0XHQvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yXCIpLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYC9hc3NldHMvY3NzLyR7Y29sb3J9LmNzc2ApO1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSBjb2xvciB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yXCIpO1xuXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIiwgY29sb3IpO1xuXHR9O1xuXG5cdC8vIHNldCB3YWxscGFwZXJzIGZvciBjaGF0cyBjb250ZW50XG5cdGNvbnN0IGFkZEJhY2tncm91bmRXYWxscGFwZXIgPSAoZSwgd2FsbHBhcGVyKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53YWxscGFwZXIgbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKHdhbGxwYXBlciA9PT0gMCkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XCIud2FsbHBhcGVyc1wiXG5cdFx0XHQpLnN0eWxlID0gYGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwJSAwJSwgMCUgMTAwJSwgZnJvbShyZ2IoMjM5LCAyNDcsIDI1NCkpKTsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGJhY2tncm91bmQtYmxlbmQtbW9kZTogdW5zZXQ7YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XCIud2FsbHBhcGVyc1wiXG5cdFx0XHQpLnN0eWxlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2AvYXNzZXRzL2ltYWdlcy93YWxscGFwZXIvJHt3YWxscGFwZXJ9LmpwZ2B9KSA7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHVuc2V0YDtcblx0XHR9XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdH07XG5cblx0Ly8gc2V0IHdhbGxwYXBlcnMgYXMgZ3JhZGllbnRzIGZvciBjaGF0cyBjb250ZW50XG5cdGNvbnN0IGFkZEJhY2tncm91bmRXYWxscGFwZXJHcmFkaWVudHMgPSAoZ3JhZGllbnQpID0+IHtcblx0XHQvL3NldEJhY2tncm91bmRXYWxscGFwZXJHcmFkaWVudHMoZ3JhZGllbnQpXG5cdH07XG5cblx0Ly9zZXQgcmVzcG9uc2l2ZSBpbiBtZXNzZW5nZXIgcGFnZVxuXHRjb25zdCBoYW5kbGVDbGlja1JpZ2h0ID0gKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYgKHJlc3BvbnNlKSB7XG5cdFx0XHRzZXRNb2JpbGVNZW51KCFyZXNwb25zZSk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0TW9iaWxlTWVudSghcmVzcG9uc2UpO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLW1lbnVcIik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PENvbnRleHQuUHJvdmlkZXJcblx0XHRcdHZhbHVlPXt7XG5cdFx0XHRcdG1vYmlsZU1lbnU6IG1vYmlsZU1lbnUsXG5cdFx0XHRcdGhhbmRsZUNsaWNrUmlnaHQ6IGhhbmRsZUNsaWNrUmlnaHQsXG5cdFx0XHRcdGFkZFNpZGViYXJCYWNrZ3JvdW5kTGF5b3V0OiBhZGRTaWRlYmFyQmFja2dyb3VuZExheW91dCxcblx0XHRcdFx0YWRkTGF5b3V0VHlwZTogYWRkTGF5b3V0VHlwZSxcblx0XHRcdFx0YWRkU2lkZWJhclR5cGVzOiBhZGRTaWRlYmFyVHlwZXMsXG5cdFx0XHRcdGFkZFRoZW1lQ29sb3JzOiBhZGRUaGVtZUNvbG9ycyxcblx0XHRcdFx0YWRkQmFja2dyb3VuZFdhbGxwYXBlcjogYWRkQmFja2dyb3VuZFdhbGxwYXBlcixcblx0XHRcdFx0YWRkQmFja2dyb3VuZFdhbGxwYXBlckdyYWRpZW50czogYWRkQmFja2dyb3VuZFdhbGxwYXBlckdyYWRpZW50cyxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdDwvQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6ZXJQcm92aWRlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEN1c3RvbWl6ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpOyAvLyBjcmVhdGUgYSBjb250ZXh0IGZvciB0aGVtZSBjdXN0b21pemVyXG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6ZXJDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9hc3NldHMvc2Nzcy9jb2xvci5zY3NzXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IENoYXRDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2hlbHBlcnMvY2hhdENvbnRleHQvY2hhdEN0eFwiO1xuaW1wb3J0IEN1c3RvbWl6ZXJDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2hlbHBlcnMvY3VzdG9taXplckNvbnRleHQvY3VzdG9taXplckN0eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlL3N0b3JlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcENvbXBvbmVudCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1hY3RpdmVcIik7XG5cbiAgICAvLyBQYWdlIExvYWRlclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICB9LCAxNTAwKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DaGl0Y2hhdDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNoaXRjaGF0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkNoaXRjaGF0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJDaGl0Y2hhdFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L3Njc3NcIlxuICAgICAgICAgIGhyZWY9XCJcIlxuICAgICAgICAgIG1lZGlhPVwic2NyZWVuXCJcbiAgICAgICAgICBpZD1cImNvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwLDgwMCZhbXA7ZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDYwMCZhbXA7ZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrOjMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDcwMCw3MDBpLDkwMCw5MDBpJmFtcDtkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAge2xvYWRlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpdGNoYXQtbG9hZGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nby9sb2dvX2JpZy5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGgzPlNpbXBsZSwgc2VjdXJlIG1lc3NhZ2luZyBmb3IgZmFzdCBjb25uZWN0IHRvIHdvcmxkLi4hPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgPEN1c3RvbWl6ZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICA8Q2hhdENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9DaGF0Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgIDwvQ3VzdG9taXplckNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iLCJleHBvcnQgY29uc3QgU0VUX1VTRVIgPSBcIlNFVF9VU0VSXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfVVNFUl9TVEFUVVMgPSBcIlNFVF9VU0VSX1NUQVRVU1wiO1xyXG5leHBvcnQgY29uc3QgU0VUX0NMSUVOVCA9IFwiU0VUX0NMSUVOVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSBcIkxPR0lOX0VSUk9SXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9MT0RJTkcgPSBcIkxPR0lOX0xPRElOR1wiO1xyXG5leHBvcnQgY29uc3QgT05fTE9HT1VUID0gXCJPTl9MT0dPVVRcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9BQ1RJVkVfVEFCID0gXCJTRVRfQUNUSVZFX1RBQlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJTID0gXCJTRVRfVVNFUlNcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9DSEFUX1dJVEggPSBcIlNFVF9DSEFUX1dJVEhcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9DSEFURURfVVNFUlMgPSBcIlNFVF9DSEFURURfVVNFUlNcIjtcclxuZXhwb3J0IGNvbnN0IENIQVRfQ09NUE9ORU5UX1VOTU9VTlQgPSBcIkNIQVRfQ09NUE9ORU5UX1VOTU9VTlRcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9ORVdfVVNFUiA9IFwiQUREX05FV19VU0VSXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUiA9IFwiUkVNT1ZFX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IExBU1RfTUVTU0FHRV9USU1FID0gXCJMQVNUX01FU1NBR0VfVElNRVwiO1xyXG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVwZGF0ZSBmcm9tIFwicmVhY3QtYWRkb25zLXVwZGF0ZVwiO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY3VycmVudFVzZXI6IHsgdXNlcm5hbWU6IG51bGwsIGFjY291bnRJZDogbnVsbCwgamlkOiBudWxsIH0sXHJcbiAgYWNjb3VudElkOiBudWxsLFxyXG4gIHVzZXJTdGF0dXM6IFwidW5hdmFpbGFibGVcIixcclxuICBjbGllbnQ6IG51bGwsXHJcbiAgbG9naW5FcnJvcnM6IFtdLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIGFjdGl2ZVRhYjogXCJjaGF0XCIsXHJcbiAgdXNlcnM6IFtdLFxyXG4gIGNoYXRXaXRoOiBcIkFcIixcclxuICBuZXdDb250YWN0OiBcImNvbnRhY3RcIixcclxuICBjb21wb25lbnRVbm1vdW50OiBudWxsLFxyXG4gIGNoYXRlZFVzZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBmaXJzdF9uYW1lOiBcIkpBQ0tJTElORVwiLFxyXG4gICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIG1lc2c6IFwiaG93IGFyZSB5b3VcIixcclxuICAgICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXHJcbiAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgbGFzdE1lc3NhZ2VBdDogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgZmlyc3RfbmFtZTogXCJCUk9OTk5aRVwiLFxyXG4gICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIG1lc2c6IFwiaG93IGFyZSB5b3VcIixcclxuICAgICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXHJcbiAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgbGFzdE1lc3NhZ2VBdDogXCIyMDIxLTA4LTA3IDA5OjAzOjU2XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbmNvbnN0IHVzZXJfcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50VXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSX1NUQVRVUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyU3RhdHVzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NMSUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnQ6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dpbkVycm9yczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fTE9ESU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0FDVElWRV9UQUI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWN0aXZlVGFiOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJzOiBbYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVF9XSVRIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYXRXaXRoOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NIQVRFRF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBuZXdDb250YWN0OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcG9uZW50VW5tb3VudDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5BRERfTkVXX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcblxyXG4gICAgICAgIGNoYXRlZFVzZXJzOiBbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLmNoYXRlZFVzZXJzXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVNT1ZFX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcblxyXG4gICAgICAgIGNoYXRlZFVzZXJzOiBzdGF0ZS5jaGF0ZWRVc2Vycy5maWx0ZXIoXHJcbiAgICAgICAgICAodXNlcikgPT4gdXNlci5pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTEFTVF9NRVNTQUdFX1RJTUU6XHJcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcclxuICAgICAgICBjaGF0ZWRVc2Vyczoge1xyXG4gICAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmlkXToge1xyXG4gICAgICAgICAgICBsYXN0TWVzc2FnZUF0OiB7ICRzZXQ6IGFjdGlvbi5wYXlsb2FkLnRpbWUgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgdXNlcjogdXNlcl9yZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCByZWR1eFJlc2V0IGZyb20gXCJyZWR1eC1yZXNldFwiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgcm9vdFJlZHVjZXIsXHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyhyZWR1eFJlc2V0KCksIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXVwZGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1yZXNldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9