const loader = document.querySelector('.loader-container');
const dialog = document.querySelector('dialog');
let state = false;
export default function loadingToogle() {
  // loader.classList.toggle('loader-hidden');
  if (!state) {
    dialog.showModal();
    state = true;
    return;
  }
  if (state) {
    dialog.close();
    state = false;
    return;
  }
}

// console.log('Hello Loader!');

// loadingToogle();
// console.log('loader :>> ', loader);
