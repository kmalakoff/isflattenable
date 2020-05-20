/** Republished from lodash https://github.com/lodash/lodash/blob/master/.internal/isFlattenable.js */

var isArray = require('isarray');
var isArguments = require('lodash.isarguments');

/** Built-in value reference. */
var spreadableSymbol = typeof Symbol !== 'undefined' ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
module.exports = function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
};
