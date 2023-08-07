export function onChangeTheme() {
  if (localStorage.getItem('theme') === 'black-theme') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'black-theme');
  }
  addDarkTheme();
}
function addDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'black-theme') {
      document.querySelector('html').classList.add('black-theme');
    } else {
      document.querySelector('html').classList.remove('black-theme');
    }
  } catch (error) {}
}
addDarkTheme();
const switchEl = document.querySelector('.toggle-switch');
switchEl.addEventListener('change', onChangeTheme);
