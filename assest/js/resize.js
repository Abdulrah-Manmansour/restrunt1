$(document).ready(function(){
    $('header').height($(window).height());
    $(window).resize(function(){
        $("header").height($(window).height());
    });

            });
            setTimeout(function(){
                $(".loading").slideUp();
            },800)           
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
            $(window).scroll(function () {
                if ($(this).scrollTop() > 20) {
                    $("nav").css('box-shadow', '3px 3px 10px black')
                } else {
                    $("nav").css('box-shadow', 'none')
                }
                });        