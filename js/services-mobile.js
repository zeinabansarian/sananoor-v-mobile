document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });

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


const services1 = new Swiper('.services1', {
speed : 1200,
  loop: true,
  autoplay: {
    delay: 3000, 
  },
  effect: 'fade',
});


window.addEventListener("scroll" , function(params) {
  let sec1 = document.querySelector(".swiper-slide-active .overText")
  if (window.pageYOffset>10) {
    sec1.classList.add("activeBef")
  }
  else{
    
    sec1.classList.remove("activeBef")
  }
})