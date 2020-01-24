function stringExpansion(str) {
  var string = str.split("");
  var result = [];
  for (var i = 0; i < string.length - 1; i++) {
    if ( isNaN(+string[i]) == false && isNaN(+string[i+1]) == true ) {
      console.log("пара " + string[i]);
      for (j = string[i]; j > 0; j--) {
        result.push(string[i+1]);
      }
    }
  }
  return result.join("");
}

console.log(stringExpansion("3d332f2a"));