// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var topCities = ["Toronto", "Montreal", "Vancouver", "Ottawa", "Halifax"];
for (var i=0; i < topCities.length; i++) {
  switch(i + 1)
  {
  case 1:
  choice = "1st";
  break;
  case 2:
  choice = "2nd";
  break;
  case 3:
  choice = "3rd"
  break;  
  default:
  choice = (i + 1) + "th";
  }

  console.log("My " + choice + " choice is " + topCities[i])
}

