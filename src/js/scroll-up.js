const btnUpEl = document.querySelector('.btnUp');
btnUpEl.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);
function trackScroll() {
  const offset = window.scrollY;
  const cords = document.documentElement.clientHeight;
  if (offset > cords) {
    btnUpEl.classList.add('show');
  } else {
    btnUpEl.classList.remove('show');
  }
}
function goTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 0);
  }
}
