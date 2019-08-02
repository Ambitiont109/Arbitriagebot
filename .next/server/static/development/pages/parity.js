module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/parity.js":
/*!*************************!*\
  !*** ./pages/parity.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input-number/style/css */ "antd/lib/input-number/style/css");
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input-number */ "antd/lib/input-number");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "antd/lib/col/style/css");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/popconfirm/style/css */ "antd/lib/popconfirm/style/css");
/* harmony import */ var antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/popconfirm */ "antd/lib/popconfirm");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/row/style/css */ "antd/lib/row/style/css");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_affix_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/affix/style/css */ "antd/lib/affix/style/css");
/* harmony import */ var antd_lib_affix_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/affix */ "antd/lib/affix");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/menu/style/css */ "antd/lib/menu/style/css");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/icon/style/css */ "antd/lib/icon/style/css");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/message/style/css */ "antd/lib/message/style/css");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/input/style/css */ "antd/lib/input/style/css");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/select/style/css */ "antd/lib/select/style/css");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/button/style/css */ "antd/lib/button/style/css");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_24__);

























function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ButtonGroup = antd_lib_button__WEBPACK_IMPORTED_MODULE_21___default.a.Group;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a.Option;
var InputGroup = antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a.Group;

function onChange(value) {
  console.log('changed', value);
}

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      affixtop: 10,
      current: 'parity'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "menuClick", function (e) {// console.log('click ', e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "add", function (e) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_15___default.a.success('A new box added');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "confirm", function () {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_15___default.a.success('Okay. will delete it');
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("div", {
        style: {
          padding: 10
        },
        className: "jsx-3200267982"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_22___default.a, {
        styleId: "3200267982",
        css: ".type1{border:solid silver 1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxyZWFjdFxcYXJiaXRyYWdlYm90MVxccGFnZXNcXHBhcml0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm1DLEFBR2dELHdCQUMzQiIsImZpbGUiOiJEOlxccmVhY3RcXGFyYml0cmFnZWJvdDFcXHBhZ2VzXFxwYXJpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBJbnB1dCwgSW5wdXROdW1iZXIsIFNlbGVjdCwgQnV0dG9uLCBNZW51LCBJY29uLCBQb3Bjb25maXJtLCBtZXNzYWdlLCBBZmZpeCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBCdXR0b25Hcm91cCA9IEJ1dHRvbi5Hcm91cDtcclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuY29uc3QgSW5wdXRHcm91cCA9IElucHV0Lkdyb3VwO1xyXG5cclxuZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VkJywgdmFsdWUpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGFmZml4dG9wIDogMTAsXHJcbiAgICAgICAgY3VycmVudDogJ3Bhcml0eScsXHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBtZW51Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGljayAnLCBlKTtcclxuICAgIH1cclxuICAgIGFkZCA9IChlKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdBIG5ldyBib3ggYWRkZWQnKTtcclxuICAgIH1cclxuICAgIGNvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdPa2F5LiB3aWxsIGRlbGV0ZSBpdCcpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnR5cGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIHNpbHZlciAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8QWZmaXggb2Zmc2V0VG9wPXt0aGlzLnN0YXRlLmFmZml4dG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17W3RoaXMuc3RhdGUuY3VycmVudF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT0nZGFyayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4Y2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9pbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiYXBwc3RvcmVcIiAvPkV4Y2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1cnJlbmN5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jdXJyZW5jeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwicHJvcGVydHktc2FmZXR5XCIgLz5DdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJwYXJpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Bhcml0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwic3RvY2tcIiAvPlBhcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BZmZpeD5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTo1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZTFcIiBzdHlsZT17e2JhY2tncm91bmQ6JyNGRkYnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTozfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs2fSBzdHlsZT17e2hlaWdodDonMTAwJScsYm9yZGVyUmlnaHQ6J3NvbGlkICNFRUUgMXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHN0eWxlPXt7bWFyZ2luOiczcHggMCAwIDNweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGx1c1wiIG9uQ2xpY2s9e3RoaXMuYWRkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybSBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCIgdGl0bGU9J0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBib3g/JyBvbkNvbmZpcm09e3RoaXMuY29uZmlybX0gb2tUZXh0PVwiWWVzXCIgY2FuY2VsVGV4dD1cIk5vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJtaW51c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e3dpZHRoOic0OC45JScsZmxvYXQ6J3JpZ2h0JyxtYXJnaW5Ub3A6MyxtYXJnaW5SaWdodDozfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e2JvcmRlclRvcDonc29saWQgI0VFRSAxcHgnLHBhZGRpbmc6JzNweCAzcHggMCAzcHgnLG1hcmdpblRvcDozfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fXN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY29tcGFjdCBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHNpemU9J3NtYWxsJyBkZWZhdWx0VmFsdWU9XCJ0cmtcIiBzdHlsZT17e3dpZHRoOic1MCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYnRjXCI+QklOQU5DRTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRya1wiPkJUQ1RVUks8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgc2l6ZT0nc21hbGwnIGRlZmF1bHRWYWx1ZT1cImJ0Y1wiIHN0eWxlPXt7d2lkdGg6JzUwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJidGNcIj5CSU5BTkNFPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidHJrXCI+QlRDVFVSSzwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3twYWRkaW5nOiczcHggM3B4IDAgM3B4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY29tcGFjdCBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHNpemU9J3NtYWxsJyBkZWZhdWx0VmFsdWU9XCJidXlcIiBzdHlsZT17e3dpZHRoOiczMy4zMzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInNlbGxcIj5zZWxsPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYnV5XCI+YnV5PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHNpemU9J3NtYWxsJyBkZWZhdWx0VmFsdWU9XCJidGNcIiBzdHlsZT17e3dpZHRoOiczMy4zMzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImJ0Y1wiPkJJTkFOQ0U8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ0cmtcIj5CVENUVVJLPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHNpemU9J3NtYWxsJyBkZWZhdWx0VmFsdWU9XCJwYXJpdHlfMVwiIHN0eWxlPXt7d2lkdGg6JzMzLjMzMyUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzFcIj5CVEMvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzJcIj5CVEMvVVNEVDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV8zXCI+RVRIL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV80XCI+TFRDL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV81XCI+WFJQL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV82XCI+VVNEVC9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7cGFkZGluZzonM3B4IDNweCAwIDNweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNvbXBhY3Qgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBzaXplPSdzbWFsbCcgZGVmYXVsdFZhbHVlPVwiYnV5XCIgc3R5bGU9e3t3aWR0aDonMzMuMzMzJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJzZWxsXCI+c2VsbDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImJ1eVwiPmJ1eTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBzaXplPSdzbWFsbCcgZGVmYXVsdFZhbHVlPVwiYnRjXCIgc3R5bGU9e3t3aWR0aDonMzMuMzMzJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJidGNcIj5CSU5BTkNFPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidHJrXCI+QlRDVFVSSzwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBzaXplPSdzbWFsbCcgZGVmYXVsdFZhbHVlPVwicGFyaXR5XzFcIiBzdHlsZT17e3dpZHRoOiczMy4zMzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV8xXCI+QlRDL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV8yXCI+QlRDL1VTRFQ8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfM1wiPkVUSC9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfNFwiPkxUQy9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfNVwiPlhSUC9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfNlwiPlVTRFQvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e3BhZGRpbmc6JzNweCAzcHggMCAzcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjb21wYWN0IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgc2l6ZT0nc21hbGwnIGRlZmF1bHRWYWx1ZT1cImJ1eVwiIHN0eWxlPXt7d2lkdGg6JzMzLjMzMyUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwic2VsbFwiPnNlbGw8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJidXlcIj5idXk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgc2l6ZT0nc21hbGwnIGRlZmF1bHRWYWx1ZT1cImJ0Y1wiIHN0eWxlPXt7d2lkdGg6JzMzLjMzMyUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYnRjXCI+QklOQU5DRTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRya1wiPkJUQ1RVUks8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgc2l6ZT0nc21hbGwnIGRlZmF1bHRWYWx1ZT1cInBhcml0eV8xXCIgc3R5bGU9e3t3aWR0aDonMzMuMzMzJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfMVwiPkJUQy9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfMlwiPkJUQy9VU0RUPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzNcIj5FVEgvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzRcIj5MVEMvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzVcIj5YUlAvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzZcIj5VU0RUL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3twYWRkaW5nOiczcHggM3B4IDAgM3B4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcj17dmFsdWUgPT4gYCQgJHt2YWx1ZX1gLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlcj17dmFsdWUgPT4gdmFsdWUucmVwbGFjZSgvXFwkXFxzP3woLCopL2csICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezh9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3twYWRkaW5nOiczcHggM3B4IDAgM3B4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxNn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgc2l6ZT0nc21hbGwnIGRlZmF1bHRWYWx1ZT1cInBhcml0eV8xXCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV8xXCI+QlRDL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzJcIj5CVEMvVVNEVDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzNcIj5FVEgvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfNFwiPkxUQy9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV81XCI+WFJQL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzZcIj5VU0RUL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7cGFkZGluZzonM3B4IDNweCAwIDNweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTZ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBzaXplPSdzbWFsbCcgZGVmYXVsdFZhbHVlPVwicGFyaXR5XzFcIiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzFcIj5CVEMvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfMlwiPkJUQy9VU0RUPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfM1wiPkVUSC9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV80XCI+TFRDL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzVcIj5YUlAvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfNlwiPlVTRFQvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3twYWRkaW5nOiczcHggM3B4IDAgM3B4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxNn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBzaXplPSdzbWFsbCcgZGVmYXVsdFZhbHVlPVwicGFyaXR5XzFcIiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzFcIj5CVEMvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfMlwiPkJUQy9VU0RUPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfM1wiPkVUSC9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV80XCI+TFRDL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzVcIj5YUlAvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfNlwiPlVTRFQvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3twYWRkaW5nOiczcHggM3B4IDAgM3B4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxNn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHNpemU9J3NtYWxsJyBkZWZhdWx0VmFsdWU9XCJwYXJpdHlfMVwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfMVwiPkJUQy9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV8yXCI+QlRDL1VTRFQ8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV8zXCI+RVRIL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzRcIj5MVEMvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfNVwiPlhSUC9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV82XCI+VVNEVC9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e3BhZGRpbmc6JzNweCAzcHggMCAzcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE2fSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBzaXplPSdzbWFsbCcgZGVmYXVsdFZhbHVlPVwicGFyaXR5XzFcIiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzFcIj5CVEMvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfMlwiPkJUQy9VU0RUPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfM1wiPkVUSC9UUlk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBhcml0eV80XCI+TFRDL1RSWTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGFyaXR5XzVcIj5YUlAvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwYXJpdHlfNlwiPlVTRFQvVFJZPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxOH0gc3R5bGU9e3toZWlnaHQ6JzEwMCUnLGJvcmRlclJpZ2h0Oidzb2xpZCAjRUVFIDFweCcsdGV4dEFsaWduOidjZW50ZXInLHBhZGRpbmdUb3A6JzYwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5QQVJJVFkgUFJPRklUIEdSQVBIPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPmNhbGN1bGF0ZWQgZm9yIDEwMDAkPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5JdCB3aWxsIGJlIHRoZSBCYXItQ2hhciBoZXJlITwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=D:\\react\\arbitragebot1\\pages\\parity.js */"
      }), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_affix__WEBPACK_IMPORTED_MODULE_9___default.a, {
        offsetTop: this.state.affixtop
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
        selectedKeys: [this.state.current],
        mode: "horizontal",
        theme: "dark"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
        key: "exchange"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("a", {
        href: "/index",
        className: "jsx-3200267982"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "appstore"
      }), "Exchange")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
        key: "currency"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("a", {
        href: "/currency",
        className: "jsx-3200267982"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "property-safety"
      }), "Currency")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
        key: "parity"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("a", {
        href: "/parity",
        className: "jsx-3200267982"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "stock"
      }), "Parity")))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("br", {
        className: "jsx-3200267982"
      })), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          marginBottom: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("div", {
        style: {
          background: '#FFF'
        },
        className: "jsx-3200267982" + " " + "type1"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          paddingBottom: 3
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 6,
        style: {
          height: '100%',
          borderRight: 'solid #EEE 1px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(ButtonGroup, {
        style: {
          margin: '3px 0 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_21___default.a, {
        icon: "plus",
        onClick: this.add
      }), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_5___default.a, {
        placement: "topLeft",
        title: "Are you sure to delete this box?",
        onConfirm: this.confirm,
        okText: "Yes",
        cancelText: "No"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_21___default.a, {
        icon: "minus"
      }))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a, {
        style: {
          width: '48.9%',
          float: 'right',
          marginTop: 3,
          marginRight: 3
        }
      }))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          borderTop: 'solid #EEE 1px',
          padding: '3px 3px 0 3px',
          marginTop: 3
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24,
        style: {}
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(InputGroup, {
        compact: true,
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "trk",
        style: {
          width: '50%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "btc"
      }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "trk"
      }, "BTCTURK")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "btc",
        style: {
          width: '50%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "btc"
      }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "trk"
      }, "BTCTURK"))))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          padding: '3px 3px 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(InputGroup, {
        compact: true,
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "buy",
        style: {
          width: '33.333%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "sell"
      }, "sell"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "buy"
      }, "buy")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "btc",
        style: {
          width: '33.333%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "btc"
      }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "trk"
      }, "BTCTURK")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "parity_1",
        style: {
          width: '33.333%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_1"
      }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_2"
      }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_3"
      }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_4"
      }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_5"
      }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_6"
      }, "USDT/TRY"))))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          padding: '3px 3px 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(InputGroup, {
        compact: true,
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "buy",
        style: {
          width: '33.333%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "sell"
      }, "sell"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "buy"
      }, "buy")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "btc",
        style: {
          width: '33.333%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "btc"
      }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "trk"
      }, "BTCTURK")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "parity_1",
        style: {
          width: '33.333%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_1"
      }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_2"
      }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_3"
      }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_4"
      }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_5"
      }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_6"
      }, "USDT/TRY"))))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          padding: '3px 3px 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(InputGroup, {
        compact: true,
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "buy",
        style: {
          width: '33.333%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "sell"
      }, "sell"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "buy"
      }, "buy")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "btc",
        style: {
          width: '33.333%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "btc"
      }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "trk"
      }, "BTCTURK")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "parity_1",
        style: {
          width: '33.333%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_1"
      }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_2"
      }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_3"
      }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_4"
      }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_5"
      }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_6"
      }, "USDT/TRY"))))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          padding: '3px 3px 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 16
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1___default.a, {
        size: "small",
        defaultValue: 1000,
        formatter: function formatter(value) {
          return "$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        parser: function parser(value) {
          return value.replace(/\$\s?|(,*)/g, '');
        },
        style: {
          width: '100%'
        },
        onChange: onChange
      })), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 8,
        style: {
          textAlign: 'center'
        }
      }, "12$")), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          padding: '3px 3px 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 16,
        style: {
          textAlign: 'center'
        }
      }, "limit"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "parity_1",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_1"
      }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_2"
      }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_3"
      }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_4"
      }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_5"
      }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_6"
      }, "USDT/TRY")))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          padding: '3px 3px 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 16,
        style: {
          textAlign: 'center'
        }
      }, "market"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "parity_1",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_1"
      }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_2"
      }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_3"
      }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_4"
      }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_5"
      }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_6"
      }, "USDT/TRY")))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          padding: '3px 3px 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 16,
        style: {
          textAlign: 'center'
        }
      }, "auto"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "parity_1",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_1"
      }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_2"
      }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_3"
      }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_4"
      }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_5"
      }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_6"
      }, "USDT/TRY")))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          padding: '3px 3px 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 16,
        style: {
          textAlign: 'center'
        }
      }, "inventory"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "parity_1",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_1"
      }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_2"
      }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_3"
      }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_4"
      }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_5"
      }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_6"
      }, "USDT/TRY")))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          padding: '3px 3px 0 3px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 16,
        style: {
          textAlign: 'center'
        }
      }, "withdraw"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "small",
        defaultValue: "parity_1",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_1"
      }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_2"
      }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_3"
      }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_4"
      }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_5"
      }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(Option, {
        value: "parity_6"
      }, "USDT/TRY"))))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 18,
        style: {
          height: '100%',
          borderRight: 'solid #EEE 1px',
          textAlign: 'center',
          paddingTop: '60px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("h2", {
        className: "jsx-3200267982"
      }, "PARITY PROFIT GRAPH"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("h2", {
        className: "jsx-3200267982"
      }, "calculated for 1000$"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("h4", {
        className: "jsx-3200267982"
      }, "It will be the Bar-Char here!")))))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_23__["Component"]);



