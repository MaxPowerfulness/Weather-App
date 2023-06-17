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
    --default-font: 20px;
    --border-radius: 15px;
}


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
    font-size: 14px;
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

/* Middle */
#middle {
    flex-direction: column;
}

.city-temp,
.time-date {
    display: flex;
    gap: var(--small-space);
}

.condition-icon {
    height: 100px;
    width: 100px;
}

.temp-units {
    display: flex;
    gap: 5px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAA+B;AACnC;;AAEA,sBAAsB;AACtB;IACI,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;AACzB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,iHAAqG;IACrG,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;;IAEtB,aAAa;IACb,+BAA+B;AACnC;;;AAGA;;;IAGI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA,QAAQ;AACR;IACI,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kCAAkC;IAClC,+BAA+B;IAC/B,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA,WAAW;AACX;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;AACnB;;EAEE;IACE,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,UAAU;IACV,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;AACnB;;EAEE;IACE,yBAAyB;AAC7B;;EAEE;IACE,2BAA2B;AAC/B;;EAEE;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;EAEE;IACE,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA,WAAW;AACX;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,+BAA+B;AACnC","sourcesContent":["@font-face {\n    font-family: 'prata';\n    src: url('./Prata-Regular.ttf');\n}\n\n/* Custom Properties */\n:root {\n    --small-space: 10px;\n    --medium-space: 30px;\n    --large-space: 50px;\n    --default-font: 20px;\n    --border-radius: 15px;\n}\n\n\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-size: var(--default-font);\n    font-family: 'prata',  sans-serif;\n}\n\nbody {\n    height: 100vh;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url('./images/5330558.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    display: grid;\n    grid-template-rows: 1fr 2fr 1fr;\n}\n\n\n#top,\n#middle,\n#bottom {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.icon {\n    height: 50px;\n    width: 50px;\n}\n\n/* Top */\n#top {\n    gap: var(--small-space);\n    flex-direction: column;\n}\n\n.weather-disp {\n    display: flex;\n    gap: var(--large-space);\n    margin-left: 20px;\n}\n\n.day {\n    width: 125px;\n}\n\nbutton {\n    font-size: 14px;\n    background: none;\n    border: 2px solid rgba(0, 0, 0, 0);\n    padding: 5px var(--small-space);\n    margin-left: var(--small-space);\n}\n\nbutton:hover {\n    cursor: grab;\n}\n\n.daily {\n    border: 2px solid black;\n}\n\n.high,\n.low {\n    margin-top: var(--small-space);\n    font-size: 14px;\n}\n\n/* Middle */\n#middle {\n    flex-direction: column;\n}\n\n.city-temp,\n.time-date {\n    display: flex;\n    gap: var(--small-space);\n}\n\n.condition-icon {\n    height: 100px;\n    width: 100px;\n}\n\n.temp-units {\n    display: flex;\n    gap: 5px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 16px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 8px;\n    width: 8px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n}\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(14px);\n    -ms-transform: translateX(14px);\n    transform: translateX(14px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n  .slider.round:before {\n    border-radius: 50%;\n}\n\n.error-message {\n    font-size: 12px;\n    color: rgb(202, 50, 50);\n    padding: var(--small-space) 0px;\n}\n\n/* Bottom */\n#bottom {\n    gap: var(--large-space);\n    margin-left: 50px;\n}\n\n.right-disp {\n    width: 210px;\n    height: 100px;\n    display: flex;\n}\n\n.right-cont {\n    margin-left: var(--small-space);\n}"],"sourceRoot":""}]);
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
const errorMessage = document.querySelector('.error-message');


// Takes a location as a parameter and returns weather information for the location using weatherapi
async function grabCurrentWeatherData(location) {
    console.log('location', `${location}`);
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3e2d011cbd1d4bf4996154952233105&q=${location}`, {mode:'cors'}); // Fetches data from server
    const data = await response.json(); // Converts into usable JS code
    console.log('data:', data);
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
        errorMessage.textContent = '';
        const current = await grabCurrentWeatherData(location);
        const forecast = await grabForecastWeatherData(location);
        console.log('forecast in rel', forecast)
        const relaventData = {
            city: current.location.name,
            temp: current.current.temp_f,
            time: current.location.localtime.slice(11, 16),
            date: current.location.localtime.slice(0, 10),
            condition: current.current.condition.text,
            feelsLike: current.current.feelslike_f,
            humidity: current.current.humidity,
            chanceOfRain: forecast.forecast.forecastday[0].day.daily_chance_of_rain,
            wind: current.current.wind_mph,
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
    } catch (error) {
        errorMessage.textContent = 'Enter search in the form of "City", "City, State", "City, Country", or "Zip Code"';
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
    console.log('data in event', data);
    
    for (let key in data) {
        index++;
        if (index >= elementList.length) { // Only shows displayable data, which is determiend by elementList array.
            break;
        };
        if (key === 'temp') {
            if (unit === 'celsius') {
                elementList[index].textContent = data['cTemp'] + '°C';
            } else {
                elementList[index].textContent = data[key];      
            };
            continue
        };
        if (key === 'feelsLike') {
            if (unit === 'celsius') {
                elementList[index].textContent = data['cFeelsLike'];
            } else {
                elementList[index].textContent = data[key];
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
                    displayHourly(data, 'temp_c');
                    break
                } else {
                    displayHourly(data, 'temp_f');
                    break
                };
            }
            if (tempUnitToggle.checked) {
                displayDaily(data, 'cMax', 'cMin');
                break
            } else {
                displayDaily(data, 'fMax', 'fMin');
                break
            };
        };
        elementList[index].textContent = data[key];
    };

    // Removes previous event listeners and adds new ones specific to current location and temp unit
    hourly.removeEventListener('click', () => displayHourly(data, 'temp_c'));
    daily.removeEventListener('click', () => displayDaily(data, 'cMax', 'cMin'));
    hourly.removeEventListener('click', () => displayHourly(data, 'temp_f'));
    daily.removeEventListener('click', () => displayDaily(data, 'fMax', 'fMin'));
    if (unit === 'celsius') {
        hourly.addEventListener('click', () => displayHourly(data, 'temp_c'));
        daily.addEventListener('click', () => displayDaily(data, 'cMax', 'cMin'));
    } else {
        hourly.addEventListener('click', () => displayHourly(data, 'temp_f'));
        daily.addEventListener('click', () => displayDaily(data, 'fMax', 'fMin'));
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
function displayDaily(data, unitMax, unitMin) {
    removeHourlyDisp();
    for (let key in data.sevenDay) {
        sevenDayIcons[key].src = displayCorrectIcon(data.sevenDay[key].condition); //fix icon assigning
        sevenDayHighs[key].textContent = data.sevenDay[key][unitMax];
        sevenDayLows[key].textContent = data.sevenDay[key][unitMin];
        labels[key].textContent = weekdays[new Date(data.sevenDay[key].date).getDay()];
    };
}
    // Takes in relavent data object as a parameter and displays an hourly forecast, including the current temperature and an icon that corresponds to the weather condition.
function displayHourly(data, tempUnit) {
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
        topTempDisp[i].textContent = data.hourly[currentHour][tempUnit];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9GQUFvRixtQ0FBbUM7QUFDdkg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksUUFBUSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFV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aEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1ByYXRhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvNTMzMDU1OC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3ByYXRhJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLyogQ3VzdG9tIFByb3BlcnRpZXMgKi9cbjpyb290IHtcbiAgICAtLXNtYWxsLXNwYWNlOiAxMHB4O1xuICAgIC0tbWVkaXVtLXNwYWNlOiAzMHB4O1xuICAgIC0tbGFyZ2Utc3BhY2U6IDUwcHg7XG4gICAgLS1kZWZhdWx0LWZvbnQ6IDIwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5cbioge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC1mb250KTtcbiAgICBmb250LWZhbWlseTogJ3ByYXRhJywgIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSxyZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbn1cblxuXG4jdG9wLFxuI21pZGRsZSxcbiNib3R0b20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLyogVG9wICovXG4jdG9wIHtcbiAgICBnYXA6IHZhcigtLXNtYWxsLXNwYWNlKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud2VhdGhlci1kaXNwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogdmFyKC0tbGFyZ2Utc3BhY2UpO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZGF5IHtcbiAgICB3aWR0aDogMTI1cHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBwYWRkaW5nOiA1cHggdmFyKC0tc21hbGwtc3BhY2UpO1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zbWFsbC1zcGFjZSk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBncmFiO1xufVxuXG4uZGFpbHkge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaGlnaCxcbi5sb3cge1xuICAgIG1hcmdpbi10b3A6IHZhcigtLXNtYWxsLXNwYWNlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIE1pZGRsZSAqL1xuI21pZGRsZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNpdHktdGVtcCxcbi50aW1lLWRhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiB2YXIoLS1zbWFsbC1zcGFjZSk7XG59XG5cbi5jb25kaXRpb24taWNvbiB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi50ZW1wLXVuaXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xufVxuXG4uc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMTZweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuICBcbiAgLnNsaWRlcjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogOHB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuICBcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTRweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0cHgpO1xufVxuXG4uc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuICBcbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogcmdiKDIwMiwgNTAsIDUwKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1zcGFjZSkgMHB4O1xufVxuXG4vKiBCb3R0b20gKi9cbiNib3R0b20ge1xuICAgIGdhcDogdmFyKC0tbGFyZ2Utc3BhY2UpO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4ucmlnaHQtZGlzcCB7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnJpZ2h0LWNvbnQge1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zbWFsbC1zcGFjZSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBK0I7QUFDbkM7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlIQUFxRztJQUNyRywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7O0FBR0E7OztJQUdJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQSxRQUFRO0FBQ1I7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0VBRUU7SUFDRSx5QkFBeUI7QUFDN0I7O0VBRUU7SUFDRSwyQkFBMkI7QUFDL0I7O0VBRUU7SUFDRSxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7RUFFRTtJQUNFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsK0JBQStCO0FBQ25DOztBQUVBLFdBQVc7QUFDWDtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncHJhdGEnO1xcbiAgICBzcmM6IHVybCgnLi9QcmF0YS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG4vKiBDdXN0b20gUHJvcGVydGllcyAqL1xcbjpyb290IHtcXG4gICAgLS1zbWFsbC1zcGFjZTogMTBweDtcXG4gICAgLS1tZWRpdW0tc3BhY2U6IDMwcHg7XFxuICAgIC0tbGFyZ2Utc3BhY2U6IDUwcHg7XFxuICAgIC0tZGVmYXVsdC1mb250OiAyMHB4O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGZvbnQtZmFtaWx5OiAncHJhdGEnLCAgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMikscmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuL2ltYWdlcy81MzMwNTU4LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxufVxcblxcblxcbiN0b3AsXFxuI21pZGRsZSxcXG4jYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLyogVG9wICovXFxuI3RvcCB7XFxuICAgIGdhcDogdmFyKC0tc21hbGwtc3BhY2UpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud2VhdGhlci1kaXNwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1sYXJnZS1zcGFjZSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZGF5IHtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIHBhZGRpbmc6IDVweCB2YXIoLS1zbWFsbC1zcGFjZSk7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zbWFsbC1zcGFjZSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmRhaWx5IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oaWdoLFxcbi5sb3cge1xcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zbWFsbC1zcGFjZSk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLyogTWlkZGxlICovXFxuI21pZGRsZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jaXR5LXRlbXAsXFxuLnRpbWUtZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tc21hbGwtc3BhY2UpO1xcbn1cXG5cXG4uY29uZGl0aW9uLWljb24ge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi50ZW1wLXVuaXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMTZweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG4gIFxcbiAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxufVxcbiAgXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxufVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuICBcXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHJnYigyMDIsIDUwLCA1MCk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxsLXNwYWNlKSAwcHg7XFxufVxcblxcbi8qIEJvdHRvbSAqL1xcbiNib3R0b20ge1xcbiAgICBnYXA6IHZhcigtLWxhcmdlLXNwYWNlKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5yaWdodC1kaXNwIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucmlnaHQtY29udCB7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zbWFsbC1zcGFjZSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuXG5cbi8vIFRha2VzIGEgbG9jYXRpb24gYXMgYSBwYXJhbWV0ZXIgYW5kIHJldHVybnMgd2VhdGhlciBpbmZvcm1hdGlvbiBmb3IgdGhlIGxvY2F0aW9uIHVzaW5nIHdlYXRoZXJhcGlcbmFzeW5jIGZ1bmN0aW9uIGdyYWJDdXJyZW50V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgICBjb25zb2xlLmxvZygnbG9jYXRpb24nLCBgJHtsb2NhdGlvbn1gKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9M2UyZDAxMWNiZDFkNGJmNDk5NjE1NDk1MjIzMzEwNSZxPSR7bG9jYXRpb259YCwge21vZGU6J2NvcnMnfSk7IC8vIEZldGNoZXMgZGF0YSBmcm9tIHNlcnZlclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIENvbnZlcnRzIGludG8gdXNhYmxlIEpTIGNvZGVcbiAgICBjb25zb2xlLmxvZygnZGF0YTonLCBkYXRhKTtcbiAgICByZXR1cm4gZGF0YVxufTtcblxuYXN5bmMgZnVuY3Rpb24gZ3JhYkZvcmVjYXN0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTNlMmQwMTFjYmQxZDRiZjQ5OTYxNTQ5NTIyMzMxMDUmcT0ke2xvY2F0aW9ufSZkYXlzPTdgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuLy8gVGFrZXMgbG9jYXRpb24gb2YgaW50ZXJzdCBhcyBhIHBhcmFtZXRlciBhbmQgcmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgcmVsYXZlbnQgaW5mb3JtYXRpb24gZm9yIHRoZSB3ZWF0aGVyIGFwcC5cbmFzeW5jIGZ1bmN0aW9uIGdldFJlbGF2ZW50RGF0YShsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgZ3JhYkN1cnJlbnRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgZ3JhYkZvcmVjYXN0V2VhdGhlckRhdGEobG9jYXRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZygnZm9yZWNhc3QgaW4gcmVsJywgZm9yZWNhc3QpXG4gICAgICAgIGNvbnN0IHJlbGF2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgIGNpdHk6IGN1cnJlbnQubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICAgIHRlbXA6IGN1cnJlbnQuY3VycmVudC50ZW1wX2YsXG4gICAgICAgICAgICB0aW1lOiBjdXJyZW50LmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSgxMSwgMTYpLFxuICAgICAgICAgICAgZGF0ZTogY3VycmVudC5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoMCwgMTApLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBjdXJyZW50LmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBmZWVsc0xpa2U6IGN1cnJlbnQuY3VycmVudC5mZWVsc2xpa2VfZixcbiAgICAgICAgICAgIGh1bWlkaXR5OiBjdXJyZW50LmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgICAgICBjaGFuY2VPZlJhaW46IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICAgIHdpbmQ6IGN1cnJlbnQuY3VycmVudC53aW5kX21waCxcbiAgICAgICAgICAgIHNldmVuRGF5OiB7XG4gICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgZk1heDogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICAgICAgICAgICAgZk1pbjogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgICAgICAgICAgICAgY01heDogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICAgICAgICAgICAgY01pbjogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgZk1heDogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICAgICAgICAgICAgZk1pbjogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgICAgICAgICAgICAgY01heDogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICAgICAgICAgICAgY01pbjogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMjoge1xuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgZk1heDogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICAgICAgICAgICAgZk1pbjogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgICAgICAgICAgICAgY01heDogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICAgICAgICAgICAgY01pbjogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob3VybHk6IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXIsXG4gICAgICAgICAgICBjVGVtcDogY3VycmVudC5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgICAgIGNGZWVsc0xpa2U6IGN1cnJlbnQuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlbGF2ZW50RGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnRW50ZXIgc2VhcmNoIGluIHRoZSBmb3JtIG9mIFwiQ2l0eVwiLCBcIkNpdHksIFN0YXRlXCIsIFwiQ2l0eSwgQ291bnRyeVwiLCBvciBcIlppcCBDb2RlXCInO1xuICAgIH1cbn1cblxuZXhwb3J0IHtncmFiQ3VycmVudFdlYXRoZXJEYXRhLCBncmFiRm9yZWNhc3RXZWF0aGVyRGF0YSwgZ2V0UmVsYXZlbnREYXRhfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtncmFiQ3VycmVudFdlYXRoZXJEYXRhLCBncmFiRm9yZWNhc3RXZWF0aGVyRGF0YSwgZ2V0UmVsYXZlbnREYXRhfSBmcm9tICcuL2FwaS1mdW5jdGlvbnMnO1xuXG4vLyBHbG9iYWwgdmFyaWFibGVzXG5jb25zdCB3ZWVrZGF5cyA9IFtcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiLFwiU3VuZGF5XCJdO1xuICAgIC8vIFRvcFxuY29uc3QgZGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHknKTtcbmNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHknKTtcbmNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYWJlbCcpO1xuY29uc3Qgc2V2ZW5EYXlJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXZlbi1kYXktaWNvbicpO1xuY29uc3Qgc2V2ZW5EYXlIaWdocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWdoJyk7XG5jb25zdCBzZXZlbkRheUxvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubG93Jyk7XG5jb25zdCBkYWlseUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseScpO1xuY29uc3QgaG91cmx5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseScpO1xuICAgIC8vIE1pZGRsZVxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJhcicpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5jb25zdCBjb25kaXRpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbi1pY29uJyk7XG5jb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbicpO1xuY29uc3QgdGVtcFVuaXRUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdFRvZ2dsZScpO1xuICAgIC8vIEJvdHRvbVxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmNlLXJhaW4nKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuXG5cbmNvbnN0IGVsZW1lbnRMaXN0ID0gW2NpdHksIHRlbXAsIHRpbWUsIGRhdGUsIGNvbmRpdGlvbkljb24sIGZlZWxzTGlrZSwgaHVtaWRpdHksIGNoYW5jZU9mUmFpbiwgd2luZCwgJ3NldmVuRGF5J107XG5cblxuLy8gRXZlbnQgbGlzdGVuZXJzIFxuXG4gICAgLy8gRGlzcGxheXMgYWxsIHdlYXRoZXIgaW5mb3JtYXRpb24gb250byBzY3JlZW4sIHJlZnJlc2hlcyBvbiBzZWFyY2ggYmFyIGVudHJ5Llxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ3NlYXJjaCcsICgpID0+IHtcbiAgICBpZiAodGVtcFVuaXRUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgICBkaXNwbGF5RGF0YShzZWFyY2gudmFsdWUsICdjZWxzaXVzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheURhdGEoc2VhcmNoLnZhbHVlLCAnZmFocmVuaGVpdCcpO1xuICAgIH07XG4gICAgc2VhcmNoLnZhbHVlID0gJydcbn0pO1xuXG4gICAgLy8gRGVmYXVsdHMgdG8gZGlzcGxheSBTZWF0dGxlIHdlYXRoZXIgZGF0YSBvbiBsb2FkLlxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkaXNwbGF5RGF0YSgnU2VhdHRsZScsICdmYWhyZW5oZWl0JykpO1xuXG4gICAgLy8gU3dpdGNoZXMgdG9wIGRpc3BsYXkgdG8gZGFpbHkgd2VhdGhlciBmb3JlY2FzdCwgc2hvd2luZyB1cCB0byB0aHJlZSBkYXlzLlxuZGFpbHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGFpbHlCdG4uc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCBibGFjayc7XG4gICAgaG91cmx5QnRuLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKSc7XG59KVxuXG4gICAgLy8gU3dpdGNoZXMgdG9wIGRpc3BsYXkgdG8gaG91cmx5IHdlYXRoZXIgZm9yZWNhc3QgZm9yIHRoZSBkYXkuXG5ob3VybHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaG91cmx5QnRuLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgYmxhY2snO1xuICAgIGRhaWx5QnRuLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKSc7XG59KVxuXG4gICAgLy8gVG9nZ2xlcyB0ZW1wZXJhdHVyZSB1bml0IGZyb20gZmFocmVuaGVpdCB0byBjZWxzaXVzLlxudGVtcFVuaXRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjaGFuZ2VUZW1wVW5pdCgpKTtcblxuLy8gRnVuY3Rpb25zXG5cbiAgICAvLyBUYWtlcyBpbiBhIGxvY2F0aW9uIGFzIGEgcGFyYW1ldGVyIGFuZCBmZXRjaGVzIHRoZSB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBsb2NhdGlvbiB0aGVuIGRpc3BsYXlzIHdlYXRoZXIgZGF0YS4gUmV0dXJucyB0aGUgb2JqZWN0ICdkYXRhJyB0aGF0IGNvbnRhaW5zIHJlbGV2YW50IGRhdGEuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5RGF0YShsb2NhdGlvbiwgdW5pdCkge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRSZWxhdmVudERhdGEobG9jYXRpb24pO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhIGluIGV2ZW50JywgZGF0YSk7XG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgaWYgKGluZGV4ID49IGVsZW1lbnRMaXN0Lmxlbmd0aCkgeyAvLyBPbmx5IHNob3dzIGRpc3BsYXlhYmxlIGRhdGEsIHdoaWNoIGlzIGRldGVybWllbmQgYnkgZWxlbWVudExpc3QgYXJyYXkuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3RlbXAnKSB7XG4gICAgICAgICAgICBpZiAodW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudExpc3RbaW5kZXhdLnRleHRDb250ZW50ID0gZGF0YVsnY1RlbXAnXSArICfCsEMnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50TGlzdFtpbmRleF0udGV4dENvbnRlbnQgPSBkYXRhW2tleV07ICAgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2ZlZWxzTGlrZScpIHtcbiAgICAgICAgICAgIGlmICh1bml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50TGlzdFtpbmRleF0udGV4dENvbnRlbnQgPSBkYXRhWydjRmVlbHNMaWtlJ107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRMaXN0W2luZGV4XS50ZXh0Q29udGVudCA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIC8vIERpc3BsYXlpbmcgY3VycmVudCB3ZWF0aGVyIGljb25cbiAgICAgICAgaWYgKGtleSA9PT0gJ2NvbmRpdGlvbicpIHsgXG4gICAgICAgICAgY29uZGl0aW9uSWNvbi5zcmMgPSBkaXNwbGF5Q29ycmVjdEljb24oZGF0YS5jb25kaXRpb24pO1xuICAgICAgICAgIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBkYXRhLmNvbmRpdGlvbjtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9O1xuICAgICAgICAvLyBEaXNwbGF5aW5nIDcgZGF5IGZvcmVjYXN0IG9yIGhvdXJseSBmb3JlY2FzdFxuICAgICAgICBpZiAoa2V5ID09PSAnc2V2ZW5EYXknKSB7XG4gICAgICAgICAgICBpZiAoaG91cmx5QnRuLnN0eWxlLmJvcmRlciA9PT0gJzJweCBzb2xpZCBibGFjaycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVtcFVuaXRUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SG91cmx5KGRhdGEsICd0ZW1wX2MnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SG91cmx5KGRhdGEsICd0ZW1wX2YnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlbXBVbml0VG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGFpbHkoZGF0YSwgJ2NNYXgnLCAnY01pbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlEYWlseShkYXRhLCAnZk1heCcsICdmTWluJyk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGVsZW1lbnRMaXN0W2luZGV4XS50ZXh0Q29udGVudCA9IGRhdGFba2V5XTtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlcyBwcmV2aW91cyBldmVudCBsaXN0ZW5lcnMgYW5kIGFkZHMgbmV3IG9uZXMgc3BlY2lmaWMgdG8gY3VycmVudCBsb2NhdGlvbiBhbmQgdGVtcCB1bml0XG4gICAgaG91cmx5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheUhvdXJseShkYXRhLCAndGVtcF9jJykpO1xuICAgIGRhaWx5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheURhaWx5KGRhdGEsICdjTWF4JywgJ2NNaW4nKSk7XG4gICAgaG91cmx5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheUhvdXJseShkYXRhLCAndGVtcF9mJykpO1xuICAgIGRhaWx5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheURhaWx5KGRhdGEsICdmTWF4JywgJ2ZNaW4nKSk7XG4gICAgaWYgKHVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICBob3VybHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5SG91cmx5KGRhdGEsICd0ZW1wX2MnKSk7XG4gICAgICAgIGRhaWx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheURhaWx5KGRhdGEsICdjTWF4JywgJ2NNaW4nKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaG91cmx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheUhvdXJseShkYXRhLCAndGVtcF9mJykpO1xuICAgICAgICBkYWlseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlEYWlseShkYXRhLCAnZk1heCcsICdmTWluJykpO1xuICAgIH1cbn1cblxuXG4gICAgLy8gVGFrZXMgaW4gdGhlIHdlYXRoZXIgY29uZGl0aW9uIGFzIGEgcGFyYW10ZXIgYW5kIGRpc3BsYXlzIHRoZSBjb3JyZXNwb25kaW5nIGljb24gXG5mdW5jdGlvbiBkaXNwbGF5Q29ycmVjdEljb24oY29uZGl0aW9uKSB7XG4gICAgY29uZGl0aW9uID0gY29uZGl0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ3N1bm55Jykge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9zdW4ucG5nJztcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiA9PT0gJ2NsZWFyJykge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9tb29uLnBuZyc7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ3BhcnRseScpKSB7XG4gICAgICAgIHJldHVybiAnLi9zcmMvaW1hZ2VzL3BhcnRseS5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uID09PSAnY2xvdWR5Jykge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9jbG91ZHkucG5nJztcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiA9PT0gJ292ZXJjYXN0Jykge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9vdmVyY2FzdC5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uID09PSAnbWlzdCcgfHwgY29uZGl0aW9uLmluY2x1ZGVzKCdmb2cnKSkge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9taXN0LnBuZyc7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ2ZyZWV6aW5nJykgfHwgY29uZGl0aW9uLmluY2x1ZGVzKCdpY2UnKSkge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9pY29uczgtaGFpbC05Ni5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCdzbm93JykpIHtcbiAgICAgICAgcmV0dXJuICcuL3NyYy9pbWFnZXMvc25vdy5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCd0aHVuZGVyJykpIHtcbiAgICAgICAgcmV0dXJuICcuL3NyYy9pbWFnZXMvdGh1bmRlcnN0b3JtLnBuZyc7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ3JhaW4nKSB8fCBjb25kaXRpb24uaW5jbHVkZXMoJ2RyaXp6bGUnKSkge1xuICAgICAgICByZXR1cm4gJy4vc3JjL2ltYWdlcy9yYWlueS5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCdzbGVldCcpKSB7XG4gICAgICAgIHJldHVybiAnLi9zcmMvaW1hZ2VzL3NsZWV0LnBuZyc7XG4gICAgfVxufVxuICAgIC8vIFRha2VzIGluIHRoZSByZWxhdmVudCBkYXRhIG9iamVjdCBhcyBhIHBhcmFtZXRlciBhbmQgZGlzcGxheXMgYSA3IGRheSBmb3JlY2FzdCwgaW5jbHVkaW5nIHRoZSBoaWdoLCBsb3csIGFuZCBhbiBpY29uIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHdlYXRoZXIgY29uZGl0aW9uLlxuZnVuY3Rpb24gZGlzcGxheURhaWx5KGRhdGEsIHVuaXRNYXgsIHVuaXRNaW4pIHtcbiAgICByZW1vdmVIb3VybHlEaXNwKCk7XG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEuc2V2ZW5EYXkpIHtcbiAgICAgICAgc2V2ZW5EYXlJY29uc1trZXldLnNyYyA9IGRpc3BsYXlDb3JyZWN0SWNvbihkYXRhLnNldmVuRGF5W2tleV0uY29uZGl0aW9uKTsgLy9maXggaWNvbiBhc3NpZ25pbmdcbiAgICAgICAgc2V2ZW5EYXlIaWdoc1trZXldLnRleHRDb250ZW50ID0gZGF0YS5zZXZlbkRheVtrZXldW3VuaXRNYXhdO1xuICAgICAgICBzZXZlbkRheUxvd3Nba2V5XS50ZXh0Q29udGVudCA9IGRhdGEuc2V2ZW5EYXlba2V5XVt1bml0TWluXTtcbiAgICAgICAgbGFiZWxzW2tleV0udGV4dENvbnRlbnQgPSB3ZWVrZGF5c1tuZXcgRGF0ZShkYXRhLnNldmVuRGF5W2tleV0uZGF0ZSkuZ2V0RGF5KCldO1xuICAgIH07XG59XG4gICAgLy8gVGFrZXMgaW4gcmVsYXZlbnQgZGF0YSBvYmplY3QgYXMgYSBwYXJhbWV0ZXIgYW5kIGRpc3BsYXlzIGFuIGhvdXJseSBmb3JlY2FzdCwgaW5jbHVkaW5nIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGFuZCBhbiBpY29uIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHdlYXRoZXIgY29uZGl0aW9uLlxuZnVuY3Rpb24gZGlzcGxheUhvdXJseShkYXRhLCB0ZW1wVW5pdCkge1xuICAgIHJlbW92ZUhvdXJseURpc3AoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBtYWtlSG91cmx5RGlzcGxheSgpOyAgICAvLyBBZGRzIGFkZGl0aW9uYWwgYmxvY2tzIHNpbmNlIG9ubHkgMyBkYXkgZm9yZWNhc3QgY2FuIGJlIGRpc3BsYXllZC5cbiAgICB9O1xuICAgIGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYWJlbCcpO1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXZlbi1kYXktaWNvbicpO1xuICAgIGNvbnN0IHRvcFRlbXBEaXNwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2gnKTtcbiAgICBjb25zdCBib3RUZW1wRGlzcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb3cnKTtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGN1cnJlbnRIb3VyID0gY3VycmVudFRpbWUuZ2V0SG91cnMoKSArIDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgaWYgKGN1cnJlbnRIb3VyID4gMjMpIHtcbiAgICAgICAgICAgIGN1cnJlbnRIb3VyID0gMDtcbiAgICAgICAgfTtcbiAgICAgICAgbGFiZWxzW2ldLnRleHRDb250ZW50ID0gZGF0YS5ob3VybHlbY3VycmVudEhvdXJdLnRpbWUuc2xpY2UoMTEsIDE2KTtcbiAgICAgICAgZGF5W2ldLnNyYyA9IGRpc3BsYXlDb3JyZWN0SWNvbihkYXRhLmhvdXJseVtjdXJyZW50SG91cl0uY29uZGl0aW9uLnRleHQpO1xuICAgICAgICB0b3BUZW1wRGlzcFtpXS50ZXh0Q29udGVudCA9IGRhdGEuaG91cmx5W2N1cnJlbnRIb3VyXVt0ZW1wVW5pdF07XG4gICAgICAgIGJvdFRlbXBEaXNwW2ldLmlubmVySFRNTCA9ICc8YnI+JztcbiAgICAgICAgY3VycmVudEhvdXIrK1xuICAgIH1cbn1cbiAgICAvLyBDaGFuZ2VzIHRlbXBlcmF0dXJlIHVuaXRzIGZyb20gZmFocmVuaGVpdCB0byBjZWxzaXVzIGFuZCB2aWNlLXZlcnNhLiBUYWtlcyBpbiByZWxhdmFudCBkYXRhIG9iamVjdCBhcyBhIHBhcmFtZXRlci5cbmZ1bmN0aW9uIGNoYW5nZVRlbXBVbml0KCkge1xuICAgIGlmICh0ZW1wVW5pdFRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIGRpc3BsYXlEYXRhKGNpdHkudGV4dENvbnRlbnQsICdjZWxzaXVzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICBkaXNwbGF5RGF0YShjaXR5LnRleHRDb250ZW50LCAnZmFocmVuaGVpdCcpO1xuICAgIH07XG59XG5cbiAgICAvLyBBZGRzIGFkZGl0aW9uYWwgd2VhdGhlciBkaXNwbGF5IGJsb2NrcyBmb3IgdGhlIGhvdXJseSBmb3JlY2FzdC5cbmZ1bmN0aW9uIG1ha2VIb3VybHlEaXNwbGF5KCkge1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCB0ZW1wQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJywgJ3NldmVuLWRheS1pY29uJyk7XG4gICAgaGlnaC5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XG4gICAgbG93LmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuXG4gICAgdGVtcENvbnQuYXBwZW5kKGhpZ2gsIGxvdyk7XG4gICAgZGF5LmFwcGVuZChsYWJlbCwgaWNvbiwgdGVtcENvbnQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRpc3AnKS5hcHBlbmRDaGlsZChkYXkpO1xufVxuXG4gICAgLy8gUmVtb3ZlcyBhZGRlZCB3ZWF0aGVyIGRpc3BsYXkgYmxvY2tzIGZyb20gdGhlIGhvdXJseSBmb3JlY2FzdC5cbmZ1bmN0aW9uIHJlbW92ZUhvdXJseURpc3AoKSB7XG4gICAgY29uc3Qgc2V2ZW5EYXlEaXNwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGlzcCcpO1xuICAgIGNvbnN0IGN1cnJlbnRMZW5ndGggPSBzZXZlbkRheURpc3AuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAzOyBpIDwgY3VycmVudExlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldmVuRGF5RGlzcC5yZW1vdmVDaGlsZChzZXZlbkRheURpc3AuY2hpbGRyZW5bMl0ubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICB9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==