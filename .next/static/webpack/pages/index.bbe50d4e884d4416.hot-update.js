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

/***/ "./components/Carousel.tsx":
/*!*********************************!*\
  !*** ./components/Carousel.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CarouselItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselItem */ \"./components/CarouselItem.tsx\");\n/* harmony import */ var _CarouselIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarouselIndicator */ \"./components/CarouselIndicator.tsx\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Carousel(param) {\n    var width = param.width, height = param.height, items = param.items;\n    var _this = this;\n    var handleNextItemBtn = function handleNextItemBtn() {\n        setActiveIndex(function(prev) {\n            return prev + 1 < items.length ? prev + 1 : prev;\n        });\n    };\n    var handlePrevItemBtn = function handlePrevItemBtn() {\n        setActiveIndex(function(prev) {\n            return prev - 1 >= 0 ? prev - 1 : prev;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeIndex = ref[0], setActiveIndex = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel-container\",\n        children: [\n            activeIndex > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"carousel-btn-switch-card-left carousel-btn-switch-card\",\n                onClick: handlePrevItemBtn,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowBack, {}, void 0, false, {\n                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/Carousel.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/Carousel.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            items === null || items === void 0 ? void 0 : items.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarouselItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    index: index,\n                    activeIndex: activeIndex,\n                    children: item\n                }, index, false, {\n                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/Carousel.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this);\n            }),\n            activeIndex < items.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"carousel-btn-switch-card-right carousel-btn-switch-card\",\n                onClick: handleNextItemBtn,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowBack, {\n                    style: {\n                        transform: \"rotate(180deg)\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/Carousel.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/Carousel.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarouselIndicator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                activeIndex: activeIndex,\n                length: items.length,\n                onSetActiveIndex: function(activeIndex) {\n                    setActiveIndex(activeIndex);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/Carousel.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/Carousel.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Carousel, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUVFO0FBQ1U7QUFFSjtBQVFqQyxTQUFTSyxRQUFRLENBQUMsS0FBdUMsRUFBRTtRQUF2Q0MsS0FBSyxHQUFQLEtBQXVDLENBQXJDQSxLQUFLLEVBQUVDLE1BQU0sR0FBZixLQUF1QyxDQUE5QkEsTUFBTSxFQUFFQyxLQUFLLEdBQXRCLEtBQXVDLENBQXRCQSxLQUFLOztRQUc1Q0MsaUJBQWlCLEdBQTFCLFNBQVNBLGlCQUFpQixHQUFHO1FBQzNCQyxjQUFjLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1lBQ3ZCLE9BQU9BLElBQUksR0FBRyxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksTUFBTSxHQUFHRCxJQUFJLEdBQUcsQ0FBQyxHQUFHQSxJQUFJLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO1FBRVFFLGlCQUFpQixHQUExQixTQUFTQSxpQkFBaUIsR0FBRztRQUMzQkgsY0FBYyxDQUFDLFNBQUNDLElBQUksRUFBSztZQUN2QixPQUFPQSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBR0EsSUFBSSxHQUFHLENBQUMsR0FBR0EsSUFBSSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7SUFaRCxJQUFzQ1YsR0FBbUIsR0FBbkJBLCtDQUFRLENBQVMsQ0FBQyxDQUFDLEVBQWxEYSxXQUFXLEdBQW9CYixHQUFtQixHQUF2QyxFQUFFUyxjQUFjLEdBQUlULEdBQW1CLEdBQXZCO0lBY2xDLHFCQUNFLDhEQUFDYyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvQkFBb0I7O1lBQ2hDRixXQUFXLEdBQUcsQ0FBQyxrQkFDZCw4REFBQ0csUUFBTTtnQkFDTEQsU0FBUyxFQUFDLHdEQUF3RDtnQkFDbEVFLE9BQU8sRUFBRUwsaUJBQWlCOzBCQUUxQiw0RUFBQ1QsMERBQWM7Ozs7d0JBQUc7Ozs7O29CQUNYO1lBRVZJLEtBQUssYUFBTEEsS0FBSyxXQUFLLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsS0FBSyxDQUFFVyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLO3FDQUN0Qiw4REFBQ25CLHFEQUFZO29CQUFhbUIsS0FBSyxFQUFFQSxLQUFLO29CQUFFUCxXQUFXLEVBQUVBLFdBQVc7OEJBQzdETSxJQUFJO21CQURZQyxLQUFLOzs7O3lCQUVUO2FBQ2hCLENBQUM7WUFDRFAsV0FBVyxHQUFHTixLQUFLLENBQUNJLE1BQU0sR0FBRyxDQUFDLGtCQUM3Qiw4REFBQ0ssUUFBTTtnQkFDTEQsU0FBUyxFQUFDLHlEQUF5RDtnQkFDbkVFLE9BQU8sRUFBRVQsaUJBQWlCOzBCQUUxQiw0RUFBQ0wsMERBQWM7b0JBQ2JrQixLQUFLLEVBQUU7d0JBQ0xDLFNBQVMsRUFBRSxnQkFBZ0I7cUJBQzVCOzs7Ozt3QkFDRDs7Ozs7b0JBQ0s7MEJBR1gsOERBQUNwQiwwREFBaUI7Z0JBQ2hCVyxXQUFXLEVBQUVBLFdBQVc7Z0JBQ3hCRixNQUFNLEVBQUVKLEtBQUssQ0FBQ0ksTUFBTTtnQkFDcEJZLGdCQUFnQixFQUFFLFNBQUNWLFdBQVcsRUFBSztvQkFDakNKLGNBQWMsQ0FBQ0ksV0FBVyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Ozs7O29CQUNEOzs7Ozs7WUFDRSxDQUNOO0FBQ0osQ0FBQztHQXBEdUJULFFBQVE7QUFBUkEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsLnRzeD8zZTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENhcm91c2VsSXRlbSBmcm9tICcuL0Nhcm91c2VsSXRlbSc7XG5pbXBvcnQgQ2Fyb3VzZWxJbmRpY2F0b3IgZnJvbSAnLi9DYXJvdXNlbEluZGljYXRvcic7XG5cbmltcG9ydCB7IElvSW9zQXJyb3dCYWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsUHJvcHMge1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBpdGVtczogUmVhY3QuUmVhY3ROb2RlW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHsgd2lkdGgsIGhlaWdodCwgaXRlbXMgfTogQ2Fyb3VzZWxQcm9wcykge1xuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEl0ZW1CdG4oKSB7XG4gICAgc2V0QWN0aXZlSW5kZXgoKHByZXYpID0+IHtcbiAgICAgIHJldHVybiBwcmV2ICsgMSA8IGl0ZW1zLmxlbmd0aCA/IHByZXYgKyAxIDogcHJldjtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZJdGVtQnRuKCkge1xuICAgIHNldEFjdGl2ZUluZGV4KChwcmV2KSA9PiB7XG4gICAgICByZXR1cm4gcHJldiAtIDEgPj0gMCA/IHByZXYgLSAxIDogcHJldjtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cbiAgICAgIHthY3RpdmVJbmRleCA+IDAgJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtYnRuLXN3aXRjaC1jYXJkLWxlZnQgY2Fyb3VzZWwtYnRuLXN3aXRjaC1jYXJkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2SXRlbUJ0bn1cbiAgICAgICAgPlxuICAgICAgICAgIDxJb0lvc0Fycm93QmFjayAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7aXRlbXM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPENhcm91c2VsSXRlbSBrZXk9e2luZGV4fSBpbmRleD17aW5kZXh9IGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH0+XG4gICAgICAgICAge2l0ZW19XG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgKSl9XG4gICAgICB7YWN0aXZlSW5kZXggPCBpdGVtcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWJ0bi1zd2l0Y2gtY2FyZC1yaWdodCBjYXJvdXNlbC1idG4tc3dpdGNoLWNhcmRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRJdGVtQnRufVxuICAgICAgICA+XG4gICAgICAgICAgPElvSW9zQXJyb3dCYWNrXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cblxuICAgICAgPENhcm91c2VsSW5kaWNhdG9yXG4gICAgICAgIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cbiAgICAgICAgbGVuZ3RoPXtpdGVtcy5sZW5ndGh9XG4gICAgICAgIG9uU2V0QWN0aXZlSW5kZXg9eyhhY3RpdmVJbmRleCkgPT4ge1xuICAgICAgICAgIHNldEFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJvdXNlbEl0ZW0iLCJDYXJvdXNlbEluZGljYXRvciIsIklvSW9zQXJyb3dCYWNrIiwiQ2Fyb3VzZWwiLCJ3aWR0aCIsImhlaWdodCIsIml0ZW1zIiwiaGFuZGxlTmV4dEl0ZW1CdG4iLCJzZXRBY3RpdmVJbmRleCIsInByZXYiLCJsZW5ndGgiLCJoYW5kbGVQcmV2SXRlbUJ0biIsImFjdGl2ZUluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInN0eWxlIiwidHJhbnNmb3JtIiwib25TZXRBY3RpdmVJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n"));

