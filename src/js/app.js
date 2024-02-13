// console.log("Zdarova");
new Swiper('.testimonials-slider',{
  navigation: {
    prevEl:'.swiper-button-prev',
    nextEl:'.swiper-button-next'
  },
  pagination:{
    el:'.swiper-pagination',
    clickable:true,
    // dynamicBullets:true,
  },
  //отключаем перетаскивание по нажатию на картинку слайдера
  simulateTouch:true,
  grabCursor:true,
  //data-hash навигация для слайдов в строке
  hashNavigation:{
    watchState:true,
  },
  autoHeight:true,
});