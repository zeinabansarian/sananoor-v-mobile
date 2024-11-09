const blogsearchSlider = new Swiper('.blogsearchSlider', {
    slidesPerView: 1.2,
    // loop: true,
    centeredSlides : true,
  spaceBetween: 18,
  loop : false,
  navigation: {
    nextEl: '.blogNext',
    prevEl: '.blogPrev',
  },

});