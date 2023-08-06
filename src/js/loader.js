const dialog = document.querySelector('dialog');
let state = false;
export default function loadingToogle() {
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