/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/parity.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/parity.js */"./pages/parity.js");


/***/ }),

/***/ "antd/lib/affix":
/*!*********************************!*\
  !*** external "antd/lib/affix" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),

/***/ "antd/lib/affix/style/css":
/*!*******************************************!*\
  !*** external "antd/lib/affix/style/css" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix/style/css");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style/css":
/*!********************************************!*\
  !*** external "antd/lib/button/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style/css":
/*!*****************************************!*\
  !*** external "antd/lib/col/style/css" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style/css");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style/css":
/*!******************************************!*\
  !*** external "antd/lib/icon/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input-number":
/*!****************************************!*\
  !*** external "antd/lib/input-number" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),

/***/ "antd/lib/input-number/style/css":
/*!**************************************************!*\
  !*** external "antd/lib/input-number/style/css" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number/style/css");

/***/ }),

/***/ "antd/lib/input/style/css":
/*!*******************************************!*\
  !*** external "antd/lib/input/style/css" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style/css");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/menu/style/css":
/*!******************************************!*\
  !*** external "antd/lib/menu/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style/css");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/message/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/message/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style/css");

/***/ }),

/***/ "antd/lib/popconfirm":
/*!**************************************!*\
  !*** external "antd/lib/popconfirm" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ "antd/lib/popconfirm/style/css":
/*!************************************************!*\
  !*** external "antd/lib/popconfirm/style/css" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm/style/css");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style/css":
/*!*****************************************!*\
  !*** external "antd/lib/row/style/css" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style/css");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/select/style/css":
/*!********************************************!*\
  !*** external "antd/lib/select/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style/css");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=parity.js.map