/* burger */

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

  })
})

/* tabs */

const tabsBtn = document.querySelectorAll(".tab-btn");
const tabsItem = document.querySelectorAll(".tab-content");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if ( ! currentBtn.classList.contains('active') ) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItem.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
});


/* swiper */

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});


/* accordion */
new Accordion('.accordion-container');


/* search */

const btnLoop = document.querySelector('.header__link');
const formOpen = document.querySelector('.header__form');
const btnClose = document.querySelector('.loop__close');

btnLoop.addEventListener('click', () => {
  formOpen.classList.add('active');
});

btnClose.addEventListener('click', () => {
  formOpen.classList.remove('active');
});