/***/ }),

/***/ "./components/CarouselIndicator.tsx":
/*!******************************************!*\
  !*** ./components/CarouselIndicator.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarouselIndicator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction CarouselIndicator(param) {\n    var activeIndex = param.activeIndex, length = param.length, _maxIndicatorVisible = param.maxIndicatorVisible, maxIndicatorVisible = _maxIndicatorVisible === void 0 ? 5 : _maxIndicatorVisible, onSetActiveIndex = param.onSetActiveIndex;\n    var _this = this;\n    var maxIndicator = length > maxIndicatorVisible ? maxIndicatorVisible : length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel-indicator\",\n        children: Array.from(Array(maxIndicator), function(_, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"carousel-indicator-dots\\n            \".concat(activeIndex === index ? \"w-4 opacity-100\" : \"w-2 bg-gray-400\"),\n                onClick: function() {\n                    onSetActiveIndex(index);\n                }\n            }, index, false, {\n                fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/CarouselIndicator.tsx\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/CarouselIndicator.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = CarouselIndicator;\nvar _c;\n$RefreshReg$(_c, \"CarouselIndicator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsSW5kaWNhdG9yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBU1gsU0FBU0MsaUJBQWlCLENBQUMsS0FLakIsRUFBRTtRQUp6QkMsV0FBVyxHQUQ2QixLQUtqQixDQUp2QkEsV0FBVyxFQUNYQyxNQUFNLEdBRmtDLEtBS2pCLENBSHZCQSxNQUFNLHlCQUZrQyxLQUtqQixDQUZ2QkMsbUJBQW1CLEVBQW5CQSxtQkFBbUIscUNBQUcsQ0FBQyx5QkFDdkJDLGdCQUFnQixHQUp3QixLQUtqQixDQUR2QkEsZ0JBQWdCOztJQUVoQixJQUFNQyxZQUFZLEdBQUdILE1BQU0sR0FBR0MsbUJBQW1CLEdBQUdBLG1CQUFtQixHQUFHRCxNQUFNO0lBRWhGLHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvQkFBb0I7a0JBQ2hDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxDQUFDSCxZQUFZLENBQUMsRUFBRSxTQUFDSyxDQUFDLEVBQUVDLEtBQUssRUFBSztZQUM3QyxxQkFDRSw4REFBQ0wsS0FBRztnQkFFRkMsU0FBUyxFQUFFLHVDQUNYLENBQWdFLE9BQTlETixXQUFXLEtBQUtVLEtBQUssR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBRTtnQkFDakVDLE9BQU8sRUFBRSxXQUFNO29CQUNiUixnQkFBZ0IsQ0FBQ08sS0FBSyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7ZUFMSUEsS0FBSzs7OztxQkFNTCxDQUNQO1FBQ0osQ0FBQyxDQUFDOzs7OztZQUNFLENBQ047QUFDSixDQUFDO0FBeEJ1QlgsS0FBQUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWxJbmRpY2F0b3IudHN4P2RmZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEluZGljYXRvclByb3BzIHtcbiAgYWN0aXZlSW5kZXg6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIG1heEluZGljYXRvclZpc2libGU/OiBudW1iZXI7XG4gIG9uU2V0QWN0aXZlSW5kZXg6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbEluZGljYXRvcih7XG4gIGFjdGl2ZUluZGV4LFxuICBsZW5ndGgsXG4gIG1heEluZGljYXRvclZpc2libGUgPSA1LFxuICBvblNldEFjdGl2ZUluZGV4LFxufTogQ2Fyb3VzZWxJbmRpY2F0b3JQcm9wcykge1xuICBjb25zdCBtYXhJbmRpY2F0b3IgPSBsZW5ndGggPiBtYXhJbmRpY2F0b3JWaXNpYmxlID8gbWF4SW5kaWNhdG9yVmlzaWJsZSA6IGxlbmd0aDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9yXCI+XG4gICAgICB7QXJyYXkuZnJvbShBcnJheShtYXhJbmRpY2F0b3IpLCAoXywgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWwtaW5kaWNhdG9yLWRvdHNcbiAgICAgICAgICAgICR7YWN0aXZlSW5kZXggPT09IGluZGV4ID8gJ3ctNCBvcGFjaXR5LTEwMCcgOiAndy0yIGJnLWdyYXktNDAwJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvblNldEFjdGl2ZUluZGV4KGluZGV4KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2Fyb3VzZWxJbmRpY2F0b3IiLCJhY3RpdmVJbmRleCIsImxlbmd0aCIsIm1heEluZGljYXRvclZpc2libGUiLCJvblNldEFjdGl2ZUluZGV4IiwibWF4SW5kaWNhdG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJmcm9tIiwiXyIsImluZGV4Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CarouselIndicator.tsx\n"));

/***/ }),

