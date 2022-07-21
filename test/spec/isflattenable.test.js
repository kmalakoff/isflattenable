var assert = require('assert');

var isFlattenable = require('../..');

describe('isflattenable', function () {
  describe('happy path', function () {
    it('should work with sparse arrays', function () {
      assert.ok(isFlattenable([[1, 2, 3], Array(3)]));
    });

    it('should work with extremely large arrays', function () {
      var array = Array(5e5);
      assert.ok(isFlattenable(array));
      assert.ok(isFlattenable([array]));
    });

    it('should work with empty arrays', function () {
      assert.ok(isFlattenable([[], [[]], [[], [[[]]]]]));
    });

    it('should work with nested arrays', function () {
      assert.ok(isFlattenable([1, [2, [3, [4]], 5]]));
    });

    it('should work with arguments', function () {
      assert.ok(isFlattenable(arguments));
    });
  });

  describe('unhappy path', function () {
    it('should not work with nothing', function () {
      assert.ok(!isFlattenable());
    });

    it('should not work with null', function () {
      assert.ok(!isFlattenable(null));
    });

    it('should not work with undefined', function () {
      assert.ok(!isFlattenable(undefined));
    });

    it('should not work with numbers', function () {
      assert.ok(!isFlattenable(10));
    });

    it('should not work with strings', function () {
      assert.ok(!isFlattenable('string'));
    });

    it('should not work with an object', function () {
      assert.ok(!isFlattenable({ 0: 'a' }));
    });
  });
});
