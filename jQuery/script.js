$('button').click(function () {
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    $("h1").animate({opacity: .5});
    $("h1").slideUp().slideDown().animate({opacity: .5});
});

$(document).keydown(function (evet) {
    console.log(evet.key);
    $("h2").html(event.key);

})
$(document).on("mouseover", function () {
    $("h1").css("color", "lightblue");
})