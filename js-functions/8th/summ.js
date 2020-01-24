function summ() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  return args.reduce(function(accum, current) {
    return accum + current;
  },0)
}

console.log(summ(1,2,3))
