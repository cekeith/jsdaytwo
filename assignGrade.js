// Purpose: assign a letter to a given number score (0-100)
// Signature: input value between 0 and 100 and return an assigned grade value
// Examples:
//    assignGrade(59) -> "F"
//    assignGrade(65) -> "D"
//    assignGrade(75) -> "C"
//    assignGrade(83) -> "B"
//    assignGrade(98) -> "A"

var assignGrade = function(number){
  if (number < 60){
    return "F";
  }
  else if (number < 70){
    return "D";
  }
  else if (number < 80){
    return "C";
  }
  else if (number < 90){
    return "B";
  }
  else if (number < 100){
    return "A";
  }
  else {
    return "Good for you!";
  }
}
