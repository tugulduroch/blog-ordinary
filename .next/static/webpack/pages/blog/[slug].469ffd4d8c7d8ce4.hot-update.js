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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/Layout */ \"./layouts/Layout.tsx\");\n/* harmony import */ var components_notionBlocks_renderBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notionBlocks/renderBlocks */ \"./components/notionBlocks/renderBlocks.tsx\");\n/* harmony import */ var utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/getLocalizedDate */ \"./utils/getLocalizedDate.ts\");\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Container */ \"./components/Container.tsx\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components_ArticleList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ArticleList */ \"./components/ArticleList.tsx\");\n/* harmony import */ var data_siteData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! data/siteData */ \"./data/siteData.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar ArticlePage = function(param) {\n    var content = param.content, title = param.title, coverImage = param.coverImage, publishedDate = param.publishedDate, summary = param.summary, moreArticles = param.moreArticles;\n    var publishedOn = (0,utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(publishedDate);\n    var slug = slugify__WEBPACK_IMPORTED_MODULE_6___default()(title).toLowerCase();\n    var ogImage = \"\".concat(data_siteData__WEBPACK_IMPORTED_MODULE_8__[\"default\"].websiteUrl, \"/api/og-image?title=\").concat(encodeURIComponent(title), \"&date=\").concat(encodeURIComponent(publishedOn));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(layouts_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n            title: title,\n            description: summary,\n            imageUrl: ogImage,\n            date: new Date(publishedDate).toISOString(),\n            ogUrl: \"/blog/\".concat(slug),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-6 py-16 pb-48 mx-auto -mb-48 text-center bg-gray-100 md:pb-96 md:-mb-96 dark:bg-gray-900\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-3xl mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center mb-2 space-x-2 text-sm text-gray-500\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: publishedOn\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-extrabold tracking-tight text-gray-900 dark:text-gray-100 text-w-4xl sm:text-w-xl\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"max-w-3xl mx-auto mt-3 text-xl leading-8 text-gray-500 dark:text-gray-400 sm:mt-2\",\n                                    children: summary\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-5xl px-6 mx-auto my-16 md:px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"object-cover w-full rounded-xl aspect-video\",\n                            src: coverImage\n                        }, void 0, false, {\n                            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8\",\n                        children: content.map(function(block) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: (0,components_notionBlocks_renderBlocks__WEBPACK_IMPORTED_MODULE_3__.renderBlocks)(block)\n                            }, block.id, false, {\n                                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-12 border-t dark:border-slate-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between my-8\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-3xl font-bold text-gray-900 dark:text-gray-100\",\n                                        children: \"Бусад нийтлэлүүд\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ArticleList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    articles: moreArticles\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = ArticlePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlePage);\nvar _c;\n$RefreshReg$(_c, \"ArticlePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1tzbHVnXS50c3g/YWZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBnZXRBbGxBcnRpY2xlcywgZ2V0QXJ0aWNsZVBhZ2UsIGdldEFydGljbGVQYWdlRGF0YSB9IGZyb20gJ3V0aWxzL25vdGlvbic7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdsYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyByZW5kZXJCbG9ja3MgfSBmcm9tICdjb21wb25lbnRzL25vdGlvbkJsb2Nrcy9yZW5kZXJCbG9ja3MnO1xuaW1wb3J0IGdldExvY2FsaXplZERhdGUgZnJvbSAndXRpbHMvZ2V0TG9jYWxpemVkRGF0ZSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvQ29udGFpbmVyJztcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xuaW1wb3J0IEFydGljbGVMaXN0IGZyb20gJ2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QnO1xuaW1wb3J0IHNpdGVEYXRhIGZyb20gJ2RhdGEvc2l0ZURhdGEnO1xuaW1wb3J0IHBvY2tldCBmcm9tICdyZWFjdC11c2VhbmltYXRpb25zL2xpYi9wb2NrZXQnO1xuXG5jb25zdCBBcnRpY2xlUGFnZSA9ICh7XG4gIGNvbnRlbnQsXG4gIHRpdGxlLFxuICBjb3ZlckltYWdlLFxuICBwdWJsaXNoZWREYXRlLFxuICBzdW1tYXJ5LFxuICBtb3JlQXJ0aWNsZXNcbn0pID0+IHtcbiAgY29uc3QgcHVibGlzaGVkT24gPSBnZXRMb2NhbGl6ZWREYXRlKHB1Ymxpc2hlZERhdGUpO1xuXG4gIGNvbnN0IHNsdWcgPSBzbHVnaWZ5KHRpdGxlKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBvZ0ltYWdlID0gYCR7c2l0ZURhdGEud2Vic2l0ZVVybH0vYXBpL29nLWltYWdlP3RpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgIHRpdGxlXG4gICl9JmRhdGU9JHtlbmNvZGVVUklDb21wb25lbnQocHVibGlzaGVkT24pfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dFxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtzdW1tYXJ5fVxuICAgICAgICBpbWFnZVVybD17b2dJbWFnZX1cbiAgICAgICAgZGF0ZT17bmV3IERhdGUocHVibGlzaGVkRGF0ZSkudG9JU09TdHJpbmcoKX1cbiAgICAgICAgb2dVcmw9e2AvYmxvZy8ke3NsdWd9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktMTYgcGItNDggbXgtYXV0byAtbWItNDggdGV4dC1jZW50ZXIgYmctZ3JheS0xMDAgbWQ6cGItOTYgbWQ6LW1iLTk2IGRhcms6YmctZ3JheS05MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0yIHNwYWNlLXgtMiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPntwdWJsaXNoZWRPbn08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDAgdGV4dC13LTR4bCBzbTp0ZXh0LXcteGxcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIG10LTMgdGV4dC14bCBsZWFkaW5nLTggdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgc206bXQtMlwiPlxuICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgcHgtNiBteC1hdXRvIG15LTE2IG1kOnB4LThcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCByb3VuZGVkLXhsIGFzcGVjdC12aWRlb1wiIHNyYz17Y292ZXJJbWFnZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBweC02IG14LWF1dG8gbWItMjQgc3BhY2UteS04IG1kOnB4LThcIj5cbiAgICAgICAgICAgIHtjb250ZW50Lm1hcChibG9jayA9PiAoXG4gICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2Jsb2NrLmlkfT57cmVuZGVyQmxvY2tzKGJsb2NrKX08L0ZyYWdtZW50PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMiBib3JkZXItdCBkYXJrOmJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG15LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTEwMFwiPtCR0YPRgdCw0LQg0L3QuNC50YLQu9GN0LvSr9Kv0LQ8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBjdXJzb3ItcG9pbnRlciBkYXJrOnRleHQtZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAg0JTRjdC70LPRjdGA0Y3QvdCz0q/QuSBcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEFydGljbGVMaXN0IGFydGljbGVzPXttb3JlQXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGF0aHMgPSBbXTtcbiAgY29uc3QgZGF0YTogYW55ID0gYXdhaXQgZ2V0QWxsQXJ0aWNsZXMocHJvY2Vzcy5lbnYuQkxPR19EQVRBQkFTRV9JRCk7XG5cbiAgZGF0YS5mb3JFYWNoKHJlc3VsdCA9PiB7XG4gICAgaWYgKHJlc3VsdC5vYmplY3QgPT09ICdwYWdlJykge1xuICAgICAgcGF0aHMucHVzaCh7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNsdWc6IHNsdWdpZnkocmVzdWx0LnByb3BlcnRpZXMudGl0bGUudGl0bGVbMF0ucGxhaW5fdGV4dCkudG9Mb3dlckNhc2UoKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMgOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBhdGhzKSksXG4gICAgZmFsbGJhY2s6ICdibG9ja2luZydcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBzbHVnIH0gfSkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQXJ0aWNsZXMocHJvY2Vzcy5lbnYuQkxPR19EQVRBQkFTRV9JRCk7XG5cbiAgY29uc3QgcGFnZSA9IGdldEFydGljbGVQYWdlKGRhdGEsIHNsdWcpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBcnRpY2xlUGFnZURhdGEocGFnZSwgc2x1ZywgcHJvY2Vzcy5lbnYuQkxPR19EQVRBQkFTRV9JRCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQpKSxcbiAgICByZXZhbGlkYXRlOiAzMFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVBhZ2U7XG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJMYXlvdXQiLCJyZW5kZXJCbG9ja3MiLCJnZXRMb2NhbGl6ZWREYXRlIiwiQ29udGFpbmVyIiwic2x1Z2lmeSIsIkFydGljbGVMaXN0Iiwic2l0ZURhdGEiLCJBcnRpY2xlUGFnZSIsImNvbnRlbnQiLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJwdWJsaXNoZWREYXRlIiwic3VtbWFyeSIsIm1vcmVBcnRpY2xlcyIsInB1Ymxpc2hlZE9uIiwic2x1ZyIsInRvTG93ZXJDYXNlIiwib2dJbWFnZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIndlYnNpdGVVcmwiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIm9nVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwibWFwIiwiYmxvY2siLCJpZCIsImFydGljbGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n"));

/***/ })

});