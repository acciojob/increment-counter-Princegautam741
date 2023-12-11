// Get the counter element and button element by their ids
var counterElement = document.getElementById("counter");
var incrementBtn = document.getElementById("incrementBtn");

// Initialize the counter value
var counterValue = 0;

// Add a click event listener to the button
incrementBtn.addEventListener("click", function() {
    // Display an alert with the current counter value before incrementing
    alert("Un-incremented Value: " + counterValue);

    // Increment the counter value
    counterValue++;

    // Update the counter element with the new value
    counterElement.textContent = counterValue;
});
