/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n// server.js\n\n\n\n// const postRouter = require('././routes/post.routes');\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\n// import \"./config/mongodb.config\"\n\nconst config = __webpack_require__(/*! ../webpack/webpack.config */ \"./webpack/webpack.config.js\");\nconst compiler = webpack(config);\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst PORT = 8080;\n\napp.use(\n  webpackDevMiddleware(compiler, {\n    publicPath: config.output.publicPath,\n  })\n);\n\n\napp.get('/', function(req, res){\n  res.send('Hello ! from the Server ');\n});\n\napp.use('/api', _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// app.use('/api/posts', postRouter);\n\napp.listen(PORT, function () {\n    console.log(`Server Listening on ${PORT}`);\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n//# sourceURL=webpack://server/./src/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n// require('dotenv').config();\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n// middleware that is specific to this router\nrouter.use((req, res, next) => {\n    // console.log('Time: ', Date.now())\n    next()\n  })\n\nrouter.get('/', (req, res) => {\n    res.send('Hello World');\n})\n\nrouter.get('/new', (req, res, next) => {\n    let languages = [\n        {\n         language: 'Spanish'\n        },\n        {\n         language: \"French\"\n        },\n        {\n         langauge: \"German\"\n        }\n    ];\n    res.json(languages);\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./src/routes/index.js?");

/***/ }),

/***/ "./webpack/webpack.config.js":
/*!***********************************!*\
  !*** ./webpack/webpack.config.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const path = __webpack_require__(/*! path */ \"path\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst nodeexternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n/*\n * SplitChunksPlugin is enabled by default and replaced\n * deprecated CommonsChunkPlugin. It automatically identifies modules which\n * should be splitted of chunk by heuristics using module duplication count and\n * module category (i. e. node_modules). And splits the chunks…\n *\n * It is safe to remove \"splitChunks\" from the generated configuration\n * and was added as an educational example.\n *\n * https://webpack.js.org/plugins/split-chunks-plugin/\n *\n */\n\n/*\n * We've enabled MiniCssExtractPlugin for you. This allows your app to\n * use css modules that will be moved into a separate CSS file instead of inside\n * one of your module entries!\n *\n * https://github.com/webpack-contrib/mini-css-extract-plugin\n *\n */\n\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\n\n\n\n/*\n * We've enabled TerserPlugin for you! This minifies your app\n * in order to load faster and run less javascript.\n *\n * https://github.com/webpack-contrib/terser-webpack-plugin\n *\n */\n\nconst TerserPlugin = __webpack_require__(/*! terser-webpack-plugin */ \"terser-webpack-plugin\");\n\n\n\n\nmodule.exports = {\n  mode: 'development',\n  entry: './src/index.js',\n  target: 'node',\n  watch: false,\n  output: {\n    filename: '[name].js',\n    // filename: '[name].bundle.js',\n    path: path.resolve(__dirname, '../dist'),\n    clean: true,\n    publicPath: '/',\n},\n  plugins: [\n    new webpack.ProgressPlugin(),\n    new MiniCssExtractPlugin({ filename: 'main.[contenthash].css' })\n    // Other rules..\n  ],\n  resolve: {\n    fallback: {\n      util: /*require.resolve*/(/*! util/ */ \"util/\"),\n      path: /*require.resolve*/(/*! path-browserify */ \"path-browserify\"),\n      crypto: /*require.resolve*/(/*! crypto-browserify */ \"crypto-browserify\"),\n      buffer: /*require.resolve*/(/*! buffer/ */ \"buffer/\"),\n      https: /*require.resolve*/(/*! https-browserify */ \"https-browserify\"),\n      http: /*require.resolve*/(/*! stream-http */ \"stream-http\"),\n      os: /*require.resolve*/(/*! os-browserify/browser */ \"os-browserify/browser\"),\n      vm: /*require.resolve*/(/*! vm-browserify */ \"vm-browserify\"),\n      stream: /*require.resolve*/(/*! stream-browserify */ \"stream-browserify\"),\n      constants: /*require.resolve*/(/*! constants-browserify */ \"constants-browserify\"),\n      assert: /*require.resolve*/(/*! assert/ */ \"assert/\"),\n      zlib: /*require.resolve*/(/*! browserify-zlib */ \"browserify-zlib\")\n    }\n  },\n  /* For all the pollyfill fallbacks\n  * resolve: {\n  *   alias: {\n  *     assert: \"assert\",\n  *     buffer: \"buffer\",\n  *     console: \"console-browserify\",\n  *     constants: \"constants-browserify\",\n  *     crypto: \"crypto-browserify\",\n  *     domain: \"domain-browser\",\n  *     events: \"events\",\n  *     http: \"stream-http\",\n  *     https: \"https-browserify\",\n  *     os: \"os-browserify/browser\",\n  *     path: \"path-browserify\",\n  *     punycode: \"punycode\",\n  *     querystring: \"querystring-es3\",\n  *     stream: \"stream-browserify\",\n  *     _stream_duplex: \"readable-stream/duplex\",\n  *     _stream_passthrough: \"readable-stream/passthrough\",\n  *     _stream_readable: \"readable-stream/readable\",\n  *     _stream_transform: \"readable-stream/transform\",\n  *     _stream_writable: \"readable-stream/writable\",\n  *     string_decoder: \"string_decoder\",\n  *     sys: \"util\",\n  *     timers: \"timers-browserify\",\n  *     tty: \"tty-browserify\",\n  *     url: \"url\",\n  *     util: \"util\",\n  *     vm: \"vm-browserify\",\n  *     zlib: \"browserify-zlib\"\n  * }},\n  */\n  module: {\n    rules: [\n      {\n        test: /\\.(js|jsx)$/,\n        include: [path.resolve(__dirname, 'src')],\n        loader: 'babel-loader'\n      }\n      // {\n      //   test: /.css$/,\n      //   use: [\n      //     {\n      //       loader: MiniCssExtractPlugin.loader\n      //     },\n      //     {\n      //       loader: \"style-loader\"\n      //     },\n      //     {\n      //       loader: \"css-loader\",\n      //       options: {\n      //         sourceMap: true\n      //       }\n      //     }\n        // ]\n      // }\n    ]\n  },\n  externals: [nodeexternals()],\n  optimization: {\n    minimizer: [new TerserPlugin()],\n\n    splitChunks: {\n      cacheGroups: {\n        vendors: {\n          priority: -10,\n          test: /[\\\\/]node_modules[\\\\/]/\n        }\n      },\n\n      chunks: 'async',\n      minChunks: 1,\n      minSize: 30000,\n      name: false\n    }\n  }\n}\n\n//# sourceURL=webpack://server/./webpack/webpack.config.js?");

