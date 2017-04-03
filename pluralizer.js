// Purpose: input noun and value return appropriate string
// Signature: input string and number return string
// Examples:
//    plural(2, "word") -> "2 words"
//    plural(1, "word") -> "1 word"
//    plural(75, "child") -> "75 children"
//    plural(1, "child") -> "1 child"
//    plural(10, "person") -> "10 people"
//    plural(1, "person") -> "1 person"

var plural = function (num, noun) {
  if (noun === "child") {
    if (num === 1) {
      return num +" child"
    }else return num +" children"
  } else if (noun === "person") {
    if (num === 1) {
      return  num +" person"
    }else return  num +" people"
  } else {
    if (num === 1) {
      return num +" "+noun
    } else return num +" "+noun+"s"
   }
  }
