// megamenu
$('.icon-menu-bars').on('click mouseover mouseout', function () {
    $(this).find('.megamenu').toggleClass('active-f');
});
$('.megamenu').on('mouseout', function () {
    $(this).find('.megamenu').removeClass('active-f');
});