const homeFaci = new Swiper(".homeFaci", {
  // Optional parameters
  loop: true,

  spaceBetween: 35,

  // Navigation arrows
  pagination: {
    el: ".faciPaginag",
    clickable: true,
  },
  navigation: {
    nextEl: ".nextFaci",
    prevEl: ".prevFaci",
  },
  centeredSlides: true,
  slidesPerView: 2,
});
const homeService = new Swiper(".homeService", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  pagination: {
    el: ".homeServicePagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (index < 9) {
        return (
          `<div class="serviceBullet ${className}"> <img src="images/servicePaging-mobile.png" alt=""><span> 0` +
          (index + 1) +
          "</span></div>"
        );
      } else {
        return (
          `<div class="serviceBullet ${className}"> <img src="images/servicePaging-mobile.png" alt=""><span> ` +
          (index + 1) +
          "</span></div>"
        );
      }
    },
  },
  navigation: {
    nextEl: ".homeServiceNext",
    prevEl: ".homeServicePre",
  },

  centeredSlides: true,
  slidesPerView: 1,
});

gsap.registerPlugin(ScrollTrigger) 

gsap.from(".serviceBullet", {
  scrollTrigger: {
     trigger: ".section3",
      start: "top 60%" ,
    },

  y: 50,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
});

let projectBoxes = document.querySelectorAll(".projectSection .projectBox")

projectBoxes.forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
           trigger: element,
            start: "top 60%" ,
            end: "top -20%" ,
            toggleClass: {targets: element, className: "activeProj"},
          },
      

      });
});


                    
const menu = document.getElementById("menu_wrapper")
        body = document.getElementsByTagName('body')[0],
        menu.style.transform = `translateX(${body.clientWidth}px)`
        function openMenu(){
            menu.style.transform = `translateX(0)`
        }
        function closeMenu(){
            menu.style.transform = `translateX(${body.clientWidth}px)`
        }   
       
   
        
    const searchBox = document.getElementById("search_wrapper_body")
        body = document.getElementsByTagName('body')[0],
        searchBox.style.transform = `translateX(${body.clientWidth}px)`
        function openSearch(){
            console.log("sss",searchBox)
            searchBox.style.transform = `translateX(0)`
        }
        function closeSearch(){
            searchBox.style.transform = `translateX(${body.clientWidth}px)`
        }   

