
// ****************** Clock Counter **********************//
// THIS IS SUPPOSED TO BE THE TIMER
let seconds = 0;

function incrementSeconds() {
  seconds += 1;
}
setInterval(incrementSeconds, 1000);


// Get the modal
var modal = document.getElementById("modal");
var btn = document.getElementById("submit-button");
var span = document.getElementsByClassName("close")[0]; // Closing X

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById('timer').innerHTML = seconds
}

// Exit On Clicking Closing X
span.onclick = function() {
  modal.style.display = "none";
}

// Exit Modal PopUp On Click Outside Of Modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

