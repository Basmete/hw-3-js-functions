var string = "it will be camel case";

function camelize(str, splitter) {
  return str.split(splitter).map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

console.log(camelize(string, " "));