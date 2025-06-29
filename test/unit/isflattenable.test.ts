import assert from 'assert';

// @ts-ignore
import isFlattenable from 'isflattenable';

describe('isflattenable', () => {
  describe('happy path', () => {
    it('should work with sparse arrays', () => {
      assert.ok(isFlattenable([[1, 2, 3], Array(3)]));
    });

    it('should work with extremely large arrays', () => {
      const array = Array(5e5);
      assert.ok(isFlattenable(array));
      assert.ok(isFlattenable([array]));
    });

    it('should work with empty arrays', () => {
      assert.ok(isFlattenable([[], [[]], [[], [[[]]]]]));
    });

    it('should work with nested arrays', () => {
      assert.ok(isFlattenable([1, [2, [3, [4]], 5]]));
    });

    it('should work with arguments', () => {
      // @ts-ignore
      // biome-ignore lint/complexity/noArguments: Apply arguments
      if (typeof arguments !== 'undefined') assert.ok(isFlattenable(arguments));
    });
  });

  describe('unhappy path', () => {
    it('should not work with nothing', () => {
      assert.ok(!isFlattenable(undefined));
    });

    it('should not work with null', () => {
      assert.ok(!isFlattenable(null));
    });

    it('should not work with undefined', () => {
      assert.ok(!isFlattenable(undefined));
    });

    it('should not work with numbers', () => {
      assert.ok(!isFlattenable(10));
    });

    it('should not work with strings', () => {
      assert.ok(!isFlattenable('string'));
    });

    it('should not work with an object', () => {
      assert.ok(!isFlattenable({ 0: 'a' }));
    });
  });
});
