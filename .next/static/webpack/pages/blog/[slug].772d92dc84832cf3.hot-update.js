"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/Layout */ \"./layouts/Layout.tsx\");\n/* harmony import */ var components_notionBlocks_renderBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notionBlocks/renderBlocks */ \"./components/notionBlocks/renderBlocks.tsx\");\n/* harmony import */ var utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/getLocalizedDate */ \"./utils/getLocalizedDate.ts\");\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Container */ \"./components/Container.tsx\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components_ArticleList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ArticleList */ \"./components/ArticleList.tsx\");\n/* harmony import */ var data_siteData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! data/siteData */ \"./data/siteData.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar ArticlePage = function(param) {\n    var content = param.content, title = param.title, coverImage = param.coverImage, publishedDate = param.publishedDate, summary = param.summary, moreArticles = param.moreArticles;\n    var publishedOn = (0,utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(publishedDate);\n    var slug = slugify__WEBPACK_IMPORTED_MODULE_6___default()(title).toLowerCase();\n    var ogImage = \"\".concat(data_siteData__WEBPACK_IMPORTED_MODULE_8__[\"default\"].websiteUrl, \"/api/og-image?title=\").concat(encodeURIComponent(title), \"&date=\").concat(encodeURIComponent(publishedOn));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(layouts_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n            title: title,\n            description: summary,\n            imageUrl: ogImage,\n            date: new Date(publishedDate).toISOString(),\n            ogUrl: \"/\".concat(slug),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-6 py-16 pb-48 mx-auto -mb-48 text-center bg-gray-100 md:pb-96 md:-mb-96 dark:bg-gray-900\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-3xl mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center mb-2 space-x-2 text-sm text-gray-500\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: publishedOn\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-extrabold tracking-tight text-gray-900 dark:text-gray-100 text-3xl\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"max-w-3xl mx-auto mt-2 leading-8 text-gray-500 dark:text-gray-400 sm:mt-2 \",\n                                    children: summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-5xl px-6 mx-auto my-10 md:px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"object-cover w-full rounded-xl aspect-video\",\n                            src: coverImage\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8 font-medium font-sans\",\n                        children: content.map(function(block) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: (0,components_notionBlocks_renderBlocks__WEBPACK_IMPORTED_MODULE_3__.renderBlocks)(block)\n                            }, block.id, false, {\n                                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-12 border-t dark:border-slate-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between my-8\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-3xl font-bold text-gray-900 dark:text-gray-100\",\n                                        children: \"Бусад нийтлэлүүд\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ArticleList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    articles: moreArticles\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\blog\\\\[slug].tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = ArticlePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlePage);\nvar _c;\n$RefreshReg$(_c, \"ArticlePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1tzbHVnXS50c3g/YWZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0QWxsQXJ0aWNsZXMsIGdldEFydGljbGVQYWdlLCBnZXRBcnRpY2xlUGFnZURhdGEgfSBmcm9tICd1dGlscy9ub3Rpb24nO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdsYXlvdXRzL0xheW91dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgcmVuZGVyQmxvY2tzIH0gZnJvbSAnY29tcG9uZW50cy9ub3Rpb25CbG9ja3MvcmVuZGVyQmxvY2tzJztcclxuaW1wb3J0IGdldExvY2FsaXplZERhdGUgZnJvbSAndXRpbHMvZ2V0TG9jYWxpemVkRGF0ZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9Db250YWluZXInO1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcclxuaW1wb3J0IEFydGljbGVMaXN0IGZyb20gJ2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QnO1xyXG5pbXBvcnQgc2l0ZURhdGEgZnJvbSAnZGF0YS9zaXRlRGF0YSc7XHJcbmltcG9ydCBwb2NrZXQgZnJvbSAncmVhY3QtdXNlYW5pbWF0aW9ucy9saWIvcG9ja2V0JztcclxuXHJcbmNvbnN0IEFydGljbGVQYWdlID0gKHtcclxuICBjb250ZW50LFxyXG4gIHRpdGxlLFxyXG4gIGNvdmVySW1hZ2UsXHJcbiAgcHVibGlzaGVkRGF0ZSxcclxuICBzdW1tYXJ5LFxyXG4gIG1vcmVBcnRpY2xlc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgcHVibGlzaGVkT24gPSBnZXRMb2NhbGl6ZWREYXRlKHB1Ymxpc2hlZERhdGUpO1xyXG5cclxuICBjb25zdCBzbHVnID0gc2x1Z2lmeSh0aXRsZSkudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBvZ0ltYWdlID0gYCR7c2l0ZURhdGEud2Vic2l0ZVVybH0vYXBpL29nLWltYWdlP3RpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgdGl0bGVcclxuICApfSZkYXRlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHB1Ymxpc2hlZE9uKX1gO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17c3VtbWFyeX1cclxuICAgICAgICBpbWFnZVVybD17b2dJbWFnZX1cclxuICAgICAgICBkYXRlPXtuZXcgRGF0ZShwdWJsaXNoZWREYXRlKS50b0lTT1N0cmluZygpfVxyXG4gICAgICAgIG9nVXJsPXtgLyR7c2x1Z31gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS0xNiBwYi00OCBteC1hdXRvIC1tYi00OCB0ZXh0LWNlbnRlciBiZy1ncmF5LTEwMCBtZDpwYi05NiBtZDotbWItOTYgZGFyazpiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0yIHNwYWNlLXgtMiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+e3B1Ymxpc2hlZE9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDAgdGV4dC0zeGxcIj5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIG10LTIgbGVhZGluZy04IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIHNtOm10LTIgXCI+XHJcbiAgICAgICAgICAgICAgICB7c3VtbWFyeX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBweC02IG14LWF1dG8gbXktMTAgbWQ6cHgtOFwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgcm91bmRlZC14bCBhc3BlY3QtdmlkZW9cIiBzcmM9e2NvdmVySW1hZ2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIHB4LTYgbXgtYXV0byBtYi0yNCBzcGFjZS15LTggbWQ6cHgtOCBmb250LW1lZGl1bSBmb250LXNhbnNcIj5cclxuICAgICAgICAgICAge2NvbnRlbnQubWFwKGJsb2NrID0+IChcclxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtibG9jay5pZH0+e3JlbmRlckJsb2NrcyhibG9jayl9PC9GcmFnbWVudD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTIgYm9yZGVyLXQgZGFyazpib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXktOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj7QkdGD0YHQsNC0INC90LjQudGC0LvRjdC70q/Sr9C0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwIGN1cnNvci1wb2ludGVyIGRhcms6dGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCU0Y3Qu9Cz0Y3RgNGN0L3Qs9Kv0LkgXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEFydGljbGVMaXN0IGFydGljbGVzPXttb3JlQXJ0aWNsZXN9IC8+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwYXRocyA9IFtdO1xyXG4gIGNvbnN0IGRhdGE6IGFueSA9IGF3YWl0IGdldEFsbEFydGljbGVzKHByb2Nlc3MuZW52LkJMT0dfREFUQUJBU0VfSUQpO1xyXG5cclxuICBkYXRhLmZvckVhY2gocmVzdWx0ID0+IHtcclxuICAgIGlmIChyZXN1bHQub2JqZWN0ID09PSAncGFnZScpIHtcclxuICAgICAgcGF0aHMucHVzaCh7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzbHVnOiBzbHVnaWZ5KHJlc3VsdC5wcm9wZXJ0aWVzLnRpdGxlLnRpdGxlWzBdLnBsYWluX3RleHQpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMgOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBhdGhzKSksXHJcbiAgICBmYWxsYmFjazogJ2Jsb2NraW5nJ1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQXJ0aWNsZXMocHJvY2Vzcy5lbnYuQkxPR19EQVRBQkFTRV9JRCk7XHJcblxyXG4gIGNvbnN0IHBhZ2UgPSBnZXRBcnRpY2xlUGFnZShkYXRhLCBzbHVnKTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBcnRpY2xlUGFnZURhdGEocGFnZSwgc2x1ZywgcHJvY2Vzcy5lbnYuQkxPR19EQVRBQkFTRV9JRCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQpKSxcclxuICAgIHJldmFsaWRhdGU6IDMwXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQYWdlO1xyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJMYXlvdXQiLCJyZW5kZXJCbG9ja3MiLCJnZXRMb2NhbGl6ZWREYXRlIiwiQ29udGFpbmVyIiwic2x1Z2lmeSIsIkFydGljbGVMaXN0Iiwic2l0ZURhdGEiLCJBcnRpY2xlUGFnZSIsImNvbnRlbnQiLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJwdWJsaXNoZWREYXRlIiwic3VtbWFyeSIsIm1vcmVBcnRpY2xlcyIsInB1Ymxpc2hlZE9uIiwic2x1ZyIsInRvTG93ZXJDYXNlIiwib2dJbWFnZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIndlYnNpdGVVcmwiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIm9nVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwibWFwIiwiYmxvY2siLCJpZCIsImFydGljbGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n"));

/***/ })

});