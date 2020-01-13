function summ(...args) {
  var sum = 0;
  if (!args.length) {
    return 0;
  } else {
    var sum = args.pop()
    return sum + summ(...args)
  };
} 

console.log(summ(1,2,3,4,5));