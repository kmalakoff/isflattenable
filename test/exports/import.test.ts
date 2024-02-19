import assert from 'assert';
// @ts-ignore
import isFlattenable from 'isflattenable';

describe('exports .ts', () => {
  it('exists', () => {
    assert.equal(typeof isFlattenable, 'function');
  });
});
