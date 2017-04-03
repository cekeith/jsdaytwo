// Purpose: select the greater value of two numbers
// Signature: input two numbers and return one value
// Examples:
//    greaterNum(3, 4) -> 4
//    greaterNum(-4, 7) -> 7

var greaterNum = function(num1, num2){
  if (num1 >= num2){
    return num1;
  }
  else {
    return num2;
  }
}
