"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(285);
// pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: _redux_store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 634:
/***/ ((module) => {

module.exports = require("redux-logger");

/***/ }),

/***/ 161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [285], () => (__webpack_exec__(654)));
module.exports = __webpack_exports__;

})();