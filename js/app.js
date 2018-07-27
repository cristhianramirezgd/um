$(document).ready(function () {
    if ($(window).width() < 900) {
        menuUm();
    }
    });
$(window).resize(function () {
    if ($(window).width() < 900) {
        menuUm();
    }
    else {
        menuUmDestroy();
    }
});

function menuUm(){
	$('.menu-um').css('background','#FC9100');
}
function menuUmDestroy(){
	$('.menu-um').css('background','#f3f4f6');
}


$('.nav-department').on('mouseover', function () {
    $('nav-category ').find('nav-department').css('background','#FC9100');
});



