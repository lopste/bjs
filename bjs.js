window.bjs = function(s) {
  let func = [101, 118, 97, 108];
  return window[(func.map(n => String.fromCharCode(n))).join("")](s);
}
