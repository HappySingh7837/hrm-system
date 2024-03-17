"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ userFormValidationGenerator),
/* harmony export */   "c": () => (/* binding */ leaveFormValidationGenerator)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const userFormValidationGenerator = (validationObj)=>{
    const userFormValidation = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        user_name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("User Name is a required."),
        password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Password is a required ."),
        ...validationObj
    });
    console.log("validationObj", validationObj);
    return userFormValidation;
};
const leaveFormValidationGenerator = (validationObj)=>{
    const userFormValidation = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        leave: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("This is a required field."),
        start_date: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("This is a required field."),
        end_date: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("This is a required field."),
        reason: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("This is a required field."),
        ...validationObj
    });
    console.log("validationObj", validationObj);
    return userFormValidation;
};


/***/ }),

/***/ 540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(508);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const CustomInput = ({ label , name , inputRegister , error , msg , type , formEventhandlerOnBlur , formEventhandlerOnFocus , is_compulsory =false , placeholder , req =false , ...rest })=>{
    const classes = useStyles({
        error
    });
    console.log("errors", error);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            className: classes.wrapper,
            children: [
                label && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    children: [
                        label,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                color: "red"
                            },
                            children: is_compulsory ? " *" : ""
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    style: {
                        backgroundColor: "#F7F7F7",
                        display: "flex",
                        padding: "2px",
                        borderRadius: "6px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: classes.inputWrapper,
                        placeholder: placeholder,
                        ref: inputRegister,
                        name: name,
                        error: label,
                        ...rest,
                        type: type,
                        onChange: (e)=>{
                            e.preventDefault();
                        }
                    })
                }),
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    style: {
                        color: "red",
                        fontSize: "12px",
                        marginTop: ".6rem"
                    },
                    children: "Please " + label
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomInput);
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)({
    wrapper: {
        padding: "10px ",
        marginTop: "1rem"
    },
    inputWrapper: {
        border: "none",
        backgroundColor: "#F7F7F7",
        borderColor: "#F7F7F7",
        marginLeft: "0rem",
        padding: ".4rem",
        width: "100%",
        minHeight: "32px",
        borderRadius: "4px",
        "& input": {
            width: "100%",
            padding: "8px",
            outline: "none",
            margin: 0,
            fontSize: "16px",
            fontWeight: 400,
            borderRadius: "4px",
            borderColor: "#F7F7F7",
            backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.greyscale */ .O.greyscale,
            color: (props)=>props.error ? `${_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.red */ .O.red}` : `${_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.black */ .O.black}`,
            border: (props)=>`solid 1px ${props.error ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.red */ .O.red : _theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.greyscale */ .O.greyscale}`,
            "&::placeholder": {
                color: (props)=>props.error ? `${_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.red */ .O.red}` : `${_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.greyText */ .O.greyText}`,
                fontSize: "1rem"
            }
        },
        "&:focus": {
            borderColor: (props)=>props.error ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.red */ .O.red : _theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.greyscale */ .O.greyscale,
            borderColor: "#F7F7F7"
        }
    }
});


/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XN": () => (/* binding */ setUserDetails),
/* harmony export */   "xW": () => (/* binding */ leaveDetails)
/* harmony export */ });
/* unused harmony export spinner */
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);

const spinner = (value)=>{
    return {
        type: LOADER,
        payload: value
    };
};
const setUserDetails = (value)=>{
    return {
        type: _actionType__WEBPACK_IMPORTED_MODULE_0__/* .USERDATA */ .hM,
        payload: value
    };
};
const leaveDetails = (value)=>{
    return {
        type: _actionType__WEBPACK_IMPORTED_MODULE_0__/* .LEAVESDATA */ .Th,
        payload: value
    };
};


/***/ }),

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors)
/* harmony export */ });
const colors = {
    white: "#FFFFFF",
    grey: "#DBDBDB",
    green: "#339137",
    headerBlue: "#2670B4",
    headerOrange: "#E95400",
    grey: "#DBDBDB",
    greyText: "#797E79",
    primaryGreen: "#339137",
    greenBackground: "#3CA14012",
    lightGreyBackground: "#F8F9F8",
    lightBlackText: "#3A3F3A",
    black: "#000000",
    greyscale: "#F8F9F8",
    lightGreen: "#F3F9F3",
    lightGrey: "#E4E5E4",
    darkGrey: "#F2F2F2",
    red: "#EB374C"
};


/***/ })

};
;