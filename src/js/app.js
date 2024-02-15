// console.log("Zdarova");
new Swiper('.testimonials-container',{
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
  speed:800,
  // effect:'fade',
  // fadeEffect:{
  //   crossFade:true
  // },
  // autoHeight:true,
});
const menu = document.querySelector('.header-navigation')
const menuBtn = document.querySelector('.header-burger')

const body = document.body;
if(menu && menuBtn){
  menuBtn.addEventListener('click',() => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })
}