document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector('.mobile-menu');
  const openMenuBtn = document.querySelector('.menu-btn');
  const closeMenuBtn = document.querySelector('.mobile-menu-close');

  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) {
    console.warn('Menu elements not found');
    return;
  }

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', toggleMenu);
  }

  // Закриваємо мобільне меню на більших екранах, якщо змінюється орієнтація пристрою
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
});
