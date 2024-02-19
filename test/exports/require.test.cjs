const assert = require('assert');
const isFlattenable = require('isflattenable');

describe('exports .cjs', () => {
  it('exists', () => {
    assert.equal(typeof isFlattenable, 'function');
  });
});
