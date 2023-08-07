(() => {
  const refs = {
    // openMenuBtn: document.querySelector('[data-open]'),
    closeMenuBtn: document.querySelector('[data-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
  };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
