import { save, load, remove } from './storage';

console.log('Hello Header!');

const burgerMenu = document.querySelector('.burger-menu');

const overlay = document.querySelector('.menu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  overlay.classList.toggle('overlay');
});
