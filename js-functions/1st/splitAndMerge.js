function splitAndMerge(str, sp) {
  var words = str.split(" ");

  var letters = words.map(function(item) {
    return item.split("")
  })
  
  var arrOfLetters = [];
  letters.forEach(function(item) {
    arrOfLetters = arrOfLetters.concat(item)
  })
  
  var result = arrOfLetters.join(sp)

  return result;
}

console.log(splitAndMerge("War never changes", ","));