"use strict";
var __webpack_modules__ = {
    "./ComponentA": function(module) {
        module.exports = require("./ComponentA.js");
    }
};
/************************************************************************/ // The module cache
var __webpack_module_cache__ = {};
// The require function
function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    // Return the exports of the module
    return module.exports;
}
/************************************************************************/ // webpack/runtime/compat_get_default_export
(()=>{
    // getDefaultExport function for compatibility with non-ESM modules
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module['default'];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
// webpack/runtime/define_property_getters
(()=>{
    __webpack_require__.d = function(exports1, definition) {
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
// webpack/runtime/has_own_property
(()=>{
    __webpack_require__.o = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };
})();
// webpack/runtime/make_namespace_object
(()=>{
    // define __esModule on exports
    __webpack_require__.r = function(exports1) {
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
/************************************************************************/ var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* ESM import */ var _ComponentA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./ComponentA");
/* ESM reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* ESM reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ComponentA__WEBPACK_IMPORTED_MODULE_0__)if ("default" !== __WEBPACK_IMPORT_KEY__) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = (function(key) {
    return _ComponentA__WEBPACK_IMPORTED_MODULE_0__[key];
}).bind(0, __WEBPACK_IMPORT_KEY__);
/* ESM reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, '__esModule', {
    value: true
});
