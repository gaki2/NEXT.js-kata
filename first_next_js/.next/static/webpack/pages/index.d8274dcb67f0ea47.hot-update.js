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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Header(param) {\n    var title = param.title;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/Users/gak/next-js-kata/first_next_js/pages/index.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this));\n}\n_c = Header;\nfunction HomePage() {\n    var _this = this;\n    var handleClick = function handleClick() {\n        setLikes(likes + 1);\n    };\n    _s();\n    var names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likes = ref[0], setLikes = ref[1];\n    var valueClick = function(value) {\n        return function(e) {\n            console.log(e);\n            console.log(value);\n        };\n    };\n    var click = function(value) {\n        console.log(value);\n        console.log(1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. 🚀\"\n            }, void 0, false, {\n                fileName: \"/Users/gak/next-js-kata/first_next_js/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map(function(name) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"/Users/gak/next-js-kata/first_next_js/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gak/next-js-kata/first_next_js/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: click(3),\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gak/next-js-kata/first_next_js/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gak/next-js-kata/first_next_js/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n_s(HomePage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7O1NBRXZCQyxNQUFNLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBVkMsS0FBSyxHQUFQLEtBQVMsQ0FBUEEsS0FBSztJQUNyQixNQUFNLDZFQUFFQyxDQUFFO2tCQUFFRCxLQUFLLEdBQUdBLEtBQUssR0FBRyxDQUFlOzs7Ozs7QUFDN0MsQ0FBQztLQUZRRCxNQUFNO0FBSUEsUUFBUSxDQUFDRyxRQUFRLEdBQUcsQ0FBQzs7UUFLekJDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLEdBQUcsQ0FBQztRQUN0QkMsUUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNwQixDQUFDOztJQU5ELEdBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQUM7UUFBQSxDQUFjO1FBQUUsQ0FBYztRQUFFLENBQW1CO0lBQUEsQ0FBQztJQUVuRSxHQUFLLENBQXFCUixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3Qk8sS0FBSyxHQUFjUCxHQUFXLEtBQXZCTSxRQUFRLEdBQUlOLEdBQVc7SUFNckMsR0FBSyxDQUFDUyxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLO1FBQUssTUFBTSxDQUFOLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7WUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDO1lBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLO1FBQ25CLENBQUM7O0lBRUQsR0FBSyxDQUFDSSxLQUFLLEdBQUcsUUFBUSxDQUFQSixLQUFLLEVBQUssQ0FBQztRQUN4QkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUs7UUFDakJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSw2RUFDSEUsQ0FBRzs7d0ZBQ0RkLE1BQU07Z0JBQUNDLEtBQUssRUFBQyxDQUEyQjs7Ozs7O3dGQUN4Q2MsQ0FBRTswQkFDQVIsS0FBSyxDQUFDUyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJO2tDQUNkLE1BQU0sK0RBQUxDLENBQUU7a0NBQWFELElBQUk7dUJBQVhBLElBQUk7Ozs7Ozs7Ozs7O3dGQUdoQkUsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFUCxLQUFLLENBQUMsQ0FBQzs7b0JBQUcsQ0FBTTtvQkFBQ1AsS0FBSztvQkFBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBRy9DLENBQUM7R0E5QnVCSCxRQUFRO01BQVJBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiBcIkRlZmF1bHQgdGl0bGVcIn08L2gxPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IG5hbWVzID0gW1wiQWRhIExvdmVsYWNlXCIsIFwiR3JhY2UgSG9wcGVyXCIsIFwiTWFyZ2FyZXQgSGFtaWx0b25cIl07XG5cbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZSgwKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBzZXRMaWtlcyhsaWtlcyArIDEpO1xuICB9XG5cbiAgY29uc3QgdmFsdWVDbGljayA9ICh2YWx1ZSkgPT4gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgY2xpY2sgPSAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgY29uc29sZS5sb2coMSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciB0aXRsZT1cIkRldmVsb3AuIFByZXZpZXcuIFNoaXAuIPCfmoBcIiAvPlxuICAgICAgPHVsPlxuICAgICAgICB7bmFtZXMubWFwKChuYW1lKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0+e25hbWV9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGljaygzKX0+TGlrZSAoe2xpa2VzfSk8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJIb21lUGFnZSIsImhhbmRsZUNsaWNrIiwic2V0TGlrZXMiLCJsaWtlcyIsIm5hbWVzIiwidmFsdWVDbGljayIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbGljayIsImRpdiIsInVsIiwibWFwIiwibmFtZSIsImxpIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});