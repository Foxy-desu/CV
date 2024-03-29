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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-modules/data */ \"./src/js-modules/data.js\");\n/* harmony import */ var _js_modules_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-modules/page */ \"./src/js-modules/page.js\");\n/* harmony import */ var _js_modules_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-modules/header */ \"./src/js-modules/header.js\");\n/* harmony import */ var _js_modules_main_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-modules/main-container */ \"./src/js-modules/main-container.js\");\n/* harmony import */ var _js_modules_aside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js-modules/aside */ \"./src/js-modules/aside.js\");\n/* harmony import */ var _js_modules_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js-modules/main */ \"./src/js-modules/main.js\");\n/* harmony import */ var _js_modules_aside_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js-modules/aside-blocks */ \"./src/js-modules/aside-blocks.js\");\n/* harmony import */ var _js_modules_contacts_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js-modules/contacts-section */ \"./src/js-modules/contacts-section.js\");\n/* harmony import */ var _js_modules_edu_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js-modules/edu-section */ \"./src/js-modules/edu-section.js\");\n/* harmony import */ var _js_modules_skills_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js-modules/skills-section */ \"./src/js-modules/skills-section.js\");\n/* harmony import */ var _js_modules_lang_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js-modules/lang-section */ \"./src/js-modules/lang-section.js\");\n/* harmony import */ var _js_modules_about_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js-modules/about-section */ \"./src/js-modules/about-section.js\");\n/* harmony import */ var _js_modules_exp_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js-modules/exp-section */ \"./src/js-modules/exp-section.js\");\n/* harmony import */ var _js_modules_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js-modules/footer */ \"./src/js-modules/footer.js\");\n/* harmony import */ var _js_modules_section_onhover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js-modules/section-onhover */ \"./src/js-modules/section-onhover\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst experience = (0,_js_modules_exp_section__WEBPACK_IMPORTED_MODULE_12__.renderExp)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst about = (0,_js_modules_about_section__WEBPACK_IMPORTED_MODULE_11__.renderAboutSection)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst langusges = (0,_js_modules_lang_section__WEBPACK_IMPORTED_MODULE_10__.renderLangSection)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst skills = (0,_js_modules_skills_section__WEBPACK_IMPORTED_MODULE_9__.renderSkillsSection)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst education = (0,_js_modules_edu_section__WEBPACK_IMPORTED_MODULE_8__.renderEduSection)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst contacts = (0,_js_modules_contacts_section__WEBPACK_IMPORTED_MODULE_7__.renderContacts)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst asideBlocks = (0,_js_modules_aside_blocks__WEBPACK_IMPORTED_MODULE_6__.renderAsideBlocks)(contacts, education, skills, langusges);\nconst main = (0,_js_modules_main__WEBPACK_IMPORTED_MODULE_5__.renderMain)(about, experience);\nconst aside = (0,_js_modules_aside__WEBPACK_IMPORTED_MODULE_4__.renderAside)(asideBlocks);\nconst footer = (0,_js_modules_footer__WEBPACK_IMPORTED_MODULE_13__.renderFooter)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst mainWrap = (0,_js_modules_main_container__WEBPACK_IMPORTED_MODULE_3__.renderWrap)(aside, main);\nconst header = (0,_js_modules_header__WEBPACK_IMPORTED_MODULE_2__.renderHeader)(_js_modules_data__WEBPACK_IMPORTED_MODULE_0__.cvData);\nconst page = (0,_js_modules_page__WEBPACK_IMPORTED_MODULE_1__.renderPage)(header, mainWrap, footer);\ndocument.body.insertAdjacentHTML(\"afterbegin\", page);\nwindow.addEventListener('resize', _js_modules_section_onhover__WEBPACK_IMPORTED_MODULE_14__.sectionTitleHandler);\n\n//# sourceURL=webpack://cv/./src/index.js?");

/***/ }),

