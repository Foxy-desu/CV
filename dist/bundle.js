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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-modules/data */ \"./src/js-modules/data.js\");\n/* harmony import */ var _js_modules_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-modules/page */ \"./src/js-modules/page.js\");\n/* harmony import */ var _js_modules_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-modules/header */ \"./src/js-modules/header.js\");\n/* harmony import */ var _js_modules_main_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-modules/main-container */ \"./src/js-modules/main-container.js\");\n/* harmony import */ var _js_modules_aside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js-modules/aside */ \"./src/js-modules/aside.js\");\n/* harmony import */ var _js_modules_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js-modules/main */ \"./src/js-modules/main.js\");\n/* harmony import */ var _js_modules_aside_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js-modules/aside-blocks */ \"./src/js-modules/aside-blocks.js\");\n/* harmony import */ var _js_modules_contacts_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js-modules/contacts-section */ \"./src/js-modules/contacts-section.js\");\n/* harmony import */ var _js_modules_edu_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js-modules/edu-section */ \"./src/js-modules/edu-section.js\");\n\n\n\n\n\n\n\n\n\nconst education = (0,_js_modules_edu_section__WEBPACK_IMPORTED_MODULE_8__.renderEduSection)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst contacts = (0,_js_modules_contacts_section__WEBPACK_IMPORTED_MODULE_7__.renderContacts)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst asideBlocks = (0,_js_modules_aside_blocks__WEBPACK_IMPORTED_MODULE_6__.renderAsideBlocks)(contacts, education);\nconst main = (0,_js_modules_main__WEBPACK_IMPORTED_MODULE_5__.renderMain)('content main');\nconst aside = (0,_js_modules_aside__WEBPACK_IMPORTED_MODULE_4__.renderAside)(asideBlocks);\nconst mainWrap = (0,_js_modules_main_container__WEBPACK_IMPORTED_MODULE_3__.renderWrap)(aside, main);\nconst header = (0,_js_modules_header__WEBPACK_IMPORTED_MODULE_2__.renderHeader)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst page = (0,_js_modules_page__WEBPACK_IMPORTED_MODULE_1__.renderPage)(header, mainWrap);\ndocument.body.insertAdjacentHTML(\"afterbegin\", page);\n\n//# sourceURL=webpack://cv/./src/index.js?");

/***/ }),

/***/ "./src/js-modules/aside-blocks.js":
/*!****************************************!*\
  !*** ./src/js-modules/aside-blocks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAsideBlocks: () => (/* binding */ renderAsideBlocks)\n/* harmony export */ });\nfunction renderAsideBlocks(...blocks) {\n  return `<div className=\"aside__sections\">\n        ${blocks.join('\\n')}\n    </div>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/aside-blocks.js?");

/***/ }),

/***/ "./src/js-modules/aside.js":
/*!*********************************!*\
  !*** ./src/js-modules/aside.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAside: () => (/* binding */ renderAside)\n/* harmony export */ });\nfunction renderAside(...content) {\n  return `<aside className=\"aside\">${content.join('\\n')}</aside>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/aside.js?");

/***/ }),

