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

const navigationButton = document.getElementById("menu");
const navigationMenu = document.getElementById("navigation-menu");
const navigationButtonOff = document.getElementById("btn-nav-off");
const menuOverlay = document.getElementById("menu-overlay");

function menuToggleListener(target, navigationMenu, overlay) {
  target.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
  });
}
if (navigationMenu) {
  menuToggleListener(navigationButton, navigationMenu, menuOverlay);
  menuToggleListener(navigationButtonOff, navigationMenu, menuOverlay);
  menuToggleListener(menuOverlay, navigationMenu, menuOverlay);
}