/***/ "./src/js-modules/about-section.js":
/*!*****************************************!*\
  !*** ./src/js-modules/about-section.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAboutSection: () => (/* binding */ renderAboutSection)\n/* harmony export */ });\nfunction renderAboutSection(data) {\n  const about = data.mainBlock.aboutMe;\n  const descElems = about.map(paragraph => {\n    return `<p class=\"about__desc\">&emsp;${paragraph}</p>`;\n  });\n  return `<section class=\"about section\">\n            <h2 class=\"about__heading\">About me</h2>\n            <div class=\"about__desc-block\">\n                ${descElems.join('\\n')}\n            </div>\n        </section>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/about-section.js?");

/***/ }),

/***/ "./src/js-modules/aside-blocks.js":
/*!****************************************!*\
  !*** ./src/js-modules/aside-blocks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAsideBlocks: () => (/* binding */ renderAsideBlocks)\n/* harmony export */ });\nfunction renderAsideBlocks(...blocks) {\n  return `<div class=\"aside__sections\">\n        ${blocks.join('\\n')}\n    </div>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/aside-blocks.js?");

/***/ }),

/***/ "./src/js-modules/aside.js":
/*!*********************************!*\
  !*** ./src/js-modules/aside.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAside: () => (/* binding */ renderAside)\n/* harmony export */ });\nfunction renderAside(...content) {\n  return `<aside class=\"aside\">${content.join('\\n')}</aside>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/aside.js?");

/***/ }),

/***/ "./src/js-modules/contacts-section.js":
/*!********************************************!*\
  !*** ./src/js-modules/contacts-section.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderContacts: () => (/* binding */ renderContacts)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/phone.svg */ \"./src/assets/icons/phone.svg\");\n/* harmony import */ var _assets_icons_mail_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/mail.svg */ \"./src/assets/icons/mail.svg\");\n/* harmony import */ var _assets_icons_telegram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/telegram.svg */ \"./src/assets/icons/telegram.svg\");\n\n\n\nfunction renderContacts(data) {\n  const contacts = data.asideBlock.contacts;\n  const elements = Object.entries(contacts).map(([key, value], index) => {\n    const images = [_assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_0__, _assets_icons_mail_svg__WEBPACK_IMPORTED_MODULE_1__, _assets_icons_telegram_svg__WEBPACK_IMPORTED_MODULE_2__];\n    const hrefs = ['tel:', 'mailto:', 'https://t.me/'];\n    const currentImg = images[index];\n    const currHref = hrefs[index];\n    return `<li class=\"contacts__${key}\">\n                <image\n                    class=\"contacts__ico\"\n                    src=\"${currentImg}\"\n                    alt=\"${key} contact\"/>\n                <a\n                    class=\"contacts__link\"\n                    href=\"${currHref}${value}\">\n                    ${key.toString() === 'telegram' ? '@' : ''}${value}\n                </a>\n            </li>`;\n  });\n  return `<section class=\"contacts section\">\n            <h2 class=\"contacts__heading content-heading\">contacts</h2>\n            <ul class=\"contacts__list\">\n                ${elements.join('\\n')}\n            </ul>\n        </section>`;\n}\n;\n\n\n//# sourceURL=webpack://cv/./src/js-modules/contacts-section.js?");

/***/ }),

