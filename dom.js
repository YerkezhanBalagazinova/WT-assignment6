$(document).ready(function() {
    let itemNumber = 1;

    $("#addItemButton").on("click", function() {
        $("#itemList").append("<li>Item " + itemNumber + "</li>");
        itemNumber++;
    });

    $("#prependItemButton").on("click", function() {
        $("#itemList").prepend("<li>Item " + itemNumber + "</li>");
        itemNumber++;
    });

    $("#removeItemButton").on("click", function() {
        $("#itemList li").last().remove();
    });

    $("#changeImageButton").on("click", function() {
    $("#attributeImage").attr("src", "cat2.jpeg");
});

$("#changeLinkButton").on("click", function() {
    $("#myLink").attr("href", "https://api.jquery.com/");
    $("#myLink").text("jQuery API Documentation");

});





   $("#nameInput").on("input", function() {
    $("#nameOutput").text("Name: " + $("#nameInput").val());
});

$("#emailInput").on("input", function() {
    $("#emailOutput").text("Email: " + $("#emailInput").val());
});

$("#liveForm").on("submit", function(event) {
    event.preventDefault();
});





});