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
