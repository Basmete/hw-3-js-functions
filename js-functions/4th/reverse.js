var sentence = "What if i want it to break";

function reverseWords(str) {
  return str
  .split(" ")
  .map(function(word) {return word.split("").reverse().join("")})
  .join(" ")
}

console.log(reverseWords(sentence));