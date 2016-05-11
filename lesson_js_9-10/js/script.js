$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText: ''
    });

    var $menuItem = $('.menu--item');
    $menuItem.hover(function () {
        var $submenu = $(this).find('.submenu');
        $submenu.slideToggle();
    });
    
    var $submenuItem = $('.submenu--item');
    $submenuItem.hover(function () {
        var $submenu2 = $(this).find('.submenu2');
        $submenu2.slideToggle();
    });


    $('#variants, #check1').styler();
    
});