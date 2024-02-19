/** Republished from lodash https://github.com/lodash/lodash/blob/master/.internal/isFlattenable.js */

import isArray from 'isarray';
import isArguments from 'lodash.isarguments';

/** Built-in value reference. */
const spreadableSymbol = typeof Symbol !== 'undefined' ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
export default function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
