module.exports = function sumOfOther(arr) {
  return arr.map(elem => arr.reduce((sum, current) => sum + current) - elem);
};
