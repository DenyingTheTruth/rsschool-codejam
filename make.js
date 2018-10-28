module.exports = function make(...args) {
  const func = args.find(e => typeof e === 'function');
  if (func) {
    args.splice(args.indexOf(func), 1);
    return args.reduce(func);
  }

  return make.bind(null, ...args);
};
