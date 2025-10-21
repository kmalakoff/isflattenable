import assert from 'assert';
import isFlattenable from 'isflattenable';

describe('exports .ts', () => {
  it('exists', () => {
    assert.equal(typeof isFlattenable, 'function');
  });
});
