import $ from "jquery";
import "slick-carousel";

$(".section-launching .section-launching__slider-wrap").slick({
  dots: true,
  arrows: false,
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".section-comment .section-comment__slider-wrap").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 784,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