/***/ "./src/js-modules/data.js":
/*!********************************!*\
  !*** ./src/js-modules/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cvData: () => (/* binding */ cvData)\n/* harmony export */ });\n/* harmony import */ var _assets_img_photo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/photo.jpeg */ \"./src/assets/img/photo.jpeg\");\n/* harmony import */ var _assets_icons_cofee_house_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/cofee-house.svg */ \"./src/assets/icons/cofee-house.svg\");\n/* harmony import */ var _assets_icons_hangman_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/hangman.png */ \"./src/assets/icons/hangman.png\");\n/* harmony import */ var _assets_icons_japan_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/japan.png */ \"./src/assets/icons/japan.png\");\n/* harmony import */ var _assets_icons_lib_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/lib.png */ \"./src/assets/icons/lib.png\");\n/* harmony import */ var _assets_icons_PLNDSG_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/PLNDSG.png */ \"./src/assets/icons/PLNDSG.png\");\n\n\n\n\n\n\nconst cvData = {\n  name: 'Alexandra',\n  surname: 'Orliuk',\n  position: 'Frontend developer',\n  photo: _assets_img_photo_jpeg__WEBPACK_IMPORTED_MODULE_0__,\n  asideBlock: {\n    contacts: {\n      phone: '+79893544196',\n      mail: 'iammeduza@gmail.com',\n      telegram: 'Pinkalsthedeer'\n    },\n    education: [{\n      university: 'Amur State University',\n      degrees: [{\n        name: 'Bachelor of Linguistics',\n        years: '2014-2018'\n      }, {\n        name: 'Master of Linguistics',\n        years: '2018-2020'\n      }]\n    }],\n    skills: ['HTML5', 'CSS3', 'SASS (SCSS)', 'JS (ES6)', 'React', 'Git', 'GitLab CI/CD', 'NPM', 'Webpack', 'Docker', 'Figma', 'Bash'],\n    languages: {\n      russian: 'native',\n      english: 'advanced',\n      chinese: 'elementary'\n    }\n  },\n  mainBlock: {\n    aboutMe: [\"I've been passionate about frontend development for a while, and have already obtained some skills in it. If you kindly check my GitHub, you may find pet-projects I've made using different technologies. Each time I start a project, I aim not only at consolidation of my knowledge, but also at broadening my professional outlook.\", \"I have some landing pages, multi-page sites, SPA created. The tasks I generally encounter are: layout analysis; blocks, elements and modifiers implementation; DOM and events manipulation, working with objects, arrays and primitive data types using Java Script; adding adaptive and responsive styling. I attempt to use module approach for easy maintenance, opt for code linting and formatting using ESLint, prettier, style lint.\", \"I'm currently learning React, so my latest project is based on it. It also includes libraries for routing, DOM elements manipulation, parsing and purifying HTML code injected in components; it is the first project I start using a UI library 'Swiper' and local storage in\"],\n    experience: [{\n      name: 'Coffee House',\n      desc: '',\n      thumb: _assets_icons_cofee_house_svg__WEBPACK_IMPORTED_MODULE_1__,\n      src: 'https://foxy-desu.github.io/CoffeeHouse/coffee-house/'\n    }, {\n      name: 'Hangman',\n      desc: '',\n      thumb: _assets_icons_hangman_png__WEBPACK_IMPORTED_MODULE_2__,\n      src: 'https://foxy-desu.github.io/HangMan/hangman/src/'\n    }, {\n      name: 'Library landing',\n      desc: '',\n      thumb: _assets_icons_lib_png__WEBPACK_IMPORTED_MODULE_4__,\n      src: 'https://foxy-desu.github.io/Library-landing-project/'\n    }, {\n      name: 'Japan landing',\n      desc: '',\n      thumb: _assets_icons_japan_png__WEBPACK_IMPORTED_MODULE_3__,\n      src: 'https://foxy-desu.github.io/Japan_travel_landing/'\n    }, {\n      name: 'Polina Design',\n      desc: '',\n      thumb: _assets_icons_PLNDSG_png__WEBPACK_IMPORTED_MODULE_5__,\n      src: 'https://foxy-desu.github.io/polina-design/'\n    }]\n  },\n  gitHub: 'https://github.com/Foxy-desu'\n};\n\n\n//# sourceURL=webpack://cv/./src/js-modules/data.js?");

/***/ }),

/***/ "./src/js-modules/edu-section.js":
/*!***************************************!*\
  !*** ./src/js-modules/edu-section.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderEduSection: () => (/* binding */ renderEduSection)\n/* harmony export */ });\nfunction renderEduSection(data) {\n  const education = data.asideBlock.education;\n  const elems = education.map(edu => {\n    const {\n      university: place,\n      degrees\n    } = edu;\n    const degreesElems = degrees.map(deg => {\n      return `<li class=\"entity__degree\">\n                    <p class=\"entity__degree-name\">\n                        ${deg.name}\n                    </p>\n                    <p class=\"entity__degree-years\">\n                        ${deg.years}\n                    </p>\n                </li>`;\n    });\n    return `<li class=\"education__entity\">\n                <h3 class=\"entity__place\">${place}</h3>\n                <ul class=\"entity__degrees\">\n                    ${degreesElems.join('\\n')}\n                </ul>\n            </li>`;\n  });\n  return `<section class=\"education section\">\n            <h2 class=\"education__heading content-heading\">education</h2>\n            <ul class=\"education__list\">\n                ${elems.join('\\n')}\n            </ul>\n        </section>`;\n}\n;\n\n\n//# sourceURL=webpack://cv/./src/js-modules/edu-section.js?");

