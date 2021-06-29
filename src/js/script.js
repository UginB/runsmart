let slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 1,
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', ()=> {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', ()=> {
    slider.goTo('next');
});