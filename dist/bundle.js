/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Prata-Regular.ttf */ "./src/Prata-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/5330558.jpg */ "./src/images/5330558.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'prata';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* Custom Properties */
:root {
    --small-space: 10px;
    --medium-space: 30px;
    --large-space: 50px;
    --default-font: 1rem;
}

/* General */

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: var(--default-font);
    font-family: 'prata',  sans-serif;
}

body {
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
}


#top,
#middle,
#bottom {
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    height: 50px;
    width: 50px;
}

/* Top */
#top {
    gap: var(--small-space);
    flex-direction: column;
}

.weather-disp {
    display: flex;
    gap: var(--large-space);
    margin-left: 20px;
}

.day {
    width: 125px;
}

button {
    font-size: 0.8rem;
    background: none;
    border: 2px solid rgba(0, 0, 0, 0);
    padding: 5px var(--small-space);
    margin-left: var(--small-space);
}

button:hover {
    cursor: grab;
}

.daily {
    border: 2px solid black;
}

.high,
.low {
    margin-top: var(--small-space);
    font-size: 14px;
}

.low {
    font-size: 0.7rem;
}

/* Middle */
#middle {
    flex-direction: column;
    gap: 5px;
}

.city {
    font-size: 3.2rem;
    font-weight: 600;
}

.time,
.date {
    font-size: 0.8rem;
}

.condition-icon {
    height: 100px;
    width: 100px;
}

.temp,
.condition {
    font-weight: 600;
    font-size: 1.5rem;
}

.temp-icon-condition {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.temp-units,
.temp-condition,
.time-date {
    display: flex;
    gap: var(--small-space);
    align-items: center;
}

#searchBar {
    background: none;
    border: none;
    border-bottom: black 2px solid;
    padding-left: var(--small-space);   
}

#searchBar:focus {
    outline: none; 
}

.switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 16px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}
  
  .slider:before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}
  
  input:checked + .slider {
    background-color: #2196F3;
}
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}
  
  input:checked + .slider:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
}

.slider.round {
    border-radius: 34px;
}
  
  .slider.round:before {
    border-radius: 50%;
}

.error-message {
    font-size: 12px;
    color: rgb(202, 50, 50);
    padding: var(--small-space) 0px;
}

/* Bottom */
#bottom {
    gap: var(--large-space);
    margin-left: 50px;
}

.right-disp {
    width: 210px;
    height: 100px;
    display: flex;
}

.right-cont {
    margin-left: var(--small-space);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAA+B;AACnC;;AAEA,sBAAsB;AACtB;IACI,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA,YAAY;;AAEZ;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,iHAAqG;IACrG,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;;IAEtB,aAAa;IACb,+BAA+B;AACnC;;;AAGA;;;IAGI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA,QAAQ;AACR;IACI,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kCAAkC;IAClC,+BAA+B;IAC/B,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,WAAW;AACX;IACI,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;;IAEI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;;;IAGI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;AACnB;;EAEE;IACE,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,UAAU;IACV,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;AACnB;;EAEE;IACE,yBAAyB;AAC7B;;EAEE;IACE,2BAA2B;AAC/B;;EAEE;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;EAEE;IACE,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA,WAAW;AACX;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,+BAA+B;AACnC","sourcesContent":["@font-face {\n    font-family: 'prata';\n    src: url('./Prata-Regular.ttf');\n}\n\n/* Custom Properties */\n:root {\n    --small-space: 10px;\n    --medium-space: 30px;\n    --large-space: 50px;\n    --default-font: 1rem;\n}\n\n/* General */\n\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-size: var(--default-font);\n    font-family: 'prata',  sans-serif;\n}\n\nbody {\n    height: 100vh;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url('./images/5330558.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    display: grid;\n    grid-template-rows: 1fr 2fr 1fr;\n}\n\n\n#top,\n#middle,\n#bottom {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.icon {\n    height: 50px;\n    width: 50px;\n}\n\n/* Top */\n#top {\n    gap: var(--small-space);\n    flex-direction: column;\n}\n\n.weather-disp {\n    display: flex;\n    gap: var(--large-space);\n    margin-left: 20px;\n}\n\n.day {\n    width: 125px;\n}\n\nbutton {\n    font-size: 0.8rem;\n    background: none;\n    border: 2px solid rgba(0, 0, 0, 0);\n    padding: 5px var(--small-space);\n    margin-left: var(--small-space);\n}\n\nbutton:hover {\n    cursor: grab;\n}\n\n.daily {\n    border: 2px solid black;\n}\n\n.high,\n.low {\n    margin-top: var(--small-space);\n    font-size: 14px;\n}\n\n.low {\n    font-size: 0.7rem;\n}\n\n/* Middle */\n#middle {\n    flex-direction: column;\n    gap: 5px;\n}\n\n.city {\n    font-size: 3.2rem;\n    font-weight: 600;\n}\n\n.time,\n.date {\n    font-size: 0.8rem;\n}\n\n.condition-icon {\n    height: 100px;\n    width: 100px;\n}\n\n.temp,\n.condition {\n    font-weight: 600;\n    font-size: 1.5rem;\n}\n\n.temp-icon-condition {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n}\n\n.temp-units,\n.temp-condition,\n.time-date {\n    display: flex;\n    gap: var(--small-space);\n    align-items: center;\n}\n\n#searchBar {\n    background: none;\n    border: none;\n    border-bottom: black 2px solid;\n    padding-left: var(--small-space);   \n}\n\n#searchBar:focus {\n    outline: none; \n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 16px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 8px;\n    width: 8px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n}\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(14px);\n    -ms-transform: translateX(14px);\n    transform: translateX(14px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n  .slider.round:before {\n    border-radius: 50%;\n}\n\n.error-message {\n    font-size: 12px;\n    color: rgb(202, 50, 50);\n    padding: var(--small-space) 0px;\n}\n\n/* Bottom */\n#bottom {\n    gap: var(--large-space);\n    margin-left: 50px;\n}\n\n.right-disp {\n    width: 210px;\n    height: 100px;\n    display: flex;\n}\n\n.right-cont {\n    margin-left: var(--small-space);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api-functions.js":
/*!******************************!*\
  !*** ./src/api-functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRelaventData: () => (/* binding */ getRelaventData),
/* harmony export */   grabCurrentWeatherData: () => (/* binding */ grabCurrentWeatherData),
/* harmony export */   grabForecastWeatherData: () => (/* binding */ grabForecastWeatherData)
/* harmony export */ });
const middle = document.getElementById('middle')

