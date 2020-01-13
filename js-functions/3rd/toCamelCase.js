var string = "it will be camel case bsbBBBsbbBBSbb";

function camelize(str, splitter) {
  return str
  .toLowerCase()
  .split(splitter)
  .map(function(word, index)  { return index == 0 ? word : word[0].toUpperCase() + word.slice(1)})
  .join('');
}

console.log(camelize(string, " "));