/***/ }),

/***/ "./src/js-modules/exp-section.js":
/*!***************************************!*\
  !*** ./src/js-modules/exp-section.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderExp: () => (/* binding */ renderExp)\n/* harmony export */ });\nfunction renderExp(data) {\n  const exp = data.mainBlock.experience;\n  const expElems = exp.map(entry => {\n    const name = entry.name.split(' ').map(word => {\n      return `<span>${word}<br></span>`;\n    }).join('\\n');\n    return `<li class=\"experience__exp-entry\">\n                <a class=\"exp-entry__link\" href=\"${entry.src}\">\n                <div class=\"exp-entry__img-wrap\">\n                    <img class=\"exp-entry__img\" width=\"70\" height=\"70\" src=\"${entry.thumb}\" alt=\"${entry.name}\"/>\n                </div>\n                <p class=\"exp-entry__text\">${name}</p></a>\n            </li>`;\n  });\n  return `<section class=\"experience section\">\n            <h2 class=\"experience__heading content-heading\">projects</h2>\n            <ul class=\"experience__list\">\n                ${expElems.join('\\n')}\n            </ul>\n        </section>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/exp-section.js?");

/***/ }),

/***/ "./src/js-modules/footer.js":
/*!**********************************!*\
  !*** ./src/js-modules/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderFooter: () => (/* binding */ renderFooter)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/github.svg */ \"./src/assets/icons/github.svg\");\n\nfunction renderFooter(data) {\n  return `<footer class=\"footer\">\n            <a class=\"git-card\" href=\"${data.gitHub}\">\n                <img class=\"git-card__img\" width=\"25\" height=\"25\" src=\"${_assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"GitHub\"/>\n                <p class=\"git-card__text\">Visit my GitHub</p>\n            </a>\n            <p class=\"footer__year\">2024</p>\n        </footer>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/footer.js?");

/***/ }),

/***/ "./src/js-modules/header.js":
/*!**********************************!*\
  !*** ./src/js-modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeader: () => (/* binding */ renderHeader)\n/* harmony export */ });\nfunction renderHeader(info) {\n  return `<div class=\"wrap\">\n            <header class=\"hero\">\n                <div class=\"hero__desc-block\">\n                    <h1 class=\"person-name\">\n                        <p class=\"person-name__surname\">${info.surname}</p>\n                        <p class=\"person-name__name\">${info.name}</p>\n                    </h1>\n                    <p class=\"person-position\">\n                        ${info.position}\n                    </p>\n                </div>\n            </header>\n        </div>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/header.js?");

/***/ }),

/***/ "./src/js-modules/lang-section.js":
/*!****************************************!*\
  !*** ./src/js-modules/lang-section.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLangSection: () => (/* binding */ renderLangSection)\n/* harmony export */ });\nfunction renderLangSection(data) {\n  const langs = data.asideBlock.languages;\n  const langElems = Object.entries(langs).map(([key, value]) => {\n    return `<li class=\"languages__language\">\n                <span class=\"languages__language-name\">${key}</span> -\n                <span class=\"languages__language-lvl\">${value}</span>\n            </li>`;\n  });\n  return `<section class=\"languages section\">\n            <h2 class=\"languages__heading content-heading\">languages</h2>\n            <ul class=\"languages__list\">\n                ${langElems.join('\\n')}\n            </ul>\n        </section>`;\n}\n;\n\n\n//# sourceURL=webpack://cv/./src/js-modules/lang-section.js?");

/***/ }),

