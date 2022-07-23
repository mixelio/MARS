// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const iconMenu = document.querySelector(".menu_icon");
const menuBody = document.querySelector(".burger_menu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



const thumbs = new Swiper('.thumbs', {
  direction: 'horizontal',
  slidesPerView: 3,
});

thumbs.controller.control = swiper;