$(document).ready(function(){
    $('.container').fadeIn("slow");

    $('.desktop-menu-btn').click(function() {
        $('.menu').css("right", "0%").fadeIn("slow");
    });

    $('.menu-top > img').click(function() {
        $('.menu').css("right", "-100%").fadeIn("slow");
    });

        
});