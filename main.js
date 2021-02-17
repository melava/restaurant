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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _menuContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuContent */ \"./src/menuContent.js\");\n\n\n\n// import { HomeModule } from './homeContent'\n\n\n\n\n\nconst globalContainer = document.getElementById('content');\nconst contentContainer = (0,_content__WEBPACK_IMPORTED_MODULE_2__.content)();\n\nglobalContainer.parentNode.prepend((0,_header__WEBPACK_IMPORTED_MODULE_0__.headerModule)());\nglobalContainer.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_1__.navModule)());\n// contentContainer.appendChild(HomeModule());\ncontentContainer.appendChild((0,_menuContent__WEBPACK_IMPORTED_MODULE_3__.MenuModule)());\n\nglobalContainer.appendChild(contentContainer)\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuContent.js":
/*!****************************!*\
  !*** ./src/menuContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuModule\": () => (/* binding */ MenuModule)\n/* harmony export */ });\nconst MenuModule = () => {\n    let menu = document.createElement('div');\n    menu.classList.add('menu');\n    \n    let h1 = document.createElement('h1');\n    h1.textContent = 'You must make your pick!';\n\n    let p1 = document.createElement('p');\n    p1.textContent = 'Even if it\\'s so hard to choose between all our delicious pizza!';\n\n    let ul = document.createElement('ul');\n\n    let json = __webpack_require__(/*! ./menuList.json */ \"./src/menuList.json\");\n    let pizzaList = json[\"Pizzas\"];\n    pizzaList.forEach(pizza => {\n        let li = document.createElement('li');\n        li.textContent = `${pizza.name} - ${pizza.price}`;\n        li.style.backgroundImage = `url(../img/${pizza.img})`\n        ul.appendChild(li)\n    });\n\n    \n    menu.appendChild(h1);\n    menu.appendChild(p1);\n    menu.appendChild(ul);\n    \n    return menu\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/menuContent.js?");

/***/ }),

/***/ "./src/menuList.json":
/*!***************************!*\
  !*** ./src/menuList.json ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"Pizzas\":[{\"name\":\"Pizza Margherita\",\"price\":\"9$\",\"img\":\"pizza-mini.jpg\"},{\"name\":\"Pizza Bolognese\",\"price\":\"12$\",\"img\":\"pizza-mini.jpg\"},{\"name\":\"Pizza quattro Staggione\",\"price\":\"9$\",\"img\":\"pizza-mini.jpg\"},{\"name\":\"Pizza quattro Fromaggi\",\"price\":\"9$\",\"img\":\"pizza-mini.jpg\"},{\"name\":\"Pizza Peperoni\",\"price\":\"9$\",\"img\":\"pizza-mini.jpg\"},{\"name\":\"Pizza Funghi\",\"price\":\"9$\",\"img\":\"pizza-mini.jpg\"},{\"name\":\"Pizza Cacciatore\",\"price\":\"9$\",\"img\":\"pizza-mini.jpg\"},{\"name\":\"Pizza Calzone\",\"price\":\"9$\",\"img\":\"pizza-mini.jpg\"},{\"name\":\"Pizza Salami piccante\",\"price\":\"9$\",\"img\":\"pizza-mini.jpg\"},{\"name\":\"Pizza Frutti di mare\",\"price\":\"9$\",\"img\":\"pizza-mini.jpg\"}]}');\n\n//# sourceURL=webpack://restaurant/./src/menuList.json?");

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