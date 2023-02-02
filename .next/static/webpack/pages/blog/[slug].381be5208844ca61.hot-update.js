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

/***/ "./components/Socials.tsx":
/*!********************************!*\
  !*** ./components/Socials.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Socials; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var data_siteData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data/siteData */ \"./data/siteData.ts\");\n/* harmony import */ var react_useanimations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-useanimations */ \"./node_modules/react-useanimations/index.js\");\n/* harmony import */ var react_useanimations_lib_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-useanimations/lib/github */ \"./node_modules/react-useanimations/lib/github/index.js\");\n/* harmony import */ var react_useanimations_lib_linkedin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-useanimations/lib/linkedin */ \"./node_modules/react-useanimations/lib/linkedin/index.js\");\n/* harmony import */ var react_useanimations_lib_facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-useanimations/lib/facebook */ \"./node_modules/react-useanimations/lib/facebook/index.js\");\n\n\n\n\n\n\nvar socials = [\n    {\n        name: \"Facebook\",\n        href: data_siteData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].facebook,\n        animation: react_useanimations_lib_facebook__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: \"LinkedIn\",\n        href: data_siteData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].linkedin,\n        animation: react_useanimations_lib_linkedin__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"GitHub\",\n        href: data_siteData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].github,\n        animation: react_useanimations_lib_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n];\nfunction Socials() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center space-x-6 md:order-2 \",\n        children: socials.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: item.href,\n                className: \"transform filter hover:contrast-50\",\n                target: \"_blank\",\n                rel: \"noreferrer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only \",\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\Socials.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_useanimations__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        animation: item.animation,\n                        strokeColor: \"#0ea5e9\",\n                        className: \"dark:stroke-sky-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\Socials.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, item.name, true, {\n                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\Socials.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\Socials.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c = Socials;\nvar _c;\n$RefreshReg$(_c, \"Socials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvY2lhbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUM7QUFFVztBQUNJO0FBQ0k7QUFDQTtBQUV4RCxJQUFNSyxPQUFPLEdBQUc7SUFDZDtRQUNFQyxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsSUFBSSxFQUFFUCw4REFBaUI7UUFDdkJRLFNBQVMsRUFBRUosd0VBQVE7S0FDcEI7SUFDRDtRQUNFRSxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsSUFBSSxFQUFFUCw4REFBaUI7UUFDdkJRLFNBQVMsRUFBRUwsd0VBQVE7S0FDcEI7SUFDRDtRQUNFRyxJQUFJLEVBQUUsUUFBUTtRQUNkQyxJQUFJLEVBQUVQLDREQUFlO1FBQ3JCUSxTQUFTLEVBQUVOLHNFQUFNO0tBQ2xCO0NBQ0Y7QUFFYyxTQUFTTyxPQUFPLEdBQUc7O0lBQ2hDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQywyQ0FBMkM7a0JBQ3ZETixPQUFPLENBQUNPLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTtpQ0FDZiw4REFBQ0MsR0FBQztnQkFFQVAsSUFBSSxFQUFFTSxJQUFJLENBQUNOLElBQUk7Z0JBQ2ZJLFNBQVMsRUFBQyxvQ0FBcUM7Z0JBQy9DSSxNQUFNLEVBQUMsUUFBUTtnQkFDZkMsR0FBRyxFQUFDLFlBQVk7O2tDQUVoQiw4REFBQ0MsTUFBSTt3QkFBQ04sU0FBUyxFQUFDLFVBQVU7a0NBQUVFLElBQUksQ0FBQ1AsSUFBSTs7Ozs7NkJBQVE7a0NBQzdDLDhEQUFDTCwyREFBYTt3QkFBQ08sU0FBUyxFQUFFSyxJQUFJLENBQUNMLFNBQVM7d0JBQUVVLFdBQVcsRUFBQyxTQUFTO3dCQUFDUCxTQUFTLEVBQUMscUJBQXFCOzs7Ozs2QkFBRTs7ZUFQNUZFLElBQUksQ0FBQ1AsSUFBSTs7OztxQkFRWjtTQUNMLENBQUM7Ozs7O1lBQ0UsQ0FDTjtBQUNKLENBQUM7QUFqQnVCRyxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU29jaWFscy50c3g/Y2U2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2l0ZURhdGEgZnJvbSAnZGF0YS9zaXRlRGF0YSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFVzZUFuaW1hdGlvbnMgZnJvbSAncmVhY3QtdXNlYW5pbWF0aW9ucyc7XHJcbmltcG9ydCBnaXRodWIgZnJvbSAncmVhY3QtdXNlYW5pbWF0aW9ucy9saWIvZ2l0aHViJztcclxuaW1wb3J0IGxpbmtlZGluIGZyb20gJ3JlYWN0LXVzZWFuaW1hdGlvbnMvbGliL2xpbmtlZGluJztcclxuaW1wb3J0IGZhY2Vib29rIGZyb20gJ3JlYWN0LXVzZWFuaW1hdGlvbnMvbGliL2ZhY2Vib29rJztcclxuXHJcbmNvbnN0IHNvY2lhbHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZhY2Vib29rJyxcclxuICAgIGhyZWY6IHNpdGVEYXRhLmZhY2Vib29rLFxyXG4gICAgYW5pbWF0aW9uOiBmYWNlYm9va1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpbmtlZEluJyxcclxuICAgIGhyZWY6IHNpdGVEYXRhLmxpbmtlZGluLFxyXG4gICAgYW5pbWF0aW9uOiBsaW5rZWRpblxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dpdEh1YicsXHJcbiAgICBocmVmOiBzaXRlRGF0YS5naXRodWIsXHJcbiAgICBhbmltYXRpb246IGdpdGh1YlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbHMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTYgbWQ6b3JkZXItMiBcIj5cclxuICAgICAge3NvY2lhbHMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zZm9ybSAgZmlsdGVyIGhvdmVyOmNvbnRyYXN0LTUwXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5IFwiPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPFVzZUFuaW1hdGlvbnMgYW5pbWF0aW9uPXtpdGVtLmFuaW1hdGlvbn0gc3Ryb2tlQ29sb3I9XCIjMGVhNWU5XCIgY2xhc3NOYW1lPSdkYXJrOnN0cm9rZS1za3ktNTAwJy8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInNpdGVEYXRhIiwiVXNlQW5pbWF0aW9ucyIsImdpdGh1YiIsImxpbmtlZGluIiwiZmFjZWJvb2siLCJzb2NpYWxzIiwibmFtZSIsImhyZWYiLCJhbmltYXRpb24iLCJTb2NpYWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImEiLCJ0YXJnZXQiLCJyZWwiLCJzcGFuIiwic3Ryb2tlQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Socials.tsx\n"));

/***/ })

});