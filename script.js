$(document).ready(function() {
    $("#hideButton").on("click", function() {
        $("#visibilityText").hide();
    });

    $("#showButton").on("click", function() {
        $("#visibilityText").show();
    });

    $("#toggleButton").on("click", function() {
        $("#visibilityText").toggle();
    });


     $("#fadeOutButton").on("click", function() {
        $("#fadeImage").fadeOut(600);
    });

    $("#fadeInButton").on("click", function() {
        $("#fadeImage").fadeIn(600);
    });

    $("#fadeToggleButton").on("click", function() {
        $("#fadeImage").fadeToggle(600);
    });


    
    $("#slideUpButton").on("click", function() {
    $("#slidePanel").slideUp(600);
});

$("#slideDownButton").on("click", function() {
    $("#slidePanel").slideDown(600);
});

$("#slideToggleButton").on("click", function() {
    $("#slidePanel").slideToggle(600);
});
});