/***/ "./components/CarouselItem.tsx":
/*!*************************************!*\
  !*** ./components/CarouselItem.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarouselItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CarouselItem(param) {\n    var index = param.index, activeIndex = param.activeIndex, children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), scaled = ref[0], setScaled = ref[1];\n    var offset = (index - activeIndex) / 4;\n    var direction = Math.sign(index - activeIndex);\n    var absOffset = Math.abs(offset);\n    var cssTransformProperties = \"\\n        rotateY(calc(\".concat(offset, \" * 55deg))\\n        scaleY(calc(1 +  \").concat(absOffset, \"  * -0.5))\\n        translateX(calc( \").concat(direction, \" * -3.5rem))\\n        translateZ(calc( \").concat(absOffset, \" * -35rem))\\n        scale(\").concat(scaled && index === activeIndex ? 6.5 : 1, \")\\n       \");\n    var cssOpacity = \"\\n        \".concat(Math.abs(index - activeIndex) >= 3 ? \"0\" : \"1\");\n    var cssDisplay = \"\\n        \".concat(Math.abs(index - activeIndex) >= 3 ? \"none\" : \"block\", \",\\n  \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel-item\",\n        style: {\n            transform: cssTransformProperties,\n            opacity: cssOpacity,\n            display: cssDisplay,\n            zIndex: \"\".concat(scaled ? 100 : 1)\n        },\n        onClick: function() {\n            setScaled(!scaled);\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tuguldur/Desktop/blog-ordinary/components/CarouselItem.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(CarouselItem, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = CarouselItem;\nvar _c;\n$RefreshReg$(_c, \"CarouselItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsSXRlbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFRekIsU0FBU0UsWUFBWSxDQUFDLEtBQTJDLEVBQUU7UUFBM0NDLEtBQUssR0FBUCxLQUEyQyxDQUF6Q0EsS0FBSyxFQUFFQyxXQUFXLEdBQXBCLEtBQTJDLENBQWxDQSxXQUFXLEVBQUVDLFFBQVEsR0FBOUIsS0FBMkMsQ0FBckJBLFFBQVE7O0lBQ2pFLElBQTRCSixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVSxLQUFLLENBQUMsRUFBN0NLLE1BQU0sR0FBZUwsR0FBd0IsR0FBdkMsRUFBRU0sU0FBUyxHQUFJTixHQUF3QixHQUE1QjtJQUV4QixJQUFNTyxNQUFNLEdBQUcsQ0FBQ0wsS0FBSyxHQUFHQyxXQUFXLElBQUksQ0FBQztJQUN4QyxJQUFNSyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDUixLQUFLLEdBQUdDLFdBQVcsQ0FBQztJQUNoRCxJQUFNUSxTQUFTLEdBQUdGLElBQUksQ0FBQ0csR0FBRyxDQUFDTCxNQUFNLENBQUM7SUFFbEMsSUFBTU0sc0JBQXNCLEdBQUcseUJBQ1osQ0FDTUYsTUFBUyxDQURiSixNQUFNLEVBQUMsdUNBQ0wsQ0FBWSxDQUNWQyxNQUFTLENBRFRHLFNBQVMsRUFBQyx1Q0FDWixDQUFZLENBQ1ZBLE1BQVMsQ0FEVEgsU0FBUyxFQUFDLHlDQUNaLENBQVksQ0FDckJILE1BQXlDLENBRDlCTSxTQUFTLEVBQUMsNkJBQ3ZCLENBQTRDLE9BQ25ELENBRFNOLE1BQU0sSUFBSUgsS0FBSyxLQUFLQyxXQUFXLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBQyxZQUNuRCxDQUFDO0lBRU4sSUFBTVcsVUFBVSxHQUFHLFlBQ2IsQ0FBaUQsT0FBL0NMLElBQUksQ0FBQ0csR0FBRyxDQUFDVixLQUFLLEdBQUdDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFFO0lBRXhELElBQU1ZLFVBQVUsR0FBRyxZQUNiLENBQXdELE1BQzlELENBRFFOLElBQUksQ0FBQ0csR0FBRyxDQUFDVixLQUFLLEdBQUdDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsT0FBTyxFQUFDLE9BQzlELENBQUM7SUFFRCxxQkFDRSw4REFBQ2EsS0FBRztRQUNGQyxTQUFTLEVBQUMsZUFBZTtRQUN6QkMsS0FBSyxFQUFFO1lBQ0xDLFNBQVMsRUFBRU4sc0JBQXNCO1lBQ2pDTyxPQUFPLEVBQUVOLFVBQVU7WUFDbkJPLE9BQU8sRUFBRU4sVUFBVTtZQUNuQk8sTUFBTSxFQUFFLEVBQUMsQ0FBbUIsT0FBakJqQixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBRTtTQUM5QjtRQUNEa0IsT0FBTyxFQUFFLFdBQU07WUFDYmpCLFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUMsQ0FBQztRQUNyQixDQUFDO2tCQUVBRCxRQUFROzs7OztZQUNMLENBQ047QUFDSixDQUFDO0dBdEN1QkgsWUFBWTtBQUFaQSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnRzeD8yZDEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUHJvcHMge1xuICBpbmRleDogbnVtYmVyO1xuICBhY3RpdmVJbmRleDogbnVtYmVyO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWxJdGVtKHsgaW5kZXgsIGFjdGl2ZUluZGV4LCBjaGlsZHJlbiB9OiBDYXJkUHJvcHMpIHtcbiAgY29uc3QgW3NjYWxlZCwgc2V0U2NhbGVkXSA9IHVzZVN0YXRlPEJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBvZmZzZXQgPSAoaW5kZXggLSBhY3RpdmVJbmRleCkgLyA0O1xuICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLnNpZ24oaW5kZXggLSBhY3RpdmVJbmRleCk7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG5cbiAgY29uc3QgY3NzVHJhbnNmb3JtUHJvcGVydGllcyA9IGBcbiAgICAgICAgcm90YXRlWShjYWxjKCR7b2Zmc2V0fSAqIDU1ZGVnKSlcbiAgICAgICAgc2NhbGVZKGNhbGMoMSArICAke2Fic09mZnNldH0gICogLTAuNSkpXG4gICAgICAgIHRyYW5zbGF0ZVgoY2FsYyggJHtkaXJlY3Rpb259ICogLTMuNXJlbSkpXG4gICAgICAgIHRyYW5zbGF0ZVooY2FsYyggJHthYnNPZmZzZXR9ICogLTM1cmVtKSlcbiAgICAgICAgc2NhbGUoJHtzY2FsZWQgJiYgaW5kZXggPT09IGFjdGl2ZUluZGV4ID8gNi41IDogMX0pXG4gICAgICAgYDtcblxuICBjb25zdCBjc3NPcGFjaXR5ID0gYFxuICAgICAgICAke01hdGguYWJzKGluZGV4IC0gYWN0aXZlSW5kZXgpID49IDMgPyAnMCcgOiAnMSd9YDtcblxuICBjb25zdCBjc3NEaXNwbGF5ID0gYFxuICAgICAgICAke01hdGguYWJzKGluZGV4IC0gYWN0aXZlSW5kZXgpID49IDMgPyAnbm9uZScgOiAnYmxvY2snfSxcbiAgYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1cIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdHJhbnNmb3JtOiBjc3NUcmFuc2Zvcm1Qcm9wZXJ0aWVzLFxuICAgICAgICBvcGFjaXR5OiBjc3NPcGFjaXR5LFxuICAgICAgICBkaXNwbGF5OiBjc3NEaXNwbGF5LFxuICAgICAgICB6SW5kZXg6IGAke3NjYWxlZCA/IDEwMCA6IDF9YCxcbiAgICAgIH19XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHNldFNjYWxlZCghc2NhbGVkKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2Fyb3VzZWxJdGVtIiwiaW5kZXgiLCJhY3RpdmVJbmRleCIsImNoaWxkcmVuIiwic2NhbGVkIiwic2V0U2NhbGVkIiwib2Zmc2V0IiwiZGlyZWN0aW9uIiwiTWF0aCIsInNpZ24iLCJhYnNPZmZzZXQiLCJhYnMiLCJjc3NUcmFuc2Zvcm1Qcm9wZXJ0aWVzIiwiY3NzT3BhY2l0eSIsImNzc0Rpc3BsYXkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiekluZGV4Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CarouselItem.tsx\n"));

/***/ })

});