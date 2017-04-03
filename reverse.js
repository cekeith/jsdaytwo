//Description: input string returns string with 5+ character words displayed in reverse
//Signature: input string returns alternate string
//Examples:
//    reverse("hi there neighbor") -> "hi ereht robhgien"
//    reverse("this is four") -> "this is four"
//    reverse("Five Letter Words") -> "Five retteL sdroW"

var reverse = function(string) {
  var split = string.split(" ");
  var newStr = "";
  var counter = 0;
  while(counter < split.length) {
    if (split[counter].length > 4){
      newStr = newStr + " " + reverseStr(split[counter]);
    }
    else {
      newStr = newStr + " " + split[counter];
    }
    counter = counter + 1;
  }
  return newStr;
  }
var reverseStr = function(string) {
  return string.split("").reverse().join("");
}