/***/ "./src/js-modules/contacts-section.js":
/*!********************************************!*\
  !*** ./src/js-modules/contacts-section.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderContacts: () => (/* binding */ renderContacts)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/phone.svg */ \"./src/assets/icons/phone.svg\");\n/* harmony import */ var _assets_icons_mail_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/mail.svg */ \"./src/assets/icons/mail.svg\");\n/* harmony import */ var _assets_icons_telegram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/telegram.svg */ \"./src/assets/icons/telegram.svg\");\n\n\n\nfunction renderContacts(data) {\n  const contacts = data.asideBlock.contacts;\n  const elements = Object.entries(contacts).map(([key, value], index) => {\n    const images = [_assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_0__, _assets_icons_mail_svg__WEBPACK_IMPORTED_MODULE_1__, _assets_icons_telegram_svg__WEBPACK_IMPORTED_MODULE_2__];\n    const hrefs = ['tel:', 'mailto:', 'https://t.me/'];\n    const currentImg = images[index];\n    const currHref = hrefs[index];\n    return `<li className=\"contacts__${key}\">\n                <image\n                    className=\"contacts__ico\"\n                    src=\"${currentImg}\"\n                    alt=\"${key} contact\"/>\n                <a\n                    className=\"contacts__link\"\n                    href=\"${currHref}${value}\">\n                    ${key.toString() === 'telegram' ? '@' : ''}${value}\n                </a>\n            </li>`;\n  });\n  return `<section>\n            <h2 className=\"contacts__heading content-heading\">Contacts</h2>\n            <ul className=\"contacts__list content-list\">\n                ${elements.join('\\n')}\n            </ul>\n        </section>`;\n}\n;\n\n\n//# sourceURL=webpack://cv/./src/js-modules/contacts-section.js?");

/***/ }),

/***/ "./src/js-modules/data.js":
/*!********************************!*\
  !*** ./src/js-modules/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cvData: () => (/* binding */ cvData)\n/* harmony export */ });\n/* harmony import */ var _assets_img_photo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/photo.jpeg */ \"./src/assets/img/photo.jpeg\");\n\nconst cvData = {\n  name: 'Alexandra',\n  surname: 'Orliuk',\n  position: 'Frontend developer',\n  photo: _assets_img_photo_jpeg__WEBPACK_IMPORTED_MODULE_0__,\n  asideBlock: {\n    contacts: {\n      phone: '+79893544196',\n      mail: 'iammeduza@gmail.com',\n      telegram: 'pincalsthedeer'\n    },\n    education: [{\n      university: 'Amur State University',\n      degrees: [{\n        name: 'Bachelor of Linguistics',\n        years: '2014-2018'\n      }, {\n        name: 'Master of Linguistics',\n        years: '2018-2020'\n      }]\n    }],\n    skills: ['HTML5', 'CSS3', 'SASS (SCSS)', 'JS', 'NPM', 'Webpack', 'Figma', 'Git', 'Bash'],\n    languages: {\n      russian: 'native',\n      english: 'advanced',\n      chinese: 'elementary'\n    }\n  },\n  mainBlock: {\n    aboutMe: [\"Having graduated the university I started my carreer as a teacher of foreign languages at a local foreign language school in Blagoveshchensk. Being a teacher was fun, it also helped a lot in ganing different skills. After 4 years of teaching I found out that this was not my kind of thing.\", \"Some circumstances made me leave my hometown for another city where I started working as a client support agent for an IT company. This position gave me much experience in communication, problem solving; let me take a closer look at technical side of our service, and business processes in our company. Working with high skilled developers I realized that frontend developing is an interesting IT field. I've started learning and have already obtaines some hard skills.\", \"I believe my strong will, background and passion for frontend will surely lead me to this brand-new profession.\"],\n    experience: [{\n      name: 'Coffee House',\n      desc: '',\n      thumb: '',\n      src: 'https://foxy-desu.github.io/CoffeeHouse/coffee-house/'\n    }, {\n      name: 'Hangman',\n      desc: '',\n      thumb: '',\n      src: 'https://foxy-desu.github.io/HangMan/hangman/src/'\n    }, {\n      name: 'Library landing',\n      desc: '',\n      thumb: '',\n      src: 'https://foxy-desu.github.io/Library-landing-project/'\n    }, {\n      name: 'Japan landing',\n      desc: '',\n      thumb: '',\n      src: 'https://foxy-desu.github.io/Japan_travel_landing/'\n    }]\n  }\n};\n\n\n//# sourceURL=webpack://cv/./src/js-modules/data.js?");

/***/ }),

