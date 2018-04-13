
let more = document.querySelectorAll('.services__block__preload a');
Array.prototype.forEach.call(more, function(el, i){
    console.log(el[i] + " + " + i);
    el.addEventListener('click', function(event) {
        console.log(el + " + " + i);
        event.preventDefault();
        let parent = el.closest('.services__block');
        parent.querySelector('.card').style.display = 'none';
        parent.querySelector('.services__block__info').style.display = 'block';
    }, false);
});


let less = document.querySelectorAll('.services__block__info a');
Array.prototype.forEach.call(less, function(el, i){
    console.log(el[i] + " + " + i);
    el.addEventListener('click', function(event) {
        console.log(el + " + " + i);
        event.preventDefault();
        let parent = el.closest('.services__block');
        parent.querySelector('.card').style.display = 'block';
        parent.querySelector('.services__block__info').style.display = 'none';
    }, false);
});


  

$(document).ready(function(){
    $('.about__slider__image').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
      
        adaptiveHeight: true
    });
    $('.comments__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1
      
    });
  });


