import './custom-select.js';

const headerBurgerButton = document.querySelector('.header__burger-button');
const headerNav = document.querySelector('.header__nav');

if (headerBurgerButton && headerNav) {
  headerBurgerButton.addEventListener('click', (event) => {
    headerNav.classList.toggle('active');
    event.currentTarget.classList.toggle('active');
  });

  headerNav.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;

    if (isLayout) {
      headerBurgerButton.classList.remove('active');
      event.currentTarget.classList.remove('active');
    }
  });
}

const headerNavMenuItems = document.querySelectorAll('.header__nav-menu-item');

headerNavMenuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    headerNavMenuItems.forEach((item) => {
      if (item === event.currentTarget) {
        item.classList.toggle('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});

////

const codexControlsButtons = document.querySelectorAll('.codex-details__controls-button');

const codexContent = document.querySelector('.codex-details__content');

codexControlsButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    codexControlsButtons.forEach((button) => {
      if (button !== event.currentTarget) button.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    const buttonRules = event.currentTarget.dataset.rules;

    if (buttonRules === 'full') {
      if (codexContent) codexContent.classList.add('full');
    } else {
      if (codexContent) codexContent.classList.remove('full');
    }
  });
});

////

const holidayMenuButtons = document.querySelectorAll('.holidays__menu-button');
const holidayArticles = document.querySelectorAll('.holidays__content-article');
const holidaySliders = document.querySelectorAll('.holidays__content-article-slider');

holidayMenuButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    holidayMenuButtons.forEach((button) => button.classList.remove('active'));
    holidayArticles.forEach((article) => article.classList.remove('active'));
    event.currentTarget.classList.add('active');
    if (holidayArticles[index]) holidayArticles[index].classList.add('active');
  });
});

holidaySliders.forEach((slider) => {
  const swiperEl = slider.querySelector('.swiper');
  const prevEl = slider.querySelector('.holidays__content-article-slider-controls-prev');
  const nextEl = slider.querySelector('.holidays__content-article-slider-controls-next');

  if (swiperEl && prevEl && nextEl) {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: nextEl,
        prevEl: prevEl,
      },
    });
  }
});