function makeErrorMessage() {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Enter search in the form of "City", "City, State", "City, Country", or "Zip Code"'
    middle.insertBefore(errorMessage, document.querySelector('.temp-units'));
}

function removeErrorMessage() {
    middle.removeChild(document.querySelector('.error-message'));
}

// Takes a location as a parameter and returns weather information for the location using weatherapi
async function grabCurrentWeatherData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3e2d011cbd1d4bf4996154952233105&q=${location}`, {mode:'cors'}); // Fetches data from server
    const data = await response.json(); // Converts into usable JS code
    return data
};

async function grabForecastWeatherData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3e2d011cbd1d4bf4996154952233105&q=${location}&days=7`, {mode: 'cors'});
    const data = await response.json();
    return data;
}

// Takes location of interst as a parameter and returns an object that contains all relavent information for the weather app.
async function getRelaventData(location) {
    try {
        if (document.querySelector('.error-message')) {
            removeErrorMessage();
        };
        const current = await grabCurrentWeatherData(location);
        const forecast = await grabForecastWeatherData(location);
        const relaventData = {
            city: current.location.name,
            temp: current.current.temp_f,
            time: current.location.localtime.slice(11, 16),
            date: current.location.localtime.slice(0, 10),
            condition: current.current.condition.text,
            feelsLike: current.current.feelslike_f,
            humidity: current.current.humidity + ' %',
            chanceOfRain: forecast.forecast.forecastday[0].day.daily_chance_of_rain + ' %',
            wind: current.current.wind_mph + ' mph',
            sevenDay: {
                0: {
                    condition: forecast.forecast.forecastday[0].day.condition.text,
                    fMax: forecast.forecast.forecastday[0].day.maxtemp_f,
                    fMin: forecast.forecast.forecastday[0].day.mintemp_f,
                    cMax: forecast.forecast.forecastday[0].day.maxtemp_c,
                    cMin: forecast.forecast.forecastday[0].day.mintemp_c,
                    date: forecast.forecast.forecastday[0].date
                },
                1: {
                    condition: forecast.forecast.forecastday[1].day.condition.text,
                    fMax: forecast.forecast.forecastday[1].day.maxtemp_f,
                    fMin: forecast.forecast.forecastday[1].day.mintemp_f,
                    cMax: forecast.forecast.forecastday[1].day.maxtemp_c,
                    cMin: forecast.forecast.forecastday[1].day.mintemp_c,
                    date: forecast.forecast.forecastday[1].date
                },
                2: {
                    condition: forecast.forecast.forecastday[2].day.condition.text,
                    fMax: forecast.forecast.forecastday[2].day.maxtemp_f,
                    fMin: forecast.forecast.forecastday[2].day.mintemp_f,
                    cMax: forecast.forecast.forecastday[2].day.maxtemp_c,
                    cMin: forecast.forecast.forecastday[2].day.mintemp_c,
                    date: forecast.forecast.forecastday[2].date
                }
            },
            hourly: forecast.forecast.forecastday[0].hour,
            cTemp: current.current.temp_c,
            cFeelsLike: current.current.feelslike_c,
        };
        return relaventData;
    } catch {
        makeErrorMessage();
    }
}



/***/ }),

/***/ "./src/Prata-Regular.ttf":
/*!*******************************!*\
  !*** ./src/Prata-Regular.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "857e5f92e0747181aa02.ttf";

/***/ }),

/***/ "./src/images/5330558.jpg":
/*!********************************!*\
  !*** ./src/images/5330558.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "100910fd80e5b3c1e2e8.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _api_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-functions */ "./src/api-functions.js");



// Global variables
const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    // Top
const daily = document.querySelector('.daily');
const hourly = document.querySelector('.hourly');
const labels = document.querySelectorAll('.label');
const sevenDayIcons = document.querySelectorAll('.seven-day-icon');
const sevenDayHighs = document.querySelectorAll('.high');
const sevenDayLows = document.querySelectorAll('.low');
const dailyBtn = document.querySelector('.daily');
const hourlyBtn = document.querySelector('.hourly');
    // Middle
const search = document.getElementById('searchBar');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const conditionIcon = document.querySelector('.condition-icon');
const currentCondition = document.querySelector('.condition');
const tempUnitToggle = document.getElementById('unitToggle');
    // Bottom
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const chanceOfRain = document.querySelector('.chance-rain');
const wind = document.querySelector('.wind');


const elementList = [city, temp, time, date, conditionIcon, feelsLike, humidity, chanceOfRain, wind, 'sevenDay'];


// Event listeners 

    // Displays all weather information onto screen, refreshes on search bar entry.
search.addEventListener('search', () => {
    if (tempUnitToggle.checked) {
        displayData(search.value, 'celsius');
    } else {
        displayData(search.value, 'fahrenheit');
    };
    search.value = ''
});

    // Defaults to display Seattle weather data on load.
search.addEventListener('load', displayData('Seattle', 'fahrenheit'));

    // Switches top display to daily weather forecast, showing up to three days.
dailyBtn.addEventListener('click', () => {
    dailyBtn.style.border = '2px solid black';
    hourlyBtn.style.border = '2px solid rgba(0, 0, 0, 0)';
})

    // Switches top display to hourly weather forecast for the day.
hourlyBtn.addEventListener('click', () => {
    hourlyBtn.style.border = '2px solid black';
    dailyBtn.style.border = '2px solid rgba(0, 0, 0, 0)';
})

    // Toggles temperature unit from fahrenheit to celsius.
