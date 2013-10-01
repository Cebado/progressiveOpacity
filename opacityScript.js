$(window).scroll(function() {
    opacityScroll();
});


function opacityScroll (){

    var topLimit = 180;
    var degradation = 320;

    $('.info').each(function() { // change .info for the name of the class that you want to have this effect
        $(this).css('opacity', 1);
        if($(this).offset().top > $(window).scrollTop() + topLimit){
            $(this).css('opacity',1-($(this).offset().top - $(window).scrollTop())/degradation);
        }
    });
}