/***/ "./src/js-modules/main-container.js":
/*!******************************************!*\
  !*** ./src/js-modules/main-container.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderWrap: () => (/* binding */ renderWrap)\n/* harmony export */ });\nfunction renderWrap(...content) {\n  return `<div class=\"wrap info-wrap\">${content.join('\\n')}</div>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/main-container.js?");

/***/ }),

/***/ "./src/js-modules/main.js":
/*!********************************!*\
  !*** ./src/js-modules/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMain: () => (/* binding */ renderMain)\n/* harmony export */ });\nfunction renderMain(...content) {\n  return `<main class=\"main\">${content.join('\\n')}</main>`;\n}\n\n\n//# sourceURL=webpack://cv/./src/js-modules/main.js?");

/***/ }),

/***/ "./src/js-modules/page.js":
/*!********************************!*\
  !*** ./src/js-modules/page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPage: () => (/* binding */ renderPage)\n/* harmony export */ });\nfunction renderPage(...elems) {\n  return `<div class=\"page\">${elems.join('\\n')}</div>`;\n}\n;\n\n\n//# sourceURL=webpack://cv/./src/js-modules/page.js?");

/***/ }),

/***/ "./src/js-modules/skills-section.js":
/*!******************************************!*\
  !*** ./src/js-modules/skills-section.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderSkillsSection: () => (/* binding */ renderSkillsSection)\n/* harmony export */ });\nfunction renderSkillsSection(data) {\n  const skills = data.asideBlock.skills;\n  const skillsElems = skills.map(skill => {\n    return `<li class=\"skills__skill\">\n                ${skill}\n            </li>`;\n  });\n  return `<section class=\"skills section\">\n            <h2 class=\"skills__heading content-heading\">skills</h2>\n            <ul class=\"skills__list\">\n                ${skillsElems.join('\\n')}\n            </ul>\n        </section>`;\n}\n;\n\n\n//# sourceURL=webpack://cv/./src/js-modules/skills-section.js?");

/***/ }),

/***/ "./src/js-modules/section-onhover":
/*!****************************************!*\
  !*** ./src/js-modules/section-onhover ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sectionTitleHandler: () => (/* binding */ sectionTitleHandler)\n/* harmony export */ });\nfunction sectionTitleHandler() {\r\n    const sections = document.querySelector('.aside__sections');\r\n    const viewportWidth = window.innerWidth;\r\n    if (viewportWidth <= 740) {\r\n        sections.setAttribute('title', 'Sorry, the block is temporarily unavailable for viewport width under 741px');\r\n    } else {\r\n        sections.removeAttribute('title', 'Sorry, the block is temporarily unavailable for viewport width under 741px');\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://cv/./src/js-modules/section-onhover?");

/***/ }),

/***/ "./src/assets/icons/PLNDSG.png":
/*!*************************************!*\
  !*** ./src/assets/icons/PLNDSG.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3686b0d143fe29008bf8.png\";\n\n//# sourceURL=webpack://cv/./src/assets/icons/PLNDSG.png?");

/***/ }),

/***/ "./src/assets/icons/cofee-house.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/cofee-house.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad970032f13067e4517a.svg\";\n\n//# sourceURL=webpack://cv/./src/assets/icons/cofee-house.svg?");

/***/ }),

/***/ "./src/assets/icons/github.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/github.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1695e28235029d34be2c.svg\";\n\n//# sourceURL=webpack://cv/./src/assets/icons/github.svg?");

/***/ }),

/***/ "./src/assets/icons/hangman.png":
/*!**************************************!*\
  !*** ./src/assets/icons/hangman.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c78e343b72cae332bc56.png\";\n\n//# sourceURL=webpack://cv/./src/assets/icons/hangman.png?");

/***/ }),

/***/ "./src/assets/icons/japan.png":
/*!************************************!*\
  !*** ./src/assets/icons/japan.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea4d65ee94124244b2a9.png\";\n\n//# sourceURL=webpack://cv/./src/assets/icons/japan.png?");

/***/ }),

/***/ "./src/assets/icons/lib.png":
/*!**********************************!*\
  !*** ./src/assets/icons/lib.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0adc5d3c0ff5144ca45f.png\";\n\n//# sourceURL=webpack://cv/./src/assets/icons/lib.png?");

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