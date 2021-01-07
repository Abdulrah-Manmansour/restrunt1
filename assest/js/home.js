$(document).ready(function () {
   setTimeout(() => {
 $(".loading").slideUp();
 },400)  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $("nav").css('box-shadow', '3px 3px 10px black')
        } else {
            $("nav").css('box-shadow', 'none')
        }
       
    });
     setTimeout(() => {
 $(".loading").slideUp();
 },400)  
    
    

    $(window).scroll(function(){
        if($(this).scrollTop()> 50){
            $(".btn-top button").fadeIn();
        }
        else{
            $(".btn-top button").fadeOut();
        }
    });
    $(".btn-top button").on('click',function(){
        $('html, body').animate({
      scrollTop:0
        },500)
    });
    $(function() {  
        $("body").niceScroll({
          cursorcolor: "#FF275E",
          cursorwidth: "8px",
          cursorborder: "none",
          zindex: "99999"
        });
    });  
    $(".home100").height($(window).height());
    $(window).resize(function () {
        $(".home100").height($(window).height());
    });
    $('.home100').ripples({
        dropRadius: 10,
        perturbance: 0.05,
      }); 

});


