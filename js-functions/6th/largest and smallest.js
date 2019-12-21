function largest(...args) {
  var largest = args[0];
  for (var i = 0; i < args.length; i++) {
    if (args[i] > largest) {
      largest = args[i];
    }
  }
  return largest
}

function smallest(...args) {
  var smallest = args[0];
  for (var i = 0; i < args.length; i++) {
    if (args[i] > largest) {
      smallest = args[i];
    }
  }
  return smallest
}

console.log(largest(1,5,7,10,8,1000,12,5));
console.log(smallest(1,5,7,10,8,1000,12,5))