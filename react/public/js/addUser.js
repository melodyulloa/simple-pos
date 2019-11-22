// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#register").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newUser = {
    firstName: $("#firstName").val().trim(),
    password: $("#password").val().trim(),
    lastName: $("#lastName").val().trim(),
    email: $("#email").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/addUser", newUser)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#firstName").val("");
  $("#lastName").val("");
  $("#password").val("");
  $("#email").val("");
});
