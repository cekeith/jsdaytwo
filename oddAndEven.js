// Purpose: print out numbers 1-15, adding 'odd' if odd and 'even' if even
// Signature: no args or return

var oddAndEven = function(){
  var count = 1;
  while (count < 16){
    if (count % 2 === 0){
      console.log(count + " is even");
    }
    else {
      console.log(count + " is odd");
    }
    count = count + 1;
  }
}
