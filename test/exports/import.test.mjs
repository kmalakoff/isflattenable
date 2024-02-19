import assert from 'assert';
import isFlattenable from 'isflattenable';

describe('exports .mjs', () => {
  it('exists', () => {
    assert.equal(typeof isFlattenable, 'function');
  });
});
