// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2){
  if (num1 > num2) {
    return num1;
  }else{
    return num2;
  }
}
console.log("The greater number of 1 and 2 is " + greaterNum(1, 2));
console.log("The greater number of 10 and 5 is " + greaterNum(10, 5));


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode){
  if (langCode == "es"){
    return "Hola, mundo";
  }else if (langCode == "eo"){
    return "Saluton, mondo";
  }else if (langCode == "fr"){
    return "Bonjour, monde";
  }else{
    return "Hello, world";
  }
}
console.log(helloWorld("es"));
console.log(helloWorld("eo"));
console.log(helloWorld("fr"));
console.log(helloWorld("something else"));
// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score){
  if (score >= 80){
    return "A";
  }else if (score >= 70){
    return "B";
  }else if (score >= 60){
    return "C";
  }else if (score >= 50){
    return "D";
  }else{
    return "F";
  }
}
console.log(assignGrade(95));
console.log(assignGrade(80));
console.log(assignGrade(79));
console.log(assignGrade(49));

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, numb){
  if (noun == "sheep"){
    return numb + " " + noun;
  }else if (numb == 1){
    return numb + " " + noun;
  }else{
    return numb + " " + noun + "s"
  }
}
console.log(pluralize("cat", 5));
console.log(pluralize("dog", 1));
console.log(pluralize("sheep", 1));
console.log(pluralize("sheep", 3));

