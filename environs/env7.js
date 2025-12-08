$(".nice-block span").click(function () {

    $(this).parent().toggleClass("open");

    if ($(this).html() == "The door is open!") {
        $(this).html("A closed door.");
    } else {
        $(this).html("The door is open!");
    }

});

$(".nice-block").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
    
});


// $(this).html("Open the door?") saving this line for later as I figure things out