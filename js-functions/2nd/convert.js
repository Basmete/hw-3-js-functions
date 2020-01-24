var obj = {
  name: "John",
  age: 30
};

function convert(obj) {
  return Object.entries(obj);
}

console.log(convert(obj));