const burgerBTN = document.querySelector('.burger');

burgerBTN.addEventListener('click', function() {
    burgerBTN.classList.toggle('rotate');
    const aside = document.querySelector('aside');
    aside.classList.toggle('moveLeft');
});



// W JQUERY

// $('.burger').on('click', function(){
//     $(".fas, aside").toggleClass('.show');
// })