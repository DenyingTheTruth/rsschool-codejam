const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./sumOfOther.js');

describe('sumOfOther function', () => {
  it('1', () => {
    assert.deepEqual(sumOfOther([]), []);
  });
  it('2', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('3', () => {
    assert.deepEqual(sumOfOther([-2, -3, -4, -1]), [-8, -7, -6, -9]);
  });
  it('4', () => {
    assert.deepEqual(sumOfOther([-2, 3, -4, 1]), [0, -5, 2, -3]);
  });
  it('5', () => {
    assert.deepEqual(sumOfOther([1, 2, 3, 4, 5, 6, 7, 8, 20, 32]),
      [87, 86, 85, 84, 83, 82, 81, 80, 68, 56]);
  });
  it('6', () => {
    assert.deepEqual(sumOfOther([0, 0, 0, 0]), [0, 0, 0, 0]);
  });
  it('7', () => {
    assert.deepEqual(sumOfOther([0, -1, 0, 1]), [0, 1, 0, -1]);
  });
  it('8', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1, 8, 7, 6, 9]), [38, 37, 36, 39, 32, 33, 34, 31]);
  });
  it('9', () => {
    assert.deepEqual(sumOfOther(
      [2, 3, 4, 1, 38, 37, 36, 39, 32, 33, 34, 31, 8, 7, 6, 9, 87, 86, 85, 84, 83, 82, 81, 80, 68],
    ),
    [1054, 1053, 1052, 1055, 1018, 1019, 1020, 1017, 1024, 1023, 1022, 1025, 1048,
      1049, 1050, 1047, 969, 970, 971, 972, 973, 974, 975, 976, 988]);
  });
  it('10', () => {
    assert.deepEqual(sumOfOther([-1, 1]), [1, -1]);
  });
});
