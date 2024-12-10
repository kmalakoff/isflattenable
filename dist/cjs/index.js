/** Republished from lodash https://github.com/lodash/lodash/blob/master/.internal/isFlattenable.js */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */ "default", {
    enumerable: true,
    get: function() {
        return isFlattenable;
    }
});
var _isarray = /*#__PURE__*/ _interop_require_default(require("isarray"));
var _lodashisarguments = /*#__PURE__*/ _interop_require_default(require("lodash.isarguments"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/** Built-in value reference. */ var spreadableSymbol = typeof Symbol !== 'undefined' ? Symbol.isConcatSpreadable : undefined;
function isFlattenable(value) {
    return (0, _isarray.default)(value) || (0, _lodashisarguments.default)(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { try { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) { exports.default[key] = exports[key]; } } catch (_) {}; module.exports = exports.default; }