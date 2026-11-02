$(document).ready(function() {
    $("#animateButton").on("click", function() {
        $("#animationBox").animate({
            width: "150px",
            height: "150px",
            left: "150px",
            top: "60px"
        }, 800);
    });


    $("#sequenceButton").on("click", function() {
        $("#sequenceBox")
            .animate({left: "250px"}, 600)
            .animate({top: "130px"}, 600)
            .animate({width: "40px", height: "40px"}, 600)
            .animate({left: "20px", top: "20px", width: "80px", height: "80px"}, 600);
    });



    $("#combinedButton").on("click", function() {
    $("#combinedBox").animate({
        width: "130px",
        height: "130px",
        left: "140px",
        top: "70px",
        opacity: 0.5
    }, 1000);
});
});