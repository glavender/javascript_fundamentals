// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numChildren = 22;
var partner = "Yukihiro Matsumoto";
var yourLocation = "Japan";
var jobTitle = "Rubyist";

document.write("You will be a " + jobTitle + " in " + yourLocation + " and married to " + partner + " with " + numChildren + " children.");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2013;
var birthYear = 1983;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + ".");

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 30;
var maxAge = 85;
var perDay = 1000;
var lifetimeAmount = (maxAge - currentAge) * perDay;
document.write("You will need " + lifetimeAmount + " to last you until the ripe old age of " + maxAge + ".");

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 5;
document.write("The circumference is " + (2 * Math.PI * radius));
document.write("The area is " + (Math.PI * Math.pow(radius, 2)));

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var temp1 = 30;
document.write(temp1 + " degrees C is " + ((temp1 * (9/5)) + 32) + " degrees F.");
var temp2 = 100;
document.write(temp2 + " degrees F is " + ((temp2 - 32) * (5/9)) + " degrees C.");
