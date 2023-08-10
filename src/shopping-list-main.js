import './js/header.js';
import './js/support-ukraine.js';

import './js/shopping-list.js';
import './js/theme.js';
import './js/login-modal.js';

const activePageLink = document.querySelector('.active-page');
if (activePageLink) {
  activePageLink.classList.remove('active-page');
}

document.querySelector('.js-shopping-list-page').classList.add('active-page');
