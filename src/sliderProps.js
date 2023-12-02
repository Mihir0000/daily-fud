import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const sliderProps = {
  index1Testmoninal: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: ".owl-next",
      prevEl: ".owl-prev",
    },
  },
  logodata: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      // when window width is >= 1024px
      1000: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  },
  commentSlide: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 1024px
      1000: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
};
