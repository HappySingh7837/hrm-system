"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ Users),
/* harmony export */   "Q9": () => (/* binding */ leaves),
/* harmony export */   "mB": () => (/* binding */ leaveType)
/* harmony export */ });
const Users = [
    {
        id: "123",
        name: "1",
        password: "1",
        userName: "1",
        designation: "manager"
    },
    {
        id: "121",
        name: "2",
        password: "2",
        userName: "2",
        designation: "hr"
    },
    {
        id: "3",
        name: "preet",
        password: "3",
        userName: "3",
        designation: "employee"
    }, 
];
const leaves = [
    {
        id: "123",
        name: "1",
        start_date: "1",
        end_date: "1",
        type: "medical",
        reason: "manager",
        status: "Approved"
    },
    {
        id: "121",
        name: "2",
        start_date: "2",
        end_date: "2",
        type: "medical",
        reason: "hr",
        status: "Pending"
    },
    {
        id: "3",
        name: "preet",
        start_date: "3",
        end_date: "3",
        type: "medical",
        reason: "Rejected",
        status: "Rejected"
    }, 
];
const leaveType = [
    {
        id: "12",
        display_text: "medical",
        value: "medical"
    },
    {
        id: "12",
        display_text: "casuol",
        value: "casoul"
    }
];


/***/ }),

/***/ 297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Th": () => (/* binding */ LEAVESDATA),
/* harmony export */   "gI": () => (/* binding */ LOADER),
/* harmony export */   "hM": () => (/* binding */ USERDATA)
/* harmony export */ });
const LOADER = "LOADER";
const USERDATA = "USERDATA";
const LEAVESDATA = "LEAVESDATA";


/***/ }),

/***/ 285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "WI": () => (/* binding */ dispatch),
  "h": () => (/* binding */ store)
});

// UNUSED EXPORTS: persistor

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__(634);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(417);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(695);
// EXTERNAL MODULE: ./src/const/dummy.js
var dummy = __webpack_require__(198);
// EXTERNAL MODULE: ./src/redux/actionType/index.js
var actionType = __webpack_require__(297);
;// CONCATENATED MODULE: ./src/redux/reducers/uiReducer/uiReducer.js



const initialState = {
    loader: false,
    userData: null,
    leavesData: dummy/* leaves */.Q9
};
/* harmony default export */ const uiReducer = ((state = initialState, action)=>{
    const newState = {
        ...state
    };
    switch(action.type){
        case actionType/* LOADER */.gI:
            {
                newState.loader = action.payload;
                return newState;
            }
        case actionType/* USERDATA */.hM:
            {
                newState.userData = action.payload;
                return newState;
            }
        case actionType/* LEAVESDATA */.Th:
            {
                newState.leavesData = action.payload;
                return newState;
            }
        default:
            {
                return newState;
            }
    }
});

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(161);
// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(936);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);
;// CONCATENATED MODULE: ./src/redux/service/redux-persist.js


const persist = (persistConfig, reducer)=>(0,external_redux_persist_.persistReducer)({
        ...persistConfig,
        storage: (storage_default())
    }, reducer);

;// CONCATENATED MODULE: ./src/redux/reducers/index.js



const otpPersistConfig = {
    key: "walletStore"
};
/* harmony default export */ const reducers = ((0,external_redux_.combineReducers)({
    common: persist(otpPersistConfig, uiReducer)
}));

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/redux/store/index.js





const loggerMiddleware = (0,external_redux_logger_.createLogger)();
const store = (0,toolkit_.configureStore)({
    reducer: reducers,
    devTools: "production" !== "production",
    middleware:  false ? 0 : [
        (external_redux_thunk_default())
    ]
});
const persistor = (0,external_redux_persist_.persistStore)(store);
const dispatch = store.dispatch;



/***/ })

};
;