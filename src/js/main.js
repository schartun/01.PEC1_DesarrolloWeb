// Codificación extraida de la documentación de Swipper
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modeles
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
