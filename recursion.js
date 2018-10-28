module.exports = function recursion(tree) {
  function rec(arr, buf) {
    const node = arr.shift();

    buf.push(node.value);

    if (node.left) { arr.push(node.left); }

    if (node.right) { arr.push(node.right); }

    if (arr.length !== 0) { rec(arr, buf); }

    return buf;
  }

  const result = [];
  const arr = [];
  const buf = [];
  let i = 0;

  arr.push(tree);

  rec(arr, buf);

  while (buf.length !== 0) {
    result.push(buf.splice(0, 2 ** i));
    i += 1;
  }

  return result;
};
