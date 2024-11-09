const articleSlider = new Swiper('.articleSlider', {
    slidesPerView: 1,
    // loop: true,
  loop : true,
  navigation: {
    nextEl: '.next5',
    prevEl: '.prev5',
  },

});
const blogsearchSlider = new Swiper('.blogsearchSlider', {
    slidesPerView: 1.2,
    // loop: true,
    centeredSlides : true,
  spaceBetween: 18,
  loop : true,
  navigation: {
    nextEl: '.blogNext',
    prevEl: '.blogPrev',
  },

});