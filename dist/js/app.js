/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ajax = __webpack_require__(1);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import HTML from 'tmpl.tmpl';

	var url = 'http://pokeapi.co/api/v1/pokemon/?limit=12';

	//console.log('-->', HTML);

	_ajax2.default.getList(url).then(function (val) {
	  console.log('-->', val);
	}, function (val) {
	  console.log('ERROR -->', val);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PokeApi = function () {
	  function PokeApi() {
	    _classCallCheck(this, PokeApi);

	    console.log('[PokeApi] Constructor');
	  }

	  _createClass(PokeApi, [{
	    key: 'getList',
	    value: function getList(url) {
	      console.log(url);
	      return new Promise(function (resolve, reject) {

	        var request = new XMLHttpRequest();
	        request.open('GET', url, true);
	        request.send();
	        request.onload = function () {
	          if (this.status >= 200 && this.status < 400) {
	            resolve(JSON.parse(this.response));
	          } else {
	            reject(this.status);
	          }
	        };
	      });
	    }
	  }]);

	  return PokeApi;
	}();

	exports.default = new PokeApi();

/***/ }
/******/ ]);