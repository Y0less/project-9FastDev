import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { LS_AUTH_KEY, save } from './storage';

const refs = {
  regForm: document.querySelector('.js-reg-form'),
  backdrop: document.querySelector('.js-sign-up-backdrop'),
};

refs.regForm.addEventListener('submit', onRegisterFormSubmit);

async function onRegisterFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const auth = getAuth();
  const user = await registerUser(auth, email, password);
  await updateUserName(name);
  saveAuthInfo(user, name);
  refs.backdrop.style.display = 'none';
  Notify.success('User successfully registered');
}

function showPrivateLinks() {}

function updateUserName(name) {
  const auth = getAuth();
  return updateProfile(auth.currentUser, {
    displayName: name,
  }).catch(error => {
    console.log(error);
  });
}

function registerUser(auth, email, password) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    userCredential => userCredential.user
  );
}

function saveAuthInfo(user, name) {
  const token = user.stsTokenManager.accessToken;
  const email = user.email;
  const authInfo = { token, email, name };
  save(LS_AUTH_KEY, authInfo);
}

export { showPrivateLinks };
