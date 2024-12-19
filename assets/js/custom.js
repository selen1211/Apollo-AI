"use strict";
// offCanvas mobile menu JS
const toggleMenu = () => {
  const menu = document.querySelector(".off-canvas-menu");
  const overlay = document.querySelector(".overlay");
  menu.classList.toggle("open");
  overlay.classList.toggle("active");
};

window.addEventListener("click", function (event) {
  const menu = document.querySelector(".off-canvas-menu");
  const overlay = document.querySelector(".overlay");
  const menuToggle = document.querySelector(".menu-toggle");
  if (!menu.contains(event.target) && event.target !== menuToggle) {
    menu.classList.remove("open");
    overlay.classList.remove("active");
  }
});

$(".partner-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 800,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});
