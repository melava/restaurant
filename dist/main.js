/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\nconst content = () => {\n    let contentContainer = document.createElement('div');\n    contentContainer.id = 'page-content';\n\n    return contentContainer\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/content.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerModule\": () => (/* binding */ headerModule)\n/* harmony export */ });\nconst headerModule = () => {\n    let welcome = document.createElement('div');\n    welcome.id = 'welcome';\n    welcome.textContent = 'Welcome to the best pizzeria in town!'\n\n    let banner = document.createElement('div');\n    banner.id = 'banner';\n    banner.appendChild(welcome);\n\n    let headerTag = document.createElement('header');\n    headerTag.appendChild(banner)\n\n    return headerTag\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/homeContent.js":
/*!****************************!*\
  !*** ./src/homeContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeModule\": () => (/* binding */ HomeModule)\n/* harmony export */ });\nconst HomeModule = () => {\n    let home = document.createElement('div');\n    home.classList.add('home');\n\n    let h1 = document.createElement('h1');\n    h1.textContent = 'Pizzzzza!';\n\n    let p1 = document.createElement('p');\n    p1.textContent = 'Come and eat the yummiest pizza ever!';\n\n    let p2 = document.createElement('p');\n    p2.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab laboriosam vero sunt suscipit saepe quasi sit molestiae distinctio ipsam vel sequi qui, consequatur, blanditiis dolorum rem facere mollitia laudantium commodi!';\n\n    home.appendChild(h1);\n    home.appendChild(p1);\n    home.appendChild(p2);\n    \n    return home\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/homeContent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _homeContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeContent */ \"./src/homeContent.js\");\n\n\n\n\n\n\n\nconst globalContainer = document.getElementById('content');\nconst contentContainer = (0,_content__WEBPACK_IMPORTED_MODULE_2__.content)();\n\nglobalContainer.parentNode.prepend((0,_header__WEBPACK_IMPORTED_MODULE_0__.headerModule)());\nglobalContainer.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_1__.navModule)());\ncontentContainer.appendChild((0,_homeContent__WEBPACK_IMPORTED_MODULE_3__.HomeModule)());\nglobalContainer.appendChild(contentContainer)\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navModule\": () => (/* binding */ navModule)\n/* harmony export */ });\nconst navModule = () => {\n    let nav = document.createElement('nav');\n    nav.id = 'tabs';\n\n    let homeTab = document.createElement('div');\n    homeTab.classList.add('tab');\n    homeTab.classList.add('home');\n    homeTab.classList.add('active');\n    homeTab.textContent = 'Home'\n\n    let menuTab = document.createElement('div');\n    menuTab.classList.add('tab');\n    menuTab.classList.add('menu');\n    menuTab.textContent = 'Menu';\n\n    let contactTab = document.createElement('div');\n    contactTab.classList.add('tab');\n    contactTab.classList.add('contact');\n    contactTab.textContent = 'Contact';\n\n    nav.appendChild(homeTab);\n    nav.appendChild(menuTab);\n    nav.appendChild(contactTab);\n\n    return nav\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;