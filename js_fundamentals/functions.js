// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numChildren, partnerName, geoLocation, jobTitle){
  console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids.");
}
tellFortune(4, "Rob Ford", "Toronto City Hall", "secretary")
tellFortune(34, "Brendan Eich", "California", "JS developer")
tellFortune(500, "Florence Nightingale", "England", "nurse")


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear){
  currentYear = new Date().getFullYear();
  console.log("You are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1) + " years old.");
}
calculateAge(1983);
calculateAge(1982);
calculateAge(1990);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, perDay){
var totalAmount = Math.round((85 - age) * perDay);
console.log("You will need " + totalAmount + " to last you until the age of 85.");
}

calculateSupply(30, 1000.5);
calculateSupply(80, 100);
calculateSupply(20, 10);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius){
  console.log("The circumference is " + (2 * Math.PI * radius));
}
calcCircumference(1);
calcCircumference(2);
calcCircumference(3000);

function calcArea(radius){
  console.log("The area is " + (Math.PI * Math.pow(radius, 2)));
}
calcArea(1);
calcArea(2);
calcArea(3000);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

function celsiusToFahrenheit(tempInC){
  console.log(tempInC + " degrees C is " + ((tempInC * (9/5)) + 32) + " degrees F.");
}
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(100);

// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function fahrenheitToCelsius(tempInF){
  console.log(tempInF + " degrees F is " + ((tempInF - 32) * (5/9)) + " degrees C.");
}
fahrenheitToCelsius(100);
fahrenheitToCelsius(0);
fahrenheitToCelsius(-32);

