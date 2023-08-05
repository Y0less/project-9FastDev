const bodyEl = document.querySelector('body');
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
bodyEl.style.backgroundColor = localStorage.getItem('themeColor');

export function onChangeTheme() {
  const categoriesEl = document.querySelectorAll(
    '.white-theme-color-Allcategories'
  );
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  const mainTextEl = document.querySelectorAll('.white-theme-color-main-text');
  const modalEl = document.querySelectorAll('.white-theme-color-modal');
  const svgEl = document.querySelectorAll('.white-theme-color-svg');
  if (bodyEl.style.backgroundColor === 'black') {
    localStorage.setItem(
      'themeColor',
      (bodyEl.style.backgroundColor = 'white')
    );
    bodyEl.style.backgroundColor = localStorage.getItem('themeColor');
    categoriesEl.forEach(item => {
      item.classList.remove('black-theme');
    });
    mainTextEl.forEach(item => {
      item.classList.remove('black-theme');
    });
    modalEl.forEach(item => {
      item.classList.remove('black-theme');
    });
    svgEl.forEach(item => {
      item.classList.remove('black-theme');
    });
  } else {
    localStorage.setItem(
      'themeColor',
      (bodyEl.style.backgroundColor = 'black')
    );
    bodyEl.style.backgroundColor = localStorage.getItem('themeColor');
    categoriesEl.forEach(item => {
      item.classList.add('black-theme');
    });
    mainTextEl.forEach(item => {
      item.classList.add('black-theme');
    });
    modalEl.forEach(item => {
      item.classList.add('black-theme');
    });
    svgEl.forEach(item => {
      item.classList.add('black-theme');
    });
  }
}
