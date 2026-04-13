const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

   breakpoints: {
    // when window width is >= 320px
    600: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    800: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});