/***/ }),

/***/ "assert/":
/*!**************************!*\
  !*** external "assert/" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert/");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "browserify-zlib":
/*!**********************************!*\
  !*** external "browserify-zlib" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("browserify-zlib");

/***/ }),

/***/ "buffer/":
/*!**************************!*\
  !*** external "buffer/" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer/");

/***/ }),

/***/ "constants-browserify":
/*!***************************************!*\
  !*** external "constants-browserify" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("constants-browserify");

/***/ }),

/***/ "crypto-browserify":
/*!************************************!*\
  !*** external "crypto-browserify" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto-browserify");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "https-browserify":
/*!***********************************!*\
  !*** external "https-browserify" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("https-browserify");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "os-browserify/browser":
/*!****************************************!*\
  !*** external "os-browserify/browser" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("os-browserify/browser");

/***/ }),

/***/ "path-browserify":
/*!**********************************!*\
  !*** external "path-browserify" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("path-browserify");

/***/ }),

/***/ "stream-browserify":
/*!************************************!*\
  !*** external "stream-browserify" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream-browserify");

/***/ }),

/***/ "stream-http":
/*!******************************!*\
  !*** external "stream-http" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream-http");

/***/ }),

/***/ "terser-webpack-plugin":
/*!****************************************!*\
  !*** external "terser-webpack-plugin" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("terser-webpack-plugin");

/***/ }),

/***/ "util/":
/*!************************!*\
  !*** external "util/" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("util/");

/***/ }),

/***/ "vm-browserify":
/*!********************************!*\
  !*** external "vm-browserify" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("vm-browserify");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-node-externals");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;