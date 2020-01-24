function largest(...args) {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  return Math.max.apply(null, args);
}

function smallest(...args) {
  var args = [];
  for (var j = 0; j < arguments.length; j++) {
    args.push(arguments[j]);
  }
  return Math.min.apply(null, args);
}

console.log(largest(1,5,7,10,8,1000,12,5));
console.log(smallest(1,5,7,10,8,1000,12,5));