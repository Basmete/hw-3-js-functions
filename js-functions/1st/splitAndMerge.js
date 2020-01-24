function splitAndMerge(str, sp) {
  return str.split(" ").join('').split('').join(sp);
}

console.log(splitAndMerge("War never changes", ","));