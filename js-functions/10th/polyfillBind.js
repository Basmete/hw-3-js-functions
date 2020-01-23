
Function.prototype.myBind = function(context) {
  var func = this
  return function(...args) {
    return func.apply(context, args)
  }
}

function addPropToNumber(number) {
  return this.prop + number;
}


var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound)
bound(1)