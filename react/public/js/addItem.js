// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-item").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newItem = {
    product: $("#new-item").val().trim(),
    category: $("#category").val().trim(),
    cost: $("#cost").val().trim(),
    quantity: $("#units").val().trim(),
    total_cost: $("#total_cost").val().trim(),
    sales_price: $("#sales_price").val().trim(),
    potential_sales: $("#potential_sales").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newItem)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#new-item").val("");
  $("#category").val("");
  $("#cost").val("");
  $("#units").val("");
  $("#total_cost").val("");
  $("#sales_price").val("");
  $("#potential_sales").val("");
});
