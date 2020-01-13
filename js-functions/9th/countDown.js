var countDown = function(number) {

  for (var i = number; i !== 0; i--) {
    setTimeout((function(i_local) {
      console.log(i + "gdg")
      return function() {
        console.log(i_local);
      }
    })(i), (number - i)*1000);
  } 
}

countDown(20);