function transform(baseArray) {
  return baseArray.map((item, index) => {
    return function() {
      return baseArray[index];
    }
  })
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50