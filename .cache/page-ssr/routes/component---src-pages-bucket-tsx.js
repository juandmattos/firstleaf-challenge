"use strict";
exports.id = "component---src-pages-bucket-tsx";
exports.ids = ["component---src-pages-bucket-tsx"];
exports.modules = {

/***/ "./src/components/Countdown/index.module.scss":
/*!****************************************************!*\
  !*** ./src/components/Countdown/index.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blink: () => (/* binding */ blink),
/* harmony export */   blinker: () => (/* binding */ blinker),
/* harmony export */   countdown: () => (/* binding */ countdown),
/* harmony export */   counter: () => (/* binding */ counter),
/* harmony export */   label: () => (/* binding */ label),
/* harmony export */   timesUp: () => (/* binding */ timesUp)
/* harmony export */ });
// Exports
var countdown = "index-module--countdown--a2363";
var label = "index-module--label--41e86";
var counter = "index-module--counter--9f104";
var blink = "index-module--blink--fbde3";
var blinker = "index-module--blinker--9d8c8";
var timesUp = "index-module--times-up--35605";


/***/ }),

/***/ "./src/components/TheBucket/index.module.scss":
/*!****************************************************!*\
  !*** ./src/components/TheBucket/index.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   button: () => (/* binding */ button)
/* harmony export */ });
// Exports
var button = "index-module--button--75c6f";


/***/ }),

/***/ "./src/components/Countdown/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Countdown/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Countdown/index.module.scss");


const Countdown = ({
  initialSeconds = 1800,
  label = "Reserving your wines for",
  loop = false,
  customClass = "",
  onFinish = () => {}
}) => {
  const {
    0: seconds,
    1: setSeconds
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSeconds);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        const end = loop ? initialSeconds : 0;
        return prevSeconds > 0 ? prevSeconds - 1 : end;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [initialSeconds, loop]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (seconds === 0) {
      onFinish();
    }
  }, [seconds, onFinish]);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const counter = `00:${`0${minutes}`.slice(-2)}:${`0${remainingSeconds}`.slice(-2)}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `${_index_module_scss__WEBPACK_IMPORTED_MODULE_1__.countdown} ${customClass}`
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `${_index_module_scss__WEBPACK_IMPORTED_MODULE_1__.label} countdown-label`
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `${_index_module_scss__WEBPACK_IMPORTED_MODULE_1__.counter} countdown-counter`
  }, counter));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);

/***/ }),

/***/ "./src/components/TheBucket/index.tsx":
/*!********************************************!*\
  !*** ./src/components/TheBucket/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/TheBucket/index.module.scss");
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Countdown */ "./src/components/Countdown/index.tsx");



const Bucket = ({
  batchSize,
  onBatchFull,
  disabled
}) => {
  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const updateCount = () => {
    const newCount = count + 1;
    const batchFull = newCount % batchSize === 0; // fix the "4 is a batch" issue
    setCount(newCount);
    if (batchFull) {
      onBatchFull(); // remove unused argument
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: updateCount,
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__.button,
    disabled: disabled
  }, count, " glasses poured");
};
const ThreeButtons = () => {
  const {
    0: batchCount,
    1: setBatchCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: timeIsUp,
    1: setTimeIsUp
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleFullBatch = () => {
    setBatchCount(prevCount => prevCount + 1); // Update a value properly
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, timeIsUp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Total ", batchCount), !timeIsUp && !!batchCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: new Date().toISOString(),
    initialSeconds: 5,
    label: "",
    onFinish: () => setTimeIsUp(true)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Bucket, {
    onBatchFull: handleFullBatch,
    batchSize: 3,
    disabled: timeIsUp
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeButtons);

/***/ }),

/***/ "./src/pages/bucket.tsx?export=default":
/*!*********************************************!*\
  !*** ./src/pages/bucket.tsx?export=default ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TheBucket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TheBucket */ "./src/components/TheBucket/index.tsx");


const BucketPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Sample content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TheBucket__WEBPACK_IMPORTED_MODULE_1__["default"], null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BucketPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-bucket-tsx.js.map