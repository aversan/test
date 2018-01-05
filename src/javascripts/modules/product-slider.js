import $ from 'jquery';
import Swiper from 'swiper/dist/js/swiper.js';

export default class ProductSlider {
  constructor(el) {
    this.el = el;

    $(this.el).each(function () {
      const $wrapper = $(this);
      const $swiperContainer = $wrapper.find('.js-swiper-container');
      const $prev = $wrapper.find('.js-swiper-prev');
      const $next = $wrapper.find('.js-swiper-next');
      const $virtualSlides = $wrapper.find('.js-swiper-virtual-slides').children();
      let virtualSlides = [];
      $virtualSlides.each(function(){
        const itemHTML = $(this).prop('outerHTML');
        virtualSlides.push(itemHTML);
      });

      const swiper = new Swiper($swiperContainer, {
        navigation: {
          prevEl: $prev,
          nextEl: $next,
        },
        slidesPerView: 5,
        spaceBetween: 20,
        autoHeight: true,
        observer: true,
        observeParents: true,
        virtual: {
          slides: virtualSlides,
        },
        breakpoints: {
          1360: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 1,
          },
        },
      });
    });
  }
}
