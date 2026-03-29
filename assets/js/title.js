// Array containing "fed" titles to cycle through
var titles = [
  "f",
  "fe",
  "fed",
  "fed ",
  "fed",
  "fe",
  "f"
];

// Function to change the title periodically
function changeTitle() {
  var index = 0; 

  // Speed set to 300ms for a smoother "typing" effect
  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 300); 
}

// Start the animation
changeTitle();
