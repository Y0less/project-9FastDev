const loader = document.querySelector('dialog');
let state = false;
export default function loadingToogle() {
  if (!state) {
    loader.showModal();
    state = true;
    return;
  }
  if (state) {
    loader.close();
    state = false;
    return;
  }
}
