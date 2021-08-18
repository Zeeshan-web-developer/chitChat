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
/*! exports provided: SET_USER, SET_USER_STATUS, SET_CLIENT, LOGIN_ERROR, LOGIN_LODING, ON_LOGOUT, SET_ACTIVE_TAB, SET_USERS, SET_CHAT_WITH, SET_CHATED_USERS, CHAT_COMPONENT_UNMOUNT, ADD_NEW_USER, REMOVE_USER, LAST_MESSAGE_TIME, SET_ROSTER, UPDATE_USER_STATUS, SET_ALL_USERS, SET_NEW_MESSAGE, SET_LAST_MESSAGE */
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
    direction: "received"
  }, {
    from: 1,
    to: 2,
    messageTime: "2021-08-07 09:03:10",
    body: "assume i amm a logged in user . i am sending this message",
    chatType: "chat",
    direction: "send"
  }, {
    from: 2,
    to: 1,
    messageTime: "2021-08-07 09:03:10",
    body: "i have received second  message from user with id 2",
    chatType: "chat",
    direction: "received"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2hhdENvbnRleHQvY2hhdEN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2NoYXRDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY3VzdG9taXplckNvbnRleHQvY3VzdG9taXplckN0eC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2N1c3RvbWl6ZXJDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcmVzZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbImZldGNoQ2hhdE1lbWJlckFwaSIsImF4aW9zIiwiZ2V0IiwiZmV0Y2hDaGF0QXBpIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiQ2hhdFByb3ZpZGVyIiwicHJvcHMiLCJjaGF0TWVtYmVycyIsInNldENoYXRNZW1iZXJzIiwidXNlU3RhdGUiLCJjaGF0cyIsInNldENoYXRzIiwiY3VycmVudFVzZXJJZCIsInNlbGVjdGVkVXNlciIsInNldFNlbGVjdGVkVXNlciIsImlkIiwibmFtZSIsInRodW1iIiwic3RhdHVzIiwibWVzZyIsImxhc3RTZWVuRGF0ZSIsIm9ubGluZVN0YXR1cyIsInR5cGluZyIsImlzVHllcGluZyIsInNldElzVHlwZWluZyIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2hhdHJlcyIsInNlbGVjdGVkVXNlcklkIiwidXNlcnMiLCJmaW5kIiwieCIsIklzc2VsZWN0ZWRVc2VyIiwibWVtYmVycmVzIiwiY3JlYXRlQ2hhdCIsImNvbnZlcnNhdGlvbiIsImxlbmd0aCIsImxhc3RNZXNzYWdlVGltZSIsIm1lc3NhZ2VzIiwic3RpY2tlcnMiLCJzcGxpY2UiLCJjaGFuZ2VDaGF0IiwidXNlcklkIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlSW5wdXQiLCJjaGF0IiwiaW5jbHVkZXMiLCJub3ciLCJEYXRlIiwidGltZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsInB1c2giLCJzZW5kZXIiLCJ0ZXh0IiwiY2hhdHNfZGF0YSIsImZpbHRlciIsInJlcGx5TWVzc2FnZSIsInJlYWQiLCJvbmxpbmUiLCJzZW5kSW1hZ2VzIiwiaW1hZ2UiLCJ0eXBpbmdNZXNzYWdlIiwidHlwZWluZyIsImN1cnJlbnRVc2VyIiwiY2hpbGRyZW4iLCJDaGF0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDdXN0b21pemVyUHJvdmlkZXIiLCJtb2JpbGVNZW51Iiwic2V0TW9iaWxlTWVudSIsImFkZFNpZGViYXJCYWNrZ3JvdW5kTGF5b3V0IiwiZSIsImxheW91dCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJib2R5IiwiY2xhc3NOYW1lIiwiY3VycmVudFRhcmdldCIsImFkZCIsImFkZExheW91dFR5cGUiLCJsYXlvdXRUeXBlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRTaWRlYmFyVHlwZXMiLCJzaWRlYmFyVHlwZSIsImFkZFRoZW1lQ29sb3JzIiwiY29sb3IiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRJdGVtIiwiYWRkQmFja2dyb3VuZFdhbGxwYXBlciIsIndhbGxwYXBlciIsInN0eWxlIiwiYWRkQmFja2dyb3VuZFdhbGxwYXBlckdyYWRpZW50cyIsImdyYWRpZW50IiwiaGFuZGxlQ2xpY2tSaWdodCIsInJlc3BvbnNlIiwiQ3VzdG9taXplckNvbnRleHQiLCJNeUFwcENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWRlciIsInNldExvYWRlciIsInNldFRpbWVvdXQiLCJzdG9yZSIsIlNFVF9VU0VSIiwiU0VUX1VTRVJfU1RBVFVTIiwiU0VUX0NMSUVOVCIsIkxPR0lOX0VSUk9SIiwiTE9HSU5fTE9ESU5HIiwiT05fTE9HT1VUIiwiU0VUX0FDVElWRV9UQUIiLCJTRVRfVVNFUlMiLCJTRVRfQ0hBVF9XSVRIIiwiU0VUX0NIQVRFRF9VU0VSUyIsIkNIQVRfQ09NUE9ORU5UX1VOTU9VTlQiLCJBRERfTkVXX1VTRVIiLCJSRU1PVkVfVVNFUiIsIkxBU1RfTUVTU0FHRV9USU1FIiwiU0VUX1JPU1RFUiIsIlVQREFURV9VU0VSX1NUQVRVUyIsIlNFVF9BTExfVVNFUlMiLCJTRVRfTkVXX01FU1NBR0UiLCJTRVRfTEFTVF9NRVNTQUdFIiwiaW5pdGlhbFN0YXRlIiwidXNlcm5hbWUiLCJhY2NvdW50SWQiLCJqaWQiLCJ1c2VyU3RhdHVzIiwiY2xpZW50IiwibG9naW5FcnJvcnMiLCJsb2FkaW5nIiwiYWN0aXZlVGFiIiwiY2hhdFdpdGgiLCJuZXdDb250YWN0IiwiY29tcG9uZW50VW5tb3VudCIsInJvc3RlciIsImFsbHVzZXJTdGF0dXMiLCJhbGx1c2VycyIsImFsbE1lc3NhZ2UiLCJmcm9tIiwidG8iLCJtZXNzYWdlVGltZSIsImNoYXRUeXBlIiwiZGlyZWN0aW9uIiwiY2hhdGVkVXNlcnMiLCJmaXJzdF9uYW1lIiwibGFzdE1lc3NhZ2VBdCIsInVzZXJfcmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFjdGlvblR5cGVzIiwicGF5bG9hZCIsInVzZXIiLCJ1cGRhdGUiLCIkc2V0IiwiZm91biIsInUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaSIsImxhc3RNZXNzYWdlIiwiZm91bmQiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlZHV4UmVzZXQiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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O0FBRUEsTUFBTTdELEtBQUssR0FBRytELHlEQUFXLENBQ3ZCRix1REFEdUIsRUFFdkJHLG9GQUFtQixDQUFDQyxrREFBVSxFQUFYLEVBQWVDLDZEQUFlLENBQUNDLGtEQUFELENBQTlCLENBRkksQ0FBekI7QUFJZW5FLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2hhdE1lbWJlckFwaSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9jaGF0TWVtYmVyLmpzb25gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENoYXRBcGkgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvY2hhdC5jaGF0cy5qc29uYCk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcImh0dHBzOi8va2FydGhpay5teXNtYXJ0cGJ4Lm9yZzo4NDQzL3YyL1wiLFxufSk7XG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGZldGNoQ2hhdE1lbWJlckFwaSwgZmV0Y2hDaGF0QXBpIH0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xuXG5jb25zdCBDaGF0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2NoYXRNZW1iZXJzLCBzZXRDaGF0TWVtYmVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjdXJyZW50VXNlcklkID0gMDtcbiAgY29uc3QgW3NlbGVjdGVkVXNlciwgc2V0U2VsZWN0ZWRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogMCxcbiAgICBuYW1lOiBcIkpvbnkgTHluZXRpblwiLFxuICAgIHRodW1iOiBcImNvbnRhY3QvMi5qcGdcIixcbiAgICBzdGF0dXM6IFwiOFwiLFxuICAgIG1lc2c6IFwiVHlwaW5nLi4uLi4uLi4uLi4uLi4uLlwiLFxuICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxuICAgIG9ubGluZVN0YXR1czogXCJvbmxpbmVcIixcbiAgICB0eXBpbmc6IHRydWUsXG4gIH0pO1xuICBjb25zdCBbaXNUeWVwaW5nLCBzZXRJc1R5cGVpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZ2V0IGFsbCBpbml0aWFsIGNoYXQgdXNlcnNcblxuICAgIGZldGNoQ2hhdE1lbWJlckFwaSgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0Q2hhdE1lbWJlcnMocmVzLmRhdGEpO1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBmZXRjaENoYXRBcGkoKS50aGVuKChjaGF0cmVzKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VySWQgPSBjaGF0cmVzLmRhdGFbMF0udXNlcnMuZmluZChcbiAgICAgICAgICAgICh4KSA9PiB4ICE9PSBjdXJyZW50VXNlcklkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBJc3NlbGVjdGVkVXNlciA9IHJlcy5kYXRhLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICAgICAgICBzZXRTZWxlY3RlZFVzZXIoSXNzZWxlY3RlZFVzZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBnZXQgaW5pdGlhbCBjaGF0IGJldHdlZW4gdHdvIGNoYXQgdXNlcnNcbiAgICBmZXRjaENoYXRBcGkoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldENoYXRzKHJlcy5kYXRhKTtcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgZmV0Y2hDaGF0TWVtYmVyQXBpKCkudGhlbigobWVtYmVycmVzKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VySWQgPSByZXMuZGF0YVswXS51c2Vycy5maW5kKFxuICAgICAgICAgICAgKHgpID0+IHggIT09IGN1cnJlbnRVc2VySWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IElzc2VsZWN0ZWRVc2VyID0gbWVtYmVycmVzLmRhdGEuZmluZChcbiAgICAgICAgICAgICh4KSA9PiB4LmlkID09PSBzZWxlY3RlZFVzZXJJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRVc2VyKElzc2VsZWN0ZWRVc2VyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBjaGF0IHdpdGggdXNlciBmaXJzdCB0aW1lXG4gIGNvbnN0IGNyZWF0ZUNoYXQgPSAoY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWQsIGNoYXRzLCBvbmxpbmVTdGF0dXMpID0+IHtcbiAgICBsZXQgY29udmVyc2F0aW9uID0ge1xuICAgICAgaWQ6IGNoYXRzLmxlbmd0aCArIDEsXG4gICAgICB1c2VyczogW2N1cnJlbnRVc2VySWQsIHNlbGVjdGVkVXNlcklkXSxcbiAgICAgIGxhc3RNZXNzYWdlVGltZTogXCItXCIsXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBzdGlja2VyczogW10sXG4gICAgICBvbmxpbmVTdGF0dXM6IG9ubGluZVN0YXR1cyxcbiAgICB9O1xuXG4gICAgY2hhdHMuc3BsaWNlKDAsIDAsIGNvbnZlcnNhdGlvbik7IC8vd2UgYXJlIGFkZGluZyBjb252ZXJzaW9uIGF0IDB0aCBpbmRleFxuICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRNZW1iZXJzLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICBzZXRDaGF0cyhbLi4uY2hhdHNdKTtcbiAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgfTtcblxuICAvLyBjaGFuZ2UgZXhpc3RpbmcgY2hhdCBiZXR3ZWVuIHR3byBjaGF0IHVzZXJzXG4gIGNvbnN0IGNoYW5nZUNoYXQgPSAodXNlcklkKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gY2hhdE1lbWJlcnMuZmluZCgoeCkgPT4geC5pZCA9PT0gdXNlcklkKTtcbiAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgfTtcblxuICAvLyBzZW5kIG1lc3NhZ2UgdG8gc2VsZWN0ZWQgY2hhdCB1c2Vyc1xuICBjb25zdCBzZW5kTWVzc2FnZSA9IChjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZCwgbWVzc2FnZUlucHV0LCBjaGF0cykgPT4ge1xuICAgIGxldCBjaGF0ID0gY2hhdHMuZmluZChcbiAgICAgICh4KSA9PiB4LnVzZXJzLmluY2x1ZGVzKGN1cnJlbnRVc2VySWQpICYmIHgudXNlcnMuaW5jbHVkZXMoc2VsZWN0ZWRVc2VySWQpXG4gICAgKTsgLy8gZmluZCBzZWxlY3RlZCBjaGF0IFVzZXIgSWRcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRpbWUgPSBub3cuZ2V0SG91cnMoKSArIFwiOlwiICsgbm93LmdldE1pbnV0ZXMoKTtcbiAgICBpZiAoY2hhdCkge1xuICAgICAgY2hhdC5tZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgc2VuZGVyOiBjdXJyZW50VXNlcklkLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICB0ZXh0OiBtZXNzYWdlSW5wdXQsXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY2hhdC5sYXN0TWVzc2FnZVRpbWUgPSB0aW1lO1xuICAgICAgbGV0IGNoYXRzX2RhdGEgPSBjaGF0cy5maWx0ZXIoKHgpID0+IHguaWQgIT09IGNoYXQuaWQpO1xuICAgICAgY2hhdHNfZGF0YS5zcGxpY2UoMCwgMCwgY2hhdCk7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjaGF0TWVtYmVycy5maW5kKCh4KSA9PiB4LmlkID09PSBzZWxlY3RlZFVzZXJJZCk7XG4gICAgICBzZXRDaGF0cyhbLi4uY2hhdHNdKTsgLy8gdXBkYXRlIGNoYXRzIG1lc3NhZ2VzXG4gICAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmVwbHkgbWVzc2FnZSB0byBzZWxlY3RlZCBjaGF0IHVzZXJzXG4gIGNvbnN0IHJlcGx5TWVzc2FnZSA9IChjdXJyZW50VXNlcklkLCBzZWxlY3RlZFVzZXJJZCwgcmVwbHlNZXNzYWdlLCBjaGF0cykgPT4ge1xuICAgIGxldCBjaGF0ID0gY2hhdHMuZmluZChcbiAgICAgICh4KSA9PiB4LnVzZXJzLmluY2x1ZGVzKGN1cnJlbnRVc2VySWQpICYmIHgudXNlcnMuaW5jbHVkZXMoc2VsZWN0ZWRVc2VySWQpXG4gICAgKTsgLy8gZmluZCBzZWxlY3RlZCBjaGF0IFVzZXIgSWRcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRpbWUgPSBub3cuZ2V0SG91cnMoKSArIFwiOlwiICsgbm93LmdldE1pbnV0ZXMoKTtcbiAgICBpZiAoY2hhdCkge1xuICAgICAgY2hhdC5tZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgc2VuZGVyOiBzZWxlY3RlZFVzZXJJZCxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgdGV4dDogcmVwbHlNZXNzYWdlLFxuICAgICAgICByZWFkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjaGF0Lmxhc3RNZXNzYWdlVGltZSA9IHRpbWU7XG4gICAgICBjaGF0Lm9ubGluZSA9IFwiXCI7XG4gICAgICBsZXQgY2hhdHNfZGF0YSA9IGNoYXRzLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gY2hhdC5pZCk7XG4gICAgICBjaGF0c19kYXRhLnNwbGljZSgwLCAwLCBjaGF0KTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IGNoYXRNZW1iZXJzLmZpbmQoKHgpID0+IHguaWQgPT09IHNlbGVjdGVkVXNlcklkKTtcbiAgICAgIHNlbGVjdGVkVXNlci5vbmxpbmVTdGF0dXMgPSBcIm9ubGluZVwiOyAvLyBjaGF0IHVzZXIgcmVwbHkgdGhlIG1lc3NhZ2UgdGhlbiBzZXQgc2VsZWN0ZWQgY2hhdCB1c2VyICBzdGF0dXMgdG8gXCJvbmxpbmVcIlxuICAgICAgc2V0Q2hhdHMoWy4uLmNoYXRzXSk7IC8vIHVwZGF0ZSBjaGF0cyBtZXNzYWdlc1xuICAgICAgc2V0U2VsZWN0ZWRVc2VyKHNlbGVjdGVkVXNlcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIHNlbmQgc3RpY2tlcnMgb3IgaW1hZ2VzXG4gIGNvbnN0IHNlbmRJbWFnZXMgPSAoY3VycmVudFVzZXJJZCwgc2VsZWN0ZWRVc2VySWQsIGltYWdlLCBjaGF0cykgPT4ge1xuICAgIGxldCBjaGF0ID0gY2hhdHMuZmluZChcbiAgICAgICh4KSA9PiB4LnVzZXJzLmluY2x1ZGVzKGN1cnJlbnRVc2VySWQpICYmIHgudXNlcnMuaW5jbHVkZXMoc2VsZWN0ZWRVc2VySWQpXG4gICAgKTsgLy8gZmluZCBzZWxlY3RlZCBjaGF0IFVzZXIgSWRcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRpbWUgPSBub3cuZ2V0SG91cnMoKSArIFwiOlwiICsgbm93LmdldE1pbnV0ZXMoKTtcbiAgICBpZiAoY2hhdCkge1xuICAgICAgY2hhdC5zdGlja2Vycy5wdXNoKHtcbiAgICAgICAgc2VuZGVyOiBjdXJyZW50VXNlcklkLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICBzdGlja2VyczogaW1hZ2UsXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY2hhdC5sYXN0TWVzc2FnZVRpbWUgPSB0aW1lO1xuICAgICAgY2hhdC5vbmxpbmUgPSBcIlwiO1xuICAgICAgbGV0IGNoYXRzX2RhdGEgPSBjaGF0cy5maWx0ZXIoKHgpID0+IHguaWQgIT09IGNoYXQuaWQpO1xuICAgICAgY2hhdHNfZGF0YS5zcGxpY2UoMCwgMCwgY2hhdCk7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjaGF0TWVtYmVycy5maW5kKCh4KSA9PiB4LmlkID09PSBzZWxlY3RlZFVzZXJJZCk7XG4gICAgICBzZXRDaGF0cyhbLi4uY2hhdHNdKTsgLy8gdXBkYXRlIGNoYXRzIG1lc3NhZ2VzXG4gICAgICBzZXRTZWxlY3RlZFVzZXIoc2VsZWN0ZWRVc2VyKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gd2hlbiBjaGF0IHVzZXIgcmVwbGllZCB0byBvdXIgbWVzc2FnZSBleGlzdGluZyB0eWVwaW5nIGxvYWRlclxuICBjb25zdCB0eXBpbmdNZXNzYWdlID0gKHR5cGVpbmcpID0+IHtcbiAgICBzZXRJc1R5cGVpbmcodHlwZWluZyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY2hhdE1lbWJlcnM6IGNoYXRNZW1iZXJzLFxuICAgICAgICBjaGF0czogY2hhdHMsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBjaGF0TWVtYmVyc1swXSxcbiAgICAgICAgc2VsZWN0ZWRVc2VyOiBzZWxlY3RlZFVzZXIsXG4gICAgICAgIGlzVHllcGluZzogaXNUeWVwaW5nLFxuICAgICAgICBjaGFuZ2VDaGF0OiBjaGFuZ2VDaGF0LFxuICAgICAgICBjcmVhdGVDaGF0OiBjcmVhdGVDaGF0LFxuICAgICAgICBzZW5kTWVzc2FnZTogc2VuZE1lc3NhZ2UsXG4gICAgICAgIHJlcGx5TWVzc2FnZTogcmVwbHlNZXNzYWdlLFxuICAgICAgICBzZW5kSW1hZ2VzOiBzZW5kSW1hZ2VzLFxuICAgICAgICB0eXBpbmdNZXNzYWdlOiB0eXBpbmdNZXNzYWdlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFByb3ZpZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2hhdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7IC8vIGNyZWF0ZSBjb250ZXh0IGZvciBjaGF0IGFwcFxuXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGV4dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IEN1c3RvbWl6ZXJQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXHRjb25zdCBbbW9iaWxlTWVudSwgc2V0TW9iaWxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdC8vIHNldCBzaWRlYmFyIGJhY2tncm91bmQgbGF5b3V0XG5cdGNvbnN0IGFkZFNpZGViYXJCYWNrZ3JvdW5kTGF5b3V0ID0gKGUsIGxheW91dCkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRoZW1lLWxheW91dC10eXBlIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9KTtcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGBzaWRlYmFyLWFjdGl2ZSBtYWluLXBhZ2UgJHtsYXlvdXR9YDtcblx0XHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0fTtcblxuXHQvLyBzZXQgbGF5b3V0IHRoZW1lIHRvIExUUiBvciBSVExcblx0Y29uc3QgYWRkTGF5b3V0VHlwZSA9IChsYXlvdXRUeXBlKSA9PiB7XG5cdFx0aWYgKGxheW91dFR5cGUpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gYHNpZGViYXItYWN0aXZlIG1haW4tcGFnZSBydGwgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcblx0XHRcdFx0XCJsYXlvdXRfbW9kZVwiXG5cdFx0XHQpfWA7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJ0bC1zZXR0aW5nXCIpLmNsYXNzTmFtZSA9XG5cdFx0XHRcdFwicnRsLXNldHRpbmcgaWNvbi1idG4gYnRuLXByaW1hcnkgcnRsXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gYHNpZGViYXItYWN0aXZlIG1haW4tcGFnZSAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFxuXHRcdFx0XHRcImxheW91dF9tb2RlXCJcblx0XHRcdCl9YDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucnRsLXNldHRpbmdcIikuY2xhc3NOYW1lID1cblx0XHRcdFx0XCJydGwtc2V0dGluZyBpY29uLWJ0biBidG4tcHJpbWFyeVwiO1xuXHRcdH1cblx0fTtcblxuXHQvLyBzZXQgbGVmdCBzaWRlYmFyIHRvIG9wZW4vY2xvc2Vcblx0Y29uc3QgYWRkU2lkZWJhclR5cGVzID0gKGUsIHNpZGViYXJUeXBlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci10eXBlIGxpXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9KTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbmF2XCIpLmNsYXNzTmFtZSA9IFwibWFpbi1uYXYgXCIgKyBzaWRlYmFyVHlwZTtcblx0XHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0fTtcblxuXHQvLyBzZXQgdGhlbWVzIHByaW1hcnkgY29sb3JzXG5cdGNvbnN0IGFkZFRoZW1lQ29sb3JzID0gKGUsIGNvbG9yKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvcnMgbGlcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHRcdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JcIikuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgL2Fzc2V0cy9jc3MvJHtjb2xvcn0uY3NzYCk7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IGNvbG9yIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JcIik7XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvclwiLCBjb2xvcik7XG5cdH07XG5cblx0Ly8gc2V0IHdhbGxwYXBlcnMgZm9yIGNoYXRzIGNvbnRlbnRcblx0Y29uc3QgYWRkQmFja2dyb3VuZFdhbGxwYXBlciA9IChlLCB3YWxscGFwZXIpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndhbGxwYXBlciBsaVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cblx0XHRpZiAod2FsbHBhcGVyID09PSAwKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcIi53YWxscGFwZXJzXCJcblx0XHRcdCkuc3R5bGUgPSBgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAlIDAlLCAwJSAxMDAlLCBmcm9tKHJnYigyMzksIDI0NywgMjU0KSkpOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiB1bnNldDtgO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcIi53YWxscGFwZXJzXCJcblx0XHRcdCkuc3R5bGUgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YC9hc3NldHMvaW1hZ2VzL3dhbGxwYXBlci8ke3dhbGxwYXBlcn0uanBnYH0pIDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGJhY2tncm91bmQtYmxlbmQtbW9kZTogdW5zZXRgO1xuXHRcdH1cblx0XHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0fTtcblxuXHQvLyBzZXQgd2FsbHBhcGVycyBhcyBncmFkaWVudHMgZm9yIGNoYXRzIGNvbnRlbnRcblx0Y29uc3QgYWRkQmFja2dyb3VuZFdhbGxwYXBlckdyYWRpZW50cyA9IChncmFkaWVudCkgPT4ge1xuXHRcdC8vc2V0QmFja2dyb3VuZFdhbGxwYXBlckdyYWRpZW50cyhncmFkaWVudClcblx0fTtcblxuXHQvL3NldCByZXNwb25zaXZlIGluIG1lc3NlbmdlciBwYWdlXG5cdGNvbnN0IGhhbmRsZUNsaWNrUmlnaHQgPSAocmVzcG9uc2UpID0+IHtcblx0XHRpZiAocmVzcG9uc2UpIHtcblx0XHRcdHNldE1vYmlsZU1lbnUoIXJlc3BvbnNlKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51XCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRNb2JpbGVNZW51KCFyZXNwb25zZSk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtbWVudVwiKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Q29udGV4dC5Qcm92aWRlclxuXHRcdFx0dmFsdWU9e3tcblx0XHRcdFx0bW9iaWxlTWVudTogbW9iaWxlTWVudSxcblx0XHRcdFx0aGFuZGxlQ2xpY2tSaWdodDogaGFuZGxlQ2xpY2tSaWdodCxcblx0XHRcdFx0YWRkU2lkZWJhckJhY2tncm91bmRMYXlvdXQ6IGFkZFNpZGViYXJCYWNrZ3JvdW5kTGF5b3V0LFxuXHRcdFx0XHRhZGRMYXlvdXRUeXBlOiBhZGRMYXlvdXRUeXBlLFxuXHRcdFx0XHRhZGRTaWRlYmFyVHlwZXM6IGFkZFNpZGViYXJUeXBlcyxcblx0XHRcdFx0YWRkVGhlbWVDb2xvcnM6IGFkZFRoZW1lQ29sb3JzLFxuXHRcdFx0XHRhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyOiBhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyLFxuXHRcdFx0XHRhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyR3JhZGllbnRzOiBhZGRCYWNrZ3JvdW5kV2FsbHBhcGVyR3JhZGllbnRzLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0PC9Db250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplclByb3ZpZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ3VzdG9taXplckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7IC8vIGNyZWF0ZSBhIGNvbnRleHQgZm9yIHRoZW1lIGN1c3RvbWl6ZXJcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplckNvbnRleHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9zY3NzL2NvbG9yLnNjc3NcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgQ2hhdENvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vaGVscGVycy9jaGF0Q29udGV4dC9jaGF0Q3R4XCI7XG5pbXBvcnQgQ3VzdG9taXplckNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vaGVscGVycy9jdXN0b21pemVyQ29udGV4dC9jdXN0b21pemVyQ3R4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmUvc3RvcmVcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwQ29tcG9uZW50KHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWFjdGl2ZVwiKTtcblxuICAgIC8vIFBhZ2UgTG9hZGVyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgIH0sIDE1MDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNoaXRjaGF0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ2hpdGNoYXRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiQ2hpdGNoYXRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkNoaXRjaGF0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgdHlwZT1cInRleHQvc2Nzc1wiXG4gICAgICAgICAgaHJlZj1cIlwiXG4gICAgICAgICAgbWVkaWE9XCJzY3JlZW5cIlxuICAgICAgICAgIGlkPVwiY29sb3JcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCw3MDAsODAwJmFtcDtkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNjAwJmFtcDtkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6MzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGksOTAwLDkwMGkmYW1wO2Rpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7bG9hZGVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGl0Y2hhdC1sb2FkZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvL2xvZ29fYmlnLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8aDM+U2ltcGxlLCBzZWN1cmUgbWVzc2FnaW5nIGZvciBmYXN0IGNvbm5lY3QgdG8gd29ybGQuLiE8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8Q3VzdG9taXplckNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgIDxDaGF0Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NoYXRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPC9DdXN0b21pemVyQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cbiIsImV4cG9ydCBjb25zdCBTRVRfVVNFUiA9IFwiU0VUX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9VU0VSX1NUQVRVUyA9IFwiU0VUX1VTRVJfU1RBVFVTXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQ0xJRU5UID0gXCJTRVRfQ0xJRU5UXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9FUlJPUiA9IFwiTE9HSU5fRVJST1JcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOX0xPRElORyA9IFwiTE9HSU5fTE9ESU5HXCI7XHJcbmV4cG9ydCBjb25zdCBPTl9MT0dPVVQgPSBcIk9OX0xPR09VVFwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0FDVElWRV9UQUIgPSBcIlNFVF9BQ1RJVkVfVEFCXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfVVNFUlMgPSBcIlNFVF9VU0VSU1wiO1xyXG5leHBvcnQgY29uc3QgU0VUX0NIQVRfV0lUSCA9IFwiU0VUX0NIQVRfV0lUSFwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0NIQVRFRF9VU0VSUyA9IFwiU0VUX0NIQVRFRF9VU0VSU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBVF9DT01QT05FTlRfVU5NT1VOVCA9IFwiQ0hBVF9DT01QT05FTlRfVU5NT1VOVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX05FV19VU0VSID0gXCJBRERfTkVXX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSID0gXCJSRU1PVkVfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgTEFTVF9NRVNTQUdFX1RJTUUgPSBcIkxBU1RfTUVTU0FHRV9USU1FXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfUk9TVEVSID0gXCJTRVRfUk9TVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9TVEFUVVMgPSBcIlVQREFURV9VU0VSX1NUQVRVU1wiO1xyXG5leHBvcnQgY29uc3QgU0VUX0FMTF9VU0VSUyA9IFwiU0VUX0FMTF9VU0VSU1wiO1xyXG5leHBvcnQgY29uc3QgU0VUX05FV19NRVNTQUdFID0gXCJTRVRfTkVXX01FU1NBR0VcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9MQVNUX01FU1NBR0UgPSBcIlNFVF9MQVNUX01FU1NBR0VcIjtcclxuIiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1cGRhdGUgZnJvbSBcInJlYWN0LWFkZG9ucy11cGRhdGVcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGN1cnJlbnRVc2VyOiB7IHVzZXJuYW1lOiBudWxsLCBhY2NvdW50SWQ6IG51bGwsIGppZDogbnVsbCB9LFxyXG4gIGFjY291bnRJZDogbnVsbCxcclxuICB1c2VyU3RhdHVzOiBcInVuYXZhaWxhYmxlXCIsXHJcbiAgY2xpZW50OiBudWxsLFxyXG4gIGxvZ2luRXJyb3JzOiBbXSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBhY3RpdmVUYWI6IFwiY2hhdFwiLFxyXG4gIHVzZXJzOiBbXSxcclxuICBjaGF0V2l0aDogeyBuYW1lOiBcIkFcIiwgc3RhdHVzOiBcIm9ubGluZVwiLCBpZDogMiB9LFxyXG4gIG5ld0NvbnRhY3Q6IFwiY29udGFjdFwiLFxyXG4gIGNvbXBvbmVudFVubW91bnQ6IG51bGwsXHJcbiAgcm9zdGVyOiBcIlwiLFxyXG4gIGFsbHVzZXJTdGF0dXM6IFtdLFxyXG4gIGFsbHVzZXJzOiBbXSxcclxuICBhbGxNZXNzYWdlOiBbXHJcbiAgICB7XHJcbiAgICAgIGZyb206IDIsXHJcbiAgICAgIHRvOiAxLFxyXG4gICAgICBtZXNzYWdlVGltZTogXCIyMDIxLTA4LTA3IDA5OjAzOjEwXCIsXHJcbiAgICAgIGJvZHk6IFwiaSBoYXZlIHJlY2VpdmVkIHRoaXMgbWVzc2FnZSBmcm9tIHVzZXIgd2l0aCBpZCAyXCIsXHJcbiAgICAgIGNoYXRUeXBlOiBcImNoYXRcIixcclxuICAgICAgZGlyZWN0aW9uOiBcInJlY2VpdmVkXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgZnJvbTogMSxcclxuICAgICAgdG86IDIsXHJcbiAgICAgIG1lc3NhZ2VUaW1lOiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgICAgYm9keTogXCJhc3N1bWUgaSBhbW0gYSBsb2dnZWQgaW4gdXNlciAuIGkgYW0gc2VuZGluZyB0aGlzIG1lc3NhZ2VcIixcclxuICAgICAgY2hhdFR5cGU6IFwiY2hhdFwiLFxyXG4gICAgICBkaXJlY3Rpb246IFwic2VuZFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZnJvbTogMixcclxuICAgICAgdG86IDEsXHJcbiAgICAgIG1lc3NhZ2VUaW1lOiBcIjIwMjEtMDgtMDcgMDk6MDM6MTBcIixcclxuICAgICAgYm9keTogXCJpIGhhdmUgcmVjZWl2ZWQgc2Vjb25kICBtZXNzYWdlIGZyb20gdXNlciB3aXRoIGlkIDJcIixcclxuICAgICAgY2hhdFR5cGU6IFwiY2hhdFwiLFxyXG4gICAgICBkaXJlY3Rpb246IFwicmVjZWl2ZWRcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGF0ZWRVc2VyczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZmlyc3RfbmFtZTogXCJKQUNLSUxJTkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9ubGluZVwiLFxyXG4gICAgICBtZXNnOiBcImhvdyBhcmUgeW91XCIsXHJcbiAgICAgIGxhc3RTZWVuRGF0ZTogXCIzMC8xMS8xOVwiLFxyXG4gICAgICBvbmxpbmVTdGF0dXM6IFwib25saW5lXCIsXHJcbiAgICAgIGxhc3RNZXNzYWdlQXQ6IFwiMjAyMS0wOC0wNyAwOTowMzoxMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiQlJPTk5OWkVcIixcclxuICAgICAgc3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgbWVzZzogXCJob3cgYXJlIHlvdVwiLFxyXG4gICAgICBsYXN0U2VlbkRhdGU6IFwiMzAvMTEvMTlcIixcclxuICAgICAgb25saW5lU3RhdHVzOiBcIm9mZmxpbmVcIixcclxuICAgICAgbGFzdE1lc3NhZ2VBdDogXCIyMDIxLTA4LTA3IDA5OjAzOjU2XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbmNvbnN0IHVzZXJfcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50VXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9VU0VSX1NUQVRVUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyU3RhdHVzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NMSUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnQ6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dpbkVycm9yczogW2FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fTE9ESU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0FDVElWRV9UQUI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWN0aXZlVGFiOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJzOiBbYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0hBVF9XSVRIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYXRXaXRoOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9DSEFURURfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmV3Q29udGFjdDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5DSEFUX0NPTVBPTkVOVF9VTk1PVU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbXBvbmVudFVubW91bnQ6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQUREX05FV19VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBjaGF0ZWRVc2VyczogW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5jaGF0ZWRVc2Vyc10sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfTkVXX01FU1NBR0U6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcblxyXG4gICAgICAgIGFsbE1lc3NhZ2U6IFsuLi5zdGF0ZS5hbGxNZXNzYWdlLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFTU9WRV9VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG5cclxuICAgICAgICBjaGF0ZWRVc2Vyczogc3RhdGUuY2hhdGVkVXNlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKHVzZXIpID0+IHVzZXIuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxBU1RfTUVTU0FHRV9USU1FOlxyXG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XHJcbiAgICAgICAgY2hhdGVkVXNlcnM6IHtcclxuICAgICAgICAgIFthY3Rpb24ucGF5bG9hZC5pZF06IHtcclxuICAgICAgICAgICAgbGFzdE1lc3NhZ2VBdDogeyAkc2V0OiBhY3Rpb24ucGF5bG9hZC50aW1lIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0xBU1RfTUVTU0FHRTpcclxuICAgICAgbGV0IGZvdW4gPVxyXG4gICAgICAgIHN0YXRlLmNoYXRlZFVzZXJzICYmIHN0YXRlLmNoYXRlZFVzZXJzLmxlbmd0aFxyXG4gICAgICAgICAgPyAhIXN0YXRlLmNoYXRlZFVzZXJzLmZpbmQoKHUpID0+IHUuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVxyXG4gICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coXCJmdW5jdGlvblwiLCBmb3VuLCBhY3Rpb24ucGF5bG9hZC5pZCk7XHJcbiAgICAgIGlmIChmb3VuKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY2hhdGVkVXNlcnM6IHN0YXRlLmNoYXRlZFVzZXJzLm1hcCgodXNlciwgaSkgPT5cclxuICAgICAgICAgICAgdXNlci5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgICAgICAgICAgbWVzZzogYWN0aW9uLnBheWxvYWQubGFzdE1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgIGxhc3RNZXNzYWdlQXQ6IGFjdGlvbi5wYXlsb2FkLnRpbWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOiB1c2VyXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1JPU1RFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByb3N0ZXI6IFsuLi5zdGF0ZS5yb3N0ZXIsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0FMTF9VU0VSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhbGx1c2VyczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9VU0VSX1NUQVRVUzpcclxuICAgICAgbGV0IGZvdW5kID1cclxuICAgICAgICBzdGF0ZS5hbGx1c2VyU3RhdHVzICYmIHN0YXRlLmFsbHVzZXJTdGF0dXMubGVuZ3RoXHJcbiAgICAgICAgICA/ICEhc3RhdGUuYWxsdXNlclN0YXR1cy5maW5kKCh1KSA9PiB1LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICAgIDogZmFsc2U7XHJcblxyXG4gICAgICAvL2lmIHRoZSB1c2VyIGlzIGFscmVhZHlcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGFscmVkeSBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhbGx1c2VyU3RhdHVzOiBzdGF0ZS5hbGx1c2VyU3RhdHVzLm1hcCgodXNlclN0YXR1cywgaSkgPT5cclxuICAgICAgICAgICAgdXNlclN0YXR1cy5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICAgICAgICA/IHsgLi4udXNlclN0YXR1cywgb25saW5lU3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5vbmxpbmVTdGF0dXMgfVxyXG4gICAgICAgICAgICAgIDogdXNlclN0YXR1c1xyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSB0aGUgdXNlciBzdGF0dXMgZm9yIGZpc3QgdGltZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFsbHVzZXJTdGF0dXM6IFsuLi5zdGF0ZS5hbGx1c2VyU3RhdHVzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyOiB1c2VyX3JlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHJlZHV4UmVzZXQgZnJvbSBcInJlZHV4LXJlc2V0XCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcixcclxuICBjb21wb3NlV2l0aERldlRvb2xzKHJlZHV4UmVzZXQoKSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXJlc2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=