let elements = $(".form-value").toArray();
$.map(elements, function(el) {
    let rowWidth = $(el).parent("div").width();
    let elWidth = $(el).parent("div").find(".form-field").width();
    $(el).css("width", rowWidth - elWidth - 14)
})
$(".checkboxes .form-field").click(function() {
    let img = $(this).find("img");
    if (img.attr("src") == "assets/check.png") {
        img.attr("src", "assets/uncheck.png")
    } else {
        img.attr("src", "assets/check.png")
    }
})
$(".javascript").click(function(event) {
    let padding = $(".javascript").offset().left;
    let x = event.clientX - padding;
    $(".polz").css("margin-left", x);

})