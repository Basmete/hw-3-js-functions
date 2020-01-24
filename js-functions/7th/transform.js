function transform(baseArray) {
  return baseArray.map(function(item, index)  {
    return function() {
      return baseArray[index];  //or return item
    }
  })
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());
console.log(newArray[0]());