/***/ "./src/js-modules/edu-section.js":
/*!***************************************!*\
  !*** ./src/js-modules/edu-section.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderEduSection: () => (/* binding */ renderEduSection)\n/* harmony export */ });\nfunction renderEduSection(data) {\n  const education = data.asideBlock.education;\n  const elems = education.map(edu => {\n    const {\n      university: place,\n      degrees\n    } = edu;\n    const degreesElems = degrees.map(deg => {\n      return `<li className=\"entity__degree\">\n                    <p className=\"entity__degree-name\">\n                        ${deg.name}\n                    </p>\n                    <p className=\"entity__degree-years\">\n                        ${deg.years}\n                    </p>\n                </li>`;\n    });\n    return `<li className=\"education__entity\">\n                <h3 className=\"entity__place\">${place}</h3>\n                <ul className=\"entity__degrees\">\n                    ${degreesElems.join('\\n')}\n                </ul>\n            </li>`;\n  });\n  return `<section className=\"education\">\n            <h2 className=\"education__heading\">Education</h2>\n            <ul className=\"education__list\">\n                ${elems.join('\\n')}\n            </ul>\n        </section>`;\n}\n;\n\n\n//# sourceURL=webpack://cv/./src/js-modules/edu-section.js?");

/***/ }),

/***/ "./src/js-modules/header.js":
/*!**********************************!*\
  !*** ./src/js-modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeader: () => (/* binding */ renderHeader)\n/* harmony export */ });\nfunction renderHeader(info) {\n  return `<header className=\"hero\">\n            <div className=\"hero__desc-block\">\n                <h1 className=\"person-name\">\n                    <span className=\"surname\">${info.surname}</span>\n                    <span className=\"name\">${info.name}</span>\n                <h1>\n                <p className=\"person-position\">\n                    ${info.position}\n                </p>\n            </div>\n            <div className=\"hero__image-block\">\n                <div className=\"person-photo\">\n                    <img className=\"person-photo__img\" src=\"${info.photo}\">\n                </div>\n            </div>\n        </header>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/header.js?");

/***/ }),

/***/ "./src/js-modules/main-container.js":
/*!******************************************!*\
  !*** ./src/js-modules/main-container.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderWrap: () => (/* binding */ renderWrap)\n/* harmony export */ });\nfunction renderWrap(...content) {\n  return `<div className=\"wrap\">${content.join('\\n')}</div>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/main-container.js?");

/***/ }),

/***/ "./src/js-modules/main.js":
/*!********************************!*\
  !*** ./src/js-modules/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMain: () => (/* binding */ renderMain)\n/* harmony export */ });\nfunction renderMain(...content) {\n  return `<main className=\"main\">${content.join('\\n')}</main>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/main.js?");

/***/ }),

/***/ "./src/js-modules/page.js":
/*!********************************!*\
  !*** ./src/js-modules/page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPage: () => (/* binding */ renderPage)\n/* harmony export */ });\nfunction renderPage(...elems) {\n  return `<div className=\"page\">${elems.join('\\n')}</div>`;\n}\n;\n\n\n//# sourceURL=webpack://cv/./src/js-modules/page.js?");

/***/ }),

/***/ "./src/assets/icons/mail.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/mail.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2668a915b3d9b349ea3.svg\";\n\n//# sourceURL=webpack://cv/./src/assets/icons/mail.svg?");

/***/ }),

/***/ "./src/assets/icons/phone.svg":
/*!************************************!*\
  !*** ./src/assets/icons/phone.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76ef8227d53cb2d1f0f4.svg\";\n\n//# sourceURL=webpack://cv/./src/assets/icons/phone.svg?");

/***/ }),

/***/ "./src/assets/icons/telegram.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/telegram.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c3b6e7b044bd32fb1f3.svg\";\n\n//# sourceURL=webpack://cv/./src/assets/icons/telegram.svg?");

/***/ }),

/***/ "./src/assets/img/photo.jpeg":
/*!***********************************!*\
  !*** ./src/assets/img/photo.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6dfc7e156072ad8aa988.jpeg\";\n\n//# sourceURL=webpack://cv/./src/assets/img/photo.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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