
// Make a get request to our api route that will return every book
$.get("/api/allItems", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("row");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#well-" + i).append("<h2>" + (i + 1) + ". " + data[i].product + "</h2>");
    $("#well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
    $("#well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
    $("#well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
  }
});
