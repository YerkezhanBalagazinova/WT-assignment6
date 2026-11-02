$(document).ready(function() {
    $(".question").on("click", function() {
        $(this).next(".answer").slideToggle(400);
    });
});