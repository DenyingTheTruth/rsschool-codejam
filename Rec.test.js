const assert = require('assert');

Object.freeze(assert);
const recursion = require('./recursion.js');

describe('recursion function', () => {
  it('1', () => {
    const answer = [
      [100],
      [90, 120],
      [70, 99, 110, 130],
    ];
    assert.equal(JSON.stringify(recursion({
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    })), JSON.stringify(answer));
  });
  it('2', () => {
    const answer = [
      [100],
      [91, 11120],
    ];
    assert.equal(JSON.stringify(recursion({
      value: 100,
      left: { value: 91 },
      right: { value: 11120 },
    })), JSON.stringify(answer));
  });
  it('3', () => {
    const answer = [
      [0],
      [1, 2],
      [3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13, 14],
    ];
    assert.equal(JSON.stringify(recursion({
      value: 0,
      left: {
        value: 1,
        left: { value: 3, left: { value: 7 }, right: { value: 8 } },
        right: { value: 4, left: { value: 9 }, right: { value: 10 } },
      },
      right: {
        value: 2,
        left: { value: 5, left: { value: 11 }, right: { value: 12 } },
        right: { value: 6, left: { value: 13 }, right: { value: 14 } },
      },
    })), JSON.stringify(answer));
  });
  it('4', () => {
    const answer = [[0]];
    assert.equal(JSON.stringify(recursion({ value: 0 })), JSON.stringify(answer));
  });
  it('5', () => {
    const answer = [[null]];
    assert.equal(JSON.stringify(recursion({})), JSON.stringify(answer));
  });
});
