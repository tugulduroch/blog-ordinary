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

/***/ "./components/Category.tsx":
/*!*********************************!*\
  !*** ./components/Category.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Category; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Category(param) {\n    var setSelectedTag = param.setSelectedTag, tag = param.tag, selectedTag = param.selectedTag;\n    var handleTagClick = function(tag) {\n        if (selectedTag === tag) {\n            return setSelectedTag(null);\n        }\n        return setSelectedTag(tag);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: function() {\n            return handleTagClick(tag);\n        },\n        className: \"\".concat(selectedTag === tag && \"ring-2 ring-gray-400 text-gray-700\", \" inline-flex items-center px-6 py-2 uppercase bg-gray-200 rounded cursor-pointer dark:text-gray-100 dark:bg-gray-800 \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"text-xs font-medium uppercase\",\n            children: tag || \"All\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\Category.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, tag, false, {\n        fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\components\\\\Category.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Category;\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFlLFNBQVNBLFFBQVEsQ0FBQyxLQUFvQyxFQUFFO1FBQXBDQyxjQUFjLEdBQWhCLEtBQW9DLENBQWxDQSxjQUFjLEVBQUVDLEdBQUcsR0FBckIsS0FBb0MsQ0FBbEJBLEdBQUcsRUFBRUMsV0FBVyxHQUFsQyxLQUFvQyxDQUFiQSxXQUFXO0lBQ2pFLElBQU1DLGNBQWMsR0FBRyxTQUFDRixHQUFXLEVBQUs7UUFDdEMsSUFBSUMsV0FBVyxLQUFLRCxHQUFHLEVBQUU7WUFDdkIsT0FBT0QsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxPQUFPQSxjQUFjLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQkFDRSw4REFBQ0csS0FBRztRQUVGQyxPQUFPLEVBQUU7bUJBQU1GLGNBQWMsQ0FBQ0YsR0FBRyxDQUFDO1NBQUE7UUFDbENLLFNBQVMsRUFBRSxFQUFDLENBRVgsTUFBcUgsQ0FEcEhKLFdBQVcsS0FBS0QsR0FBRyxJQUFJLG9DQUFvQyxFQUM1RCx1SEFBcUgsQ0FBQztrQkFFdkgsNEVBQUNNLE1BQUk7WUFBQ0QsU0FBUyxFQUFDLCtCQUErQjtzQkFBRUwsR0FBRyxJQUFJLEtBQUs7Ozs7O2dCQUFRO09BTmhFQSxHQUFHOzs7O1lBT0osQ0FDTjtBQUNKLENBQUM7QUFuQnVCRixLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkudHN4P2NmOTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoeyBzZXRTZWxlY3RlZFRhZywgdGFnLCBzZWxlY3RlZFRhZyB9KSB7XHJcbiAgY29uc3QgaGFuZGxlVGFnQ2xpY2sgPSAodGFnOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZFRhZyA9PT0gdGFnKSB7XHJcbiAgICAgIHJldHVybiBzZXRTZWxlY3RlZFRhZyhudWxsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzZXRTZWxlY3RlZFRhZyh0YWcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGtleT17dGFnfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWdDbGljayh0YWcpfVxyXG4gICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgIHNlbGVjdGVkVGFnID09PSB0YWcgJiYgJ3JpbmctMiByaW5nLWdyYXktNDAwIHRleHQtZ3JheS03MDAnXHJcbiAgICAgIH0gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTYgcHktMiB1cHBlcmNhc2UgYmctZ3JheS0yMDAgcm91bmRlZCBjdXJzb3ItcG9pbnRlciBkYXJrOnRleHQtZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCBgfVxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHVwcGVyY2FzZVwiPnt0YWcgfHwgJ0FsbCd9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZFRhZyIsInRhZyIsInNlbGVjdGVkVGFnIiwiaGFuZGxlVGFnQ2xpY2siLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Category.tsx\n"));

/***/ })

});