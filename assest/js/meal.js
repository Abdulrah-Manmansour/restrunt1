
    setTimeout(function(){
        $(".loading").slideUp();
    },800)

//owl coursloe
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:500,
    margin:30,
    responsiveClass:true,
    rtl:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false,
            margin:30,
        },
        1000:{
            items:4,
            nav:false,
            loop:true,
            margin:30,
            
        }
    }
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $("nav").css('box-shadow', '3px 3px 10px black')
    } else {
        $("nav").css('box-shadow', 'none')
    }
});
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

