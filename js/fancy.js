$(document).ready(function(){
    $('.container').fadeIn("slow");


    //desktop
    $('.desktop-menu-btn').click(function() {
        $('.menu').css("right", "0%").fadeIn("slow");
    });

    $('.menu-top > img').click(function() {
        $('.menu').css("right", "-100%").fadeIn("slow");
    });





    //mobile

    $('.menu-btn').click(function() {
        $('.mobile-menu').fadeIn("slow");
    });

    $('.mobile-menu-top > img').click(function() {
        $('.mobile-menu').fadeOut("slow");
    });

        
});