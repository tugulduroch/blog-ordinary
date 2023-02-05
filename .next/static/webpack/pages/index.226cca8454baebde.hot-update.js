"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ArticleList.tsx":
/*!************************************!*\
  !*** ./components/ArticleList.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArticleList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ArticleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleCard */ \"./components/ArticleCard.tsx\");\n\n\nfunction ArticleList(param) {\n    var articles = param.articles;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid gap-10 lg:gap-12 sm:grid-cols-2\",\n        children: [\n            articles.map(function(article) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    article: article\n                }, article.id, false, {\n                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/ArticleList.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this);\n            }),\n            \"\\\\\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                className: \"inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white\",\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/ArticleList.tsx\",\n                lineNumber: 14,\n                columnNumber: 2\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                className: \"inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white\",\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/ArticleList.tsx\",\n                lineNumber: 18,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/ArticleList.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ArticleList;\nvar _c;\n$RefreshReg$(_c, \"ArticleList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDd0M7QUFNekIsU0FBU0MsV0FBVyxDQUFDLEtBQW1CLEVBQUU7UUFBckIsUUFBVSxHQUFWLEtBQW1CLENBQWpCQyxRQUFROztJQUM1QyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsc0NBQXNDOztZQUNsREYsUUFBUSxDQUFDRyxHQUFHLENBQUNDLFNBQUFBLE9BQU87cUNBQ25CLDhEQUFDTixvREFBVztvQkFBQ00sT0FBTyxFQUFFQSxPQUFPO21CQUFPQSxPQUFPLENBQUNDLEVBQUU7Ozs7eUJBQUk7YUFDbkQsQ0FBQztZQUFDLElBQ1I7MEJBQUEsOERBQUNDLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxHQUFHO2dCQUFDTCxTQUFTLEVBQUMsNlBBQTZQOzBCQUFDLFVBRXJSOzs7OztvQkFBSTswQkFFSiw4REFBQ0ksR0FBQztnQkFBQ0MsSUFBSSxFQUFDLEdBQUc7Z0JBQUNMLFNBQVMsRUFBQyxrUUFBa1E7MEJBQUMsTUFFelI7Ozs7O29CQUFJOzs7Ozs7WUFDTSxDQUNOO0FBQ0osQ0FBQztBQWZ1QkgsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVMaXN0LnRzeD9jZTBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFydGljbGUgfSBmcm9tICd1dGlscy90eXBlcyc7XG5pbXBvcnQgQXJ0aWNsZUNhcmQgZnJvbSAnLi9BcnRpY2xlQ2FyZCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFydGljbGVzOiBBcnRpY2xlW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlTGlzdCh7IGFydGljbGVzIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xMCBsZzpnYXAtMTIgc206Z3JpZC1jb2xzLTJcIj5cbiAgICAgIHthcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiAoXG4gICAgICAgIDxBcnRpY2xlQ2FyZCBhcnRpY2xlPXthcnRpY2xlfSBrZXk9e2FydGljbGUuaWR9IC8+XG4gICAgICApKX1cblxcPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTcwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiPlxuICBQcmV2aW91c1xuPC9hPlxuXG48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgbWwtMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS03MDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIj5cbiAgTmV4dFxuPC9hPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFydGljbGVDYXJkIiwiQXJ0aWNsZUxpc3QiLCJhcnRpY2xlcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImFydGljbGUiLCJpZCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArticleList.tsx\n"));

/***/ })

});