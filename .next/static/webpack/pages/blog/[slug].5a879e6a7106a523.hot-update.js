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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/Layout */ \"./layouts/Layout.tsx\");\n/* harmony import */ var components_notionBlocks_renderBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notionBlocks/renderBlocks */ \"./components/notionBlocks/renderBlocks.tsx\");\n/* harmony import */ var utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/getLocalizedDate */ \"./utils/getLocalizedDate.ts\");\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Container */ \"./components/Container.tsx\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components_ArticleList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ArticleList */ \"./components/ArticleList.tsx\");\n/* harmony import */ var data_siteData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! data/siteData */ \"./data/siteData.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar ArticlePage = function(param) {\n    var content = param.content, title = param.title, coverImage = param.coverImage, publishedDate = param.publishedDate, summary = param.summary, moreArticles = param.moreArticles;\n    var publishedOn = (0,utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(publishedDate);\n    var slug = slugify__WEBPACK_IMPORTED_MODULE_6___default()(title).toLowerCase();\n    var ogImage = \"\".concat(data_siteData__WEBPACK_IMPORTED_MODULE_8__[\"default\"].websiteUrl, \"/api/og-image?title=\").concat(encodeURIComponent(title), \"&date=\").concat(encodeURIComponent(publishedOn));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(layouts_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n            title: title,\n            description: summary,\n            imageUrl: ogImage,\n            date: new Date(publishedDate).toISOString(),\n            ogUrl: \"/blog/\".concat(slug),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-6 py-16 pb-48 mx-auto -mb-48 text-center bg-gray-100 md:pb-96 md:-mb-96 dark:bg-gray-900\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-3xl mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center mb-2 space-x-2 text-sm text-gray-500\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: publishedOn\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-extrabold tracking-tight text-gray-900 dark:text-gray-100 text-w-4xl sm:text-xl\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"max-w-3xl mx-auto mt-3 text-xl leading-8 text-gray-500 dark:text-gray-400 sm:mt-4\",\n                                    children: summary\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-5xl px-6 mx-auto my-16 md:px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"object-cover w-full rounded-xl aspect-video\",\n                            src: coverImage\n                        }, void 0, false, {\n                            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8\",\n                        children: content.map(function(block) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: (0,components_notionBlocks_renderBlocks__WEBPACK_IMPORTED_MODULE_3__.renderBlocks)(block)\n                            }, block.id, false, {\n                                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-12 border-t dark:border-slate-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between my-8\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-3xl font-bold text-gray-900 dark:text-gray-100\",\n                                        children: \"Бусад нийтлэлүүд\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ArticleList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    articles: moreArticles\n                                }, void 0, false, {\n                                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/tuguldur/Desktop/blog-ordinary/pages/blog/[slug].tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = ArticlePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlePage);\nvar _c;\n$RefreshReg$(_c, \"ArticlePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1tzbHVnXS50c3g/YWZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBnZXRBbGxBcnRpY2xlcywgZ2V0QXJ0aWNsZVBhZ2UsIGdldEFydGljbGVQYWdlRGF0YSB9IGZyb20gJ3V0aWxzL25vdGlvbic7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdsYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyByZW5kZXJCbG9ja3MgfSBmcm9tICdjb21wb25lbnRzL25vdGlvbkJsb2Nrcy9yZW5kZXJCbG9ja3MnO1xuaW1wb3J0IGdldExvY2FsaXplZERhdGUgZnJvbSAndXRpbHMvZ2V0TG9jYWxpemVkRGF0ZSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvQ29udGFpbmVyJztcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xuaW1wb3J0IEFydGljbGVMaXN0IGZyb20gJ2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QnO1xuaW1wb3J0IHNpdGVEYXRhIGZyb20gJ2RhdGEvc2l0ZURhdGEnO1xuaW1wb3J0IHBvY2tldCBmcm9tICdyZWFjdC11c2VhbmltYXRpb25zL2xpYi9wb2NrZXQnO1xuXG5jb25zdCBBcnRpY2xlUGFnZSA9ICh7XG4gIGNvbnRlbnQsXG4gIHRpdGxlLFxuICBjb3ZlckltYWdlLFxuICBwdWJsaXNoZWREYXRlLFxuICBzdW1tYXJ5LFxuICBtb3JlQXJ0aWNsZXNcbn0pID0+IHtcbiAgY29uc3QgcHVibGlzaGVkT24gPSBnZXRMb2NhbGl6ZWREYXRlKHB1Ymxpc2hlZERhdGUpO1xuXG4gIGNvbnN0IHNsdWcgPSBzbHVnaWZ5KHRpdGxlKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBvZ0ltYWdlID0gYCR7c2l0ZURhdGEud2Vic2l0ZVVybH0vYXBpL29nLWltYWdlP3RpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgIHRpdGxlXG4gICl9JmRhdGU9JHtlbmNvZGVVUklDb21wb25lbnQocHVibGlzaGVkT24pfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dFxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtzdW1tYXJ5fVxuICAgICAgICBpbWFnZVVybD17b2dJbWFnZX1cbiAgICAgICAgZGF0ZT17bmV3IERhdGUocHVibGlzaGVkRGF0ZSkudG9JU09TdHJpbmcoKX1cbiAgICAgICAgb2dVcmw9e2AvYmxvZy8ke3NsdWd9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktMTYgcGItNDggbXgtYXV0byAtbWItNDggdGV4dC1jZW50ZXIgYmctZ3JheS0xMDAgbWQ6cGItOTYgbWQ6LW1iLTk2IGRhcms6YmctZ3JheS05MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0yIHNwYWNlLXgtMiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPntwdWJsaXNoZWRPbn08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDAgdGV4dC13LTR4bCBzbTp0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byBtdC0zIHRleHQteGwgbGVhZGluZy04IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIHNtOm10LTRcIj5cbiAgICAgICAgICAgICAgICB7c3VtbWFyeX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIHB4LTYgbXgtYXV0byBteS0xNiBtZDpweC04XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgcm91bmRlZC14bCBhc3BlY3QtdmlkZW9cIiBzcmM9e2NvdmVySW1hZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgcHgtNiBteC1hdXRvIG1iLTI0IHNwYWNlLXktOCBtZDpweC04XCI+XG4gICAgICAgICAgICB7Y29udGVudC5tYXAoYmxvY2sgPT4gKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtibG9jay5pZH0+e3JlbmRlckJsb2NrcyhibG9jayl9PC9GcmFnbWVudD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTIgYm9yZGVyLXQgZGFyazpib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteS04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj7QkdGD0YHQsNC0INC90LjQudGC0LvRjdC70q/Sr9C0PC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDAgY3Vyc29yLXBvaW50ZXIgZGFyazp0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgINCU0Y3Qu9Cz0Y3RgNGN0L3Qs9Kv0LkgXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxBcnRpY2xlTGlzdCBhcnRpY2xlcz17bW9yZUFydGljbGVzfSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhdGhzID0gW107XG4gIGNvbnN0IGRhdGE6IGFueSA9IGF3YWl0IGdldEFsbEFydGljbGVzKHByb2Nlc3MuZW52LkJMT0dfREFUQUJBU0VfSUQpO1xuXG4gIGRhdGEuZm9yRWFjaChyZXN1bHQgPT4ge1xuICAgIGlmIChyZXN1bHQub2JqZWN0ID09PSAncGFnZScpIHtcbiAgICAgIHBhdGhzLnB1c2goe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBzbHVnaWZ5KHJlc3VsdC5wcm9wZXJ0aWVzLnRpdGxlLnRpdGxlWzBdLnBsYWluX3RleHQpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzIDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwYXRocykpLFxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbEFydGljbGVzKHByb2Nlc3MuZW52LkJMT0dfREFUQUJBU0VfSUQpO1xuXG4gIGNvbnN0IHBhZ2UgPSBnZXRBcnRpY2xlUGFnZShkYXRhLCBzbHVnKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QXJ0aWNsZVBhZ2VEYXRhKHBhZ2UsIHNsdWcsIHByb2Nlc3MuZW52LkJMT0dfREFUQUJBU0VfSUQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSksXG4gICAgcmV2YWxpZGF0ZTogMzBcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQYWdlO1xuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwiTGF5b3V0IiwicmVuZGVyQmxvY2tzIiwiZ2V0TG9jYWxpemVkRGF0ZSIsIkNvbnRhaW5lciIsInNsdWdpZnkiLCJBcnRpY2xlTGlzdCIsInNpdGVEYXRhIiwiQXJ0aWNsZVBhZ2UiLCJjb250ZW50IiwidGl0bGUiLCJjb3ZlckltYWdlIiwicHVibGlzaGVkRGF0ZSIsInN1bW1hcnkiLCJtb3JlQXJ0aWNsZXMiLCJwdWJsaXNoZWRPbiIsInNsdWciLCJ0b0xvd2VyQ2FzZSIsIm9nSW1hZ2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3ZWJzaXRlVXJsIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJvZ1VybCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIm1hcCIsImJsb2NrIiwiaWQiLCJhcnRpY2xlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n"));

/***/ })

});