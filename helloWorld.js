// Purpose: print "Hello World" in specified language
// Signature: input language code (string) and return translated phrase as a string
// Examples:
//    helloWorld("en") -> "Hello World!"
//    helloWorld("es") -> "¡Hola Mundo!"
//    helloWorld("fr") -> "Bonjour Monde!"
//    helloWorld("de") -> "Hallo Welt!"
//    helloWorld("ru") -> "Enter a valid language (en, es, fr, de): "

var helloWorld = function(lang) {
  if (lang==="en") {
    return "Hello World!"
  } else if (lang==="es") {
    return "¡Hola Mundo!"
  } else if (lang==="fr") {
      return "Bonjour Monde!"
  } else if (lang==="de") {
      return "Hallo Welt!"
    }else return "Not a valid language"
  }
