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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2hhdENvbnRleHQvY2hhdEN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2NoYXRDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY3VzdG9taXplckNvbnRleHQvY3VzdG9taXplckN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2N1c3RvbWl6ZXJDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcmVzZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbImZldGNoQ2hhdE1lbWJlckFwaSIsImF4aW9zIiwiZ2V0IiwiZmV0Y2hDaGF0QXBpIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiQ2hhdFByb3ZpZGVyIiwicHJvcHMiLCJjaGF0TWVtYmVycyIsInNldENoYXRNZW1iZXJzIiwidXNlU3RhdGUiLCJjaGF0cyIsInNldENoYXRzIiwiY3VycmVudFVzZXJJZCIsInNlbGVjdGVkVXNlciIsInNldFNlbGVjdGVkVXNlciIsImlkIiwibmFtZSIsInRodW1iIiwic3RhdHVzIiwibWVzZyIsImxhc3RTZWVuRGF0ZSIsIm9ubGluZVN0YXR1cyIsInR5cGluZyIsImlzVHllcGluZyIsInNldElzVHlwZWluZyIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2hhdHJlcyIsInNlbGVjdGVkVXNlcklkIiwidXNlcnMiLCJmaW5kIiwieCIsIklzc2VsZWN0ZWRVc2VyIiwibWVtYmVycmVzIiwiY3JlYXRlQ2hhdCIsImNvbnZlcnNhdGlvbiIsImxlbmd0aCIsImxhc3RNZXNzYWdlVGltZSIsIm1lc3NhZ2VzIiwic3RpY2tlcnMiLCJzcGxpY2UiLCJjaGFuZ2VDaGF0IiwidXNlcklkIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlSW5wdXQiLCJjaGF0IiwiaW5jbHVkZXMiLCJub3ciLCJEYXRlIiwidGltZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsInB1c2giLCJzZW5kZXIiLCJ0ZXh0IiwiY2hhdHNfZGF0YSIsImZpbHRlciIsInJlcGx5TWVzc2FnZSIsInJlYWQiLCJvbmxpbmUiLCJzZW5kSW1hZ2VzIiwiaW1hZ2UiLCJ0eXBpbmdNZXNzYWdlIiwidHlwZWluZyIsImN1cnJlbnRVc2VyIiwiY2hpbGRyZW4iLCJDaGF0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDdXN0b21pemVyUHJvdmlkZXIiLCJtb2JpbGVNZW51Iiwic2V0TW9iaWxlTWVudSIsImFkZFNpZGViYXJCYWNrZ3JvdW5kTGF5b3V0IiwiZSIsImxheW91dCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJib2R5IiwiY2xhc3NOYW1lIiwiY3VycmVudFRhcmdldCIsImFkZCIsImFkZExheW91dFR5cGUiLCJsYXlvdXRUeXBlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRTaWRlYmFyVHlwZXMiLCJzaWRlYmFyVHlwZSIsImFkZFRoZW1lQ29sb3JzIiwiY29sb3IiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRJdGVtIiwiYWRkQmFja2dyb3VuZFdhbGxwYXBlciIsIndhbGxwYXBlciIsInN0eWxlIiwiYWRkQmFja2dyb3VuZFdhbGxwYXBlckdyYWRpZW50cyIsImdyYWRpZW50IiwiaGFuZGxlQ2xpY2tSaWdodCIsInJlc3BvbnNlIiwiQ3VzdG9taXplckNvbnRleHQiLCJNeUFwcENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWRlciIsInNldExvYWRlciIsInNldFRpbWVvdXQiLCJzdG9yZSIsIlNFVF9VU0VSIiwiU0VUX1VTRVJfU1RBVFVTIiwiU0VUX0NMSUVOVCIsIkxPR0lOX0VSUk9SIiwiTE9HSU5fTE9ESU5HIiwiT05fTE9HT1VUIiwiU0VUX0FDVElWRV9UQUIiLCJTRVRfVVNFUlMiLCJTRVRfQ0hBVF9XSVRIIiwiU0VUX0NIQVRFRF9VU0VSUyIsIkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQiLCJBRERfTkVXX1VTRVIiLCJSRU1PVkVfVVNFUiIsIkxBU1RfTUVTU0FHRV9USU1FIiwiaW5pdGlhbFN0YXRlIiwiYWNjb3VudElkIiwidXNlclN0YXR1cyIsImNsaWVudCIsImxvZ2luRXJyb3JzIiwibG9hZGluZyIsImFjdGl2ZVRhYiIsImNoYXRXaXRoIiwibmV3Q29udGFjdCIsImNvbXBvbmVudFVubW91bnQiLCJjaGF0ZWRVc2VycyIsImZpcnN0X25hbWUiLCJsYXN0TWVzc2FnZUF0IiwidXNlcl9yZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwidXNlciIsInVwZGF0ZSIsIiRzZXQiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlZHV4UmVzZXQiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLGtCQUFrQixHQUFHLE1BQU07QUFDdEMsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUFXLHNCQUFYLENBQVA7QUFDRCxDQUZN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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNckMsS0FBSyxHQUFHdUMseURBQVcsQ0FDdkJGLHVEQUR1QixFQUV2Qkcsb0ZBQW1CLENBQUNDLGtEQUFVLEVBQVgsRUFBZUMsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBOUIsQ0FGSSxDQUF6QjtBQUllM0Msb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDaGF0TWVtYmVyQXBpID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL2NoYXRNZW1iZXIuanNvbmApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2hhdEFwaSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9jaGF0LmNoYXRzLmpzb25gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiaHR0cHM6Ly9rYXJ0aGlrLm15c21hcnRwYngub3JnOjg0NDMvdjIvXCIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZmV0Y2hDaGF0TWVtYmVyQXBpLCBmZXRjaENoYXRBcGkgfSBmcm9tIFwiLi4vLi4vYXBpL2luZGV4XCI7XG5cbmNvbnN0IENoYXRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY2hhdE1lbWJlcnMsIHNldENoYXRNZW1iZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGN1cnJlbnRVc2VySWQgPSAwO1xuICBjb25zdCBbc2VsZWN0ZWRVc2VyLCBzZXRTZWxlY3RlZFVzZXJdID0gdXNlU3RhdGUoe1xuICAgIGlkOiAwLFxuICAgIG5hbWU6IFwiSm9ueSBMeW5ldGluXCIsXG4gICAgdGh1bWI6IFwiY29udGFjdC8yLmpwZ1wiLFxuICAgIHN0YXR1czogXCI4XCIsXG4gICAgbWVzZzogXCJUeXBpbmcuLi4uLi4uLi4uLi4uLi4uXCIsXG4gICAgbGFzdFNlZW5EYXRlOiBcIjMwLzExLzE5XCIsXG4gICAgb25saW5lU3RhdHVzOiBcIm9ubGluZVwiLFxuICAgIHR5cGluZzogdHJ1ZSxcbiAgfSk7XG4gIGNvbnN0IFtpc1R5ZXBpbmcsIHNldElzVHlwZWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBnZXQgYWxsIGluaXRpYWwgY2hhdCB1c2Vyc1xuXG4gICAgZmV0Y2hDaGF0TWVtYmVyQXBpKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRDaGF0TWVtYmVycyhyZXMuZGF0YSk7XG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIGZldGNoQ2hhdEFwaSgpLnRoZW4oKGNoYXRyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFVzZXJJZCA9IGNoYXRyZXMuZGF0YVswXS51c2Vycy5maW5kKFxuICAgICAgICAgICAgKHgpID0+IHggIT09IGN1cnJlbnRVc2VySWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IElzc2VsZWN0ZWRVc2VyID0gcmVzLmRhdGEuZmluZCgoeCkgPT4geC5pZCA9PT0gc2VsZWN0ZWRVc2VySWQpO1xuICAgICAgICAgIHNldFNlbGVjdGVkVXNlcihJc3NlbGVjdGVkVXNlcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGdldCBpbml0aWFsIGNoYXQgYmV0d2VlbiB0d28gY2hhdCB1c2Vyc1xuICAgIGZldGNoQ2hhdEFwaSgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0Q2hhdHMocmVzLmRhdGEpO1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBmZXRjaENoYXRNZW1iZXJBcGkoKS50aGVuKChtZW1iZXJyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFVzZXJJZCA9IHJlcy5kYXRhWzBdLnVzZXJzLmZpbmQoXG4gICAgICAgICAgICAoeCkgPT4geCAhPT0gY3VycmVudFVzZXJJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgSXNzZWxlY3RlZFVzZXIgPSBtZW1iZXJyZXMuZGF0YS5maW5kKFxuICAgICAgICAgICAgKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRTZWxlY3RlZFVzZXIoSXNzZWxlY3RlZFVzZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIGNoYXQgd2l0aCB1c2VyIGZpcnN0IHRpbWVcbiAgY29uc3QgY3JlYXRlQ2hhdCA9IChjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZCwgY2hhdHMsIG9ubGluZVN0YXR1cykgPT4ge1xuICAgIGxldCBjb252ZXJzYXRpb24gPSB7XG4gICAgICBpZDogY2hhdHMubGVuZ3RoICsgMSxcbiAgICAgIHVzZXJzOiBbY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWRdLFxuICAgICAgbGFzdE1lc3NhZ2VUaW1lOiBcIi1cIixcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIHN0aWNrZXJzOiBbXSxcbiAgICAgIG9ubGluZVN0YXR1czogb25saW5lU3RhdHVzLFxuICAgIH07XG5cbiAgICBjaGF0cy5zcGxpY2UoMCwgMCwgY29udmVyc2F0aW9uKTsgLy93ZSBhcmUgYWRkaW5nIGNvbnZlcnNpb24gYXQgMHRoIGluZGV4XG4gICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdE1lbWJlcnMuZmluZCgoeCkgPT4geC5pZCA9PT0gc2VsZWN0ZWRVc2VySWQpO1xuICAgIHNldENoYXRzKFsuLi5jaGF0c10pO1xuICAgIHNldFNlbGVjdGVkVXNlcihzZWxlY3RlZFVzZXIpO1xuICB9O1xuXG4gIC8vIGNoYW5nZSBleGlzdGluZyBjaGF0IGJldHdlZW4gdHdvIGNoYXQgdXNlcnNcbiAgY29uc3QgY2hhbmdlQ2hhdCA9ICh1c2VySWQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjaGF0TWVtYmVycy5maW5kKCh4KSA9PiB4LmlkID09PSB1c2VySWQpO1xuICAgIHNldFNlbGVjdGVkVXNlcihzZWxlY3RlZFVzZXIpO1xuICB9O1xuXG4gIC8vIHNlbmQgbWVzc2FnZSB0byBzZWxlY3RlZCBjaGF0IHVzZXJzXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGN1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkLCBtZXNzYWdlSW5wdXQsIGNoYXRzKSA9PiB7XG4gICAgbGV0IGNoYXQgPSBjaGF0cy5maW5kKFxuICAgICAgKHgpID0+IHgudXNlcnMuaW5jbHVkZXMoY3VycmVudFVzZXJJZCkgJiYgeC51c2Vycy5pbmNsdWRlcyhzZWxlY3RlZFVzZXJJZClcbiAgICApOyAvLyBmaW5kIHNlbGVjdGVkIGNoYXQgVXNlciBJZFxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGltZSA9IG5vdy5nZXRIb3VycygpICsgXCI6XCIgKyBub3cuZ2V0TWludXRlcygpO1xuICAgIGlmIChjaGF0KSB7XG4gICAgICBjaGF0Lm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBzZW5kZXI6IGN1cnJlbnRVc2VySWQsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIHRleHQ6IG1lc3NhZ2VJbnB1dCxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjaGF0Lmxhc3RNZXNzYWdlVGltZSA9IHRpbWU7XG4gICAgICBsZXQgY2hhdHNfZGF0YSA9IGNoYXRzLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gY2hhdC5pZCk7XG4gICAgICBjaGF0c19kYXRhLnNwbGljZSgwLCAwLCBjaGF0KTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRNZW1iZXJzLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICAgIHNldENoYXRzKFsuLi5jaGF0c10pOyAvLyB1cGRhdGUgY2hhdHMgbWVzc2FnZXNcbiAgICAgIHNldFNlbGVjdGVkVXNlcihzZWxlY3RlZFVzZXIpO1xuICAgIH1cbiAgfTtcblxuICAvLyByZXBseSBtZXNzYWdlIHRvIHNlbGVjdGVkIGNoYXQgdXNlcnNcbiAgY29uc3QgcmVwbHlNZXNzYWdlID0gKGN1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkLCByZXBseU1lc3NhZ2UsIGNoYXRzKSA9PiB7XG4gICAgbGV0IGNoYXQgPSBjaGF0cy5maW5kKFxuICAgICAgKHgpID0+IHgudXNlcnMuaW5jbHVkZXMoY3VycmVudFVzZXJJZCkgJiYgeC51c2Vycy5pbmNsdWRlcyhzZWxlY3RlZFVzZXJJZClcbiAgICApOyAvLyBmaW5kIHNlbGVjdGVkIGNoYXQgVXNlciBJZFxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGltZSA9IG5vdy5nZXRIb3VycygpICsgXCI6XCIgKyBub3cuZ2V0TWludXRlcygpO1xuICAgIGlmIChjaGF0KSB7XG4gICAgICBjaGF0Lm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBzZW5kZXI6IHNlbGVjdGVkVXNlcklkLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICB0ZXh0OiByZXBseU1lc3NhZ2UsXG4gICAgICAgIHJlYWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNoYXQubGFzdE1lc3NhZ2VUaW1lID0gdGltZTtcbiAgICAgIGNoYXQub25saW5lID0gXCJcIjtcbiAgICAgIGxldCBjaGF0c19kYXRhID0gY2hhdHMuZmlsdGVyKCh4KSA9PiB4LmlkICE9PSBjaGF0LmlkKTtcbiAgICAgIGNoYXRzX2RhdGEuc3BsaWNlKDAsIDAsIGNoYXQpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdE1lbWJlcnMuZmluZCgoeCkgPT4geC5pZCA9PT0gc2VsZWN0ZWRVc2VySWQpO1xuICAgICAgc2VsZWN0ZWRVc2VyLm9ubGluZVN0YXR1cyA9IFwib25saW5lXCI7IC8vIGNoYXQgdXNlciByZXBseSB0aGUgbWVzc2FnZSB0aGVuIHNldCBzZWxlY3RlZCBjaGF0IHVzZXIgIHN0YXR1cyB0byBcIm9ubGluZVwiXG4gICAgICBzZXRDaGF0cyhbLi4uY2hhdHNdKTsgLy8gdXBkYXRlIGNoYXRzIG1lc3NhZ2VzXG4gICAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gc2VuZCBzdGlja2VycyBvciBpbWFnZXNcbiAgY29uc3Qgc2VuZEltYWdlcyA9IChjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZCwgaW1hZ2UsIGNoYXRzKSA9PiB7XG4gICAgbGV0IGNoYXQgPSBjaGF0cy5maW5kKFxuICAgICAgKHgpID0+IHgudXNlcnMuaW5jbHVkZXMoY3VycmVudFVzZXJJZCkgJiYgeC51c2Vycy5pbmNsdWRlcyhzZWxlY3RlZFVzZXJJZClcbiAgICApOyAvLyBmaW5kIHNlbGVjdGVkIGNoYXQgVXNlciBJZFxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGltZSA9IG5vdy5nZXRIb3VycygpICsgXCI6XCIgKyBub3cuZ2V0TWludXRlcygpO1xuICAgIGlmIChjaGF0KSB7XG4gICAgICBjaGF0LnN0aWNrZXJzLnB1c2goe1xuICAgICAgICBzZW5kZXI6IGN1cnJlbnRVc2VySWQsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIHN0aWNrZXJzOiBpbWFnZSxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjaGF0Lmxhc3RNZXNzYWdlVGltZSA9IHRpbWU7XG4gICAgICBjaGF0Lm9ubGluZSA9IFwiXCI7XG4gICAgICBsZXQgY2hhdHNfZGF0YSA9IGNoYXRzLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gY2hhdC5pZCk7XG4gICAgICBjaGF0c19kYXRhLnNwbGljZSgwLCAwLCBjaGF0KTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRNZW1iZXJzLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICAgIHNldENoYXRzKFsuLi5jaGF0c10pOyAvLyB1cGRhdGUgY2hhdHMgbWVzc2FnZXNcbiAgICAgIHNldFNlbGVjdGVkVXNlcihzZWxlY3RlZFVzZXIpO1xuICAgIH1cbiAgfTtcblxuICAvLyB3aGVuIGNoYXQgdXNlciByZXBsaWVkIHRvIG91ciBtZXNzYWdlIGV4aXN0aW5nIHR5ZXBpbmcgbG9hZGVyXG4gIGNvbnN0IHR5cGluZ01lc3NhZ2UgPSAodHlwZWluZykgPT4ge1xuICAgIHNldElzVHlwZWluZyh0eXBlaW5nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjaGF0TWVtYmVyczogY2hhdE1lbWJlcnMsXG4gICAgICAgIGNoYXRzOiBjaGF0cyxcbiAgICAgICAgY3VycmVudFVzZXI6IGNoYXRNZW1iZXJzWzBdLFxuICAgICAgICBzZWxlY3RlZFVzZXI6IHNlbGVjdGVkVXNlcixcbiAgICAgICAgaXNUeWVwaW5nOiBpc1R5ZXBpbmcsXG4gICAgICAgIGNoYW5nZUNoYXQ6IGNoYW5nZUNoYXQsXG4gICAgICAgIGNyZWF0ZUNoYXQ6IGNyZWF0ZUNoYXQsXG4gICAgICAgIHNlbmRNZXNzYWdlOiBzZW5kTWVzc2FnZSxcbiAgICAgICAgcmVwbHlNZXNzYWdlOiByZXBseU1lc3NhZ2UsXG4gICAgICAgIHNlbmRJbWFnZXM6IHNlbmRJbWFnZXMsXG4gICAgICAgIHR5cGluZ01lc3NhZ2U6IHR5cGluZ01lc3NhZ2UsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0UHJvdmlkZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDaGF0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy8gY3JlYXRlIGNvbnRleHQgZm9yIGNoYXQgYXBwXG5cbmV4cG9ydCBkZWZhdWx0IENoYXRDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3QgQ3VzdG9taXplclByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Ly8gc2V0IHNpZGViYXIgYmFja2dyb3VuZCBsYXlvdXRcblx0Y29uc3QgYWRkU2lkZWJhckJhY2tncm91bmRMYXlvdXQgPSAoZSwgbGF5b3V0KSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGhlbWUtbGF5b3V0LXR5cGUgbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gYHNpZGViYXItYWN0aXZlIG1haW4tcGFnZSAke2xheW91dH1gO1xuXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHR9O1xuXG5cdC8vIHNldCBsYXlvdXQgdGhlbWUgdG8gTFRSIG9yIFJUTFxuXHRjb25zdCBhZGRMYXlvdXRUeXBlID0gKGxheW91dFR5cGUpID0+IHtcblx0XHRpZiAobGF5b3V0VHlwZSkge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBgc2lkZWJhci1hY3RpdmUgbWFpbi1wYWdlIHJ0bCAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFxuXHRcdFx0XHRcImxheW91dF9tb2RlXCJcblx0XHRcdCl9YDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucnRsLXNldHRpbmdcIikuY2xhc3NOYW1lID1cblx0XHRcdFx0XCJydGwtc2V0dGluZyBpY29uLWJ0biBidG4tcHJpbWFyeSBydGxcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBgc2lkZWJhci1hY3RpdmUgbWFpbi1wYWdlICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXG5cdFx0XHRcdFwibGF5b3V0X21vZGVcIlxuXHRcdFx0KX1gO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ydGwtc2V0dGluZ1wiKS5jbGFzc05hbWUgPVxuXHRcdFx0XHRcInJ0bC1zZXR0aW5nIGljb24tYnRuIGJ0bi1wcmltYXJ5XCI7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIHNldCBsZWZ0IHNpZGViYXIgdG8gb3Blbi9jbG9zZVxuXHRjb25zdCBhZGRTaWRlYmFyVHlwZXMgPSAoZSwgc2lkZWJhclR5cGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLXR5cGUgbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1uYXZcIikuY2xhc3NOYW1lID0gXCJtYWluLW5hdiBcIiArIHNpZGViYXJUeXBlO1xuXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHR9O1xuXG5cdC8vIHNldCB0aGVtZXMgcHJpbWFyeSBjb2xvcnNcblx0Y29uc3QgYWRkVGhlbWVDb2xvcnMgPSAoZSwgY29sb3IpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9ycyBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvclwiKS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAvYXNzZXRzL2Nzcy8ke2NvbG9yfS5jc3NgKTtcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gY29sb3IgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvclwiKTtcblx0XHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yXCIsIGNvbG9yKTtcblx0fTtcblxuXHQvLyBzZXQgd2FsbHBhcGVycyBmb3IgY2hhdHMgY29udGVudFxuXHRjb25zdCBhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyID0gKGUsIHdhbGxwYXBlcikgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2FsbHBhcGVyIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9KTtcblxuXHRcdGlmICh3YWxscGFwZXIgPT09IDApIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFwiLndhbGxwYXBlcnNcIlxuXHRcdFx0KS5zdHlsZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCUgMCUsIDAlIDEwMCUsIGZyb20ocmdiKDIzOSwgMjQ3LCAyNTQpKSk7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHVuc2V0O2A7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFwiLndhbGxwYXBlcnNcIlxuXHRcdFx0KS5zdHlsZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtgL2Fzc2V0cy9pbWFnZXMvd2FsbHBhcGVyLyR7d2FsbHBhcGVyfS5qcGdgfSkgOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiB1bnNldGA7XG5cdFx0fVxuXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHR9O1xuXG5cdC8vIHNldCB3YWxscGFwZXJzIGFzIGdyYWRpZW50cyBmb3IgY2hhdHMgY29udGVudFxuXHRjb25zdCBhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyR3JhZGllbnRzID0gKGdyYWRpZW50KSA9PiB7XG5cdFx0Ly9zZXRCYWNrZ3JvdW5kV2FsbHBhcGVyR3JhZGllbnRzKGdyYWRpZW50KVxuXHR9O1xuXG5cdC8vc2V0IHJlc3BvbnNpdmUgaW4gbWVzc2VuZ2VyIHBhZ2Vcblx0Y29uc3QgaGFuZGxlQ2xpY2tSaWdodCA9IChyZXNwb25zZSkgPT4ge1xuXHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0c2V0TW9iaWxlTWVudSghcmVzcG9uc2UpO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldE1vYmlsZU1lbnUoIXJlc3BvbnNlKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1tZW51XCIpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxDb250ZXh0LlByb3ZpZGVyXG5cdFx0XHR2YWx1ZT17e1xuXHRcdFx0XHRtb2JpbGVNZW51OiBtb2JpbGVNZW51LFxuXHRcdFx0XHRoYW5kbGVDbGlja1JpZ2h0OiBoYW5kbGVDbGlja1JpZ2h0LFxuXHRcdFx0XHRhZGRTaWRlYmFyQmFja2dyb3VuZExheW91dDogYWRkU2lkZWJhckJhY2tncm91bmRMYXlvdXQsXG5cdFx0XHRcdGFkZExheW91dFR5cGU6IGFkZExheW91dFR5cGUsXG5cdFx0XHRcdGFkZFNpZGViYXJUeXBlczogYWRkU2lkZWJhclR5cGVzLFxuXHRcdFx0XHRhZGRUaGVtZUNvbG9yczogYWRkVGhlbWVDb2xvcnMsXG5cdFx0XHRcdGFkZEJhY2tncm91bmRXYWxscGFwZXI6IGFkZEJhY2tncm91bmRXYWxscGFwZXIsXG5cdFx0XHRcdGFkZEJhY2tncm91bmRXYWxscGFwZXJHcmFkaWVudHM6IGFkZEJhY2tncm91bmRXYWxscGFwZXJHcmFkaWVudHMsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8L0NvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemVyUHJvdmlkZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDdXN0b21pemVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy8gY3JlYXRlIGEgY29udGV4dCBmb3IgdGhlbWUgY3VzdG9taXplclxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemVyQ29udGV4dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL3Njc3MvY29sb3Iuc2Nzc1wiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBDaGF0Q29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9oZWxwZXJzL2NoYXRDb250ZXh0L2NoYXRDdHhcIjtcbmltcG9ydCBDdXN0b21pemVyQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9oZWxwZXJzL2N1c3RvbWl6ZXJDb250ZXh0L2N1c3RvbWl6ZXJDdHhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZS9zdG9yZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHBDb21wb25lbnQoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInNpZGViYXItYWN0aXZlXCIpO1xuXG4gICAgLy8gUGFnZSBMb2FkZXJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgfSwgMTUwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2hpdGNoYXQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDaGl0Y2hhdFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJDaGl0Y2hhdFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQ2hpdGNoYXRcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9zY3NzXCJcbiAgICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgICBtZWRpYT1cInNjcmVlblwiXG4gICAgICAgICAgaWQ9XCJjb2xvclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwLDcwMCw4MDAmYW1wO2Rpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw2MDAmYW1wO2Rpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpazozMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw3MDAsNzAwaSw5MDAsOTAwaSZhbXA7ZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtsb2FkZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaXRjaGF0LWxvYWRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28vbG9nb19iaWcucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxoMz5TaW1wbGUsIHNlY3VyZSBtZXNzYWdpbmcgZm9yIGZhc3QgY29ubmVjdCB0byB3b3JsZC4uITwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIDxDdXN0b21pemVyQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgPENoYXRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ2hhdENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICA8L0N1c3RvbWl6ZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIiwiZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gXCJTRVRfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJfU1RBVFVTID0gXCJTRVRfVVNFUl9TVEFUVVNcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9DTElFTlQgPSBcIlNFVF9DTElFTlRcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOX0VSUk9SID0gXCJMT0dJTl9FUlJPUlwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fTE9ESU5HID0gXCJMT0dJTl9MT0RJTkdcIjtcclxuZXhwb3J0IGNvbnN0IE9OX0xPR09VVCA9IFwiT05fTE9HT1VUXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQUNUSVZFX1RBQiA9IFwiU0VUX0FDVElWRV9UQUJcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9VU0VSUyA9IFwiU0VUX1VTRVJTXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQ0hBVF9XSVRIID0gXCJTRVRfQ0hBVF9XSVRIXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQ0hBVEVEX1VTRVJTID0gXCJTRVRfQ0hBVEVEX1VTRVJTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFUX0NPTVBPTkVOVF9VTk1PVU5UID0gXCJDSEFUX0NPTVBPTkVOVF9VTk1PVU5UXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfTkVXX1VTRVIgPSBcIkFERF9ORVdfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVIgPSBcIlJFTU9WRV9VU0VSXCI7XHJcbmV4cG9ydCBjb25zdCBMQVNUX01FU1NBR0VfVElNRSA9IFwiTEFTVF9NRVNTQUdFX1RJTUVcIjtcclxuIiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1cGRhdGUgZnJvbSBcInJlYWN0LWFkZG9ucy11cGRhdGVcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGN1cnJlbnRVc2VyOiBudWxsLFxyXG4gIGFjY291bnRJZDogbnVsbCxcclxuICB1c2VyU3RhdHVzOiBcInVuYXZhaWxhYmxlXCIsXHJcbiAgY2xpZW50OiBudWxsLFxyXG4gIGxvZ2luRXJyb3JzOiBbXSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBhY3RpdmVUYWI6IFwiY2hhdFwiLFxyXG4gIHVzZXJzOiBbXSxcclxuICBjaGF0V2l0aDogXCJBXCIsXHJcbiAgbmV3Q29udGFjdDogXCJjb250YWN0XCIsXHJcbiAgY29tcG9uZW50VW5tb3VudDogbnVsbCxcclxuICBjaGF0ZWRVc2VyczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZmlyc3RfbmFtZTogXCJKQUNLSUxJTkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBtZXNnOiBcImhvdyBhcmUgeW91XCIsXHJcbiAgICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxyXG4gICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiQlJPTk5OWkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBtZXNnOiBcImhvdyBhcmUgeW91XCIsXHJcbiAgICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxyXG4gICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzo1NlwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5jb25zdCB1c2VyX3JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudFVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUl9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlclN0YXR1czogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DTElFTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9naW5FcnJvcnM6IFthY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX0xPRElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfVEFCOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFjdGl2ZVRhYjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NIQVRfV0lUSDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGF0V2l0aDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DSEFURURfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmV3Q29udGFjdDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5DSEFUX0NPTVBPTkVOVF9VTk1PVU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbXBvbmVudFVubW91bnQ6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQUREX05FV19VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBjaGF0ZWRVc2VyczogW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5jaGF0ZWRVc2Vyc10sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFTU9WRV9VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBjaGF0ZWRVc2Vyczogc3RhdGUuY2hhdGVkVXNlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKHVzZXIpID0+IHVzZXIuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxBU1RfTUVTU0FHRV9USU1FOlxyXG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IHtcclxuICAgICAgICAgIFthY3Rpb24ucGF5bG9hZC5pZF06IHtcclxuICAgICAgICAgICAgbGFzdE1lc3NhZ2VBdDogeyAkc2V0OiBhY3Rpb24ucGF5bG9hZC50aW1lIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHVzZXI6IHVzZXJfcmVkdWNlcixcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgcmVkdXhSZXNldCBmcm9tIFwicmVkdXgtcmVzZXRcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMocmVkdXhSZXNldCgpLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKVxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy11cGRhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcmVzZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==