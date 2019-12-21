// var countDown = function(number) {

//   for (var i = number; i !== 0; i--) {
//     setTimeout((function(i_local) {
//       console.log(i + "gdg")
//       return function() {
//         console.log(i_local);
//       }
//     })(i), i*1000);
//   } 
// }

// countDown(20);

var countDown = function(number) {
  var id = setInterval("myFunc_1()", 1000);

  function myFunc_1() {
    var counter = number;
    counter--;
    alert
  }
}