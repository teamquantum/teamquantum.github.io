$(window).scroll(function(){
    $('#header').css({
        'left': $(this).scrollLeft() + 15 
         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
    });
});
