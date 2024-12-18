"use strict";
// The require scope
var __webpack_require__ = {};
/************************************************************************/ // webpack/runtime/define_property_getters
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
    ComponentA: ()=>/* binding */ ComponentA
});
const external_vue_namespaceObject = require("vue");
const ComponentA = (0, external_vue_namespaceObject.defineComponent)({
    render (h) {
        let props = this.$props;
        return 1 === props.b ? /*#__PURE__*/ React.createElement("div", null, "12") : /*#__PURE__*/ React.createElement("div", null, "34");
    }
});
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, '__esModule', {
    value: true
});
