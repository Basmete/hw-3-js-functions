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

// console.log(summ(1,2,3,5,6))

// function sum(arr, index, acc) {
//   if (!arr.length) return 0;
//   index = index || 0;
//   if (!acc)
//       acc = arr[index];
//   else
//       acc += arr[index];
//   if (index === arr.length - 1)
//       return acc;
//   else
//       return sum(arr, ++index, acc);
// }
// console.log(sum([1, 3, 5, 7]));

function summ(...arr, sum = 0) {
	var sum = sum || 0
	if (arr.length) {
		return summ(arr, sum + arr.pop())
	} else {
		return sum
	}
}

summ([1,5,7,8]);

var sum = 0;
function summ(...arr){
  sum += arr[arr.length]
  if (arr.length) {
    return summ(...arr, sum + arr.pop())
  } else {
    return sum
  }
};

summ(1,5,7,8);