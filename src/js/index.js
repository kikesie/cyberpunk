import './import/modules';

const mySwiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1300,
  autoplay: {
    delay: 3000,
  },
  flipEffect: {
    slideShadows: false,
  },
})
