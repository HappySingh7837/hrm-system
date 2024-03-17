"use strict";
exports.id = 777;
exports.ids = [777];
exports.modules = {

/***/ 189:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(285);
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);






const PostHeader = ({})=>{
    const classes = useStyles();
    const user = _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState().common.userData ? _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState().common.userData : null;
    //console.log(user.name);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            className: classes.userName,
                            children: "Hi " + user.name + " Welcome Back"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            label: "Logout"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostHeader);
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
    wrapper: {
        display: "flex",
        padding: "24px ",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btn: {},
    userName: {
        fontSize: "16px",
        fontWeight: "500",
        marginLeft: ".4rem",
        color: "#3A3F3A"
    }
});


/***/ }),

/***/ 226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_buttons_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _const_dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(198);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(285);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);









const LeaveList = ({ isEmp =false , callback  })=>{
    const classes = useStyles();
    const { 0: pending , 1: setPending  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const { 0: leavesData , 1: setLeavesData  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(_const_dummy__WEBPACK_IMPORTED_MODULE_2__/* .leaves */ .Q9);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        const leavesUpdate = _redux_store__WEBPACK_IMPORTED_MODULE_3__/* .store.getState */ .h.getState().common.leavesData;
        setLeavesData(leavesUpdate);
        console.log("Leavesup", _const_dummy__WEBPACK_IMPORTED_MODULE_2__/* .leaves */ .Q9);
    }, [
        callback
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setLeavesData(_const_dummy__WEBPACK_IMPORTED_MODULE_2__/* .leaves */ .Q9);
        console.log("Leaves", _const_dummy__WEBPACK_IMPORTED_MODULE_2__/* .leaves */ .Q9);
    }, [
        _const_dummy__WEBPACK_IMPORTED_MODULE_2__/* .leaves */ .Q9
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (leavesData) {
            const pendingLeaves = leavesData.filter((leave)=>leave.status === "Pending");
            setPending(pendingLeaves);
        }
    }, [
        leavesData
    ]);
    const changeStataus = (leaveId, status)=>{
        const updatedLeaves = _const_dummy__WEBPACK_IMPORTED_MODULE_2__/* .leaves.map */ .Q9.map((leave)=>leave.id === leaveId ? {
                ...leave,
                status: status
            } : leave);
        const pendingLeaves = updatedLeaves.filter((leave)=>leave.status === "Pending");
        setPending(pendingLeaves);
        setLeavesData(updatedLeaves);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        children: [
            pending && pending.map((item)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    className: classes.wrapper,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                            children: [
                                                "Name : ",
                                                item.name
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                            children: [
                                                "Start Date :",
                                                item.start_date
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                            children: [
                                                "End Date : ",
                                                item.end_date
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                    children: [
                                        "Reason : ",
                                        item.reason
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                    children: [
                                        "Status : ",
                                        item.status
                                    ]
                                })
                            ]
                        }),
                        !isEmp && item.status == "Pending" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    label: "Approve",
                                    onClick: ()=>changeStataus(item.id, "Approved")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    label: "Reject",
                                    onClick: ()=>changeStataus(item.id, "Rejected")
                                })
                            ]
                        })
                    ]
                });
            }),
            isEmp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                style: {
                    padding: "20px"
                },
                children: "History of Applied Leaves"
            }),
            leavesData && leavesData.map((item)=>{
                if (item.status != "Pending") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    className: item.status == "Approved" ? classes.wrapperApproved : item.status != "Pending" ? classes.wrapperRejected : classes.wrapper,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                        children: [
                                            "Name : ",
                                            item.name
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                        children: [
                                            "Start Date :",
                                            item.start_date
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                        children: [
                                            "End Date : ",
                                            item.end_date
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                children: [
                                    "Reason : ",
                                    item.reason
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                children: [
                                    "Status : ",
                                    item.status
                                ]
                            })
                        ]
                    })
                });
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaveList);
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)({
    wrapper: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        padding: "20px",
        border: "1px solid #F3A72E",
        borderRadius: "8px",
        alignItems: "center"
    },
    wrapperRejected: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        padding: "20px",
        border: "1px solid #E31B23",
        borderRadius: "8px",
        alignItems: "center"
    },
    wrapperApproved: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        padding: "20px",
        border: "1px solid #189D3B",
        borderRadius: "8px",
        alignItems: "center"
    }
});


/***/ })

};
;