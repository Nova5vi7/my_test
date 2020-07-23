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

document.addEventListener("DOMContentLoaded", () => {
  // слушаем событие загрузки DOM
  const content = document.querySelectorAll(".section-scrollnav"); //
  const container = document.createElement("div");
  container.classList.add("container-links");

  content.forEach((section, i) => {
    const scrollBtn = document.createElement("button");
    const order = i + 1;

    scrollBtn.classList.add("scroll-nav-button");
    scrollBtn.innerHTML = i < 9 ? `0${order}` : order;
    scrollBtn.setAttribute("data-index", i);
    section.setAttribute("data-index", i);
    container.appendChild(scrollBtn);
  });

  container.addEventListener("click", (event) => {
    const dataIndex = event.target.getAttribute("data-index");
    if (!dataIndex) return;

    const prevActive = container.querySelector(".active");

    if (prevActive) {
      prevActive.classList.remove("active");
    }

    event.target.classList.add("active");

    content[dataIndex].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });

  document.body.appendChild(container);

  const scrollHandler = () => {
    const windowCenter = window.scrollY + window.innerHeight / 2;

    content.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.getBoundingClientRect().height;
      const sectionBottom = sectionTop + sectionHeight;

      if (windowCenter > sectionTop && sectionBottom > windowCenter) {
        const currentActive = container.querySelector(".active");
        const currentSectionIndex = section.getAttribute("data-index");
        if (section.classList.contains("dark-scrollnav")) {
          container.classList.add("light");
        } else {
          container.classList.remove("light");
        }

        if (currentActive) {
          currentActive.classList.remove("active");
        }

        container
          .querySelector(`[data-index="${currentSectionIndex}"]`)
          .classList.add("active");
      }
    });
  };

  scrollHandler();
  window.addEventListener("scroll", scrollHandler);
});
