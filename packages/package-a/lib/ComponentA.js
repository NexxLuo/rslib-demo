"use strict";
var __webpack_require__ = {};
(()=>{
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
(()=>{
    __webpack_require__.d = function(exports1, definition) {
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };
})();
(()=>{
    __webpack_require__.r = function(exports1) {
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    ComponentA: ()=>ComponentA
});
const vue_runtime_esm_js_namespaceObject = require("../../../node_modules/vue/dist/vue.runtime.esm.js");
const dayjs_min_js_namespaceObject = require("../../../node_modules/dayjs/dayjs.min.js");
var dayjs_min_js_default = /*#__PURE__*/ __webpack_require__.n(dayjs_min_js_namespaceObject);
const ComponentA = (0, vue_runtime_esm_js_namespaceObject.defineComponent)({
    render (h) {
        let props = this.$props;
        return 1 === props.b ? /*#__PURE__*/ React.createElement("div", null, dayjs_min_js_default()()) : /*#__PURE__*/ React.createElement("div", null, "34");
    }
});
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, '__esModule', {
    value: true
});
