// Purpose: log multiples of 3 as 'fizz', multiples of 5 as 'buzz' and multiples of 3 and 5 as 'fizzbuzz'
// Signature: log numer as string when defined
// Examples:

var fizzbuzz = function() {
  var count = 1
  while (count < 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      console.log("fizzbuzz")
    }else if (count % 3 === 0) {
      console.log("fizz")
    }else if (count % 5 === 0) {
      console.log("buzz")
    }else {
      console.log(count)
    }
    count = count +1
  }
}
