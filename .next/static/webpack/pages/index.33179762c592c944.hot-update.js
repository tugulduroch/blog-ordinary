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

/***/ "./components/ArticleCard.tsx":
/*!************************************!*\
  !*** ./components/ArticleCard.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArticleCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/getLocalizedDate */ \"./utils/getLocalizedDate.ts\");\n\n\n\nfunction ArticleCard(param) {\n    var article = param.article;\n    var _this = this;\n    var ref;\n    var slug = slugify__WEBPACK_IMPORTED_MODULE_1___default()(article.title).toLowerCase();\n    var formattedTime = (0,utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(article.publishedDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"/blog/\".concat(slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col overflow-hidden cursor-pointer group\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute\",\n                            children: article === null || article === void 0 ? void 0 : (ref = article.categories) === null || ref === void 0 ? void 0 : ref.map(function(category) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-bold text-gray-600 uppercase bg-gray-100 rounded left-3 top-3\",\n                                    children: category\n                                }, category, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" filter contrast-[0.9]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"object-cover w-full transition rounded-lg aspect-video group-hover:opacity-90 bg-gray-50\",\n                                src: article.coverImage,\n                                alt: \"article cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-between flex-1 py-4 bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl font-semibold text-gray-900\",\n                                    children: article.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-3 text-base text-gray-500 line-clamp-2\",\n                                    children: article.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center mt-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2 space-x-1 text-sm text-gray-400\",\n                                children: [\n                                    article.categories.map(function(category) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-semibold text-gray-600\",\n                                                    children: [\n                                                        category,\n                                                        \" \"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    \"aria-hidden\": \"true\",\n                                                    children: \"\\xb7\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, category, true, {\n                                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, _this);\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                        dateTime: formattedTime,\n                                        children: formattedTime\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = ArticleCard;\nvar _c;\n$RefreshReg$(_c, \"ArticleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUM4QjtBQUN3QjtBQU92QyxTQUFTRSxXQUFXLENBQUMsS0FBa0IsRUFBRTtRQUFwQixPQUFTLEdBQVQsS0FBa0IsQ0FBaEJDLE9BQU87O1FBVWhDQSxHQUFtQjtJQVQ5QixJQUFNQyxJQUFJLEdBQUdKLDhDQUFPLENBQUNHLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLENBQUNDLFdBQVcsRUFBRTtJQUVqRCxJQUFNQyxhQUFhLEdBQUdOLGtFQUFnQixDQUFDRSxPQUFPLENBQUNLLGFBQWEsQ0FBQztJQUU3RCxxQkFDRSw4REFBQ0MsR0FBQztRQUFDQyxJQUFJLEVBQUUsUUFBTyxDQUFPLE9BQUxOLElBQUksQ0FBRTtrQkFDdEIsNEVBQUNPLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9EQUFvRDs7OEJBQ2pFLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsVUFBVTs7c0NBQ3ZCLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsVUFBVTtzQ0FDdEJULE9BQU8sYUFBUEEsT0FBTyxXQUFZLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsQ0FBQUEsR0FBbUIsR0FBbkJBLE9BQU8sQ0FBRVUsVUFBVSxjQUFuQlYsR0FBbUIsY0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxHQUFtQixDQUFFVyxHQUFHLENBQUNDLFNBQUFBLFFBQVE7cURBQ2hDLDhEQUFDSixLQUFHO29DQUVGQyxTQUFTLEVBQUMsaUpBQWlKOzhDQUUxSkcsUUFBUTttQ0FISkEsUUFBUTs7Ozt5Q0FJVDs2QkFDUCxDQUFDOzs7OztnQ0FDRTtzQ0FDTiw4REFBQ0osS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHdCQUF3QjtzQ0FDckMsNEVBQUNJLEtBQUc7Z0NBQ0ZKLFNBQVMsRUFBQywwRkFBMEY7Z0NBQ3BHSyxHQUFHLEVBQUVkLE9BQU8sQ0FBQ2UsVUFBVTtnQ0FDdkJDLEdBQUcsRUFBRSxlQUFlOzs7OztvQ0FDcEI7Ozs7O2dDQUNFOzs7Ozs7d0JBQ0Y7OEJBQ04sOERBQUNSLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxvREFBb0Q7O3NDQUNqRSw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFFBQVE7OzhDQUNyQiw4REFBQ1EsR0FBQztvQ0FBQ1IsU0FBUyxFQUFDLHFDQUFxQzs4Q0FBRVQsT0FBTyxDQUFDRSxLQUFLOzs7Ozt3Q0FBSzs4Q0FDdEUsOERBQUNlLEdBQUM7b0NBQUNSLFNBQVMsRUFBQywyQ0FBMkM7OENBQUVULE9BQU8sQ0FBQ2tCLE9BQU87Ozs7O3dDQUFLOzs7Ozs7Z0NBQzFFO3NDQUNOLDhEQUFDVixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsd0JBQXdCO3NDQUNyQyw0RUFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLDJDQUEyQzs7b0NBQ3ZEVCxPQUFPLENBQUNVLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxRQUFROzZEQUM5Qiw4REFBQ0osS0FBRzs7OERBQ0YsOERBQUNXLE1BQUk7b0RBQUNWLFNBQVMsRUFBQyw2QkFBNkI7O3dEQUFFRyxRQUFRO3dEQUFDLEdBQUM7Ozs7Ozt5REFBTzs4REFDaEUsOERBQUNPLE1BQUk7b0RBQUNDLGFBQVcsRUFBQyxNQUFNOzhEQUFDLE1BQVE7Ozs7O3lEQUFPOzsyQ0FGaENSLFFBQVE7Ozs7aURBR1o7cUNBQ1AsQ0FBQztrREFDRiw4REFBQ1MsTUFBSTt3Q0FBQ0MsUUFBUSxFQUFFbEIsYUFBYTtrREFBR0EsYUFBYTs7Ozs7NENBQVE7Ozs7OztvQ0FDakQ7Ozs7O2dDQUVGOzs7Ozs7d0JBQ0Y7Ozs7OztnQkFDRjs7Ozs7WUFDSixDQUNKO0FBQ0osQ0FBQztBQWhEdUJMLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlQ2FyZC50c3g/NDI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAndXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcclxuaW1wb3J0IGdldExvY2FsaXplZERhdGUgZnJvbSAndXRpbHMvZ2V0TG9jYWxpemVkRGF0ZSc7XHJcbmltcG9ydCBUaGVtZVRvZ2dsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UaGVtZVRvZ2dsZXInO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBhcnRpY2xlOiBBcnRpY2xlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZUNhcmQoeyBhcnRpY2xlIH06IFByb3BzKSB7XHJcbiAgY29uc3Qgc2x1ZyA9IHNsdWdpZnkoYXJ0aWNsZS50aXRsZSkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGdldExvY2FsaXplZERhdGUoYXJ0aWNsZS5wdWJsaXNoZWREYXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9e2AvYmxvZy8ke3NsdWd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gY3Vyc29yLXBvaW50ZXIgZ3JvdXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlXCI+XHJcbiAgICAgICAgICAgIHthcnRpY2xlPy5jYXRlZ29yaWVzPy5tYXAoY2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzaGFkb3cgei1bMl0gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMS41IG1iLTIgbXItMiB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LWdyYXktNjAwIHVwcGVyY2FzZSBiZy1ncmF5LTEwMCByb3VuZGVkIGxlZnQtMyB0b3AtM1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmlsdGVyIGNvbnRyYXN0LVswLjldXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIHRyYW5zaXRpb24gcm91bmRlZC1sZyBhc3BlY3QtdmlkZW8gZ3JvdXAtaG92ZXI6b3BhY2l0eS05MCBiZy1ncmF5LTUwXCJcclxuICAgICAgICAgICAgICBzcmM9e2FydGljbGUuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9eydhcnRpY2xlIGNvdmVyJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZmxleC0xIHB5LTQgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+e2FydGljbGUudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIGxpbmUtY2xhbXAtMlwiPnthcnRpY2xlLnN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTIgc3BhY2UteC0xIHRleHQtc20gdGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgIHthcnRpY2xlLmNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMFwiPntjYXRlZ29yeX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbWlkZG90Ozwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXtmb3JtYXR0ZWRUaW1lfT57Zm9ybWF0dGVkVGltZX08L3RpbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2FydGljbGU/LmF1dGhvcj8ubmFtZX08L3A+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInNsdWdpZnkiLCJnZXRMb2NhbGl6ZWREYXRlIiwiQXJ0aWNsZUNhcmQiLCJhcnRpY2xlIiwic2x1ZyIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJmb3JtYXR0ZWRUaW1lIiwicHVibGlzaGVkRGF0ZSIsImEiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiaW1nIiwic3JjIiwiY292ZXJJbWFnZSIsImFsdCIsInAiLCJzdW1tYXJ5Iiwic3BhbiIsImFyaWEtaGlkZGVuIiwidGltZSIsImRhdGVUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArticleCard.tsx\n"));

/***/ })

});