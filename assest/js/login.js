$(document).ready(function(){
    $(window).scroll(function () {
if ($(this).scrollTop() > 20) {
    $("nav").css('box-shadow', '3px 3px 10px black')
} else {
    $("nav").css('box-shadow', 'none')
}
});

});
setTimeout(function(){
    $(".loading").slideUp();
},800)
let btn=document.getElementById('btn');
let input=document.getElementById('input1');
let input2=document.getElementById('input2')
let alert1=document.getElementById('alert1')
btn.addEventListener('click',function(e){
if(input.value ===''){
    e.preventDefault();
    alert1.classList.add('show');
}
else{
    alert1.classList.remove('show');
}
if(input2.value ===''){
    e.preventDefault();
    alert1.classList.add('show');
}
else{
    alert1.classList.remove('show');
}


})
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
