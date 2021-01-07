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
//vaild form
let btn=document.getElementById('signupbtn');
let form=document.getElementById('form');
let inputs=document.getElementById('input-vaild');
let inputs2=document.getElementById('input-vaild2');
let inputs3=document.getElementById('input-vaild3');
let inputs4=document.getElementById('input-vaild4');
let inputs5=document.getElementById('input-vaild5');
let inputs6=document.getElementById('input-vaild6');
let inputs7=document.getElementById('input-vaild7');
let inputs8=document.getElementById('input-vaild8');
let inputs9=document.getElementById('input-vaild9');
let alert=document.getElementById("alert1");
form.addEventListener('click',function(e){
    if(inputs.value===''){
        e.preventDefault();
    alert.classList.add('show')
    }
    else{
        alert.classList.remove('show')
    }
    if(inputs2.value===''){
        e.preventDefault();
    alert.classList.add('show')
    }
    else{
        alert.classList.remove('show')
    }
    if(inputs3.value===''){
        e.preventDefault();
    alert.classList.add('show')
    }
    else{
        alert.classList.remove('show')
    }
    if(inputs4.value===''){
        e.preventDefault();
    alert.classList.add('show')
    }
    else{
        alert.classList.remove('show')
    }
    if(inputs5.value===''){
        e.preventDefault();
    alert.classList.add('show')
    }
    else{
        alert.classList.remove('show')
    }
    if(inputs6.value===''){
        e.preventDefault();
    alert.classList.add('show')
    }
    else{
        alert.classList.remove('show')
    }
    if(inputs7.value===''){
        e.preventDefault();
    alert.classList.add('show')
    }
    else{
        alert.classList.remove('show')
    }
    if(inputs8.value===''){
        e.preventDefault();
    alert.classList.add('show')
    }
    else{
        alert.classList.remove('show')
    }
    if(inputs9.value===''){
        e.preventDefault();
    alert.classList.add('show')
    }
    else{
        alert.classList.remove('show')
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