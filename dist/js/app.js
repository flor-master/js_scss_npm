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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _PokePage = __webpack_require__(8);

	var _PokePage2 = _interopRequireDefault(_PokePage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new PokePage({
	    id: 'app',
	    page: 0
	});

	// class PokeList {
	//     constructor () {
	//         this.page = 0;
	//     }
	//     create () {
	//
	//         PokeApi.getList(url+'&offset='+this.page).then(
	//             (val) => {
	//                 document.getElementById('app').innerHTML = new HTML(val.objects).render();
	//                 document.getElementById('morePoke').addEventListener('click', (event) => {
	//                     this.page++;
	//                     PokeApi.getList(url+'&offset='+this.page).then(
	//                         (val) => {
	//                             document.getElementById('app').innerHTML = new HTML(val.objects).render();
	//                         },
	//                         (val) => {
	//                             console.log('ERROR -->', val);
	//                         }
	//                     );
	//                 }, false);
	//             },
	//             (val) => {
	//                 console.log('ERROR -->', val);
	//             }
	//         );
	//
	//
	//     }
	// }

	//new PokeList().create();
	//import Helpers from './utilites/helpers';

/***/ },

/***/ 8:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PokePage = function () {
	    function PokePage() {
	        _classCallCheck(this, PokePage);
	    }

	    _createClass(PokePage, [{
	        key: "render",
	        value: function render() {
	            return "\n            <div class='poke-list'>\n\n                <button class='more' id='morePoke'>Load More</button>\n            </div>\n        ";
	        }
	    }]);

	    return PokePage;
	}();

	exports.default = PokePage;

/***/ }

/******/ });