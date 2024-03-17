"use strict";
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);



const CustomButton = ({ label ="" , onClick , disabled , icon , isGrey , extClasses , ...rest })=>{
    const classes = useStyles();
    console.log("disabled", disabled);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: extClasses ? extClasses : classes.btn,
        ...rest,
        onClick: ()=>onClick && onClick(),
        children: [
            " ",
            label
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomButton);
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
    btn: {
        backgroundColor: "#189D3B !important",
        border: "1px solid #189D3B",
        minHeight: "38px",
        padding: "4px",
        marginLeft: ".3rem",
        marginRight: ".3rem",
        color: "#ffffff",
        borderRadius: "8px",
        minWidth: "80px",
        height: "40px"
    }
});


/***/ })

};
;