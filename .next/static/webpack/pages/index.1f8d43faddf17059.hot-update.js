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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layouts/Layout */ \"./layouts/Layout.tsx\");\n/* harmony import */ var components_HeroHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/HeroHeader */ \"./components/HeroHeader.tsx\");\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Container */ \"./components/Container.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_ArticleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ArticleList */ \"./components/ArticleList.tsx\");\n/* harmony import */ var utils_filterArticles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/filterArticles */ \"./utils/filterArticles.ts\");\n/* harmony import */ var components_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Category */ \"./components/Category.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Index(param) {\n    var articles = param.articles, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), selectedTag = ref[0], setSelectedTag = ref[1];\n    var filteredArticles = (0,utils_filterArticles__WEBPACK_IMPORTED_MODULE_6__.filterArticles)(articles, selectedTag);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(layouts_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_HeroHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center gap-4 pt-8 dark:bg-slate-900 \",\n                children: categories.map(function(tag) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        tag: tag,\n                        selectedTag: selectedTag,\n                        setSelectedTag: setSelectedTag\n                    }, tag, false, {\n                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-8 text-3xl font-bold text-gray-900 dark:text-gray-100 \",\n                            children: !selectedTag ? \"Сүүлд нийтэлсэн\" : \"\".concat(selectedTag)\n                        }, void 0, false, {\n                            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ArticleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            articles: filteredArticles\n                        }, void 0, false, {\n                            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ3dDO0FBQ087QUFDRjtBQUNaO0FBQ2dCO0FBQ0s7QUFDWDs7QUFFNUIsU0FBU08sS0FBSyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFFBQVEsR0FBVixLQUF3QixDQUF0QkEsUUFBUSxFQUFFQyxVQUFVLEdBQXRCLEtBQXdCLENBQVpBLFVBQVU7OztJQUNsRCxJQUFzQ04sR0FBc0IsR0FBdEJBLCtDQUFRLENBQVMsSUFBSSxDQUFDLEVBQXJETyxXQUFXLEdBQW9CUCxHQUFzQixHQUExQyxFQUFFUSxjQUFjLEdBQUlSLEdBQXNCLEdBQTFCO0lBQ2xDLElBQU1TLGdCQUFnQixHQUFHUCxvRUFBYyxDQUFDRyxRQUFRLEVBQUVFLFdBQVcsQ0FBQztJQUU5RCxxQkFDRSw4REFBQ1Ysa0RBQU07OzBCQUNMLDhEQUFDQyw2REFBVTs7OztvQkFBRzswQkFDZCw4REFBQ1ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDZEQUE4RDswQkFDMUVMLFVBQVUsQ0FBQ00sR0FBRyxDQUFDQyxTQUFBQSxHQUFHO3lDQUNqQiw4REFBQ1YsMkRBQVE7d0JBQ1BVLEdBQUcsRUFBRUEsR0FBRzt3QkFFUk4sV0FBVyxFQUFFQSxXQUFXO3dCQUN4QkMsY0FBYyxFQUFFQSxjQUFjO3VCQUZ6QkssR0FBRzs7Ozs2QkFHUjtpQkFDSCxDQUFDOzs7OztvQkFDRTswQkFDTiw4REFBQ2QsNERBQVM7MEJBQ1IsNEVBQUNXLEtBQUc7O3NDQUNGLDhEQUFDQSxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsMkRBQTJEO3NDQUN2RSxDQUFDSixXQUFXLEdBQUcsaUJBQWlCLEdBQUcsRUFBQyxDQUFjLE9BQVpBLFdBQVcsQ0FBRTs7Ozs7Z0NBQ2hEO3NDQUNOLDhEQUFDTiw4REFBVzs0QkFBQ0ksUUFBUSxFQUFFSSxnQkFBZ0I7Ozs7O2dDQUFJOzs7Ozs7d0JBQ3ZDOzs7OztvQkFDSTs7Ozs7O1lBQ0wsQ0FDVDtBQUNKLENBQUM7R0EzQnVCTCxLQUFLO0FBQUxBLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udmVydFRvQXJ0aWNsZUxpc3QsIGdldEFsbEFydGljbGVzIH0gZnJvbSAndXRpbHMvbm90aW9uJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZXJvSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvSGVyb0hlYWRlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvQ29udGFpbmVyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFydGljbGVMaXN0IGZyb20gJ2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QnO1xuaW1wb3J0IHsgZmlsdGVyQXJ0aWNsZXMgfSBmcm9tICd1dGlscy9maWx0ZXJBcnRpY2xlcyc7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnY29tcG9uZW50cy9DYXRlZ29yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMgfSkge1xuICBjb25zdCBbc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnXSA9IHVzZVN0YXRlPHN0cmluZz4obnVsbCk7XG4gIGNvbnN0IGZpbHRlcmVkQXJ0aWNsZXMgPSBmaWx0ZXJBcnRpY2xlcyhhcnRpY2xlcywgc2VsZWN0ZWRUYWcpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZXJvSGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC00IHB0LTggIGRhcms6Ymctc2xhdGUtOTAwIFwiPlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAodGFnID0+IChcbiAgICAgICAgICA8Q2F0ZWdvcnlcbiAgICAgICAgICAgIHRhZz17dGFnfVxuICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICBzZWxlY3RlZFRhZz17c2VsZWN0ZWRUYWd9XG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhZz17c2V0U2VsZWN0ZWRUYWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS04IHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTEwMCBcIj5cbiAgICAgICAgICAgIHshc2VsZWN0ZWRUYWcgPyAn0KHSr9Kv0LvQtCDQvdC40LnRgtGN0LvRgdGN0L0nIDogYCR7c2VsZWN0ZWRUYWd9YH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QXJ0aWNsZUxpc3QgYXJ0aWNsZXM9e2ZpbHRlcmVkQXJ0aWNsZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbEFydGljbGVzKHByb2Nlc3MuZW52LkJMT0dfREFUQUJBU0VfSUQpO1xuXG4gIGNvbnN0IHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMgfSA9IGNvbnZlcnRUb0FydGljbGVMaXN0KGRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzIDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhcnRpY2xlcykpLFxuICAgICAgY2F0ZWdvcmllcyA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAzMFxuICB9O1xufTtcblxuXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiSGVyb0hlYWRlciIsIkNvbnRhaW5lciIsInVzZVN0YXRlIiwiQXJ0aWNsZUxpc3QiLCJmaWx0ZXJBcnRpY2xlcyIsIkNhdGVnb3J5IiwiSW5kZXgiLCJhcnRpY2xlcyIsImNhdGVnb3JpZXMiLCJzZWxlY3RlZFRhZyIsInNldFNlbGVjdGVkVGFnIiwiZmlsdGVyZWRBcnRpY2xlcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInRhZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});