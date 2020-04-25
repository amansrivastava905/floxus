$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("nav").addClass("active");
    }
    else {
        $("nav").removeClass("active");
    }
});