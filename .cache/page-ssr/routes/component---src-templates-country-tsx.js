"use strict";
exports.id = "component---src-templates-country-tsx";
exports.ids = ["component---src-templates-country-tsx"];
exports.modules = {

/***/ "./src/pages/countries/index.module.scss":
/*!***********************************************!*\
  !*** ./src/pages/countries/index.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countries: () => (/* binding */ countries),
/* harmony export */   country: () => (/* binding */ country)
/* harmony export */ });
// Exports
var country = "index-module--country--1c82d";
var countries = "index-module--countries--5827f";


/***/ }),

/***/ "./src/templates/country.tsx?export=default":
/*!**************************************************!*\
  !*** ./src/templates/country.tsx?export=default ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_countries_index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/countries/index.module.scss */ "./src/pages/countries/index.module.scss");


const Country = ({
  data
}) => {
  const {
    name,
    capital,
    region,
    population,
    flag,
    languages
  } = data.country;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _pages_countries_index_module_scss__WEBPACK_IMPORTED_MODULE_1__.country
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: flag,
    alt: `Flag of ${name}`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Capital:"), " ", capital), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Region:"), " ", region), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Population:"), " ", population), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Languages:"), " ", languages));
};
const query = "3409424948";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Country);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-country-tsx.js.map