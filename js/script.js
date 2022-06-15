
$(document).ready(function(){
    // Au click sur la div.menu, nous activerons et désactiverons la classe .active pour la nav mais aussi pour la div.menu
    $(".menu").click(function() {
        $(".menu").toggleClass("active");
        $(".nav").toggleClass("active");

        });

setInterval(function(){

    $(".carousel ul").animate({left:"+=100%"},function(){
        
        $(this).find("li:first-child").before($(this).find("li:last-child"));
        $(this).removeAttr('style');

     }); 

    },6000);
    
$("#btnSlidePrev").click(function(){

    $(".carousel ul").animate({left:"-100%"},function(){

        $(this).find("li:first-child").before($(this).find("li:last-child"));
        $(this).removeAttr('style');

    });
});

$("#btnSlideNext").click(function() {

    $(".carousel ul").animate({right:"+100%"},function() {

        $(this).find("li:last-child").before($(this).find("li:first-child"));
        $(this).removeAttr('style');
    
    });
});
}); 


