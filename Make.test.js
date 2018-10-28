const assert = require('assert');

Object.freeze(assert);
const make = require('./make.js');

describe('make function', () => {
  it('1', () => {
    assert.deepEqual(make(15)(34, 21, 666)(41)((a, b) => a + b), 777);
  });
  it('2', () => {
    assert.deepEqual(make(15)(34)(41)((a, b) => a + b), 90);
  });
  it('3', () => {
    assert.deepEqual(make(15, 34, 41)((a, b) => a - b), -60);
  });
  it('4', () => {
    assert.deepEqual(make(3)(2)(4)((a, b) => a ** b), 6561);
  });
  it('5', () => {
    assert.deepEqual(make(324)((a, b) => a + b), 324);
  });
});
