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

/***/ "./components/ThemeToggler.tsx":
/*!*************************************!*\
  !*** ./components/ThemeToggler.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ThemeToggler = function() {\n    _s();\n    var ref = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)(), theme = ref.theme, setTheme = ref.setTheme;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), mounted = ref1[0], setMounted = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return setMounted(true);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"w-20 h-6 bg-blue-100 mr-5 rounded-md dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none\",\n        onClick: function() {\n            return setTheme(theme === \"light\" ? \"dark\" : \"light\");\n        },\n        \"aria-label\": \"Toggle Dark Mode\",\n        children: theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {\n            className: \"text-black-500 w-5 h-5\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ThemeToggler.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {\n            className: \"text-grey-800 w-5 h-5\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ThemeToggler.tsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\ThemeToggler.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(ThemeToggler, \"uawA/9IC5bnA/VsyC6ITc1JVbcE=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = ThemeToggler;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggler);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggler\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lVG9nZ2xlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBdUM7QUFDSztBQUNpQjtBQUU3RCxJQUFNSyxZQUFZLEdBQUcsV0FBTTs7SUFDekIsSUFBNEJMLEdBQVUsR0FBVkEscURBQVEsRUFBRSxFQUE5Qk0sS0FBSyxHQUFlTixHQUFVLENBQTlCTSxLQUFLLEVBQUVDLFFBQVEsR0FBS1AsR0FBVSxDQUF2Qk8sUUFBUTtJQUN2QixJQUE4Qk4sSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF0Q08sT0FBTyxHQUFnQlAsSUFBZSxHQUEvQixFQUFFUSxVQUFVLEdBQUlSLElBQWUsR0FBbkI7SUFDMUJDLGdEQUFTLENBQUM7ZUFBTU8sVUFBVSxDQUFDLElBQUksQ0FBQztLQUFBLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDRCxPQUFPLEVBQUUsT0FBTyxJQUFJLENBQUM7SUFDMUIscUJBQ0UsOERBQUNFLFFBQU07UUFDTEMsU0FBUyxFQUFDLG1LQUFtSztRQUM3S0MsT0FBTyxFQUFFO21CQUFNTCxRQUFRLENBQUNELEtBQUssS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUFBO1FBQzdETyxZQUFVLEVBQUMsa0JBQWtCO2tCQUU1QlAsS0FBSyxLQUFLLE9BQU8saUJBQ2hCLDhEQUFDSCw4REFBUTtZQUFDUSxTQUFTLEVBQUMsd0JBQXdCOzs7OztpQkFBRyxpQkFFL0MsOERBQUNQLDZEQUFPO1lBQUNPLFNBQVMsRUFBQyx1QkFBdUI7Ozs7O2lCQUFHOzs7OzthQUV4QyxDQUNUO0FBQ0osQ0FBQztHQWxCS04sWUFBWTs7UUFDWUwsaURBQVE7OztBQURoQ0ssS0FBQUEsWUFBWTtBQW9CbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RoZW1lVG9nZ2xlci50c3g/NDM3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9vbkljb24sIFN1bkljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xyXG5cclxuY29uc3QgVGhlbWVUb2dnbGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xyXG4gIGlmICghbW91bnRlZCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTYgYmctYmx1ZS0xMDAgbXItNSByb3VuZGVkLW1kIGRhcms6Ymctc2xhdGUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOnJpbmctMiByaW5nLWJsdWUtNDAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpfVxyXG4gICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIERhcmsgTW9kZVwiXHJcbiAgICA+XHJcbiAgICAgIHt0aGVtZSA9PT0gJ2xpZ2h0JyA/IChcclxuICAgICAgICA8TW9vbkljb24gY2xhc3NOYW1lPVwidGV4dC1ibGFjay01MDAgdy01IGgtNVwiIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFN1bkljb24gY2xhc3NOYW1lPVwidGV4dC1ncmV5LTgwMCB3LTUgaC01XCIgLz5cclxuICAgICAgKX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZXI7Il0sIm5hbWVzIjpbInVzZVRoZW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb29uSWNvbiIsIlN1bkljb24iLCJUaGVtZVRvZ2dsZXIiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ThemeToggler.tsx\n"));

/***/ })

});