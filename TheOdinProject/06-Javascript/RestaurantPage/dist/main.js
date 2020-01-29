/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contactConetent = \n/*template*/ `\n  <div class='homepage-tagline'> \n    <h2>Contact us!</h2>\n    <p>Phone - 888-888-8888</p>\n    <p>E-mail - Odin@OdinSpiceShop.com</p>\n  </div>\n`\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactConetent);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst homeConetent = \n/*template*/ `\n  <div class='homepage-tagline'> \n    <h2>Welcome to The Odin Spice Shop</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n  </div>\n`\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homeConetent);\n\n//# sourceURL=webpack:///./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst content = document.querySelector('#content');\n\nfunction switchPage() {\n  if (this.innerText === 'Home') {\n    pageSetup(_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  } else if (this.innerText === 'Menu') {\n    pageSetup(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  } else {\n    pageSetup(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n  }\n}\n\nfunction pageSetup(page) {\n  content.innerHTML = _nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"] + page;\n  const menuButtons = document.querySelectorAll('li');\n\n  menuButtons.forEach((button) => {\n    button.addEventListener('click', switchPage);\n  })\n};\n\npageSetup(_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menuContent = /*template*/ `\n\n<h1>Items for Sale</h1>\n  <div class='menu-items'>\n    <div class='menu-item'>\n      <img src= \"../dist/images/salt.jpg\">\n      <p>Odin Real Salt</p>\n    </div>\n\n    <div class='menu-item'>\n      <img src=\"../dist/images/pepper.jpg\">\n      <p>Odin Cracked Pepper</p>\n    </div>  \n\n    <div class='menu-item'>\n      <img src=\"../dist/images/SeasoningBlend.jpg\">\n      <p>Odin's Masterpeice Blend</p>\n    </div>  \n\n    <div class='menu-item'>\n      <img src=\"../dist/images/seasoningSalt.jpg\">\n      <p>Seasoning Salt</p>\n    </div>  \n\n    <div class='menu-item'>\n      <img src=\"../dist/images/bbqSauce.jpg\">\n      <p>BBQ Sauce</p>\n    </div>  \n  </div>\n`\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuContent);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst nav = \n/*template*/ `\n  <nav>\n    <ul>\n      <li>Home</li>\n      <li>Menu</li>\n      <li>Contact</li>\n    </ul>\n  </nav>\n`\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nav);\n\n//# sourceURL=webpack:///./src/nav.js?");

/***/ })

/******/ });