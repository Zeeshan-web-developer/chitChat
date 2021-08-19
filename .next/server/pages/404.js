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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_common_commonLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/common/commonLayout */ "./pages/common/commonLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\chat\\pages\\404.js";





const Page404 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_pages_common_commonLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "404",
      parent: "home",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        className: "error-main",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
          className: "page-decore",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
            className: "top",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
              className: "img-fluid inner2" // src='/assets/images/landing/footer/2.png'
              ,
              alt: "footer-back-img"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
            className: "bottom",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
              className: "img-fluid inner2",
              src: "/assets/images/landing/footer/2.png",
              alt: "footer-back-img"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              sm: "12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "error-contain",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
                  children: "404"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
                  children: "Page Not Found"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
                  children: ["The Page You Are Attempting To Reach Is Not Available.", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 21
                  }, undefined), "This May Be Because The Page Does Not Exist Or Has Been Moved."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                  className: "btn btn-primary",
                  href: "/landing",
                  children: "back to home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "animated-bg",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Page404);

/***/ }),

/***/ "./pages/common/commonLayout.js":
/*!**************************************!*\
  !*** ./pages/common/commonLayout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./pages/common/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./pages/common/footer.js");
/* harmony import */ var _common_tapTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/tapTop */ "./pages/common/tapTop.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\chat\\pages\\common\\commonLayout.js";







const CommonLayout = ({
  children,
  title,
  parent
}) => {
  const handleScroll = () => {
    if (window.scrollY > 60) {
      document.querySelector(".landing-header").classList.add("fixed");
    } else {
      document.querySelector(".landing-header").classList.remove("fixed");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "inner-page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
        className: "breadcrumb-main",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "custom-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                href: "/messenger",
                children: parent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                href: "#",
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: children
    }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_tapTop__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CommonLayout);

/***/ }),

