/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/meera/test-ssr/server/index.js: Support for the experimental syntax 'jsx' isn't currently enabled (13:47):\\n\\n\\u001b[0m \\u001b[90m 11 |\\u001b[39m \\u001b[36mconst\\u001b[39m app \\u001b[33m=\\u001b[39m express()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 |\\u001b[39m app\\u001b[33m.\\u001b[39m\\u001b[36mget\\u001b[39m(\\u001b[32m'/'\\u001b[39m\\u001b[33m,\\u001b[39m (req\\u001b[33m,\\u001b[39m res) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 13 |\\u001b[39m     \\u001b[36mconst\\u001b[39m app \\u001b[33m=\\u001b[39m \\u001b[33mReactDOMServer\\u001b[39m\\u001b[33m.\\u001b[39mrenderToString(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                                               \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 |\\u001b[39m   \\u001b[0m\\n\\u001b[0m \\u001b[90m 15 |\\u001b[39m     \\u001b[36mconst\\u001b[39m indexFile \\u001b[33m=\\u001b[39m path\\u001b[33m.\\u001b[39mresolve(\\u001b[32m'./build/index.html'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 |\\u001b[39m     fs\\u001b[33m.\\u001b[39mreadFile(indexFile\\u001b[33m,\\u001b[39m \\u001b[32m'utf8'\\u001b[39m\\u001b[33m,\\u001b[39m (err\\u001b[33m,\\u001b[39m data) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\\n    at Parser._raise (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:776:17)\\n    at Parser.raiseWithData (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:769:17)\\n    at Parser.expectOnePlugin (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:9701:18)\\n    at Parser.parseExprAtom (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:11072:22)\\n    at Parser.parseExprSubscripts (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10655:23)\\n    at Parser.parseUpdate (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10635:21)\\n    at Parser.parseMaybeUnary (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10613:23)\\n    at Parser.parseExprOps (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10474:23)\\n    at Parser.parseMaybeConditional (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10448:23)\\n    at Parser.parseMaybeAssign (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10411:21)\\n    at /home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10378:39\\n    at Parser.allowInAnd (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:12051:12)\\n    at Parser.parseMaybeAssignAllowIn (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10378:17)\\n    at Parser.parseExprListItem (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:11811:18)\\n    at Parser.parseCallExpressionArguments (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10853:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10763:29)\\n    at Parser.parseSubscript (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10699:19)\\n    at Parser.parseSubscripts (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10672:19)\\n    at Parser.parseExprSubscripts (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10661:17)\\n    at Parser.parseUpdate (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10635:21)\\n    at Parser.parseMaybeUnary (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10613:23)\\n    at Parser.parseExprOps (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10474:23)\\n    at Parser.parseMaybeConditional (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10448:23)\\n    at Parser.parseMaybeAssign (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10411:21)\\n    at /home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10378:39\\n    at Parser.allowInAnd (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:12051:12)\\n    at Parser.parseMaybeAssignAllowIn (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:10378:17)\\n    at Parser.parseVar (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:12863:70)\\n    at Parser.parseVarStatement (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:12677:10)\\n    at Parser.parseStatementContent (/home/meera/test-ssr/node_modules/@babel/parser/lib/index.js:12269:21)\");\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ })

/******/ });