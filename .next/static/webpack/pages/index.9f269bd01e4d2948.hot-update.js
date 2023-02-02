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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layouts/Layout */ \"./layouts/Layout.tsx\");\n/* harmony import */ var components_HeroHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/HeroHeader */ \"./components/HeroHeader.tsx\");\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Container */ \"./components/Container.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_ArticleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ArticleList */ \"./components/ArticleList.tsx\");\n/* harmony import */ var utils_filterArticles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/filterArticles */ \"./utils/filterArticles.ts\");\n/* harmony import */ var components_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Category */ \"./components/Category.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Index(param) {\n    var articles = param.articles, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), selectedTag = ref[0], setSelectedTag = ref[1];\n    var filteredArticles = (0,utils_filterArticles__WEBPACK_IMPORTED_MODULE_6__.filterArticles)(articles, selectedTag);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(layouts_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_HeroHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center gap-4 mt-8\",\n                children: categories.map(function(tag) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        tag: tag,\n                        selectedTag: selectedTag,\n                        setSelectedTag: setSelectedTag\n                    }, tag, false, {\n                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-8 text-3xl font-bold text-gray-900 dark:text-gray-100\",\n                            children: !selectedTag ? \"Сүүлд нийтэлсэн\" : \"\".concat(selectedTag, \" articles\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ArticleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            articles: filteredArticles\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ3dDO0FBQ087QUFDRjtBQUNaO0FBQ2dCO0FBQ0s7QUFDWDs7QUFFNUIsU0FBU08sS0FBSyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFFBQVEsR0FBVixLQUF3QixDQUF0QkEsUUFBUSxFQUFFQyxVQUFVLEdBQXRCLEtBQXdCLENBQVpBLFVBQVU7OztJQUNsRCxJQUFzQ04sR0FBc0IsR0FBdEJBLCtDQUFRLENBQVMsSUFBSSxDQUFDLEVBQXJETyxXQUFXLEdBQW9CUCxHQUFzQixHQUExQyxFQUFFUSxjQUFjLEdBQUlSLEdBQXNCLEdBQTFCO0lBQ2xDLElBQU1TLGdCQUFnQixHQUFHUCxvRUFBYyxDQUFDRyxRQUFRLEVBQUVFLFdBQVcsQ0FBQztJQUU5RCxxQkFDRSw4REFBQ1Ysa0RBQU07OzBCQUNMLDhEQUFDQyw2REFBVTs7OztvQkFBRzswQkFDZCw4REFBQ1ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDBDQUEwQzswQkFDdERMLFVBQVUsQ0FBQ00sR0FBRyxDQUFDQyxTQUFBQSxHQUFHO3lDQUNqQiw4REFBQ1YsMkRBQVE7d0JBQ1BVLEdBQUcsRUFBRUEsR0FBRzt3QkFFUk4sV0FBVyxFQUFFQSxXQUFXO3dCQUN4QkMsY0FBYyxFQUFFQSxjQUFjO3VCQUZ6QkssR0FBRzs7Ozs2QkFHUjtpQkFDSCxDQUFDOzs7OztvQkFDRTswQkFDTiw4REFBQ2QsNERBQVM7MEJBQ1IsNEVBQUNXLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxNQUFNOztzQ0FDbkIsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQywwREFBMEQ7c0NBQ3RFLENBQUNKLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxFQUFDLENBQWMsTUFBUyxDQUFyQkEsV0FBVyxFQUFDLFdBQVMsQ0FBQzs7Ozs7Z0NBQ3pEO3NDQUNOLDhEQUFDTiw4REFBVzs0QkFBQ0ksUUFBUSxFQUFFSSxnQkFBZ0I7Ozs7O2dDQUFJOzs7Ozs7d0JBQ3ZDOzs7OztvQkFDSTs7Ozs7O1lBQ0wsQ0FDVDtBQUNKLENBQUM7R0EzQnVCTCxLQUFLO0FBQUxBLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udmVydFRvQXJ0aWNsZUxpc3QsIGdldEFsbEFydGljbGVzIH0gZnJvbSAndXRpbHMvbm90aW9uJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnbGF5b3V0cy9MYXlvdXQnO1xyXG5pbXBvcnQgSGVyb0hlYWRlciBmcm9tICdjb21wb25lbnRzL0hlcm9IZWFkZXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcnRpY2xlTGlzdCBmcm9tICdjb21wb25lbnRzL0FydGljbGVMaXN0JztcclxuaW1wb3J0IHsgZmlsdGVyQXJ0aWNsZXMgfSBmcm9tICd1dGlscy9maWx0ZXJBcnRpY2xlcyc7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tICdjb21wb25lbnRzL0NhdGVnb3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMgfSkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWddID0gdXNlU3RhdGU8c3RyaW5nPihudWxsKTtcclxuICBjb25zdCBmaWx0ZXJlZEFydGljbGVzID0gZmlsdGVyQXJ0aWNsZXMoYXJ0aWNsZXMsIHNlbGVjdGVkVGFnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZXJvSGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtOFwiPlxyXG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCh0YWcgPT4gKFxyXG4gICAgICAgICAgPENhdGVnb3J5XHJcbiAgICAgICAgICAgIHRhZz17dGFnfVxyXG4gICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgc2VsZWN0ZWRUYWc9e3NlbGVjdGVkVGFnfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhZz17c2V0U2VsZWN0ZWRUYWd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktOCB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgeyFzZWxlY3RlZFRhZyA/ICfQodKv0q/Qu9C0INC90LjQudGC0Y3Qu9GB0Y3QvScgOiBgJHtzZWxlY3RlZFRhZ30gYXJ0aWNsZXNgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QXJ0aWNsZUxpc3QgYXJ0aWNsZXM9e2ZpbHRlcmVkQXJ0aWNsZXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxBcnRpY2xlcyhwcm9jZXNzLmVudi5CTE9HX0RBVEFCQVNFX0lEKTtcclxuXHJcbiAgY29uc3QgeyBhcnRpY2xlcywgY2F0ZWdvcmllcyB9ID0gY29udmVydFRvQXJ0aWNsZUxpc3QoZGF0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBhcnRpY2xlcyA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJ0aWNsZXMpKSxcclxuICAgICAgY2F0ZWdvcmllcyA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMzBcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJIZXJvSGVhZGVyIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJBcnRpY2xlTGlzdCIsImZpbHRlckFydGljbGVzIiwiQ2F0ZWdvcnkiLCJJbmRleCIsImFydGljbGVzIiwiY2F0ZWdvcmllcyIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJmaWx0ZXJlZEFydGljbGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});