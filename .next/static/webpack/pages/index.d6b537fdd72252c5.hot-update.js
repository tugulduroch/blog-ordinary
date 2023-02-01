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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArticleCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/getLocalizedDate */ \"./utils/getLocalizedDate.ts\");\n\n\n\nfunction ArticleCard(param) {\n    var article = param.article;\n    var _this = this;\n    var ref;\n    var slug = slugify__WEBPACK_IMPORTED_MODULE_1___default()(article.title).toLowerCase();\n    var formattedTime = (0,utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(article.publishedDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"/blog/\".concat(slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col overflow-hidden cursor-pointer group\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute\",\n                            children: article === null || article === void 0 ? void 0 : (ref = article.categories) === null || ref === void 0 ? void 0 : ref.map(function(category) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-bold text-gray-600 uppercase bg-gray-100 rounded left-3 top-3\",\n                                    children: category\n                                }, category, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" filter contrast-[0.9]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"object-cover w-full transition rounded-lg aspect-video group-hover:opacity-90 bg-gray-50\",\n                                src: article.coverImage,\n                                alt: \"article cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-between flex-1 py-4 bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl font-semibold text-gray-900\",\n                                    children: article.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-3 text-base text-gray-500 line-clamp-2\",\n                                    children: article.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center mt-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2 space-x-1 text-sm text-gray-400\",\n                                children: [\n                                    article.categories.map(function(category) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-semibold text-gray-600\",\n                                                    children: [\n                                                        category,\n                                                        \" \"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    \"aria-hidden\": \"true\",\n                                                    children: \"\\xb7\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, category, true, {\n                                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, _this);\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                        dateTime: formattedTime,\n                                        children: formattedTime\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ArticleCard.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = ArticleCard;\nvar _c;\n$RefreshReg$(_c, \"ArticleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUM4QjtBQUN3QjtBQU12QyxTQUFTRSxXQUFXLENBQUMsS0FBa0IsRUFBRTtRQUFwQixPQUFTLEdBQVQsS0FBa0IsQ0FBaEJDLE9BQU87O1FBVWhDQSxHQUFtQjtJQVQ5QixJQUFNQyxJQUFJLEdBQUdKLDhDQUFPLENBQUNHLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLENBQUNDLFdBQVcsRUFBRTtJQUVqRCxJQUFNQyxhQUFhLEdBQUdOLGtFQUFnQixDQUFDRSxPQUFPLENBQUNLLGFBQWEsQ0FBQztJQUU3RCxxQkFDRSw4REFBQ0MsR0FBQztRQUFDQyxJQUFJLEVBQUUsUUFBTyxDQUFPLE9BQUxOLElBQUksQ0FBRTtrQkFDdEIsNEVBQUNPLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9EQUFvRDs7OEJBQ2pFLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsVUFBVTs7c0NBQ3ZCLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsVUFBVTtzQ0FDdEJULE9BQU8sYUFBUEEsT0FBTyxXQUFZLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsQ0FBQUEsR0FBbUIsR0FBbkJBLE9BQU8sQ0FBRVUsVUFBVSxjQUFuQlYsR0FBbUIsY0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxHQUFtQixDQUFFVyxHQUFHLENBQUNDLFNBQUFBLFFBQVE7cURBQ2hDLDhEQUFDSixLQUFHO29DQUVGQyxTQUFTLEVBQUMsaUpBQWlKOzhDQUUxSkcsUUFBUTttQ0FISkEsUUFBUTs7Ozt5Q0FJVDs2QkFDUCxDQUFDOzs7OztnQ0FDRTtzQ0FDTiw4REFBQ0osS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHdCQUF3QjtzQ0FDckMsNEVBQUNJLEtBQUc7Z0NBQ0ZKLFNBQVMsRUFBQywwRkFBMEY7Z0NBQ3BHSyxHQUFHLEVBQUVkLE9BQU8sQ0FBQ2UsVUFBVTtnQ0FDdkJDLEdBQUcsRUFBRSxlQUFlOzs7OztvQ0FDcEI7Ozs7O2dDQUNFOzs7Ozs7d0JBQ0Y7OEJBQ04sOERBQUNSLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxvREFBb0Q7O3NDQUNqRSw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFFBQVE7OzhDQUNyQiw4REFBQ1EsR0FBQztvQ0FBQ1IsU0FBUyxFQUFDLHFDQUFxQzs4Q0FBRVQsT0FBTyxDQUFDRSxLQUFLOzs7Ozt3Q0FBSzs4Q0FDdEUsOERBQUNlLEdBQUM7b0NBQUNSLFNBQVMsRUFBQywyQ0FBMkM7OENBQUVULE9BQU8sQ0FBQ2tCLE9BQU87Ozs7O3dDQUFLOzs7Ozs7Z0NBQzFFO3NDQUNOLDhEQUFDVixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsd0JBQXdCO3NDQUNyQyw0RUFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLDJDQUEyQzs7b0NBQ3ZEVCxPQUFPLENBQUNVLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxRQUFROzZEQUM5Qiw4REFBQ0osS0FBRzs7OERBQ0YsOERBQUNXLE1BQUk7b0RBQUNWLFNBQVMsRUFBQyw2QkFBNkI7O3dEQUFFRyxRQUFRO3dEQUFDLEdBQUM7Ozs7Ozt5REFBTzs4REFDaEUsOERBQUNPLE1BQUk7b0RBQUNDLGFBQVcsRUFBQyxNQUFNOzhEQUFDLE1BQVE7Ozs7O3lEQUFPOzsyQ0FGaENSLFFBQVE7Ozs7aURBR1o7cUNBQ1AsQ0FBQztrREFDRiw4REFBQ1MsTUFBSTt3Q0FBQ0MsUUFBUSxFQUFFbEIsYUFBYTtrREFBR0EsYUFBYTs7Ozs7NENBQVE7Ozs7OztvQ0FDakQ7Ozs7O2dDQUVGOzs7Ozs7d0JBQ0Y7Ozs7OztnQkFDRjs7Ozs7WUFDSixDQUNKO0FBQ0osQ0FBQztBQWhEdUJMLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlQ2FyZC50c3g/NDI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAndXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcclxuaW1wb3J0IGdldExvY2FsaXplZERhdGUgZnJvbSAndXRpbHMvZ2V0TG9jYWxpemVkRGF0ZSc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGFydGljbGU6IEFydGljbGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlQ2FyZCh7IGFydGljbGUgfTogUHJvcHMpIHtcclxuICBjb25zdCBzbHVnID0gc2x1Z2lmeShhcnRpY2xlLnRpdGxlKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gZ2V0TG9jYWxpemVkRGF0ZShhcnRpY2xlLnB1Ymxpc2hlZERhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17YC9ibG9nLyR7c2x1Z31gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG92ZXJmbG93LWhpZGRlbiBjdXJzb3ItcG9pbnRlciBncm91cFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIj5cclxuICAgICAgICAgICAge2FydGljbGU/LmNhdGVnb3JpZXM/Lm1hcChjYXRlZ29yeSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHNoYWRvdyB6LVsyXSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0xLjUgbWItMiBtci0yIHRleHQteHMgZm9udC1ib2xkIHRleHQtZ3JheS02MDAgdXBwZXJjYXNlIGJnLWdyYXktMTAwIHJvdW5kZWQgbGVmdC0zIHRvcC0zXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmaWx0ZXIgY29udHJhc3QtWzAuOV1cIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgdHJhbnNpdGlvbiByb3VuZGVkLWxnIGFzcGVjdC12aWRlbyBncm91cC1ob3ZlcjpvcGFjaXR5LTkwIGJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17J2FydGljbGUgY292ZXInfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBmbGV4LTEgcHktNCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj57YXJ0aWNsZS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1iYXNlIHRleHQtZ3JheS01MDAgbGluZS1jbGFtcC0yXCI+e2FydGljbGUuc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItMiBzcGFjZS14LTEgdGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwXCI+e2NhdGVnb3J5fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZtaWRkb3Q7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e2Zvcm1hdHRlZFRpbWV9Pntmb3JtYXR0ZWRUaW1lfTwvdGltZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57YXJ0aWNsZT8uYXV0aG9yPy5uYW1lfTwvcD4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic2x1Z2lmeSIsImdldExvY2FsaXplZERhdGUiLCJBcnRpY2xlQ2FyZCIsImFydGljbGUiLCJzbHVnIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImZvcm1hdHRlZFRpbWUiLCJwdWJsaXNoZWREYXRlIiwiYSIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJpbWciLCJzcmMiLCJjb3ZlckltYWdlIiwiYWx0IiwicCIsInN1bW1hcnkiLCJzcGFuIiwiYXJpYS1oaWRkZW4iLCJ0aW1lIiwiZGF0ZVRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ArticleCard.tsx\n"));

/***/ })

});