/***/ "./pages/common/footer.js":
/*!********************************!*\
  !*** ./pages/common/footer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\chat\\pages\\common\\footer.js";




const Footer = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      className: "footer-main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "footer-block",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "3",
          md: "6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "footer-title footer-mobile-title",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "about-payment footer-contant",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "logo",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                href: "/landing",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                  src: "../assets/images/logo/landing-logo.png",
                  alt: "logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece Lorem fugit on looked ipsum."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
              className: "social-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  className: "icon-btn btn-google button-effect btn-sm",
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "fa fa-facebook"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  className: "icon-btn btn-twiter button-effect btn-sm",
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "fa fa-twitter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  className: "icon-btn btn-linkedin button-effect btn-sm",
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "fa fa-linkedin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  className: "icon-btn btn-instagram button-effect btn-sm",
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "fa fa-instagram"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "2",
          md: "3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "footer-title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                children: "Useful Links"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "footer-contant",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "About us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Services"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Blog"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 10
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "2",
          md: "3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "footer-title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                children: "Chitchat Help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "footer-contant",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Privacy Policy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "FAQ"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Support"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Team"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 10
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "2",
          md: "4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "footer-title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                children: "Download For"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "footer-contant",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Windows"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Linux"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "IOS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Android"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "#",
                    children: "Mac"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 10
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "3",
          md: "4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "downlaod",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "footer-title",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                  children: "Download Apps"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "footer-contant",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "footer-btn",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    className: "btn active",
                    href: "#",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                      className: "fa fa-apple"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 12
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
                        children: "Available on the"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 13
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                        children: "App store"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 13
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 12
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 11
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    className: "btn",
                    href: "#",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                      className: "fa fa-play"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 12
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
                        children: "Available on the"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 13
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                        children: "Google play"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 13
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 12
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 11
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "footer-back-block",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        className: "img-fluid inner1",
        src: "../assets/images/landing/footer/2.png",
        alt: "footer-back-img"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        className: "img-fluid inner2",
        src: "../assets/images/landing/footer/2.png",
        alt: "footer-back-img"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      className: "copyright-footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "copyright",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          md: "6",
          sm: "12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "footer-left",
            children: "\xA9 2021 Chitchat. All Rights Reserved"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          md: "6",
          sm: "12",
          className: "links_horizontal",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "text-right",
            children: ["Made with ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "\u2665 "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 18
            }, undefined), "By Theme Pixelstrap"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/common/header.js":
/*!********************************!*\
  !*** ./pages/common/header.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\chat\\pages\\common\\header.js";





const Header = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: dropdownOpen3,
    1: setDropdownOpen3
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: dropdownOpen4,
    1: setDropdownOpen4
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isMenu,
    1: setisMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const toggle3 = () => setDropdownOpen3(prevState => !prevState);

  const toggle4 = () => setDropdownOpen4(prevState => !prevState);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      document.querySelector(".landing-header").classList.add("fixed");
    } else {
      document.querySelector(".landing-header").classList.remove("fixed");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: `${router.pathname === "/landing" || router.pathname === "/" ? "theme-landing" : ""}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("header", {
        id: "home",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          className: "custom-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              className: "col-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "landing-header",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "main-menu",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
                    className: "navbar navbar-expand-xl navbar-light",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                      className: "navbar-brand",
                      href: "/landing",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                        className: "logo-block",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                          className: "img-fluid",
                          src: "../assets/images/logo/landing-logo.png",
                          alt: "logo"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                      className: "navbar-toggler d-xl-none",
                      type: "button",
                      "data-toggle": "collapse",
                      "data-target": "#navbarNav",
                      "aria-controls": "navbarNav",
                      "aria-expanded": isMenu,
                      "aria-label": "Toggle navigation",
                      onClick: () => setisMenu(!isMenu),
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "navbar-toggler-icon"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
                      className: "navbar-collapse d-xl-block",
                      id: "navbarNav",
                      isOpen: isMenu,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
                        className: "mr-auto",
                        navbar: true,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                          className: "active",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                            href: "/messenger",
                            children: ["Messenger", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                              className: "sr-only",
                              children: "(current)"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 93,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 91,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
                          nav: true,
                          isOpen: dropdownOpen,
                          toggle: toggle,
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
                            nav: true,
                            caret: true,
                            children: "Blog"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 97,
                            columnNumber: 29
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/blog/rightSidebar",
                              children: "Blog Right sidebar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 101,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/blog/leftSidebar",
                              children: "Blog Left sidebar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 104,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/blog/detailSidebar",
                              children: "Blog Details"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 107,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/blog/noSidebar",
                              children: "Blog No sidebar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 110,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 100,
                            columnNumber: 29
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 96,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
                          nav: true,
                          isOpen: dropdownOpen3,
                          toggle: toggle3,
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
                            nav: true,
                            caret: true,
                            children: "Authentication"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 117,
                            columnNumber: 29
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/auth/signIn",
                              children: "Signin"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 121,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/auth/signInClassic",
                              children: "Signin Classic"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 124,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/auth/signUp",
                              children: "Signup"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 127,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/auth/signUpClassic",
                              children: "Signup Classic"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 130,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 120,
                            columnNumber: 29
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 116,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
                          nav: true,
                          isOpen: dropdownOpen4,
                          toggle: toggle4,
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
                            nav: true,
                            caret: true,
                            children: "Bouns page"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 137,
                            columnNumber: 29
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/bonus/about",
                              children: "About"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 142,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/bonus/faq",
                              children: "FAQ"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 145,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                              href: "/bonus/elements",
                              children: "Elements"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 146,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 141,
                            columnNumber: 29
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 136,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/common/tapTop.js":
/*!********************************!*\
  !*** ./pages/common/tapTop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\chat\\pages\\common\\tapTop.js";



const TapTop = props => {
  const {
    0: taptopStyle,
    1: setTapTopStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("none");

  const executeScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setTapTopStyle("block");
    } else {
      setTapTopStyle("none");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "tap-top",
    style: {
      display: taptopStyle
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
        className: "fa fa-angle-double-up",
        onClick: () => executeScroll()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TapTop);

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvNDA0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbW1vbi9jb21tb25MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tbW9uL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21tb24vaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbW1vbi90YXBUb3AuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJuYW1lcyI6WyJQYWdlNDA0IiwiQ29tbW9uTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsInBhcmVudCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZvb3RlciIsInByb3BzIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwidXNlU3RhdGUiLCJkcm9wZG93bk9wZW4zIiwic2V0RHJvcGRvd25PcGVuMyIsImRyb3Bkb3duT3BlbjQiLCJzZXREcm9wZG93bk9wZW40IiwiaXNNZW51Iiwic2V0aXNNZW51IiwidG9nZ2xlIiwicHJldlN0YXRlIiwidG9nZ2xlMyIsInRvZ2dsZTQiLCJwYXRobmFtZSIsIlRhcFRvcCIsInRhcHRvcFN0eWxlIiwic2V0VGFwVG9wU3R5bGUiLCJleGVjdXRlU2Nyb2xsIiwic2Nyb2xsVG8i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Qix5REFBUyxDQUFDLE1BQU07QUFDZlAsVUFBTSxDQUFDUSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1QsWUFBbEM7QUFDQUEsZ0JBQVk7QUFDWixXQUFPLE1BQU07QUFDWkMsWUFBTSxDQUFDUyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1YsWUFBckM7QUFDQSxLQUZEO0FBR0EsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNDO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsU0FBSyxFQUFFO0FBQUVzQyxhQUFPLEVBQUVQO0FBQVgsS0FBaEM7QUFBQSwyQkFDQztBQUFBLDZCQUNDO0FBQ0MsaUJBQVMsRUFBQyx1QkFEWDtBQUVDLGVBQU8sRUFBRSxNQUFNRSxhQUFhO0FBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBVUEsQ0FqQ0Q7O0FBbUNlSCxxRUFBZixFOzs7Ozs7Ozs7OztBQ3JDQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy80MDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzLzQwNC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IENvbW1vbkxheW91dCBmcm9tIFwiLi4vcGFnZXMvY29tbW9uL2NvbW1vbkxheW91dFwiO1xuXG5jb25zdCBQYWdlNDA0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q29tbW9uTGF5b3V0IHRpdGxlPVwiNDA0XCIgcGFyZW50PVwiaG9tZVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJlcnJvci1tYWluXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2UtZGVjb3JlXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW5uZXIyXCJcbiAgICAgICAgICAgICAgICAvLyBzcmM9Jy9hc3NldHMvaW1hZ2VzL2xhbmRpbmcvZm9vdGVyLzIucG5nJ1xuICAgICAgICAgICAgICAgIGFsdD1cImZvb3Rlci1iYWNrLWltZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGlubmVyMlwiXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy9mb290ZXIvMi5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImZvb3Rlci1iYWNrLWltZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgc209XCIxMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpblwiPlxuICAgICAgICAgICAgICAgICAgPGgxPjQwNDwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDI+UGFnZSBOb3QgRm91bmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICBUaGUgUGFnZSBZb3UgQXJlIEF0dGVtcHRpbmcgVG8gUmVhY2ggSXMgTm90IEF2YWlsYWJsZS57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlRoaXMgTWF5IEJlIEJlY2F1c2UgVGhlIFBhZ2UgRG9lcyBOb3QgRXhpc3QgT3IgSGFzXG4gICAgICAgICAgICAgICAgICAgIEJlZW4gTW92ZWQuXG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cIi9sYW5kaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIGJhY2sgdG8gaG9tZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZC1iZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aT48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxpPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPGk+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ29tbW9uTGF5b3V0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTQwNDtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgVGFwVG9wIGZyb20gXCIuLi9jb21tb24vdGFwVG9wXCI7XG5cbmNvbnN0IENvbW1vbkxheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgcGFyZW50IH0pID0+IHtcblx0Y29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+IDYwKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmRpbmctaGVhZGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJmaXhlZFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kaW5nLWhlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XG5cdFx0fVxuXHR9O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblx0XHRoYW5kbGVTY3JvbGwoKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbm5lci1wYWdlXCI+XG5cdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1tYWluXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aDI+e3RpdGxlfTwvaDI+XG5cdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL21lc3NlbmdlclwiPntwYXJlbnR9PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj57dGl0bGV9PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8PntjaGlsZHJlbn08Lz5cblx0XHRcdDxGb290ZXIgLz5cblx0XHRcdDxUYXBUb3AgLz5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxmb290ZXI+XG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cImZvb3Rlci1tYWluXCI+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwiZm9vdGVyLWJsb2NrXCI+XG5cdFx0XHRcdFx0PENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRpdGxlIGZvb3Rlci1tb2JpbGUtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0PGgzPkFib3V0PC9oMz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYXltZW50IGZvb3Rlci1jb250YW50XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvbGFuZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIuLi9hc3NldHMvaW1hZ2VzL2xvZ28vbGFuZGluZy1sb2dvLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImxvZ29cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRDb250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb21cblx0XHRcdFx0XHRcdFx0XHR0ZXh0LiBJdCBoYXMgcm9vdHMgaW4gYSBwaWVjZSBMb3JlbSBmdWdpdCBvbiBsb29rZWQgaXBzdW0uXG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInNvY2lhbC1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1nb29nbGUgYnV0dG9uLWVmZmVjdCBidG4tc21cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbi1idG4gYnRuLXR3aXRlciBidXR0b24tZWZmZWN0IGJ0bi1zbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb24tYnRuIGJ0bi1saW5rZWRpbiBidXR0b24tZWZmZWN0IGJ0bi1zbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW5cIj48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uLWJ0biBidG4taW5zdGFncmFtIGJ1dHRvbi1lZmZlY3QgYnRuLXNtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIj48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbGc9XCIyXCIgbWQ9XCIzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPlVzZWZ1bCBMaW5rczwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250YW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPkhvbWU8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPkFib3V0IHVzPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5TZXJ2aWNlczwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+QmxvZzwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIGxnPVwiMlwiIG1kPVwiM1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5DaGl0Y2hhdCBIZWxwPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPkZBUTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+U3VwcG9ydDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+VGVhbTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIGxnPVwiMlwiIG1kPVwiNFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5Eb3dubG9hZCBGb3I8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5XaW5kb3dzPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5MaW51eDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+SU9TPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5BbmRyb2lkPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5NYWM8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCBsZz1cIjNcIiBtZD1cIjRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG93bmxhb2RcIj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPkRvd25sb2FkIEFwcHM8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYWN0aXZlXCIgaHJlZj1cIiNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1hcHBsZVwiPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg2PkF2YWlsYWJsZSBvbiB0aGU8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0PkFwcCBzdG9yZTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuXCIgaHJlZj1cIiNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1wbGF5XCI+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDY+QXZhaWxhYmxlIG9uIHRoZTwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQ+R29vZ2xlIHBsYXk8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJhY2stYmxvY2tcIj5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbm5lcjFcIlxuXHRcdFx0XHRcdHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy9mb290ZXIvMi5wbmdcIlxuXHRcdFx0XHRcdGFsdD1cImZvb3Rlci1iYWNrLWltZ1wiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWctZmx1aWQgaW5uZXIyXCJcblx0XHRcdFx0XHRzcmM9XCIuLi9hc3NldHMvaW1hZ2VzL2xhbmRpbmcvZm9vdGVyLzIucG5nXCJcblx0XHRcdFx0XHRhbHQ9XCJmb290ZXItYmFjay1pbWdcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvcHlyaWdodC1mb290ZXJcIj5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPVwiNlwiIHNtPVwiMTJcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlci1sZWZ0XCI+wqkgMjAyMSBDaGl0Y2hhdC4gQWxsIFJpZ2h0cyBSZXNlcnZlZDwvcD5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPVwiNlwiIHNtPVwiMTJcIiBjbGFzc05hbWU9XCJsaW5rc19ob3Jpem9udGFsXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdE1hZGUgd2l0aCA8c3Bhbj4maGVhcnRzOyA8L3NwYW4+QnkgVGhlbWUgUGl4ZWxzdHJhcFxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvZm9vdGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBDb2wsXG4gIENvbGxhcHNlLFxuICBDb250YWluZXIsXG4gIERyb3Bkb3duLFxuICBEcm9wZG93bkl0ZW0sXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIE5hdixcbiAgTmF2YmFyLFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBSb3csXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkcm9wZG93bk9wZW4zLCBzZXREcm9wZG93bk9wZW4zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Ryb3Bkb3duT3BlbjQsIHNldERyb3Bkb3duT3BlbjRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNNZW51LCBzZXRpc01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldERyb3Bkb3duT3BlbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgY29uc3QgdG9nZ2xlMyA9ICgpID0+IHNldERyb3Bkb3duT3BlbjMoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIGNvbnN0IHRvZ2dsZTQgPSAoKSA9PiBzZXREcm9wZG93bk9wZW40KChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiA2MCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kaW5nLWhlYWRlclwiKS5jbGFzc0xpc3QuYWRkKFwiZml4ZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZGluZy1oZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICBoYW5kbGVTY3JvbGwoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvbGFuZGluZ1wiIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCJcbiAgICAgICAgICAgID8gXCJ0aGVtZS1sYW5kaW5nXCJcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGhlYWRlciBpZD1cImhvbWVcIj5cbiAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImN1c3RvbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC14bCBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL2xhbmRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1hZ2VzL2xvZ28vbGFuZGluZy1sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgZC14bC1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtpc01lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0aXNNZW51KCFpc01lbnUpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgZC14bC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hdmJhck5hdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e2lzTWVudX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbWVzc2VuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNzZW5nZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBuYXYgaXNPcGVuPXtkcm9wZG93bk9wZW59IHRvZ2dsZT17dG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgbmF2IGNhcmV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaHJlZj1cIi9ibG9nL3JpZ2h0U2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nIFJpZ2h0IHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL2Jsb2cvbGVmdFNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZyBMZWZ0IHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL2Jsb2cvZGV0YWlsU2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nIERldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL2Jsb2cvbm9TaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2cgTm8gc2lkZWJhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG5hdiBpc09wZW49e2Ryb3Bkb3duT3BlbjN9IHRvZ2dsZT17dG9nZ2xlM30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdiBjYXJldD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL2F1dGgvc2lnbkluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ25pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhyZWY9XCIvYXV0aC9zaWduSW5DbGFzc2ljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ25pbiBDbGFzc2ljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaHJlZj1cIi9hdXRoL3NpZ25VcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWdudXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL2F1dGgvc2lnblVwQ2xhc3NpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWdudXAgQ2xhc3NpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG5hdiBpc09wZW49e2Ryb3Bkb3duT3BlbjR9IHRvZ2dsZT17dG9nZ2xlNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdiBjYXJldD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5zIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaHJlZj1cIi9ib251cy9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhyZWY9XCIvYm9udXMvZmFxXCI+RkFRPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhyZWY9XCIvYm9udXMvZWxlbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRhcFRvcCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCBbdGFwdG9wU3R5bGUsIHNldFRhcFRvcFN0eWxlXSA9IHVzZVN0YXRlKFwibm9uZVwiKTtcblxuXHRjb25zdCBleGVjdXRlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgbGVmdDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+IDYwMCkge1xuXHRcdFx0c2V0VGFwVG9wU3R5bGUoXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0VGFwVG9wU3R5bGUoXCJub25lXCIpO1xuXHRcdH1cblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cdFx0aGFuZGxlU2Nyb2xsKCk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0YXAtdG9wXCIgc3R5bGU9e3sgZGlzcGxheTogdGFwdG9wU3R5bGUgfX0+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS11cFwiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZXhlY3V0ZVNjcm9sbCgpfVxuXHRcdFx0XHQ+PC9pPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXBUb3A7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9