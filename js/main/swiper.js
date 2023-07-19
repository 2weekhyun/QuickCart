/* swiper */
const swiper = new Swiper(".main_slider", {
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  /* swiper end */
  
  /* Desktop, Tablet brand slider */
  const swiper2 = new Swiper(".DTbrand_slider", {
    loop:false,
    slidesPerView: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  /* Desktop, Tablet brand slider end */


  /* Mobile brand slider */
  var swiper3 = new Swiper(".M_brand_slide", {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 40,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  });
  /* brand slider end */