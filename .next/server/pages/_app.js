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
/*! exports provided: SET_USER, SET_USER_STATUS, SET_CLIENT, LOGIN_ERROR, LOGIN_LODING, ON_LOGOUT, SET_ACTIVE_TAB, SET_USERS, SET_CHAT_WITH, SET_CHATED_USERS, CHAT_COMPONENT_UNMOUNT, ADD_NEW_USER, REMOVE_USER */
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  currentUser: null,
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
    first_name: "A",
    status: "online",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    lastMessageAt: "2021-08-07 09:03:10"
  }, {
    id: 2,
    first_name: "B",
    status: "online",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    lastMessageAt: "2021-08-07 09:03:56"
  }, {
    id: 3,
    first_name: "C",
    status: "online",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    lastMessageAt: "2021-08-07 09:04:10"
  }, {
    id: 4,
    first_name: "D",
    status: "online",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    lastMessageAt: "2021-08-07 09:05:10"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2hhdENvbnRleHQvY2hhdEN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2NoYXRDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY3VzdG9taXplckNvbnRleHQvY3VzdG9taXplckN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2N1c3RvbWl6ZXJDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1yZXNldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiZmV0Y2hDaGF0TWVtYmVyQXBpIiwiYXhpb3MiLCJnZXQiLCJmZXRjaENoYXRBcGkiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJDaGF0UHJvdmlkZXIiLCJwcm9wcyIsImNoYXRNZW1iZXJzIiwic2V0Q2hhdE1lbWJlcnMiLCJ1c2VTdGF0ZSIsImNoYXRzIiwic2V0Q2hhdHMiLCJjdXJyZW50VXNlcklkIiwic2VsZWN0ZWRVc2VyIiwic2V0U2VsZWN0ZWRVc2VyIiwiaWQiLCJuYW1lIiwidGh1bWIiLCJzdGF0dXMiLCJtZXNnIiwibGFzdFNlZW5EYXRlIiwib25saW5lU3RhdHVzIiwidHlwaW5nIiwiaXNUeWVwaW5nIiwic2V0SXNUeXBlaW5nIiwidXNlRWZmZWN0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjaGF0cmVzIiwic2VsZWN0ZWRVc2VySWQiLCJ1c2VycyIsImZpbmQiLCJ4IiwiSXNzZWxlY3RlZFVzZXIiLCJtZW1iZXJyZXMiLCJjcmVhdGVDaGF0IiwiY29udmVyc2F0aW9uIiwibGVuZ3RoIiwibGFzdE1lc3NhZ2VUaW1lIiwibWVzc2FnZXMiLCJzdGlja2VycyIsInNwbGljZSIsImNoYW5nZUNoYXQiLCJ1c2VySWQiLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2VJbnB1dCIsImNoYXQiLCJpbmNsdWRlcyIsIm5vdyIsIkRhdGUiLCJ0aW1lIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwicHVzaCIsInNlbmRlciIsInRleHQiLCJjaGF0c19kYXRhIiwiZmlsdGVyIiwicmVwbHlNZXNzYWdlIiwicmVhZCIsIm9ubGluZSIsInNlbmRJbWFnZXMiLCJpbWFnZSIsInR5cGluZ01lc3NhZ2UiLCJ0eXBlaW5nIiwiY3VycmVudFVzZXIiLCJjaGlsZHJlbiIsIkNoYXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkN1c3RvbWl6ZXJQcm92aWRlciIsIm1vYmlsZU1lbnUiLCJzZXRNb2JpbGVNZW51IiwiYWRkU2lkZWJhckJhY2tncm91bmRMYXlvdXQiLCJlIiwibGF5b3V0IiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImJvZHkiLCJjbGFzc05hbWUiLCJjdXJyZW50VGFyZ2V0IiwiYWRkIiwiYWRkTGF5b3V0VHlwZSIsImxheW91dFR5cGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicXVlcnlTZWxlY3RvciIsImFkZFNpZGViYXJUeXBlcyIsInNpZGViYXJUeXBlIiwiYWRkVGhlbWVDb2xvcnMiLCJjb2xvciIsImRvY3VtZW50RWxlbWVudCIsInNldEl0ZW0iLCJhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyIiwid2FsbHBhcGVyIiwic3R5bGUiLCJhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyR3JhZGllbnRzIiwiZ3JhZGllbnQiLCJoYW5kbGVDbGlja1JpZ2h0IiwicmVzcG9uc2UiLCJDdXN0b21pemVyQ29udGV4dCIsIk15QXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2V0VGltZW91dCIsInN0b3JlIiwiU0VUX1VTRVIiLCJTRVRfVVNFUl9TVEFUVVMiLCJTRVRfQ0xJRU5UIiwiTE9HSU5fRVJST1IiLCJMT0dJTl9MT0RJTkciLCJPTl9MT0dPVVQiLCJTRVRfQUNUSVZFX1RBQiIsIlNFVF9VU0VSUyIsIlNFVF9DSEFUX1dJVEgiLCJTRVRfQ0hBVEVEX1VTRVJTIiwiQ0hBVF9DT01QT05FTlRfVU5NT1VOVCIsIkFERF9ORVdfVVNFUiIsIlJFTU9WRV9VU0VSIiwiaW5pdGlhbFN0YXRlIiwiYWNjb3VudElkIiwidXNlclN0YXR1cyIsImNsaWVudCIsImxvZ2luRXJyb3JzIiwibG9hZGluZyIsImFjdGl2ZVRhYiIsImNoYXRXaXRoIiwibmV3Q29udGFjdCIsImNvbXBvbmVudFVubW91bnQiLCJjaGF0ZWRVc2VycyIsImZpcnN0X25hbWUiLCJsYXN0TWVzc2FnZUF0IiwidXNlcl9yZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwidXNlciIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVkdXhSZXNldCIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsa0JBQWtCLEdBQUcsTUFBTTtBQUN0QyxTQUFPQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsc0JBQVgsQ0FBUDtBQUNELENBRk07QUFJQSxNQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUNoQyxTQUFPRiw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsc0JBQVgsQ0FBUDtBQUNELENBRk07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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTWxDLEtBQUssR0FBR29DLHlEQUFXLENBQ3ZCRix1REFEdUIsRUFFdkJHLG9GQUFtQixDQUFDQyxrREFBVSxFQUFYLEVBQWVDLDZEQUFlLENBQUNDLGtEQUFELENBQTlCLENBRkksQ0FBekI7QUFJZXhDLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2hhdE1lbWJlckFwaSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9jaGF0TWVtYmVyLmpzb25gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENoYXRBcGkgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvY2hhdC5jaGF0cy5qc29uYCk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcImh0dHBzOi8va2FydGhpay5teXNtYXJ0cGJ4Lm9yZzo4NDQzL3YyL1wiLFxufSk7XG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGZldGNoQ2hhdE1lbWJlckFwaSwgZmV0Y2hDaGF0QXBpIH0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xuXG5jb25zdCBDaGF0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2NoYXRNZW1iZXJzLCBzZXRDaGF0TWVtYmVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjdXJyZW50VXNlcklkID0gMDtcbiAgY29uc3QgW3NlbGVjdGVkVXNlciwgc2V0U2VsZWN0ZWRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogMCxcbiAgICBuYW1lOiBcIkpvbnkgTHluZXRpblwiLFxuICAgIHRodW1iOiBcImNvbnRhY3QvMi5qcGdcIixcbiAgICBzdGF0dXM6IFwiOFwiLFxuICAgIG1lc2c6IFwiVHlwaW5nLi4uLi4uLi4uLi4uLi4uLlwiLFxuICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxuICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcbiAgICB0eXBpbmc6IHRydWUsXG4gIH0pO1xuICBjb25zdCBbaXNUeWVwaW5nLCBzZXRJc1R5cGVpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZ2V0IGFsbCBpbml0aWFsIGNoYXQgdXNlcnNcblxuICAgIGZldGNoQ2hhdE1lbWJlckFwaSgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0Q2hhdE1lbWJlcnMocmVzLmRhdGEpO1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBmZXRjaENoYXRBcGkoKS50aGVuKChjaGF0cmVzKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VySWQgPSBjaGF0cmVzLmRhdGFbMF0udXNlcnMuZmluZChcbiAgICAgICAgICAgICh4KSA9PiB4ICE9PSBjdXJyZW50VXNlcklkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBJc3NlbGVjdGVkVXNlciA9IHJlcy5kYXRhLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICAgICAgICBzZXRTZWxlY3RlZFVzZXIoSXNzZWxlY3RlZFVzZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBnZXQgaW5pdGlhbCBjaGF0IGJldHdlZW4gdHdvIGNoYXQgdXNlcnNcbiAgICBmZXRjaENoYXRBcGkoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldENoYXRzKHJlcy5kYXRhKTtcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgZmV0Y2hDaGF0TWVtYmVyQXBpKCkudGhlbigobWVtYmVycmVzKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VySWQgPSByZXMuZGF0YVswXS51c2Vycy5maW5kKFxuICAgICAgICAgICAgKHgpID0+IHggIT09IGN1cnJlbnRVc2VySWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IElzc2VsZWN0ZWRVc2VyID0gbWVtYmVycmVzLmRhdGEuZmluZChcbiAgICAgICAgICAgICh4KSA9PiB4LmlkID09PSBzZWxlY3RlZFVzZXJJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRVc2VyKElzc2VsZWN0ZWRVc2VyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBjaGF0IHdpdGggdXNlciBmaXJzdCB0aW1lXG4gIGNvbnN0IGNyZWF0ZUNoYXQgPSAoY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWQsIGNoYXRzLCBvbmxpbmVTdGF0dXMpID0+IHtcbiAgICBsZXQgY29udmVyc2F0aW9uID0ge1xuICAgICAgaWQ6IGNoYXRzLmxlbmd0aCArIDEsXG4gICAgICB1c2VyczogW2N1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkXSxcbiAgICAgIGxhc3RNZXNzYWdlVGltZTogXCItXCIsXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBzdGlja2VyczogW10sXG4gICAgICBvbmxpbmVTdGF0dXM6IG9ubGluZVN0YXR1cyxcbiAgICB9O1xuXG4gICAgY2hhdHMuc3BsaWNlKDAsIDAsIGNvbnZlcnNhdGlvbik7IC8vd2UgYXJlIGFkZGluZyBjb252ZXJzaW9uIGF0IDB0aCBpbmRleFxuICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRNZW1iZXJzLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICBzZXRDaGF0cyhbLi4uY2hhdHNdKTtcbiAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgfTtcblxuICAvLyBjaGFuZ2UgZXhpc3RpbmcgY2hhdCBiZXR3ZWVuIHR3byBjaGF0IHVzZXJzXG4gIGNvbnN0IGNoYW5nZUNoYXQgPSAodXNlcklkKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdE1lbWJlcnMuZmluZCgoeCkgPT4geC5pZCA9PT0gdXNlcklkKTtcbiAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgfTtcblxuICAvLyBzZW5kIG1lc3NhZ2UgdG8gc2VsZWN0ZWQgY2hhdCB1c2Vyc1xuICBjb25zdCBzZW5kTWVzc2FnZSA9IChjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZCwgbWVzc2FnZUlucHV0LCBjaGF0cykgPT4ge1xuICAgIGxldCBjaGF0ID0gY2hhdHMuZmluZChcbiAgICAgICh4KSA9PiB4LnVzZXJzLmluY2x1ZGVzKGN1cnJlbnRVc2VySWQpICYmIHgudXNlcnMuaW5jbHVkZXMoc2VsZWN0ZWRVc2VySWQpXG4gICAgKTsgLy8gZmluZCBzZWxlY3RlZCBjaGF0IFVzZXIgSWRcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRpbWUgPSBub3cuZ2V0SG91cnMoKSArIFwiOlwiICsgbm93LmdldE1pbnV0ZXMoKTtcbiAgICBpZiAoY2hhdCkge1xuICAgICAgY2hhdC5tZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgc2VuZGVyOiBjdXJyZW50VXNlcklkLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICB0ZXh0OiBtZXNzYWdlSW5wdXQsXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY2hhdC5sYXN0TWVzc2FnZVRpbWUgPSB0aW1lO1xuICAgICAgbGV0IGNoYXRzX2RhdGEgPSBjaGF0cy5maWx0ZXIoKHgpID0+IHguaWQgIT09IGNoYXQuaWQpO1xuICAgICAgY2hhdHNfZGF0YS5zcGxpY2UoMCwgMCwgY2hhdCk7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjaGF0TWVtYmVycy5maW5kKCh4KSA9PiB4LmlkID09PSBzZWxlY3RlZFVzZXJJZCk7XG4gICAgICBzZXRDaGF0cyhbLi4uY2hhdHNdKTsgLy8gdXBkYXRlIGNoYXRzIG1lc3NhZ2VzXG4gICAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmVwbHkgbWVzc2FnZSB0byBzZWxlY3RlZCBjaGF0IHVzZXJzXG4gIGNvbnN0IHJlcGx5TWVzc2FnZSA9IChjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZCwgcmVwbHlNZXNzYWdlLCBjaGF0cykgPT4ge1xuICAgIGxldCBjaGF0ID0gY2hhdHMuZmluZChcbiAgICAgICh4KSA9PiB4LnVzZXJzLmluY2x1ZGVzKGN1cnJlbnRVc2VySWQpICYmIHgudXNlcnMuaW5jbHVkZXMoc2VsZWN0ZWRVc2VySWQpXG4gICAgKTsgLy8gZmluZCBzZWxlY3RlZCBjaGF0IFVzZXIgSWRcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRpbWUgPSBub3cuZ2V0SG91cnMoKSArIFwiOlwiICsgbm93LmdldE1pbnV0ZXMoKTtcbiAgICBpZiAoY2hhdCkge1xuICAgICAgY2hhdC5tZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgc2VuZGVyOiBzZWxlY3RlZFVzZXJJZCxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgdGV4dDogcmVwbHlNZXNzYWdlLFxuICAgICAgICByZWFkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjaGF0Lmxhc3RNZXNzYWdlVGltZSA9IHRpbWU7XG4gICAgICBjaGF0Lm9ubGluZSA9IFwiXCI7XG4gICAgICBsZXQgY2hhdHNfZGF0YSA9IGNoYXRzLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gY2hhdC5pZCk7XG4gICAgICBjaGF0c19kYXRhLnNwbGljZSgwLCAwLCBjaGF0KTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRNZW1iZXJzLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICAgIHNlbGVjdGVkVXNlci5vbmxpbmVTdGF0dXMgPSBcIm9ubGluZVwiOyAvLyBjaGF0IHVzZXIgcmVwbHkgdGhlIG1lc3NhZ2UgdGhlbiBzZXQgc2VsZWN0ZWQgY2hhdCB1c2VyICBzdGF0dXMgdG8gXCJvbmxpbmVcIlxuICAgICAgc2V0Q2hhdHMoWy4uLmNoYXRzXSk7IC8vIHVwZGF0ZSBjaGF0cyBtZXNzYWdlc1xuICAgICAgc2V0U2VsZWN0ZWRVc2VyKHNlbGVjdGVkVXNlcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIHNlbmQgc3RpY2tlcnMgb3IgaW1hZ2VzXG4gIGNvbnN0IHNlbmRJbWFnZXMgPSAoY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWQsIGltYWdlLCBjaGF0cykgPT4ge1xuICAgIGxldCBjaGF0ID0gY2hhdHMuZmluZChcbiAgICAgICh4KSA9PiB4LnVzZXJzLmluY2x1ZGVzKGN1cnJlbnRVc2VySWQpICYmIHgudXNlcnMuaW5jbHVkZXMoc2VsZWN0ZWRVc2VySWQpXG4gICAgKTsgLy8gZmluZCBzZWxlY3RlZCBjaGF0IFVzZXIgSWRcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRpbWUgPSBub3cuZ2V0SG91cnMoKSArIFwiOlwiICsgbm93LmdldE1pbnV0ZXMoKTtcbiAgICBpZiAoY2hhdCkge1xuICAgICAgY2hhdC5zdGlja2Vycy5wdXNoKHtcbiAgICAgICAgc2VuZGVyOiBjdXJyZW50VXNlcklkLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICBzdGlja2VyczogaW1hZ2UsXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY2hhdC5sYXN0TWVzc2FnZVRpbWUgPSB0aW1lO1xuICAgICAgY2hhdC5vbmxpbmUgPSBcIlwiO1xuICAgICAgbGV0IGNoYXRzX2RhdGEgPSBjaGF0cy5maWx0ZXIoKHgpID0+IHguaWQgIT09IGNoYXQuaWQpO1xuICAgICAgY2hhdHNfZGF0YS5zcGxpY2UoMCwgMCwgY2hhdCk7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjaGF0TWVtYmVycy5maW5kKCh4KSA9PiB4LmlkID09PSBzZWxlY3RlZFVzZXJJZCk7XG4gICAgICBzZXRDaGF0cyhbLi4uY2hhdHNdKTsgLy8gdXBkYXRlIGNoYXRzIG1lc3NhZ2VzXG4gICAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gd2hlbiBjaGF0IHVzZXIgcmVwbGllZCB0byBvdXIgbWVzc2FnZSBleGlzdGluZyB0eWVwaW5nIGxvYWRlclxuICBjb25zdCB0eXBpbmdNZXNzYWdlID0gKHR5cGVpbmcpID0+IHtcbiAgICBzZXRJc1R5cGVpbmcodHlwZWluZyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY2hhdE1lbWJlcnM6IGNoYXRNZW1iZXJzLFxuICAgICAgICBjaGF0czogY2hhdHMsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBjaGF0TWVtYmVyc1swXSxcbiAgICAgICAgc2VsZWN0ZWRVc2VyOiBzZWxlY3RlZFVzZXIsXG4gICAgICAgIGlzVHllcGluZzogaXNUeWVwaW5nLFxuICAgICAgICBjaGFuZ2VDaGF0OiBjaGFuZ2VDaGF0LFxuICAgICAgICBjcmVhdGVDaGF0OiBjcmVhdGVDaGF0LFxuICAgICAgICBzZW5kTWVzc2FnZTogc2VuZE1lc3NhZ2UsXG4gICAgICAgIHJlcGx5TWVzc2FnZTogcmVwbHlNZXNzYWdlLFxuICAgICAgICBzZW5kSW1hZ2VzOiBzZW5kSW1hZ2VzLFxuICAgICAgICB0eXBpbmdNZXNzYWdlOiB0eXBpbmdNZXNzYWdlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFByb3ZpZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2hhdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7IC8vIGNyZWF0ZSBjb250ZXh0IGZvciBjaGF0IGFwcFxuXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGV4dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IEN1c3RvbWl6ZXJQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXHRjb25zdCBbbW9iaWxlTWVudSwgc2V0TW9iaWxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdC8vIHNldCBzaWRlYmFyIGJhY2tncm91bmQgbGF5b3V0XG5cdGNvbnN0IGFkZFNpZGViYXJCYWNrZ3JvdW5kTGF5b3V0ID0gKGUsIGxheW91dCkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRoZW1lLWxheW91dC10eXBlIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9KTtcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGBzaWRlYmFyLWFjdGl2ZSBtYWluLXBhZ2UgJHtsYXlvdXR9YDtcblx0XHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0fTtcblxuXHQvLyBzZXQgbGF5b3V0IHRoZW1lIHRvIExUUiBvciBSVExcblx0Y29uc3QgYWRkTGF5b3V0VHlwZSA9IChsYXlvdXRUeXBlKSA9PiB7XG5cdFx0aWYgKGxheW91dFR5cGUpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gYHNpZGViYXItYWN0aXZlIG1haW4tcGFnZSBydGwgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcblx0XHRcdFx0XCJsYXlvdXRfbW9kZVwiXG5cdFx0XHQpfWA7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJ0bC1zZXR0aW5nXCIpLmNsYXNzTmFtZSA9XG5cdFx0XHRcdFwicnRsLXNldHRpbmcgaWNvbi1idG4gYnRuLXByaW1hcnkgcnRsXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gYHNpZGViYXItYWN0aXZlIG1haW4tcGFnZSAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFxuXHRcdFx0XHRcImxheW91dF9tb2RlXCJcblx0XHRcdCl9YDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucnRsLXNldHRpbmdcIikuY2xhc3NOYW1lID1cblx0XHRcdFx0XCJydGwtc2V0dGluZyBpY29uLWJ0biBidG4tcHJpbWFyeVwiO1xuXHRcdH1cblx0fTtcblxuXHQvLyBzZXQgbGVmdCBzaWRlYmFyIHRvIG9wZW4vY2xvc2Vcblx0Y29uc3QgYWRkU2lkZWJhclR5cGVzID0gKGUsIHNpZGViYXJUeXBlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci10eXBlIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9KTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbmF2XCIpLmNsYXNzTmFtZSA9IFwibWFpbi1uYXYgXCIgKyBzaWRlYmFyVHlwZTtcblx0XHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0fTtcblxuXHQvLyBzZXQgdGhlbWVzIHByaW1hcnkgY29sb3JzXG5cdGNvbnN0IGFkZFRoZW1lQ29sb3JzID0gKGUsIGNvbG9yKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvcnMgbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHRcdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JcIikuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgL2Fzc2V0cy9jc3MvJHtjb2xvcn0uY3NzYCk7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IGNvbG9yIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JcIik7XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvclwiLCBjb2xvcik7XG5cdH07XG5cblx0Ly8gc2V0IHdhbGxwYXBlcnMgZm9yIGNoYXRzIGNvbnRlbnRcblx0Y29uc3QgYWRkQmFja2dyb3VuZFdhbGxwYXBlciA9IChlLCB3YWxscGFwZXIpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndhbGxwYXBlciBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cblx0XHRpZiAod2FsbHBhcGVyID09PSAwKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcIi53YWxscGFwZXJzXCJcblx0XHRcdCkuc3R5bGUgPSBgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAlIDAlLCAwJSAxMDAlLCBmcm9tKHJnYigyMzksIDI0NywgMjU0KSkpOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiB1bnNldDtgO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcIi53YWxscGFwZXJzXCJcblx0XHRcdCkuc3R5bGUgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YC9hc3NldHMvaW1hZ2VzL3dhbGxwYXBlci8ke3dhbGxwYXBlcn0uanBnYH0pIDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGJhY2tncm91bmQtYmxlbmQtbW9kZTogdW5zZXRgO1xuXHRcdH1cblx0XHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0fTtcblxuXHQvLyBzZXQgd2FsbHBhcGVycyBhcyBncmFkaWVudHMgZm9yIGNoYXRzIGNvbnRlbnRcblx0Y29uc3QgYWRkQmFja2dyb3VuZFdhbGxwYXBlckdyYWRpZW50cyA9IChncmFkaWVudCkgPT4ge1xuXHRcdC8vc2V0QmFja2dyb3VuZFdhbGxwYXBlckdyYWRpZW50cyhncmFkaWVudClcblx0fTtcblxuXHQvL3NldCByZXNwb25zaXZlIGluIG1lc3NlbmdlciBwYWdlXG5cdGNvbnN0IGhhbmRsZUNsaWNrUmlnaHQgPSAocmVzcG9uc2UpID0+IHtcblx0XHRpZiAocmVzcG9uc2UpIHtcblx0XHRcdHNldE1vYmlsZU1lbnUoIXJlc3BvbnNlKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRNb2JpbGVNZW51KCFyZXNwb25zZSk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtbWVudVwiKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Q29udGV4dC5Qcm92aWRlclxuXHRcdFx0dmFsdWU9e3tcblx0XHRcdFx0bW9iaWxlTWVudTogbW9iaWxlTWVudSxcblx0XHRcdFx0aGFuZGxlQ2xpY2tSaWdodDogaGFuZGxlQ2xpY2tSaWdodCxcblx0XHRcdFx0YWRkU2lkZWJhckJhY2tncm91bmRMYXlvdXQ6IGFkZFNpZGViYXJCYWNrZ3JvdW5kTGF5b3V0LFxuXHRcdFx0XHRhZGRMYXlvdXRUeXBlOiBhZGRMYXlvdXRUeXBlLFxuXHRcdFx0XHRhZGRTaWRlYmFyVHlwZXM6IGFkZFNpZGViYXJUeXBlcyxcblx0XHRcdFx0YWRkVGhlbWVDb2xvcnM6IGFkZFRoZW1lQ29sb3JzLFxuXHRcdFx0XHRhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyOiBhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyLFxuXHRcdFx0XHRhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyR3JhZGllbnRzOiBhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyR3JhZGllbnRzLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0PC9Db250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplclByb3ZpZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ3VzdG9taXplckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7IC8vIGNyZWF0ZSBhIGNvbnRleHQgZm9yIHRoZW1lIGN1c3RvbWl6ZXJcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplckNvbnRleHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9zY3NzL2NvbG9yLnNjc3NcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgQ2hhdENvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vaGVscGVycy9jaGF0Q29udGV4dC9jaGF0Q3R4XCI7XG5pbXBvcnQgQ3VzdG9taXplckNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vaGVscGVycy9jdXN0b21pemVyQ29udGV4dC9jdXN0b21pemVyQ3R4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmUvc3RvcmVcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwQ29tcG9uZW50KHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWFjdGl2ZVwiKTtcblxuICAgIC8vIFBhZ2UgTG9hZGVyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgIH0sIDE1MDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNoaXRjaGF0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ2hpdGNoYXRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiQ2hpdGNoYXRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkNoaXRjaGF0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgdHlwZT1cInRleHQvc2Nzc1wiXG4gICAgICAgICAgaHJlZj1cIlwiXG4gICAgICAgICAgbWVkaWE9XCJzY3JlZW5cIlxuICAgICAgICAgIGlkPVwiY29sb3JcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCw3MDAsODAwJmFtcDtkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNjAwJmFtcDtkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6MzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGksOTAwLDkwMGkmYW1wO2Rpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7bG9hZGVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGl0Y2hhdC1sb2FkZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvL2xvZ29fYmlnLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8aDM+U2ltcGxlLCBzZWN1cmUgbWVzc2FnaW5nIGZvciBmYXN0IGNvbm5lY3QgdG8gd29ybGQuLiE8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8Q3VzdG9taXplckNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgIDxDaGF0Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NoYXRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPC9DdXN0b21pemVyQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cbiIsImV4cG9ydCBjb25zdCBTRVRfVVNFUiA9IFwiU0VUX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9VU0VSX1NUQVRVUyA9IFwiU0VUX1VTRVJfU1RBVFVTXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQ0xJRU5UID0gXCJTRVRfQ0xJRU5UXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9FUlJPUiA9IFwiTE9HSU5fRVJST1JcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOX0xPRElORyA9IFwiTE9HSU5fTE9ESU5HXCI7XHJcbmV4cG9ydCBjb25zdCBPTl9MT0dPVVQgPSBcIk9OX0xPR09VVFwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0FDVElWRV9UQUIgPSBcIlNFVF9BQ1RJVkVfVEFCXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfVVNFUlMgPSBcIlNFVF9VU0VSU1wiO1xyXG5leHBvcnQgY29uc3QgU0VUX0NIQVRfV0lUSCA9IFwiU0VUX0NIQVRfV0lUSFwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0NIQVRFRF9VU0VSUyA9IFwiU0VUX0NIQVRFRF9VU0VSU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBVF9DT01QT05FTlRfVU5NT1VOVCA9IFwiQ0hBVF9DT01QT05FTlRfVU5NT1VOVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX05FV19VU0VSID0gXCJBRERfTkVXX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSID0gXCJSRU1PVkVfVVNFUlwiO1xyXG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGN1cnJlbnRVc2VyOiBudWxsLFxyXG4gIGFjY291bnRJZDogbnVsbCxcclxuICB1c2VyU3RhdHVzOiBcInVuYXZhaWxhYmxlXCIsXHJcbiAgY2xpZW50OiBudWxsLFxyXG4gIGxvZ2luRXJyb3JzOiBbXSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBhY3RpdmVUYWI6IFwiY2hhdFwiLFxyXG4gIHVzZXJzOiBbXSxcclxuICBjaGF0V2l0aDogXCJBXCIsXHJcbiAgbmV3Q29udGFjdDogXCJjb250YWN0XCIsXHJcbiAgY29tcG9uZW50VW5tb3VudDogbnVsbCxcclxuICBjaGF0ZWRVc2VyczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZmlyc3RfbmFtZTogXCJBXCIsXHJcbiAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgbWVzZzogXCJob3cgYXJlIHlvdVwiLFxyXG4gICAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcclxuICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBsYXN0TWVzc2FnZUF0OiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBmaXJzdF9uYW1lOiBcIkJcIixcclxuICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBtZXNnOiBcImhvdyBhcmUgeW91XCIsXHJcbiAgICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxyXG4gICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzo1NlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiQ1wiLFxyXG4gICAgICBzdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIG1lc2c6IFwiaG93IGFyZSB5b3VcIixcclxuICAgICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXHJcbiAgICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgbGFzdE1lc3NhZ2VBdDogXCIyMDIxLTA4LTA3IDA5OjA0OjEwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgZmlyc3RfbmFtZTogXCJEXCIsXHJcbiAgICAgIHN0YXR1czogXCJvbmxpbmVcIixcclxuICAgICAgbWVzZzogXCJob3cgYXJlIHlvdVwiLFxyXG4gICAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcclxuICAgICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBsYXN0TWVzc2FnZUF0OiBcIjIwMjEtMDgtMDcgMDk6MDU6MTBcIixcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuY29uc3QgdXNlcl9yZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVJfU1RBVFVTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJTdGF0dXM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0xJRU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ2luRXJyb3JzOiBbYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9MT0RJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQUNUSVZFX1RBQjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhY3RpdmVUYWI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcnM6IFthY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DSEFUX1dJVEg6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hhdFdpdGg6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVEVEX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5ld0NvbnRhY3Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0hBVF9DT01QT05FTlRfVU5NT1VOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wb25lbnRVbm1vdW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkFERF9ORVdfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuY2hhdGVkVXNlcnNdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRU1PVkVfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IHN0YXRlLmNoYXRlZFVzZXJzLmZpbHRlcihcclxuICAgICAgICAgICh1c2VyKSA9PiB1c2VyLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgdXNlcjogdXNlcl9yZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCByZWR1eFJlc2V0IGZyb20gXCJyZWR1eC1yZXNldFwiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgcm9vdFJlZHVjZXIsXHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyhyZWR1eFJlc2V0KCksIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcmVzZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==