tempUnitToggle.addEventListener('click', () => changeTempUnit());

// Functions

    // Takes in a location as a parameter and fetches the weather data for the location then displays weather data. Returns the object 'data' that contains relevant data.
async function displayData(location, unit) {
    let index = -1;
    const data = await (0,_api_functions__WEBPACK_IMPORTED_MODULE_1__.getRelaventData)(location);
    
    for (let key in data) {
        index++;
        if (index >= elementList.length) { // Only shows displayable data, which is determiend by elementList array.
            break;
        };
        if (key === 'temp') {
            if (unit === 'celsius') {
                elementList[index].textContent = data['cTemp'] + ' °C';
            } else {
                elementList[index].textContent = data[key] + ' °F';      
            };
            continue
        };
        if (key === 'feelsLike') {
            if (unit === 'celsius') {
                elementList[index].textContent = data['cFeelsLike'] + ' °C';
            } else {
                elementList[index].textContent = data[key] + ' °F';
            };
            continue
        }
        // Displaying current weather icon
        if (key === 'condition') { 
          conditionIcon.src = displayCorrectIcon(data.condition);
          currentCondition.textContent = data.condition;
          continue
        };
        // Displaying 7 day forecast or hourly forecast
        if (key === 'sevenDay') {
            if (hourlyBtn.style.border === '2px solid black') {
                if (tempUnitToggle.checked) {
                    displayHourly(data, 'temp_c', ' °C');
                    break
                } else {
                    displayHourly(data, 'temp_f', ' °F');
                    break
                };
            }
            if (tempUnitToggle.checked) {
                displayDaily(data, 'cMax', 'cMin', ' °C');
                break
            } else {
                displayDaily(data, 'fMax', 'fMin', ' °F');
                break
            };
        };
        elementList[index].textContent = data[key];
    };

    // Removes previous event listeners and adds new ones specific to current location and temp unit
    hourly.removeEventListener('click', () => displayHourly(data, 'temp_c', ' °C'));
    daily.removeEventListener('click', () => displayDaily(data, 'cMax', 'cMin', ' °C'));
    hourly.removeEventListener('click', () => displayHourly(data, 'temp_f', ' °F'));
    daily.removeEventListener('click', () => displayDaily(data, 'fMax', 'fMin', ' °F'));
    if (unit === 'celsius') {
        hourly.addEventListener('click', () => displayHourly(data, 'temp_c', ' °C'));
        daily.addEventListener('click', () => displayDaily(data, 'cMax', 'cMin', ' °C'));
    } else {
        hourly.addEventListener('click', () => displayHourly(data, 'temp_f',' °F'));
        daily.addEventListener('click', () => displayDaily(data, 'fMax', 'fMin', ' °F'));
    }
}


    // Takes in the weather condition as a paramter and displays the corresponding icon 
function displayCorrectIcon(condition) {
    condition = condition.toLowerCase();
    if (condition === 'sunny') {
        return './src/images/sun.png';
    } else if (condition === 'clear') {
        return './src/images/moon.png';
    } else if (condition.includes('partly')) {
        return './src/images/partly.png';
    } else if (condition === 'cloudy') {
        return './src/images/cloudy.png';
    } else if (condition === 'overcast') {
        return './src/images/overcast.png';
    } else if (condition === 'mist' || condition.includes('fog')) {
        return './src/images/mist.png';
    } else if (condition.includes('freezing') || condition.includes('ice')) {
        return './src/images/icons8-hail-96.png';
    } else if (condition.includes('snow')) {
        return './src/images/snow.png';
    } else if (condition.includes('thunder')) {
        return './src/images/thunderstorm.png';
    } else if (condition.includes('rain') || condition.includes('drizzle')) {
        return './src/images/rainy.png';
    } else if (condition.includes('sleet')) {
        return './src/images/sleet.png';
    }
}
    // Takes in the relavent data object as a parameter and displays a 7 day forecast, including the high, low, and an icon that corresponds to the weather condition.
function displayDaily(data, unitMax, unitMin, unit) {
    removeHourlyDisp();
    for (let key in data.sevenDay) {
        sevenDayIcons[key].src = displayCorrectIcon(data.sevenDay[key].condition); //fix icon assigning
        sevenDayHighs[key].textContent = data.sevenDay[key][unitMax] + unit;
        sevenDayLows[key].textContent = data.sevenDay[key][unitMin] + unit;
        labels[key].textContent = weekdays[new Date(data.sevenDay[key].date).getDay()];
    };
}
    // Takes in relavent data object as a parameter and displays an hourly forecast, including the current temperature and an icon that corresponds to the weather condition.
function displayHourly(data, tempUnit, unit) {
    removeHourlyDisp();
    for (let i = 0; i < 4; i++) {
        makeHourlyDisplay();    // Adds additional blocks since only 3 day forecast can be displayed.
    };
    const labels = document.querySelectorAll('.label');
    const day = document.querySelectorAll('.seven-day-icon');
    const topTempDisp = document.querySelectorAll('.high');
    const botTempDisp = document.querySelectorAll('.low');
    const currentTime = new Date();
    let currentHour = currentTime.getHours() + 1;
    for (let i = 0; i < 7; i++) {
        if (currentHour > 23) {
            currentHour = 0;
        };
        labels[i].textContent = data.hourly[currentHour].time.slice(11, 16);
        day[i].src = displayCorrectIcon(data.hourly[currentHour].condition.text);
        topTempDisp[i].textContent = data.hourly[currentHour][tempUnit] + unit;
        botTempDisp[i].innerHTML = '<br>';
        currentHour++
    }
}
    // Changes temperature units from fahrenheit to celsius and vice-versa. Takes in relavant data object as a parameter.
function changeTempUnit() {
    if (tempUnitToggle.checked) {
        displayData(city.textContent, 'celsius');
    } else {
       displayData(city.textContent, 'fahrenheit');
    };
}

    // Adds additional weather display blocks for the hourly forecast.
