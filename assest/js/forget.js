$(document).ready(function () {
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
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');
let input6 = document.getElementById('input6');
let input7 = document.getElementById('input7');
let alert1 = document.getElementById('alert1');
let btn = document.getElementById('form');

btn.addEventListener('click', function (e) {
    if (input1.value === '') {
        e.preventDefault();
        alert1.classList.add('show');
    } 
    else {
        alert1.classList.remove('show');
    }
    if (input2.value === '') {
        e.preventDefault();
        alert1.classList.add('show');
    } 
    else {
        alert1.classList.remove('show');
    }
    if (input3.value === '') {
        e.preventDefault();
        alert1.classList.add('show');
    }
     else {
        alert1.classList.remove('show');
    }
    if (input4.value === '') {
        e.preventDefault();
        alert1.classList.add('show');
    } 
    else {
        alert1.classList.remove('show');
    }
    if (input5.value === '') {
        e.preventDefault();
        alert1.classList.add('show');
    } 
    else {
        alert1.classList.remove('show');
    }
    if (input6.value === '') {
        e.preventDefault();
        alert1.classList.add('show');
    } 
    else {
        alert1.classList.remove('show');
    }
    if (input7.value === '') {
        e.preventDefault();
        alert1.classList.add('show');
    } 
    else {
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
