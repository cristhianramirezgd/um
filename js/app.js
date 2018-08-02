$(document).ready(function () {
    if ($(window).width() <= 900) {
        menuUm();
    }
    });
$(window).resize(function () {
    if ($(window).width() <= 900) {
        menuUm();
    }
    else {
        menuUmDestroy();
    }
});

function menuUm(){
	$( ".icon-menu-bars > i" ).click(function() {
		event.preventDefault();
	  $(".megamenu" ).slideToggle();
	});
	$( ".nav-department" ).click(function() {
		event.preventDefault();
	  $(this).find(".nav-category" ).slideToggle();
	});
}