function makeHourlyDisplay() {
    const day = document.createElement('div');
    const label = document.createElement('p');
    const icon = document.createElement('img');
    const tempCont = document.createElement('div');
    const high = document.createElement('p');
    const low = document.createElement('p');

    day.classList.add('day');
    label.classList.add('label');
    icon.classList.add('icon', 'seven-day-icon');
    high.classList.add('high');
    low.classList.add('low');

    tempCont.append(high, low);
    day.append(label, icon, tempCont);
    document.querySelector('.weather-disp').appendChild(day);
}

    // Removes added weather display blocks from the hourly forecast.
function removeHourlyDisp() {
    const sevenDayDisp = document.querySelector('.weather-disp');
    const currentLength = sevenDayDisp.children.length;
    for (let i = 3; i < currentLength; i++) {
        sevenDayDisp.removeChild(sevenDayDisp.children[2].nextElementSibling);
    };
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9GQUFvRixtQ0FBbUM7QUFDdkg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksUUFBUSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1ByYXRhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvNTMzMDU1OC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3ByYXRhJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLyogQ3VzdG9tIFByb3BlcnRpZXMgKi9cbjpyb290IHtcbiAgICAtLXNtYWxsLXNwYWNlOiAxMHB4O1xuICAgIC0tbWVkaXVtLXNwYWNlOiAzMHB4O1xuICAgIC0tbGFyZ2Utc3BhY2U6IDUwcHg7XG4gICAgLS1kZWZhdWx0LWZvbnQ6IDFyZW07XG59XG5cbi8qIEdlbmVyYWwgKi9cblxuKiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiAncHJhdGEnLCAgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLHJnYmEoMCwgMCwgMCwgMC4yKSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xufVxuXG5cbiN0b3AsXG4jbWlkZGxlLFxuI2JvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4vKiBUb3AgKi9cbiN0b3Age1xuICAgIGdhcDogdmFyKC0tc21hbGwtc3BhY2UpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi53ZWF0aGVyLWRpc3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiB2YXIoLS1sYXJnZS1zcGFjZSk7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5kYXkge1xuICAgIHdpZHRoOiAxMjVweDtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgcGFkZGluZzogNXB4IHZhcigtLXNtYWxsLXNwYWNlKTtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tc21hbGwtc3BhY2UpO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogZ3JhYjtcbn1cblxuLmRhaWx5IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmhpZ2gsXG4ubG93IHtcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zbWFsbC1zcGFjZSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubG93IHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLyogTWlkZGxlICovXG4jbWlkZGxlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xufVxuXG4uY2l0eSB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRpbWUsXG4uZGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5jb25kaXRpb24taWNvbiB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi50ZW1wLFxuLmNvbmRpdGlvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRlbXAtaWNvbi1jb25kaXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4udGVtcC11bml0cyxcbi50ZW1wLWNvbmRpdGlvbixcbi50aW1lLWRhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiB2YXIoLS1zbWFsbC1zcGFjZSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NlYXJjaEJhciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgMnB4IHNvbGlkO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc21hbGwtc3BhY2UpOyAgIFxufVxuXG4jc2VhcmNoQmFyOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lOyBcbn1cblxuLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cbiAgXG4gIC5zbGlkZXI6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG59XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cbiAgXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcbn1cblxuLnNsaWRlci5yb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cbiAgXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJnYigyMDIsIDUwLCA1MCk7XG4gICAgcGFkZGluZzogdmFyKC0tc21hbGwtc3BhY2UpIDBweDtcbn1cblxuLyogQm90dG9tICovXG4jYm90dG9tIHtcbiAgICBnYXA6IHZhcigtLWxhcmdlLXNwYWNlKTtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnJpZ2h0LWRpc3Age1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yaWdodC1jb250IHtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tc21hbGwtc3BhY2UpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQStCO0FBQ25DOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpSEFBcUc7SUFDckcsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7O0lBRXRCLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7OztBQUdBOzs7SUFHSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUEsUUFBUTtBQUNSO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLFdBQVc7QUFDWDtJQUNJLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7OztJQUdJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7RUFFRTtJQUNFLHlCQUF5QjtBQUM3Qjs7RUFFRTtJQUNFLDJCQUEyQjtBQUMvQjs7RUFFRTtJQUNFLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztFQUVFO0lBQ0Usa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7O0FBRUEsV0FBVztBQUNYO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwcmF0YSc7XFxuICAgIHNyYzogdXJsKCcuL1ByYXRhLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbi8qIEN1c3RvbSBQcm9wZXJ0aWVzICovXFxuOnJvb3Qge1xcbiAgICAtLXNtYWxsLXNwYWNlOiAxMHB4O1xcbiAgICAtLW1lZGl1bS1zcGFjZTogMzBweDtcXG4gICAgLS1sYXJnZS1zcGFjZTogNTBweDtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IDFyZW07XFxufVxcblxcbi8qIEdlbmVyYWwgKi9cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBmb250LWZhbWlseTogJ3ByYXRhJywgIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLHJnYmEoMCwgMCwgMCwgMC4yKSksIHVybCgnLi9pbWFnZXMvNTMzMDU1OC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbn1cXG5cXG5cXG4jdG9wLFxcbiNtaWRkbGUsXFxuI2JvdHRvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi8qIFRvcCAqL1xcbiN0b3Age1xcbiAgICBnYXA6IHZhcigtLXNtYWxsLXNwYWNlKTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLndlYXRoZXItZGlzcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tbGFyZ2Utc3BhY2UpO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmRheSB7XFxuICAgIHdpZHRoOiAxMjVweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIHBhZGRpbmc6IDVweCB2YXIoLS1zbWFsbC1zcGFjZSk7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zbWFsbC1zcGFjZSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmRhaWx5IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oaWdoLFxcbi5sb3cge1xcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zbWFsbC1zcGFjZSk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4vKiBNaWRkbGUgKi9cXG4jbWlkZGxlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaXR5IHtcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50aW1lLFxcbi5kYXRlIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5jb25kaXRpb24taWNvbiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLnRlbXAsXFxuLmNvbmRpdGlvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGVtcC1pY29uLWNvbmRpdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udGVtcC11bml0cyxcXG4udGVtcC1jb25kaXRpb24sXFxuLnRpbWUtZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tc21hbGwtc3BhY2UpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2VhcmNoQmFyIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBibGFjayAycHggc29saWQ7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc21hbGwtc3BhY2UpOyAgIFxcbn1cXG5cXG4jc2VhcmNoQmFyOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgXFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMTZweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG4gIFxcbiAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxufVxcbiAgXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxufVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuICBcXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHJnYigyMDIsIDUwLCA1MCk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxsLXNwYWNlKSAwcHg7XFxufVxcblxcbi8qIEJvdHRvbSAqL1xcbiNib3R0b20ge1xcbiAgICBnYXA6IHZhcigtLWxhcmdlLXNwYWNlKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5yaWdodC1kaXNwIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucmlnaHQtY29udCB7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zbWFsbC1zcGFjZSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBtaWRkbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkZGxlJylcblxuZnVuY3Rpb24gbWFrZUVycm9yTWVzc2FnZSgpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcbiAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnRW50ZXIgc2VhcmNoIGluIHRoZSBmb3JtIG9mIFwiQ2l0eVwiLCBcIkNpdHksIFN0YXRlXCIsIFwiQ2l0eSwgQ291bnRyeVwiLCBvciBcIlppcCBDb2RlXCInXG4gICAgbWlkZGxlLmluc2VydEJlZm9yZShlcnJvck1lc3NhZ2UsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXVuaXRzJykpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcnJvck1lc3NhZ2UoKSB7XG4gICAgbWlkZGxlLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJykpO1xufVxuXG4vLyBUYWtlcyBhIGxvY2F0aW9uIGFzIGEgcGFyYW1ldGVyIGFuZCByZXR1cm5zIHdlYXRoZXIgaW5mb3JtYXRpb24gZm9yIHRoZSBsb2NhdGlvbiB1c2luZyB3ZWF0aGVyYXBpXG5hc3luYyBmdW5jdGlvbiBncmFiQ3VycmVudFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTNlMmQwMTFjYmQxZDRiZjQ5OTYxNTQ5NTIyMzMxMDUmcT0ke2xvY2F0aW9ufWAsIHttb2RlOidjb3JzJ30pOyAvLyBGZXRjaGVzIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBDb252ZXJ0cyBpbnRvIHVzYWJsZSBKUyBjb2RlXG4gICAgcmV0dXJuIGRhdGFcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdyYWJGb3JlY2FzdFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zZTJkMDExY2JkMWQ0YmY0OTk2MTU0OTUyMjMzMTA1JnE9JHtsb2NhdGlvbn0mZGF5cz03YCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbi8vIFRha2VzIGxvY2F0aW9uIG9mIGludGVyc3QgYXMgYSBwYXJhbWV0ZXIgYW5kIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHJlbGF2ZW50IGluZm9ybWF0aW9uIGZvciB0aGUgd2VhdGhlciBhcHAuXG5hc3luYyBmdW5jdGlvbiBnZXRSZWxhdmVudERhdGEobG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKSkge1xuICAgICAgICAgICAgcmVtb3ZlRXJyb3JNZXNzYWdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCBncmFiQ3VycmVudFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBncmFiRm9yZWNhc3RXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4gICAgICAgIGNvbnN0IHJlbGF2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgIGNpdHk6IGN1cnJlbnQubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICAgIHRlbXA6IGN1cnJlbnQuY3VycmVudC50ZW1wX2YsXG4gICAgICAgICAgICB0aW1lOiBjdXJyZW50LmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSgxMSwgMTYpLFxuICAgICAgICAgICAgZGF0ZTogY3VycmVudC5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoMCwgMTApLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBjdXJyZW50LmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBmZWVsc0xpa2U6IGN1cnJlbnQuY3VycmVudC5mZWVsc2xpa2VfZixcbiAgICAgICAgICAgIGh1bWlkaXR5OiBjdXJyZW50LmN1cnJlbnQuaHVtaWRpdHkgKyAnICUnLFxuICAgICAgICAgICAgY2hhbmNlT2ZSYWluOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4gKyAnICUnLFxuICAgICAgICAgICAgd2luZDogY3VycmVudC5jdXJyZW50LndpbmRfbXBoICsgJyBtcGgnLFxuICAgICAgICAgICAgc2V2ZW5EYXk6IHtcbiAgICAgICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgICAgICBmTWF4OiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mLFxuICAgICAgICAgICAgICAgICAgICBmTWluOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLFxuICAgICAgICAgICAgICAgICAgICBjTWF4OiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBjTWluOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgICAgICBmTWF4OiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mLFxuICAgICAgICAgICAgICAgICAgICBmTWluOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mLFxuICAgICAgICAgICAgICAgICAgICBjTWF4OiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBjTWluOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgICAgICBmTWF4OiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9mLFxuICAgICAgICAgICAgICAgICAgICBmTWluOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mLFxuICAgICAgICAgICAgICAgICAgICBjTWF4OiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBjTWluOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvdXJseTogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cixcbiAgICAgICAgICAgIGNUZW1wOiBjdXJyZW50LmN1cnJlbnQudGVtcF9jLFxuICAgICAgICAgICAgY0ZlZWxzTGlrZTogY3VycmVudC5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVsYXZlbnREYXRhO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICBtYWtlRXJyb3JNZXNzYWdlKCk7XG4gICAgfVxufVxuXG5leHBvcnQge2dyYWJDdXJyZW50V2VhdGhlckRhdGEsIGdyYWJGb3JlY2FzdFdlYXRoZXJEYXRhLCBnZXRSZWxhdmVudERhdGF9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge2dyYWJDdXJyZW50V2VhdGhlckRhdGEsIGdyYWJGb3JlY2FzdFdlYXRoZXJEYXRhLCBnZXRSZWxhdmVudERhdGF9IGZyb20gJy4vYXBpLWZ1bmN0aW9ucyc7XG5cbi8vIEdsb2JhbCB2YXJpYWJsZXNcbmNvbnN0IHdlZWtkYXlzID0gW1wiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCIsXCJTdW5kYXlcIl07XG4gICAgLy8gVG9wXG5jb25zdCBkYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseScpO1xuY29uc3QgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseScpO1xuY29uc3QgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhYmVsJyk7XG5jb25zdCBzZXZlbkRheUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldmVuLWRheS1pY29uJyk7XG5jb25zdCBzZXZlbkRheUhpZ2hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2gnKTtcbmNvbnN0IHNldmVuRGF5TG93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb3cnKTtcbmNvbnN0IGRhaWx5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5Jyk7XG5jb25zdCBob3VybHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5Jyk7XG4gICAgLy8gTWlkZGxlXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQmFyJyk7XG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbmNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uLWljb24nKTtcbmNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uJyk7XG5jb25zdCB0ZW1wVW5pdFRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0VG9nZ2xlJyk7XG4gICAgLy8gQm90dG9tXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuY2UtcmFpbicpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG5cblxuY29uc3QgZWxlbWVudExpc3QgPSBbY2l0eSwgdGVtcCwgdGltZSwgZGF0ZSwgY29uZGl0aW9uSWNvbiwgZmVlbHNMaWtlLCBodW1pZGl0eSwgY2hhbmNlT2ZSYWluLCB3aW5kLCAnc2V2ZW5EYXknXTtcblxuXG4vLyBFdmVudCBsaXN0ZW5lcnMgXG5cbiAgICAvLyBEaXNwbGF5cyBhbGwgd2VhdGhlciBpbmZvcm1hdGlvbiBvbnRvIHNjcmVlbiwgcmVmcmVzaGVzIG9uIHNlYXJjaCBiYXIgZW50cnkuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignc2VhcmNoJywgKCkgPT4ge1xuICAgIGlmICh0ZW1wVW5pdFRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIGRpc3BsYXlEYXRhKHNlYXJjaC52YWx1ZSwgJ2NlbHNpdXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5RGF0YShzZWFyY2gudmFsdWUsICdmYWhyZW5oZWl0Jyk7XG4gICAgfTtcbiAgICBzZWFyY2gudmFsdWUgPSAnJ1xufSk7XG5cbiAgICAvLyBEZWZhdWx0cyB0byBkaXNwbGF5IFNlYXR0bGUgd2VhdGhlciBkYXRhIG9uIGxvYWQuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRpc3BsYXlEYXRhKCdTZWF0dGxlJywgJ2ZhaHJlbmhlaXQnKSk7XG5cbiAgICAvLyBTd2l0Y2hlcyB0b3AgZGlzcGxheSB0byBkYWlseSB3ZWF0aGVyIGZvcmVjYXN0LCBzaG93aW5nIHVwIHRvIHRocmVlIGRheXMuXG5kYWlseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkYWlseUJ0bi5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIGJsYWNrJztcbiAgICBob3VybHlCdG4uc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApJztcbn0pXG5cbiAgICAvLyBTd2l0Y2hlcyB0b3AgZGlzcGxheSB0byBob3VybHkgd2VhdGhlciBmb3JlY2FzdCBmb3IgdGhlIGRheS5cbmhvdXJseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBob3VybHlCdG4uc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCBibGFjayc7XG4gICAgZGFpbHlCdG4uc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApJztcbn0pXG5cbiAgICAvLyBUb2dnbGVzIHRlbXBlcmF0dXJlIHVuaXQgZnJvbSBmYWhyZW5oZWl0IHRvIGNlbHNpdXMuXG50ZW1wVW5pdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoYW5nZVRlbXBVbml0KCkpO1xuXG4vLyBGdW5jdGlvbnNcblxuICAgIC8vIFRha2VzIGluIGEgbG9jYXRpb24gYXMgYSBwYXJhbWV0ZXIgYW5kIGZldGNoZXMgdGhlIHdlYXRoZXIgZGF0YSBmb3IgdGhlIGxvY2F0aW9uIHRoZW4gZGlzcGxheXMgd2VhdGhlciBkYXRhLiBSZXR1cm5zIHRoZSBvYmplY3QgJ2RhdGEnIHRoYXQgY29udGFpbnMgcmVsZXZhbnQgZGF0YS5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlEYXRhKGxvY2F0aW9uLCB1bml0KSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFJlbGF2ZW50RGF0YShsb2NhdGlvbik7XG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgaWYgKGluZGV4ID49IGVsZW1lbnRMaXN0Lmxlbmd0aCkgeyAvLyBPbmx5IHNob3dzIGRpc3BsYXlhYmxlIGRhdGEsIHdoaWNoIGlzIGRldGVybWllbmQgYnkgZWxlbWVudExpc3QgYXJyYXkuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3RlbXAnKSB7XG4gICAgICAgICAgICBpZiAodW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudExpc3RbaW5kZXhdLnRleHRDb250ZW50ID0gZGF0YVsnY1RlbXAnXSArICcgwrBDJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudExpc3RbaW5kZXhdLnRleHRDb250ZW50ID0gZGF0YVtrZXldICsgJyDCsEYnOyAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH07XG4gICAgICAgIGlmIChrZXkgPT09ICdmZWVsc0xpa2UnKSB7XG4gICAgICAgICAgICBpZiAodW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudExpc3RbaW5kZXhdLnRleHRDb250ZW50ID0gZGF0YVsnY0ZlZWxzTGlrZSddICsgJyDCsEMnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50TGlzdFtpbmRleF0udGV4dENvbnRlbnQgPSBkYXRhW2tleV0gKyAnIMKwRic7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNwbGF5aW5nIGN1cnJlbnQgd2VhdGhlciBpY29uXG4gICAgICAgIGlmIChrZXkgPT09ICdjb25kaXRpb24nKSB7IFxuICAgICAgICAgIGNvbmRpdGlvbkljb24uc3JjID0gZGlzcGxheUNvcnJlY3RJY29uKGRhdGEuY29uZGl0aW9uKTtcbiAgICAgICAgICBjdXJyZW50Q29uZGl0aW9uLnRleHRDb250ZW50ID0gZGF0YS5jb25kaXRpb247XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfTtcbiAgICAgICAgLy8gRGlzcGxheWluZyA3IGRheSBmb3JlY2FzdCBvciBob3VybHkgZm9yZWNhc3RcbiAgICAgICAgaWYgKGtleSA9PT0gJ3NldmVuRGF5Jykge1xuICAgICAgICAgICAgaWYgKGhvdXJseUJ0bi5zdHlsZS5ib3JkZXIgPT09ICcycHggc29saWQgYmxhY2snKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBVbml0VG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhvdXJseShkYXRhLCAndGVtcF9jJywgJyDCsEMnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SG91cmx5KGRhdGEsICd0ZW1wX2YnLCAnIMKwRicpO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVtcFVuaXRUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlEYWlseShkYXRhLCAnY01heCcsICdjTWluJywgJyDCsEMnKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGFpbHkoZGF0YSwgJ2ZNYXgnLCAnZk1pbicsICcgwrBGJyk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGVsZW1lbnRMaXN0W2luZGV4XS50ZXh0Q29udGVudCA9IGRhdGFba2V5XTtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlcyBwcmV2aW91cyBldmVudCBsaXN0ZW5lcnMgYW5kIGFkZHMgbmV3IG9uZXMgc3BlY2lmaWMgdG8gY3VycmVudCBsb2NhdGlvbiBhbmQgdGVtcCB1bml0XG4gICAgaG91cmx5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheUhvdXJseShkYXRhLCAndGVtcF9jJywgJyDCsEMnKSk7XG4gICAgZGFpbHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5RGFpbHkoZGF0YSwgJ2NNYXgnLCAnY01pbicsICcgwrBDJykpO1xuICAgIGhvdXJseS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlIb3VybHkoZGF0YSwgJ3RlbXBfZicsICcgwrBGJykpO1xuICAgIGRhaWx5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheURhaWx5KGRhdGEsICdmTWF4JywgJ2ZNaW4nLCAnIMKwRicpKTtcbiAgICBpZiAodW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgIGhvdXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlIb3VybHkoZGF0YSwgJ3RlbXBfYycsICcgwrBDJykpO1xuICAgICAgICBkYWlseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlEYWlseShkYXRhLCAnY01heCcsICdjTWluJywgJyDCsEMnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaG91cmx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheUhvdXJseShkYXRhLCAndGVtcF9mJywnIMKwRicpKTtcbiAgICAgICAgZGFpbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5RGFpbHkoZGF0YSwgJ2ZNYXgnLCAnZk1pbicsICcgwrBGJykpO1xuICAgIH1cbn1cblxuXG4gICAgLy8gVGFrZXMgaW4gdGhlIHdlYXRoZXIgY29uZGl0aW9uIGFzIGEgcGFyYW10ZXIgYW5kIGRpc3BsYXlzIHRoZSBjb3JyZXNwb25kaW5nIGljb24gXG5mdW5jdGlvbiBkaXNwbGF5Q29ycmVjdEljb24oY29uZGl0aW9uKSB7XG4gICAgY29uZGl0aW9uID0gY29uZGl0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ3N1bm55Jykge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9zdW4ucG5nJztcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiA9PT0gJ2NsZWFyJykge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9tb29uLnBuZyc7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ3BhcnRseScpKSB7XG4gICAgICAgIHJldHVybiAnLi9zcmMvaW1hZ2VzL3BhcnRseS5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uID09PSAnY2xvdWR5Jykge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9jbG91ZHkucG5nJztcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiA9PT0gJ292ZXJjYXN0Jykge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9vdmVyY2FzdC5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uID09PSAnbWlzdCcgfHwgY29uZGl0aW9uLmluY2x1ZGVzKCdmb2cnKSkge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9taXN0LnBuZyc7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ2ZyZWV6aW5nJykgfHwgY29uZGl0aW9uLmluY2x1ZGVzKCdpY2UnKSkge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9pY29uczgtaGFpbC05Ni5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCdzbm93JykpIHtcbiAgICAgICAgcmV0dXJuICcuL3NyYy9pbWFnZXMvc25vdy5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCd0aHVuZGVyJykpIHtcbiAgICAgICAgcmV0dXJuICcuL3NyYy9pbWFnZXMvdGh1bmRlcnN0b3JtLnBuZyc7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ3JhaW4nKSB8fCBjb25kaXRpb24uaW5jbHVkZXMoJ2RyaXp6bGUnKSkge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9yYWlueS5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCdzbGVldCcpKSB7XG4gICAgICAgIHJldHVybiAnLi9zcmMvaW1hZ2VzL3NsZWV0LnBuZyc7XG4gICAgfVxufVxuICAgIC8vIFRha2VzIGluIHRoZSByZWxhdmVudCBkYXRhIG9iamVjdCBhcyBhIHBhcmFtZXRlciBhbmQgZGlzcGxheXMgYSA3IGRheSBmb3JlY2FzdCwgaW5jbHVkaW5nIHRoZSBoaWdoLCBsb3csIGFuZCBhbiBpY29uIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHdlYXRoZXIgY29uZGl0aW9uLlxuZnVuY3Rpb24gZGlzcGxheURhaWx5KGRhdGEsIHVuaXRNYXgsIHVuaXRNaW4sIHVuaXQpIHtcbiAgICByZW1vdmVIb3VybHlEaXNwKCk7XG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEuc2V2ZW5EYXkpIHtcbiAgICAgICAgc2V2ZW5EYXlJY29uc1trZXldLnNyYyA9IGRpc3BsYXlDb3JyZWN0SWNvbihkYXRhLnNldmVuRGF5W2tleV0uY29uZGl0aW9uKTsgLy9maXggaWNvbiBhc3NpZ25pbmdcbiAgICAgICAgc2V2ZW5EYXlIaWdoc1trZXldLnRleHRDb250ZW50ID0gZGF0YS5zZXZlbkRheVtrZXldW3VuaXRNYXhdICsgdW5pdDtcbiAgICAgICAgc2V2ZW5EYXlMb3dzW2tleV0udGV4dENvbnRlbnQgPSBkYXRhLnNldmVuRGF5W2tleV1bdW5pdE1pbl0gKyB1bml0O1xuICAgICAgICBsYWJlbHNba2V5XS50ZXh0Q29udGVudCA9IHdlZWtkYXlzW25ldyBEYXRlKGRhdGEuc2V2ZW5EYXlba2V5XS5kYXRlKS5nZXREYXkoKV07XG4gICAgfTtcbn1cbiAgICAvLyBUYWtlcyBpbiByZWxhdmVudCBkYXRhIG9iamVjdCBhcyBhIHBhcmFtZXRlciBhbmQgZGlzcGxheXMgYW4gaG91cmx5IGZvcmVjYXN0LCBpbmNsdWRpbmcgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgYW5kIGFuIGljb24gdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgd2VhdGhlciBjb25kaXRpb24uXG5mdW5jdGlvbiBkaXNwbGF5SG91cmx5KGRhdGEsIHRlbXBVbml0LCB1bml0KSB7XG4gICAgcmVtb3ZlSG91cmx5RGlzcCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIG1ha2VIb3VybHlEaXNwbGF5KCk7ICAgIC8vIEFkZHMgYWRkaXRpb25hbCBibG9ja3Mgc2luY2Ugb25seSAzIGRheSBmb3JlY2FzdCBjYW4gYmUgZGlzcGxheWVkLlxuICAgIH07XG4gICAgY29uc3QgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhYmVsJyk7XG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldmVuLWRheS1pY29uJyk7XG4gICAgY29uc3QgdG9wVGVtcERpc3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaCcpO1xuICAgIGNvbnN0IGJvdFRlbXBEaXNwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxvdycpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBsZXQgY3VycmVudEhvdXIgPSBjdXJyZW50VGltZS5nZXRIb3VycygpICsgMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBpZiAoY3VycmVudEhvdXIgPiAyMykge1xuICAgICAgICAgICAgY3VycmVudEhvdXIgPSAwO1xuICAgICAgICB9O1xuICAgICAgICBsYWJlbHNbaV0udGV4dENvbnRlbnQgPSBkYXRhLmhvdXJseVtjdXJyZW50SG91cl0udGltZS5zbGljZSgxMSwgMTYpO1xuICAgICAgICBkYXlbaV0uc3JjID0gZGlzcGxheUNvcnJlY3RJY29uKGRhdGEuaG91cmx5W2N1cnJlbnRIb3VyXS5jb25kaXRpb24udGV4dCk7XG4gICAgICAgIHRvcFRlbXBEaXNwW2ldLnRleHRDb250ZW50ID0gZGF0YS5ob3VybHlbY3VycmVudEhvdXJdW3RlbXBVbml0XSArIHVuaXQ7XG4gICAgICAgIGJvdFRlbXBEaXNwW2ldLmlubmVySFRNTCA9ICc8YnI+JztcbiAgICAgICAgY3VycmVudEhvdXIrK1xuICAgIH1cbn1cbiAgICAvLyBDaGFuZ2VzIHRlbXBlcmF0dXJlIHVuaXRzIGZyb20gZmFocmVuaGVpdCB0byBjZWxzaXVzIGFuZCB2aWNlLXZlcnNhLiBUYWtlcyBpbiByZWxhdmFudCBkYXRhIG9iamVjdCBhcyBhIHBhcmFtZXRlci5cbmZ1bmN0aW9uIGNoYW5nZVRlbXBVbml0KCkge1xuICAgIGlmICh0ZW1wVW5pdFRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIGRpc3BsYXlEYXRhKGNpdHkudGV4dENvbnRlbnQsICdjZWxzaXVzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICBkaXNwbGF5RGF0YShjaXR5LnRleHRDb250ZW50LCAnZmFocmVuaGVpdCcpO1xuICAgIH07XG59XG5cbiAgICAvLyBBZGRzIGFkZGl0aW9uYWwgd2VhdGhlciBkaXNwbGF5IGJsb2NrcyBmb3IgdGhlIGhvdXJseSBmb3JlY2FzdC5cbmZ1bmN0aW9uIG1ha2VIb3VybHlEaXNwbGF5KCkge1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCB0ZW1wQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJywgJ3NldmVuLWRheS1pY29uJyk7XG4gICAgaGlnaC5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XG4gICAgbG93LmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuXG4gICAgdGVtcENvbnQuYXBwZW5kKGhpZ2gsIGxvdyk7XG4gICAgZGF5LmFwcGVuZChsYWJlbCwgaWNvbiwgdGVtcENvbnQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRpc3AnKS5hcHBlbmRDaGlsZChkYXkpO1xufVxuXG4gICAgLy8gUmVtb3ZlcyBhZGRlZCB3ZWF0aGVyIGRpc3BsYXkgYmxvY2tzIGZyb20gdGhlIGhvdXJseSBmb3JlY2FzdC5cbmZ1bmN0aW9uIHJlbW92ZUhvdXJseURpc3AoKSB7XG4gICAgY29uc3Qgc2V2ZW5EYXlEaXNwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGlzcCcpO1xuICAgIGNvbnN0IGN1cnJlbnRMZW5ndGggPSBzZXZlbkRheURpc3AuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAzOyBpIDwgY3VycmVudExlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldmVuRGF5RGlzcC5yZW1vdmVDaGlsZChzZXZlbkRheURpc3AuY2hpbGRyZW5bMl0ubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICB9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==